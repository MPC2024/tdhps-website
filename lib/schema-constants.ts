/**
 * Schema.org Constants and Static Data
 * Training: Single Responsibility Principle — Separated data constants from schema generation logic
 * Source: Uncle Bob Martin (Clean Code, Chapter 10)
 *
 * Reason for existence: Data constants should be managed independently from schema generation.
 * This enables easy updates to services, social profiles, and other static data without
 * touching the schema generation logic. Each changes for a different reason:
 * - This file changes when business data is updated
 * - schema.ts changes when schema.org spec or generation logic changes
 */

/**
 * Social media profiles for Organization schema
 * Update this when social presence changes (new platform, URL changes, etc.)
 */
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/thedoghousepetsalon",
  "https://www.instagram.com/thedoghousepetsalon",
  "https://www.linkedin.com/company/the-dog-house-pet-salon",
  "https://www.tiktok.com/@thedoghousepetsalon",
];

/**
 * Service offerings
 * Update this when adding new services or changing service descriptions
 */
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
 * Organization contact details
 * Update when phone/contact method changes
 */
export const ORGANIZATION_CONTACT = {
  type: "ContactPoint",
  contactType: "Customer Service",
  telephone: "(713) 820-6140",
  areaServed: ["Houston, TX", "Pearland, TX"],
};

/**
 * FAQ data for AI Optimization Schema
 * Update when frequently asked questions or answers change
 */
export const FAQ_DATA = [
  {
    question: "What services does The Dog House Pet Salon offer?",
    answer:
      "We offer professional dog grooming, dog bathing, doggie daycare, and pet boarding across three Houston locations with 30+ years of experience.",
  },
  {
    question: "Where is The Dog House Pet Salon located?",
    answer:
      "We have three convenient locations: Galleria (5917 Richmond Ave), Memorial Park (6434 Washington Ave), and Pearland (2810 Business Center Dr). All are in the Greater Houston area.",
  },
  {
    question: "What are The Dog House Pet Salon's hours?",
    answer:
      "Standard hours are Monday-Friday 7:00 AM to 7:00 PM, and Saturday 8:00 AM to 6:00 PM. Contact us for Sunday availability.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online at www.thedoghouseps.com/appointment-request/ or call us at (713) 820-6140.",
  },
  {
    question: "Do you offer pet boarding?",
    answer:
      "Yes, we provide overnight pet boarding with personalized care at all three locations.",
  },
];
