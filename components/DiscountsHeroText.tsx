"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
        {t("discount_hero_title")}
      </h1>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
        {t("discount_hero_subtitle")}
      </p>
    </>
  );
}
