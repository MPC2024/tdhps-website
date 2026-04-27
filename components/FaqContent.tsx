"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import StoreLocations from "@/components/StoreLocations";

const groomingFaqKeys = [
  {
    qKey: "faq_grooming_vax_q",
    aKey: "faq_grooming_vax_a",
  },
  {
    qKey: "faq_grooming_dropoff_q",
    aKey: "faq_grooming_dropoff_a",
  },
  {
    qKey: "faq_grooming_after11_q",
    aKey: "faq_grooming_after11_a",
  },
  {
    qKey: "faq_grooming_why11_q",
    aKey: "faq_grooming_why11_a",
  },
  {
    qKey: "faq_grooming_vax_checkin_q",
    aKey: "faq_grooming_vax_checkin_a",
  },
  {
    qKey: "faq_grooming_self_vax_q",
    aKey: "faq_grooming_self_vax_a",
  },
  {
    qKey: "faq_grooming_rush_q",
    aKey: "faq_grooming_rush_a",
  },
  {
    qKey: "faq_grooming_rush_hour_q",
    aKey: "faq_grooming_rush_hour_a",
  },
  {
    qKey: "faq_grooming_duration_q",
    aKey: "faq_grooming_duration_a",
  },
  {
    qKey: "faq_grooming_cost_q",
    aKey: "faq_grooming_cost_a",
  },
  {
    qKey: "faq_grooming_nail_q",
    aKey: "faq_grooming_nail_a",
  },
  {
    qKey: "faq_grooming_dental_q",
    aKey: "faq_grooming_dental_a",
  },
];

const boardingFaqKeys = [
  {
    qKey: "faq_boarding_combine_q",
    aKey: "faq_boarding_combine_a",
  },
  {
    qKey: "faq_daycare_grooming_q",
    aKey: "faq_daycare_grooming_a",
  },
  {
    qKey: "faq_boarding_potty_q",
    aKey: "faq_boarding_potty_a",
  },
  {
    qKey: "faq_boarding_vax_q",
    aKey: "faq_boarding_vax_a",
  },
  {
    qKey: "faq_boarding_dropoff_q",
    aKey: "faq_boarding_dropoff_a",
  },
  {
    qKey: "faq_boarding_included_q",
    aKey: "faq_boarding_included_a",
  },
  {
    qKey: "faq_boarding_outdoor_q",
    aKey: "faq_boarding_outdoor_a",
  },
  {
    qKey: "faq_boarding_session_q",
    aKey: "faq_boarding_session_a",
  },
  {
    qKey: "faq_boarding_segregated_q",
    aKey: "faq_boarding_segregated_a",
  },
];

function FaqItem({ qKey, aKey }: { qKey: string; aKey: string }) {
  const { t } = useLanguage();
  const q = t(qKey as any);
  const a = t(aKey as any);
  const lines = a.split("\n");

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "clamp(16px, 4vw, 28px) clamp(16px, 5vw, 32px)",
        boxShadow: "0 2px 8px rgba(0,0,0,.06)",
        borderLeft: "4px solid #965B83",
      }}
    >
      <h3
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "clamp(15px, 3.5vw, 17px)",
          fontWeight: 700,
          color: "#1F2124",
          marginBottom: "10px",
          lineHeight: 1.4,
        }}
      >
        {q}
      </h3>
      <div
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "clamp(13px, 3vw, 15px)",
          color: "#54595F",
          lineHeight: 1.75,
        }}
      >
        {lines.map((line, i) => (
          <p key={i} style={{ margin: "4px 0" }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function FaqContent() {
  const { t } = useLanguage();

  const allFaqKeys = [...groomingFaqKeys, ...boardingFaqKeys];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqKeys.map((faq) => ({
      "@type": "Question",
      name: t(faq.qKey as any),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(faq.aKey as any).replace(/\n/g, " "),
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thedoghouseps.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://www.thedoghouseps.com/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ── Hero Banner (pet-grooming style) ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-with-belt.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 0 }}
        />
        {/* Curved SVG bottom */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path
              fill="#F8F8F8"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>
        <div
          style={{ maxWidth: "1520px", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 3 }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px, 5vw, 60px)",
              color: "#1F2124",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            {t("frequently_asked_questions")} <span style={{ color: "#965B83" }}>Questions</span>
          </h1>
          <div style={{ marginTop: "32px" }}>
            <Link href="/appointment-request" className="btn-primary">
              {t("schedule_appointment")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pet Grooming FAQs ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,38px)",
              color: "#1F2124",
              marginBottom: "40px",
            }}
          >
            {t("pet_grooming_faqs")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {groomingFaqKeys.map((faq) => (
              <FaqItem key={faq.qKey} qKey={faq.qKey} aKey={faq.aKey} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Boarding & Daycare FAQs ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,38px)",
              color: "#1F2124",
              marginBottom: "40px",
            }}
          >
            {t("boarding_daycare_faqs")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {boardingFaqKeys.map((faq) => (
              <FaqItem key={faq.qKey} qKey={faq.qKey} aKey={faq.aKey} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
          marginBottom: "160px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            {t("ready_to_book_appointment")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            {t("have_more_questions")}{" "}
            <a
              href="tel:7138206140"
              style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}
            >
              (713) 820-6140
            </a>
          </p>
          <Link href="/appointment-request" className="btn-secondary">
            {t("schedule_appointment")}
          </Link>
        </div>
      </section>

      <StoreLocations />
    </>
  );
}
