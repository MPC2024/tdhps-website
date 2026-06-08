import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLocations from "@/components/RelatedLocations";

export const metadata: Metadata = {
  title: "Dog Grooming in Galleria Houston | The Dog House Pet Salon",
  description:
    "Professional dog grooming services in Galleria Houston. Full grooms, breed-specific cuts, puppy grooming, de-shedding treatments. We look forward to seeing you.",
  openGraph: {
    title: "Dog Grooming in Galleria Houston | The Dog House Pet Salon",
    description:
      "Professional dog grooming services in Galleria Houston. Full grooms, breed-specific cuts, puppy grooming, de-shedding treatments. We look forward to seeing you.",
    url: "https://www.thedoghouseps.com/galleria-dog-grooming/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Dog Grooming Galleria Houston",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-dog-grooming/" },
};

export default function GalleriaGroomingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Galleria - Dog Grooming",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
    description: "Professional dog grooming services in Galleria Houston",
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
    url: "https://www.thedoghouseps.com/galleria-dog-grooming/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: ["Galleria", "River Oaks", "Highland Village", "Upper Kirby", "Greenway Plaza", "Montrose"],
    serviceType: "Pet Grooming",
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
        name: "Where can I find dog grooming near Galleria Houston?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dog House Pet Salon Galleria location is conveniently situated at 5917 Richmond Ave, serving Galleria, River Oaks, Highland Village, and surrounding neighborhoods in Houston.",
        },
      },
      {
        "@type": "Question",
        name: "What grooming services are available at the Galleria location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer full grooms, bath & brush, nail trimming, de-shedding treatments, breed-specific grooming, and puppy's first groom services.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I get my dog groomed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dogs benefit from grooming every 4-8 weeks depending on breed, coat type, and lifestyle. Long-haired breeds may need more frequent grooming to prevent matting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you groom large breeds at the Galleria salon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we groom dogs of all sizes at our Galleria location, from small breeds to large breeds like Golden Retrievers and German Shepherds.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in a full groom package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full groom includes bath, haircut or breed-specific cut, nail trimming, ear cleaning, and teeth brushing. Optional add-ons include de-matting and specialty treatments.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer puppy grooming near River Oaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer puppy's first groom services designed for young dogs to acclimate them to grooming. We're conveniently located near River Oaks and Uptown.",
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
          { name: "Galleria", url: "https://www.thedoghouseps.com/galleria-dog-grooming/" },
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
          alt="Dog grooming Galleria Houston hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.75, zIndex: 1 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,56px)", color: "#1F2124", marginBottom: "20px" }}>
            Professional Dog Grooming in Galleria Houston
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.8, maxWidth: "800px", marginBottom: "40px" }}>
            Serving Galleria, River Oaks, Highland Village, Upper Kirby, and Greenway Plaza. Breed-specific cuts, full grooms, and puppy grooming services tailored to your dog's unique needs.
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
            Our Grooming Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            We offer comprehensive grooming services tailored to your dog's breed, coat type, and individual needs. Each appointment is personalized for comfort and care.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Full Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Complete bath, breed-specific or custom haircut, nail trimming, ear cleaning, and teeth brushing. Our most popular service for full coat maintenance.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Bath & Brush
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Refreshing bath with premium shampoo, conditioning, and thorough brushing. Perfect for maintenance between full grooms or for short-haired breeds.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Nail Trimming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Professional nail trimming to maintain healthy paw structure and prevent overgrowth. Includes nail filing and paw pad care.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                De-shedding Treatment
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Advanced furminating and de-shedding to remove loose undercoat. Reduces shedding at home and keeps your dog's coat healthy and shiny.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Breed-Specific Grooming
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Expert cuts and styling specific to your breed's standards. Whether show-quality or pet-friendly, we know the perfect look for your dog.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Puppy's First Groom
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Gentle introduction to grooming for puppies. We focus on making it a positive experience and establishing good grooming habits early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Galleria Location */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "40px", textAlign: "center" }}>
            Why Choose Our Galleria Location
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Convenient Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Easily accessible from Galleria, River Oaks, Highland Village, and surrounding neighborhoods. Drop off your pup while you shop or run errands.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Expert Groomers</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Certified professional groomers with years of experience handling all breeds, sizes, and temperaments with care and expertise.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Premium Products</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                We use only high-quality shampoos, conditioners, and grooming products that are gentle on your dog's skin and coat.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Stress-Free Experience</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Our calm, professional environment ensures your dog feels safe and comfortable throughout their grooming experience.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Flexible Scheduling</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Open Monday-Saturday with convenient hours. Easy online booking or call us to schedule your appointment at a time that works for you.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Complete Care</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                From puppies to senior dogs, we provide personalized grooming plans. Boarding and daycare also available at Memorial Park.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RelatedLocations currentLocation="galleria" service="grooming" />
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
                Where can I find dog grooming near Galleria Houston?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                The Dog House Pet Salon Galleria location is conveniently situated at 5917 Richmond Ave, serving Galleria, River Oaks, Highland Village, and surrounding neighborhoods in Houston. We're easily accessible and offer flexible scheduling.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What grooming services are available at the Galleria location?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                We offer full grooms, bath & brush, nail trimming, de-shedding treatments, breed-specific grooming, and puppy's first groom services. All services are customized to your dog's specific needs.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                How often should I get my dog groomed?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Most dogs benefit from grooming every 4-8 weeks depending on breed, coat type, and lifestyle. Long-haired breeds may need more frequent grooming to prevent matting. We can recommend a schedule during your first visit.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you groom large breeds at the Galleria salon?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes, we groom dogs of all sizes at our Galleria location, from small breeds like Chihuahuas and Shih Tzus to large breeds like Golden Retrievers and German Shepherds. Our groomers are experienced with all breeds.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What is included in a full groom package?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                A full groom includes bath with premium shampoo, haircut or breed-specific cut, nail trimming, ear cleaning, and teeth brushing. Optional add-ons include de-matting, de-shedding treatments, and specialty grooming styles.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you offer puppy grooming near River Oaks?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes! We offer Puppy's First Groom services designed specifically for young dogs to acclimate them to grooming in a gentle, positive way. We're conveniently located near River Oaks and Uptown. Call us to schedule your puppy's first appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Visit Our Galleria Grooming Salon
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
                Book Your Grooming Appointment
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
                <li>✓ Tanglewood</li>
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
              href="/memorial-park-dog-grooming/"
              style={{
                padding: "40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
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

            <Link
              href="/pearland-dog-grooming/"
              style={{
                padding: "40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                border: "2px solid #e0e0e0",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "block",
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
            Ready for Professional Grooming?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
            Book your dog's grooming appointment at our Galleria location today. We look forward to pampering your pup!
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
