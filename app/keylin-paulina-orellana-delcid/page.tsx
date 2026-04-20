import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keylin Orellana – Expert Dog Groomer in Galleria | The Dog House",
  description:
    "Meet Keylin Orellana, a dog groomer in Galleria at Dog House. With 5 years of experience & a passion for animals, she provides expert pet care",
  openGraph: {
    title: "Keylin Orellana – Expert Dog Groomer in Galleria | The Dog House",
    description:
      "Meet Keylin Orellana, a dog groomer in Galleria at Dog House. With 5 years of experience & a passion for animals, she provides expert pet care",
    url: "https://www.thedoghouseps.com/keylin-paulina-orellana-delcid/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/keylin-358.jpg.webp",
        alt: "Keylin Paulina Orellana Delcid – Master Pet Groomer",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.thedoghouseps.com/keylin-paulina-orellana-delcid/",
  },
};

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: [
      "Monday – Friday: 7:00 AM – 7:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM",
    ],
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: [
      "Monday – Friday: 7:00 AM – 7:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM",
    ],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: [
      "Monday – Friday: 7:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: Closed",
    ],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
  },
];

export default function KeylinOrellanaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming-houston-dog-house.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "14px",
              color: "#965B83",
              letterSpacing: "2px",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            Galleria / Uptown Park
          </p>
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px,4vw,60px)",
              color: "#1F2124",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Keylin Paulina <span style={{ color: "#965B83" }}>Orellana Delcid</span>
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "clamp(16px,2vw,22px)",
              color: "#54595F",
              marginBottom: "0",
            }}
          >
            Master Pet Groomer
          </p>
        </div>
        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <style>{`
          @media (max-width: 767px) {
            .groomer-container { flex-direction: column !important; }
            .groomer-left { flex: 0 0 100% !important; margin-bottom: 30px; }
            .groomer-right { flex: 0 0 100% !important; }
          }
        `}</style>
        <div
          className="groomer-container"
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          <div className="groomer-left" style={{ flex: "0 0 30%", textAlign: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/keylin-358.jpg.webp"
              alt="Keylin Paulina Orellana Delcid – Master Pet Groomer at Galleria"
              width={400}
              height={400}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "12px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
          <div className="groomer-right" style={{ flex: "0 0 70%" }}>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(22px,3vw,34px)",
                color: "#1F2124",
                marginBottom: "8px",
                marginTop: 0,
              }}
            >
              Keylin Paulina Orellana Delcid
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#965B83",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Master Pet Groomer — Galleria / Uptown Park
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Keylin Orellana is a certified pet groomer with 5 years of experience,
              originally from Honduras. Her passion for animal care led her to pursue a
              career in pet grooming after moving to the United States. Keylin values
              creating happy, healthy lifestyles for pets and educating their owners.
              Known for her positive attitude and resilience, she finds joy in helping
              animals with their grooming needs.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Keylin Orellana&apos;s journey is one of passion, determination, and a
              whole lot of puppy love. As a certified pet groomer with five years of
              experience, Keylin has become a beloved figure at The Dog House Pet
              Salon, where her skilled hands and warm heart work in perfect harmony.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Keylin&apos;s story begins in Honduras, where her love for animals first
              took root. Upon moving to the United States, she saw an opportunity to
              transform this affection into a fulfilling career. &ldquo;I wanted to
              learn more about dogs and how I could help them,&rdquo; Keylin shares,
              her eyes sparkling with the same enthusiasm that drove her to pursue pet
              grooming.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              At The Dog House Pet Salon, Keylin found not just a workplace, but a
              second home. Her approach to grooming is a unique blend of technical
              expertise and genuine care, driven by a profound belief in contributing
              to the health and happiness of every pet she encounters. Keylin describes
              herself as &ldquo;positive and resilient,&rdquo; two qualities that
              shine through in her work.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              One of Keylin&apos;s most cherished memories involves a dog named Teddy
              and a scissors-only groom that took over an hour and a half. &ldquo;The
              reward was his parents&apos; faces and how happy they were seeing the
              vision they wanted for him actually applied. It was amazing!&rdquo; she
              recalls, her voice brimming with pride.
            </p>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              When not working her full-time job at The Dog House Pet Salon, Keylin
              pursues her interest in finance through college classes — a testament to
              her drive and dedication beyond the grooming table.
            </p>
            <Link href="/appointment-request" className="btn-primary">
              Schedule An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section style={{ backgroundColor: "#965B83", padding: "50px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {[
              { num: "5+", label: "Years of Experience" },
              { num: "Certified", label: "Pet Groomer" },
              { num: "1,000+", label: "Happy Pets Served" },
              { num: "Galleria", label: "Location Specialist" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "clamp(26px,4vw,46px)",
                    color: "#ffffff",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.num}
                </p>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.85)",
                    marginTop: "6px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Sets Keylin Apart ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            What Sets <span style={{ color: "#965B83" }}>Keylin</span> Apart
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "17px",
              color: "#54595F",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 50px",
              lineHeight: 1.7,
            }}
          >
            Positive, resilient, and deeply passionate — Keylin brings her
            whole heart to every dog she grooms at the Galleria location.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" fill="#965B83" opacity=".3" stroke="#965B83" strokeWidth="2" strokeLinejoin="round"/></svg>,
                title: "Transformative Results",
                desc: "Keylin's scissors-only grooms are legendary. Her attention to detail and commitment to each pet's individual look ensures clients leave absolutely thrilled every time.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="14" r="6" stroke="#965B83" strokeWidth="2.5"/><circle cx="16" cy="12.5" r="1.5" fill="#965B83"/><path d="M12 20c-3 2-5 5-5 9h18c0-4-2-7-5-9" stroke="#965B83" strokeWidth="2" fill="#965B83" opacity=".2"/><path d="M26 10l4-3m0 0l4 2m-4-2v5" stroke="#965B83" strokeWidth="2" strokeLinecap="round"/></svg>,
                title: "Pet Health & Education",
                desc: "Keylin believes in educating pet parents to create happy, healthy lifestyles. She takes the time to share tips on coat care and maintenance between visits.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8c-3 0-6 2-6 6 0 3 2 5 4 7l2 2 2-2c2-2 4-4 4-7 0-4-3-6-6-6z" stroke="#965B83" strokeWidth="2.5" fill="#965B83" opacity=".2"/><line x1="14" y1="28" x2="26" y2="28" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><line x1="16" y1="32" x2="24" y2="32" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><line x1="20" y1="23" x2="20" y2="28" stroke="#965B83" strokeWidth="2"/></svg>,
                title: "Positive & Resilient",
                desc: "Keylin's upbeat attitude and determination make her a beloved presence at The Dog House. She finds joy in every challenge and every wagging tail that leaves her station.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "12px",
                  padding: "36px 28px",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "18px",
                    color: "#1F2124",
                    marginBottom: "12px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F8F8F8",
        padding: "80px 20px 130px",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
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
            marginBottom: "50px",
          }}>
            You Can Find Us At These Locations Near You
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "stretch",
          }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div style={{
              backgroundColor: "#965B83",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              alignItems: "center",
              minHeight: "100%",
            }}>
              <div style={{ flex: "0 0 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image
                  src={locations[0].img}
                  alt={locations[0].address}
                  width={200}
                  height={200}
                  quality={85}
                  style={{ width: "200px", height: "200px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px", color: "#fff" }} />
                  <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 600, color: "#fff", margin: 0 }}>
                    {locations[0].address}
                  </h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: "4px 0", lineHeight: 1.6, letterSpacing: "0.3px" }}>{h}</p>
                  ))}
                </div>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", marginBottom: "12px", fontWeight: 600, letterSpacing: "1px" }}>
                  {locations[0].option}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px", color: "#fff" }} />
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: 0 }}>{locations[0].phone}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px", color: "#fff" }} />
                  <a href={`mailto:${locations[0].email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", textDecoration: "none" }}>
                    {locations[0].email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {[locations[1], locations[2]].map((loc) => (
                <div key={loc.address} style={{
                  backgroundColor: "#965B83",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "24px",
                  alignItems: "center",
                }}>
                  <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                      src={loc.img}
                      alt={loc.address}
                      width={150}
                      height={150}
                      quality={85}
                      style={{ width: "150px", height: "150px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <i className="fa-solid fa-location-dot" style={{ fontSize: "16px", color: "#fff" }} />
                      <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0 }}>{loc.address}</h3>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      {loc.hours.map((h) => (
                        <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: "2px 0", lineHeight: 1.3 }}>{h}</p>
                      ))}
                    </div>
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#fff", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.5px" }}>
                      {loc.option}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                      <i className="fa-solid fa-phone" style={{ fontSize: "12px", color: "#fff" }} />
                      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: 0 }}>{loc.phone}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-envelope" style={{ fontSize: "12px", color: "#fff" }} />
                      <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", textDecoration: "none" }}>
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
    </>
  );
}
