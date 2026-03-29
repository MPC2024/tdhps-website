import { Metadata } from "next";
import Link from "next/link";
import styles from "./discounts.module.css";

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
};

export default function DiscountsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Special Offers & Discounts</h1>
          <p className={styles.subtitle}>
            Save on premium pet grooming, daycare, and boarding services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.content}>
        {/* New Customer Discount */}
        <section className={styles.offerCard}>
          <div className={styles.offerHeader}>
            <h2 className={styles.offerTitle}>New Customer Special</h2>
            <div className={styles.badge}>10% OFF</div>
          </div>
          <p className={styles.offerDescription}>
            First-time customers receive 10% off their first grooming, daycare,
            or boarding service. We want to help your pup experience the premium
            care that sets The Dog House Pet Salon apart.
          </p>
          <p className={styles.offerNote}>
            Valid for first visit only. Cannot be combined with other offers.
          </p>
          <Link href="/appointment-request/" className={styles.ctaButton}>
            Book Your First Appointment
          </Link>
        </section>

        {/* The Farmer's Dog Partnership */}
        <section className={styles.partnerCard}>
          <div className={styles.partnerHeader}>
            <h2 className={styles.partnerTitle}>The Farmer's Dog Partnership</h2>
          </div>
          <p className={styles.partnerDescription}>
            We're proud partners with The Farmer's Dog, providing fresh,
            healthy meal plans delivered right to your door. Our clients
            receive special pricing and personalized nutrition recommendations.
          </p>
          <p className={styles.partnerBenefit}>
            Fresh, real ingredients • Customized nutrition • Convenient delivery
          </p>
          <a
            href="https://www.thefarmersdog.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerLink}
          >
            Learn More About The Farmer's Dog →
          </a>
        </section>

        {/* NuVet Labs Partnership */}
        <section className={styles.partnerCard}>
          <div className={styles.partnerHeader}>
            <h2 className={styles.partnerTitle}>NuVet Labs Supplements</h2>
          </div>
          <p className={styles.partnerDescription}>
            We recommend NuVet Labs for comprehensive pet nutrition. Their
            scientifically formulated supplements support immune health, joint
            strength, and overall wellness for all dog breeds and ages.
          </p>
          <p className={styles.partnerBenefit}>
            Veterinarian recommended • Clinically tested • All-natural ingredients
          </p>
          <a
            href="https://www.nuvetlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerLink}
          >
            Explore NuVet Labs Products →
          </a>
        </section>

        {/* Seasonal Promotions */}
        <section className={styles.seasonalCard}>
          <h2 className={styles.seasonalTitle}>Seasonal Promotions</h2>
          <div className={styles.promotionList}>
            <div className={styles.promotion}>
              <h3>Holiday Grooming Packages</h3>
              <p>
                Get your pup looking festive with our special holiday grooming
                packages (November - December).
              </p>
            </div>
            <div className={styles.promotion}>
              <h3>Summer Wellness Special</h3>
              <p>
                Beat the heat with our cooling baths and summer daycare specials
                (June - August).
              </p>
            </div>
            <div className={styles.promotion}>
              <h3>Spring Refresh Program</h3>
              <p>
                Fresh start this spring! Comprehensive grooming with special
                grooming school discounts (March - May).
              </p>
            </div>
          </div>
        </section>

        {/* How to Redeem */}
        <section className={styles.redeemCard}>
          <h2 className={styles.redeemTitle}>How to Redeem Your Offer</h2>
          <ol className={styles.steps}>
            <li>
              <span className={styles.stepNumber}>1</span>
              <div>
                <h3>Contact Us</h3>
                <p>
                  Call <strong>(832) 930-4060</strong> or visit one of our three
                  convenient locations.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>2</span>
              <div>
                <h3>Book Your Appointment</h3>
                <p>
                  Select the service you're interested in and mention your offer
                  when booking.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.stepNumber}>3</span>
              <div>
                <h3>Enjoy the Savings</h3>
                <p>
                  Your discount will be applied at checkout. No coupon code needed!
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className={styles.finalCTA}>
          <h2>Ready to Give Your Pup Premium Care?</h2>
          <p>
            Schedule your appointment today and take advantage of these exclusive offers
          </p>
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
        <h2 className={styles.locationsTitle}>Visit One of Our Three Locations</h2>
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
