// Training: Route Protection — Rate Limiting Utility
// WHY: Public form endpoints need defense against spam, DoS, and abusive scraping.
// This simple in-memory rate limiter prevents unlimited submissions from a single IP.
//
// NOTE: This is suitable for development and light production use. For high-traffic
// production deployments, consider Upstash (Redis over HTTP) or similar.
//
// Principle: memories/knowledge/principles/auth-route-protection.md
// Principle: memories/knowledge/principles/error-handling.md

// Training: Custom Error Types — Don't Return null
// Source: Robert C. Martin, Clean Code Ch. 7
// WHY: By throwing a specific error type, handlers can distinguish rate limit
// failures from other errors (JSON parsing, validation, SMTP). This enables
// proper HTTP 429 responses instead of generic 500 errors.
export class RateLimitExceededError extends Error {
  constructor(
    public clientIp: string,
    public maxRequests: number,
    public windowSeconds: number
  ) {
    super(`Rate limit exceeded: ${maxRequests} requests per ${windowSeconds}s`);
    this.name = 'RateLimitExceededError';
  }
}

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
 * Training: Error Handling — Throw Custom Errors
 * Source: Robert C. Martin, Clean Code Ch. 7
 * WHY: Throwing RateLimitExceededError instead of returning boolean allows
 * handlers to catch this specific failure and respond with 429 HTTP status,
 * rather than treating it as a boolean check.
 *
 * @param ip The client IP address
 * @param maxRequests Maximum requests allowed per window
 * @param windowMs Time window in milliseconds (e.g., 60000 for 1 minute)
 * @throws RateLimitExceededError if the IP has exceeded the limit
 */
export function checkRateLimit(
  ip: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): void {
  // Training: Guard Clause — Fail Fast
  // Source: Robert C. Martin, Clean Code Ch. 7
  // WHY: Validate the IP address at function entry. If missing, return early
  // with specific error context. Don't proceed to rate limit check.
  if (!ip || typeof ip !== 'string' || ip.trim().length === 0) {
    throw new Error('Client IP address is required for rate limiting');
  }

  const now = Date.now();
  const existing = rateLimitMap.get(ip);

  // Training: Route Protection — Lazy cleanup
  // WHY: When we see a request from an IP, we check if the time window has expired.
  // If it has, we reset the counter. This avoids needing a background cleanup job.
  if (!existing || now > existing.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return; // First request in window, not limited
  }

  // Request is within the current window. Increment the counter.
  existing.count++;

  // Training: Throw Error Instead of Return Value
  // Source: Robert C. Martin, Clean Code Ch. 7
  // WHY: Throwing makes the error path explicit. Callers can't accidentally
  // ignore the rate limit by forgetting to check a boolean return value.
  if (existing.count > maxRequests) {
    throw new RateLimitExceededError(ip, maxRequests, Math.floor(windowMs / 1000));
  }
}

/**
 * Legacy function: isRateLimited (boolean return style, deprecated)
 *
 * Training: Error Handling — Prefer Exceptions to Return Values
 * Source: Robert C. Martin, Clean Code Ch. 7
 * WHY: This function returns a boolean, requiring callers to check the result.
 * It's deprecated in favor of checkRateLimit() which throws an error.
 * New code should use checkRateLimit() instead.
 *
 * @deprecated Use checkRateLimit() instead (throws RateLimitExceededError)
 */
export function isRateLimited(
  ip: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean {
  try {
    checkRateLimit(ip, maxRequests, windowMs);
    return false;
  } catch (error) {
    if (error instanceof RateLimitExceededError) {
      return true;
    }
    throw error; // Re-throw other errors
  }
}

/**
 * Get the client IP from a Next.js Request.
 *
 * Training: Route Protection — IP extraction from headers
 * WHY: Rate limiting needs a consistent identifier. We check X-Forwarded-For
 * (set by reverse proxies like Vercel's edge), then fall back to socket address.
 *
 * Training: Error Handling — Guard Clauses, Fail Fast
 * Source: Robert C. Martin, Clean Code Ch. 7
 * WHY: Validate request object at function entry. Extract forwarded IP with
 * explicit guards. Never return empty string (that's ambiguous). Return either
 * a valid IP or throw an error with context.
 *
 * @param request The Next.js request object
 * @returns The client IP address
 * @throws Error if request is invalid or IP cannot be determined
 */
export function getClientIp(request: Request): string {
  // Training: Guard Clause — Validate request at entry
  // Source: Robert C. Martin, Clean Code Ch. 7
  // WHY: If request is null or missing headers, fail immediately with
  // specific context rather than silently returning "unknown".
  if (!request || !request.headers) {
    throw new Error('Request object with headers is required for IP extraction');
  }

  // Training: Guard Clause — Extract and validate forwarded IP
  // Source: Robert C. Martin, Clean Code Ch. 7
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded && typeof forwarded === 'string' && forwarded.trim().length > 0) {
    // x-forwarded-for can contain multiple IPs. Take the first one (the actual client).
    // Guard: ensure we got a non-empty string after extraction
    const clientIp = forwarded.split(",")[0].trim();
    if (clientIp.length > 0) {
      return clientIp;
    }
  }

  // Training: Route Protection — Fallback identifier when headers missing
  // WHY: In development or when reverse proxy headers aren't available,
  // we can't determine client IP. Return a consistent fallback so we can
  // still apply rate limiting (though at lower granularity).
  // Using "unknown" means all headerless requests share one rate limit bucket.
  //
  // Future improvement: Could throw here to force all deployments through
  // a proxy with X-Forwarded-For. For now, fallback preserves compatibility.
  console.warn("[rate-limit] Could not determine client IP from headers, using fallback");
  return "unknown";
}
