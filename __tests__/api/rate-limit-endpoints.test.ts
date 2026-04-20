// Training: Authentication & Route Protection — Rate Limiting Test Suite
// WHY: Rate limiting is critical defense against spam, DoS, and resource exhaustion.
// Tests MUST verify that:
// 1. Legitimate requests (within limit) succeed
// 2. Abusive requests (exceeding limit) receive 429 Too Many Requests
// 3. Different IPs are rate limited separately (not globally)
//
// To run: npm install -D vitest @vitejs/plugin-react && npx vitest run

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { NextRequest } from "next/server";

// -----------------------------------------------------------------------
// Test Suite 1: Rate Limiting Utility Functions
// Training: Route Protection — Rate limiter must function correctly
// WHY: If the utility is broken, neither endpoint is protected.
// -----------------------------------------------------------------------

describe("Rate Limiting Utilities — isRateLimited()", () => {
  beforeEach(() => {
    // Clear the in-memory rate limit map before each test
    // WHY: Each test should start with a clean slate to avoid test interdependencies
    vi.resetModules();
  });

  it("should allow the first request from an IP (not limited)", async () => {
    // Training: Route Protection — first request should never be rate limited
    // WHY: Legitimate users making their first submission should not be blocked
    const { isRateLimited } = await import("../../lib/rate-limit");

    const result = isRateLimited("192.168.1.1", 10, 60000);
    expect(result).toBe(false);
  });

  it("should allow up to maxRequests within the time window", async () => {
    // Training: Route Protection — the limit should be enforced gradually
    // WHY: We allow N requests per window, then start blocking on request N+1
    const { isRateLimited } = await import("../../lib/rate-limit");

    const ip = "10.0.0.1";
    const maxRequests = 5;
    const windowMs = 60000;

    // First 5 requests should succeed (not limited)
    for (let i = 0; i < maxRequests; i++) {
      const result = isRateLimited(ip, maxRequests, windowMs);
      expect(result).toBe(false);
    }

    // 6th request should be blocked (rate limited)
    const result = isRateLimited(ip, maxRequests, windowMs);
    expect(result).toBe(true);
  });

  it("should rate limit different IPs independently", async () => {
    // Training: Route Protection — rate limiting is per-IP, not global
    // WHY: One attacker should not block legitimate users from other IPs
    const { isRateLimited } = await import("../../lib/rate-limit");

    const maxRequests = 3;
    const windowMs = 60000;

    // IP 1: Make 3 requests (at limit)
    for (let i = 0; i < maxRequests; i++) {
      isRateLimited("192.168.1.1", maxRequests, windowMs);
    }
    // IP 1: 4th request is blocked
    expect(isRateLimited("192.168.1.1", maxRequests, windowMs)).toBe(true);

    // IP 2: Should NOT be affected by IP 1's limit
    expect(isRateLimited("192.168.1.2", maxRequests, windowMs)).toBe(false);
    expect(isRateLimited("192.168.1.2", maxRequests, windowMs)).toBe(false);
  });

  it("should reset the counter after the time window expires", async () => {
    // Training: Route Protection — windows should expire to allow recovery
    // WHY: If a user gets temporarily rate limited, they should be able to retry
    //      after some time passes, not be permanently blocked.
    const { isRateLimited } = await import("../../lib/rate-limit");

    const ip = "172.16.0.1";
    const maxRequests = 2;
    const windowMs = 100; // 100ms window for testing

    // Make 2 requests (at limit)
    isRateLimited(ip, maxRequests, windowMs);
    isRateLimited(ip, maxRequests, windowMs);

    // 3rd request within window is blocked
    expect(isRateLimited(ip, maxRequests, windowMs)).toBe(true);

    // Wait for window to expire
    await new Promise((resolve) => setTimeout(resolve, 150));

    // After window expiry, counter should reset
    expect(isRateLimited(ip, maxRequests, windowMs)).toBe(false);
  });
});

