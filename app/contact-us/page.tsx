import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Salon Near Me: The Best in Houston",
  description:
    "Looking for a reliable pet salon near me? Trust Houston's top grooming, daycare, and boarding services for your pets!",
  openGraph: {
    title: "Pet Salon Near Me: The Best in Houston",
    description:
      "Looking for a reliable pet salon near me? Trust Houston's top grooming, daycare, and boarding services for your pets!",
    url: "https://www.thedoghouseps.com/contact-us/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
        alt: "The Dog House Pet Salon – Galleria Location",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/contact-us/" },
};

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    appointmentLink: "/appointment-request-form_location_richmond",
    appointmentLabel: "Galleria Location",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    appointmentLink: "/appointment-request-memorial",
    appointmentLabel: "Memorial Park Location",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    appointmentLink: "/appointment-request-pearland",
    appointmentLabel: "Pearland Location",
  },
];

const whyUs = [
  {
    label: "Comprehensive Care",
    desc: "Providing loving and attentive care for all pets.",
  },
  {
    label: "Experienced Staff",
    desc: "Over 8,000+ satisfied clients attest to our expertise.",
  },
  {
    label: "Competitive Pricing",
    desc: "Offering various packages tailored to your pet's needs.",
  },
  {
    label: "Safety Standards",
    desc: "Maintaining high sanitation and safety standards.",
  },
  {
    label: "Convenient Locations",
    desc: "Multiple convenient locations across Houston.",
  },
];

export default function ContactUsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "380px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path
              fill="#ffffff"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Contact <span style={{ color: "#E0598A" }}>Us</span>
          </h1>
        </div>
      </section>

      {/* ── Welcome / Intro ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Intro text */}
            <div>
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "clamp(24px,3vw,38px)",
                  color: "#1F2124",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Welcome to The Dog House Pet Salon!
              </h2>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "16px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                With over 25 years of experience, we are Houston&apos;s premier{" "}
                <Link
                  href="/pet-grooming"
                  style={{ color: "#965B83", fontWeight: 600 }}
                >
                  pet grooming
                </Link>
                ,{" "}
                <Link
                  href="/dog-day-care"
                  style={{ color: "#965B83", fontWeight: 600 }}
                >
                  doggie daycare
                </Link>
                , and{" "}
                <Link
                  href="/houston-pet-boarding"
                  style={{ color: "#965B83", fontWeight: 600 }}
                >
                  pet boarding
                </Link>{" "}
                service provider. Our dedicated team is here to offer your pets the
                love and care they deserve.
              </p>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "16px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Have questions or need assistance? Contact us, We&apos;re just a call
                or email away!
              </p>

              <h3
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "22px",
                  color: "#1F2124",
                  marginBottom: "20px",
                }}
              >
                Questions?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="tel:7138206140"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "17px",
                    color: "#1F2124",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  📞 (713) 820-6140
                </a>
                <a
                  href="mailto:galleria@thedoghouseps.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "17px",
                    color: "#965B83",
                    textDecoration: "none",
                  }}
                >
                  ✉️ galleria@thedoghouseps.com
                </a>
                <a
                  href="mailto:memorial@thedoghouseps.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "17px",
                    color: "#965B83",
                    textDecoration: "none",
                  }}
                >
                  ✉️ memorial@thedoghouseps.com
                </a>
                <a
                  href="mailto:pearland@thedoghouseps.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "17px",
                    color: "#965B83",
                    textDecoration: "none",
                  }}
                >
                  ✉️ pearland@thedoghouseps.com
                </a>
              </div>
            </div>

            {/* Vaccination Requirements */}
            <div
              style={{
                backgroundColor: "#F8F8F8",
                borderRadius: "12px",
                padding: "36px",
              }}
            >
              <h3
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "18px",
                  color: "#1F2124",
                  marginBottom: "20px",
                  lineHeight: 1.3,
                }}
              >
                To ensure the safety and health of all our furry guests, we require
                the following vaccinations:
              </h3>

              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#965B83",
                    marginBottom: "10px",
                  }}
                >
                  The following unexpired vaccinations are required for Pet Boarding
                  and Daycare Services
                </p>
                <ol
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    paddingLeft: "20px",
                    lineHeight: 1.8,
                  }}
                >
                  <li>Bordetella</li>
                  <li>Distemper</li>
                  <li>Rabies</li>
                  <li>
                    Influenza is{" "}
                    <strong style={{ color: "#1F2124" }}>NOT REQUIRED</strong> but{" "}
                    <strong style={{ color: "#1F2124" }}>RECOMMENDED</strong>
                  </li>
                </ol>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#965B83",
                    marginBottom: "10px",
                  }}
                >
                  The following unexpired vaccinations are required for Pet Grooming
                  Services
                </p>
                <ol
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    paddingLeft: "20px",
                    lineHeight: 1.8,
                  }}
                >
                  <li>Bordetella</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            You Can Find Us At These Locations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {locations.map((loc) => (
              <div
                key={loc.address}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.1)",
                }}
              >
                <Image
                  src={loc.img}
                  alt={loc.address}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "20px",
                      color: "#1F2124",
                      marginBottom: "12px",
                    }}
                  >
                    {loc.address}
                  </h3>
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#965B83",
                      display: "block",
                      fontWeight: 600,
                      marginBottom: "6px",
                      textDecoration: "none",
                    }}
                  >
                    {loc.phone}
                  </a>
                  <a
                    href={`mailto:${loc.email}`}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "15px",
                      color: "#965B83",
                      display: "block",
                      marginBottom: "20px",
                      textDecoration: "none",
                    }}
                  >
                    {loc.email}
                  </a>
                  <Link href={loc.appointmentLink} className="btn-primary">
                    {loc.appointmentLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Why Choose Us
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "#54595F",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            At The Dog House Pet Salon, we pride ourselves on:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {whyUs.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "30px 24px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "17px",
                    color: "#965B83",
                    marginBottom: "10px",
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maps ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Find Us On The Map
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                label: "Galleria – 5917 Richmond Ave",
                src: "https://maps.google.com/maps?q=5917%20Richmond%20Ave.%2C%20Houston%2C%20TX%2077057&t=m&z=15&output=embed&iwloc=near",
              },
              {
                label: "Memorial Park – 6434 Washington Ave",
                src: "https://maps.google.com/maps?q=6434%20Washington%20Ave%2C%20Houston%2C%20TX%2077007&t=m&z=15&output=embed&iwloc=near",
              },
              {
                label: "Pearland – 2810 Business Center Dr",
                src: "https://maps.google.com/maps?q=2810%20Business%20Center%20Dr%2C%20Pearland%2C%20TX%2077584&t=m&z=15&output=embed&iwloc=near",
              },
            ].map((m) => (
              <div key={m.label} style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", padding: "16px 20px 0", margin: 0 }}>
                  {m.label}
                </p>
                <iframe
                  loading="lazy"
                  src={m.src}
                  style={{ width: "100%", height: "300px", border: 0, display: "block", marginTop: "12px" }}
                  allowFullScreen
                  title={m.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to pamper your pet?
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "17px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            Please schedule an appointment today through our Online Reservation System.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Link href="/appointment-request-form_location_richmond" className="btn-secondary">
              Galleria Location
            </Link>
            <Link href="/appointment-request-memorial" className="btn-secondary">
              Memorial Park Location
            </Link>
            <Link href="/appointment-request-pearland" className="btn-secondary">
              Pearland Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
