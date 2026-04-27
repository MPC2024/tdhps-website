"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function DiscountsOfferCard() {
  const { t } = useLanguage();
  return (
    <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", gap: "20px", flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(20px, 3vw, 28px)", margin: "0", color: "#1F2124", fontWeight: "600", flex: "1", minWidth: "250px" }}>{t("discount_new_customer_title")}</h2>
        <div style={{ backgroundColor: "#965B83", color: "white", padding: "12px 24px", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "700", letterSpacing: "1px", whiteSpace: "nowrap" }}>{t("discount_new_customer_badge")}</div>
      </div>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.8, color: "#54595F", margin: "0 0 15px 0" }}>{t("discount_new_customer_desc")}</p>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#999", fontStyle: "italic", margin: "0 0 25px 0" }}>{t("discount_new_customer_note")}</p>
      <Link href="/appointment-request/" style={{ display: "inline-block", background: "linear-gradient(135deg, #965B83 0%, #B8769D 100%)", color: "white", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "1rem", transition: "all 0.3s ease", border: "2px solid transparent" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
        {t("discount_book_first_appt")}
      </Link>
    </section>
  );
}
