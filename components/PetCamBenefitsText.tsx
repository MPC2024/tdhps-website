"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PetCamBenefitsText() {
  const { t } = useLanguage();
  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(24px,3vw,36px)",
          color: "#1F2124",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        {t("cam_benefits_title")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#54595F",
          lineHeight: 1.7,
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        {t("cam_benefits_desc")}
      </p>
      <h3
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "22px",
          color: "#1F2124",
          marginBottom: "30px",
        }}
      >
        {t("cam_benefits_heading")}
      </h3>
    </>
  );
}
