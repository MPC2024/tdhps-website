'use client';

/**
 * SchemaMarkup Component
 * Generates and renders comprehensive JSON-LD schema markup for SEO and Answer Engine Optimization
 * Outputs multiple schema types for different contexts
 */

import {
  generateOrganizationSchema,
  generateItemListSchema,
  generateAIOptimizationSchema,
} from "@/lib/schema";

interface SchemaMarkupProps {
  /**
   * Type of markup to render
   * "organization" - Brand identity schema
   * "itemList" - Location catalog schema
   * "aiOptimization" - Answer Engine Optimization schema
   * "all" - All schemas combined
   */
  type?: "organization" | "itemList" | "aiOptimization" | "all";
}

/**
 * SchemaMarkup Component
 * Renders JSON-LD script tags for search engines and AI systems
 */
export default function SchemaMarkup({ type = "all" }: SchemaMarkupProps) {
  const schemas = [];

  // Organization schema (always included if not explicitly excluded)
  if (type === "organization" || type === "all") {
    schemas.push(generateOrganizationSchema());
  }

  // ItemList schema (location catalog)
  if (type === "itemList" || type === "all") {
    schemas.push(generateItemListSchema());
  }

  // AI Optimization schema (for ChatGPT, Google SGE, etc.)
  if (type === "aiOptimization" || type === "all") {
    schemas.push(generateAIOptimizationSchema());
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
