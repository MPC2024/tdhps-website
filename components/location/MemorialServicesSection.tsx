"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const services = [
  {
    title: "loc_grooming_bathing_title",
    desc: "loc_grooming_bathing_desc",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-grooming.jpg",
    link: "/pet-grooming",
  },
  {
    title: "loc_boarding_title",
    desc: "loc_boarding_desc",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-boarding.jpg",
    link: "/houston-pet-boarding",
  },
  {
    title: "loc_daycare_title",
    desc: "loc_daycare_desc",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    link: "/houston-pet-dog-daycare",
  },
];

export default function MemorialServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image22.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "100px 20px",
        position: "relative",
      }}
    >
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFFFFF",
          opacity: 0.85,
        }}
      />

      {/* Content container */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#1F2124",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {t("loc_our_services")}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "16px",
            color: "#54595F",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 80px",
            lineHeight: 1.6,
          }}
        >
          {t("loc_our_services_desc")}
        </p>

        {/* Cards grid */}
        <style dangerouslySetInnerHTML={{ __html: `
          .services-cards-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin: 0 auto;
          }
          @media (max-width: 1024px) {
            .services-cards-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
            }
          }
          @media (max-width: 640px) {
            .services-cards-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }
          }
        `}} />

        <div className="services-cards-grid">
          {services.map((svc) => (
            <div
              key={svc.link}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "40px 30px",
                textAlign: "center",
                border: "1px solid #965B83",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Circular image */}
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "30px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={svc.img}
                  alt={t(svc.title as any)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="200px"
                  priority={false}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "22px",
                  color: "#1F2124",
                  marginBottom: "16px",
                  lineHeight: 1.3,
                }}
              >
                {t(svc.title as any)}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  color: "#54595F",
                  lineHeight: 1.6,
                  marginBottom: "30px",
                  flex: 1,
                }}
              >
                {t(svc.desc as any)}
              </p>

              {/* Read More button */}
              <Link
                href={svc.link}
                style={{
                  display: "inline-block",
                  backgroundColor: "#965B83",
                  color: "#FFFFFF",
                  padding: "12px 32px",
                  borderRadius: "25px",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#7d4968";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#965B83";
                }}
              >
                {t("loc_read_more")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
