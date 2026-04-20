"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// Inline SVG Icons (as components to avoid emoji concerns)
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-2.25 4.5-7 7-11 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v12" />
  </svg>
);

const DogHouseIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 9v2h2v10h16V11h2V9L12 2zm0 3.5l7 4.9V20H5V10.4l7-4.9z" />
    <path d="M10 12h4v6h-4z" />
  </svg>
);

const locations = [
  {
    name: "Galleria / Uptown Park",
    address: "5917 Richmond Ave",
    email: "galleria@thedoghouseps.com",
  },
  {
    name: "Memorial Park",
    address: "6434 Washington Ave",
    email: "memorial@thedoghouseps.com",
  },
  {
    name: "Pearland",
    address: "2810 Business Center Dr. #126",
    email: "pearland@thedoghouseps.com",
  },
];

// Shared styles
const textStyle: React.CSSProperties = {
  fontFamily: "Outfit, sans-serif",
  fontSize: "clamp(14px, 4vw, 18px)",
  fontWeight: 400,
  lineHeight: "1.5rem",
  color: "#FFF",
};

const titleStyle: React.CSSProperties = {
  fontFamily: '"Bowlby One SC", sans-serif',
  fontSize: "clamp(18px, 4vw, 22px)",
  fontWeight: 400,
  color: "#FFF",
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  maxWidth: "700px",
  width: "100%",
  maxHeight: "85vh",
  overflowY: "auto",
  padding: "clamp(20px, 5vw, 40px)",
  position: "relative",
  color: "#1F2124",
  fontFamily: "Outfit, sans-serif",
};

const modalTitleStyle: React.CSSProperties = {
  fontFamily: '"Bowlby One SC", sans-serif',
  fontSize: "clamp(18px, 5vw, 24px)",
  fontWeight: 400,
  color: "#965B83",
  marginBottom: "24px",
};

const modalSubtitleStyle: React.CSSProperties = {
  fontFamily: '"Bowlby One SC", sans-serif',
  fontSize: "clamp(16px, 4vw, 18px)",
  fontWeight: 400,
  color: "#965B83",
  marginBottom: "12px",
  marginTop: "24px",
};

const modalTextStyle: React.CSSProperties = {
  fontFamily: "Outfit, sans-serif",
  fontSize: "clamp(14px, 3.5vw, 16px)",
  fontWeight: 400,
  lineHeight: "1.6",
  color: "#333",
};

function HoursModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "#965B83",
          }}
          aria-label={t("close")}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <h2 style={modalTitleStyle}>The Dog House Pet Salon</h2>

        {/* Galleria / Memorial Hours */}
        <h3 style={modalSubtitleStyle}>{t("galleria_memorial_hours")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "8px" }}>
          <tbody>
            {[
              ["monday", "galleria_memorial_hours_time1"],
              ["tuesday", "galleria_memorial_hours_time1"],
              ["wednesday", "galleria_memorial_hours_time1"],
              ["thursday", "galleria_memorial_hours_time1"],
              ["friday", "galleria_memorial_hours_time1"],
              ["saturday", "galleria_memorial_hours_time2"],
              ["sunday", "closed"],
            ].map(([dayKey, timeKey]) => (
              <tr key={dayKey} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ ...modalTextStyle, padding: "8px 0", fontWeight: 500 }}>{t(dayKey as any)}</td>
                <td style={{ ...modalTextStyle, padding: "8px 0", textAlign: "right" }}>{t(timeKey as any)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ ...modalTextStyle, fontSize: "14px", fontStyle: "italic", color: "#965B83", marginTop: "8px" }}>
          {t("sunday_note")}
        </p>
        <p style={{ ...modalTextStyle, fontSize: "14px", fontStyle: "italic", color: "#965B83", marginBottom: "8px" }}>
          {t("holiday_closed_note")}
        </p>

        {/* Pearland Hours */}
        <h3 style={modalSubtitleStyle}>{t("pearland_hours")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "8px" }}>
          <tbody>
            {[
              ["monday", "pearland_hours_time1"],
              ["tuesday", "pearland_hours_time1"],
              ["wednesday", "pearland_hours_time1"],
              ["thursday", "pearland_hours_time1"],
              ["friday", "pearland_hours_time1"],
              ["saturday", "pearland_hours_time2"],
              ["sunday", "closed"],
            ].map(([dayKey, timeKey]) => (
              <tr key={dayKey} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ ...modalTextStyle, padding: "8px 0", fontWeight: 500 }}>{t(dayKey as any)}</td>
                <td style={{ ...modalTextStyle, padding: "8px 0", textAlign: "right" }}>{t(timeKey as any)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Holiday Hours */}
        <h3 style={modalSubtitleStyle}>{t("holiday_hours")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {[
              ["new_years_day", "closed"],
              ["memorial_day", "memorial_day_time"],
              ["independence_day", "closed"],
              ["labor_day", "labor_day_time"],
              ["thanksgiving", "closed"],
              ["day_after_thanksgiving", "thanksgiving_time"],
              ["christmas", "closed"],
              ["day_after_christmas", "christmas_time"],
            ].map(([holidayKey, timeKey]) => (
              <tr key={holidayKey} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ ...modalTextStyle, padding: "8px 0", fontWeight: 500 }}>{t(holidayKey as any)}</td>
                <td style={{ ...modalTextStyle, padding: "8px 0", textAlign: "right", whiteSpace: "nowrap" }}>{t(timeKey as any)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VaccinationsModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "#965B83",
          }}
          aria-label={t("close")}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <h2 style={modalTitleStyle}>{t("required_vaccinations")}</h2>

        <h3 style={modalSubtitleStyle}>{t("grooming_services")}</h3>
        <p style={{ ...modalTextStyle, marginBottom: "12px" }}>
          {t("vaccinations_grooming")}
        </p>
        <ol style={{ ...modalTextStyle, paddingLeft: "24px", marginBottom: "24px" }}>
          <li style={{ marginBottom: "4px" }}>{t("bordetella")}</li>
        </ol>

        <h3 style={modalSubtitleStyle}>{t("boarding_daycare_services")}</h3>
        <p style={{ ...modalTextStyle, marginBottom: "12px" }}>
          {t("vaccinations_boarding")}
        </p>
        <ol style={{ ...modalTextStyle, paddingLeft: "24px" }}>
          <li style={{ marginBottom: "4px" }}>{t("bordetella")}</li>
          <li style={{ marginBottom: "4px" }}>{t("distemper")}</li>
          <li style={{ marginBottom: "4px" }}>{t("rabies")}</li>
          <li style={{ marginBottom: "4px", fontStyle: "italic", color: "#965B83" }}>
            {t("influenza_recommended")}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [showVaccinationsModal, setShowVaccinationsModal] = useState(false);

  return (
    <footer style={{ position: "relative", color: "#FFF" }}>
      {/* ── Background Image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      {/* ── Color Overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#965B83",
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      {/* ── Dog House Logo (half offset above footer) ── */}
      <div className="flex justify-center" style={{ position: "relative", zIndex: 3, marginTop: "clamp(-50px, -5vw, -75px)" }}>
        <div
          style={{
            width: "clamp(100px, 20vw, 150px)",
            height: "clamp(100px, 20vw, 150px)",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            border: "1px solid #965B83",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/main-logo-e1743717527294.png"
            alt="The Dog House Pet Salon"
            width={120}
            height={120}
            style={{ height: "auto", width: "auto", maxWidth: "120px" }}
          />
        </div>
      </div>

      {/* ── COVID Message ── */}
      <div className="container-site py-8 text-center border-b" style={{ borderColor: "rgba(255,255,255,0.2)", position: "relative", zIndex: 2 }}>
        <p
          className="max-w-2xl mx-auto"
          style={textStyle}
        >
          {t("pet_health_safety")}
        </p>
      </div>

      {/* ── Main Content: Three-Column Layout ── */}
      <div className="container-site py-12" style={{ position: "relative", zIndex: 2 }}>
        <style>{`
          @media (max-width: 768px) {
            .footer-grid { gap: 24px !important; }
            .footer-text-lg { font-size: 16px !important; }
            .footer-text-base { font-size: 14px !important; }
            .footer-title { font-size: 18px !important; }
          }
        `}</style>
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* COLUMN 1: Service Links */}
          <div>
            {/* Pet Grooming Section */}
            <div className="mb-10">
              <h3
                className="mb-4 uppercase tracking-wider"
                style={titleStyle}
              >
                {t("pet_grooming_section")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/pet-grooming"
                    className="transition-colors hover:opacity-80"
                    style={textStyle}
                  >
                    {t("pet_grooming")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pet-bathing"
                    className="transition-colors hover:opacity-80"
                    style={textStyle}
                  >
                    {t("pet_bathing")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pet Boarding Section */}
            <div>
              <h3
                className="mb-4 uppercase tracking-wider"
                style={titleStyle}
              >
                {t("pet_boarding_section")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/houston-pet-boarding"
                    className="transition-colors hover:opacity-80"
                    style={textStyle}
                  >
                    {t("houston_pet_boarding")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dog-day-care"
                    className="transition-colors hover:opacity-80"
                    style={textStyle}
                  >
                    {t("doggy_day_care")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 2: Contact Us */}
          <div>
            <h3
              className="mb-6 uppercase tracking-wider"
              style={titleStyle}
            >
              {t("contact_us_section")}
            </h3>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-6">
              <i className="fa-solid fa-phone" style={{ color: "#FFF", fontSize: "18px" }} />
              <a
                href="tel:+17138206140"
                className="transition-colors hover:opacity-80"
                style={textStyle}
              >
                713-820-6140
              </a>
            </div>

            {/* Option 1 */}
            <div className="mb-5">
              <p className="font-semibold mb-2" style={textStyle}>{t("option1")}</p>
              <div className="flex items-center gap-3 mb-1">
                <i className="fa-solid fa-location-dot" style={{ color: "#FFF", fontSize: "18px" }} />
                <span style={textStyle}>5917 Richmond Ave</span>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <i className="fa-solid fa-envelope" style={{ color: "#FFF", fontSize: "18px" }} />
                <a href="mailto:galleria@thedoghouseps.com" className="transition-colors hover:opacity-80" style={textStyle}>
                  galleria@thedoghouseps.com
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="mb-5">
              <p className="font-semibold mb-2" style={textStyle}>{t("option2")}</p>
              <div className="flex items-center gap-3 mb-1">
                <i className="fa-solid fa-location-dot" style={{ color: "#FFF", fontSize: "18px" }} />
                <span style={textStyle}>6434 Washington Ave</span>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <i className="fa-solid fa-envelope" style={{ color: "#FFF", fontSize: "18px" }} />
                <a href="mailto:memorial@thedoghouseps.com" className="transition-colors hover:opacity-80" style={textStyle}>
                  memorial@thedoghouseps.com
                </a>
              </div>
            </div>

            {/* Option 3 */}
            <div className="mb-5">
              <p className="font-semibold mb-2" style={textStyle}>{t("option3")}</p>
              <div className="flex items-center gap-3 mb-1">
                <i className="fa-solid fa-location-dot" style={{ color: "#FFF", fontSize: "18px" }} />
                <span style={textStyle}>2810 Business Center Dr. #126</span>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <i className="fa-solid fa-envelope" style={{ color: "#FFF", fontSize: "18px" }} />
                <a href="mailto:pearland@thedoghouseps.com" className="transition-colors hover:opacity-80" style={textStyle}>
                  pearland@thedoghouseps.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 3: CTA Buttons + Social Media */}
          <div>
            {/* CTA Buttons */}
            <div className="flex flex-col" style={{ gap: "clamp(20px, 3vw, 40px)" }}>
              <Link
                href="/appointment-request"
                className="text-center transition-all hover:opacity-80"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(14px, 3vw, 18px)",
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "transparent",
                  borderStyle: "dashed",
                  borderWidth: "2px",
                  borderColor: "#ffffff",
                  borderRadius: "50px",
                  padding: "clamp(12px 20px, 2vw 3vw, 15px 30px)",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {t("schedule_appointment")}
              </Link>
              <button
                onClick={() => setShowHoursModal(true)}
                className="text-center transition-all hover:opacity-80 cursor-pointer"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(14px, 3vw, 18px)",
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "transparent",
                  borderStyle: "dashed",
                  borderWidth: "2px",
                  borderColor: "#ffffff",
                  borderRadius: "50px",
                  padding: "clamp(12px 20px, 2vw 3vw, 15px 30px)",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {t("hours_operations")}
              </button>
              <button
                onClick={() => setShowVaccinationsModal(true)}
                className="text-center transition-all hover:opacity-80 cursor-pointer"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "clamp(14px, 3vw, 18px)",
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "transparent",
                  borderStyle: "dashed",
                  borderWidth: "2px",
                  borderColor: "#ffffff",
                  borderRadius: "50px",
                  padding: "clamp(12px 20px, 2vw 3vw, 15px 30px)",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {t("required_vaccinations")}
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center" style={{ gap: "30px", marginTop: "40px" }}>
              <a
                href="https://www.facebook.com/thedoghousepetsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff" }}
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" style={{ color: "#965B83", fontSize: "16px" }} />
              </a>
              <a
                href="https://twitter.com/TheDogHousePS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff" }}
                aria-label="X (Twitter)"
              >
                <i className="fa-brands fa-x-twitter" style={{ color: "#965B83", fontSize: "16px" }} />
              </a>
              <a
                href="https://www.instagram.com/thedoghouseps/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff" }}
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" style={{ color: "#965B83", fontSize: "16px" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/the-dog-house-pet-salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff" }}
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" style={{ color: "#965B83", fontSize: "16px" }} />
              </a>
              <a
                href="https://www.youtube.com/@thedoghousepetsalonhouston"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff" }}
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube" style={{ color: "#965B83", fontSize: "16px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div style={{ backgroundColor: "#965B83", position: "relative", zIndex: 2 }}>
        <div
          className="container-site py-4 flex items-center justify-center gap-2 flex-wrap text-center"
          style={{ ...textStyle, fontSize: "14px" }}
        >
          <span>{t("copyright")} &copy; {new Date().getFullYear()} The Dog House PS. {t("all_rights")}</span>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:opacity-80 transition-opacity">{t("privacy_policy")}</Link>
          <span>|</span>
          <Link href="/terms-of-use" className="hover:opacity-80 transition-opacity">{t("terms_of_use")}</Link>
          <span>|</span>
          <Link href="/cancellation-policy" className="hover:opacity-80 transition-opacity">{t("cancellation_policy")}</Link>
        </div>
      </div>


      {/* ── Modals ── */}
      {showHoursModal && <HoursModal onClose={() => setShowHoursModal(false)} />}
      {showVaccinationsModal && <VaccinationsModal onClose={() => setShowVaccinationsModal(false)} />}
    </footer>
  );
}
