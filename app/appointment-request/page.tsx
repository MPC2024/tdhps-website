import type { Metadata } from "next";
import Image from "next/image";
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book a Pet Grooming Appointment at The Dog House Pet Salon",
  description: "Book your pet grooming, boarding, or daycare appointment in 4 simple steps.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Select Your Location", text: "Choose the salon nearest to you from our three Houston-area locations: Galleria, Memorial Park, or Pearland." },
    { "@type": "HowToStep", position: 2, name: "Tell Us About Your Pet", text: "Provide details like your pet's name, breed, weight, and any special requirements or medical conditions." },
    { "@type": "HowToStep", position: 3, name: "Choose Services", text: "Select from our range of services including baths, basic grooming, complete grooming, boarding, and daycare." },
    { "@type": "HowToStep", position: 4, name: "Pick a Date", text: "Schedule a convenient date and time for your appointment. We will confirm availability." },
  ],
};

export default function AppointmentRequestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-2.png"
          alt="Pet grooming appointment"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          priority
        />
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 1 }}
        />
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
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 3 }}>
          <AppointmentHeroText />
        </div>
      </section>

      {/* ── Two-Column Layout: Form (Left) + Instructions (Right) ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px 80px" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .appt-layout {
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 48px;
            max-width: 1200px;
            margin: 0 auto;
            align-items: start;
          }
          .appt-sidebar {
            position: sticky;
            top: 140px;
          }
          @media (max-width: 1024px) {
            .appt-layout {
              grid-template-columns: 1fr;
              max-width: 700px;
            }
            .appt-sidebar {
              position: static;
              order: -1;
            }
          }
        `}} />
        <div className="appt-layout">
          {/* Left: Form */}
          <div>
            <AppointmentFormWithLocation />
          </div>

          {/* Right: Instructions Sidebar */}
          <div className="appt-sidebar">
            <AppointmentRequestContent />
          </div>
        </div>
      </section>
    </>
  );
}
