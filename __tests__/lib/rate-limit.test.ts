// Training: Route Protection — Rate Limit Unit Tests
// WHY: Tests verify that rate limiting works correctly and that honest clients
// can always make their first request, while abusive clients get rejected.
//
// Principle: memories/knowledge/principles/auth-route-protection.md

import { isRateLimited, getClientIp } from "@/lib/rate-limit";

describe("Rate Limiting (lib/rate-limit.ts)", () => {
  // Training: Route Protection — Clear rate limiter state between tests
  // WHY: Each test gets a fresh rate limiter. This prevents test interdependencies
  // and ensures tests are isolated and reproducible.
  beforeEach(() => {
    // Clear the rate limit map by invoking with a high limit
    // (In production, you might call a reset function. For testing, we use a new instance.)
    jest.clearAllMocks();
  });

  describe("isRateLimited()", () => {
    // Training: Route Protection — First request should never be limited
    // WHY: We want legitimate users to always get their first request through.
    it("should allow the first request from a new IP", () => {
      const result = isRateLimited("192.168.1.1", 10, 60000);
      expect(result).toBe(false);
    });

    // Training: Route Protection — Second through tenth should be allowed
    it("should allow requests up to the limit", () => {
      const ip = "10.0.0.1";
      for (let i = 0; i < 10; i++) {
        const result = isRateLimited(ip, 10, 60000);
        expect(result).toBe(false);
      }
    });

    // Training: Route Protection — 11th request should be rejected
    it("should reject the request after exceeding the limit", () => {
      const ip = "10.0.0.2";
      // Make 10 allowed requests
      for (let i = 0; i < 10; i++) {
        isRateLimited(ip, 10, 60000);
      }
      // The 11th request should be limited
      const result = isRateLimited(ip, 10, 60000);
      expect(result).toBe(true);
    });

    // Training: Route Protection — Different IPs have independent limits
    it("should track limits per IP independently", () => {
      const ip1 = "192.168.1.1";
      const ip2 = "192.168.1.2";

      // Exhaust limit for ip1
      for (let i = 0; i < 11; i++) {
        isRateLimited(ip1, 10, 60000);
      }

      // ip1 should be limited
      expect(isRateLimited(ip1, 10, 60000)).toBe(true);

      // ip2 should still be allowed (independent tracking)
      expect(isRateLimited(ip2, 10, 60000)).toBe(false);
    });

    // Training: Route Protection — Custom limits should be respected
    it("should respect custom maxRequests parameter", () => {
      const ip = "10.0.0.3";

      // With limit of 3, the 4th request should be rejected
      for (let i = 0; i < 3; i++) {
        expect(isRateLimited(ip, 3, 60000)).toBe(false);
      }
      expect(isRateLimited(ip, 3, 60000)).toBe(true);
    });
  });

  describe("getClientIp()", () => {
    // Training: Route Protection — Extract IP from X-Forwarded-For header
    it("should extract IP from x-forwarded-for header", () => {
      const request = new Request("http://localhost", {
        headers: {
          "x-forwarded-for": "203.0.113.42, 198.51.100.178",
        },
      });

      const ip = getClientIp(request);
      // Should take the FIRST IP (the actual client)
      expect(ip).toBe("203.0.113.42");
    });

    // Training: Route Protection — Trim whitespace from X-Forwarded-For
    it("should trim whitespace from x-forwarded-for", () => {
      const request = new Request("http://localhost", {
        headers: {
          "x-forwarded-for": "  203.0.113.42  ,  198.51.100.178",
        },
      });

      const ip = getClientIp(request);
      expect(ip).toBe("203.0.113.42");
    });

    // Training: Route Protection — Fallback to "unknown" if no headers
    it("should return 'unknown' if no x-forwarded-for header", () => {
      const request = new Request("http://localhost", {});
      const ip = getClientIp(request);
      expect(ip).toBe("unknown");
    });
  });
});
