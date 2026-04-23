import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import GalleriaLocationContent from "@/components/location/GalleriaLocationContent";
import GalleriaAboutSection from "@/components/location/GalleriaAboutSection";
import GalleriaServicesSection from "@/components/location/GalleriaServicesSection";
import GalleriaStaffSection from "@/components/location/GalleriaStaffSection";
import GalleriaHoursSection from "@/components/location/GalleriaHoursSection";
import GalleriaFaqSection from "@/components/location/GalleriaFaqSection";
import GalleriaBoardingFaqSection from "@/components/location/GalleriaBoardingFaqSection";
import GalleriaAttractionsSection from "@/components/location/GalleriaAttractionsSection";
import GalleriaDirectionsSection from "@/components/location/GalleriaDirectionsSection";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Galleria Houston",
  description:
    "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
  openGraph: {
    title: "Pet Grooming Salon Galleria Houston",
    description:
      "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
    url: "https://www.thedoghouseps.com/galleria-uptown-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-uptown-park-location/" },
};

export default function GalleriaLocationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Galleria / Uptown Park", url: "https://www.thedoghouseps.com/galleria-uptown-park-location" },
        ]}
      />
      {/* Hero */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url(/images/galleria-location.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "160px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <GalleriaLocationContent />
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ backgroundColor: "#33373D", padding: "20px" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <a
              href="https://maps.google.com/?q=5917+Richmond+Ave,+Houston,+TX+77057"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}
            >
              📍 5917 Richmond Ave, Houston, TX 77057
            </a>
            <span style={{ color: "#ffffff", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>
              <span style={{ color: "#965B83", fontWeight: 700 }}>Option 1</span> ·{" "}
              <a href="tel:7138206140" style={{ color: "#ffffff", textDecoration: "none" }}>
                (713) 820-6140
              </a>
            </span>
            <span
              style={{ color: "#965B83", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600 }}
            >
              ¡Hablamos Español!
            </span>
            <a
              href="mailto:galleria@thedoghouseps.com"
              style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}
            >
              galleria@thedoghouseps.com
            </a>
          </div>
          <Link
            href="/appointment-request-form_location_richmond"
            style={{
              backgroundColor: "#965B83",
              color: "#ffffff",
              padding: "10px 24px",
              borderRadius: "50px",
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: "15px",
              display: "inline-block",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book Now
          </Link>
        </div>
      </section>

      <GalleriaAboutSection />

      <GalleriaServicesSection />

      <GalleriaStaffSection />

      <GalleriaHoursSection />

      <GalleriaFaqSection />

      <GalleriaBoardingFaqSection />

      <GalleriaAttractionsSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.galleria.name}
            googlePlaceId={LOCATIONS.galleria.googlePlaceId}
            yelpBusinessId={LOCATIONS.galleria.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%205917%20Richmond%20Ave%2C%20Houston%2C%20TX%2077057&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Galleria Location"
          allowFullScreen
        />
      </section>

      <GalleriaDirectionsSection />

    </>
  );
}
