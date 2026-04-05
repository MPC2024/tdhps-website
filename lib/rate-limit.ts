// Training: Route Protection — Rate Limiting Utility
// WHY: Public form endpoints need defense against spam, DoS, and abusive scraping.
// This simple in-memory rate limiter prevents unlimited submissions from a single IP.
//
// NOTE: This is suitable for development and light production use. For high-traffic
// production deployments, consider Upstash (Redis over HTTP) or similar.
//
// Principle: memories/knowledge/principles/auth-route-protection.md

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

// Training: Route Protection — Simple in-memory map for rate limiting
// WHY: Map provides O(1) lookup and update of request counts per IP.
// The cleanup happens lazily (only on access), so old entries eventually get evicted.
const rateLimitMap = new Map<string, RateLimitEntry>();

/**
 * Check if an IP has exceeded the rate limit.
 *
 * Training: Route Protection — Explicit access policy declaration
 * WHY: Future maintainers should immediately understand this endpoint has
 * rate limiting active. The comment IS the access policy.
 *
 * @param ip The client IP address
 * @param maxRequests Maximum requests allowed per window
 * @param windowMs Time window in milliseconds (e.g., 60000 for 1 minute)
 * @returns true if the IP has exceeded the limit, false otherwise
 */
export function isRateLimited(
  ip: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);

  // Training: Route Protection — Lazy cleanup
  // WHY: When we see a request from an IP, we check if the time window has expired.
  // If it has, we reset the counter. This avoids needing a background cleanup job.
  if (!existing || now > existing.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false; // First request in window, not limited
  }

  // Request is within the current window. Increment the counter.
  existing.count++;

  // Training: Route Protection — Return true if limit exceeded
  // WHY: The handler should check this return value and respond with 429 Too Many Requests.
  // Early return prevents request processing, not just logging.
  return existing.count > maxRequests;
}

/**
 * Get the client IP from a Next.js NextRequest.
 *
 * Training: Route Protection — IP extraction from headers
 * WHY: Rate limiting needs a consistent identifier. We check X-Forwarded-For
 * (set by reverse proxies like Vercel's edge), then fall back to socket address.
 *
 * @param request The Next.js request object
 * @returns The client IP address, or a fallback if not found
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs. Take the first one (the actual client).
    return forwarded.split(",")[0].trim();
  }

  // Training: Route Protection — Fallback identifier
  // WHY: When reverse proxy headers are missing, we need some identifier.
  // This ensures we can still rate limit, even if the granularity is lower.
  // Using a generic string means all requests without forwarded-for are bucketed together.
  return "unknown";
}
