"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px, 6vw, 64px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1, fontWeight: "400", letterSpacing: "-0.5px" }}>
        {t("discount_hero_title")}
      </h1>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2.5vw, 22px)", color: "#54595F", marginBottom: "32px", maxWidth: "700px", lineHeight: 1.6 }}>
        {t("discount_hero_subtitle")}
      </p>
    </>
  );
}
