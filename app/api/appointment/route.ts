import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSMTPConfig } from "@/lib/env-server";

/**
 * POST /api/appointment
 *
 * Accepts appointment form data, sends an email notification to the
 * correct location email, and returns { success: true } on success.
 *
 * Training: Environment Variable Discipline — Secrets managed in env-server.ts
 * WHY: All SMTP credentials extracted to a single location, verified once,
 *      reducing risk of accidental exposure or misconfiguration.
 *
 * If SMTP is not configured, the data is logged to the server console
 * as a fallback so no submission is ever silently lost.
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

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentPayload = await request.json();

    const locationKey = body.location || "galleria";
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
        to: recipientEmail,
        subject,
        text: textBody,
      });

      console.log(`[appointment] Email sent to ${recipientEmail} for ${ownerName}`);
    } else {
      // Training: Environment Variable Discipline — Graceful fallback when secrets missing
      // WHY: SMTP is optional. When not configured, log to console so data isn't lost.
      console.warn("[appointment] SMTP not configured. Logging submission to console:");
      console.log("TO:", recipientEmail);
      console.log("SUBJECT:", subject);
      console.log("BODY:\n", textBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[appointment] Error processing submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process appointment request." },
      { status: 500 }
    );
  }
}
