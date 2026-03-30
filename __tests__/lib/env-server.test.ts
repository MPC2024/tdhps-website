/**
 * Tests for Environment Variable Configuration
 * Training: Environment Variable Discipline — Verify centralized config works
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  getSMTPConfig,
  getAPIKeys,
  getCameraConfig,
  getPublicConfig,
} from "@/lib/env-server";

describe("Environment Variable Discipline - env-server.ts", () => {
  // Save original env vars to restore after each test
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset process.env before each test
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("getSMTPConfig()", () => {
    it("should return null when SMTP env vars not configured", () => {
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;

      const config = getSMTPConfig();
      expect(config).toBeNull();
    });

    it("should return full config when all SMTP vars present", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_PORT = "587";
      process.env.SMTP_USER = "user@example.com";
      process.env.SMTP_PASS = "password123";
      process.env.SMTP_FROM = "noreply@example.com";

      const config = getSMTPConfig();
      expect(config).not.toBeNull();
      expect(config?.host).toBe("smtp.example.com");
      expect(config?.port).toBe(587);
      expect(config?.user).toBe("user@example.com");
      expect(config?.pass).toBe("password123");
      expect(config?.from).toBe("noreply@example.com");
    });

    it("should use default SMTP_FROM when not set", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_USER = "user@example.com";
      process.env.SMTP_PASS = "password123";
      delete process.env.SMTP_FROM;

      const config = getSMTPConfig();
      expect(config?.from).toBe("noreply@thedoghouseps.com");
    });

    it("should return null if host is missing", () => {
      delete process.env.SMTP_HOST;
      process.env.SMTP_USER = "user@example.com";
      process.env.SMTP_PASS = "password123";

      const config = getSMTPConfig();
      expect(config).toBeNull();
    });

    it("should return null if user is missing", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      delete process.env.SMTP_USER;
      process.env.SMTP_PASS = "password123";

      const config = getSMTPConfig();
      expect(config).toBeNull();
    });

    it("should return null if pass is missing", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_USER = "user@example.com";
      delete process.env.SMTP_PASS;

      const config = getSMTPConfig();
      expect(config).toBeNull();
    });

    it("should parse port as number", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_PORT = "465";
      process.env.SMTP_USER = "user@example.com";
      process.env.SMTP_PASS = "password123";

      const config = getSMTPConfig();
      expect(config?.port).toBe(465);
      expect(typeof config?.port).toBe("number");
    });

    it("should default to port 587 if SMTP_PORT is malformed", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_PORT = "not-a-number";
      process.env.SMTP_USER = "user@example.com";
      process.env.SMTP_PASS = "password123";

      const config = getSMTPConfig();
      expect(config?.port).toBe(587);
    });
  });

  describe("getAPIKeys()", () => {
    it("should return empty keys when not configured", () => {
      delete process.env.GOOGLE_PLACES_API_KEY;
      delete process.env.YELP_API_KEY;

      const keys = getAPIKeys();
      expect(keys.googlePlaces).toBeUndefined();
      expect(keys.yelp).toBeUndefined();
    });

    it("should return Google Places key when configured", () => {
      process.env.GOOGLE_PLACES_API_KEY = "google-key-12345";

      const keys = getAPIKeys();
      expect(keys.googlePlaces).toBe("google-key-12345");
    });

    it("should return Yelp key when configured", () => {
      process.env.YELP_API_KEY = "yelp-bearer-token";

      const keys = getAPIKeys();
      expect(keys.yelp).toBe("yelp-bearer-token");
    });

    it("should return both keys when both configured", () => {
      process.env.GOOGLE_PLACES_API_KEY = "google-key";
      process.env.YELP_API_KEY = "yelp-key";

      const keys = getAPIKeys();
      expect(keys.googlePlaces).toBe("google-key");
      expect(keys.yelp).toBe("yelp-key");
    });
  });

  describe("getCameraConfig()", () => {
    it("should return empty strings when camera env vars not configured", () => {
      // Delete all camera env vars
      Object.keys(process.env).forEach((key) => {
        if (key.startsWith("CAM_")) {
          delete process.env[key];
        }
      });

      const config = getCameraConfig();
      expect(config.galleria.ip).toBe("");
      expect(config.washington.ip).toBe("");
    });

    it("should return Galleria camera config when set", () => {
      process.env.CAM_GALLERIA_LOCATION = "5917 Richmond Ave";
      process.env.CAM_GALLERIA_IP = "192.168.1.100";
      process.env.CAM_GALLERIA_USER = "admin";
      process.env.CAM_GALLERIA_PASSWORD = "secret123";
      process.env.CAM_GALLERIA_PORT = "7000";

      const config = getCameraConfig();
      expect(config.galleria.location).toBe("5917 Richmond Ave");
      expect(config.galleria.ip).toBe("192.168.1.100");
      expect(config.galleria.user).toBe("admin");
      expect(config.galleria.password).toBe("secret123");
      expect(config.galleria.port).toBe("7000");
    });

    it("should return Washington camera config when set", () => {
      process.env.CAM_WASHINGTON_LOCATION = "6434 Washington Ave";
      process.env.CAM_WASHINGTON_IP = "192.168.1.101";
      process.env.CAM_WASHINGTON_USER = "tech";
      process.env.CAM_WASHINGTON_PASSWORD = "pass456";

      const config = getCameraConfig();
      expect(config.washington.location).toBe("6434 Washington Ave");
      expect(config.washington.ip).toBe("192.168.1.101");
      expect(config.washington.user).toBe("tech");
      expect(config.washington.password).toBe("pass456");
    });

    it("should use default registerMode when not configured", () => {
      delete process.env.CAM_GALLERIA_REGISTER_MODE;

      const config = getCameraConfig();
      expect(config.galleria.registerMode).toBe("IP/Domain");
    });

    it("should use configured registerMode when set", () => {
      process.env.CAM_GALLERIA_REGISTER_MODE = "Domain Only";

      const config = getCameraConfig();
      expect(config.galleria.registerMode).toBe("Domain Only");
    });
  });

  describe("getPublicConfig()", () => {
    it("should return GA measurement ID when configured", () => {
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-XXXXXXX";

      const config = getPublicConfig();
      expect(config.gaId).toBe("G-XXXXXXX");
    });

    it("should return undefined GA ID when not configured", () => {
      delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

      const config = getPublicConfig();
      expect(config.gaId).toBeUndefined();
    });

    it("should correctly identify public vs private prefixes", () => {
      // Training: Environment Variable Discipline — Verify NEXT_PUBLIC_ is for public data
      // WHY: Tests ensure we're not accidentally using private secrets with public prefix
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-PUBLIC";
      process.env.GOOGLE_PLACES_API_KEY = "private-secret";

      const publicConfig = getPublicConfig();
      const apiKeys = getAPIKeys();

      expect(publicConfig.gaId).toBe("G-PUBLIC"); // public
      expect(apiKeys.googlePlaces).toBe("private-secret"); // private
    });
  });

  describe("Security Isolation Tests", () => {
    it("should not expose secret API keys in public config", () => {
      process.env.GOOGLE_PLACES_API_KEY = "secret-key-123";
      process.env.YELP_API_KEY = "secret-yelp-456";
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-PUBLIC";

      const publicConfig = getPublicConfig();

      // Public config should ONLY have public data
      expect(Object.keys(publicConfig)).toEqual(["gaId"]);
      expect(publicConfig.gaId).toBe("G-PUBLIC");

      // Private data should be in getAPIKeys(), not in publicConfig
      const apiKeys = getAPIKeys();
      expect(apiKeys.googlePlaces).toBe("secret-key-123");
      expect(apiKeys.yelp).toBe("secret-yelp-456");
    });

    it("should not expose SMTP secrets in any public interface", () => {
      process.env.SMTP_HOST = "smtp.example.com";
      process.env.SMTP_USER = "admin@example.com";
      process.env.SMTP_PASS = "super-secret-password";

      const smtpConfig = getSMTPConfig();
      const publicConfig = getPublicConfig();
      const apiKeys = getAPIKeys();

      // SMTP secrets should ONLY be in getSMTPConfig()
      expect(smtpConfig?.pass).toBe("super-secret-password");

      // They should NOT leak into public config
      expect(Object.keys(publicConfig)).toEqual(["gaId"]);
      expect(JSON.stringify(apiKeys)).not.toContain("super-secret-password");
    });
  });

  describe("Integration Tests", () => {
    it("should handle full real-world config scenario", () => {
      // Simulate a fully configured production environment
      process.env.SMTP_HOST = "smtp.sendgrid.net";
      process.env.SMTP_PORT = "587";
      process.env.SMTP_USER = "apikey";
      process.env.SMTP_PASS = "SG.actual-key-here";
      process.env.SMTP_FROM = "noreply@thedoghouseps.com";

      process.env.GOOGLE_PLACES_API_KEY = "AIzaSyDxxx";
      process.env.YELP_API_KEY = "Bearer xxx";

      process.env.CAM_GALLERIA_IP = "192.168.1.100";
      process.env.CAM_GALLERIA_USER = "admin";
      process.env.CAM_GALLERIA_PASSWORD = "cam-pass";

      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-ABC123";

      // All configs should be accessible without leaking
      const smtp = getSMTPConfig();
      const api = getAPIKeys();
      const camera = getCameraConfig();
      const pub = getPublicConfig();

      expect(smtp).not.toBeNull();
      expect(smtp?.pass).toBe("SG.actual-key-here");
      expect(api.googlePlaces).toBe("AIzaSyDxxx");
      expect(camera.galleria.password).toBe("cam-pass");
      expect(pub.gaId).toBe("G-ABC123");

      // Verify secrets are NOT in public config
      expect(JSON.stringify(pub)).not.toContain("SG.actual-key-here");
      expect(JSON.stringify(pub)).not.toContain("AIzaSyDxxx");
      expect(JSON.stringify(pub)).not.toContain("cam-pass");
    });
  });
});
