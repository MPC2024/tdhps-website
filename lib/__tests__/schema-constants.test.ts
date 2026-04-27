/**
 * Tests for Schema Constants
 * Training: Single Responsibility Principle — Verify data structure independence
 * Validates that constants are properly structured for schema generation
 */

import { SOCIAL_PROFILES, SERVICES, ORGANIZATION_CONTACT, FAQ_DATA } from "../schema-constants";

describe("Schema Constants", () => {
  describe("SOCIAL_PROFILES", () => {
    it("should contain valid social media URLs", () => {
      expect(SOCIAL_PROFILES).toEqual(expect.any(Array));
      expect(SOCIAL_PROFILES.length).toBeGreaterThan(0);
      SOCIAL_PROFILES.forEach((url) => {
        expect(url).toMatch(/^https?:\/\//);
      });
    });
  });

  describe("SERVICES", () => {
    it("should define all required service properties", () => {
      expect(SERVICES).toEqual(expect.any(Array));
      expect(SERVICES.length).toBeGreaterThan(0);

      SERVICES.forEach((service) => {
        expect(service).toHaveProperty("name");
        expect(service).toHaveProperty("description");
        expect(typeof service.name).toBe("string");
        expect(typeof service.description).toBe("string");
      });
    });

    it("should have at least 4 services defined", () => {
      expect(SERVICES.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe("ORGANIZATION_CONTACT", () => {
    it("should contain required contact fields", () => {
      expect(ORGANIZATION_CONTACT).toHaveProperty("type", "ContactPoint");
      expect(ORGANIZATION_CONTACT).toHaveProperty("contactType");
      expect(ORGANIZATION_CONTACT).toHaveProperty("telephone");
      expect(ORGANIZATION_CONTACT).toHaveProperty("areaServed");
    });

    it("should have valid phone number format", () => {
      expect(ORGANIZATION_CONTACT.telephone).toMatch(/^\(\d{3}\)\s\d{3}-\d{4}$/);
    });

    it("should have at least one service area", () => {
      expect(ORGANIZATION_CONTACT.areaServed).toEqual(expect.any(Array));
      expect(ORGANIZATION_CONTACT.areaServed.length).toBeGreaterThan(0);
    });
  });

  describe("FAQ_DATA", () => {
    it("should define FAQ items with required properties", () => {
      expect(FAQ_DATA).toEqual(expect.any(Array));
      expect(FAQ_DATA.length).toBeGreaterThan(0);

      FAQ_DATA.forEach((faq) => {
        expect(faq).toHaveProperty("question");
        expect(faq).toHaveProperty("answer");
        expect(typeof faq.question).toBe("string");
        expect(typeof faq.answer).toBe("string");
      });
    });

    it("should have at least 3 FAQ entries", () => {
      expect(FAQ_DATA.length).toBeGreaterThanOrEqual(3);
    });

    it("should have substantive questions and answers", () => {
      FAQ_DATA.forEach((faq) => {
        expect(faq.question.length).toBeGreaterThan(10);
        expect(faq.answer.length).toBeGreaterThan(20);
      });
    });
  });
});
