import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DiscountsHeroText from "@/components/DiscountsHeroText";
import DiscountsOfferCard from "@/components/DiscountsOfferCard";
import DiscountsRedeemText from "@/components/DiscountsRedeemText";
import DiscountsCTAClient from "@/components/DiscountsCTAClient";
import DiscountsLocationText from "@/components/DiscountsLocationText";
import DiscountsLocationLinksClient from "@/components/DiscountsLocationLinksClient";

const HERO_IMAGE_URL = "https://www.thedoghouseps.com/wp-content/uploads/2025/03/1_image-17.png";

export const metadata: Metadata = {
  title: "Special Offers & Discounts | The Dog House Pet Salon",
  description:
    "Exclusive discounts and special offers at The Dog House Pet Salon. First-time customer discount, partner programs, and seasonal promotions.",
  keywords: [
    "dog grooming discounts",
    "pet salon coupons",
    "special offers Houston",
    "pet grooming deals",
    "new client discount",
    "grooming punch card",
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
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* Background Image using Next.js Image fill (more reliable than CSS backgroundImage) */}
        <Image
          src={HERO_IMAGE_URL}
          alt="Special Offers & Discounts - Save on dog grooming services"
          fill
          sizes="100vw"
          priority
          quality={85}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6, zIndex: 1 }} />
        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <DiscountsHeroText />
        </div>
        <div style={{ position: "absolute", bottom: -2, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* All Discounts Grid Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px 50px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 4vw, 36px)", color: "#1F2124", marginBottom: "16px", textAlign: "center" }}>
              Our Special Offers
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              Enjoy exclusive discounts and loyalty rewards at The Dog House Pet Salon
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {/* Offer 1: New Groom Clients */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>New Groom Clients</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>25% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>First groom includes complimentary nail file and teeth brush</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>OR 10% off basic groom</p>
            </div>

            {/* Offer 2: Loyalty Punch Card */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Loyalty Punch Card</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>$30 CREDIT</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>Earn a $30 credit on your 12th grooming service</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>One punch per grooming visit</p>
            </div>

            {/* Offer 3: Referrals */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Referral Rewards</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>15% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0" }}>Get 15% off your next service when you refer a friend who books</p>
            </div>

            {/* Offer 4: Boarding Daycare */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Boarding Clients</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>FREE</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0" }}>Complimentary daycare included with all boarding stays</p>
            </div>

            {/* Offer 5: First Responders */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>First Responders</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>10% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>10% off all services</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>Valid ID required: Police, Fire, EMS, Military</p>
            </div>

            {/* Offer 6: Friends & Family */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Friends & Family</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>10% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0" }}>10% discount for team member friends and family</p>
            </div>

            {/* Offer 7: PawOps Rescue/Shelters */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>PawOps Rescues</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>25% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>25% off grooming for foster dogs</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>Email jeff@thedoghouseps.com to arrange</p>
            </div>

            {/* Offer 8: Recently Adopted */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Recently Adopted</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>15% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>15% off all services for 1 year from adoption date</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>Show adoption contract</p>
            </div>

            {/* Offer 9: Birthday Groom */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderTop: "4px solid #965B83", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>Birthday Groom</h3>
                <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>50% OFF</div>
              </div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>50% off birthday grooming</p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0" }}>Requires 15+ visits, 6+ grooms, review within 30 days, proof of birthday</p>
            </div>
          </div>

          {/* Important Notes */}
          <div style={{ marginTop: "50px", backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "32px", borderLeft: "4px solid #965B83" }}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "16px", margin: "0 0 16px 0" }}>Important Terms</h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, paddingLeft: "20px", margin: "0" }}>
              <li style={{ marginBottom: "8px" }}>All discounts applied at check-in</li>
              <li style={{ marginBottom: "8px" }}>Discounts cannot be combined unless stated</li>
              <li style={{ marginBottom: "8px" }}>PawOps discounts require valid documentation</li>
              <li>Management reserves the right to modify promotions</li>
            </ul>
          </div>
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
