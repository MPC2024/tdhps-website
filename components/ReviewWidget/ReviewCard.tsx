"use client";

import { useState } from "react";
import Image from "next/image";
import { Review, getRelativeTime } from "@/lib/reviews";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

const platformIcons = {
  google: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
  yelp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-5.33 0-9.68 3.35-10.88 8.08-.3 1.08 0 2.04.86 2.48l4.88 2.52c.5.26 1.12.24 1.66-.04l2.74-1.58c.38-.22.87-.22 1.25 0l2.74 1.58c.54.28 1.16.3 1.66.04l4.88-2.52c.86-.44 1.16-1.4.86-2.48C21.68 5.35 17.33 2 12 2m0 15c-4 0-7.63-2.54-8.82-6.22-.29-.87.03-1.8.85-2.18l4.88-2.52c.5-.26 1.12-.24 1.66.04l2.74 1.58c.38.22.87.22 1.25 0l2.74-1.58c.54-.28 1.16-.3 1.66-.04l4.88 2.52c.82.38 1.14 1.31.85 2.18C19.63 14.46 16 17 12 17" />
    </svg>
  ),
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = review.text.length > 150;
  const displayText = isExpanded ? review.text : review.text.slice(0, 150);
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
      {/* Platform Badge + Stars */}
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
            color: review.source === "google" ? "#4285F4" : "#E53238",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {platformIcons[review.source]}
          {review.source}
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>

      {/* Review Text */}
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#54595F",
          margin: 0,
        }}
      >
        {displayText}
        {!isExpanded && isLongText && "…"}
      </p>

      {/* Read More Button */}
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "none",
            border: "none",
            color: "#965B83",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            padding: 0,
            textAlign: "left",
            textDecoration: "underline",
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Author + Date */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "8px",
          paddingTop: "8px",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
          {review.authorPhotoUrl ? (
            <img
              src={review.authorPhotoUrl}
              alt={review.author}
              width={32}
              height={32}
              style={{ borderRadius: "50%", width: "32px", height: "32px", objectFit: "cover" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'; }}
            />
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          )}
        </div>
        <div>
          <p
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "13px",
              fontWeight: 600,
              color: "#1F2124",
              margin: 0,
            }}
          >
            {review.author}
          </p>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "12px",
              color: "#999999",
              margin: 0,
            }}
          >
            {relativeTime}
          </p>
        </div>
      </div>

      {/* Review Link */}
      {review.url && (
        <a
          href={review.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "#965B83",
            textDecoration: "none",
            marginTop: "4px",
          }}
        >
          View on {review.source === "google" ? "Google" : "Yelp"} →
        </a>
      )}
    </div>
  );
}
