"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TermsOfUseHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "60px",
          color: "#ffffff",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}
      >
        {t("policy_terms_title")}
      </h1>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "clamp(16px, 2vw, 22px)",
          color: "rgba(255,255,255,0.9)",
          marginBottom: "0",
          maxWidth: "600px",
        }}
      >
        {t("policy_dog_house_white")}
      </p>
    </>
  );
}
