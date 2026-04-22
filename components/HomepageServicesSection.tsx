"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const services = [
  {
    titleKey: "service_pet_grooming",
    descKey: "service_grooming_desc",
    href: "/pet-grooming",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-grooming.jpg",
    imgAlt: "pet grooming",
  },
  {
    titleKey: "service_pet_boarding",
    descKey: "service_boarding_desc",
    href: "/houston-pet-boarding",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-boarding.jpg",
    imgAlt: "pet boarding",
  },
  {
    titleKey: "service_daycare",
    descKey: "service_daycare_desc",
    href: "/dog-day-care",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    imgAlt: "doggie daycare",
  },
];

export default function HomepageServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}
    >
      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((svc) => (
          <div
            key={svc.href}
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 30px",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "6px 6px 9px rgba(0,0,0,.1)",
            }}
          >
            <Link href={svc.href} style={{ display: "block", marginBottom: "16px" }}>
              <Image
                src={svc.imgSrc}
                alt={svc.imgAlt}
                width={250}
                height={250}
                style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%" }}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 250px"
              />
            </Link>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "22px",
                fontWeight: 400,
                color: "#1F2124",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              {t(svc.titleKey as any)}
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              {t(svc.descKey as any)}
            </p>
            <Link
              href={svc.href}
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                fontWeight: 600,
                color: "#965B83",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {t("read_more")}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
