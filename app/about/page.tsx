import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | The Dog House Pet Salon",
  description:
    "Learn about The Dog House Pet Salon — Houston's premier pet grooming, daycare, and boarding service with over 30 years of experience and 40,000+ satisfied clients across three locations.",
  openGraph: {
    title: "About Us | The Dog House Pet Salon",
    description:
      "Houston's premier pet grooming, daycare, and boarding service with over 30 years of experience.",
    url: "https://www.thedoghouseps.com/about/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/about/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Dog House Pet Salon",
  url: "https://www.thedoghouseps.com",
  logo: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
  description:
    "Houston's premier pet grooming, doggie daycare, and pet boarding service with over 30 years of experience serving 40,000+ satisfied clients across three convenient locations.",
  foundingDate: "1996",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  areaServed: { "@type": "City", name: "Houston" },
  telephone: "(713) 820-6140",
  email: "galleria@thedoghouseps.com",
  sameAs: [
    "https://www.facebook.com/thedoghousepetsalon",
    "https://www.instagram.com/thedoghousepetsalon",
    "https://www.linkedin.com/company/the-dog-house-pet-salon",
  ],
};

const heroSvgPath =
  "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

const services = [
  { title: "Pet Grooming", desc: "Complete and basic grooming packages tailored to every breed.", href: "/pet-grooming" },
  { title: "Pet Bathing", desc: "Thorough bathing with premium shampoos, nail trim, and ear cleaning.", href: "/pet-bathing" },
  { title: "Dog Day Care", desc: "Safe, fun, supervised daycare in climate-controlled play areas.", href: "/dog-day-care" },
  { title: "Pet Boarding", desc: "Overnight boarding with personalized care and spacious kennels.", href: "/houston-pet-boarding" },
];

const locations = [
  { name: "Galleria / Uptown Park", address: "5917 Richmond Ave, Houston, TX 77057", href: "/galleria-uptown-park-location" },
  { name: "Memorial Park", address: "6434 Washington Ave, Houston, TX 77007", href: "/memorial-park-location" },
  { name: "Pearland", address: "2810 Business Center Dr #126, Pearland, TX 77584", href: "/pearland-location" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(160px, 20vh, 220px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp"
          alt="The Dog House Pet Salon team"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
          priority
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d={heroSvgPath} />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 3 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            About <span style={{ color: "#965B83" }}>The Dog House Pet Salon</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 20px)", color: "#54595F", maxWidth: "700px" }}>
            Over 30 years of dedicated pet care across Houston. Where every pet is treated like family.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 3vw, 40px)", color: "#1F2124", marginBottom: "24px", textAlign: "center" }}>
            Our Story
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#54595F", lineHeight: 1.8, marginBottom: "20px" }}>
            The Dog House Pet Salon has been a trusted name in Houston pet care for over 30 years. What started as a single grooming salon has grown into a full-service pet care destination with three convenient locations across the Greater Houston area — Galleria/Uptown Park, Memorial Park, and Pearland.
          </p>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#54595F", lineHeight: 1.8, marginBottom: "20px" }}>
            With more than 40,000 satisfied clients, we have built our reputation on providing loving, professional care for every pet that walks through our doors. Our experienced team of certified groomers, daycare attendants, and boarding staff treat each pet as if they were their own.
          </p>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "17px", color: "#54595F", lineHeight: 1.8 }}>
            Our mission is simple: to provide the highest quality pet grooming, daycare, and boarding services in a safe, clean, and welcoming environment. We believe every pet deserves to look and feel their best, and every pet parent deserves peace of mind.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 3vw, 40px)", color: "#1F2124", marginBottom: "48px", textAlign: "center" }}>
            Our Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  border: "1px solid rgba(150, 91, 131, 0.1)",
                }}
              >
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", marginBottom: "12px" }}>
                  {svc.title}
                </h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 3vw, 40px)", color: "#1F2124", marginBottom: "48px", textAlign: "center" }}>
            Our Locations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  textDecoration: "none",
                  borderLeft: "4px solid #965B83",
                }}
              >
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 700, color: "#1F2124", marginBottom: "8px" }}>
                  {loc.name}
                </h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", margin: 0 }}>
                  {loc.address}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#965B83", padding: "60px 20px", textAlign: "center", marginBottom: "110px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 3vw, 36px)", color: "#ffffff", marginBottom: "16px" }}>
            Ready to Experience the Difference?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "rgba(255,255,255,0.85)", marginBottom: "32px" }}>
            Join 40,000+ satisfied pet parents across Houston.
          </p>
          <Link
            href="/appointment-request"
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#965B83",
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              padding: "16px 40px",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Book An Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
