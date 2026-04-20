/**
 * JSON-LD Schema Generation for The Dog House Pet Salon
 * Training: Single Responsibility Principle — This module ONLY generates schema.org structured data
 * Source: Uncle Bob Martin (Clean Code, Chapter 10)
 *
 * Generates structured data for all major schema types:
 * - Organization
 * - LocalBusiness/PetStore (per location)
 * - Services
 * - ItemList (location index)
 * - ImageObject (licensing metadata)
 * - FAQPage (AI Optimization)
 *
 * Note: Data constants moved to schema-constants.ts
 * Note: Time formatting utilities moved to time-utils.ts
 */

import { LOCATIONS, Location } from "./locations";
import { SOCIAL_PROFILES, SERVICES, ORGANIZATION_CONTACT, FAQ_DATA } from "./schema-constants";
import { formatTime24To12 } from "./time-utils";

/**
 * Generate Organization schema (parent brand)
 * Used on root layout and site-wide for brand identity
 *
 * Training: Single Responsibility Principle
 * This function has ONE responsibility: compose organization metadata into schema.org format
 * It does NOT validate data, format times, or fetch location data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Dog House Pet Salon",
    alternateName: "TDHPS",
    url: "https://www.thedoghouseps.com",
    logo: "https://www.thedoghouseps.com/logo.png",
    description:
      "Houston's premier pet grooming, daycare, and boarding service with 30+ years of experience across three convenient locations.",
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      "@type": ORGANIZATION_CONTACT.type,
      contactType: ORGANIZATION_CONTACT.contactType,
      telephone: ORGANIZATION_CONTACT.telephone,
      areaServed: ORGANIZATION_CONTACT.areaServed,
    },
  };
}

/**
 * Build opening hours specification array for schema.org OpeningHoursSpecification
 * Training: Single Responsibility Principle — Extracted to support both schema generation AND
 * potential UI display without duplicating logic
 * Source: Uncle Bob Martin (Clean Code, Chapter 7 on Guard Clauses)
 */
function buildOpeningHoursSpecification(location: Location) {
  return [
    { dayOfWeek: "Monday", opens: location.hours.monday.open, closes: location.hours.monday.close },
    { dayOfWeek: "Tuesday", opens: location.hours.tuesday.open, closes: location.hours.tuesday.close },
    { dayOfWeek: "Wednesday", opens: location.hours.wednesday.open, closes: location.hours.wednesday.close },
    { dayOfWeek: "Thursday", opens: location.hours.thursday.open, closes: location.hours.thursday.close },
    { dayOfWeek: "Friday", opens: location.hours.friday.open, closes: location.hours.friday.close },
    { dayOfWeek: "Saturday", opens: location.hours.saturday.open, closes: location.hours.saturday.close },
  ];
}

/**
 * Generate LocalBusiness/PetStore schema for a specific location
 * Used on location pages and homepage location cards
 *
 * Training: Single Responsibility Principle
 * This function has ONE responsibility: compose location data into schema.org format
 * It does NOT validate times (extracted to time-utils.ts)
 * It does NOT load location data (passed in)
 */
export function generateLocalBusinessSchema(location: Location) {
  // Build opening hours specification array
  const openingHoursSpecification = buildOpeningHoursSpecification(location);

  // Build service offers catalog
  const hasOfferCatalog = buildServiceOfferCatalog(location);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetStore"],
    name: location.name,
    address: buildPostalAddress(location),
    telephone: location.phone,
    email: location.email,
    url: `https://www.thedoghouseps.com${location.url}`,
    openingHoursSpecification,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "USD",
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: location.bookingUrl,
        actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
      },
      name: "Book an Appointment",
    },
    hasOfferCatalog,
  };
}

/**
 * Training: Single Responsibility Principle — Extract building blocks
 * Each helper focuses on ONE aspect of the schema structure
 */
function buildPostalAddress(location: Location) {
  return {
    "@type": "PostalAddress",
    streetAddress: location.address,
    addressLocality: location.city,
    addressRegion: location.state,
    postalCode: location.zip,
    addressCountry: "US",
  };
}

function buildServiceOfferCatalog(location: Location) {
  return {
    "@type": "OfferCatalog",
    name: "Pet Services",
    itemListElement: SERVICES.map((service, idx) => ({
      "@type": "Offer",
      position: idx + 1,
      name: service.name,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: location.name,
        url: `https://www.thedoghouseps.com${location.url}`,
      },
    })),
  };
}

/**
 * Generate Service schema for a specific service
 * Used on services pages and location service cards
 */
export function generateServiceSchema(serviceName: string, areaServed: string[] = ["Houston, TX", "Pearland, TX"]) {
  const service = SERVICES.find((s) => s.name === serviceName);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
      url: "https://www.thedoghouseps.com",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    availableLanguage: ["en"],
  };
}

/**
 * Generate ItemList schema for homepage location index
 * Helps search engines understand location catalog
 */
export function generateItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Dog House Pet Salon Locations",
    description: "All locations of The Dog House Pet Salon pet grooming service",
    numberOfItems: Object.keys(LOCATIONS).length,
    itemListElement: Object.values(LOCATIONS).map((location, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: location.name,
      url: `https://www.thedoghouseps.com${location.url}`,
      item: {
        "@type": "LocalBusiness",
        name: location.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address,
          addressLocality: location.city,
          addressRegion: location.state,
          postalCode: location.zip,
        },
        telephone: location.phone,
      },
    })),
  };
}

/**
 * Generate ImageObject schema for image licensing metadata
 * Used on key images to establish copyright and licensing
 */
export function generateImageObjectSchema(
  imageUrl: string,
  imageName: string = "The Dog House Pet Salon",
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: imageUrl,
    name: imageName,
    creator: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
    },
    copyrightHolder: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
    },
    copyrightYear: new Date().getFullYear(),
    license: "https://www.thedoghouseps.com/terms-of-use",
    creditText: "The Dog House Pet Salon",
  };
}

/**
 * Generate all schema types for Aggregate markup
 * Useful for pages that need multiple schema types
 */
export function generateAggregateSchema(...schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

/**
 * AI Optimization Schema - for Answer Engine Optimization (AEO)
 * Helps ChatGPT, Google SGE, and other AI systems understand content
 *
 * Training: Single Responsibility Principle
 * This function composes FAQ data into schema.org format
 * FAQ content is managed in schema-constants.ts (change data without touching generation logic)
 */
export function generateAIOptimizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "The Dog House Pet Salon - Services & Information",
    description: "Common questions and answers about The Dog House Pet Salon pet grooming, daycare, and boarding services.",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Re-export for convenience
export { SOCIAL_PROFILES, SERVICES, ORGANIZATION_CONTACT, FAQ_DATA } from "./schema-constants";
