import Image from "next/image";
import Link from "next/link";

export interface ThankYouConfig {
  location: "Galleria" | "Memorial" | "Pearland";
  customerType: "new" | "existing";
  reviewLink: string;
  directionsLink: string;
}

const SOCIAL_LINKS = [
  { label: "Facebook", url: "https://www.facebook.com/thedoghousepetsalon" },
  { label: "X / Twitter", url: "https://twitter.com/TheDogHousePS" },
  { label: "Instagram", url: "https://www.instagram.com/thedoghouseps/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/the-dog-house-pet-salon/" },
  { label: "YouTube", url: "https://www.youtube.com/@thedoghousepetsalonhouston" },
];

const heroSvgPath = "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

export default function ThankYouPage({ config }: { config: ThankYouConfig }) {
  const { location, customerType, reviewLink, directionsLink } = config;
  const isNew = customerType === "new";

  const bannerSrc = isNew
    ? "https://www.thedoghouseps.com/wp-content/uploads/2025/04/Thank-you-for-choosing-1024x150-1.png"
    : "https://www.thedoghouseps.com/wp-content/uploads/2025/04/A-Big-Thank-You-1-1024x150-1.png";

  const dogImgSrc = isNew
    ? "https://www.thedoghouseps.com/wp-content/uploads/2025/04/new-cus-dog-1024x713-1.webp"
    : "https://www.thedoghouseps.com/wp-content/uploads/2025/04/happy-Puppy-Welsh-Corgi-14-Weeks-old-dog-winking-panting-and-sitting-isolated-on-white-e1743968313952.webp";

  const thankYouTitle = isNew
    ? `Thank You for Choosing ${location}!`
    : `Thank You for Coming Back to ${location}!`;

  const subMessage = isNew
    ? `${location} for your pet's grooming needs!`
    : "We're so happy to see you back for another grooming session.";

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "300px",
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
            <path fill="#ffffff" d={heroSvgPath} />
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
              fontSize: "clamp(32px,5vw,64px)",
              color: "#ffffff",
              marginBottom: "0",
              lineHeight: 1.15,
            }}
          >
            Thank You{" "}
            <br />
            <span style={{ color: "#E0598A" }}>{location}</span>
          </h1>
        </div>
      </section>

      {/* ── Thank You Banner ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Image
            src={bannerSrc}
            alt={isNew ? "Thank you for choosing The Dog House" : "A big thank you from The Dog House"}
            width={1024}
            height={150}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            priority
          />
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "48px 20px 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Left: Dog image + thank you message */}
            <div>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "28px",
                  boxShadow: "6px 6px 9px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={dogImgSrc}
                  alt={isNew ? "Happy new customer dog" : "Happy returning customer dog"}
                  width={1024}
                  height={713}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <h2
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "clamp(22px,3vw,32px)",
                  color: "#965B83",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {location}
              </h2>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "17px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "0",
                }}
              >
                {subMessage}
              </p>
            </div>

            {/* Right: Action cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Write a Review */}
              <a
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  textDecoration: "none",
                  transition: "box-shadow 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Layer-6-5-1.png"
                  alt="Review icon"
                  width={56}
                  height={56}
                  style={{ flexShrink: 0 }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "18px",
                      color: "#1F2124",
                      margin: "0 0 4px",
                    }}
                  >
                    Write a Review
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      color: "#54595F",
                      margin: 0,
                    }}
                  >
                    Share your experience on Google
                  </p>
                </div>
              </a>

              {/* Get Directions */}
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/direction.png"
                  alt="Directions icon"
                  width={56}
                  height={56}
                  style={{ flexShrink: 0 }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "18px",
                      color: "#1F2124",
                      margin: "0 0 4px",
                    }}
                  >
                    Get Directions
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      color: "#54595F",
                      margin: 0,
                    }}
                  >
                    Open in Google Maps
                  </p>
                </div>
              </a>

              {/* Connect with Us */}
              <div
                style={{
                  background: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <Image
                    src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Layer-5-3.png"
                    alt="Social icon"
                    width={56}
                    height={56}
                    style={{ flexShrink: 0 }}
                  />
                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "18px",
                      color: "#1F2124",
                      margin: 0,
                    }}
                  >
                    Connect with Us
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px" }}>
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        color: "#965B83",
                        fontWeight: 600,
                        textDecoration: "none",
                        background: "#fff",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        border: "1px solid #E0D0E0",
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offer Section ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {isNew ? (
            /* New customer: 10% discount offer */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px",
                alignItems: "center",
                background: "#fff",
                borderRadius: "16px",
                padding: "40px",
                boxShadow: "6px 6px 9px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Image
                  src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Offer.png"
                  alt="Special offer"
                  width={300}
                  height={300}
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#965B83",
                    textTransform: "uppercase" as const,
                    marginBottom: "8px",
                  }}
                >
                  SPECIAL OFFER
                </p>
                <h2
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "clamp(28px,4vw,48px)",
                    color: "#1F2124",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  Receive a 10%{" "}
                  <span style={{ color: "#965B83" }}>DISCOUNT</span>
                </h2>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "17px",
                    color: "#54595F",
                    marginBottom: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  <strong>(new customers only)</strong>
                  <br />
                  With any Bath, Groom or Basic Service
                </p>
                <a
                  href="https://www.nuvetlabs.com/order_new2/products.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Shop
                </a>
              </div>
            </div>
          ) : (
            /* Existing customer: punchcard offer */
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "48px 40px",
                textAlign: "center",
                boxShadow: "6px 6px 9px rgba(0,0,0,0.08)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "clamp(32px,5vw,60px)",
                  color: "#965B83",
                  marginBottom: "20px",
                }}
              >
                Free
              </h2>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "18px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Ask about our groom punchcard and take advantage of a{" "}
                <strong style={{ color: "#1F2124" }}>
                  Free Bath, Groom, or Basic Service
                </strong>
                .
              </p>
              <a
                href={reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Write a Review
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Bottom ── */}
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
            Book Another Appointment
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "17px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            Need to schedule for another pet or location? We&apos;re always here!
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Link href="/appointment-request-form_location_richmond" className="btn-secondary">
              Galleria
            </Link>
            <Link href="/appointment-request-memorial" className="btn-secondary">
              Memorial Park
            </Link>
            <Link href="/appointment-request-pearland" className="btn-secondary">
              Pearland
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
