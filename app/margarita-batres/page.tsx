import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Margarita Batres – Dog Groomer in Pearland | The Dog House",
  description:
    "Meet Margarita Batres, a dog groomer in Pearland at The Dog House. With 14+ years of experience, provide expert care and compassion for pets.",
  openGraph: {
    title: "Margarita Batres – Dog Groomer in Pearland | The Dog House",
    description:
      "Meet Margarita Batres, a dog groomer in Pearland at The Dog House. With 14+ years of experience, provide expert care and compassion for pets.",
    url: "https://www.thedoghouseps.com/margarita-batres/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/margarita-358.jpg.webp",
        alt: "Margarita Batres – Master Pet Groomer",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/margarita-batres/" },
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

export default function MargaritaBatresPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/asian-man-woman-with-their-shiba-inu-dog-outdoors.webp)",
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
            Pearland
          </p>
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#1F2124",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Margarita <span style={{ color: "#965B83" }}>Batres</span>
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
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/margarita-358.jpg.webp"
              alt="Margarita Batres – Master Pet Groomer at Pearland"
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
                fontSize: "clamp(24px,3vw,36px)",
                color: "#1F2124",
                marginBottom: "8px",
                marginTop: 0,
              }}
            >
              Margrita Batres
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
              Master Pet Groomer — Pearland
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
              Margrita Batres is a certified groomer at The Dog House Pet Salon.
              Margrita began her journey in 2010 as a bather, where her passion for
              grooming blossomed under the guidance of Donna, the salon&apos;s owner.
              With 14 years of experience, she is dedicated to making every dog look
              and feel their best.
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
              Margrita Batres is a passionate certified groomer at The Dog House Pet
              Salon, where her love for animals shines through in her work. Born in El
              Salvador, Margrita moved to the United States at the age of 18, hoping
              to create a brighter future for herself. Her journey in the grooming
              world began in 2010 when she started as a bather at The Dog House Pet
              Salon. Inspired by the talented team around her, especially Donna, the
              owner, Margrita quickly fell in love with the art of grooming.
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
              With over 14 years of experience, Margarita has built a strong
              reputation for being patient and compassionate, especially with anxious
              pets. She understands that grooming can be a stressful experience for
              some dogs, and she takes the time to make them feel comfortable and
              secure. She finds immense joy in seeing the transformation of each pet,
              ensuring they leave the salon looking beautiful and feeling loved.
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
              Her values—accountability, gratitude, teamwork, commitment, love, and
              appreciation—guide her every day. She believes that grooming is not just
              a job; it&apos;s a way to enrich the lives of pets and their owners.
              When she&apos;s not grooming, Margrita enjoys spending time with her
              family, especially her beloved chihuahuas.
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
              A fun fact about her is that she&apos;s a left-handed groomer but uses
              her right hand for scissors, showcasing her unique talent. Her goal is to
              help pet owners keep their pets looking beautiful between grooming
              sessions and to highlight the importance of regular brushing. Margrita is
              excited to continue her journey at The Dog House Pet Salon, where every
              day is an opportunity to spread love and care to the pets she adores.
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
              { num: "14+", label: "Years of Experience" },
              { num: "Certified", label: "Master Groomer" },
              { num: "2,000+", label: "Happy Pets Served" },
              { num: "Pearland", label: "Location Specialist" },
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

      {/* ── What Sets Margarita Apart ── */}
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
            What Sets <span style={{ color: "#965B83" }}>Margarita</span> Apart
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
            With 14 years of experience and a heart full of compassion, Margarita
            brings something special to every grooming session.
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
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30c-1.5 0-3-1-3-3 0-2.5 3-5 3-5s3 2.5 3 5c0 2-1.5 3-3 3z" fill="#965B83" opacity=".6"/><circle cx="12" cy="14" r="3" fill="#965B83" opacity=".5"/><circle cx="20" cy="10" r="3" fill="#965B83" opacity=".5"/><circle cx="28" cy="14" r="3" fill="#965B83" opacity=".5"/><circle cx="16" cy="22" r="3.5" fill="#965B83" opacity=".35"/><circle cx="24" cy="22" r="3.5" fill="#965B83" opacity=".35"/></svg>,
                title: "Gentle with Anxious Pets",
                desc: "Margarita has a rare gift for calming nervous dogs. Her patience and steady hands create a safe, reassuring environment so even the most anxious pets can relax.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="10" r="4" stroke="#965B83" strokeWidth="2"/><line x1="24" y1="14" x2="32" y2="6" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round"/><path d="M10 16c2-4 6-8 10-8" stroke="#965B83" strokeWidth="2" strokeLinecap="round"/><path d="M10 16l2 14h6l-2-14" stroke="#965B83" strokeWidth="2" strokeLinejoin="round"/></svg>,
                title: "Expert Breed Styling",
                desc: "From intricate scissor work to breed-specific cuts, Margarita's 14 years of hands-on experience means your dog receives a precise, beautiful groom every time.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34s-12-7-12-16c0-5 4-9 8-9 2.5 0 4 1.5 4 1.5s1.5-1.5 4-1.5c4 0 8 4 8 9 0 9-12 16-12 16z" fill="#965B83" opacity=".3" stroke="#965B83" strokeWidth="2.5"/></svg>,
                title: "Values-Driven Care",
                desc: "Accountability, gratitude, teamwork, and love guide Margarita's every interaction. She believes grooming enriches the lives of pets and their families alike.",
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "stretch" }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center", minHeight: "100%" }}>
              <div style={{ flex: "0 0 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={locations[0].img} alt={locations[0].address} width={200} height={200} quality={85}
                  style={{ width: "200px", height: "200px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px", color: "#fff" }} />
                  <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 600, color: "#fff", margin: 0 }}>{locations[0].address}</h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: "4px 0", lineHeight: 1.6, letterSpacing: "0.3px" }}>{h}</p>
                  ))}
                </div>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", marginBottom: "12px", fontWeight: 600, letterSpacing: "1px" }}>{locations[0].option}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px", color: "#fff" }} />
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: 0 }}>{locations[0].phone}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px", color: "#fff" }} />
                  <a href={`mailto:${locations[0].email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", textDecoration: "none" }}>{locations[0].email}</a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {[locations[1], locations[2]].map((loc) => (
                <div key={loc.address} style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center" }}>
                  <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={loc.img} alt={loc.address} width={150} height={150} quality={85}
                      style={{ width: "150px", height: "150px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
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
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#fff", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.5px" }}>{loc.option}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                      <i className="fa-solid fa-phone" style={{ fontSize: "12px", color: "#fff" }} />
                      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: 0 }}>{loc.phone}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-envelope" style={{ fontSize: "12px", color: "#fff" }} />
                      <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", textDecoration: "none" }}>{loc.email}</a>
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
