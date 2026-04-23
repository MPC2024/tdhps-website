"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface FaqItem {
  q: string;
  a: string;
}

interface LocationFaqSectionProps {
  faqs: FaqItem[];
}

export default function LocationFaqSection({ faqs }: LocationFaqSectionProps) {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(26px,3vw,40px)",
            color: "#1F2124",
            marginBottom: "40px",
          }}
        >
          {t("location_faqs_heading")}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
            gap: "16px",
          }}
        >
          {faqs.map((faq) => (
            <details
              key={faq.q}
              style={{
                backgroundColor: "#F8F8F8",
                borderRadius: "8px",
                padding: "20px 24px",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "15px",
                  color: "#1F2124",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {t(faq.q as any)}
                <span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
              </summary>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginTop: "12px",
                  whiteSpace: "pre-line",
                }}
              >
                {t(faq.a as any)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
