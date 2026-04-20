import type { Metadata } from "next";
import DogDayCareContent from "@/components/DogDayCareContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Best Dog Daycare in Houston | Doggy Day Care Services",
  description:
    "Looking for reliable dog daycare in Houston and Pearland, TX? Our doggy daycare provides safe, fun, and affordable care with loving supervision. Book today!",
  openGraph: {
    title: "Houston Dog Daycare",
    description:
      "Looking for reliable dog daycare in Houston and Pearland, TX? Our doggy daycare provides safe, fun, and affordable care with loving supervision. Book today!",
    url: "https://www.thedoghouseps.com/dog-day-care/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Houston Dog Daycare at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/dog-day-care/" },
};

export default function DogDayCarePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Dog Day Care", url: "https://www.thedoghouseps.com/dog-day-care" },
        ]}
      />
      <DogDayCareContent />
    </>
  );
}
