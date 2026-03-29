/**
 * JSON-LD Schema Generation for The Dog House Pet Salon
 * Generates structured data for all major schema types:
 * - Organization
 * - LocalBusiness/PetStore (per location)
 * - Services
 * - ItemList (location index)
 * - ImageObject (licensing metadata)
 */

import { LOCATIONS, Location } from "./locations";

// Social media profiles
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/thedoghousepetsalon",
  "https://www.instagram.com/thedoghousepetsalon",
  "https://www.linkedin.com/company/the-dog-house-pet-salon",
  "https://www.tiktok.com/@thedoghousepetsalon",
];

// Service offerings
export const SERVICES = [
  {
    name: "Dog Grooming",
    description: "Professional grooming for all dog breeds with expert care",
  },
  {
    name: "Dog Bathing",
    description: "Full bath, dry, and brush service for complete cleanliness",
  },
  {
    name: "Dog Daycare",
    description: "Supervised daycare with play areas and socialization",
  },
  {
    name: "Pet Boarding",
    description: "Overnight boarding with personalized care and attention",
  },
];

/**
 * Generate Organization schema (parent brand)
 * Used on root layout and site-wide for brand identity
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
      "Houston's premier pet grooming, daycare, and boarding service with 25+ years of experience across three convenient locations.",
    sameAs: SOCIAL_PROFILES,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "(832) 930-4060",
      areaServed: ["Houston, TX", "Pearland, TX"],
    },
  };
}

/**
 * Generate LocalBusiness/PetStore schema for a specific location
 * Used on location pages and homepage location cards
 */
export function generateLocalBusinessSchema(location: Location) {
  // Convert 24-hour time to 12-hour for human readability in schema
  const formatTime = (time: string) => {
    const [hours, mins] = time.split(":");
    const hour = parseInt(hours, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${mins}${suffix}`;
  };

  // Build opening hours specification array
  const openingHoursSpecification = [
    { dayOfWeek: "Monday", opens: location.hours.monday.open, closes: location.hours.monday.close },
    { dayOfWeek: "Tuesday", opens: location.hours.tuesday.open, closes: location.hours.tuesday.close },
    { dayOfWeek: "Wednesday", opens: location.hours.wednesday.open, closes: location.hours.wednesday.close },
    { dayOfWeek: "Thursday", opens: location.hours.thursday.open, closes: location.hours.thursday.close },
    { dayOfWeek: "Friday", opens: location.hours.friday.open, closes: location.hours.friday.close },
    { dayOfWeek: "Saturday", opens: location.hours.saturday.open, closes: location.hours.saturday.close },
  ];

  // Generate service offers
  const hasOfferCatalog = {
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

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetStore"],
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
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
 */
export function generateAIOptimizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "The Dog House Pet Salon - Services & Information",
    description: "Common questions and answers about The Dog House Pet Salon pet grooming, daycare, and boarding services.",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does The Dog House Pet Salon offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer professional dog grooming, dog bathing, doggie daycare, and pet boarding across three Houston locations with 25+ years of experience.",
        },
      },
      {
        "@type": "Question",
        name: "Where is The Dog House Pet Salon located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have three convenient locations: Galleria (5917 Richmond Ave), Memorial Park (6434 Washington Ave), and Pearland (2810 Business Center Dr). All are in the Greater Houston area.",
        },
      },
      {
        "@type": "Question",
        name: "What are The Dog House Pet Salon's hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard hours are Monday-Friday 7:00 AM to 7:00 PM, and Saturday 8:00 AM to 6:00 PM. Contact us for Sunday availability.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book an appointment online at www.thedoghouseps.com/appointment-request/ or call us at (832) 930-4060.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer pet boarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide overnight pet boarding with personalized care at all three locations.",
        },
      },
    ],
  };
}
