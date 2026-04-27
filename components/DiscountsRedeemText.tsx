"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsRedeemText() {
  const { t } = useLanguage();
  return (
    <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: "4px solid #965B83" }}>
      <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(18px, 2.5vw, 24px)", margin: "0 0 30px 0", color: "#1F2124", fontWeight: "600" }}>{t("discount_redeem_title")}</h2>
      <ol style={{ listStyle: "none", padding: "0", margin: "0", display: "grid", gap: "25px" }}>
        <li style={{ display: "flex", gap: "25px", alignItems: "flex-start" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", backgroundColor: "#965B83", color: "white", borderRadius: "50%", fontWeight: "700", fontSize: "1.2rem", flexShrink: 0 }}>1</span>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 8px 0", fontWeight: "600" }}>{t("discount_step1_title")}</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#54595F", lineHeight: 1.6, margin: "0" }}>{t("discount_step1_desc")}</p>
          </div>
        </li>
        <li style={{ display: "flex", gap: "25px", alignItems: "flex-start" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", backgroundColor: "#965B83", color: "white", borderRadius: "50%", fontWeight: "700", fontSize: "1.2rem", flexShrink: 0 }}>2</span>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 8px 0", fontWeight: "600" }}>{t("discount_step2_title")}</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#54595F", lineHeight: 1.6, margin: "0" }}>{t("discount_step2_desc")}</p>
          </div>
        </li>
        <li style={{ display: "flex", gap: "25px", alignItems: "flex-start" }}>
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", backgroundColor: "#965B83", color: "white", borderRadius: "50%", fontWeight: "700", fontSize: "1.2rem", flexShrink: 0 }}>3</span>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", color: "#1F2124", margin: "0 0 8px 0", fontWeight: "600" }}>{t("discount_step3_title")}</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#54595F", lineHeight: 1.6, margin: "0" }}>{t("discount_step3_desc")}</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
