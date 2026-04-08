import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Dog House Pet Salon Houston TX | Grooming & Spa Services",
  description:
    "The Dog House Pet Salon in Houston TX provides premium grooming, styling, bathing & care. Learn grooming schedules & how to choose the right salon.",
  openGraph: {
    title: "Dog House Pet Salon Houston TX | Grooming & Spa Services",
    description:
      "The Dog House Pet Salon in Houston TX provides premium grooming, styling, bathing & care. Learn grooming schedules & how to choose the right salon.",
    url: "https://www.thedoghouseps.com/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/08/open-graph.png",
        alt: "The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/" },
};

/* ── Data ── */
const services = [
  {
    title: "PET GROOMING",
    description: "Houston's #1 Pet Grooming Service Provider for Over a Decade.",
    href: "/pet-grooming",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-grooming.jpg",
    imgAlt: "pet grooming",
  },
  {
    title: "PET boarding",
    description: "The Go-To Pet Paradise for Houston Pet Owners",
    href: "/houston-pet-boarding",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-boarding.jpg",
    imgAlt: "pet boarding",
  },
  {
    title: "Doggie Daycare",
    description: "Love and attention are essential ingredients to putting a smile on all pets",
    href: "/dog-day-care",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    imgAlt: "doggie daycare",
  },
];

const registrationSteps = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-evaluation.png",
    imgAlt: "pet evaluation",
    heading: (
      <>
        Schedule a <span style={{ color: "#965B83" }}>Pet Evaluation</span>
      </>
    ),
    text: "The first step toward becoming a part of our community is to schedule an evaluation for your pet through an email or a phone call. Our team of pet experts will assess your pet's needs and temperament to ensure we can provide the best care and services tailored to them.",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-vaccination.png",
    imgAlt: "dog vaccination",
    heading: (
      <>
        Upload <span style={{ color: "#965B83" }}>Dog&apos;s Vaccination</span> Records
      </>
    ),
    text: "Our top priority is the health and safety of all pets in our care. To ensure this, we require all pet owners to provide up-to-date vaccination records for their dogs. You can provide these records in the most convenient way for you. Email them to us, upload them through our website, or bring them in person.",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-heaven.png",
    imgAlt: "dogs heaven",
    heading: (
      <>
        <span style={{ color: "#965B83" }}>Bring Your Dog to Safe</span> Haven
      </>
    ),
    text: "Once the evaluation is complete and we have your pet's vaccination records, your furry friend is ready to join our playgroup! At The Dog House Pet Salon, we strive to create a safe, stimulating environment where your pet can socialize and make new friends.",
  },
];

const blogPosts = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg",
    imgAlt: "Shih Tzu freshly groomed at The Dog House Pet Salon in Pearland Texas professional dog grooming",
    title: "The Benefits of Routine Dog Grooming in Houston's Climate",
    excerpt: "Houston's heat and humidity take a toll on your pet's coat. Learn how routine grooming protects your dog's skin, reduces shedding, and keeps them comfortable year-round.",
    href: "/blog/the-benefits-of-routine-dog-grooming-in-houstons-climate",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/doggy-day-care-galleria-1024x1005.jpg",
    imgAlt: "Dogs playing safely in a supervised dog daycare environment at The Dog House Pet Salon in Houston",
    title: "Is Dog Daycare Worth It? Here's What Houston Pet Parents Should Know",
    excerpt: "Modern dogs need more than a quick walk around the block. Discover whether dog daycare in Houston is worth it, the real benefits it provides, and what to look for in a facility.",
    href: "/blog/is-dog-daycare-worth-it-heres-what-houston-pet-parents-should-know",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/winter-dog-grooming-houston-1024x750.jpg",
    imgAlt: "Winter dog grooming in Houston to protect coat and skin during cold weather",
    title: "Why Winter Grooming Is Essential for Your Dog's Health and Comfort",
    excerpt: "Even in Houston's mild winters, your dog's coat needs seasonal care. Here's why skipping winter grooming can lead to matting, skin issues, and discomfort — and how to prevent it.",
    href: "/blog/why-winter-grooming-is-essential-for-your-dogs-health-and-comfort",
  },
];

