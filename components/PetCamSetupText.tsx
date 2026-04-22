"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PetCamSetupText() {
  const { t } = useLanguage();
  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(24px,3vw,36px)",
          color: "#1F2124",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        {t("cam_setup_title")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          color: "#54595F",
          lineHeight: 1.7,
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        {t("cam_setup_desc")}
      </p>
    </>
  );
}
