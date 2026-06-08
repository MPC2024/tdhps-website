import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLocations from "@/components/RelatedLocations";

export const metadata: Metadata = {
  title: "Dog Grooming in Memorial Park Houston | The Dog House Pet Salon",
  description:
    "Professional dog grooming near Memorial Park and The Heights. Breed-specific grooming, de-shedding, puppy care. Convenient location, expert groomers. We look forward to seeing you.",
  openGraph: {
    title: "Dog Grooming in Memorial Park Houston | The Dog House Pet Salon",
    description:
      "Professional dog grooming near Memorial Park and The Heights. Breed-specific grooming, de-shedding, puppy care. Convenient location, expert groomers. We look forward to seeing you.",
    url: "https://www.thedoghouseps.com/memorial-park-dog-grooming/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Dog Grooming Memorial Park Houston",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/memorial-park-dog-grooming/" },
};

export default function MemorialParkGroomingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Memorial Park - Dog Grooming",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
    description: "Professional dog grooming services near Memorial Park Houston",
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
    url: "https://www.thedoghouseps.com/memorial-park-dog-grooming/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: ["Memorial Park", "Garden Oaks", "Oak Forest", "Heights", "Spring Branch", "Memorial"],
    serviceType: "Pet Grooming",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.775574,
      longitude: -95.426811,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is the best dog groomer near Memorial Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dog House Pet Salon Memorial Park location at 6434 Washington Ave is the best choice for professional dog grooming. Conveniently located near Memorial Park, Garden Oaks, and The Heights.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer de-shedding treatments at Memorial Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer advanced de-shedding and furminating treatments to reduce shedding and keep your dog's coat healthy and shiny.",
        },
      },
      {
        "@type": "Question",
        name: "Can I drop off my dog for grooming near the Heights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Our Memorial Park location offers convenient drop-off and pick-up services. You can drop off your dog for grooming and run errands or enjoy the local parks.",
        },
      },
      {
        "@type": "Question",
        name: "What breeds do you specialize in at the Memorial location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We groom all dog breeds at our Memorial Park location, from small breeds to large breeds. Our groomers are experienced with breed-specific cuts and styling.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a full grooming session take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full grooming session typically takes 2-4 hours depending on your dog's size, coat condition, and the specific services requested. We'll provide an estimate when you book.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer grooming for senior dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in gentle grooming for senior dogs. We take extra care to ensure comfort and can adjust our approach based on any special needs or health considerations.",
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
          { name: "Dog Grooming", url: "https://www.thedoghouseps.com/dog-grooming" },
          { name: "Memorial Park", url: "https://www.thedoghouseps.com/memorial-park-dog-grooming/" },
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
          src="/images/memorial-park-location.jpg"
          alt="Dog grooming Memorial Park Houston hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.75, zIndex: 1 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,56px)", color: "#1F2124", marginBottom: "20px" }}>
            Professional Dog Grooming Near Memorial Park
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.8, maxWidth: "800px", marginBottom: "40px" }}>
            Serving Memorial Park, Garden Oaks, Oak Forest, The Heights, and Spring Branch. Expert grooming for all breeds and sizes with premium products and care.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request-memorial"
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
              Book Grooming Appointment
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
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>3</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Houston Locations</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>All Breeds</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>All Sizes</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Certified</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Professional Groomers</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Premium</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Pet Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "16px", textAlign: "center" }}>
            Our Grooming Services at Memorial Park
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            Comprehensive grooming services customized for your dog's individual needs, breed standards, and coat requirements.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Full Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Complete bath, breed-specific or custom haircut, nail trimming, ear cleaning, and teeth brushing. Our most popular service.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Bath & Brush
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Refreshing bath with premium shampoo, conditioning, and thorough brushing. Perfect for maintenance between full grooms.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Nail Trimming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Professional nail trimming, filing, and paw pad care to maintain healthy paw structure and prevent overgrowth.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                De-shedding Treatment
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Advanced furminating to remove loose undercoat. Significantly reduces shedding at home while promoting coat health.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Breed-Specific Grooming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Expert cuts and styling specific to your breed. Whether show-quality or pet-friendly, we nail the perfect look.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Puppy's First Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Gentle introduction to grooming for puppies, making it a positive experience and establishing good grooming habits early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Memorial Location */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "40px", textAlign: "center" }}>
            Why Choose Our Memorial Park Location
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Close to the Heights</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Perfectly positioned near Memorial Park, The Heights, and Garden Oaks. Easy access with convenient parking and quick drop-off/pick-up.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Expert Groomers</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Certified professional groomers with years of experience in breed-specific grooming and handling all temperaments.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Quality Care</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Premium grooming products, careful handling, and individual attention to your dog's specific needs and comfort.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Flexible Scheduling</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Open Monday-Saturday with extended weekday hours. Easy online booking or call us to schedule at your convenience.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Senior Dog Care</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Special care and gentle handling for senior dogs. We understand their unique needs and take extra precautions.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Full Services</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Grooming, boarding, and daycare available. Your one-stop shop for all your dog's care needs in the Heights area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RelatedLocations currentLocation="memorial-park" service="grooming" />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Grooming FAQs
          </h2>

          <div style={{ display: "grid", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Where is the best dog groomer near Memorial Park?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                The Dog House Pet Salon Memorial Park location at 6434 Washington Ave is the top choice for professional dog grooming in the area. We're conveniently located near Memorial Park, Garden Oaks, and The Heights.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you offer de-shedding treatments at Memorial Park?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Absolutely! We offer advanced de-shedding and furminating treatments designed to remove loose undercoat and significantly reduce shedding at home while keeping your dog's coat healthy and shiny.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Can I drop off my dog for grooming near the Heights?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes! Our Memorial Park location offers convenient drop-off and pick-up services. You can drop off your dog for grooming and run errands, visit Memorial Park, or enjoy local restaurants. We'll have your pup ready when you return.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What breeds do you specialize in at the Memorial location?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                We groom all dog breeds at our Memorial Park location, from tiny Chihuahuas to large breeds like Labs and Shepherds. Our groomers are experienced with breed-specific cuts, show standards, and custom styling.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                How long does a full grooming session take?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                A full grooming session typically takes 2-4 hours depending on your dog's size, coat condition, and the specific services requested. We'll provide a detailed estimate when you call or book online.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you offer grooming for senior dogs?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes! We specialize in gentle grooming for senior dogs with special handling and accommodations. We take extra care to ensure comfort and can adjust our approach based on any health considerations or mobility issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Visit Our Memorial Park Grooming Salon
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>Location & Hours</h3>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Address</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F" }}>6434 Washington Ave, Houston, TX 77007</p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Phone</h4>
                <a href="tel:7138206140" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  (713) 820-6140
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Email</h4>
                <a href="mailto:memorial@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  memorial@thedoghouseps.com
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "16px" }}>Hours</h4>
                <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2 }}>
                  <div>Monday - Friday: 7:00 AM - 7:00 PM</div>
                  <div>Saturday: 8:00 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>

              <Link
                href="/appointment-request-memorial"
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
                Book Your Grooming Appointment
              </Link>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>
                Serving These Houston Areas
              </h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0 }}>
                <li>✓ Memorial Park</li>
                <li>✓ Garden Oaks</li>
                <li>✓ Oak Forest</li>
                <li>✓ The Heights</li>
                <li>✓ Spring Branch</li>
                <li>✓ Memorial</li>
                <li>✓ Westchester</li>
                <li>✓ Washington Avenue Corridor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Also Grooming at Our Other Houston Locations
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <Link
              href="/galleria-dog-grooming/"
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
                Galleria Grooming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "12px" }}>
                5917 Richmond Ave - Serving Galleria, River Oaks, Upper Kirby
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600 }}>
                Learn more →
              </p>
            </Link>

            <Link
              href="/pearland-dog-grooming/"
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
                Pearland Grooming
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
            Ready for Professional Grooming in The Heights?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
            Book your dog's grooming appointment at our Memorial Park location today!
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request-memorial"
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
