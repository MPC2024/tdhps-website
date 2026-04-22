"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function BlogCTAText() {
  const { t } = useLanguage();
  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(24px,3vw,36px)",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("blog_cta_title")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "18px",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "32px",
        }}
      >
        {t("blog_cta_desc")}
      </p>
    </>
  );
}
