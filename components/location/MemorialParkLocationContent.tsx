"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function MemorialParkLocationContent() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(32px,5vw,64px)",
          color: "#ffffff",
          marginBottom: "24px",
          lineHeight: 1.1,
        }}
      >
        {t("location_memorial_name")}{" "}
        <span style={{ color: "#965B83" }}>{t("location_memorial_subtitle")}</span>
      </h1>
      <a
        href="/appointment-request-form_location_washington"
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
        {t("schedule_appointment")}
      </a>
    </>
  );
}
