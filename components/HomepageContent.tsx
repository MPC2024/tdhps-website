"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import StoreLocations from "@/components/StoreLocations";

/* ── Data ── */
const services = [
  {
    titleKey: "service_pet_grooming",
    descKey: "service_grooming_desc",
    href: "/pet-grooming",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-grooming.jpg",
    imgAlt: "pet grooming",
  },
  {
    titleKey: "service_pet_boarding",
    descKey: "service_boarding_desc",
    href: "/houston-pet-boarding",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-boarding.jpg",
    imgAlt: "pet boarding",
  },
  {
    titleKey: "service_daycare",
    descKey: "service_daycare_desc",
    href: "/dog-day-care",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    imgAlt: "doggie daycare",
  },
];

const registrationSteps = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-evaluation.png",
    imgAlt: "pet evaluation",
    titleKey: "step1_title",
    descKey: "step1_desc",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-vaccination.png",
    imgAlt: "dog vaccination",
    titleKey: "step2_title",
    descKey: "step2_desc",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-heaven.png",
    imgAlt: "dogs heaven",
    titleKey: "step3_title",
    descKey: "step3_desc",
  },
];

const amenities = [
  { titleKey: "quality_assurance", descKey: "quality_assurance_desc" },
  { titleKey: "large_play_area", descKey: "large_play_area_desc" },
  { titleKey: "trained_staff", descKey: "trained_staff_desc" },
];

const thingsSetUsApart = [
  "highest_standards",
  "variety_of_services",
  "experienced_team",
  "safe_loving_env",
  "exceed_expectations",
];

const blogPosts = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg",
    imgAlt: "Shih Tzu freshly groomed at The Dog House Pet Salon in Pearland Texas professional dog grooming",
    title: "The Benefits of Routine Dog Grooming in Houston's Climate",
    titleEs: "Los Beneficios del Cuidado Regular de Mascotas en el Clima de Houston",
    excerpt: "Houston's heat and humidity take a toll on your pet's coat. Learn how routine grooming protects your dog's skin, reduces shedding, and keeps them comfortable year-round.",
    excerptEs: "El calor y la humedad de Houston afectan el pelaje de tu mascota. Aprende cómo el cuidado regular protege la piel de tu perro, reduce la muda y los mantiene cómodos todo el año.",
    href: "https://www.thedoghouseps.com/blog/the-benefits-of-routine-dog-grooming-in-houstons-climate/",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/doggy-day-care-galleria-1024x1005.jpg",
    imgAlt: "Dogs playing safely in a supervised dog daycare environment at The Dog House Pet Salon in Houston",
    title: "Is Dog Daycare Worth It? Here's What Houston Pet Parents Should Know",
    titleEs: "¿Vale la Pena la Guardería para Perros? Lo Que los Padres de Mascotas en Houston Deben Saber",
    excerpt: "Modern dogs need more than a quick walk around the block. Discover whether dog daycare in Houston is worth it, the real benefits it provides, and what to look for in a facility.",
    excerptEs: "Los perros modernos necesitan más que un paseo rápido. Descubre si la guardería para perros en Houston vale la pena, los beneficios reales que ofrece y qué buscar en una instalación.",
    href: "https://www.thedoghouseps.com/blog/is-dog-daycare-worth-it-heres-what-houston-pet-parents-should-know/",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/winter-dog-grooming-houston-1024x750.jpg",
    imgAlt: "Winter dog grooming in Houston to protect coat and skin during cold weather",
    title: "Why Winter Grooming Is Essential for Your Dog's Health and Comfort",
    titleEs: "Por Qué el Cuidado de Invierno es Esencial para la Salud y Comodidad de tu Perro",
    excerpt: "Even in Houston's mild winters, your dog's coat needs seasonal care. Here's why skipping winter grooming can lead to matting, skin issues, and discomfort — and how to prevent it.",
    excerptEs: "Incluso en los inviernos suaves de Houston, el pelaje de tu perro necesita cuidado estacional. Descubre por qué saltarse el cuidado de invierno puede causar enredos, problemas de piel y malestar.",
    href: "https://www.thedoghouseps.com/blog/why-winter-grooming-is-essential-for-your-dogs-health-and-comfort/",
  },
];

