"use client";

import { useLanguage } from "@/lib/LanguageContext";

const attractions = [
  {
    name: "loc_galleria_mall",
    desc: "loc_galleria_mall_desc",
  },
  {
    name: "loc_waterwall_park",
    desc: "loc_waterwall_park_desc",
  },
  {
    name: "loc_houston_arboretum",
    desc: "loc_houston_arboretum_desc",
  },
];

export default function GalleriaAttractionsSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
          {t("loc_galleria_area_heading")}
        </h2>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
          {t("loc_galleria_area_subtitle")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {attractions.map((a) => (
            <div key={a.name} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px" }}>{t(a.name as any)}</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{t(a.desc as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
