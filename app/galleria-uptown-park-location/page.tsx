import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import GalleriaLocationContent from "@/components/location/GalleriaLocationContent";
import GalleriaAboutSection from "@/components/location/GalleriaAboutSection";
import GalleriaServicesSection from "@/components/location/GalleriaServicesSection";
import GalleriaStaffSection from "@/components/location/GalleriaStaffSection";
import LocationGroomersSection from "@/components/location/LocationGroomersSection";
import GalleriaHoursSection from "@/components/location/GalleriaHoursSection";
import GalleriaFaqSection from "@/components/location/GalleriaFaqSection";
import GalleriaBoardingFaqSection from "@/components/location/GalleriaBoardingFaqSection";
import GalleriaDirectionsSection from "@/components/location/GalleriaDirectionsSection";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Galleria Houston",
  description:
    "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
  openGraph: {
    title: "Pet Grooming Salon Galleria Houston",
    description:
      "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
    url: "https://www.thedoghouseps.com/galleria-uptown-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-uptown-park-location/" },
};

export default function GalleriaLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Galleria",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    description: "Professional pet grooming, boarding, and daycare services at The Dog House Pet Salon in Galleria Houston",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5917 Richmond Ave",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77057",
      addressCountry: "US",
    },
    telephone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    url: "https://www.thedoghouseps.com/galleria-uptown-park-location/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "17:00" },
    ],
    priceRange: "$$",
    areaServed: { "@type": "City", name: "Houston" },
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
          { name: "Galleria / Uptown Park", url: "https://www.thedoghouseps.com/galleria-uptown-park-location" },
        ]}
      />
      {/* Hero */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url(/images/galleria-location.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.3 }} />
        <div style={{ maxWidth: "1520px", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <GalleriaLocationContent />
        </div>
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>


      <GalleriaAboutSection />

      <GalleriaServicesSection />

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
            <Link href="/appointment-request?location=galleria" style={{ display: "inline-block", backgroundColor: "#ffffff", color: "#965B83", padding: "12px 28px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              Book Now
            </Link>
          </div>
          <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/01/24-Common-Dog-Skin-Conditions-and-How-to-Treat-Them.jpeg"
                alt="Additional Pet Services"
                width={300}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </section>

      <GalleriaStaffSection />

      <LocationGroomersSection exclude="/keylin-paulina-orellana-delcid" />

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "20px" }}>
            Why Choose Us in the Galleria Neighborhood
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto" }}>
            Our salon&apos;s prime location offers unparalleled convenience for pet owners residing in nearby communities such as Uptown, Tanglewood, and Briargrove. Being in the vibrant Galleria area means you&apos;re never far from Houston&apos;s premier shopping and dining destinations, making it easy to drop off your pet for care while you run errands or enjoy the local attractions.
          </p>
        </div>
      </section>

      {/* Exploring the Galleria Area */}
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
            Exploring the Galleria Area
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "900px" }}>
            The Galleria neighborhood is renowned for its dynamic blend of retail, dining, and entertainment options. The Galleria Mall stands as a premier shopping destination, while the nearby Gerald D. Hines Waterwall Park offers a serene escape with its iconic water feature. For pet owners, the area boasts several dog-friendly parks:
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .galleria-attractions-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            @media (max-width: 768px) {
              .galleria-attractions-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          <div className="galleria-attractions-grid">
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>Danny Jackson Family Dog Park</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>Located just south of the Galleria area along Westpark Drive, this 2.76-acre park features separate sections for large and small dogs, swimming ponds, shaded seating, and water fountains.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>Memorial Park</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>Approximately 3 miles north of the Galleria area, Memorial Park offers extensive trails suitable for leashed dogs, providing a great environment for exercise and leisure.</p>
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
            We look forward to welcoming you and your pet to The Dog House Pet Salon&apos;s Galleria location. For appointments or inquiries
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .galleria-contact-cards-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            @media (max-width: 768px) {
              .galleria-contact-cards-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
            }
          `}} />
          <div className="galleria-contact-cards-grid">
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
              <a href="mailto:galleria@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textDecoration: "none" }}>galleria@thedoghouseps.com</a>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(150,91,131,0.2)" }}>
              <div style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px" }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: "36px" }} />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>5917 Richmond Ave, Houston, TX 77057</p>
            </div>
          </div>
        </div>
      </section>

      <GalleriaHoursSection />

      <GalleriaFaqSection />

      <GalleriaBoardingFaqSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.galleria.name}
            googlePlaceId={LOCATIONS.galleria.googlePlaceId}
            yelpBusinessId={LOCATIONS.galleria.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%205917%20Richmond%20Ave%2C%20Houston%2C%20TX%2077057&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Galleria Location"
          allowFullScreen
        />
      </section>

      <GalleriaDirectionsSection />

    </>
  );
}
