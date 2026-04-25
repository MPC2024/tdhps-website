"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function GalleriaStaffSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "80px 20px" }}>
      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp"
            alt={t("loc_keylin_name")}
            width={220}
            height={220}
            style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", display: "block" }}
          />
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              color: "#965B83",
              fontWeight: 600,
            }}
          >
            {t("loc_keylin_title")}
          </p>
        </div>
        <div>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(22px,3vw,32px)",
              color: "#1F2124",
              marginBottom: "16px",
            }}
          >
            {t("loc_keylin_name")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              color: "#54595F",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {t("loc_keylin_bio")}
          </p>
          <Link
            href="/keylin-paulina-orellana-delcid"
            style={{
              backgroundColor: "#965B83",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "50px",
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: "16px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            {t("loc_staff_read_full_bio")}
          </Link>
        </div>
      </div>
    </section>
  );
}
