"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function MemorialParkLocationContent() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(28px,4.5vw,52px)",
          color: "#1F2124",
          marginBottom: "20px",
          lineHeight: 1.15,
        }}
      >
        {t("location_memorial_name")}{" "}
        <span style={{ color: "#965B83" }}>{t("location_memorial_subtitle")}</span>
      </h1>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#54595F",
          lineHeight: 1.7,
          marginBottom: "28px",
          maxWidth: "700px",
        }}
      >
        {t("location_memorial_hero_desc")}
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a
          href="/appointment-request?location=memorial"
          className="btn-primary"
          style={{
            backgroundColor: "#965B83",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "50px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: "18px",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {t("book_appointment")}
        </a>
        <a
          href="https://calculator.thedoghouseps.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#1fb6b0",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "50px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: "18px",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            border: "2px solid #1fb6b0",
          }}
        >
          {t("location_memorial_price_estimate")}
        </a>
      </div>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#1F2124", marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ color: "#1fb6b0", fontSize: "16px" }}>&#9989;</span> {t("location_memorial_price_microcopy")}
      </p>
    </>
  );
}
