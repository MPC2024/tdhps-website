"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import StoreLocations from "@/components/StoreLocations";

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: ["Monday - Friday: 7:00 AM - 7:00 PM", "Saturday: 8:00 AM - 6:00 PM", "Sunday: 8:00 AM - 9:00 AM, 4:00 PM - 5:00 PM"],
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
    appointmentLink: "/appointment-request-form_location_richmond",
    appointmentLabel: "Galleria Location",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday - Friday: 7:00 AM - 7:00 PM", "Saturday: 8:00 AM - 6:00 PM", "Sunday: 8:00 AM - 9:00 AM, 4:00 PM - 5:00 PM"],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
    appointmentLink: "/appointment-request-memorial",
    appointmentLabel: "Memorial Park Location",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday - Friday: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 6:00 PM", "Sunday: Closed"],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
    appointmentLink: "/appointment-request-pearland",
    appointmentLabel: "Pearland Location",
  },
];

export default function ContactUsPage() {
  const { t } = useLanguage();
  return (
    <>
      {/* ── Hero (pet-grooming style with background image) ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-and-Cat.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "160px 20px 120px",
          overflow: "hidden",
        }}
      >
        {/* white overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "60px", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            <span>{t("contact_us")}</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
            {t("contact_us_hero_text")}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">{t("book_appointment")}</Link>
          </div>
        </div>
        {/* Curved bottom border SVG */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* ── Welcome Section (centered) ── */}
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
            {t("contact_us_welcome")}
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
            {t("contact_us_experience")}
          </p>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "#54595F",
              lineHeight: 1.8,
            }}
          >
            {t("contact_us_team_desc")}
          </p>
        </div>
      </section>

      {/* ── Locations (pet-grooming style) ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F8F8F8",
        padding: "80px 20px",
        position: "relative",
      }}>
        {/* White overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFF",
          opacity: 0.7,
          zIndex: 1,
        }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(26px,3vw,40px)",
            color: "#000",
            textAlign: "center",
            marginBottom: "12px",
          }}>
            {t("contact_us_questions")}
          </h2>
          <p style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "18px",
            color: "#54595F",
            textAlign: "center",
            marginBottom: "50px",
          }}>
            {t("contact_us_locations")}
          </p>

          {/* 2-Column Layout: Large card on left, stacked cards on right */}
          <div className="locations-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "stretch",
          }}>
            {/* LEFT: Large Galleria Card */}
            <div className="location-card" style={{
              backgroundColor: "#965B83",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              alignItems: "center",
              minHeight: "100%",
            }}>
              {/* Image */}
              <div style={{
                flex: "0 0 200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src={locations[0].img}
                  alt={locations[0].address}
                  width={200}
                  height={200}
                  quality={85}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px" }} />
                  <h3 style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].address}
                  </h3>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p key={h} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#fff",
                      margin: "4px 0",
                      lineHeight: 1.6,
                      letterSpacing: "0.3px",
                    }}>
                      {h}
                    </p>
                  ))}
                </div>

                <p style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "18px",
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}>
                  {locations[0].option}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px" }} />
                  <p style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].phone}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }} />
                  <a href={`mailto:${locations[0].email}`} style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    textDecoration: "none",
                  }}>
                    {locations[0].email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards (Washington Ave + Business Center) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {/* Washington Ave Card */}
              <div className="location-card" style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[1].img}
                    alt={locations[1].address}
                    width={150}
                    height={150}
                    quality={85}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].address}
                    </h3>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    {locations[1].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[1].option}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].phone}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[1].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[1].email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Center Card */}
              <div className="location-card" style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[2].img}
                    alt={locations[2].address}
                    width={150}
                    height={150}
                    quality={85}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].address}
                    </h3>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    {locations[2].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>
                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[2].option}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].phone}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[2].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[2].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
            {t("contact_us_why_choose_us")}
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
            {t("contact_us_pride")}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { labelKey: "contact_us_comprehensive_care" as const, descKey: "contact_us_comprehensive_care_desc" as const },
              { labelKey: "contact_us_experienced_staff" as const, descKey: "contact_us_experienced_staff_desc" as const },
              { labelKey: "contact_us_competitive_pricing" as const, descKey: "contact_us_competitive_pricing_desc" as const },
              { labelKey: "contact_us_safety_standards" as const, descKey: "contact_us_safety_standards_desc" as const },
              { labelKey: "contact_us_convenient_locations" as const, descKey: "contact_us_convenient_locations_desc" as const },
            ].map((item) => (
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
                  {t(item.labelKey)}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vaccination Requirements ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-22.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        position: "relative",
      }}>
        {/* White overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFF",
          opacity: 0.2,
          zIndex: 1,
        }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
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
              {t("contact_us_vaccination_intro")}
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
                {t("vaccinations_boarding")}
              </p>
              <ol
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  paddingLeft: "20px",
                  lineHeight: 1.8,
                  listStyleType: "decimal",
                }}
              >
                <li>{t("bordetella")}</li>
                <li>{t("distemper")}</li>
                <li>{t("rabies")}</li>
                <li>
                  {t("influenza_recommended")}
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
                {t("vaccinations_grooming")}
              </p>
              <ol
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  paddingLeft: "20px",
                  lineHeight: 1.8,
                  listStyleType: "decimal",
                }}
              >
                <li>{t("bordetella")}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px 150px",
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
            {t("contact_us_ready")}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "17px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            {t("contact_us_schedule")}
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
              {t("contact_us_galleria_location")}
            </Link>
            <Link href="/appointment-request-memorial" className="btn-secondary">
              {t("contact_us_memorial_location")}
            </Link>
            <Link href="/appointment-request-pearland" className="btn-secondary">
              {t("contact_us_pearland_location")}
            </Link>
          </div>
        </div>
      </section>

      <StoreLocations />
    </>
  );
}
