import type { MetadataRoute } from "next";

/**
 * robots.txt Route Handler
 *
 * SEO: robots.txt manages crawler traffic and directs crawlers to the sitemap.
 * Source: Google Search Central — Technical Crawling
 *
 * Rules:
 * - Allow all crawlers to access public content (Allow: /)
 * - Block /api/ to prevent indexing of API endpoints (Disallow: /api/)
 * - Reference sitemap.xml to guide crawlers to all indexable pages
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://www.thedoghouseps.com/sitemap.xml",
  };
}
