import { Metadata } from "next";
import EventsCalendarClient from "@/components/EventsCalendarClient";

export const metadata: Metadata = {
  title: "Events & Calendar | The Dog House Pet Salon",
  description:
    "Upcoming pet holidays, seasonal specials, and promotions at The Dog House Pet Salon. Plan your grooming visits around our special events and discounts.",
  keywords: [
    "pet holidays",
    "dog grooming promotions",
    "seasonal specials",
    "pet events Houston",
    "grooming deals",
    "pet salon events",
  ],
  openGraph: {
    title: "Events & Calendar | The Dog House Pet Salon",
    description:
      "Upcoming pet holidays, seasonal specials, and promotions at The Dog House Pet Salon.",
    type: "website",
    url: "https://www.thedoghouseps.com/resources/calendar-events",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/resources/calendar-events/" },
};

export default function EventsPage() {
  return (
    <div style={{ width: "100%", backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(180px, 28vh, 260px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(48px, 8vh, 80px) 20px clamp(48px, 8vh, 80px)",
          background: "linear-gradient(135deg, #965B83 0%, #B8769D 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            width: "100%",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(32px, 6vw, 56px)",
              color: "#ffffff",
              marginBottom: "16px",
              fontWeight: "400",
              letterSpacing: "-0.02em",
            }}
          >
            Events & Calendar
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: "600px",
              marginBottom: "0",
              lineHeight: "1.6",
            }}
          >
            Discover upcoming pet holidays, seasonal specials, and exclusive promotions
            at The Dog House Pet Salon.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <EventsCalendarClient />
        </div>
      </section>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Events & Calendar",
            url: "https://www.thedoghouseps.com/resources/calendar-events",
            description:
              "Upcoming pet holidays, seasonal specials, and promotions at The Dog House Pet Salon.",
            mainEntity: {
              "@type": "ItemList",
              name: "Pet Holidays and Special Events",
              description:
                "Collection of upcoming pet industry events, holidays, and promotions",
            },
          }),
        }}
      />
    </div>
  );
}
