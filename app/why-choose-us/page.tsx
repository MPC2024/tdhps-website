import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Choose The Dog House Pet Salon | Houston's Trusted Pet Care",
  description:
    "Discover why Houston pet owners choose The Dog House Pet Salon. 30+ years of experience, certified groomers, 40,000+ happy clients, and a pet-first philosophy.",
  openGraph: {
    title: "Why Choose The Dog House Pet Salon",
    description:
      "Houston's most trusted pet salon with 30+ years of experience and 40,000+ satisfied clients.",
    url: "https://www.thedoghouseps.com/why-choose-us/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/why-choose-us/" },
};

const heroSvgPath =
  "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

const reasons = [
  {
    title: "30+ Years of Experience",
    icon: "🏆",
    description: "Since 1996, The Dog House has been the trusted name in Houston pet care. Three decades of expertise, proven processes, and countless happy pets.",
  },
  {
    title: "40,000+ Happy Clients Served",
    icon: "❤️",
    description: "Our track record speaks for itself. Thousands of Houston families trust us with their beloved pets year after year.",
  },
  {
    title: "Certified Master Groomer on Staff",
    icon: "🛡️",
    description: "Our owner, Donna Williams, is a certified master groomer. Every team member maintains professional certifications and ongoing training.",
  },
  {
    title: "3 Convenient Houston Locations",
    icon: "📍",
    description: "Galleria/Uptown Park, Memorial Park, and Pearland. Choose the location most convenient for your family.",
  },
  {
    title: "Live Webcam Monitoring",
    icon: "📹",
    description: "Watch your pet in real-time during grooming and daycare. Transparent, peace-of-mind pet care whenever you need it.",
  },
  {
    title: "Bilingual Staff",
    icon: "🗣️",
    description: "Hablamos Español. Our team speaks both English and Spanish for seamless communication with every family.",
  },
  {
    title: "Climate-Controlled Facilities",
    icon: "🌡️",
    description: "Year-round comfortable, safe environments for grooming, boarding, and daycare. Houston heat is never a problem for your pet.",
  },
  {
    title: "Comprehensive Pet Services",
    icon: "✓",
    description: "Grooming, bathing, boarding, daycare, and more. One trusted place for all your pet care needs.",
  },
  {
    title: "Community Involvement",
    icon: "🤝",
    description: "We're active in Houston's pet community with rescues, adoption events, and local partnerships. Giving back matters to us.",
  },
];

const faqs = [
  {
    question: "How do I know my pet is safe at The Dog House?",
    answer: "We maintain strict safety protocols, employ certified professionals, use live webcams for transparency, and treat every pet like family. Our 30+ year track record and thousands of happy clients prove our commitment to pet safety.",
  },
  {
    question: "What makes your groomers different?",
    answer: "Our team includes a certified master groomer and staff with years of professional training. We use breed-specific techniques, gentle handling, and premium products. We listen to your needs and customize every grooming experience.",
  },
  {
    question: "Can I watch my pet during grooming?",
    answer: "Yes! We offer live webcam monitoring so you can check on your pet anytime during your visit. Log in from your phone or desktop.",
  },
  {
    question: "Do you have experience with anxious or rescue dogs?",
    answer: "Absolutely. Our patient groomers specialize in working with anxious, rescue, and special-needs dogs. We take extra time to make every pet feel safe and loved.",
  },
  {
    question: "What if my pet has health issues or special needs?",
    answer: "We work closely with you to understand your pet's unique needs. Our grooming and daycare staff are trained in handling pets with health concerns, allergies, and behavioral challenges.",
  },
  {
    question: "How do you stay current with pet care trends?",
    answer: "Our team attends professional development courses, stays certified, and follows the latest standards in pet grooming, behavior, and care. Continuous improvement is part of our culture.",
  },
];

export default function WhyChooseUsPage() {
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
          alt="Why choose The Dog House Pet Salon"
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
            Why Houston Pet Owners Choose <span style={{ color: "#965B83" }}>The Dog House Pet Salon</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 20px)", color: "#54595F", maxWidth: "700px" }}>
            Three decades of trust, expertise, and genuine love for pets. Here's why we're Houston's favorite.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            What Sets Us Apart
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {reasons.map((reason, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{reason.icon}</div>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "12px" }}>
                  {reason.title}
                </h3>
                <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section style={{ backgroundColor: "#f8f5f6", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
              textAlign: "center",
            }}
          >
            <div>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px", color: "#965B83", margin: "0 0 8px 0" }}>
                30+
              </p>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "#1F2124", fontWeight: "600", margin: 0 }}>
                Years of Excellence
              </p>
            </div>
            <div>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px", color: "#965B83", margin: "0 0 8px 0" }}>
                40,000+
              </p>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "#1F2124", fontWeight: "600", margin: 0 }}>
                Happy Clients Served
              </p>
            </div>
            <div>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px", color: "#965B83", margin: "0 0 8px 0" }}>
                3
              </p>
              <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "#1F2124", fontWeight: "600", margin: 0 }}>
                Convenient Houston Locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Frequently Asked Questions
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

      {/* CTA Section */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#ffffff", marginBottom: "24px" }}>
            Experience the Difference
          </h2>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.8, marginBottom: "40px" }}>
            Join thousands of Houston pet owners who trust The Dog House. Schedule your appointment today.
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
          <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "14px", color: "rgba(255, 255, 255, 0.85)", marginTop: "20px" }}>
            Or call us: <a href="tel:7138206140" style={{ color: "#ffffff", textDecoration: "underline" }}>(713) 820-6140</a>
          </p>
        </div>
      </section>
    </>
  );
}
