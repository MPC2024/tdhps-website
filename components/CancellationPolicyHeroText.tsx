"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CancellationPolicyHeroText() {
  const { t } = useLanguage();
  return (
    <>
      <h1
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(28px, 5vw, 60px)",
          color: "#1F2124",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}
      >
        {t("policy_cancellation_title")} <span style={{ color: "#965B83" }}>{t("policy_word")}</span>
      </h1>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "clamp(16px, 2vw, 22px)",
          color: "#54595F",
          marginBottom: "0",
          maxWidth: "600px",
        }}
      >
        {t("policy_dog_house")}
      </p>
    </>
  );
}
