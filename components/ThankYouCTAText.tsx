"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ThankYouCTAText() {
  const { t } = useLanguage();

  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(24px,3vw,36px)",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        {t("thankyou_book_another")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "17px",
          color: "rgba(255,255,255,0.9)",
          marginBottom: "32px",
        }}
      >
        {t("thankyou_cta_desc")}
      </p>
    </>
  );
}
