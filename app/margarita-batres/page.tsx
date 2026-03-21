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
      "Sunday: 8:00 AM – 9:00 AM / 4:00 PM – 5:00 PM",
    ],
    phone: "Option 1: (713) 820-6140",
    email: "galleria@thedoghouseps.com",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: [
      "Monday – Friday: 7:00 AM – 7:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 9:00 AM / 4:00 PM – 5:00 PM",
    ],
    phone: "Option 2: (713) 820-6140",
    email: "memorial@thedoghouseps.com",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: [
      "Monday – Friday: 7:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: Closed",
    ],
    phone: "Option 3: (713) 820-6140",
    email: "pearland@thedoghouseps.com",
  },
];

export default function MargaritaBatresPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "400px",
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
          <p
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
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
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Margarita Batres
          </h1>
          <p
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "18px",
              color: "#E0598A",
            }}
          >
            Master Pet Groomer
          </p>
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          <div style={{ textAlign: "center" }}>
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
              }}
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(24px,3vw,36px)",
                color: "#1F2124",
                marginBottom: "8px",
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
                icon: "🐾",
                title: "Gentle with Anxious Pets",
                desc: "Margarita has a rare gift for calming nervous dogs. Her patience and steady hands create a safe, reassuring environment so even the most anxious pets can relax.",
              },
              {
                icon: "✂️",
                title: "Expert Breed Styling",
                desc: "From intricate scissor work to breed-specific cuts, Margarita's 14 years of hands-on experience means your dog receives a precise, beautiful groom every time.",
              },
              {
                icon: "❤️",
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
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>
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
            You Can Find Us At These Locations Near You
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
                <div style={{ padding: "24px" }}>
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
                  {loc.hours.map((h) => (
                    <p
                      key={h}
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        color: "#54595F",
                        margin: "2px 0",
                      }}
                    >
                      {h}
                    </p>
                  ))}
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      color: "#965B83",
                      marginTop: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {loc.phone}
                  </p>
                  <a
                    href={`mailto:${loc.email}`}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      color: "#965B83",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {loc.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
