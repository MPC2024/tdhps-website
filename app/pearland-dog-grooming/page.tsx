import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLocations from "@/components/RelatedLocations";

export const metadata: Metadata = {
  title: "Dog Grooming in Pearland TX | The Dog House Pet Salon",
  description:
    "Professional dog grooming in Pearland, TX. Serving Friendswood, Alvin, and surrounding areas. All breeds welcome. Premium grooming services. Book online today!",
  openGraph: {
    title: "Dog Grooming in Pearland TX | The Dog House Pet Salon",
    description:
      "Professional dog grooming in Pearland, TX. Serving Friendswood, Alvin, and surrounding areas. All breeds welcome. Premium grooming services. Book online today!",
    url: "https://www.thedoghouseps.com/pearland-dog-grooming/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Dog Grooming Pearland TX",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pearland-dog-grooming/" },
};

export default function PearlandGroomingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Pearland - Dog Grooming",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
    description: "Professional dog grooming services in Pearland TX",
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
    url: "https://www.thedoghouseps.com/pearland-dog-grooming/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: ["Pearland", "Friendswood", "Manvel", "Alvin", "Silverlake", "Shadow Creek Ranch"],
    serviceType: "Pet Grooming",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5567974,
      longitude: -95.3927816,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find dog grooming in Pearland TX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dog House Pet Salon Pearland location is at 2810 Business Center Dr #126, conveniently serving Pearland, Friendswood, Alvin, and surrounding communities in the greater Houston area.",
        },
      },
      {
        "@type": "Question",
        name: "Do you groom all dog sizes in Pearland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we groom dogs of all sizes at our Pearland location, from small breeds like Poodles and Yorkies to large breeds like German Shepherds and Golden Retrievers.",
        },
      },
      {
        "@type": "Question",
        name: "What vaccinations are required for grooming?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grooming requires a current Bordetella vaccination. All vaccinations must be unexpired. Please bring vaccination records to your appointment.",
        },
      },
      {
        "@type": "Question",
        name: "Is there parking available at the Pearland location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our Pearland location has ample parking available at the Business Center. Drop-off and pick-up are convenient with easy access to the facility.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer walk-in grooming in Pearland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend scheduling appointments in advance to ensure availability. However, call ahead to check if we can accommodate walk-ins based on current appointments.",
        },
      },
      {
        "@type": "Question",
        name: "How much does dog grooming cost in Pearland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grooming pricing varies based on your dog's size, coat condition, and services requested. Call us at (713) 820-6140 for a custom quote or book online for our pricing structure.",
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
          { name: "Pearland", url: "https://www.thedoghouseps.com/pearland-dog-grooming/" },
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
          src="/images/pearland-location.jpg"
          alt="Dog grooming Pearland TX hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.75, zIndex: 1 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,56px)", color: "#1F2124", marginBottom: "20px" }}>
            Professional Dog Grooming in Pearland TX
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.8, maxWidth: "800px", marginBottom: "40px" }}>
            Serving Pearland, Friendswood, Alvin, Manvel, and Shadow Creek Ranch. Expert grooming for all breeds, sizes, and coat types with premium care and products.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request-pearland"
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
            Our Grooming Services in Pearland
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            Comprehensive grooming solutions customized for your dog's breed, coat type, size, and individual needs.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Full Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Complete bath, haircut or breed-specific cut, nail trimming, ear cleaning, and teeth brushing. Our most comprehensive grooming package.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Bath & Brush
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Refreshing bath with premium shampoo, conditioning, and thorough brushing. Ideal for maintenance between full grooms.
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
                Advanced furminating to remove loose undercoat. Reduces shedding and promotes a healthy, shiny coat.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Breed-Specific Grooming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Expert cuts and styling specific to your breed standards. Show-quality or pet-friendly grooming.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Puppy's First Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Gentle introduction to grooming for puppies, creating a positive experience and establishing good grooming habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pearland Location */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "40px", textAlign: "center" }}>
            Why Choose Our Pearland Location
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>South Houston Convenience</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Perfectly located in Pearland's Business Center, serving the South Houston area including Friendswood, Alvin, Manvel, and Shadow Creek Ranch.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Easy Parking</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Ample parking available at the Business Center makes drop-off and pick-up convenient and stress-free for busy pet owners.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Expert Groomers</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Certified professional groomers with extensive experience handling all breeds, sizes, and temperaments with expertise and care.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Quality Products</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                We use only premium shampoos, conditioners, and grooming products that are gentle on your dog's skin and coat.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Flexible Hours</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Open Monday-Saturday with extended weekday hours. Easy online booking or call to schedule at your convenience.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Complete Services</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Grooming, boarding, and daycare all available. Your one-stop shop for all your dog's care needs in the Pearland area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RelatedLocations currentLocation="pearland" service="grooming" />
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
                Where can I find dog grooming in Pearland TX?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                The Dog House Pet Salon Pearland location is at 2810 Business Center Dr #126. We conveniently serve Pearland, Friendswood, Alvin, Manvel, and surrounding communities with easy parking and accessible drop-off/pick-up.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you groom all dog sizes in Pearland?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes, we groom dogs of all sizes at our Pearland location, from small breeds like Poodles, Yorkies, and Chihuahuas to large breeds like German Shepherds, Golden Retrievers, and Labs.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What vaccinations are required for grooming?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Grooming requires a current Bordetella vaccination. All vaccinations must be unexpired. Please bring vaccination records to your appointment."
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Is there parking available at the Pearland location?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes, our Pearland location in the Business Center has ample parking available. Drop-off and pick-up are convenient with easy access to the facility and nearby shops.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you offer walk-in grooming in Pearland?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                We recommend scheduling appointments in advance to ensure availability and to provide your pup the best care. However, feel free to call ahead at (713) 820-6140 to check if we can accommodate walk-ins.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                How much does dog grooming cost in Pearland?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Grooming pricing varies based on your dog's size, coat condition, and services requested. Call us at (713) 820-6140 for a custom quote or book online to see our pricing structure. We offer competitive rates for all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Visit Our Pearland Grooming Salon
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>Location & Hours</h3>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Address</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F" }}>2810 Business Center Dr #126, Pearland, TX 77584</p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Phone</h4>
                <a href="tel:7138206140" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  (713) 820-6140
                </a>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Email</h4>
                <a href="mailto:pearland@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  pearland@thedoghouseps.com
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
                href="/appointment-request-pearland"
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
                Serving These Areas
              </h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0 }}>
                <li>✓ Pearland</li>
                <li>✓ Friendswood</li>
                <li>✓ Manvel</li>
                <li>✓ Alvin</li>
                <li>✓ Silverlake</li>
                <li>✓ Shadow Creek Ranch</li>
                <li>✓ South Houston</li>
                <li>✓ Brazoria County</li>
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
              href="/memorial-park-dog-grooming/"
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
                Memorial Park Grooming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "12px" }}>
                6434 Washington Ave - Serving Heights, Garden Oaks, Oak Forest
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
            Ready for Professional Grooming in Pearland?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
            Book your dog's grooming appointment at our Pearland location today!
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/appointment-request-pearland"
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
