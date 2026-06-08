import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Our Facilities | Pet Grooming & Boarding Facilities Houston",
  description:
    "Tour The Dog House Pet Salon facilities in Houston. Climate-controlled grooming stations, boarding suites, daycare play areas, and live webcam monitoring.",
  openGraph: {
    title: "Our Facilities | The Dog House Pet Salon Houston",
    description:
      "Climate-controlled pet care facilities with professional grooming stations, boarding suites, and daycare areas.",
    url: "https://www.thedoghouseps.com/our-facilities/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/our-facilities/" },
};

const heroSvgPath =
  "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

const facilities = [
  {
    title: "Professional Grooming Stations",
    icon: "✂️",
    description: "State-of-the-art grooming stations equipped with professional-grade tools and equipment.",
    details: [
      "Individual grooming stalls with adjustable height tables",
      "Professional dryers and grooming equipment",
      "Non-slip surfaces for pet safety",
      "Easy-access bathing areas for bathing specialists",
      "Breed-appropriate grooming supplies and tools",
    ],
  },
  {
    title: "Climate-Controlled Boarding Suites",
    icon: "🏠",
    description: "Spacious, comfortable suites designed for your pet's safety and comfort during overnight stays.",
    details: [
      "Individual, climate-controlled kennels",
      "Orthopedic bedding for comfort",
      "Regular monitoring and care checks",
      "Secure, escape-proof construction",
      "Personalized feeding and medication administration",
    ],
  },
  {
    title: "Indoor & Outdoor Daycare Play Areas",
    icon: "🎾",
    description: "Safe, spacious areas designed for supervised play, socialization, and exercise.",
    details: [
      "Climate-controlled indoor play arena",
      "Secure outdoor play yard with artificial turf",
      "Separate areas for different size/energy levels",
      "Shaded rest areas for relaxation",
      "Water stations and play equipment",
    ],
  },
  {
    title: "Dedicated Bathing Stations",
    icon: "🛁",
    description: "Specialized bathing areas with professional equipment for thorough, efficient pet bathing.",
    details: [
      "Elevated tub systems for easy access",
      "Temperature-controlled water systems",
      "Premium shampoos and conditioning products",
      "Powerful dryers for quick, comfortable drying",
      "Non-slip surfaces throughout",
    ],
  },
  {
    title: "Live Webcam Monitoring",
    icon: "📹",
    description: "Real-time video monitoring systems throughout the facility for total transparency.",
    details: [
      "Live webcam feed access via web browser",
      "Monitor your pet anytime during visits",
      "High-definition cameras in all areas",
      "Secure login system for privacy",
      "Mobile-friendly viewing on any device",
    ],
  },
  {
    title: "Sanitation & Safety Protocols",
    icon: "🧼",
    description: "Industry-leading cleanliness standards and safety measures throughout all facilities.",
    details: [
      "Daily deep cleaning and sanitization",
      "EPA-approved disinfectants",
      "Separate areas for sick/quarantine animals",
      "Professional-grade air filtration",
      "First aid kits and emergency protocols",
    ],
  },
];

const faqs = [
  {
    question: "How often are the facilities cleaned?",
    answer: "Our facilities are cleaned multiple times daily. Grooming areas are sanitized between each pet, boarding suites are deep cleaned daily, and all common areas receive professional cleaning each morning and evening.",
  },
  {
    question: "Are the facilities temperature-controlled?",
    answer: "Yes. All grooming, boarding, and daycare areas are climate-controlled year-round. During Houston's hot summers, we maintain comfortable temperatures so your pet stays cool and safe.",
  },
  {
    question: "What safety measures do you have in place?",
    answer: "We maintain strict safety protocols including secure facilities, non-slip surfaces, emergency procedures, trained staff, and live monitoring. We also require vaccination records and health screening for daycare and boarding pets.",
  },
  {
    question: "Can I visit the facilities before scheduling?",
    answer: "Absolutely! We welcome facility tours. Call your location to schedule a convenient time. We love showing pet owners our clean, safe, professional facilities.",
  },
  {
    question: "What happens if a pet gets sick during daycare or boarding?",
    answer: "We monitor all pets closely. If a pet becomes ill, we contact you immediately and provide appropriate care. We have quarantine procedures and emergency protocols in place. For boarding, we follow medication instructions and health management protocols you provide.",
  },
];

export default function OurFacilitiesPage() {
  return (
    <>
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
          alt="The Dog House Pet Salon facilities"
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
            Tour Our <span style={{ color: "#965B83" }}>Houston Pet Care Facilities</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 20px)", color: "#54595F", maxWidth: "700px" }}>
            State-of-the-art pet care facilities designed for safety, comfort, and professional care across three locations.
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Our Facilities
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {facilities.map((facility, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "24px" }}>
                  <div style={{ fontSize: "48px" }}>{facility.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", margin: "0 0 8px 0" }}>
                      {facility.title}
                    </h3>
                    <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                      {facility.description}
                    </p>
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {facility.details.map((detail, detailIdx) => (
                    <li
                      key={detailIdx}
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                        fontSize: "14px",
                        color: "#54595F",
                        lineHeight: 1.6,
                        marginBottom: "8px",
                      }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section style={{ backgroundColor: "#f8f5f6", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Why Our Facilities Stand Out
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Safety First
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                Every detail is designed with your pet's safety in mind. Secure facilities, professional staff, and continuous monitoring.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Professional Equipment
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                State-of-the-art grooming and boarding equipment. We invest in the best tools and technology for premium pet care.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Transparent Care
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                Live webcam monitoring lets you check on your pet anytime. We believe in complete transparency and your peace of mind.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Climate Control
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                Year-round climate control keeps your pet comfortable in all weather. Houston summers won't be a problem.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Pristine Cleanliness
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                Daily deep cleaning and sanitization protocols. Professional-grade disinfectants and air filtration systems.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "8px" }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: "600", marginBottom: "12px" }}>
                Trained Staff
              </h3>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                Certified groomers, behavior specialists, and trained care staff. Experience and expertise in every role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Facility Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                style={{
                  backgroundColor: "#f8f5f6",
                  padding: "24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1F2124",
                    userSelect: "none",
                  }}
                >
                  {faq.question}
                </summary>
                <p
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.7,
                    marginTop: "16px",
                    marginBottom: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Videos */}
      <VideoSection
        title="Take a Virtual Facility Tour"
        subtitle="Explore our state-of-the-art grooming stations, boarding suites, and play areas"
        videos={[
          {
            title: "Full Facility Tour",
            category: "Facilities",
            duration: "4:20",
          },
          {
            title: "Grooming Area Walkthrough",
            category: "Facilities",
            duration: "2:30",
          },
          {
            title: "Daycare Play Areas",
            category: "Facilities",
            duration: "3:00",
          },
          {
            title: "Boarding Suites Overview",
            category: "Facilities",
            duration: "2:50",
          },
        ]}
        layout="2-col"
      />

      {/* CTA Section */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#ffffff", marginBottom: "24px" }}>
            Visit Us Today
          </h2>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.8, marginBottom: "40px" }}>
            Schedule a tour or your pet's appointment. See our facilities and meet our team in person.
          </p>
          <Link
            href="/appointment-request"
            className="hover:shadow-lg hover:translate-y-[-2px] transition-all"
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#965B83",
              padding: "14px 40px",
              borderRadius: "6px",
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
