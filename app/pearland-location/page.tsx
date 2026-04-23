import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import PearlandLocationContent from "@/components/location/PearlandLocationContent";
import PearlandAboutSection from "@/components/location/PearlandAboutSection";
import PearlandServicesSection from "@/components/location/PearlandServicesSection";
import PearlandStaffSection from "@/components/location/PearlandStaffSection";
import PearlandHoursSection from "@/components/location/PearlandHoursSection";
import PearlandFaqSection from "@/components/location/PearlandFaqSection";
import PearlandBoardingFaqSection from "@/components/location/PearlandBoardingFaqSection";
import PearlandAttractionsSection from "@/components/location/PearlandAttractionsSection";
import PearlandDirectionsSection from "@/components/location/PearlandDirectionsSection";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Pearland",
  description:
    "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
  openGraph: {
    title: "Pet Grooming Salon Pearland",
    description:
      "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
    url: "https://www.thedoghouseps.com/pearland-location/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
        alt: "Pet Grooming at The Dog House Pet Salon Pearland",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pearland-location/" },
};

export default function PearlandLocationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pearland", url: "https://www.thedoghouseps.com/pearland-location" },
        ]}
      />
      <section
        style={{
          position: "relative",
          backgroundImage: "url(/images/pearland-location.jpg)",
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
          <PearlandLocationContent />
        </div>
      </section>

      <PearlandAboutSection />

      <PearlandServicesSection />

      <PearlandStaffSection />

      <PearlandHoursSection />

      <PearlandFaqSection />

      <PearlandBoardingFaqSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.pearland.name}
            googlePlaceId={LOCATIONS.pearland.googlePlaceId}
            yelpBusinessId={LOCATIONS.pearland.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      <PearlandAttractionsSection />

      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%202810%20Business%20Center%20Dr%20%23126%2C%20Pearland%2C%20TX%2077584%2C%20United%20States&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Pearland Location"
          allowFullScreen
        />
      </section>

      <PearlandDirectionsSection />
    </>
  );
}
