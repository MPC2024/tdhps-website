import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You – Memorial Existing Customer",
  description:
    "We're so happy to see you back at The Dog House Pet Salon Memorial Park for another grooming session!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Memorial | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-memorial-existing/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-memorial-existing/" },
};

export default function ThankYouMemorialExistingPage() {
  return (
    <ThankYouPage
      config={{
        location: "Memorial",
        customerType: "existing",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: "https://maps.app.goo.gl/iUN5UXoGm82Vv93E8",
      }}
    />
  );
}