describe("Rate Limiting Utilities — getClientIp()", () => {
  it("should extract IP from X-Forwarded-For header (primary)", async () => {
    // Training: Route Protection — X-Forwarded-For is set by reverse proxies (like Vercel)
    // WHY: This is the standard way for reverse proxies to communicate the real client IP
    const { getClientIp } = await import("../../lib/rate-limit");

    const request = new NextRequest("http://localhost/api/test", {
      headers: {
        "x-forwarded-for": "203.0.113.42, 10.0.0.1",
      },
    });

    const ip = getClientIp(request);
    expect(ip).toBe("203.0.113.42"); // Take the FIRST IP (the client)
  });

  it("should trim whitespace from X-Forwarded-For", async () => {
    // Training: Route Protection — proxy headers may have formatting variations
    // WHY: Robust parsing prevents false IP mismatches due to spaces
    const { getClientIp } = await import("../../lib/rate-limit");

    const request = new NextRequest("http://localhost/api/test", {
      headers: {
        "x-forwarded-for": "  203.0.113.42  ,  10.0.0.1",
      },
    });

    const ip = getClientIp(request);
    expect(ip).toBe("203.0.113.42");
  });

  it("should fallback to 'unknown' if X-Forwarded-For is missing", async () => {
    // Training: Route Protection — fallback ensures rate limiting works even without proxy headers
    // WHY: In development or direct-to-server requests, we still need to rate limit
    const { getClientIp } = await import("../../lib/rate-limit");

    const request = new NextRequest("http://localhost/api/test", {
      headers: {},
    });

    const ip = getClientIp(request);
    expect(ip).toBe("unknown");
  });
});

// -----------------------------------------------------------------------
// Test Suite 2: /api/appointment Rate Limiting
// Training: Route Protection — form endpoint must reject spam requests
// WHY: Without rate limiting, automated tools can flood the email inbox
// -----------------------------------------------------------------------

