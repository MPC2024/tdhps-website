"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function MemorialDirectionsSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", textAlign: "center", marginBottom: "65px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "60px", color: "#965B83", marginBottom: "20px", lineHeight: 1.1 }}>
          {t("loc_need_directions")}
        </h2>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", marginBottom: "36px" }}>
          {t("loc_memorial_subtitle_nav")}
        </p>
        <a
          href="https://maps.google.com/?q=6434+Washington+Ave,+Houston,+TX+77007"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", backgroundColor: "#965B83", color: "#ffffff", fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 600, padding: "16px 40px", borderRadius: "50px", textDecoration: "none" }}
        >
          {t("loc_get_directions_now")}
        </a>
      </div>
    </section>
  );
}
