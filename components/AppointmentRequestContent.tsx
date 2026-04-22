"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function AppointmentRequestContent() {
  const { t } = useLanguage();

  const steps = [
    {
      step: 1,
      titleKey: "appt_step_1_title",
      descKey: "appt_step_1_desc",
    },
    {
      step: 2,
      titleKey: "appt_step_2_title",
      descKey: "appt_step_2_desc",
    },
    {
      step: 3,
      titleKey: "appt_step_3_title",
      descKey: "appt_step_3_desc",
    },
    {
      step: 4,
      titleKey: "appt_step_4_title",
      descKey: "appt_step_4_desc",
    },
  ];

  return (
    <>
      {/* ── Booking Made Simple ── */}
      <section style={{ backgroundColor: "#f8f8f8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {t("appt_ready_to_pamper")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              color: "#54595F",
              textAlign: "center",
              marginBottom: "12px",
              lineHeight: 1.7,
            }}
          >
            {t("appt_intro_paragraph")}
            <br />
            {/* Location links preserved from original */}
            <Link href="/galleria-uptown-park-location" style={{ color: "#965B83", fontWeight: 600 }}>
              Galleria
            </Link>{" "}
            and{" "}
            <Link href="/memorial-park-location" style={{ color: "#965B83", fontWeight: 600 }}>
              Memorial Park
            </Link>
          </p>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              fontWeight: 700,
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            {t("appt_booking_made_simple")}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#965B83",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "20px",
                      fontWeight: 700,
                    }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1F2124",
                    marginBottom: "8px",
                    margin: "0 0 8px 0",
                  }}
                >
                  {t(step.titleKey as any)}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {t(step.descKey as any)}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              color: "#54595F",
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            {t("appt_submit_confirmation")}
            <br />
            <strong>{t("appt_need_assistance")}</strong>{" "}
            <a href="tel:+17138206140" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
              {t("appt_call_us")}
            </a>{" "}
            — {t("appt_hablamos_espanol")}
          </p>
        </div>
      </section>
    </>
  );
}
