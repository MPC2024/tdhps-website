// Training: Route Protection — Validation Schema Tests
// WHY: Tests verify that malformed input is rejected at the API boundary,
// preventing broken SMTP calls and database inconsistencies.
//
// Principle: memories/knowledge/principles/auth-route-protection.md

import { AppointmentPayloadSchema, GroomingSchoolPayloadSchema } from "@/lib/validation-schemas";
import { ZodError } from "zod";

describe("Validation Schemas", () => {
  describe("AppointmentPayloadSchema", () => {
    // Training: Route Protection — Valid data should parse successfully
    it("should accept valid appointment payload", () => {
      const validPayload = {
        customerType: "new",
        location: "galleria",
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        street2: "Apt 4B",
        city: "Houston",
        state: "TX",
        zip: "77001",
        email: "john@example.com",
        cellPhone: "7135551234",
        ecName: "Jane Doe",
        ecEmail: "jane@example.com",
        ecPhone: "7135555678",
        hearAbout: "Google Search",
        pets: [
          {
            name: "Buddy",
            species: "Dog",
            breed: "Golden Retriever",
            sex: "Male",
            color: "Golden",
            weight: "65 lbs",
            dob: "2020-01-15",
            vetClinic: "Happy Paws Vet",
            vetPhone: "7135551111",
            boarding: "7 days",
            grooming: "Full Groom",
            additionalNailFile: true,
            additionalTeethBrush: false,
            appointmentDate: "2026-04-15",
            checkOutDate: "2026-04-22",
            notes: "Needs special diet food",
          },
        ],
      };

      const result = AppointmentPayloadSchema.safeParse(validPayload);
      expect(result.success).toBe(true);
    });

    // Training: Route Protection — Invalid email should be rejected
    it("should reject invalid email address", () => {
      const invalidPayload = {
        customerType: "new",
        location: "galleria",
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        city: "Houston",
        state: "TX",
        zip: "77001",
        email: "not-an-email", // Invalid email
        cellPhone: "7135551234",
        ecName: "Jane Doe",
        ecEmail: "jane@example.com",
        ecPhone: "7135555678",
        hearAbout: "Google",
        pets: [
          {
            name: "Buddy",
            species: "Dog",
            breed: "Golden Retriever",
            sex: "Male",
            color: "Golden",
            weight: "65 lbs",
            dob: "2020-01-15",
            vetClinic: "Happy Paws Vet",
            vetPhone: "7135551111",
            boarding: "7 days",
            grooming: "Full Groom",
            additionalNailFile: false,
            additionalTeethBrush: false,
            appointmentDate: "2026-04-15",
          },
        ],
      };

      const result = AppointmentPayloadSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
    });

    // Training: Route Protection — Missing required fields should be rejected
    it("should reject payload with missing pets", () => {
      const invalidPayload = {
        customerType: "new",
        location: "galleria",
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        city: "Houston",
        state: "TX",
        zip: "77001",
        email: "john@example.com",
        cellPhone: "7135551234",
        ecName: "Jane Doe",
        ecEmail: "jane@example.com",
        ecPhone: "7135555678",
        hearAbout: "Google",
        pets: [], // Empty pets array violates min(1)
      };

      const result = AppointmentPayloadSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
    });

    // Training: Route Protection — Excessively long strings should be rejected
    it("should reject oversized pet name", () => {
      const invalidPayload = {
        customerType: "new",
        location: "galleria",
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        city: "Houston",
        state: "TX",
        zip: "77001",
        email: "john@example.com",
        cellPhone: "7135551234",
        ecName: "Jane Doe",
        ecEmail: "jane@example.com",
        ecPhone: "7135555678",
        hearAbout: "Google",
        pets: [
          {
            name: "A".repeat(101), // Exceeds max(100)
            species: "Dog",
            breed: "Golden Retriever",
            sex: "Male",
            color: "Golden",
            weight: "65 lbs",
            dob: "2020-01-15",
            vetClinic: "Happy Paws Vet",
            vetPhone: "7135551111",
            boarding: "7 days",
            grooming: "Full Groom",
            additionalNailFile: false,
            additionalTeethBrush: false,
            appointmentDate: "2026-04-15",
          },
        ],
      };

      const result = AppointmentPayloadSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
    });
  });

  describe("GroomingSchoolPayloadSchema", () => {
    // Training: Route Protection — Valid grooming school payload should parse
    it("should accept valid grooming school application", () => {
      const validPayload = {
        program: "Professional Grooming",
        fullName: "Alice Smith",
        email: "alice@example.com",
        phone: "7135552222",
        format: "In-person",
        motivation: "I love working with animals",
        animalComfort: 4,
        priorExperience: "5 years at pet salon",
        techniquesInterest: "Breed-specific cuts",
        careerGoals: "Open my own grooming business",
        programGoals: "Master advanced techniques",
        allergies: "None",
        howHeard: "Friend recommendation",
      };

      const result = GroomingSchoolPayloadSchema.safeParse(validPayload);
      expect(result.success).toBe(true);
    });

    // Training: Route Protection — Invalid animal comfort level should be rejected
    it("should reject animalComfort outside 1-5 range", () => {
      const invalidPayload = {
        program: "Professional Grooming",
        fullName: "Alice Smith",
        email: "alice@example.com",
        phone: "7135552222",
        format: "In-person",
        motivation: "I love animals",
        animalComfort: 10, // Out of range
        priorExperience: "5 years",
        techniquesInterest: "Cuts",
        careerGoals: "Business",
        programGoals: "Skills",
        howHeard: "Friend",
      };

      const result = GroomingSchoolPayloadSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
    });

    // Training: Route Protection — Non-integer comfort level should be rejected
    it("should reject non-integer animalComfort", () => {
      const invalidPayload = {
        program: "Professional Grooming",
        fullName: "Alice Smith",
        email: "alice@example.com",
        phone: "7135552222",
        format: "In-person",
        motivation: "I love animals",
        animalComfort: 3.5, // Not an integer
        priorExperience: "5 years",
        techniquesInterest: "Cuts",
        careerGoals: "Business",
        programGoals: "Skills",
        howHeard: "Friend",
      };

      const result = GroomingSchoolPayloadSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
    });
  });
});
