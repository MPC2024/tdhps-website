"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function GalleriaAboutSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
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
        <div>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#1F2124",
              marginBottom: "20px",
            }}
          >
            {t("loc_galleria_about_heading")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              color: "#54595F",
              lineHeight: 1.8,
              marginBottom: "30px",
            }}
          >
            {t("loc_galleria_about_desc")}
          </p>
          <Link
            href="/appointment-request-form_location_richmond"
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
            {t("schedule_appointment")}
          </Link>
        </div>
        <div>
          <Image
            src="/images/galleria-location.jpg"
            alt="The Dog House Pet Salon Galleria Location"
            width={600}
            height={400}
            quality={85}
            style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
