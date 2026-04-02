/**
 * Training: Error Handling Tests for /api/appointment
 *
 * WHY test error handling separately?
 * Success paths are usually tested first, but error paths are where
 * production issues hide. Testing invalid input, missing fields, and
 * misconfiguration prevents silent failures that break user trust.
 *
 * Test structure:
 * 1. Happy path - valid request succeeds
 * 2. Invalid JSON - catches parse errors early
 * 3. Missing required fields - validates guard clauses
 * 4. Invalid field values - type and range validation
 * 5. Empty pets array - edge case handling
 * 6. SMTP misconfiguration - graceful fallback
 */

import { POST } from "@/app/api/appointment/route";
import { NextRequest } from "next/server";

// Training: Mock NextRequest - WHY create a helper?
// NextRequest constructor is complex. Creating a helper factory reduces
// test boilerplate and makes intent clearer (what are we testing?).
function createMockRequest(body: unknown, headers: Record<string, string> = {}): NextRequest {
  return new NextRequest("http://localhost:3000/api/appointment", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  });
}

// Training: Valid payload factory - WHY create a factory?
// Tests need to create slightly different payloads (remove one field, change one value).
// A factory function makes it easy to build valid payloads then modify them.
function createValidPayload(overrides: Partial<any> = {}) {
  return {
    customerType: "new",
    location: "galleria",
    firstName: "John",
    lastName: "Doe",
    street: "123 Main St",
    street2: "",
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
        name: "Fluffy",
        species: "Dog",
        breed: "Golden Retriever",
        sex: "Female",
        color: "Golden",
        weight: "50 lbs",
        dob: "2020-01-15",
        vetClinic: "VetCare Houston",
        vetPhone: "7135551111",
        boarding: "1-week",
        grooming: "Full Groom",
        additionalNailFile: true,
        additionalTeethBrush: false,
        appointmentDate: "2026-04-15",
        checkOutDate: "2026-04-22",
        notes: "Gentle brushing preferred",
      },
    ],
    ...overrides,
  };
}

describe("POST /api/appointment", () => {
  describe("Valid Requests", () => {
    test("should accept valid appointment request", async () => {
      // Training: Setup - what are we testing?
      // A complete, valid appointment request
      const request = createMockRequest(createValidPayload());

      // Training: Action - call the handler
      const response = await POST(request);

      // Training: Assertion - check the response
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });

    test("should accept optional street2 field", async () => {
      const request = createMockRequest(
        createValidPayload({
          street2: "Apt 4B",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });
  });

  describe("JSON Parsing Errors", () => {
    test("should return 400 for invalid JSON", async () => {
      // Training: Invalid JSON - WHY test this?
      // If client sends malformed JSON, we should fail gracefully with
      // a clear message, not a cryptic 500 error.
      const request = new NextRequest("http://localhost:3000/api/appointment", {
        method: "POST",
        body: "{ invalid json",
        headers: { "content-type": "application/json" },
      });

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.error).toContain("JSON");
    });

    test("should return 400 for non-object JSON", async () => {
      // Training: Non-object JSON - WHY test this?
      // A valid JSON string like "hello" is syntactically correct but
      // not a valid object. Guard clause should catch this.
      const request = createMockRequest('"not an object"');

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("object");
    });
  });

  describe("Required Field Validation", () => {
    test("should return 400 if firstName is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).firstName;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("firstName");
    });

    test("should return 400 if firstName is empty string", async () => {
      const request = createMockRequest(createValidPayload({ firstName: "" }));

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("firstName");
    });

    test("should return 400 if email is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).email;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("email");
    });

    test("should return 400 if location is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).location;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("location");
    });
  });

  describe("Field Length Validation", () => {
    test("should return 400 if firstName exceeds max length", async () => {
      const request = createMockRequest(
        createValidPayload({
          firstName: "A".repeat(101), // max is 100
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between");
    });

    test("should return 400 if email exceeds RFC 5321 limit", async () => {
      const request = createMockRequest(
        createValidPayload({
          email: "a".repeat(255) + "@example.com", // exceeds 254
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between");
    });
  });

  describe("Customer Type Validation", () => {
    test("should return 400 for invalid customerType", async () => {
      const request = createMockRequest(
        createValidPayload({
          customerType: "vip", // must be 'new' or 'existing'
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("customerType");
    });
  });

  describe("Pets Array Validation", () => {
    test("should return 400 if pets array is empty", async () => {
      // Training: Empty array edge case - WHY test this?
      // An appointment without pets makes no sense. This edge case
      // should fail with a clear error, not cause a crash later.
      const request = createMockRequest(
        createValidPayload({
          pets: [],
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("pet");
    });

    test("should return 400 if pets array is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).pets;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("pet");
    });

    test("should return 400 if pet is missing required field", async () => {
      const payload = createValidPayload();
      delete (payload.pets[0] as any).name;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("Pet #1");
    });

    test("should accept multiple pets", async () => {
      const request = createMockRequest(
        createValidPayload({
          pets: [
            {
              name: "Fluffy",
              species: "Dog",
              breed: "Golden Retriever",
              sex: "Female",
              color: "Golden",
              weight: "50 lbs",
              dob: "2020-01-15",
              vetClinic: "VetCare Houston",
              vetPhone: "7135551111",
              boarding: "1-week",
              grooming: "Full Groom",
              additionalNailFile: true,
              additionalTeethBrush: false,
              appointmentDate: "2026-04-15",
              checkOutDate: "2026-04-22",
              notes: "Gentle brushing preferred",
            },
            {
              name: "Whiskers",
              species: "Cat",
              breed: "Siamese",
              sex: "Male",
              color: "Cream",
              weight: "10 lbs",
              dob: "2021-03-10",
              vetClinic: "VetCare Houston",
              vetPhone: "7135551111",
              boarding: "none",
              grooming: "Bath only",
              additionalNailFile: false,
              additionalTeethBrush: false,
              appointmentDate: "2026-04-16",
              checkOutDate: "",
              notes: "",
            },
          ],
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });
  });

  describe("Emergency Contact Validation", () => {
    test("should return 400 if ecName is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).ecName;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("emergency contact");
    });

    test("should return 400 if ecEmail is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).ecEmail;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("emergency contact");
    });
  });
});
