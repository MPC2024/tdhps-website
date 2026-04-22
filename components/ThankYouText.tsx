"use client";

import { useLanguage } from "@/lib/LanguageContext";

export interface ThankYouTextProps {
  location: "Galleria" | "Memorial" | "Pearland";
  isNew: boolean;
}

export default function ThankYouText({ location, isNew }: ThankYouTextProps) {
  const { t } = useLanguage();

  return (
    <>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(22px,3vw,32px)",
          color: "#965B83",
          marginBottom: "12px",
          lineHeight: 1.2,
        }}
      >
        {location}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "17px",
          color: "#54595F",
          lineHeight: 1.7,
          marginBottom: "0",
        }}
      >
        {isNew ? t("thankyou_subtext_new") : t("thankyou_subtext_returning")}
      </p>
    </>
  );
}
