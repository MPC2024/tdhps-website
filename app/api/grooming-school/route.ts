import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSMTPConfig } from "@/lib/env-server";

/**
 * POST /api/grooming-school
 *
 * Accepts grooming school application form data, sends an email
 * notification to the business, and returns { success: true }.
 *
 * Training: Environment Variable Discipline — Secrets managed in env-server.ts
 * WHY: All SMTP credentials extracted to a single location, verified once,
 *      reducing risk of accidental exposure or misconfiguration.
 *
 * If SMTP is not configured, the data is logged to the server console
 * as a fallback so no submission is ever silently lost.
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

export async function POST(request: NextRequest) {
  try {
    const body: GroomingSchoolPayload = await request.json();

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
      body.allergies,
      ``,
      `How they heard about us: ${body.howHeard}`,
    ].join("\n");

    // Training: Environment Variable Discipline — Delegate to centralized config
    // WHY: getSMTPConfig validates and returns all secrets in one place.
    //      No scattered process.env.* calls = easier to audit and update.
    const smtpConfig = getSMTPConfig();

    if (smtpConfig) {
      const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.port === 465,
        auth: {
          user: smtpConfig.user,
          pass: smtpConfig.pass,
        },
      });

      await transporter.sendMail({
        from: smtpConfig.from,
        to: RECIPIENT_EMAIL,
        subject,
        text: textBody,
      });

      console.log(`[grooming-school] Email sent to ${RECIPIENT_EMAIL} for ${body.fullName}`);
    } else {
      // Training: Environment Variable Discipline — Graceful fallback when secrets missing
      // WHY: SMTP is optional. When not configured, log to console so data isn't lost.
      console.warn("[grooming-school] SMTP not configured. Logging submission to console:");
      console.log("TO:", RECIPIENT_EMAIL);
      console.log("SUBJECT:", subject);
      console.log("BODY:\n", textBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[grooming-school] Error processing submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process grooming school application." },
      { status: 500 }
    );
  }
}
