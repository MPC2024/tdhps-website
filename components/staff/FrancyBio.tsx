"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FrancyBio() {
  const { t } = useLanguage();

  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(22px,3vw,34px)",
          color: "#1F2124",
          marginBottom: "8px",
          marginTop: 0,
        }}
      >
        {t("francy_name")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#965B83",
          fontWeight: 600,
          marginBottom: "24px",
        }}
      >
        {t("staff_master_groomer")} — {t("francy_location")}
      </p>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#54595F",
          lineHeight: 1.7,
          marginBottom: "16px",
        }}
      >
        {t("staff_francy_bio")}
      </p>
    </>
  );
}
