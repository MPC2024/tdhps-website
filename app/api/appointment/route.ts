import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/appointment
 *
 * Accepts appointment form data, sends an email notification to the
 * correct location email, and returns { success: true } on success.
 *
 * SMTP is configured via environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
 *
 * If SMTP is not configured, the data is logged to the server console
 * as a fallback so no submission is ever silently lost.
 *
 * Error Handling Strategy:
 * - Guard clauses prevent processing invalid data (fail fast)
 * - Specific error messages guide debugging
 * - All errors logged for server-side troubleshooting
 * - Client receives appropriate HTTP status codes
 */

const LOCATION_EMAILS: Record<string, string> = {
  galleria: "galleria@thedoghouseps.com",
  memorial: "memorial@thedoghouseps.com",
  pearland: "pearland@thedoghouseps.com",
};

interface PetPayload {
  name: string;
  species: string;
  breed: string;
  sex: string;
  color: string;
  weight: string;
  dob: string;
  vetClinic: string;
  vetPhone: string;
  boarding: string;
  grooming: string;
  additionalNailFile: boolean;
  additionalTeethBrush: boolean;
  appointmentDate: string;
  checkOutDate: string;
  notes: string;
}

interface AppointmentPayload {
  customerType: string;
  location: string;
  firstName: string;
  lastName: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  cellPhone: string;
  ecName: string;
  ecEmail: string;
  ecPhone: string;
  hearAbout: string;
  pets: PetPayload[];
}

/**
 * Training: Input Validation - WHY validate at request boundary?
 *
 * Invalid data entering the system causes cascading failures:
 * - Missing names break email subject lines
 * - Empty pets arrays waste email notifications
 * - Invalid emails bounce from SMTP
 *
 * Validating FIRST (guard clauses) means we fail fast with clear
 * error messages, before touching database or external services.
 */
function validateAppointmentPayload(body: unknown): { valid: boolean; error?: string } {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Request body must be a JSON object" };
  }

  const payload = body as Partial<AppointmentPayload>;

  // Guard clause: required string fields
  const requiredStringFields = [
    { field: "firstName", min: 1, max: 100 },
    { field: "lastName", min: 1, max: 100 },
    { field: "email", min: 5, max: 254 }, // RFC 5321
    { field: "cellPhone", min: 10, max: 20 },
    { field: "location", min: 1, max: 50 },
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

  // Guard clause: customer type must be 'new' or 'existing'
  if (!payload.customerType || !["new", "existing"].includes(payload.customerType)) {
    return { valid: false, error: "customerType must be 'new' or 'existing'" };
  }

  // Guard clause: address fields required
  const addressFields = ["street", "city", "state", "zip"];
  for (const field of addressFields) {
    const value = (payload as Record<string, unknown>)[field];
    if (!value || typeof value !== "string" || value.trim().length === 0) {
      return { valid: false, error: `Address field '${field}' is required` };
    }
  }

  // Guard clause: emergency contact required
  if (!payload.ecName || typeof payload.ecName !== "string" || payload.ecName.trim().length === 0) {
    return { valid: false, error: "Emergency contact name is required" };
  }
  if (!payload.ecEmail || typeof payload.ecEmail !== "string" || payload.ecEmail.trim().length === 0) {
    return { valid: false, error: "Emergency contact email is required" };
  }
  if (!payload.ecPhone || typeof payload.ecPhone !== "string" || payload.ecPhone.trim().length === 0) {
    return { valid: false, error: "Emergency contact phone is required" };
  }

  // Guard clause: at least one pet must be present
  if (!Array.isArray(payload.pets) || payload.pets.length === 0) {
    return { valid: false, error: "At least one pet is required for appointment request" };
  }

  // Guard clause: each pet must have required fields
  for (let i = 0; i < payload.pets.length; i++) {
    const pet = payload.pets[i];
    const petRequiredFields = ["name", "species", "breed", "appointmentDate"];
    for (const field of petRequiredFields) {
      if (!pet || !pet[field as keyof PetPayload] || typeof pet[field as keyof PetPayload] !== "string") {
        return { valid: false, error: `Pet #${i + 1} is missing required field: ${field}` };
      }
    }
  }

  return { valid: true };
}

