import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";

/**
 * POST /api/grooming-school
 *
 * Training: Authentication & Route Protection — Explicit Access Policy Declaration
 * WHY: Every route must explicitly document its access policy. This endpoint is
 * intentionally public (Level 0) but with defense-in-depth (Pattern C rate limiting).
 *
 * ACCESS POLICY:
 * - Level: Public (Level 0 - no authentication required)
 * - Defense: Rate limiting (10 req/min per IP)
 * - Why public: Form submissions from grooming school applicants
 * - Why rate limited: Prevent spam and DoS attacks against the application system
 *
 * Accepts grooming school application form data, sends an email
 * notification to the business, and returns { success: true }.
 *
 * SMTP is configured via environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
 *
 * If SMTP is not configured, the data is logged to the server console
 * as a fallback so no submission is ever silently lost.
 *
 * Error Handling Strategy:
 * - Rate limiting rejects abusive clients (defense-in-depth)
 * - Guard clauses prevent processing invalid data (fail fast)
 * - Specific error messages guide debugging
 * - Separate handling for SMTP misconfiguration vs runtime errors
 * - All errors logged with context for server-side troubleshooting
 */

const RECIPIENT_EMAIL = "galleria@thedoghouseps.com";

interface GroomingSchoolPayload {
  program: string;
  fullName: string;
  email: string;
  phone: string;
  format: string;
  motivation: string;
  animalComfort: number;
  priorExperience: string;
  techniquesInterest: string;
  careerGoals: string;
  programGoals: string;
  allergies: string;
  howHeard: string;
}

/**
 * Training: Input Validation - WHY validate at request boundary?
 *
 * Invalid data entering the system causes cascading failures:
 * - Missing names break email subject lines
 * - Invalid program names confuse recipient
 * - Invalid email causes SMTP rejection
 * - Invalid animalComfort rating (not 1-5) produces nonsensical output
 *
 * Validating FIRST (guard clauses) means we fail fast with clear
 * error messages, before touching SMTP or external services.
 */
