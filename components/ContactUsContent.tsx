"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: [
      "Monday – Friday: 7:00 AM – 7:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM",
    ],
    phone: "(832) 930-4060",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
    appointmentLink: "/appointment-request-form_location_richmond",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: [
      "Monday – Friday: 7:00 AM – 7:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM",
    ],
    phone: "(832) 930-9533",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
    appointmentLink: "/appointment-request-memorial",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: [
      "Monday – Friday: 7:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: Closed",
    ],
    phone: "(281) 971-5071",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
    appointmentLink: "/appointment-request-pearland",
  },
];

const whyUsKeys = [
  { labelKey: "contact_comprehensive_care", descKey: "contact_comprehensive_desc" },
  { labelKey: "contact_experienced_staff", descKey: "contact_experienced_desc" },
  { labelKey: "contact_competitive_pricing", descKey: "contact_competitive_desc" },
  { labelKey: "contact_safety_standards", descKey: "contact_safety_desc" },
  { labelKey: "contact_convenient_locations", descKey: "contact_convenient_desc" },
];

export default function ContactUsContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Hero Banner (pet-grooming style) ── */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-and-Cat.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#ffffff",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        {/* Curved SVG bottom */}
        <div
          aria-hidden="true"
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
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px, 5vw, 60px)",
              color: "#1F2124",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            {t("contact_us")} <span style={{ color: "#E0598A" }}>Us</span>
          </h1>
        </div>
      </section>

      {/* ── Welcome Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px,4vw,52px)",
              color: "#1F2124",
              marginBottom: "32px",
              lineHeight: 1.1,
            }}
          >
            Welcome to The Dog House Pet Salon!
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "#54595F",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            With over 30+ years of experience, we are Houston&apos;s premier{" "}
            <Link
              href="/pet-grooming/"
              style={{ color: "#E0598A", textDecoration: "none", fontWeight: 600 }}
            >
              pet grooming
            </Link>
            ,{" "}
            <Link
              href="/dog-day-care/"
              style={{ color: "#E0598A", textDecoration: "none", fontWeight: 600 }}
            >
              doggie daycare
            </Link>
            , and{" "}
            <Link
              href="/pet-boarding/"
              style={{ color: "#E0598A", textDecoration: "none", fontWeight: 600 }}
            >
              pet boarding
            </Link>{" "}
            service provider.
          </p>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "#54595F",
              lineHeight: 1.8,
            }}
          >
            Our dedicated{" "}
            <Link
              href="/our-staff/"
              style={{ color: "#E0598A", textDecoration: "none", fontWeight: 600 }}
            >
              team
            </Link>{" "}
            is here to offer your pets the love and care they deserve. Have
            questions or need assistance? Contact us, We&apos;re just a call or
            email away!
          </p>
        </div>
      </section>

      {/* ── Vaccination Requirements ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "850px 1fr", gap: "60px", alignItems: "center" }}>
            {/* Left: Vaccination card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "36px",
              }}
            >
            <h3
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(26px,3vw,40px)",
                color: "#1F2124",
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              {t("contact_vaccination_safety")}
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
                {t("contact_vax_boarding")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[t("bordetella"), t("distemper"), t("rabies"), t("influenza_recommended")].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6 }}>
                    <i className="fa-solid fa-check" style={{ color: "#965B83", fontSize: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
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
                {t("contact_vax_grooming")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[t("bordetella")].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6 }}>
                    <i className="fa-solid fa-check" style={{ color: "#965B83", fontSize: "14px", marginTop: "3px", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>

            {/* Right: Dog vaccination image */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-22.png"
                alt="Dog vaccination at The Dog House Pet Salon"
                width={500}
                height={500}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  height: "auto",
                  borderRadius: "16px",
                  objectFit: "cover",
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations (pet-grooming style) ── */}
      <section
        style={{
          backgroundImage:
            "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F8F8F8",
          padding: "80px 20px 130px",
          position: "relative",
        }}
      >
        {/* White overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FFF",
            opacity: 0.7,
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#000",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Questions?
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "#54595F",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            You Can Find Us At These Locations
          </p>

          {/* 2-Column Layout: Large card left + 2 stacked cards right */}
          <div
            className="locations-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
              alignItems: "stretch",
            }}
          >
            {/* LEFT: Large Galleria card */}
            <div
              className="location-card"
              style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
                minHeight: "100%",
              }}
            >
              <div
                style={{
                  flex: "0 0 200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={locations[0].img}
                  alt={locations[0].address}
                  width={200}
                  height={200}
                  quality={85}
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 200px"
                  style={{
                    width: "clamp(120px, 30vw, 200px)",
                    height: "clamp(120px, 30vw, 200px)",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ fontSize: "18px", color: "#fff" }}
                  />
                  <h3
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {locations[0].address}
                  </h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p
                      key={h}
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "16px",
                        color: "#fff",
                        margin: "4px 0",
                        lineHeight: 1.6,
                        letterSpacing: "0.3px",
                      }}
                    >
                      {h}
                    </p>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "18px",
                    color: "#fff",
                    marginBottom: "12px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                >
                  {locations[0].option}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <i
                    className="fa-solid fa-phone"
                    style={{ fontSize: "16px", color: "#fff" }}
                  />
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    {locations[0].phone}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <i
                    className="fa-solid fa-envelope"
                    style={{ fontSize: "16px", color: "#fff" }}
                  />
                  <a
                    href={`mailto:${locations[0].email}`}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {locations[0].email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked small cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {[locations[1], locations[2]].map((loc) => (
                <div
                  key={loc.address}
                  className="location-card"
                  style={{
                    backgroundColor: "#965B83",
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "24px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 150px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={loc.img}
                      alt={loc.address}
                      width={150}
                      height={150}
                      quality={85}
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 150px"
                      style={{
                        width: "clamp(100px, 25vw, 150px)",
                        height: "clamp(100px, 25vw, 150px)",
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ fontSize: "16px", color: "#fff" }}
                      />
                      <h3
                        style={{
                          fontFamily: '"Outfit", sans-serif',
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {loc.address}
                      </h3>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      {loc.hours.map((h) => (
                        <p
                          key={h}
                          style={{
                            fontFamily: '"Outfit", sans-serif',
                            fontSize: "11px",
                            color: "#fff",
                            margin: "2px 0",
                            lineHeight: 1.3,
                          }}
                        >
                          {h}
                        </p>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: '"Bowlby One SC", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        marginBottom: "8px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {loc.option}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "4px",
                      }}
                    >
                      <i
                        className="fa-solid fa-phone"
                        style={{ fontSize: "12px", color: "#fff" }}
                      />
                      <p
                        style={{
                          fontFamily: '"Outfit", sans-serif',
                          fontSize: "11px",
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {loc.phone}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i
                        className="fa-solid fa-envelope"
                        style={{ fontSize: "12px", color: "#fff" }}
                      />
                      <a
                        href={`mailto:${loc.email}`}
                        style={{
                          fontFamily: '"Outfit", sans-serif',
                          fontSize: "11px",
                          color: "#fff",
                          textDecoration: "none",
                        }}
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            {t("why_choose_us")}
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
            {t("contact_at_dog_house")}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "24px",
            }}
          >
            {whyUsKeys.map((item) => (
              <div
                key={item.labelKey}
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
                  {t(item.labelKey as any)}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {t(item.descKey as any)}
                </p>
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
          marginBottom: "110px",
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
            {t("contact_ready_pamper")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "17px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            {t("contact_schedule_online")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Link
              href="/appointment-request-form_location_richmond"
              className="btn-secondary"
            >
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
