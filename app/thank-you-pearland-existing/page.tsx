import type { Metadata } from "next";
import ThankYouPage from "@/components/ThankYouPage";

const PEARLAND_MAPS =
  "https://www.google.com/maps/place/The+Dog+House+Pet+Salon/@29.556829,-95.392411,16z/data=!4m6!3m5!1s0x8640939ba4cae943:0xd58329608b055ca9!8m2!3d29.5568289!4d-95.3924111!16s%2Fg%2F11rqgkd7x6?hl=en&entry=ttu";

export const metadata: Metadata = {
  title: "Thank You – Pearland Existing Customer",
  description:
    "We're so happy to see you back at The Dog House Pet Salon Pearland for another grooming session!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Thank You – Pearland | The Dog House Pet Salon",
    url: "https://www.thedoghouseps.com/thank-you-pearland-existing/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/thank-you-pearland-existing/" },
};

export default function ThankYouPearlandExistingPage() {
  return (
    <ThankYouPage
      config={{
        location: "Pearland",
        customerType: "existing",
        reviewLink: "https://g.page/r/CcWSYoHojH-QEAI/review",
        directionsLink: PEARLAND_MAPS,
      }}
    />
  );
}
