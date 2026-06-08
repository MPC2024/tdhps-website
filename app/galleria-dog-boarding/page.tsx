import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLocations from "@/components/RelatedLocations";

export const metadata: Metadata = {
  title: "Dog Boarding in Galleria Houston | The Dog House Pet Salon",
  description:
    "Comfortable dog boarding near Galleria Houston. Safe accommodations, daily play, webcam monitoring, meal/medication management. Book your dog's boarding stay!",
  openGraph: {
    title: "Dog Boarding in Galleria Houston | The Dog House Pet Salon",
    description:
      "Comfortable dog boarding near Galleria Houston. Safe accommodations, daily play, webcam monitoring, meal/medication management. Book your dog's boarding stay!",
    url: "https://www.thedoghouseps.com/galleria-dog-boarding/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Dog Boarding Galleria Houston",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-dog-boarding/" },
};

export default function GalleriaBoarding() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Galleria - Dog Boarding",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
    description: "Dog boarding services in Galleria Houston with daily care and monitoring",
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
    url: "https://www.thedoghouseps.com/galleria-dog-boarding/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: ["Galleria", "River Oaks", "Highland Village", "Upper Kirby", "Greenway Plaza", "Montrose"],
    serviceType: "Pet Boarding",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.7311369,
      longitude: -95.4832833,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I board my dog near Galleria Houston?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dog House Pet Salon Galleria location at 5917 Richmond Ave provides comfortable dog boarding for pets in Galleria, River Oaks, and surrounding neighborhoods.",
        },
      },
      {
        "@type": "Question",
        name: "Is daycare included with boarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, daycare and playtime are included with our boarding packages. Your dog gets socialization and exercise throughout their stay.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have webcams for boarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer webcam monitoring so you can check on your dog during their boarding stay. Peace of mind while you're away!",
        },
      },
      {
        "@type": "Question",
        name: "What vaccinations are required for boarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We require current vaccinations including DHPP (or DHLPP) and rabies. Please provide vaccination records at check-in.",
        },
      },
      {
        "@type": "Question",
        name: "Can my dog get groomed during their boarding stay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We offer grooming services during boarding stays. Add grooming to your reservation for a complete pet care package.",
        },
      },
      {
        "@type": "Question",
        name: "What are the room sizes for boarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer multiple room sizes accommodating small, medium, and large dogs. Each room is comfortable, climate-controlled, and regularly cleaned.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Dog Boarding", url: "https://www.thedoghouseps.com/dog-day-care" },
          { name: "Galleria", url: "https://www.thedoghouseps.com/galleria-dog-boarding/" },
        ]}
      />

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
        <Image
          src="/images/galleria-location.jpg"
          alt="Dog boarding Galleria Houston hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.75, zIndex: 1 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,56px)", color: "#1F2124", marginBottom: "20px" }}>
            Comfortable Dog Boarding in Galleria Houston
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.8, maxWidth: "800px", marginBottom: "40px" }}>
            Professional boarding for dogs in the Galleria area. Safe, comfortable accommodations with daily playtime, feeding, and medication management. Webcam monitoring available.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request?location=galleria"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Book Boarding Stay
            </Link>
            <a
              href="tel:7138206140"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#965B83",
                padding: "14px 32px",
                borderRadius: "50px",
                border: "2px solid #965B83",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Call (713) 820-6140
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>30+</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Years Experience</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>★★★★★</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Highly Rated</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>24/7</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Care & Monitoring</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>All Pets</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Welcome</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Webcams</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Included</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Safe</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Comfort Rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boarding Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "16px", textAlign: "center" }}>
            Our Boarding Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            Comprehensive boarding packages designed to keep your dog comfortable, entertained, and well-cared-for during your time away.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Overnight Boarding
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Comfortable room with bedding, climate control, daily playtime, meals, and 24/7 monitoring. Available in sizes for small, medium, and large dogs.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Daycare Included
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Playtime and socialization included with all boarding stays. Your dog stays active and entertained while you're away.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Webcam Monitoring
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Real-time webcam access so you can check on your dog anytime. Peace of mind while you're away from home.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Feeding & Medication
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Professional administration of meals and medications. We follow your instructions precisely to ensure your dog's health and routine.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Playtime & Socialization
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Supervised playtime with compatible dogs. Exercise, enrichment, and socialization to keep your pup happy and healthy.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Extended Stays
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Monthly packages and extended boarding available for vacation, business travel, or extended trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Galleria Boarding */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "40px", textAlign: "center" }}>
            Why Choose Our Galleria Boarding
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Prime Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Conveniently located in Galleria for easy drop-off and pick-up. Near shopping and dining so you can run errands while your pup stays with us.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Expert Care</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Experienced staff trained in pet care, behavior, and safety. Your dog is in safe, capable hands 24/7.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Comfort & Safety</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Climate-controlled rooms, comfortable bedding, and constant supervision. Your dog stays safe, warm, and comfortable.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Peace of Mind</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Webcam monitoring included. Check in on your dog anytime while you enjoy your vacation or business trip.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Socialization</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Playtime and interaction with staff and compatible dogs. Your pup stays active, happy, and entertained.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Complete Services</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Boarding, grooming, and daycare all available. One-stop shop for all your dog's care needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RelatedLocations currentLocation="galleria" service="boarding" />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Boarding FAQs
          </h2>

          <div style={{ display: "grid", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Where can I board my dog near Galleria Houston?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                The Dog House Pet Salon Galleria location at 5917 Richmond Ave provides comfortable, professional dog boarding for pets in Galleria, River Oaks, and surrounding neighborhoods.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Is daycare included with boarding?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes! Playtime, exercise, and socialization are included with all boarding stays. Your dog stays active and happy while you're away.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you have webcams for boarding?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes, we offer real-time webcam access. You can check on your dog anytime during their stay for complete peace of mind.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What vaccinations are required for boarding?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Boarding and daycare require current Bordetella, Distemper, and Rabies vaccinations. Influenza is not required but recommended. All vaccinations must be unexpired. Please bring records at check-in."
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Can my dog get groomed during their boarding stay?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Absolutely! We offer grooming services during boarding. Add grooming to your reservation for a complete pet care package.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What are the room sizes for boarding?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                We offer multiple room sizes accommodating small dogs (up to 25 lbs), medium dogs (25-75 lbs), and large dogs (over 75 lbs). All rooms are climate-controlled and regularly cleaned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Visit Our Galleria Boarding Facility
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>Location & Hours</h3>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Address</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F" }}>5917 Richmond Ave, Houston, TX 77057</p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Phone</h4>
                <a href="tel:7138206140" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  (713) 820-6140
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Email</h4>
                <a href="mailto:galleria@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  galleria@thedoghouseps.com
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "16px" }}>Hours</h4>
                <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2 }}>
                  <div>Monday - Friday: 7:00 AM - 7:00 PM</div>
                  <div>Saturday: 8:00 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                  <div style={{ marginTop: "12px", fontStyle: "italic" }}>Boarding check-in by appointment</div>
                </div>
              </div>

              <Link
                href="/appointment-request?location=galleria"
                style={{
                  display: "inline-block",
                  backgroundColor: "#965B83",
                  color: "#ffffff",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  marginTop: "20px",
                }}
              >
                Book Boarding Stay
              </Link>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>
                Serving These Houston Areas
              </h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0 }}>
                <li>✓ Galleria</li>
                <li>✓ River Oaks</li>
                <li>✓ Highland Village</li>
                <li>✓ Upper Kirby</li>
                <li>✓ Greenway Plaza</li>
                <li>✓ Montrose</li>
                <li>✓ Uptown Park</li>
                <li>✓ Briargrove</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Also Boarding at Our Other Houston Locations
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <Link
              href="/memorial-park-dog-boarding/"
              style={{
                padding: "40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", marginBottom: "12px" }}>
                Memorial Park Boarding
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "12px" }}>
                6434 Washington Ave - Serving Heights, Garden Oaks, Oak Forest
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600 }}>
                Learn more →
              </p>
            </Link>

            <Link
              href="/pearland-dog-boarding/"
              style={{
                padding: "40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", marginBottom: "12px" }}>
                Pearland Boarding
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "12px" }}>
                2810 Business Center Dr - Serving Pearland, Friendswood, Alvin
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600 }}>
                Learn more →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "20px" }}>
            Ready to Board Your Dog at Galleria?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
            Book your dog's boarding stay at our Galleria location today. Rest assured your pup is in great hands!
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request?location=galleria"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#965B83",
                padding: "14px 32px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Book Online Now
            </Link>
            <a
              href="tel:7138206140"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "50px",
                border: "2px solid #ffffff",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Call (713) 820-6140
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
