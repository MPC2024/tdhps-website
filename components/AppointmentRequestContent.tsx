"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function AppointmentRequestContent() {
  const { t } = useLanguage();

  const steps = [
    { step: 1, titleKey: "appt_step_1_title", descKey: "appt_step_1_desc" },
    { step: 2, titleKey: "appt_step_2_title", descKey: "appt_step_2_desc" },
    { step: 3, titleKey: "appt_step_3_title", descKey: "appt_step_3_desc" },
    { step: 4, titleKey: "appt_step_4_title", descKey: "appt_step_4_desc" },
  ];

  return (
    <div>
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(22px, 2.5vw, 30px)",
          color: "#1F2124",
          marginBottom: "16px",
          lineHeight: 1.2,
        }}
      >
        {t("appt_ready_to_pamper")}
      </h2>
      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "15px",
          color: "#54595F",
          marginBottom: "28px",
          lineHeight: 1.7,
        }}
      >
        At The Dog House Pet Salon, we specialize in providing top-notch grooming, boarding, and daycare services. With locations in Houston&apos;s{" "}
        <Link href="/galleria-uptown-park-location" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
          Galleria
        </Link>{" "}and{" "}
        <Link href="/memorial-park-location" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
          Memorial Park
        </Link>{" "}areas, as well as{" "}
        <Link href="/pearland-location" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
          Pearland
        </Link>, our experienced team ensures your pet receives the best care possible.
      </p>

      <h3
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "16px",
          fontWeight: 700,
          color: "#1F2124",
          marginBottom: "20px",
        }}
      >
        {t("appt_booking_made_simple")}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
        {steps.map((step) => (
          <div key={step.step} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div
              style={{
                minWidth: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#965B83",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              {step.step}
            </div>
            <div>
              <h4
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1F2124",
                  marginBottom: "4px",
                }}
              >
                {t(step.titleKey as any)}
              </h4>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  color: "#54595F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {t(step.descKey as any)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: "rgba(150, 91, 131, 0.08)", borderRadius: "12px", padding: "20px", borderLeft: "4px solid #965B83", marginBottom: "24px" }}>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "14px",
            color: "#54595F",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {t("appt_submit_confirmation")}
        </p>
      </div>

      <p
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "15px",
          color: "#54595F",
          lineHeight: 1.6,
        }}
      >
        <strong>{t("appt_need_assistance")}</strong>{" "}
        <a href="tel:+17138206140" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
          {t("appt_call_us")}
        </a>{" "}
        — {t("appt_hablamos_espanol")}
      </p>
    </div>
  );
}