/* ── Styles ── */
const sectionPadding = { padding: "clamp(40px, 10vw, 80px) 20px" } as const;

export default function HomepageContent() {
  const { t, language } = useLanguage();
  const [cardsExpanded, setCardsExpanded] = useState(false);
  const mpcSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = mpcSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 2: About / Intro
      ══════════════════════════════════════════════ */}
      <section style={{ ...sectionPadding, backgroundColor: "#ffffff", position: "relative", overflow: "hidden" }}>
        {/* Decorative pawprints top-right */}
        <div style={{ position: "absolute", top: "20px", right: "40px", opacity: 0.12, pointerEvents: "none" }} className="hidden md:block">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            {/* First pawprint - top right */}
            <g transform="translate(50, 0) rotate(25)">
              <ellipse cx="15" cy="8" rx="8" ry="10" fill="#965B83"/>
              <ellipse cx="35" cy="4" rx="7" ry="9" fill="#965B83"/>
              <ellipse cx="50" cy="14" rx="6" ry="8" fill="#965B83"/>
              <ellipse cx="4" cy="18" rx="6" ry="8" fill="#965B83"/>
              <ellipse cx="27" cy="30" rx="16" ry="13" fill="#965B83"/>
            </g>
            {/* Second pawprint - below left */}
            <g transform="translate(0, 80) rotate(15)">
              <ellipse cx="15" cy="8" rx="8" ry="10" fill="#965B83"/>
              <ellipse cx="35" cy="4" rx="7" ry="9" fill="#965B83"/>
              <ellipse cx="50" cy="14" rx="6" ry="8" fill="#965B83"/>
              <ellipse cx="4" cy="18" rx="6" ry="8" fill="#965B83"/>
              <ellipse cx="27" cy="30" rx="16" ry="13" fill="#965B83"/>
            </g>
          </svg>
        </div>
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
            loading="lazy"
            sizes="120px"
          />
        </div>

        <div
          className="section-2-grid"
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
              sizes="(max-width: 480px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 320px, 465px"
              quality={80}
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/German-Shephard.jpg"
              alt="German Shephard"
              width={220}
              height={558}
              style={{ width: "clamp(100px, 15vw, 220px)", height: "auto", borderRadius: "8px", marginTop: "85px" }}
              sizes="(max-width: 480px) 70px, (max-width: 768px) 100px, (max-width: 1024px) 150px, 220px"
              quality={80}
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
              {t("dog_grooming_daycare_boarding" as any)}{" "}
              <span style={{ color: "#965B83" }}>The Dog House Pet Salon</span>
            </h1>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "clamp(14px, 3.5vw, 16px)",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              {t("welcome_to_dog_house" as any)}
            </p>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "clamp(14px, 3.5vw, 16px)",
                color: "#54595F",
                lineHeight: 1.7,
              }}
            >
              {t("our_services_not_limited" as any)}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3: Services (id="services")
      ══════════════════════════════════════════════ */}
      <section
        id="services"
        style={{
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255, 255, 255, 0.45)" }} />
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.href}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(6px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 30px",
                textAlign: "center",
                borderRadius: "12px",
                border: "2px solid rgba(150, 91, 131, 0.3)",
                boxShadow: "none",
              }}
            >
              <Link href={svc.href} style={{ display: "block", marginBottom: "16px" }}>
                <Image
                  src={svc.imgSrc}
                  alt={svc.imgAlt}
                  width={250}
                  height={250}
                  style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%" }}
                  loading="lazy"
                  sizes="(max-width: 480px) 180px, (max-width: 768px) 200px, 250px"
                  quality={80}
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
                {t(svc.titleKey as any)}
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
                {t(svc.descKey as any)}
              </p>
              <Link
                href={svc.href}
                style={{
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", Sans-serif',
                  fontWeight: 600,
                  fontSize: "16px",
                  display: "inline-block",
                  transition: "background-color 0.3s",
                  textDecoration: "none",
                }}
              >
                {t("register_now" as any)}
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
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(150, 91, 131, 0.85)" }} />
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
            {t("registration_pricing" as any)}
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
            {t("registration_easy_123" as any)}
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
                  width={210}
                  height={200}
                  style={{ width: "auto", height: "200px", marginBottom: "20px" }}
                  sizes="(max-width: 480px) 160px, (max-width: 768px) 180px, 210px"
                  loading="lazy"
                  quality={80}
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
                  {t(step.titleKey as any)}
                </h2>
                <div style={{ fontFamily: '"Outfit", Sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
                  {(i === 1 || i === 2) && !cardsExpanded ? (
                    <p style={{ margin: 0 }}>
                      {(t(step.descKey as any) as string).slice(0, 200)}...{" "}
                      <button
                        onClick={() => setCardsExpanded(true)}
                        style={{ background: "none", border: "none", color: "#965B83", fontWeight: 600, cursor: "pointer", fontFamily: '"Outfit", Sans-serif', fontSize: "15px", padding: 0 }}
                      >
                        read more
                      </button>
                    </p>
                  ) : (i === 1 || i === 2) && cardsExpanded ? (
                    <p style={{ margin: 0 }}>
                      {t(step.descKey as any)}{" "}
                      <button
                        onClick={() => setCardsExpanded(false)}
                        style={{ background: "none", border: "none", color: "#965B83", fontWeight: 600, cursor: "pointer", fontFamily: '"Outfit", Sans-serif', fontSize: "15px", padding: 0 }}
                      >
                        show less
                      </button>
                    </p>
                  ) : (
                    <p style={{ margin: 0 }}>{t(step.descKey as any)}</p>
                  )}
                </div>
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
                top: "-20px",
                bottom: 0,
                right: "-20px",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
              }}
              className="cta-brown-dog"
            >
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/brown-dog-e1744741217620.png"
                alt=""
                width={385}
                height={294}
                style={{ width: "clamp(180px, 25vw, 385px)", height: "auto", display: "block", marginBottom: "50px" }}
                sizes="(max-width: 480px) 150px, (max-width: 768px) 180px, 385px"
                loading="lazy"
                quality={80}
              />
            </div>
            <style>{`
              @media (max-width: 768px) {
                .cta-brown-dog {
                  display: none !important;
                }
              }
            `}</style>
            <div style={{ flex: 1, minWidth: "250px", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "#1F2124",
                  marginBottom: "16px",
                }}
              >
                🐾 {t("ready_to_join" as any)}{" "}
                <span style={{ color: "#965B83" }}>{t("lets_get_started" as any)}</span>
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
                {t("book_appointment_now" as any)}
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
          className="section-5-grid"
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-8.png"
              alt="Donna&apos;s Love Pet Rescue"
              width={64}
              height={77}
              style={{ width: "64px", height: "auto", marginBottom: "20px" }}
              sizes="64px"
              quality={75}
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
              {t("donnas_love_pet_rescue" as any)}
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
              {t("give_them_loving_home" as any)}
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
              {t("adopt_or_foster" as any)}
            </a>
          </div>

          {/* Right: Mosaic pet photo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "12px", maxWidth: "500px", justifySelf: "center" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", gridRow: "1 / 3" }}>
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=500&fit=crop"
                alt="Rescue dog looking for a home"
                width={300}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="(max-width: 768px) 40vw, 250px"
                loading="lazy"
                quality={80}
              />
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"
                alt="Dogs playing together at rescue"
                width={250}
                height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="(max-width: 768px) 40vw, 250px"
                loading="lazy"
                quality={80}
              />
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"
                alt="Happy rescue dog with family"
                width={250}
                height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="(max-width: 768px) 40vw, 250px"
                loading="lazy"
                quality={80}
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .section-5-grid { grid-template-columns: 1fr !important; padding: 0 20px !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6: MPC / Lost Pets (Reuniting Families)
      ══════════════════════════════════════════════ */}
      <section
        ref={mpcSectionRef}
        className="mpc-reuniting-section"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
        }}
      >
        {/* Curved top border */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-1px", left: 0, width: "100%", lineHeight: 0, zIndex: 5, transform: "rotate(180deg)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
          </svg>
        </div>

        {/* Background image with grow animation on scroll */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/vxcvxcv-1.jpg"
            alt="Family with dog"
            fill
            style={{ objectFit: "cover", objectPosition: "left center" }}
            priority={false}
            quality={75}
            sizes="100vw"
          />
        </div>

        {/* Content area */}
        <div
          className="mpc-content-area"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "1520px",
            margin: "0 auto",
            width: "100%",
            padding: "80px 20px 60px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Right-aligned: Text content in dog tag shape */}
          <div style={{ flex: 1, marginLeft: "auto", maxWidth: "500px", textAlign: "center", position: "relative" }}>
            {/* Dog tag hook/ring */}
            <div style={{ position: "absolute", top: "-30px", right: "80px", zIndex: 2 }}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="22" stroke="#ffffff" strokeWidth="5" fill="none" opacity="0.6" />
                <circle cx="30" cy="30" r="10" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.4" />
              </svg>
            </div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.92)", borderRadius: "50%", padding: "80px 50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", aspectRatio: "1", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", border: "3px solid rgba(150,91,131,0.15)" }}>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(26px, 3vw, 40px)",
                color: "#1F2124",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              {t("reuniting_lost_pets" as any)}
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "16px",
                color: "#54595F",
                marginBottom: "30px",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              {t("mpc_description" as any)}
            </p>
            <a
              href="https://www.mypetcredentials.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#965B83",
                color: "#FFFFFF",
                padding: "15px 30px",
                borderRadius: "50px",
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
              {t("protect_your_pet" as any)}
            </a>
          </div>
          </div>
        </div>

        {/* Left: Lost pet image with grow-on-scroll animation */}
        <div className="mpc-foreground-img" style={{ position: "absolute", bottom: 0, left: 0, top: "60px", zIndex: 1, pointerEvents: "none", width: "clamp(250px, 35vw, 500px)", transition: "transform 0.8s ease-out, width 0.8s ease-out", transformOrigin: "left bottom" }}>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/lost-pet.png"
            alt="Lost pet"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%", display: "block", objectFit: "contain", objectPosition: "left bottom" }}
            sizes="(max-width: 480px) 300px, (max-width: 768px) 400px, 700px"
            quality={95}
          />
        </div>

        <style>{`
          .mpc-reuniting-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(90deg, rgba(255,255,255,0.85) 50%, #965B83E6 100%);
            z-index: 1;
            pointer-events: none;
          }
          .mpc-cta-button:hover {
            background-color: #7A4A68 !important;
            transform: translateY(-2px) !important;
          }
          .mpc-foreground-img {
            transform: scale(0.85);
          }
          .mpc-reuniting-section.in-view .mpc-foreground-img {
            transform: scale(1.15);
            width: clamp(350px, 45vw, 600px) !important;
          }
          @media (max-width: 768px) {
            .mpc-reuniting-section .mpc-lost-pet-img { width: 200px !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7: Client of the Month
      ══════════════════════════════════════════════ */}
      <section style={{ ...sectionPadding, backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 40px" }}>
          {/* 3-column layout: heading | image | description */}
          <div
            className="section-7-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "40px",
              alignItems: "center",
              marginBottom: "40px",
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
                {t("client_of_the_month" as any)}
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
                {t("avery_dustin" as any)}
              </h3>
              <p
                style={{
                  fontFamily: '"Outfit", Sans-serif',
                  fontSize: "16px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {t("client_spotlight_intro" as any)}
              </p>
              <p
                style={{
                  fontFamily: '"Outfit", Sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                {t("client_quote" as any)}
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
                loading="lazy"
                sizes="(max-width: 480px) 85vw, (max-width: 768px) 90vw, (max-width: 1024px) 380px, 380px"
                quality={80}
              />
            </div>

            {/* Right: description */}
            <div>
              <p
                style={{
                  fontFamily: '"Outfit", Sans-serif',
                  fontSize: "16px",
                  color: "#54595F",
                  lineHeight: 1.7,
                }}
              >
                {t("client_spotlight_text" as any)}
              </p>
            </div>
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
          className="section-9-grid"
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            padding: "0 40px",
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
              {t("is_here_for_you" as any)}
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
              {t("comprehensive_facility_desc" as any)}
            </p>
            <h3
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "18px",
                color: "#1F2124",
                marginBottom: "16px",
              }}
            >
              {t("things_that_set_us_apart" as any)}
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
              {thingsSetUsApart.map((key) => (
                <li key={key}>
                  <span style={{ color: "#965B83", marginRight: "8px" }}>✔</span>
                  {t(key as any)}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-pet-happy-owner-1024x1014.png"
              alt="The Dog House Pet Salon – happy pet happy owner"
              width={500}
              height={507}
              style={{ width: "100%", maxWidth: "475px", height: "auto", borderRadius: "12px" }}
              sizes="(max-width: 480px) 90vw, (max-width: 768px) 95vw, 500px"
              quality={80}
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
            {t("get_in_touch" as any)}
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
            {t("get_in_touch_desc" as any)}
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
            {t("contact_us" as any)}
          </Link>
          <Link
            href="/appointment-request"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff",
              padding: "15px 30px",
              borderRadius: "50px",
              fontFamily: '"Outfit", Sans-serif',
              fontWeight: 600,
              fontSize: "18px",
              display: "inline-block",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            {t("book_appointment" as any)}
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 10: Blog
      ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "80px 20px 180px",
          overflow: "hidden",
        }}
      >
        {/* White Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#ffffff",
            opacity: 0.9,
            zIndex: 0,
          }}
        />
        {/* Curved Bottom Border */}
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 2,
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
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h3
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(26px, 3vw, 40px)",
              color: "#000000",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            {t("blogs" as any)}
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
                  loading="lazy"
                  sizes="(max-width: 480px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 250px"
                  quality={80}
                />
                <h3
                  className="blog-card-title"
                  style={{
                    fontFamily: '"Bowlby One SC", Sans-serif',
                    fontSize: "clamp(18px, 1.8vw, 24px)",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: "#1F2124",
                    marginBottom: "16px",
                  }}
                >
                  {language === "es" && post.titleEs ? post.titleEs : post.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "#54595F",
                    marginBottom: "20px",
                  }}
                >
                  {language === "es" && post.excerptEs ? post.excerptEs : post.excerpt}
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
                    fontSize: "16px",
                    display: "inline-block",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                    marginTop: "auto",
                  }}
                  aria-label={`Read more about ${post.title}`}
                >
                  {t("read_more" as any)} <span className="sr-only">: {post.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION: Store Locations with Google Maps
      ══════════════════════════════════════════════ */}
      <StoreLocations />

      <style>{`
        @media (max-width: 768px) {
          .section-2-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .section-5-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .mpc-content-area {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 60px 20px 40px !important;
          }

          .mpc-content-area > div {
            margin-left: 0 !important;
            max-width: 100% !important;
          }

          .section-7-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .section-9-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </>
  );
}
