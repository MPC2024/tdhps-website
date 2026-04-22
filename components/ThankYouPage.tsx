import Image from "next/image";
import Link from "next/link";
import ThankYouText from "./ThankYouText";
import ThankYouOfferText from "./ThankYouOfferText";
import ThankYouCTAText from "./ThankYouCTAText";
import ThankYouActionCards from "./ThankYouActionCards";
import ThankYouOfferSection from "./ThankYouOfferSection";
import ThankYouConnectSection from "./ThankYouConnectSection";

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
          padding: "160px 20px 120px",
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
            sizes="100vw"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 512px"
                />
              </div>

              <ThankYouText location={location} isNew={isNew} />
            </div>

            {/* Right: Action cards - using client wrapper */}
            <ThankYouActionCards reviewLink={reviewLink} directionsLink={directionsLink} />

            {/* Connect with Us */}
            <ThankYouConnectSection />
          </div>
        </div>
      </section>

      {/* ── Offer Section ── */}
      <ThankYouOfferSection isNew={isNew} reviewLink={reviewLink} />

      {/* ── CTA Bottom ── */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <ThankYouCTAText />
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
