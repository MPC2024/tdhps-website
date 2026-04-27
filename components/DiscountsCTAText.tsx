"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsCTAText() {
  const { t } = useLanguage();
  return (
    <div>
      <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 4vw, 36px)", margin: "0 0 15px 0", fontWeight: "700", color: "white" }}>{t("discount_final_cta_title")}</h2>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", margin: "0", opacity: 0.95, lineHeight: 1.6, color: "white" }}>{t("discount_final_cta_desc")}</p>
    </div>
  );
}
