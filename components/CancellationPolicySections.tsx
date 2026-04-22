"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CancellationPolicySections() {
  const { t } = useLanguage();

  const sections = [
    {
      heading: t("policy_intro_heading"),
      content: t("policy_intro_text"),
    },
    {
      heading: t("policy_deposit_heading"),
      content: t("policy_deposit_text"),
    },
    {
      heading: t("policy_cancellation_heading"),
      content: t("policy_cancellation_text"),
    },
    {
      heading: t("policy_payment_heading"),
      content: t("policy_payment_text"),
    },
  ];

  return (
    <div
      style={{
        fontFamily: '"Outfit", Sans-serif',
        fontSize: "16px",
        color: "#54595F",
        lineHeight: 1.8,
      }}
    >
      {sections.map((section, idx) => (
        <div key={idx}>
          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "18px",
              color: "#965B83",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            {section.heading}
          </h3>
          <p style={{ marginBottom: "20px" }}>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