function validateGroomingSchoolPayload(body: unknown): { valid: boolean; error?: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body must be a JSON object" };
  }

  const payload = body as Partial<GroomingSchoolPayload>;

  // Training: Guard clause for required strings - WHY check type AND length?
  // A string could exist but be empty (""). We want to catch both missing
  // and empty-string cases. Length validation prevents edge cases like
  // a name being a single space character.
  const requiredStringFields = [
    { field: "program", min: 1, max: 100 },
    { field: "fullName", min: 2, max: 100 },
    { field: "email", min: 5, max: 254 }, // RFC 5321
    { field: "phone", min: 10, max: 20 },
    { field: "format", min: 1, max: 50 }, // e.g., "In-Person", "Online"
  ];

  for (const { field, min, max } of requiredStringFields) {
    const value = (payload as Record<string, unknown>)[field];
    if (!value || typeof value !== "string" || value.trim().length === 0) {
      return { valid: false, error: `${field} is required and must be a non-empty string` };
    }
    if (value.length < min || value.length > max) {
      return { valid: false, error: `${field} must be between ${min} and ${max} characters` };
    }
  }

  // Training: Guard clause for animalComfort range - WHY use specific range?
  // animalComfort is a 1-5 scale. Allowing 0, -1, or 100 produces garbage
  // in the email output. This guard clause enforces business logic.
  if (typeof payload.animalComfort !== "number" || payload.animalComfort < 1 || payload.animalComfort > 5) {
    return { valid: false, error: "animalComfort must be a number between 1 and 5" };
  }

  // Training: Guard clause for required long-form answers - WHY different validation?
  // motivation, priorExperience, etc. are answers to open-ended questions.
  // They should be non-empty but can be longer. We validate minimum length
  // (at least they tried) but allow substantial responses (up to 5000 chars).
  const requiredTextFields = [
    { field: "motivation", min: 10, max: 5000 },
    { field: "priorExperience", min: 1, max: 5000 },
    { field: "techniquesInterest", min: 1, max: 5000 },
    { field: "careerGoals", min: 1, max: 5000 },
    { field: "programGoals", min: 1, max: 5000 },
  ];

  for (const { field, min, max } of requiredTextFields) {
    const value = (payload as Record<string, unknown>)[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return { valid: false, error: `${field} is required` };
    }
    if (value.length < min) {
      return { valid: false, error: `${field} must be at least ${min} characters` };
    }
    if (value.length > max) {
      return { valid: false, error: `${field} must not exceed ${max} characters` };
    }
  }

  // Training: Guard clause for optional fields - WHY allow allergies to be optional?
  // Some applicants might not have allergies. We allow empty string but still
  // validate max length to prevent abuse (very long fake data).
  const optionalFields = [
    { field: "allergies", max: 1000 },
    { field: "howHeard", max: 500 },
  ];

  for (const { field, max } of optionalFields) {
    const value = (payload as Record<string, unknown>)[field];
    if (value && typeof value === "string" && value.length > max) {
      return { valid: false, error: `${field} must not exceed ${max} characters` };
    }
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  let rawBody: unknown;

  try {
    // Training: Route Protection — Rate limiting guards the endpoint
    // WHY: This is a public form endpoint accepting grooming school applications.
    // Without rate limiting, automated tools could spam thousands of fake applications,
    // flooding the inbox and wasting staff time. Rate limiting is Pattern C defense.
    //
    // Limit: 10 requests per minute per IP. Legitimate applicants submit once; this
    // still allows multiple attempts from the same household but blocks rapid-fire spam.
    const clientIp = getClientIp(request);
    const isBlocked = isRateLimited(clientIp, 10, 60000); // 10 req/min

    if (isBlocked) {
      console.warn("[grooming-school] Rate limit exceeded for IP:", clientIp);
      return NextResponse.json(
        {
          success: false,
          error: "Too many application submissions. Please try again in a few moments.",
        },
        { status: 429 } // 429 Too Many Requests is the correct HTTP status
      );
    }

    // Training: Guard clause for JSON parsing - WHY catch parse errors separately?
    // If request.json() fails, we want to tell the client "invalid JSON" not a
    // generic 500 error. This helps frontend developers debug faster.
    try {
      rawBody = await request.json();
    } catch (parseError) {
      console.error("[grooming-school] JSON parse error:", parseError);
      return NextResponse.json(
        { success: false, error: "Request body must be valid JSON" },
        { status: 400 } // 400 Bad Request for malformed input
      );
    }

    // Training: Guard clause for payload validation - WHY check before processing?
    // Invalid input = wasted work. Validate first, then proceed. This pattern
    // prevents null reference errors deep inside email composition logic.
    const validation = validateGroomingSchoolPayload(rawBody);
    if (!validation.valid) {
      console.warn("[grooming-school] Validation failed:", validation.error);
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 } // 400 Bad Request for validation failure
      );
    }

    // At this point we KNOW rawBody is valid, so we can safely cast
    const body = rawBody as GroomingSchoolPayload;

    const subject = `New Grooming School Application - ${body.program} - ${body.fullName}`;

    const textBody = [
      `New Grooming School Application`,
      `================================`,
      ``,
      `Program: ${body.program}`,
      `Preferred Format: ${body.format}`,
      ``,
      `--- Applicant ---`,
      `Name: ${body.fullName}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      ``,
      `Animal Comfort Level: ${body.animalComfort}/5`,
      ``,
      `Motivation:`,
      body.motivation,
      ``,
      `Prior Experience:`,
      body.priorExperience,
      ``,
      `Techniques/Skills Interest:`,
      body.techniquesInterest,
      ``,
      `Career Goals:`,
      body.careerGoals,
      ``,
      `Program Goals:`,
      body.programGoals,
      ``,
      `Allergies/Conditions:`,
      body.allergies || "(None reported)",
      ``,
      `How they heard about us: ${body.howHeard || "(Not specified)"}`,
    ].join("\n");

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "noreply@thedoghouseps.com";

    // Training: Guard clause for SMTP configuration - WHY guard here?
    // If SMTP config is missing, sendMail() would throw an error. This pattern
    // lets us handle misconfiguration gracefully with fallback logging.
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort) || 587,
          secure: Number(smtpPort) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // Training: Timeout for email sending - WHY add explicit timeout?
        // External services can hang. Without a timeout, the request might
        // hold resources indefinitely. 30 seconds is generous for email.
        await Promise.race([
          transporter.sendMail({
            from: smtpFrom,
            to: RECIPIENT_EMAIL,
            subject,
            text: textBody,
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Email sending timeout after 30s")), 30000)
          ),
        ]);

        console.log(`[grooming-school] Email sent to ${RECIPIENT_EMAIL} for ${body.fullName}`);
      } catch (emailError) {
        // Training: Catch specific email errors - WHY not just rethrow?
        // Different email failures have different causes (invalid credentials,
        // network timeout, recipient rejected). Logging the specific error helps
        // operators debug SMTP issues. We rethrow because this is a critical failure.
        console.error(`[grooming-school] Email sending failed to ${RECIPIENT_EMAIL}:`, emailError);
        throw emailError;
      }
    } else {
      // Training: Fallback logging for misconfiguration - WHY log instead of error?
      // SMTP being missing is not a request error—it's a configuration issue on
      // the server side. We log it as a warning so data isn't lost, but return
      // success to the client (they aren't at fault).
      console.warn("[grooming-school] SMTP not configured. Logging submission to console:");
      console.log("TO:", RECIPIENT_EMAIL);
      console.log("SUBJECT:", subject);
      console.log("BODY:\n", textBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    // Training: Error classification - WHY log before returning?
    // Logging helps us see production issues that clients experience. The client
    // gets a safe error message, but we log the real error for debugging.
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[grooming-school] Unexpected error processing submission:", {
      error: errorMessage,
      timestamp: new Date().toISOString(),
      // Don't log raw body in production (PII), but do log validation details
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    });

    return NextResponse.json(
      { success: false, error: "Failed to process grooming school application. Please try again." },
      { status: 500 } // 500 Internal Server Error for unexpected failures
    );
  }
}
