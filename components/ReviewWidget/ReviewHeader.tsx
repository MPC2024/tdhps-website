"use client";

/**
 * Single Responsibility: Review Header (Platform Badge + Stars)
 * One job: Render platform badge and rating stars in header
 * Changes only when: header layout or styling changes
 */

import StarRating from "./StarRating";
import { getPlatformIcon, getPlatformColor } from "./getPlatformIcon";

interface ReviewHeaderProps {
  source: "google" | "yelp";
  rating: number;
}

export default function ReviewHeader({ source, rating }: ReviewHeaderProps) {
  const platformIcon = getPlatformIcon(source);
  const platformColor = getPlatformColor(source);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: platformColor,
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {platformIcon}
        {source}
      </div>
      <StarRating rating={rating} size="sm" />
    </div>
  );
}