function formatPets(pets: PetPayload[]): string {
  return pets
    .map((pet, i) => {
      const label = i === 0 ? "Pet" : `Pet #${i + 1}`;
      const services: string[] = [];
      if (pet.boarding && pet.boarding !== "none") services.push(`Boarding: ${pet.boarding}`);
      if (pet.grooming) services.push(`Grooming: ${pet.grooming}`);
      if (pet.additionalNailFile) services.push("Nail File");
      if (pet.additionalTeethBrush) services.push("Teeth Brush");

      return [
        `--- ${label}: ${pet.name} ---`,
        `  Species: ${pet.species}`,
        `  Breed: ${pet.breed}`,
        `  Sex: ${pet.sex}`,
        `  Color: ${pet.color}`,
        `  Weight: ${pet.weight}`,
        `  DOB: ${pet.dob}`,
        `  Vet Clinic: ${pet.vetClinic}`,
        `  Vet Phone: ${pet.vetPhone}`,
        `  Services: ${services.join(", ") || "None selected"}`,
        `  Appointment Date: ${pet.appointmentDate}`,
        pet.checkOutDate ? `  Check-Out Date: ${pet.checkOutDate}` : null,
        pet.notes ? `  Notes: ${pet.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");
}

/**
 * Training: Try/Catch Structure - WHY use finally block?
 *
 * The finally block guarantees cleanup happens regardless of success
 * or failure. This matters for stateful operations (closing connections,
 * clearing locks, etc). In this case we use it for logging patterns.
 */
export async function POST(request: NextRequest) {
  let rawBody: unknown;

  try {
    // Training: Guard clause for JSON parsing - WHY catch parse errors separately?
    // If request.json() fails, we want to tell the client "invalid JSON" not a
    // generic 500 error. This helps frontend developers debug faster.
    try {
      rawBody = await request.json();
    } catch (parseError) {
      console.error("[appointment] JSON parse error:", parseError);
      return NextResponse.json(
        { success: false, error: "Request body must be valid JSON" },
        { status: 400 } // 400 Bad Request for malformed input
      );
    }

    // Training: Guard clause for payload validation - WHY check before processing?
    // Invalid input = wasted work. Validate first, then proceed. This pattern
    // prevents null reference errors deep inside email composition logic.
    const validation = validateAppointmentPayload(rawBody);
    if (!validation.valid) {
      console.warn("[appointment] Validation failed:", validation.error);
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 } // 400 Bad Request for validation failure
      );
    }

    // At this point we KNOW rawBody is valid, so we can safely cast
    const body = rawBody as AppointmentPayload;

    // Training: Safe location lookup with fallback - WHY not just use bracket access?
    // If a bad location key is passed, bracket access would return undefined,
    // which would break email sending. This pattern ensures we ALWAYS have a valid email.
    const locationKey = body.location.toLowerCase();
    const recipientEmail = LOCATION_EMAILS[locationKey] || LOCATION_EMAILS.galleria;
    const locationName = locationKey.charAt(0).toUpperCase() + locationKey.slice(1);
    const ownerName = `${body.firstName} ${body.lastName}`;

    const subject = `New Appointment Request - ${locationName} - ${ownerName}`;

    const textBody = [
      `New Appointment Request`,
      `========================`,
      ``,
      `Customer Type: ${body.customerType === "new" ? "New Customer" : "Existing Customer"}`,
      `Location: ${locationName}`,
      ``,
      `--- Pet Owner ---`,
      `Name: ${ownerName}`,
      `Email: ${body.email}`,
      `Phone: ${body.cellPhone}`,
      `Address: ${body.street}${body.street2 ? `, ${body.street2}` : ""}, ${body.city}, ${body.state} ${body.zip}`,
      ``,
      `--- Emergency Contact ---`,
      `Name: ${body.ecName}`,
      `Email: ${body.ecEmail}`,
      `Phone: ${body.ecPhone}`,
      ``,
      `How they heard about us: ${body.hearAbout}`,
      ``,
      `--- Pets ---`,
      formatPets(body.pets),
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
            to: recipientEmail,
            subject,
            text: textBody,
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Email sending timeout after 30s")), 30000)
          ),
        ]);

        console.log(`[appointment] Email sent to ${recipientEmail} for ${ownerName}`);
      } catch (emailError) {
        // Training: Catch specific email errors - WHY not just rethrow?
        // Different email failures have different causes (invalid credentials,
        // network timeout, recipient rejected). Logging the specific error helps
        // operators debug SMTP issues. We rethrow because this is a critical failure.
        console.error(`[appointment] Email sending failed to ${recipientEmail}:`, emailError);
        throw emailError;
      }
    } else {
      // Training: Fallback logging for misconfiguration - WHY log instead of error?
      // SMTP being missing is not a request error—it's a configuration issue on
      // the server side. We log it as a warning so data isn't lost, but return
      // success to the client (they aren't at fault).
      console.warn("[appointment] SMTP not configured. Logging submission to console:");
      console.log("TO:", recipientEmail);
      console.log("SUBJECT:", subject);
      console.log("BODY:\n", textBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    // Training: Error classification - WHY log before returning?
    // Logging helps us see production issues that clients experience. The client
    // gets a safe error message, but we log the real error for debugging.
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[appointment] Unexpected error processing submission:", {
      error: errorMessage,
      timestamp: new Date().toISOString(),
      // Don't log raw body in production (PII), but do log validation details
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    });

    return NextResponse.json(
      { success: false, error: "Failed to process appointment request. Please try again." },
      { status: 500 } // 500 Internal Server Error for unexpected failures
    );
  }
}
