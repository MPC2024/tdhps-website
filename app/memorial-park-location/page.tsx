import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";
import MemorialParkLocationContent from "@/components/location/MemorialParkLocationContent";
import MemorialAboutSection from "@/components/location/MemorialAboutSection";
import MemorialServicesSection from "@/components/location/MemorialServicesSection";
import MemorialStaffSection from "@/components/location/MemorialStaffSection";
import LocationGroomersSection from "@/components/location/LocationGroomersSection";
import MemorialHoursSection from "@/components/location/MemorialHoursSection";
import MemorialFaqSection from "@/components/location/MemorialFaqSection";
import MemorialBoardingFaqSection from "@/components/location/MemorialBoardingFaqSection";
import MemorialDirectionsSection from "@/components/location/MemorialDirectionsSection";

export const metadata: Metadata = {
  title: "Dog Grooming in Memorial Park Houston",
  description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
  openGraph: {
    title: "Dog Grooming in Memorial Park Houston",
    description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
    url: "https://www.thedoghouseps.com/memorial-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/memorial-park-location/" },
};


export default function MemorialParkLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Memorial Park",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    description: "Professional pet grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park Houston",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6434 Washington Ave",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77007",
      addressCountry: "US",
    },
    telephone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    url: "https://www.thedoghouseps.com/memorial-park-location/",
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
          { name: "Memorial Park", url: "https://www.thedoghouseps.com/memorial-park-location" },
        ]}
      />
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
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Washington.jpeg"
          alt="The Dog House Pet Salon Memorial Park Location"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={85}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.5 }} />
        <div style={{ maxWidth: "1520px", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <MemorialParkLocationContent />
        </div>
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      <MemorialAboutSection />

      <MemorialServicesSection />

      {/* Additional Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 500px", backgroundColor: "#965B83", borderRadius: "20px", padding: "50px 40px" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#ffffff", marginBottom: "16px" }}>
              Additional Services
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "28px" }}>
              To maintain your pet&apos;s overall health, we offer nail filing and teeth brushing services.
            </p>
            <Link href="/appointment-request?location=memorial" style={{ display: "inline-block", backgroundColor: "#ffffff", color: "#965B83", padding: "12px 28px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              Book Now
            </Link>
          </div>
          <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/01/dog-nail-clipping-service-in-houston.png"
                alt="Dog Nail Clipping Service in Houston"
                width={300}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="300px"
              />
            </div>
          </div>
        </div>
      </section>

      <MemorialStaffSection />

      <LocationGroomersSection exclude="/francy-quevedo" />

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "20px" }}>
            Why Choose Us in the Memorial Park Neighborhood
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto" }}>
            Our salon&apos;s prime location offers unparalleled convenience for pet owners residing in nearby communities. Being in the vibrant Memorial area means you&apos;re close to Houston&apos;s premier outdoor spaces, making it easy to drop off your pet for care while you enjoy the local attractions.
          </p>
        </div>
      </section>

      {/* Exploring the Memorial Park Area */}
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
            Exploring the Memorial Park Area
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "900px" }}>
            The Memorial Park neighborhood is renowned for its dynamic blend of outdoor activities and natural beauty. Memorial Park stands as one of the largest urban parks in the U.S., offering running trails, biking paths, a golf course, and picnic spots. The nearby Houston Arboretum &amp; Nature Center provides a serene escape with walking trails and wildlife viewing opportunities.
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .memorial-attractions-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
            @media (max-width: 768px) {
              .memorial-attractions-grid {
                grid-template-columns: 1fr;
              }
            }
          `}} />
          <div className="memorial-attractions-grid">
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>Memorial Park</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>One of the largest urban parks in the U.S., offering running trails, biking paths, a golf course, and picnic spots.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>Memorial City Mall</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>A large shopping mall with retail stores, restaurants, and entertainment including an ice skating rink.</p>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(4px)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#ffffff", marginBottom: "12px" }}>Houston Arboretum &amp; Nature Center</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>A 155-acre nature sanctuary featuring walking trails, wildlife viewing, and educational exhibits. A peaceful green escape within the Memorial Park system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement + Instagram Feed */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,40px)", color: "#1F2124", marginBottom: "20px" }}>
            Community Engagement and Events
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto 32px" }}>
            We believe in fostering a strong sense of community and regularly participate in local events and collaborate with nearby pet organizations. Follow us on Instagram for the latest updates!
          </p>
          <iframe
            src="https://snapwidget.com/embed/1084981"
            className="snapwidget-widget"
            allowTransparency
            frameBorder={0}
            scrolling="no"
            style={{ border: "none", overflow: "hidden", width: "100%", height: "320px" }}
            title="The Dog House Pet Salon Instagram Feed"
          />
          <a
            href="https://www.instagram.com/thedoghouseps/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: "20px", fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", fontWeight: 600, textDecoration: "none" }}
          >
            Follow @thedoghouseps on Instagram →
          </a>
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
            We look forward to welcoming you and your pet to The Dog House Pet Salon&apos;s Memorial Park location. For appointments or inquiries
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
              <a href="mailto:memorial@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textDecoration: "none" }}>memorial@thedoghouseps.com</a>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "16px", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(150,91,131,0.2)" }}>
              <div style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px" }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: "36px" }} />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>6434 Washington Avenue, Houston, TX 77007</p>
            </div>
          </div>
        </div>
      </section>

      <MemorialHoursSection />

      <MemorialFaqSection />

      <MemorialBoardingFaqSection />

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#f8f8f8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.memorialPark.name}
            googlePlaceId={LOCATIONS.memorialPark.googlePlaceId}
            yelpBusinessId={LOCATIONS.memorialPark.yelpBusinessId}
            maxReviews={3}
          />
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <iframe loading="lazy" src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%206434%20Washington%20Ave%2C%20Houston%2C%20TX%2077007&t=m&z=10&output=embed&iwloc=near" style={{ width: "100%", height: "400px", border: 0 }} title="The Dog House Pet Salon Memorial Park Location" allowFullScreen />
      </section>

      <MemorialDirectionsSection />
    </>
  );
}
