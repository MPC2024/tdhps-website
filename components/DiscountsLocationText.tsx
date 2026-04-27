"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsLocationText() {
  const { t } = useLanguage();
  return (
    <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 4vw, 32px)", textAlign: "center", margin: "0 0 40px 0", color: "#1F2124", fontWeight: "700" }}>{t("discount_locations_title")}</h2>
  );
}
