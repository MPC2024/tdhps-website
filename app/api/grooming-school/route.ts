import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/grooming-school
 *
 * Accepts grooming school application form data, sends an email
 * notification to the business, and returns { success: true }.
 *
 * SMTP is configured via environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
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

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "noreply@thedoghouseps.com";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 587,
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: RECIPIENT_EMAIL,
        subject,
        text: textBody,
      });

      console.log(`[grooming-school] Email sent to ${RECIPIENT_EMAIL} for ${body.fullName}`);
    } else {
      // SMTP not configured -- log the submission so data is not lost
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
