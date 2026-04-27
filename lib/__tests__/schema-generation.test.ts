/**
 * Tests for Schema Generation Functions
 * Training: Single Responsibility Principle — Verify schema generation works independently
 * Validates that schema.org output is correctly structured after SRP refactoring
 */

import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateItemListSchema,
  generateAIOptimizationSchema,
} from "../schema";
import { LOCATIONS } from "../locations";

describe("Schema Generation Functions", () => {
  describe("generateOrganizationSchema", () => {
    it("should return valid Organization schema", () => {
      const schema = generateOrganizationSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("Organization");
      expect(schema.name).toBe("The Dog House Pet Salon");
      expect(schema.sameAs).toEqual(expect.any(Array));
      expect(schema.sameAs.length).toBeGreaterThan(0);
    });

    it("should include contact point information", () => {
      const schema = generateOrganizationSchema();

      expect(schema.contactPoint).toBeDefined();
      expect(schema.contactPoint["@type"]).toBe("ContactPoint");
      expect(schema.contactPoint.telephone).toBeDefined();
    });
  });

  describe("generateLocalBusinessSchema", () => {
    it("should return valid LocalBusiness schema for a location", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toContain("LocalBusiness");
      expect(schema.name).toBe(location.name);
      expect(schema.telephone).toBe(location.phone);
      expect(schema.email).toBe(location.email);
    });

    it("should include complete address information", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema.address).toBeDefined();
      expect(schema.address["@type"]).toBe("PostalAddress");
      expect(schema.address.streetAddress).toBe(location.address);
      expect(schema.address.addressCountry).toBe("US");
    });

    it("should include opening hours for all weekdays", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema.openingHoursSpecification).toEqual(expect.any(Array));
      expect(schema.openingHoursSpecification.length).toBeGreaterThanOrEqual(6);
    });

    it("should include service offer catalog", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema.hasOfferCatalog).toBeDefined();
      expect(schema.hasOfferCatalog["@type"]).toBe("OfferCatalog");
      expect(schema.hasOfferCatalog.itemListElement).toEqual(expect.any(Array));
      expect(schema.hasOfferCatalog.itemListElement.length).toBeGreaterThan(0);
    });

    it("should include geolocation data", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema.geo).toBeDefined();
      expect(schema.geo["@type"]).toBe("GeoCoordinates");
      expect(schema.geo.latitude).toBe(location.lat);
      expect(schema.geo.longitude).toBe(location.lng);
    });

    it("should include booking action", () => {
      const location = Object.values(LOCATIONS)[0];
      const schema = generateLocalBusinessSchema(location);

      expect(schema.potentialAction).toBeDefined();
      expect(schema.potentialAction["@type"]).toBe("ReserveAction");
      expect(schema.potentialAction.target.urlTemplate).toBe(location.bookingUrl);
    });
  });

  describe("generateServiceSchema", () => {
    it("should return valid Service schema", () => {
      const schema = generateServiceSchema("Dog Grooming");

      expect(schema).not.toBeNull();
      expect(schema!["@context"]).toBe("https://schema.org");
      expect(schema!["@type"]).toBe("Service");
      expect(schema!.name).toBe("Dog Grooming");
    });

    it("should return null for non-existent service", () => {
      const schema = generateServiceSchema("Non-existent Service");
      expect(schema).toBeNull();
    });

    it("should include provider information", () => {
      const schema = generateServiceSchema("Dog Grooming");

      expect(schema).not.toBeNull();
      expect(schema!.provider).toBeDefined();
      expect(schema!.provider["@type"]).toBe("Organization");
      expect(schema!.provider.name).toBe("The Dog House Pet Salon");
    });

    it("should include service area information", () => {
      const schema = generateServiceSchema("Dog Grooming", ["Houston, TX"]);

      expect(schema).not.toBeNull();
      expect(schema!.areaServed).toEqual(expect.any(Array));
      expect(schema!.areaServed.length).toBeGreaterThan(0);
    });
  });

  describe("generateItemListSchema", () => {
    it("should return valid ItemList schema", () => {
      const schema = generateItemListSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("ItemList");
      expect(schema.itemListElement).toEqual(expect.any(Array));
      expect(schema.numberOfItems).toBeGreaterThan(0);
    });

    it("should list all locations", () => {
      const schema = generateItemListSchema();
      const locationCount = Object.keys(LOCATIONS).length;

      expect(schema.numberOfItems).toBe(locationCount);
      expect(schema.itemListElement.length).toBe(locationCount);
    });

    it("should include position for each location", () => {
      const schema = generateItemListSchema();

      schema.itemListElement.forEach((item: any, index: number) => {
        expect(item.position).toBe(index + 1);
      });
    });
  });

  describe("generateAIOptimizationSchema", () => {
    it("should return valid FAQPage schema", () => {
      const schema = generateAIOptimizationSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("FAQPage");
      expect(schema.mainEntity).toEqual(expect.any(Array));
      expect(schema.mainEntity.length).toBeGreaterThan(0);
    });

    it("should include properly formatted FAQ items", () => {
      const schema = generateAIOptimizationSchema();

      schema.mainEntity.forEach((faq: any) => {
        expect(faq["@type"]).toBe("Question");
        expect(faq.name).toBeDefined();
        expect(faq.acceptedAnswer).toBeDefined();
        expect(faq.acceptedAnswer["@type"]).toBe("Answer");
        expect(faq.acceptedAnswer.text).toBeDefined();
      });
    });
  });
});
