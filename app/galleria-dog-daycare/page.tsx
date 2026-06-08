import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedLocations from "@/components/RelatedLocations";

export const metadata: Metadata = {
  title: "Dog Daycare in Galleria Houston | The Dog House Pet Salon",
  description:
    "Supervised dog daycare near Galleria Houston with socialization, indoor/outdoor play, and live webcam viewing. Book your pup's playdate today.",
  openGraph: {
    title: "Dog Daycare in Galleria Houston | The Dog House Pet Salon",
    description:
      "Supervised dog daycare near Galleria Houston with socialization, indoor/outdoor play, and live webcam viewing. Book your pup's playdate today.",
    url: "https://www.thedoghouseps.com/galleria-dog-daycare/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "Dog Daycare Galleria Houston",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-dog-daycare/" },
};

export default function GalleriaDaycarePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Dog House Pet Salon - Galleria - Dog Daycare",
    image: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
    description: "Dog daycare services in Galleria Houston with supervised play and socialization",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2639 Westheimer Rd",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77098",
      addressCountry: "US",
    },
    telephone: "(713) 520-4825",
    email: "galleria@thedoghouseps.com",
    url: "https://www.thedoghouseps.com/galleria-dog-daycare/",
    openingHoursSpecification: [
      { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
    ],
    priceRange: "$$",
    areaServed: ["Galleria", "River Oaks", "Highland Village", "Upper Kirby", "Greenway Plaza", "Montrose"],
    serviceType: "Pet Daycare",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.7399,
      longitude: -95.4498,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find dog daycare near Galleria Houston?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Dog House Pet Salon Galleria daycare location is conveniently situated at 2639 Westheimer Rd, serving Galleria, River Oaks, Highland Village, and surrounding neighborhoods in Houston.",
        },
      },
      {
        "@type": "Question",
        name: "What does a typical daycare day look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our daycare days include supervised group play sessions, indoor and outdoor activities, rest and quiet time, meals, and opportunities for socialization with compatible dogs. We rotate playtime to keep your dog engaged and happy.",
        },
      },
      {
        "@type": "Question",
        name: "Are dogs separated by size during play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we group dogs by size and temperament to ensure safe and enjoyable playtime. This helps prevent injuries and ensures positive interactions between dogs.",
        },
      },
      {
        "@type": "Question",
        name: "What vaccinations are required for daycare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daycare requires current Bordetella, Distemper, and Rabies vaccinations. Influenza is not required but recommended. Please bring vaccination records to your first visit.",
        },
      },
      {
        "@type": "Question",
        name: "Can I watch my dog on webcam during daycare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our live webcam allows you to check in on your dog anytime during the day. Watch your pup play, socialize, and have fun from your phone or computer.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer half-day daycare near River Oaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer flexible daycare packages including half-day and full-day options. We're conveniently located near River Oaks and Uptown. Call us to discuss a daycare schedule that works for you.",
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
          { name: "Dog Daycare", url: "https://www.thedoghouseps.com/dog-day-care" },
          { name: "Galleria", url: "https://www.thedoghouseps.com/galleria-dog-daycare/" },
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
          alt="Dog daycare Galleria Houston hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.75, zIndex: 1 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,56px)", color: "#1F2124", marginBottom: "20px" }}>
            Dog Daycare in Galleria Houston
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.8, maxWidth: "800px", marginBottom: "40px" }}>
            Fun and safe supervised daycare in the Galleria area. Socialization groups, indoor/outdoor play, webcam viewing, and flexible packages. Your pup will have a blast!
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
              Book Daycare Playdate
            </Link>
            <a
              href="tel:7135204825"
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
              Call (713) 520-4825
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
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>All Sizes</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Welcome</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Supervised</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Professional Staff</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", color: "#965B83", marginBottom: "12px" }}>Webcam</div>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Live Viewing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daycare Services */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "16px", textAlign: "center" }}>
            Our Daycare Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            Professional daycare designed to keep your dog active, social, and happy while you're at work or running errands.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Supervised Play
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Dogs grouped by size and temperament for safe, fun interactions. Our staff supervises all playtime to ensure everyone stays happy and safe.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Socialization Groups
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Structured group play helps dogs build confidence and social skills. Great for shy dogs and puppies learning to interact with other dogs.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Indoor & Outdoor Play Areas
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Climate-controlled indoor space plus outdoor play yards. Your dog gets variety and enjoys the elements safely under supervision.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Live Webcam Viewing
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Watch your dog play in real-time from your phone or computer. Check in anytime to see your pup having fun and socializing.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Flexible Daycare Packages
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Single day, multi-day packs, and monthly unlimited options. Choose a schedule that fits your needs and budget.
              </p>
            </div>

            <div style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "16px", border: "1px solid #e0e0e0" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", marginBottom: "16px" }}>
                Rest & Quiet Time
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Scheduled nap breaks in comfortable individual areas. Your dog gets playtime and downtime for a balanced, healthy day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Galleria Daycare */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#ffffff", marginBottom: "40px", textAlign: "center" }}>
            Why Choose Our Galleria Daycare
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Convenient Location</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Easily accessible from Galleria, River Oaks, Highland Village, and surrounding neighborhoods. Drop off your pup on your way to work.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Expert Staff</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Trained, experienced caregivers who understand dog behavior and safety. Your dog gets professional supervision and care.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Safe Environment</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Clean facilities, secure play areas, and strict health requirements. Your dog stays safe, healthy, and happy throughout the day.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Socialization Benefits</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Regular interaction with other dogs builds confidence and prevents boredom. Your pup develops social skills and friendships.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Flexible Scheduling</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Open Monday-Saturday with convenient hours. Easy online booking or call us to schedule a daycare session that works for you.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", marginBottom: "16px" }}>Complete Care</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", lineHeight: 1.8 }}>
                Meals provided, medications administered, and special needs accommodated. We handle everything so you can focus on your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <RelatedLocations currentLocation="galleria" service="daycare" />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Daycare FAQs
          </h2>

          <div style={{ display: "grid", gap: "40px" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Where can I find dog daycare near Galleria Houston?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                The Dog House Pet Salon Galleria daycare location is conveniently situated at 2639 Westheimer Rd, serving Galleria, River Oaks, Highland Village, and surrounding neighborhoods in Houston. We're easily accessible and offer flexible scheduling.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What does a typical daycare day look like?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Your dog arrives in the morning and joins a supervised play group. We rotate playtime between indoor and outdoor areas throughout the day, with breaks for meals, water, and rest time. Your dog finishes the day tired, happy, and well-socialized.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Are dogs separated by size during play?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes, we group dogs by size and temperament to ensure safe and enjoyable playtime. This prevents injuries and ensures positive interactions between dogs of similar sizes and play styles.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                What vaccinations are required for daycare?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                We require current DHPP (or DHLPP) and rabies vaccinations. Up-to-date Bordetella vaccination is also recommended. Please provide vaccination records at your dog's first daycare visit for their health and safety.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Can I watch my dog on webcam during daycare?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Absolutely! Our live webcam allows you to check in on your dog anytime during the day. Watch your pup play, socialize, and have fun from your phone or computer for complete peace of mind.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>
                Do you offer half-day daycare near River Oaks?
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.8 }}>
                Yes! We offer flexible daycare packages including half-day and full-day options. We're conveniently located near River Oaks and Uptown. Call us today to discuss a daycare schedule that works perfectly for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,44px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Visit Our Galleria Daycare
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "30px" }}>Location & Hours</h3>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Address</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F" }}>2639 Westheimer Rd, Houston, TX 77098</p>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Phone</h4>
                <a href="tel:7135204825" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#965B83", textDecoration: "none", fontWeight: 600 }}>
                  (713) 520-4825
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
                Book Daycare Playdate
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
            Also Daycare at Our Other Houston Locations
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <Link
              href="/memorial-park-dog-daycare/"
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
                Memorial Park Daycare
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "12px" }}>
                1337 W 43rd St - Serving Heights, Garden Oaks, Oak Forest
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
            Ready for Fun Daycare at Galleria?
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
            Book your dog's daycare playdate at our Galleria location today. We look forward to giving your pup a day full of fun and socialization!
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
              href="tel:7135204825"
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
              Call (713) 520-4825
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
