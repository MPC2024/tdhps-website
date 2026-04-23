"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface HourConfig {
  day: string;
  hours: string;
}

interface LocationHoursSectionProps {
  hours: HourConfig[];
  title?: string;
}

export default function LocationHoursSection({ hours, title }: LocationHoursSectionProps) {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(24px,3vw,36px)",
            color: "#ffffff",
            marginBottom: "30px",
          }}
        >
          {title || t("location_operational_hours")}
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {hours.map((h) => (
            <div
              key={h.day}
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "20px 30px",
                minWidth: "180px",
              }}
            >
              <p
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "16px",
                  color: "#ffffff",
                  marginBottom: "6px",
                }}
              >
                {t(h.day as any)}
              </p>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "20px",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                {t(h.hours as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
