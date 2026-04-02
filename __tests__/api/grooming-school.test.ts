/**
 * Training: Error Handling Tests for /api/grooming-school
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
 * 5. animalComfort range validation - business logic constraints
 * 6. Text field length validation - prevents spam/abuse
 */

import { POST } from "@/app/api/grooming-school/route";
import { NextRequest } from "next/server";

// Training: Mock NextRequest - WHY create a helper?
// NextRequest constructor is complex. Creating a helper factory reduces
// test boilerplate and makes intent clearer (what are we testing?).
function createMockRequest(body: unknown, headers: Record<string, string> = {}): NextRequest {
  return new NextRequest("http://localhost:3000/api/grooming-school", {
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
    program: "Advanced Grooming Techniques",
    fullName: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "7135551234",
    format: "In-Person",
    motivation: "I love working with animals and want to build a career in professional grooming.",
    animalComfort: 4,
    priorExperience: "I have owned dogs for 10 years and volunteered at an animal shelter.",
    techniquesInterest: "Hand scissoring, breed-specific styling, and handling anxious dogs.",
    careerGoals: "To become a master groomer and eventually open my own salon.",
    programGoals: "Learn advanced techniques and build my professional network.",
    allergies: "No known allergies",
    howHeard: "Instagram",
    ...overrides,
  };
}

describe("POST /api/grooming-school", () => {
  describe("Valid Requests", () => {
    test("should accept valid grooming school application", async () => {
      // Training: Setup - what are we testing?
      // A complete, valid grooming school application
      const request = createMockRequest(createValidPayload());

      // Training: Action - call the handler
      const response = await POST(request);

      // Training: Assertion - check the response
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });

    test("should accept application with empty allergies field", async () => {
      // Training: Optional field handling - WHY test this?
      // Some applicants don't have allergies. We should accept empty string
      // as a valid response (not missing, but empty).
      const request = createMockRequest(
        createValidPayload({
          allergies: "",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });

    test("should accept application with empty howHeard field", async () => {
      const request = createMockRequest(
        createValidPayload({
          howHeard: "",
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
      const request = new NextRequest("http://localhost:3000/api/grooming-school", {
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
    test("should return 400 if program is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).program;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("program");
    });

    test("should return 400 if fullName is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).fullName;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("fullName");
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

    test("should return 400 if phone is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).phone;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("phone");
    });

    test("should return 400 if motivation is missing", async () => {
      const payload = createValidPayload();
      delete (payload as any).motivation;
      const request = createMockRequest(payload);

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("motivation");
    });
  });

  describe("Field Length Validation", () => {
    test("should return 400 if fullName is less than 2 characters", async () => {
      const request = createMockRequest(
        createValidPayload({
          fullName: "A", // min is 2
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between");
    });

    test("should return 400 if fullName exceeds max length", async () => {
      const request = createMockRequest(
        createValidPayload({
          fullName: "A".repeat(101), // max is 100
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between");
    });

    test("should return 400 if motivation is less than 10 characters", async () => {
      // Training: Motivation minimum - WHY require 10 chars?
      // An applicant who writes "Yes" or "OK" probably hasn't thought about
      // the program seriously. Requiring a minimum prevents low-effort spam.
      const request = createMockRequest(
        createValidPayload({
          motivation: "short", // min is 10
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("at least");
    });

    test("should return 400 if motivation exceeds max length", async () => {
      const request = createMockRequest(
        createValidPayload({
          motivation: "A".repeat(5001), // max is 5000
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("exceed");
    });

    test("should return 400 if allergies exceeds max length", async () => {
      const request = createMockRequest(
        createValidPayload({
          allergies: "A".repeat(1001), // max is 1000
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("exceed");
    });
  });

  describe("animalComfort Range Validation", () => {
    test("should return 400 if animalComfort is less than 1", async () => {
      // Training: Range validation - WHY require 1-5?
      // animalComfort is a Likert scale (1-5). Allowing 0 or negative
      // produces nonsensical output like "-2/5". Guard clause prevents this.
      const request = createMockRequest(
        createValidPayload({
          animalComfort: 0,
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between 1 and 5");
    });

    test("should return 400 if animalComfort exceeds 5", async () => {
      const request = createMockRequest(
        createValidPayload({
          animalComfort: 10,
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between 1 and 5");
    });

    test("should return 400 if animalComfort is not a number", async () => {
      const request = createMockRequest(
        createValidPayload({
          animalComfort: "4" as any, // string instead of number
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("between 1 and 5");
    });

    test("should accept all valid animalComfort values", async () => {
      // Training: Exhaustive range test - WHY test all values?
      // We want to ensure the guard clause is correct. Testing all valid
      // values gives confidence in the range check.
      for (let comfort = 1; comfort <= 5; comfort++) {
        const request = createMockRequest(
          createValidPayload({
            animalComfort: comfort,
          })
        );

        const response = await POST(request);
        expect(response.status).toBe(200);
      }
    });
  });

  describe("Text Field Minimum Length", () => {
    test("should return 400 if priorExperience is empty", async () => {
      const request = createMockRequest(
        createValidPayload({
          priorExperience: "",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("priorExperience");
    });

    test("should return 400 if techniquesInterest is empty", async () => {
      const request = createMockRequest(
        createValidPayload({
          techniquesInterest: "",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("techniquesInterest");
    });

    test("should return 400 if careerGoals is empty", async () => {
      const request = createMockRequest(
        createValidPayload({
          careerGoals: "",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("careerGoals");
    });

    test("should return 400 if programGoals is empty", async () => {
      const request = createMockRequest(
        createValidPayload({
          programGoals: "",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("programGoals");
    });
  });

  describe("Edge Cases", () => {
    test("should handle fields with only whitespace", async () => {
      // Training: Whitespace handling - WHY trim before validation?
      // Users sometimes accidentally paste fields with leading/trailing spaces.
      // Our validator uses .trim() to normalize these, catching "   " as empty.
      const request = createMockRequest(
        createValidPayload({
          fullName: "   ", // only spaces
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain("fullName");
    });

    test("should accept valid email format", async () => {
      const request = createMockRequest(
        createValidPayload({
          email: "test.name+tag@example.co.uk",
        })
      );

      const response = await POST(request);
      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
    });
  });
});
