"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const registrationSteps = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-evaluation.png",
    imgAlt: "pet evaluation",
    titleKey: "step1_title",
    descKey: "step1_desc",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-vaccination.png",
    imgAlt: "dog vaccination",
    titleKey: "step2_title",
    descKey: "step2_desc",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-heaven.png",
    imgAlt: "dogs heaven",
    titleKey: "step3_title",
    descKey: "step3_desc",
  },
];

const amenities = [
  {
    titleKey: "quality_assurance",
    descKey: "quality_assurance_desc",
  },
  {
    titleKey: "large_play_area",
    descKey: "large_play_area_desc",
  },
  {
    titleKey: "trained_staff",
    descKey: "trained_staff_desc",
  },
];

export default function HomepageRegistrationSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* Registration Steps */}
      <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(28px, 3vw, 42px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "80px",
              lineHeight: 1.3,
            }}
          >
            {t("our_three_step")}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {registrationSteps.map((step, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <Image
                  src={step.imgSrc}
                  alt={step.imgAlt}
                  width={200}
                  height={200}
                  style={{ width: "200px", height: "200px", objectFit: "contain", marginBottom: "24px" }}
                />
                <h3
                  style={{
                    fontFamily: '"Bowlby One SC", Sans-serif',
                    fontSize: "20px",
                    color: "#1F2124",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {t(step.titleKey as any)}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", Sans-serif',
                    fontSize: "16px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {t(step.descKey as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Amenities */}
      <section style={{ padding: "80px 20px", backgroundColor: "#F8F8F8" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(28px, 3vw, 42px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            {t("pricing_heading")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "18px",
              color: "#54595F",
              textAlign: "center",
              marginBottom: "80px",
              maxWidth: "700px",
              margin: "0 auto 80px",
              lineHeight: 1.6,
            }}
          >
            {t("our_amenities")}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "40px 30px",
                  borderRadius: "8px",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.1)",
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Bowlby One SC", Sans-serif',
                    fontSize: "20px",
                    color: "#1F2124",
                    marginBottom: "16px",
                  }}
                >
                  {t(amenity.titleKey as any)}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", Sans-serif',
                    fontSize: "16px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {t(amenity.descKey as any)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link
              href="/houston-pet-boarding"
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "18px",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "#965B83",
                padding: "15px 40px",
                textDecoration: "none",
                borderRadius: "50px",
                display: "inline-block",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#965B83";
              }}
            >
              {t("view_all_services")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
