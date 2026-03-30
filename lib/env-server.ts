/**
 * Server-Side Environment Variable Configuration
 *
 * Training: Environment Variable Discipline — Centralized server-side secrets
 * WHY: Gathering all secrets in one place makes it easy to audit:
 *   1. No secrets leak into `NEXT_PUBLIC_` by accident
 *   2. All secrets are validated at server startup, not request time
 *   3. Developers see clearly which env vars are required vs optional
 *
 * Rule: This file is server-only (never imported on client)
 */

interface SMTPConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
}

interface APIKeysConfig {
  googlePlaces?: string;
  yelp?: string;
}

interface CameraConfig {
  galleria: {
    location: string;
    alias: string;
    registerMode: string;
    ip: string;
    port: string;
    user: string;
    password: string;
  };
  washington: {
    location: string;
    alias: string;
    registerMode: string;
    ip: string;
    port: string;
    user: string;
    password: string;
  };
}

/**
 * SMTP Configuration (for appointment & grooming school emails)
 * Training: Environment Variable Discipline — secret credentials, server-only
 * WHY: SMTP credentials must NEVER be exposed to the browser
 */
export function getSMTPConfig(): SMTPConfig | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "noreply@thedoghouseps.com";

  // Training: Environment Variable Discipline — graceful degradation
  // WHY: SMTP is optional (we have console fallback). Partial config is an error.
  if (!host || !user || !pass) {
    return null; // SMTP not configured
  }

  return {
    host,
    port: Number(port) || 587,
    user,
    pass,
    from,
  };
}

/**
 * Third-Party API Keys (for review widgets)
 * Training: Environment Variable Discipline — server-side only secrets
 * WHY: These keys should NEVER be exposed to browser
 */
export function getAPIKeys(): APIKeysConfig {
  return {
    // Training: Environment Variable Discipline — secret API key, server-only
    // WHY: Google Places API key allows querying reviews (costs money, rate-limited)
    googlePlaces: process.env.GOOGLE_PLACES_API_KEY,
    // Training: Environment Variable Discipline — secret API key, server-only
    // WHY: Yelp API key requires OAuth bearer token (cost, rate limits)
    yelp: process.env.YELP_API_KEY,
  };
}

/**
 * Camera Configuration (for pet cam page)
 * Training: Environment Variable Discipline — sensitive network credentials, server-only
 * WHY: Camera IP, port, username, and password expose internal network.
 *      These values are sensitive infrastructure details.
 */
export function getCameraConfig(): CameraConfig {
  return {
    galleria: {
      location: process.env.CAM_GALLERIA_LOCATION || "",
      alias: process.env.CAM_GALLERIA_ALIAS || "",
      registerMode: process.env.CAM_GALLERIA_REGISTER_MODE || "IP/Domain",
      ip: process.env.CAM_GALLERIA_IP || "",
      port: process.env.CAM_GALLERIA_PORT || "",
      user: process.env.CAM_GALLERIA_USER || "",
      password: process.env.CAM_GALLERIA_PASSWORD || "",
    },
    washington: {
      location: process.env.CAM_WASHINGTON_LOCATION || "",
      alias: process.env.CAM_WASHINGTON_ALIAS || "",
      registerMode: process.env.CAM_WASHINGTON_REGISTER_MODE || "IP/Domain",
      ip: process.env.CAM_WASHINGTON_IP || "",
      port: process.env.CAM_WASHINGTON_PORT || "",
      user: process.env.CAM_WASHINGTON_USER || "",
      password: process.env.CAM_WASHINGTON_PASSWORD || "",
    },
  };
}

/**
 * Public Analytics Configuration
 * Training: Environment Variable Discipline — intentionally public data
 * WHY: Google Analytics Measurement IDs are meant to be public.
 *      Anyone visiting your site can see this ID in the gtag script.
 *      No secrets here.
 */
export function getPublicConfig() {
  return {
    // Training: Environment Variable Discipline — public prefix for public value
    // WHY: GA measurement IDs are intentionally exposed to browsers
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  };
}
