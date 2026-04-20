import type { Metadata } from "next";
import PetBathingContent from "@/components/PetBathingContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Pet Bathing Houston - Pamper Your Pet | The Dog House",
  description:
    "Pamper your pup with expert pet bathing in Houston at The Dog House. We offer gentle, professional dog washing using safe products for a clean, healthy coat.",
  openGraph: {
    title: "Pet Bathing",
    description:
      "Pamper your pup with expert pet bathing in Houston at The Dog House. We offer gentle, professional dog washing using safe products for a clean, healthy coat.",
    url: "https://www.thedoghouseps.com/pet-bathing/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Pet Bathing at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pet-bathing/" },
};

export default function PetBathingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pet Bathing", url: "https://www.thedoghouseps.com/pet-bathing" },
        ]}
      />
      <PetBathingContent />
    </>
  );
}