describe("POST /api/appointment — rate limiting enforcement", () => {
  it("should return 429 Too Many Requests when rate limited", async () => {
    // Training: Route Protection — 429 is the correct HTTP status for rate limit exceeded
    // WHY: HTTP 429 tells the client to back off; HTTP 503 might suggest a temporary server issue
    const { POST } = await import("../../app/api/appointment/route");

    // Create multiple requests from the same IP
    const createRequest = (body: object, ip: string = "192.168.1.100") => {
      return new NextRequest("http://localhost/api/appointment", {
        method: "POST",
        headers: {
          "x-forwarded-for": ip,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    };

    const validBody = {
      customerType: "new",
      location: "galleria",
      firstName: "Jane",
      lastName: "Doe",
      street: "123 Main St",
      city: "Houston",
      state: "TX",
      zip: "77001",
      email: "jane@example.com",
      cellPhone: "7135551234",
      ecName: "John Doe",
      ecEmail: "john@example.com",
      ecPhone: "7135551235",
      pets: [
        {
          name: "Buddy",
          species: "Dog",
          breed: "Golden Retriever",
          sex: "Male",
          color: "Golden",
          weight: "70",
          dob: "2020-01-15",
          vetClinic: "Happy Paws Clinic",
          vetPhone: "7135551236",
          boarding: "overnight",
          grooming: "full",
          additionalNailFile: false,
          additionalTeethBrush: false,
          appointmentDate: "2026-04-25",
          checkOutDate: "2026-04-26",
          notes: "",
        },
      ],
    };

    // Make 10 valid requests (within limit of 10 per minute)
    for (let i = 0; i < 10; i++) {
      const response = await POST(createRequest(validBody, "192.168.1.200"));
      expect(response.status).toBe(200); // First 10 should succeed
    }

    // 11th request should be rate limited
    const limitedResponse = await POST(createRequest(validBody, "192.168.1.200"));
    expect(limitedResponse.status).toBe(429);
  });

  it("should include informative error message in 429 response", async () => {
    // Training: Route Protection — error messages guide the user (human or API client)
    // WHY: Knowing "too many requests, retry later" is better than a generic 429
    const { POST } = await import("../../app/api/appointment/route");

    const createRequest = (body: object, ip: string = "192.168.1.100") => {
      return new NextRequest("http://localhost/api/appointment", {
        method: "POST",
        headers: {
          "x-forwarded-for": ip,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    };

    const validBody = {
      customerType: "new",
      location: "galleria",
      firstName: "Jane",
      lastName: "Doe",
      street: "123 Main St",
      city: "Houston",
      state: "TX",
      zip: "77001",
      email: "jane@example.com",
      cellPhone: "7135551234",
      ecName: "John Doe",
      ecEmail: "john@example.com",
      ecPhone: "7135551235",
      pets: [
        {
          name: "Buddy",
          species: "Dog",
          breed: "Golden Retriever",
          sex: "Male",
          color: "Golden",
          weight: "70",
          dob: "2020-01-15",
          vetClinic: "Happy Paws Clinic",
          vetPhone: "7135551236",
          boarding: "overnight",
          grooming: "full",
          additionalNailFile: false,
          additionalTeethBrush: false,
          appointmentDate: "2026-04-25",
          checkOutDate: "2026-04-26",
          notes: "",
        },
      ],
    };

    // Exhaust the limit
    const ip = "192.168.1.300";
    for (let i = 0; i < 10; i++) {
      await POST(createRequest(validBody, ip));
    }

    // Get the 429 response
    const response = await POST(createRequest(validBody, ip));
    expect(response.status).toBe(429);

    const body = await response.json();
    expect(body).toHaveProperty("error");
    expect(body.error).toContain("Too many appointment requests");
  });
});

// -----------------------------------------------------------------------
// Test Suite 3: /api/grooming-school Rate Limiting
// Training: Route Protection — form endpoint must reject spam requests
// WHY: Application endpoints are also vulnerable to automated spam
// -----------------------------------------------------------------------

describe("POST /api/grooming-school — rate limiting enforcement", () => {
  it("should return 429 Too Many Requests when rate limited", async () => {
    // Training: Route Protection — same pattern as appointment endpoint
    // WHY: Consistent rate limiting across all public form endpoints
    const { POST } = await import("../../app/api/grooming-school/route");

    const createRequest = (body: object, ip: string = "192.168.1.100") => {
      return new NextRequest("http://localhost/api/grooming-school", {
        method: "POST",
        headers: {
          "x-forwarded-for": ip,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    };

    const validBody = {
      program: "Grooming Fundamentals",
      fullName: "Alice Smith",
      email: "alice@example.com",
      phone: "7135551234",
      format: "In-Person",
      motivation: "I love working with dogs and want to make it my career.",
      animalComfort: 5,
      priorExperience: "I have groomed my own dogs for 2 years.",
      techniquesInterest: "Scissor technique, hand stripping, breed standards.",
      careerGoals: "Open my own grooming salon within 5 years.",
      programGoals: "Learn professional grooming techniques and business management.",
      allergies: "No known allergies.",
      howHeard: "Google search for grooming schools in Houston.",
    };

    // Make 10 valid requests (within limit)
    for (let i = 0; i < 10; i++) {
      const response = await POST(createRequest(validBody, "192.168.1.400"));
      expect(response.status).toBe(200);
    }

    // 11th request should be rate limited
    const limitedResponse = await POST(createRequest(validBody, "192.168.1.400"));
    expect(limitedResponse.status).toBe(429);
  });

  it("should include informative error message in 429 response", async () => {
    // Training: Route Protection — error messages should mention the endpoint context
    // WHY: Users know they can't spam applications without being informed why
    const { POST } = await import("../../app/api/grooming-school/route");

    const createRequest = (body: object, ip: string = "192.168.1.100") => {
      return new NextRequest("http://localhost/api/grooming-school", {
        method: "POST",
        headers: {
          "x-forwarded-for": ip,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    };

    const validBody = {
      program: "Grooming Fundamentals",
      fullName: "Alice Smith",
      email: "alice@example.com",
      phone: "7135551234",
      format: "In-Person",
      motivation: "I love working with dogs and want to make it my career.",
      animalComfort: 5,
      priorExperience: "I have groomed my own dogs for 2 years.",
      techniquesInterest: "Scissor technique, hand stripping, breed standards.",
      careerGoals: "Open my own grooming salon within 5 years.",
      programGoals: "Learn professional grooming techniques and business management.",
      allergies: "No known allergies.",
      howHeard: "Google search for grooming schools in Houston.",
    };

    // Exhaust the limit
    const ip = "192.168.1.500";
    for (let i = 0; i < 10; i++) {
      await POST(createRequest(validBody, ip));
    }

    // Get the 429 response
    const response = await POST(createRequest(validBody, ip));
    expect(response.status).toBe(429);

    const body = await response.json();
    expect(body).toHaveProperty("error");
    expect(body.error).toContain("Too many application submissions");
  });
});
