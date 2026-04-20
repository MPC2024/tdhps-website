import type { Metadata } from "next";
import PetGroomingContent from "@/components/PetGroomingContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Pet Grooming Services in Houston",
  description:
    "Give your pet the ultimate pampering with expert pet grooming at The Dog House in Houston—affordable, professional, breed-specific care you can trust.",
  openGraph: {
    title: "Pet Grooming",
    description:
      "Give your pet the ultimate pampering with expert pet grooming at The Dog House in Houston—affordable, professional, breed-specific care you can trust.",
    url: "https://www.thedoghouseps.com/pet-grooming/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Pet Grooming at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pet-grooming/" },
};

export default function PetGroomingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pet Grooming", url: "https://www.thedoghouseps.com/pet-grooming" },
        ]}
      />
      <PetGroomingContent />
    </>
  );
}
