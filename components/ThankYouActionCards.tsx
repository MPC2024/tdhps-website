"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export interface ThankYouActionCardsProps {
  reviewLink: string;
  directionsLink: string;
}

export default function ThankYouActionCards({ reviewLink, directionsLink }: ThankYouActionCardsProps) {
  const { t } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Write a Review */}
      <a
        href={reviewLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          background: "#F8F8F8",
          borderRadius: "12px",
          padding: "20px 24px",
          textDecoration: "none",
          transition: "box-shadow 0.2s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Layer-6-5-1.png"
          alt="Review icon"
          width={56}
          height={56}
          style={{ flexShrink: 0 }}
          sizes="56px"
        />
        <div>
          <h3
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "18px",
              color: "#1F2124",
              margin: "0 0 4px",
            }}
          >
            {t("thankyou_write_review")}
          </h3>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              color: "#54595F",
              margin: 0,
            }}
          >
            {t("thankyou_review_on_google")}
          </p>
        </div>
      </a>

      {/* Get Directions */}
      <a
        href={directionsLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          background: "#F8F8F8",
          borderRadius: "12px",
          padding: "20px 24px",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/direction.png"
          alt="Directions icon"
          width={56}
          height={56}
          style={{ flexShrink: 0 }}
          sizes="56px"
        />
        <div>
          <h3
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "18px",
              color: "#1F2124",
              margin: "0 0 4px",
            }}
          >
            {t("thankyou_get_directions")}
          </h3>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              color: "#54595F",
              margin: 0,
            }}
          >
            {t("thankyou_directions_maps")}
          </p>
        </div>
      </a>
    </div>
  );
}
