"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

interface Slide {
  imgSrc: string;
  imgAlt: string;
  subheading: string;
  heading: (t: any) => React.ReactNode;
  textKey: string;
}

const slides: Slide[] = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: (t) => <>
      {t("we_take_care")} <span style={{ color: "#965B83" }}>{t("your_pets")}</span>
    </>,
    textKey: "hero_slide1_text",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-2.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: (t) => <>
      {t("treat_your")} <span style={{ color: "#965B83" }}>{t("pet_spa")}</span> {t("day")}
    </>,
    textKey: "hero_slide2_text",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-3.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: (t) => <>
      {t("experience")} <span style={{ color: "#965B83" }}>{t("joy_care")}</span>
    </>,
    textKey: "hero_slide3_text",
  },
];

export default function HeroSlider() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "clamp(300px, 85vw, 900px)",
      }}
      className="hero-slider-container"
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-slider-container {
            height: 60vh !important;
          }
        }
        @media (max-width: 480px) {
          .hero-slider-container {
            height: 55vh !important;
          }
        }
      `}</style>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
            zIndex: i === current ? 1 : 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background image */}
          <Image
            src={slide.imgSrc}
            alt={slide.imgAlt}
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "low"}
            style={{ objectFit: "cover", zIndex: 0 }}
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw"
            quality={i === 0 ? 85 : 75}
          />
          {/* White overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFF",
              opacity: 0.6,
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "10px 30px",
              width: "100%",
              maxWidth: "1520px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "clamp(280px, 50%, 700px)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(14px, 3.5vw, 20px)",
                  marginBottom: "10px",
                  fontWeight: 500,
                  fontFamily: '"Outfit", Sans-serif',
                  color: "#6B4562",
                }}
              >
                {slide.subheading}
              </p>
              <h1
                style={{
                  fontSize: "clamp(36px, 4.17vw, 60px)",
                  marginBottom: "15px",
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  color: "#000",
                  lineHeight: 1.2,
                }}
              >
                {slide.heading(t)}
              </h1>
              <p
                style={{
                  fontSize: "clamp(14px, 3vw, 18px)",
                  marginBottom: "clamp(30px, 5vw, 50px)",
                  color: "#000",
                  fontFamily: '"Outfit", Sans-serif',
                }}
              >
                {t(slide.textKey as any)}
              </p>
              <Link
                href="/appointment-request"
                style={{
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "15px 25px",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontFamily: '"Outfit", Sans-serif',
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "44px",
                  fontSize: "clamp(14px, 3vw, 16px)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#965B83";
                }}
              >
                {t("book_appointment")}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Curved bottom border removed — now in page.tsx */}
    </div>
  );
}
