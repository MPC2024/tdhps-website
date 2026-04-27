import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import PearlandLocationContent from "@/components/location/PearlandLocationContent";
import PearlandAboutSection from "@/components/location/PearlandAboutSection";
import PearlandServicesSection from "@/components/location/PearlandServicesSection";
import PearlandStaffSection from "@/components/location/PearlandStaffSection";
import LocationGroomersSection from "@/components/location/LocationGroomersSection";
import PearlandHoursSection from "@/components/location/PearlandHoursSection";
import PearlandFaqSection from "@/components/location/PearlandFaqSection";
import PearlandBoardingFaqSection from "@/components/location/PearlandBoardingFaqSection";
import PearlandAttractionsSection from "@/components/location/PearlandAttractionsSection";
import PearlandDirectionsSection from "@/components/location/PearlandDirectionsSection";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Pearland",
  description:
    "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
  openGraph: {
    title: "Pet Grooming Salon Pearland",
    description:
      "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
    url: "https://www.thedoghouseps.com/pearland-location/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
        alt: "Pet Grooming at The Dog House Pet Salon Pearland",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pearland-location/" },
};

export default function PearlandLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Pearland",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    description: "Professional pet grooming, boarding, and daycare services at The Dog House Pet Salon in Pearland",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2810 Business Center Dr #126",
      addressLocality: "Pearland",
      addressRegion: "TX",
      postalCode: "77584",
      addressCountry: "US",
    },
    telephone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    url: "https://www.thedoghouseps.com/pearland-location/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: { "@type": "City", name: "Pearland" },
    serviceType: ["Pet Grooming", "Pet Boarding", "Dog Day Care"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pearland", url: "https://www.thedoghouseps.com/pearland-location" },
        ]}
      />
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/Peatland.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <PearlandLocationContent />
        </div>
        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      <PearlandAboutSection />

      <PearlandServicesSection />

      {/* Additional Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 500px", backgroundColor: "#965B83", borderRadius: "20px", padding: "50px 40px" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#ffffff", marginBottom: "16px" }}>
              Additional Services
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "28px" }}>
              To maintain your pet&apos;s overall health, we offer nail filing, teeth brushing, de-matting, and furminating services.
            </p>
            <Link href="/appointment-request?location=pearland" style={{ display: "inline-block", backgroundColor: "#ffffff", color: "#965B83", padding: "12px 28px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              Book Now
            </Link>
          </div>
          <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-furminating.jpg"
                alt="Dog Furminating Service at The Dog House Pet Salon Pearland"
                width={300}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </section>

      <PearlandStaffSection />

      <LocationGroomersSection exclude="/margarita-batres" />

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "20px" }}>
            Why Choose Us in the Pearland Neighborhood
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto" }}>
            Our salon&apos;s prime location offers unparalleled convenience for pet owners residing in Pearland and nearby communities. Being in the vibrant Shadow Creek Ranch area means you&apos;re close to Pearland&apos;s premier shopping and dining destinations, making it easy to drop off your pet for care while you run errands or enjoy the local attractions.
          </p>
        </div>
      </section>

      {/* Exploring the Pearland Area */}
      <section style={{
        backgroundColor: "#965B83",
        padding: "80px 20px 120px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          lineHeight: 0,
          zIndex: 2,
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#ffffff", marginBottom: "16px" }}>
            Exploring the Pearland Area
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "900px" }}>
            The Pearland neighborhood is renowned for its dynamic blend of retail, dining, and entertainment options. The nearby Pearland Town Center stands as a premier shopping destination, offering a variety of stores and eateries. For pet owners, the area boasts several dog-friendly parks:
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .pearland-parks-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            @media (max-width: 640px) {
              .pearland-parks-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          <div className="pearland-parks-grid">
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>
                Independence Dog Park
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                Located at 3449 Pearland Parkway, this park features separate sections for large and small dogs, providing ample space for off-leash play.
              </p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>
                Southdown Dog Park
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                Situated at 2150 Country Place Parkway, Southdown Dog Park offers fenced areas with agility equipment, allowing dogs to exercise and socialize safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "20px" }}>
            Community Engagement and Events
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto" }}>
            We believe in fostering a strong sense of community and regularly participate in local events and collaborate with nearby pet organizations. Stay connected with us through our social media channels for updates on events, promotions, and pet care tips.
          </p>
        </div>
      </section>

      {/* Contact Information and Appointment Scheduling */}
      <section style={{
        position: "relative",
        backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image22.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.85 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "16px" }}>
            Contact Information and Appointment Scheduling
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.6, marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" }}>
            We look forward to welcoming you and your pet to The Dog House Pet Salon&apos;s Pearland location. For appointments or inquiries
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .contact-cards-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            @media (max-width: 768px) {
              .contact-cards-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
            }
          `}} />
          <div className="contact-cards-grid">
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(150,91,131,0.2)" }}>
              <div style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px" }}>
                <i className="fa-solid fa-phone" style={{ fontSize: "36px" }} />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>Phone</h3>
              <a href="tel:7138206140" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textDecoration: "none" }}>713-820-6140</a>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginTop: "8px" }}>After Hours: <a href="tel:7139666350" style={{ textDecoration: "none", color: "#54595F" }}>(713) 966-6350</a></p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(150,91,131,0.2)" }}>
              <div style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px" }}>
                <i className="fa-solid fa-envelope" style={{ fontSize: "36px" }} />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>Email</h3>
              <a href="mailto:pearland@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textDecoration: "none" }}>pearland@thedoghouseps.com</a>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(150,91,131,0.2)" }}>
              <div style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px" }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: "36px" }} />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>2810 Business Center, Dr #126, Pearland, TX 77584</p>
            </div>
          </div>
        </div>
      </section>

      <PearlandHoursSection />

      <PearlandFaqSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#f8f8f8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.pearland.name}
            googlePlaceId={LOCATIONS.pearland.googlePlaceId}
            yelpBusinessId={LOCATIONS.pearland.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%202810%20Business%20Center%20Dr%20%23126%2C%20Pearland%2C%20TX%2077584%2C%20United%20States&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Pearland Location"
          allowFullScreen
        />
      </section>

      <PearlandDirectionsSection />
    </>
  );
}
