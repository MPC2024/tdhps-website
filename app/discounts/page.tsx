import { Metadata } from "next";
import Link from "next/link";
import styles from "./discounts.module.css";
import DiscountsHeroText from "@/components/DiscountsHeroText";
import DiscountsOfferCard from "@/components/DiscountsOfferCard";
import DiscountsPartnerCards from "@/components/DiscountsPartnerCards";
import DiscountsSeasonalPromo from "@/components/DiscountsSeasonalPromo";
import DiscountsRedeemText from "@/components/DiscountsRedeemText";
import DiscountsCTAText from "@/components/DiscountsCTAText";
import DiscountsLocationText from "@/components/DiscountsLocationText";

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
    <div className={styles.container}>
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
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#f5f5f5" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.content}>
        {/* New Customer Discount */}
        <DiscountsOfferCard />

        {/* Partner Cards */}
        <DiscountsPartnerCards />

        {/* Seasonal Promotions */}
        <DiscountsSeasonalPromo />

        {/* How to Redeem */}
        <DiscountsRedeemText />

        {/* CTA Section */}
        <section className={styles.finalCTA}>
          <DiscountsCTAText />
          <div className={styles.ctaButtonGroup}>
            <Link href="/appointment-request/" className={styles.primaryCTA}>
              Book an Appointment
            </Link>
            <Link href="/contact-us" className={styles.secondaryCTA}>
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      {/* Location Quick Links */}
      <section className={styles.locations}>
        <DiscountsLocationText />
        <div className={styles.locationGrid}>
          <Link href="/galleria-uptown-park-location" className={styles.locationCard}>
            <h3>Galleria / Uptown Park</h3>
            <p>5917 Richmond Ave, Houston, TX 77057</p>
            <p>(832) 930-4060</p>
          </Link>
          <Link href="/memorial-park-location" className={styles.locationCard}>
            <h3>Memorial Park</h3>
            <p>6434 Washington Ave, Houston, TX 77007</p>
            <p>(832) 930-4060</p>
          </Link>
          <Link href="/pearland-location" className={styles.locationCard}>
            <h3>Pearland</h3>
            <p>2810 Business Center Dr #126, Pearland, TX 77584</p>
            <p>(832) 930-4060</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
