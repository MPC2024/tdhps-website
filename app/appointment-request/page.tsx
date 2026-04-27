import type { Metadata } from "next";
import AppointmentFormWithLocation from "@/components/AppointmentFormWithLocation";
import AppointmentRequestContent from "@/components/AppointmentRequestContent";
import AppointmentHeroText from "@/components/AppointmentHeroText";

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

export default function AppointmentRequestPage() {
  return (
    <>
      {/* ── Hero Banner (pet-grooming style) ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 0 }}
        />
        {/* Curved SVG bottom */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path fill="#F8F8F8" d={heroSvgPath} />
          </svg>
        </div>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          <AppointmentHeroText />
        </div>
      </section>

      {/* ── Booking Made Simple (Client Component) ── */}
      <AppointmentRequestContent />

      {/* ── Form ── */}
      <section style={{ backgroundColor: "#FFFFFF", paddingBottom: "60px" }}>
        <AppointmentFormWithLocation />
      </section>
    </>
  );
}
