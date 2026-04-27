"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function AppointmentHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(28px, 5vw, 60px)",
          color: "#1F2124",
          marginBottom: "12px",
          lineHeight: 1.1,
        }}
      >
        {t("appt_hero_book")} <span style={{ color: "#965B83" }}>{t("appt_hero_appointment")}</span>
      </h1>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(18px,2.5vw,28px)",
          color: "#54595F",
          fontWeight: 400,
          margin: 0,
        }}
      >
        {t("appt_hero_fill_form")}
      </h2>
    </>
  );
}
