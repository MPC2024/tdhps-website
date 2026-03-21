import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

const PEARLAND_MAPS =
  "https://www.google.com/maps/place/The+Dog+House+Pet+Salon/@29.556829,-95.392411,16z/data=!4m6!3m5!1s0x8640939ba4cae943:0xd58329608b055ca9!8m2!3d29.5568289!4d-95.3924111!16s%2Fg%2F11rqgkd7x6?hl=en&entry=ttu";

export const metadata: Metadata = {
  title: "Thank You – Pearland New Customer",
  description:
    "Thank you for choosing The Dog House Pet Salon Pearland for your pet's grooming needs!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Pearland | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-pearland-new/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-pearland-new/" },
};

export default function ThankYouPearlandNewPage() {
  return (
    <ThankYouPage
      config={{
        location: "Pearland",
        customerType: "new",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: PEARLAND_MAPS,
      }}
    />
  );
}
