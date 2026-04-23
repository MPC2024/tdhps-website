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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <DiscountsHeroText />
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
