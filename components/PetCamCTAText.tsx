"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PetCamCTAText() {
  const { t } = useLanguage();
  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(26px,3vw,40px)",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("cam_cta_title")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "18px",
          color: "rgba(255,255,255,0.9)",
          marginBottom: "30px",
          lineHeight: 1.6,
        }}
      >
        {t("cam_cta_desc")}
      </p>
    </>
  );
}
