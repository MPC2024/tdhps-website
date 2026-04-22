"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/brown-cute-dog-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "40px 20px",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "120px",
            color: "#965B83",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          {t("notfound_404")}
        </h1>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "32px",
            color: "#1F2124",
            marginBottom: "16px",
          }}
        >
          {t("notfound_page_not_found")}
        </h2>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "18px",
            color: "#54595F",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}
        >
          {t("notfound_page_wandered_off")}
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            backgroundColor: "#965B83",
            color: "#ffffff",
            padding: "14px 36px",
            borderRadius: "50px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: "none",
            transition: "opacity 0.3s",
          }}
        >
          {t("notfound_back_to_home")}
        </Link>
      </div>
    </main>
  );
}
