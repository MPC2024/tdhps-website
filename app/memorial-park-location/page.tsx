import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import MemorialParkLocationContent from "@/components/location/MemorialParkLocationContent";
import MemorialAboutSection from "@/components/location/MemorialAboutSection";
import MemorialServicesSection from "@/components/location/MemorialServicesSection";
import MemorialStaffSection from "@/components/location/MemorialStaffSection";
import MemorialHoursSection from "@/components/location/MemorialHoursSection";
import MemorialFaqSection from "@/components/location/MemorialFaqSection";
import MemorialBoardingFaqSection from "@/components/location/MemorialBoardingFaqSection";
import MemorialAttractionsSection from "@/components/location/MemorialAttractionsSection";
import MemorialDirectionsSection from "@/components/location/MemorialDirectionsSection";

export const metadata: Metadata = {
  title: "Dog Grooming in Memorial Park Houston",
  description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
  openGraph: {
    title: "Dog Grooming in Memorial Park Houston",
    description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
    url: "https://www.thedoghouseps.com/memorial-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/memorial-park-location/" },
};


export default function MemorialParkLocationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Memorial Park", url: "https://www.thedoghouseps.com/memorial-park-location" },
        ]}
      />
      <section
        style={{
          position: "relative",
          backgroundImage: "url(/images/memorial-location.jpg)",
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
          <MemorialParkLocationContent />
        </div>
      </section>

      <MemorialAboutSection />

      <MemorialServicesSection />

      <MemorialStaffSection />

      <MemorialHoursSection />

      <MemorialFaqSection />

      <MemorialBoardingFaqSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.memorialPark.name}
            googlePlaceId={LOCATIONS.memorialPark.googlePlaceId}
            yelpBusinessId={LOCATIONS.memorialPark.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      <MemorialAttractionsSection />

      <section style={{ padding: 0 }}>
        <iframe loading="lazy" src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%205917%20Richmond%20Ave%2C%20Houston%2C%20TX%2077057&t=m&z=10&output=embed&iwloc=near" style={{ width: "100%", height: "400px", border: 0 }} title="The Dog House Pet Salon Memorial Park Location" allowFullScreen />
      </section>

      <MemorialDirectionsSection />
    </>
  );
}
