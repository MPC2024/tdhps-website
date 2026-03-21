import type { Metadata } from "next";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Appointment Request",
  description:
    "Easily request a Pet grooming appointment at The Dog House. Professional care for your dog in a few clicks!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Appointment Request | The Dog House Pet Salon",
    description:
      "Easily request a Pet grooming appointment at The Dog House. Professional care for your dog in a few clicks!",
    url: "https://www.thedoghouseps.com/appointment-request/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/appointment-request/" },
};

const heroSvgPath = "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

const steps = [
  {
    icon: "📍",
    text: "Select Your Location: Choose the salon nearest to you.",
  },
  {
    icon: "🐾",
    text: "Tell Us About Your Pet: Provide details like name, breed, and any special requirements.",
  },
  {
    icon: "✂️",
    text: "Choose Services: From baths to complete grooming packages, select what suits your pet best.",
  },
  {
    icon: "📅",
    text: "Pick a Date: Schedule a convenient time for your appointment.",
  },
];

export default function AppointmentRequestPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "340px",
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
              marginBottom: "12px",
              lineHeight: 1.1,
            }}
          >
            Book An <span style={{ color: "#E0598A" }}>Appointment</span>
          </h1>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(18px,2.5vw,28px)",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Fill the form below
          </h2>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ backgroundColor: "#F8F8F8", paddingBottom: "60px" }}>
        <AppointmentForm />
      </section>

      {/* ── Booking Made Simple ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
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
            Ready to Pamper Your Pet? Let&apos;s Get Started!
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
            At The Dog House Pet Salon, we specialize in providing top-notch grooming, boarding, and daycare
            services tailored to your furry friend&apos;s needs. With locations in Houston&apos;s{" "}
            <Link href="/galleria-uptown-park-location" style={{ color: "#965B83", fontWeight: 600 }}>
              Galleria
            </Link>{" "}
            and{" "}
            <Link href="/memorial-park-location" style={{ color: "#965B83", fontWeight: 600 }}>
              Memorial Park areas
            </Link>
            , as well as{" "}
            <Link href="/pearland-location" style={{ color: "#965B83", fontWeight: 600 }}>
              Pearland
            </Link>
            , our experienced team ensures your pet receives the best care possible.
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
            Booking Made Simple:
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
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{step.icon}</div>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.text}
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
            Once submitted, our team will review your request and confirm your appointment request promptly.
            <br />
            <strong>Need Assistance?</strong>{" "}
            <a href="tel:+17138206140" style={{ color: "#965B83", fontWeight: 600, textDecoration: "none" }}>
              Call us at 713-820-6140
            </a>{" "}
            — ¡Hablamos Español!
          </p>
        </div>
      </section>
    </>
  );
}
