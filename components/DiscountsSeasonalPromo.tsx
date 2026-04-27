"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsSeasonalPromo() {
  const { t } = useLanguage();
  return (
    <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: "4px solid #965B83" }}>
      <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(18px, 2.5vw, 24px)", margin: "0 0 30px 0", color: "#1F2124", fontWeight: "600" }}>{t("discount_seasonal_title")}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ backgroundColor: "#f0f5ff", padding: "25px", borderRadius: "8px", borderLeft: "3px solid #965B83" }}>
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 12px 0", fontWeight: "600" }}>{t("discount_holiday_title")}</h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", lineHeight: 1.6, color: "#54595F", margin: "0" }}>{t("discount_holiday_desc")}</p>
        </div>
        <div style={{ backgroundColor: "#f0f5ff", padding: "25px", borderRadius: "8px", borderLeft: "3px solid #965B83" }}>
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 12px 0", fontWeight: "600" }}>{t("discount_summer_title")}</h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", lineHeight: 1.6, color: "#54595F", margin: "0" }}>{t("discount_summer_desc")}</p>
        </div>
        <div style={{ backgroundColor: "#f0f5ff", padding: "25px", borderRadius: "8px", borderLeft: "3px solid #965B83" }}>
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 12px 0", fontWeight: "600" }}>{t("discount_spring_title")}</h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", lineHeight: 1.6, color: "#54595F", margin: "0" }}>{t("discount_spring_desc")}</p>
        </div>
      </div>
    </section>
  );
}
