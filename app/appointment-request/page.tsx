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
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C11 4 6 8 6 14c0 8 10 14 10 14s10-6 10-14c0-6-5-10-10-10z" stroke="#965B83" strokeWidth="2.5" fill="#965B83" opacity=".2"/><circle cx="16" cy="13" r="3" stroke="#965B83" strokeWidth="2"/></svg>,
    text: "Select Your Location: Choose the salon nearest to you.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 24c-1.2 0-2.5-.8-2.5-2.5 0-2 2.5-4 2.5-4s2.5 2 2.5 4c0 1.7-1.3 2.5-2.5 2.5z" fill="#965B83" opacity=".6"/><circle cx="10" cy="12" r="2.5" fill="#965B83" opacity=".5"/><circle cx="16" cy="8" r="2.5" fill="#965B83" opacity=".5"/><circle cx="22" cy="12" r="2.5" fill="#965B83" opacity=".5"/><circle cx="13" cy="18" r="2.8" fill="#965B83" opacity=".35"/><circle cx="19" cy="18" r="2.8" fill="#965B83" opacity=".35"/></svg>,
    text: "Tell Us About Your Pet: Provide details like name, breed, and any special requirements.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="8" r="3.5" stroke="#965B83" strokeWidth="2"/><line x1="19" y1="11" x2="25" y2="5" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><path d="M8 13c2-3.5 5-7 8-7" stroke="#965B83" strokeWidth="2" strokeLinecap="round"/><path d="M8 13l2 12h5l-2-12" stroke="#965B83" strokeWidth="2" strokeLinejoin="round"/></svg>,
    text: "Choose Services: From baths to complete grooming packages, select what suits your pet best.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="24" height="22" rx="3" stroke="#965B83" strokeWidth="2.5"/><line x1="4" y1="12" x2="28" y2="12" stroke="#965B83" strokeWidth="2"/><line x1="10" y1="4" x2="10" y2="8" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><line x1="22" y1="4" x2="22" y2="8" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><rect x="9" y="16" width="4" height="3" rx="1" fill="#965B83" opacity=".4"/><rect x="14" y="16" width="4" height="3" rx="1" fill="#965B83" opacity=".4"/><rect x="19" y="16" width="4" height="3" rx="1" fill="#965B83" opacity=".4"/><rect x="9" y="21" width="4" height="3" rx="1" fill="#965B83" opacity=".4"/><rect x="14" y="21" width="4" height="3" rx="1" fill="#965B83" opacity=".4"/></svg>,
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
                <div style={{ marginBottom: "12px" }}>{step.icon}</div>
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
