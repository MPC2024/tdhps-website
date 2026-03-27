// Training: Authentication & Route Protection — Test Suite
// WHY: Tests that verify auth/route protection improvements are critical because:
// 1. They FAIL if the protection is ever accidentally removed (regression detection)
// 2. They document the intended behavior as living specification
// 3. They make future developers understand WHY the route is protected
//
// To run: npm install -D vitest @vitejs/plugin-react && npx vitest run

import { describe, it, expect, vi, beforeEach } from "vitest";

// -----------------------------------------------------------------------
// Test Suite 1: /api/pet-cam retirement
// Training: Route Protection — retired route must return 410, not credentials
// WHY: If this test fails, it means someone re-opened the credential-exposing
//      endpoint without realizing the security implications.
// -----------------------------------------------------------------------

describe("GET /api/pet-cam — retired endpoint", () => {
  it("should return HTTP 410 Gone (not 200 OK)", async () => {
    // Training: Route Protection — 410 signals intentional permanent removal
    // WHY: If this returns 200, credentials are being exposed to the public internet.
    const { GET } = await import("../../app/api/pet-cam/route");
    const response = await GET();
    expect(response.status).toBe(410);
  });

  it("should NOT include any camera credentials in the response body", async () => {
    // Training: Route Protection — this is the critical regression test
    // WHY: This test catches the exact vulnerability we fixed. If camera passwords
    //      ever appear in the /api/pet-cam response, this test FAILS loudly.
    const { GET } = await import("../../app/api/pet-cam/route");
    const response = await GET();
    const body = await response.json();

    // Must not contain credential field names
    expect(body).not.toHaveProperty("cameras");
    expect(JSON.stringify(body)).not.toContain("password");
    expect(JSON.stringify(body)).not.toContain("userName");
    expect(JSON.stringify(body)).not.toContain("ipAddress");
  });

  it("should include a human-readable reason for retirement", async () => {
    // Training: Route Protection — document WHY routes are retired, not just that they are
    // WHY: Future developers must understand the security reasoning, not just encounter 410
    const { GET } = await import("../../app/api/pet-cam/route");
    const response = await GET();
    const body = await response.json();

    expect(body).toHaveProperty("error");
    expect(body).toHaveProperty("reason");
    expect(typeof body.reason).toBe("string");
    expect(body.reason.length).toBeGreaterThan(0);
  });
});

// -----------------------------------------------------------------------
// Test Suite 2: PetCamSettings Server Component
// Training: Route Protection — Server Component must NOT use "use client"
// WHY: "use client" would make this a browser component, enabling network fetches
//      and potentially re-introducing the credential exposure path.
// -----------------------------------------------------------------------

describe("PetCamSettings — Server Component integrity", () => {
  it("should NOT contain 'use client' directive", async () => {
    // Training: Route Protection — "use client" on this component would undo the fix
    // WHY: Removing "use client" is what allows process.env to be read server-side.
    //      If someone adds "use client" back, credentials become client-accessible again.
    const fs = await import("fs");
    const content = fs.readFileSync("./app/pet-cam/PetCamSettings.tsx", "utf-8");

    expect(content).not.toContain('"use client"');
    expect(content).not.toContain("'use client'");
  });

  it("should NOT contain a fetch('/api/pet-cam') call", async () => {
    // Training: Route Protection — client-side fetch was the original vulnerability path
    // WHY: The fetch call caused credentials to flow through a network request to the browser.
    //      Server Component reads env vars directly — no fetch needed, no network exposure.
    const fs = await import("fs");
    const content = fs.readFileSync("./app/pet-cam/PetCamSettings.tsx", "utf-8");

    expect(content).not.toContain("fetch(\"/api/pet-cam\")");
    expect(content).not.toContain("fetch('/api/pet-cam')");
  });

  it("should read camera config from process.env (server-side only)", async () => {
    // Training: Route Protection — env vars in Server Components stay server-side
    // WHY: process.env without NEXT_PUBLIC_ prefix is NEVER bundled to the client.
    //      This test verifies the component uses the correct (safe) env var access pattern.
    const fs = await import("fs");
    const content = fs.readFileSync("./app/pet-cam/PetCamSettings.tsx", "utf-8");

    expect(content).toContain("process.env.CAM_");
    expect(content).not.toContain("NEXT_PUBLIC_CAM_"); // NEXT_PUBLIC_ would bundle to client
  });
});
