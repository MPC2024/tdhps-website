import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Appointment Request Pearland",
  description:
    "Easily make a grooming appointment request in Pearland at The Dog House. Professional care for your dog in a few clicks!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Appointment Request Pearland",
    description:
      "Easily make a grooming appointment request in Pearland at The Dog House. Professional care for your dog in a few clicks!",
    url: "https://www.thedoghouseps.com/appointment-request-pearland/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/appointment-request-pearland/" },
};

const heroSvgPath = "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

export default function AppointmentRequestPearlandPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path fill="#ffffff" d={heroSvgPath} />
          </svg>
        </div>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              marginBottom: "0",
              lineHeight: 1.1,
            }}
          >
            Book An{" "}
            <span style={{ color: "#965B83", WebkitTextStroke: "1px #ffffff" }}>
              Appointment
            </span>
          </h1>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ backgroundColor: "#F8F8F8", paddingBottom: "60px" }}>
        <AppointmentForm defaultLocation="pearland" lockLocation />
      </section>
    </>
  );
}
