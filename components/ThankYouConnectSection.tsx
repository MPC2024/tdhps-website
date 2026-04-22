"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

const SOCIAL_LINKS = [
  { label: "Facebook", url: "https://www.facebook.com/thedoghousepetsalon" },
  { label: "X / Twitter", url: "https://twitter.com/TheDogHousePS" },
  { label: "Instagram", url: "https://www.instagram.com/thedoghouseps/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/the-dog-house-pet-salon/" },
  { label: "YouTube", url: "https://www.youtube.com/@thedoghousepetsalonhouston" },
];

export default function ThankYouConnectSection() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        background: "#F8F8F8",
        borderRadius: "12px",
        padding: "20px 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Layer-5-3.png"
          alt="Social icon"
          width={56}
          height={56}
          style={{ flexShrink: 0 }}
          sizes="56px"
        />
        <h3
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "18px",
            color: "#1F2124",
            margin: 0,
          }}
        >
          {t("thankyou_connect_with_us")}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px" }}>
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              color: "#965B83",
              fontWeight: 600,
              textDecoration: "none",
              background: "#fff",
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid #E0D0E0",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
