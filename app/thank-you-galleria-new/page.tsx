import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You – Galleria New Customer",
  description:
    "Thank you for choosing The Dog House Pet Salon Galleria for your pet's grooming needs!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Galleria | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-galleria-new/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-galleria-new/" },
};

export default function ThankYouGalleriaNewPage() {
  return (
    <ThankYouPage
      config={{
        location: "Galleria",
        customerType: "new",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: "https://maps.app.goo.gl/EYeQErWWWpS5QLgC9",
      }}
    />
  );
}
