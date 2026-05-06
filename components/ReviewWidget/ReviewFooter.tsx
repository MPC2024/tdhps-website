"use client";

/**
 * Single Responsibility: Review Footer (Author + Date + Link)
 * One job: Render author info, date, and review link
 * Changes only when: footer layout or styling changes
 */

import Image from "next/image";

interface ReviewFooterProps {
  author: string;
  relativeTime: string;
  authorPhotoUrl?: string;
  url?: string;
  source: "google" | "yelp";
}

export default function ReviewFooter({
  author,
  relativeTime,
  authorPhotoUrl,
  url,
  source,
}: ReviewFooterProps) {
  const platformDisplayName = source === "google" ? "Google" : "Yelp";

  return (
    <>
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
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {authorPhotoUrl ? (
            <Image
              src={authorPhotoUrl}
              alt={author}
              width={32}
              height={32}
              style={{
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                objectFit: "cover",
              }}
              sizes="32px"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const parent = (e.currentTarget as HTMLImageElement).parentElement!;
                parent.innerHTML =
                  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
              }}
            />
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
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
            {author}
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

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "#965B83",
            textDecoration: "none",
            marginTop: "4px",
          }}
        >
          View on {platformDisplayName} →
        </a>
      )}
    </>
  );
}
