// Training: Route Protection — Input Validation Schemas
// WHY: Zod schemas at API boundaries prevent malformed data from reaching business logic.
// This protects against spam, malformed JSON, and type confusion attacks.
//
// Principle: memories/knowledge/principles/auth-route-protection.md
// Related: training-queue.md #5 (Type Safety & Runtime Validation)

import { z } from "zod";

// Training: Route Protection — Pet validation schema
// WHY: Each pet field is validated to ensure data integrity before processing.
// Invalid lengths or missing required fields are caught here, not in SMTP.
export const PetPayloadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  species: z.string().trim().min(1).max(50),
  breed: z.string().trim().min(1).max(100),
  sex: z.string().trim().min(1).max(50),
  color: z.string().trim().min(1).max(100),
  weight: z.string().trim().min(1).max(50),
  dob: z.string().trim().min(1).max(50),
  vetClinic: z.string().trim().min(1).max(150),
  vetPhone: z.string().trim().min(1).max(20),
  boarding: z.string().trim().max(100),
  grooming: z.string().trim().max(100),
  additionalNailFile: z.boolean(),
  additionalTeethBrush: z.boolean(),
  appointmentDate: z.string().trim().min(1),
  checkOutDate: z.string().trim().optional(),
  notes: z.string().trim().max(500).optional(),
});

// Training: Route Protection — Appointment payload validation
// WHY: The full appointment payload is validated as a unit. This ensures
// all required customer info is present before we attempt to send email.
export const AppointmentPayloadSchema = z.object({
  customerType: z.enum(["new", "existing"]),
  location: z.string().trim().min(1).max(50),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  street: z.string().trim().min(1).max(200),
  street2: z.string().trim().max(200).optional(),
  city: z.string().trim().min(1).max(100),
  state: z.string().trim().min(1).max(50),
  zip: z.string().trim().min(1).max(20),
  email: z.string().email(),
  cellPhone: z.string().trim().min(1).max(20),
  ecName: z.string().trim().min(1).max(100),
  ecEmail: z.string().email(),
  ecPhone: z.string().trim().min(1).max(20),
  hearAbout: z.string().trim().min(1).max(200),
  pets: z.array(PetPayloadSchema).min(1).max(20),
});

// Training: Route Protection — Grooming school application schema
// WHY: Validates applicant info before sending email. Prevents malformed
// submissions from creating broken emails or database record.
export const GroomingSchoolPayloadSchema = z.object({
  program: z.string().trim().min(1).max(100),
  fullName: z.string().trim().min(1).max(150),
  email: z.string().email(),
  phone: z.string().trim().min(1).max(20),
  format: z.string().trim().min(1).max(50),
  motivation: z.string().trim().min(1).max(2000),
  animalComfort: z.number().int().min(1).max(5),
  priorExperience: z.string().trim().min(1).max(2000),
  techniquesInterest: z.string().trim().min(1).max(2000),
  careerGoals: z.string().trim().min(1).max(2000),
  programGoals: z.string().trim().min(1).max(2000),
  allergies: z.string().trim().max(1000).optional(),
  howHeard: z.string().trim().min(1).max(200),
});

// Type exports for client-side usage
export type PetPayload = z.infer<typeof PetPayloadSchema>;
export type AppointmentPayload = z.infer<typeof AppointmentPayloadSchema>;
export type GroomingSchoolPayload = z.infer<typeof GroomingSchoolPayloadSchema>;
