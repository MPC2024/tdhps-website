import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You – Galleria Existing Customer",
  description:
    "We're so happy to see you back at The Dog House Pet Salon Galleria for another grooming session!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Galleria | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-galleria-existing/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-galleria-existing/" },
};

export default function ThankYouGalleriaExistingPage() {
  return (
    <ThankYouPage
      config={{
        location: "Galleria",
        customerType: "existing",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: "https://maps.app.goo.gl/EYeQErWWWpS5QLgC9",
      }}
    />
  );
}
