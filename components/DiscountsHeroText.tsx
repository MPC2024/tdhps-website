"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1 className="title">{t("discount_hero_title")}</h1>
      <p className="subtitle">{t("discount_hero_subtitle")}</p>
    </>
  );
}
