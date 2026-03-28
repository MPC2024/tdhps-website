/**
 * JSON-LD Schema Generation for Reviews
 * Improves SEO through structured data
 */

import { Review } from "@/lib/reviews";

interface SchemaProps {
  businessName: string;
  businessUrl: string;
  address: string;
  reviews: Review[];
  averageRating: number;
  totalCount: number;
}

export function generateAggregateRatingSchema({
  businessName,
  businessUrl,
  address,
  reviews,
  averageRating,
  totalCount,
}: SchemaProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: businessName,
    url: businessUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "TX",
      streetAddress: address,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: totalCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: new Date(review.reviewTime).toISOString().split("T")[0],
    })),
  };

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

/**
 * Return schema as JSON object (for programmatic use)
 */
export function getReviewSchema(props: SchemaProps) {
  return {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: props.businessName,
    url: props.businessUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "TX",
      streetAddress: props.address,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: props.averageRating,
      reviewCount: props.totalCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: props.reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: new Date(review.reviewTime).toISOString().split("T")[0],
    })),
  };
}
