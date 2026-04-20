"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomepageAboutSection() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#ffffff", position: "relative" }}>
      {/* Decorative image top-left (desktop only) */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          opacity: 0.6,
          display: "none",
        }}
        className="hidden md:block"
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-5.png"
          alt="image 5"
          width={191}
          height={178}
          style={{ width: "120px", height: "auto" }}
        />
      </div>

      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* Left: dog images */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "flex-start" }}>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/05/white-dog-shaking-hand.webp"
            alt="White dog shaking hand"
            width={465}
            height={566}
            style={{ width: "clamp(200px, 32vw, 465px)", height: "auto", borderRadius: "8px" }}
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 320px, 465px"
          />
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/German-Shephard.jpg"
            alt="German Shephard"
            width={220}
            height={558}
            style={{ width: "clamp(100px, 15vw, 220px)", height: "auto", borderRadius: "8px", marginTop: "85px" }}
            sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 220px"
          />
        </div>

        {/* Right: text */}
        <div>
          <h1
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(24px, 2.5vw, 36px)",
              color: "#1F2124",
              marginBottom: "20px",
              lineHeight: 1.3,
            }}
          >
            {t("dog_grooming_daycare_boarding")}{" "}
            <span style={{ color: "#965B83" }}>The Dog House Pet Salon</span>
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "16px",
              color: "#54595F",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            {t("welcome_to_dog_house")}
          </p>
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "16px",
              color: "#54595F",
              lineHeight: 1.7,
            }}
          >
            {t("our_services_not_limited")}
          </p>
        </div>
      </div>
    </section>
  );
}
