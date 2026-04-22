"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function CancellationPolicyCTA() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        backgroundColor: "#F8F8F8",
        borderRadius: "12px",
        padding: "30px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: '"Bowlby One SC", Sans-serif',
          fontSize: "20px",
          color: "#1F2124",
          marginBottom: "16px",
          fontWeight: 400,
        }}
      >
        {t("policy_cta_title")}
      </p>
      <Link
        href="/appointment-request"
        style={{
          backgroundColor: "#965B83",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "50px",
          fontFamily: '"Outfit", Sans-serif',
          fontWeight: 600,
          fontSize: "16px",
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        {t("policy_cta_button")}
      </Link>
    </div>
  );
}
