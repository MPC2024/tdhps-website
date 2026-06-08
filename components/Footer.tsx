"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// No unused icons - all icon rendering is done with Font Awesome classes below

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
      <Image
        src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image.jpg"
        alt="Footer background"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        sizes="100vw"
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
            sizes="120px"
          />
        </div>
      </div>

      {/* ── COVID Message ── */}
      <div className="container-site py-8 text-center border-b" style={{ borderColor: "rgba(255,255,255,0.2)", position: "relative", zIndex: 2 }}>
        <p
          className="max-w-5xl mx-auto"
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
            <div className="flex items-center gap-3 mb-2">
              <i className="fa-solid fa-phone" style={{ color: "#FFF", fontSize: "18px" }} />
              <a
                href="tel:+17138206140"
                className="transition-colors hover:opacity-80"
                style={textStyle}
              >
                713-820-6140
              </a>
            </div>

            {/* After Hours Phone */}
            <div className="flex items-center gap-3 mb-6" style={{ paddingLeft: "30px" }}>
              <span style={textStyle}>After Hours: <a href="tel:+17139666350" className="transition-colors hover:opacity-80">(713) 966-6350</a></span>
            </div>

            {/* Option 1 */}
            <div className="mb-5">
              <p className="font-semibold mb-2" style={textStyle}>{t("option1")}</p>
              <div className="flex items-center gap-3 mb-1">
                <i className="fa-solid fa-location-dot" style={{ color: "#FFF", fontSize: "18px" }} />
                <span style={textStyle}>5917 Richmond Ave</span>
              </div>
              <div className="flex items-center gap-3">
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
              <div className="flex items-center gap-3">
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
              <div className="flex items-center gap-3">
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
