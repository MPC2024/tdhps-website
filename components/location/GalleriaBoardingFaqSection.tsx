"use client";

import { useLanguage } from "@/lib/LanguageContext";

const boardingFaqs = [
  { q: "loc_faq_boarding_checkin_q", a: "loc_faq_boarding_checkin_a" },
  { q: "loc_faq_daycare_grooming_q", a: "loc_faq_daycare_grooming_a" },
  { q: "loc_faq_boarding_vaccines_q", a: "loc_faq_boarding_vaccines_a" },
  { q: "loc_faq_boarding_dropoff_q", a: "loc_faq_boarding_dropoff_a" },
  { q: "loc_faq_daycare_included_q", a: "loc_faq_daycare_included_a" },
  { q: "loc_faq_outdoor_play_q", a: "loc_faq_outdoor_play_a" },
  { q: "loc_faq_play_areas_q", a: "loc_faq_play_areas_a" },
  { q: "loc_faq_board_cats_q", a: "loc_faq_board_cats_a" },
];

export default function GalleriaBoardingFaqSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "16px" }}>
          {t("location_boarding_daycare_heading")}
        </h2>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "36px" }}>
          {t("loc_galleria_boarding_desc")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "16px" }}>
          {boardingFaqs.map((faq) => (
            <details key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "20px 24px", cursor: "pointer" }}>
              <summary style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "15px", color: "#1F2124", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {t(faq.q as any)}<span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
              </summary>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginTop: "12px", whiteSpace: "pre-line" }}>{t(faq.a as any)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
