import type { Metadata } from "next";
import HoustonPetBoardingContent from "@/components/HoustonPetBoardingContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Dog Boarding Houston: Safe & Friendly Dog Care",
  description:
    "The Dog House offers trusted pet boarding in Houston with cozy overnight stays, caring staff, and pet-friendly amenities—your dog's home away from home.",
  openGraph: {
    title: "Houston Pet Boarding",
    description:
      "The Dog House offers trusted pet boarding in Houston with cozy overnight stays, caring staff, and pet-friendly amenities—your dog's home away from home.",
    url: "https://www.thedoghouseps.com/houston-pet-boarding/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/The-Dog-House-Logo-01-scaled-e1745772269992.webp",
        alt: "Houston Pet Boarding at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/houston-pet-boarding/" },
};

export default function HoustonPetBoardingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Houston Pet Boarding", url: "https://www.thedoghouseps.com/houston-pet-boarding" },
        ]}
      />
      <HoustonPetBoardingContent />
    </>
  );
}
