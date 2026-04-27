"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DiscountsPartnerCards() {
  const { t } = useLanguage();
  return (
    <>
      {/* The Farmer's Dog Partnership */}
      <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", marginBottom: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(18px, 2.5vw, 24px)", margin: "0", color: "#1F2124", fontWeight: "600" }}>{t("discount_farmers_dog_title")}</h2>
        </div>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.8, color: "#54595F", margin: "0 0 15px 0" }}>{t("discount_farmers_dog_desc")}</p>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#965B83", fontWeight: "600", margin: "0 0 20px 0" }}>{t("discount_farmers_dog_benefits")}</p>
        <a
          href="https://www.thefarmersdog.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", color: "#965B83", textDecoration: "none", fontWeight: "600", transition: "all 0.3s ease", borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "#965B83"; e.currentTarget.style.paddingRight = "5px"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.paddingRight = "0"; }}
        >
          {t("discount_farmers_dog_link")}
        </a>
      </section>

      {/* NuVet Labs Partnership */}
      <section style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "40px", marginBottom: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(18px, 2.5vw, 24px)", margin: "0", color: "#1F2124", fontWeight: "600" }}>{t("discount_nuvet_title")}</h2>
        </div>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.8, color: "#54595F", margin: "0 0 15px 0" }}>{t("discount_nuvet_desc")}</p>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.95rem", color: "#965B83", fontWeight: "600", margin: "0 0 20px 0" }}>{t("discount_nuvet_benefits")}</p>
        <a
          href="https://www.nuvetlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", color: "#965B83", textDecoration: "none", fontWeight: "600", transition: "all 0.3s ease", borderBottom: "2px solid transparent" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = "#965B83"; e.currentTarget.style.paddingRight = "5px"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.paddingRight = "0"; }}
        >
          {t("discount_nuvet_link")}
        </a>
      </section>
    </>
  );
}
