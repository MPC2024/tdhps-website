"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function GalleriaHoursSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 20px", borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(24px,3vw,36px)",
            color: "#965B83",
            marginBottom: "16px",
          }}
        >
          {t("location_operational_hours")}
        </h2>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "15px",
            color: "#54595F",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          Our operating hours are Monday through Friday from 7:00 am to 7:00 pm, Saturday from 8:00 am to 6:00 pm, and Sunday from 4:00 pm to 5:00 pm.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#1F2124", fontWeight: 600 }}>Monday-Friday, 7AM - 7PM</span>
          </div>
          <span style={{ color: "#E8E8E8", fontSize: "20px" }}>|</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#1F2124", fontWeight: 600 }}>Saturday, 8AM - 6PM</span>
          </div>
          <span style={{ color: "#E8E8E8", fontSize: "20px" }}>|</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#1F2124", fontWeight: 600 }}>Sunday, 4PM - 5PM</span>
          </div>
        </div>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "15px",
            color: "#54595F",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          Schedule an appointment today and experience the exceptional care and services that make us a trusted choice for pet owners in the Galleria area.
        </p>
        <Link
          href="/appointment-request?location=galleria"
          style={{
            display: "inline-block",
            backgroundColor: "#965B83",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: "50px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          {t("schedule_appointment")}
        </Link>
      </div>
    </section>
  );
}
