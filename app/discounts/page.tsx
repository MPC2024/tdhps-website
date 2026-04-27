import { Metadata } from "next";
import DiscountsHeroText from "@/components/DiscountsHeroText";
import DiscountsOfferCard from "@/components/DiscountsOfferCard";
import DiscountsPartnerCards from "@/components/DiscountsPartnerCards";
import DiscountsSeasonalPromo from "@/components/DiscountsSeasonalPromo";
import DiscountsRedeemText from "@/components/DiscountsRedeemText";
import DiscountsCTAClient from "@/components/DiscountsCTAClient";
import DiscountsLocationText from "@/components/DiscountsLocationText";
import DiscountsLocationLinksClient from "@/components/DiscountsLocationLinksClient";

export const metadata: Metadata = {
  title: "Special Offers & Discounts | The Dog House Pet Salon",
  description:
    "Exclusive discounts and special offers at The Dog House Pet Salon. First-time customer discount, partner programs, and seasonal promotions.",
  keywords: [
    "dog grooming discounts",
    "pet salon coupons",
    "special offers Houston",
    "pet grooming deals",
    "The Farmer's Dog",
    "NuVet Labs",
  ],
  openGraph: {
    title: "Special Offers & Discounts | The Dog House Pet Salon",
    description:
      "Exclusive discounts and special offers at The Dog House Pet Salon.",
    type: "website",
    url: "https://www.thedoghouseps.com/discounts",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/discounts/" },
};

export default function DiscountsPage() {
  return (
    <div style={{ width: "100%", backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/1_image-17.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <DiscountsHeroText />
        </div>
        <div style={{ position: "absolute", bottom: -2, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* New Customer Special Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsOfferCard />
        </div>
      </section>

      {/* Partner Programs Section */}
      <section style={{ backgroundColor: "#fff", padding: "50px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsPartnerCards />
        </div>
      </section>

      {/* Seasonal Promotions Section */}
      <section style={{ backgroundColor: "#fff", padding: "50px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsSeasonalPromo />
        </div>
      </section>

      {/* How to Redeem Section */}
      <section style={{ backgroundColor: "#fff", padding: "50px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsRedeemText />
        </div>
      </section>

      {/* CTA Section */}
      <DiscountsCTAClient />

      {/* Location Quick Links Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsLocationText />
          <DiscountsLocationLinksClient />
        </div>
      </section>
    </div>
  );
}
