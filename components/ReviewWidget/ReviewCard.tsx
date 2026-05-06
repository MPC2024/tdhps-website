"use client";

/**
 * Single Responsibility: ReviewCard Container
 * One job: Compose review data into layout, delegate rendering to focused sub-components
 * Changes only when: overall card layout or spacing changes
 *
 * Training: Uncle Bob's SRP principle
 * Refactored to extract: icons, expansion logic, header, text, footer
 */

import { Review, getRelativeTime } from "@/lib/reviews";
import { useReviewExpansion } from "./useReviewExpansion";
import ReviewHeader from "./ReviewHeader";
import ReviewText from "./ReviewText";
import ReviewFooter from "./ReviewFooter";
import type { Review as ReviewType } from "@/lib/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // Delegate state management to custom hook
  const expansion = useReviewExpansion(review.text, 150);
  const relativeTime = getRelativeTime(review.reviewTime);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Delegate to header component */}
      <ReviewHeader source={review.source as "google" | "yelp"} rating={review.rating} />

      {/* Delegate to text component */}
      <ReviewText
        displayText={expansion.displayText}
        isLongText={expansion.isLongText}
        isExpanded={expansion.isExpanded}
        onToggleExpand={expansion.toggle}
      />

      {/* Delegate to footer component */}
      <ReviewFooter
        author={review.author}
        relativeTime={relativeTime}
        authorPhotoUrl={review.authorPhotoUrl}
        url={review.url}
        source={review.source as "google" | "yelp"}
      />
    </div>
  );
}
