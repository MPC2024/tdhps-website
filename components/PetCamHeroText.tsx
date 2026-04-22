"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PetCamHeroText() {
  const { t } = useLanguage();
  return (
    <h1
      style={{
        fontFamily: '"Bowlby One SC", sans-serif',
        fontSize: "60px",
        color: "#ffffff",
        marginBottom: "16px",
        lineHeight: 1.1,
      }}
    >
      {t("cam_hero_text")} <span style={{ color: "#ffddee" }}>{t("cam_with_cameras")}</span>
    </h1>
  );
}
