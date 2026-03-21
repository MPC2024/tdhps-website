import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You – Memorial New Customer",
  description:
    "Thank you for choosing The Dog House Pet Salon Memorial Park for your pet's grooming needs!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Memorial | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-memorial-new/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-memorial-new/" },
};

export default function ThankYouMemorialNewPage() {
  return (
    <ThankYouPage
      config={{
        location: "Memorial",
        customerType: "new",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: "https://maps.app.goo.gl/iUN5UXoGm82Vv93E8",
      }}
    />
  );
}