/* ── Styles ── */
const sectionPadding = { padding: "80px 20px" } as const;

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1: Hero Slider
      ══════════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <HeroSlider />
        <div aria-hidden="true" style={{position:"absolute",bottom:"-1px",left:0,width:"100%",lineHeight:0,zIndex:10}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{display:"block",width:"100%",height:"60px"}}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
          </svg>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2: About / Intro
      ══════════════════════════════════════════════ */}
      <section style={{ ...sectionPadding, backgroundColor: "#ffffff", position: "relative" }}>
        {/* Decorative image top-left (desktop only) */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            opacity: 0.6,
            display: "none",
          }}
          className="hidden md:block"
        >
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-5.png"
            alt="image 5"
            width={191}
            height={178}
            style={{ width: "120px", height: "auto" }}
          />
        </div>

        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left: dog images */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "flex-start" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/05/white-dog-shaking-hand.webp"
              alt="White dog shaking hand"
              width={465}
              height={566}
              style={{ width: "clamp(200px, 32vw, 465px)", height: "auto", borderRadius: "8px" }}
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 320px, 465px"
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/German-Shephard.jpg"
              alt="German Shephard"
              width={220}
              height={558}
              style={{ width: "clamp(100px, 15vw, 220px)", height: "auto", borderRadius: "8px", marginTop: "85px" }}
              sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 220px"
            />
          </div>

          {/* Right: text */}
          <div>
            <h1
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(24px, 2.5vw, 36px)",
                color: "#1F2124",
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              Dog Grooming, Daycare, &amp; Boarding at{" "}
              <span style={{ color: "#965B83" }}>The Dog House Pet Salon</span>
            </h1>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Welcome to The Dog House Pet Salon, where we pride ourselves on providing top-tier{" "}
              <span style={{ color: "#965b83" }}>
                <Link href="/pet-grooming" style={{ color: "#965b83" }}>dog grooming services</Link>,{" "}
                <Link href="/dog-day-care" style={{ color: "#965b83" }}>daycare</Link>
              </span>
              , and{" "}
              <Link href="/houston-pet-boarding" style={{ color: "#965b83" }}>dog boarding</Link> to the
              residents of{" "}
              <Link href="/locations/memorial-park-location" style={{ color: "#965b83" }}>Houston, TX</Link>,
              including{" "}
              <span style={{ color: "#965b83" }}>
                <Link href="/locations/pearland-location" style={{ color: "#965b83" }}>Pearland</Link>,{" "}
                <Link href="/locations/galleria-uptown-park-location" style={{ color: "#965b83" }}>The Galleria</Link>,
              </span>{" "}
              Uptown, and surrounding communities. As pet groomers with a passion for dogs of all breeds, we
              offer a comfortable environment for your pet, ensuring they feel pampered and loved while in our
              care.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
              }}
            >
              Our services are not limited to dog grooming. We strive to meet the diverse needs of our
              clients. Our{" "}
              <Link href="/grooming-school" style={{ color: "#965b83" }}>dog grooming school</Link> trains
              our staff to deliver exceptional services, ensuring every pet receives the individual attention
              they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3: Services (id="services")
      ══════════════════════════════════════════════ */}
      <section
        id="services"
        style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.href}
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 30px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "6px 6px 9px rgba(0,0,0,.1)",
              }}
            >
              <Link href={svc.href} style={{ display: "block", marginBottom: "16px" }}>
                <Image
                  src={svc.imgSrc}
                  alt={svc.imgAlt}
                  width={250}
                  height={250}
                  style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%" }}
                />
              </Link>
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#1F2124",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                {svc.title}
              </h2>
              <p
                style={{
                  fontFamily: '"Outfit", Sans-serif',
                  fontSize: "16px",
                  color: "#54595F",
                  marginBottom: "24px",
                  lineHeight: 1.6,
                }}
              >
                {svc.description}
              </p>
              <Link
                href={svc.href}
                style={{
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", Sans-serif',
                  fontWeight: 600,
                  fontSize: "16px",
                  display: "inline-block",
                  transition: "background-color 0.3s",
                  textDecoration: "none",
                }}
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4: Registration & Pricing
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#965B83",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(28px, 3vw, 42px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Registration &amp; Pricing
          </h2>
          <h3
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "clamp(18px, 2vw, 24px)",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "50px",
              fontWeight: 400,
            }}
          >
            Registration with us is as easy as 1-2-3
          </h3>

          {/* 3 registration step cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
              marginBottom: "50px",
            }}
          >
            {registrationSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.15)",
                }}
              >
                <Image
                  src={step.imgSrc}
                  alt={step.imgAlt}
                  width={160}
                  height={152}
                  style={{ width: "160px", height: "auto", marginBottom: "20px" }}
                  sizes="160px"
                />
                <h2
                  style={{
                    fontFamily: '"Bowlby One SC", Sans-serif',
                    fontSize: "clamp(18px, 1.8vw, 24px)",
                    fontWeight: 400,
                    color: "#1F2124",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.heading}
                </h2>
                <p
                  style={{
                    fontFamily: '"Outfit", Sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.7,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative dog image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: "0",
                pointerEvents: "none",
              }}
            >
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/brown-dog-e1744741217620.png"
                alt=""
                width={385}
                height={294}
                style={{ width: "clamp(100px, 20vw, 250px)", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "250px", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "#1F2124",
                  marginBottom: "16px",
                }}
              >
                🐾 Ready to Join the Pack?{" "}
                <span style={{ color: "#965B83" }}>Let&apos;s Get Started!</span>
              </h2>
              <Link
                href="/appointment-request"
                style={{
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", Sans-serif',
                  fontWeight: 600,
                  fontSize: "18px",
                  display: "inline-block",
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                }}
              >
                Book Appointment Now!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5: Donna's Love Pet Rescue
      ══════════════════════════════════════════════ */}
      <section style={{ ...sectionPadding, backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-8.png"
              alt="Donna's Love Pet Rescue"
              width={120}
              height={144}
              style={{ width: "120px", height: "auto", marginBottom: "20px" }}
              sizes="120px"
            />
            <h3
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "20px",
                fontWeight: 400,
                color: "#965B83",
                marginBottom: "12px",
              }}
            >
              Donna&apos;s Love Pet Rescue
            </h3>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(22px, 2.5vw, 32px)",
                color: "#1F2124",
                marginBottom: "24px",
                lineHeight: 1.3,
              }}
            >
              GIVE THEM THE{" "}
              <span style={{ color: "#965B83" }}>LOVING HOME</span> THEY DESERVE
            </h2>
            <a
              href="https://dlpr.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", Sans-serif',
                fontWeight: 600,
                fontSize: "18px",
                display: "inline-block",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
            >
              Adopt or foster a rescue today!
            </a>
          </div>

          {/* Right: image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/loving-dog-1024x855.png"
              alt="loving dog"
              width={500}
              height={417}
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6: MPC / Lost Pets (Reuniting Families)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#F5F5F5",
          padding: "80px 20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Family + Phone Mockups Image */}
          <div style={{ width: "100%" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-pet-happy-owner-1024x1014.png"
              alt="Family with dog and phone mockups showing My Pet Credentials app"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
              priority
            />
          </div>

          {/* Right Column: Text Content with Curved White Overlay Effect */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "60px 50px",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(28px, 3vw, 40px)",
                color: "#1F2124",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Reuniting Lost Pets With Their Family Is Our Specialty
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                marginBottom: "36px",
                lineHeight: 1.7,
              }}
            >
              The only global and secure platform ensuring your pet&apos;s well-being—try out a new era in
              pet care!
            </p>
            <a
              href="https://www.mypetcredentials.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#965B83",
                color: "#FFFFFF",
                padding: "16px 40px",
                borderRadius: "8px",
                fontFamily: '"Outfit", Sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                display: "inline-block",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              className="mpc-cta-button"
            >
              Protect Your Pet!
            </a>
          </div>
        </div>

        {/* Responsive: Stack on Mobile */}
        <style>{`
          .mpc-cta-button:hover {
            background-color: #7A4A68 !important;
            transform: translateY(-2px) !important;
          }
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7: Client of the Month
      ══════════════════════════════════════════════ */}
      <section style={{ ...sectionPadding, backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left: heading */}
          <div>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(26px, 2.5vw, 36px)",
                color: "#1F2124",
                marginBottom: "12px",
              }}
            >
              Client of the Month
            </h2>
            <h3
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "20px",
                fontWeight: 600,
                color: "#965B83",
                marginBottom: "16px",
              }}
            >
              Avery &amp; Dustin
            </h3>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
              }}
            >
              Take a look at some of our happiest clients and their fresh new looks!
            </p>
          </div>

          {/* Middle: image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-owner.png"
              alt="dog owner"
              width={800}
              height={778}
              style={{ width: "100%", maxWidth: "380px", height: "auto" }}
            />
          </div>

          {/* Right: description + quote */}
          <div>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Each month, we&apos;re thrilled to spotlight a few of our most fabulous clients who brighten
              our salon with their charm and personalities. From playful puppies to wise senior companions,
              every visit from these beloved pets brings joy to our team and warmth to our hearts. Our
              furry friends&apos; unique styles and spirits inspire us every day, and we love pampering them
              with the care they deserve.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &lsquo;Amazing experience for my dog&apos;s groom! This was our first time trying a new groomer since
              moving and they did not disappoint. The whole staff is friendly and thoughtful and most
              importantly my goldendoodle&apos;s haircut is perfect! Highly recommend and very fair
              pricing&rsquo; — Dustin
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 8: Reviews Carousel
      ══════════════════════════════════════════════ */}
      <ReviewsCarousel />

      {/* ══════════════════════════════════════════════
          SECTION 9: Social Proof — "Is Here For You"
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(24px, 2.5vw, 36px)",
                color: "#1F2124",
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              The Dog House Pet Salon{" "}
              <span style={{ color: "#965B83" }}>is here for you</span>
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              We take pride in being a comprehensive pet care facility right near you
              and the Houston surrounding areas, dedicated to upholding the highest
              standards in the pet care industry. We understand that there&apos;s no
              place like home for your beloved pets, especially if you&apos;ve never
              boarded them before. That&apos;s why we strive to make you and your pet
              feel as comfortable as if they were at home.
            </p>
            <h3
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "18px",
                color: "#1F2124",
                marginBottom: "16px",
              }}
            >
              Here are just a few of the things that set us apart:
            </h3>
            <ul
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 2.2,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "We maintain the highest standards in the pet care industry",
                "We offer a variety of services to meet your needs and budget.",
                "We have a team of experienced and compassionate pet lovers.",
                "We provide a safe and loving environment for your pet.",
                "We are committed to exceeding your expectations.",
              ].map((item) => (
                <li key={item}>
                  <span style={{ color: "#965B83", marginRight: "8px" }}>✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/loving-dog-1024x855.png"
              alt="The Dog House Pet Salon – caring for your pets"
              width={500}
              height={417}
              style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "12px" }}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 9b: Get In Touch CTA
      ══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(28px, 3vw, 42px)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Get In Touch With Us
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "18px",
              color: "#FFFFFF",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Are you ready to give your pet a day at The Dog House Pet Salon? We&apos;re
            prepared to welcome them. Our availability spans Uptown Houston, TX, The
            Galleria, Memorial, Pearland, and nearby areas. Reach out to us today to
            schedule an appointment and let us show you why we&apos;re the preferred
            choice for dog grooming, daycare, and boarding in the region.
          </p>
          <Link
            href="/contact-us"
            style={{
              backgroundColor: "#ffffff",
              color: "#965B83",
              padding: "15px 40px",
              borderRadius: "50px",
              fontFamily: '"Outfit", Sans-serif',
              fontWeight: 600,
              fontSize: "18px",
              display: "inline-block",
              textDecoration: "none",
              marginRight: "16px",
              marginBottom: "12px",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/appointment-request"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff",
              padding: "15px 40px",
              borderRadius: "50px",
              fontFamily: '"Outfit", Sans-serif',
              fontWeight: 600,
              fontSize: "18px",
              display: "inline-block",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 10: Blog
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#33373D",
          padding: "80px 20px 100px",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(26px, 3vw, 40px)",
              color: "#ffffff",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Blogs
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.href}
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  borderRadius: "50px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  border: "1px solid #965B83",
                }}
              >
                <Image
                  src={post.imgSrc}
                  alt={post.imgAlt}
                  width={250}
                  height={250}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />
                <h2
                  style={{
                    fontFamily: '"Bowlby One SC", Sans-serif',
                    fontSize: "clamp(20px, 1.8vw, 28px)",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: "#1F2124",
                    marginBottom: "16px",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "18px",
                    lineHeight: 1.5,
                    color: "#1F2124",
                    marginBottom: "20px",
                  }}
                >
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#965B83",
                    color: "#fff",
                    padding: "15px 30px",
                    borderRadius: "50px",
                    fontFamily: '"Outfit", Sans-serif',
                    fontWeight: 600,
                    fontSize: "18px",
                    display: "inline-block",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                    marginTop: "auto",
                  }}
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More <span className="sr-only">: {post.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

