import { Metadata } from "next";
import Link from "next/link";
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
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#fff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* New Customer Special Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px 50px" }}>
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
      <section style={{ background: "linear-gradient(135deg, #965B83 0%, #B8769D 100%)", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsCTAText />
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
            <Link href="/appointment-request/" style={{ display: "inline-block", backgroundColor: "#fff", color: "#965B83", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              Book an Appointment
            </Link>
            <Link href="/contact-us" style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem", border: "2px solid #fff", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location Quick Links Section */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <DiscountsLocationText />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "40px" }}>
            <Link href="/galleria-uptown-park-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Galleria / Uptown Park</h3>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>5917 Richmond Ave, Houston, TX 77057</p>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(832) 930-4060</p>
            </Link>
            <Link href="/memorial-park-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Memorial Park</h3>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>6434 Washington Ave, Houston, TX 77007</p>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(832) 930-4060</p>
            </Link>
            <Link href="/pearland-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Pearland</h3>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>2810 Business Center Dr #126, Pearland, TX 77584</p>
              <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(832) 930-4060</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
