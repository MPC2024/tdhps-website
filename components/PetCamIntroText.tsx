"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PetCamIntroText() {
  const { t } = useLanguage();
  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(26px,3vw,40px)",
          color: "#1F2124",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        {t("cam_intro_title")}
      </h2>
      <h3
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "20px",
          color: "#965B83",
          textAlign: "center",
          fontWeight: 400,
          marginBottom: "30px",
        }}
      >
        {t("cam_intro_subtitle")}
      </h3>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#54595F",
          lineHeight: 1.7,
          textAlign: "center",
        }}
      >
        {t("cam_intro_desc")}
      </p>
    </>
  );
}
