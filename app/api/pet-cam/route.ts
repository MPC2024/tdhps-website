// Training: Authentication & Route Protection — Route Retirement Pattern
// WHY: This endpoint was retired because it returned camera credentials (IP address,
// username, password) to ANY internet user who called GET /api/pet-cam — no auth required.
//
// The original comment "credentials are read from environment variables so they are
// never shipped to the browser bundle" was correct, but missed the key risk:
// the API RESPONSE shipped the credential VALUES to any caller. env vars prevent
// credentials from being bundled into client JS — they do NOT prevent the API
// endpoint from returning them to the public internet.
//
// FIX APPLIED: PetCamSettings.tsx converted from "use client" + fetch() to a
// Server Component that reads env vars directly. No API call, no JSON response,
// no /api/pet-cam endpoint needed.
//
// ACCESS POLICY (RETIRED):
// - Former Level: 2 (Eliminated Route) — Private data, eliminated via Server Component
// - Former Vulnerability: Returned sensitive credentials in JSON response
// - Current Response: 410 Gone (permanent removal signal to crawlers)
//
// This file is kept with a 410 Gone response so any cached bookmarks or crawlers
// get a clear signal that the resource has been permanently removed.
//
// Training: Route Protection principle card:
//   memories/knowledge/principles/auth-route-protection.md

import { NextResponse } from "next/server";

// Training: Route Protection — 410 Gone signals intentional permanent removal
// WHY: 404 suggests "maybe this will come back." 410 Gone is explicit: this route
// was deliberately retired for security reasons. Crawlers and API clients should
// stop requesting it. This is the correct HTTP response for a security-driven removal.
export async function GET() {
  return NextResponse.json(
    {
      error: "This endpoint has been retired.",
      reason: "Camera settings are now rendered server-side via Server Component.",
      docs: "See app/pet-cam/PetCamSettings.tsx",
    },
    { status: 410 }
  );
}
