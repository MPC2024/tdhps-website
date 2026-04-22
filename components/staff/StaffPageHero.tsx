"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function StaffPageHero() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "60px",
          color: "#1F2124",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}
      >
        {t("staff_page_title")}
      </h1>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "clamp(16px,2vw,22px)",
          color: "#1F2124",
          marginBottom: "32px",
          maxWidth: "600px",
        }}
      >
        {t("staff_page_intro")}
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Link
          href="/appointment-request"
          style={{
            backgroundColor: "#965B83",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: "50px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
            fontSize: "16px",
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          {t("staff_get_appointment")}
        </Link>
      </div>
    </>
  );
}
