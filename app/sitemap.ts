import type { MetadataRoute } from "next";

const BASE_URL = "https://www.thedoghouseps.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    /* ── Homepage ── */
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },

    /* ── Service Pages ── */
    {
      url: `${BASE_URL}/pet-grooming`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dog-day-care`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/houston-pet-boarding`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pet-bathing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* ── Location Pages ── */
    {
      url: `${BASE_URL}/galleria-uptown-park-location`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/memorial-park-location`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pearland-location`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* ── Info Pages ── */
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pet-cam`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/grooming-school`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    /* ── Staff / Bio Pages ── */
    {
      url: `${BASE_URL}/our-staff`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/donna-williams`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/keylin-paulina-orellana-delcid`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/margarita-batres`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/francy-quevedo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    /* ── Appointment Forms ── */
    {
      url: `${BASE_URL}/appointment-request`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/appointment-request-form_location_richmond`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/appointment-request-memorial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/appointment-request-pearland`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    /* ── Policy Pages ── */
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cancellation-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /*
   * NOTE: Thank-you pages are intentionally excluded from the sitemap.
   * They are post-submission confirmation pages and should not be indexed.
   * Their noindex is handled via robots metadata on each page.
   */
}
