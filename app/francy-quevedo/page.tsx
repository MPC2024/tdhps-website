import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Groomer Memorial Park: Meet Francy Quevedo",
  description:
    "Meet Francy Quevedo, a skilled dog groomer at The Dog House Pet Salon, dedicated to making every grooming experience positive.",
  openGraph: {
    title: "Dog Groomer Memorial Park: Meet Francy Quevedo",
    description:
      "Meet Francy Quevedo, a skilled dog groomer at The Dog House Pet Salon, dedicated to making every grooming experience positive.",
    url: "https://www.thedoghouseps.com/francy-quevedo/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/francy-358.jpg.webp",
        alt: "Francy Quevedo – Master Pet Groomer",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/francy-quevedo/" },
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

export default function FrancyQuevedoPage() {
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
            Memorial Park
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
            Francy Quevedo
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
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/francy-358.jpg.webp"
              alt="Francy Quevedo – Master Pet Groomer at Memorial Park"
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
              Francy Quevedo
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
              Master Pet Groomer — Memorial Park
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
              Francy Quevedo is a dedicated certified dog groomer at The Dog House Pet
              Salon in Houston, TX. Originally from Venezuela, she has been grooming
              for over 8 years and has a special fondness for poodles. Francy&apos;s
              passion for animals shines through in her gentle approach and commitment
              to creating a nurturing environment for every pet.
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
              Francy Quevedo, a certified pet groomer at The Dog House Pet Salon in
              Houston, TX, brings a heartfelt passion for animals to her work.
              Originally from Venezuela, Francy has loved animals for as long as she
              can remember, especially her two beloved poodles. After completing basic
              grooming training in her home country in 2015, she began grooming her
              family and friends&apos; dogs, quickly discovering that this was her
              true calling.
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
              Upon moving to Houston in 2017, Francy joined The Dog House Pet Salon,
              where she trained diligently to become a certified groomer. Over the past
              8 years, she has developed a loyal clientele and a reputation for her
              compassionate and gentle grooming techniques. Francy&apos;s core
              values—commitment, love for animals, and gratitude—shine through in
              every interaction, as she believes that each dog has its own unique story
              and deserves the best care.
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
              One of the most rewarding aspects of Francy&apos;s job is building bonds
              with both her furry clients and their owners. She loves seeing them grow
              and always strives to meet their grooming needs with kindness and
              patience. Francy has a knack for calming anxious pets, often using baby
              talk and even singing in Spanish to make them feel at ease.
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
              Francy believes that spending her days working with dogs is not just a
              job; it is a blessing. She looks forward to bringing joy to every
              grooming session, making sure all pets leave looking and feeling their
              best.
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
              { num: "8+", label: "Years of Experience" },
              { num: "Certified", label: "Pet Groomer" },
              { num: "Poodle", label: "Specialist" },
              { num: "Memorial", label: "Park Location" },
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

      {/* ── What Sets Francy Apart ── */}
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
            What Sets <span style={{ color: "#965B83" }}>Francy</span> Apart
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
            With 8 years of dedicated grooming experience and a heartfelt
            passion for every animal, Francy brings warmth and skill to every
            session.
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
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="28" r="4" stroke="#965B83" strokeWidth="2.5"/><circle cx="28" cy="24" r="4" stroke="#965B83" strokeWidth="2.5"/><line x1="16" y1="28" x2="16" y2="10" stroke="#965B83" strokeWidth="2.5"/><line x1="32" y1="24" x2="32" y2="6" stroke="#965B83" strokeWidth="2.5"/><path d="M16 10l16-4" stroke="#965B83" strokeWidth="2.5"/></svg>,
                title: "Calming Touch & Techniques",
                desc: "Francy has a special gift for soothing anxious pets — she often uses baby talk and even sings in Spanish to help nervous dogs feel completely at ease during their groom.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="14" r="6" stroke="#965B83" strokeWidth="2.5"/><circle cx="16" cy="12.5" r="1.5" fill="#965B83"/><path d="M12 20c-3 2-5 5-5 9h18c0-4-2-7-5-9" stroke="#965B83" strokeWidth="2" fill="#965B83" opacity=".2"/><circle cx="28" cy="10" r="4" stroke="#965B83" strokeWidth="1.5"/></svg>,
                title: "Poodle & Doodle Expert",
                desc: "With a special fondness for poodles and doodles, Francy has mastered the intricate grooming patterns and coat care these breeds require for their best look.",
              },
              {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22l6-6 4 2 4-4 4 2 6-6" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 30h24v2H8z" fill="#965B83" opacity=".3" rx="1"/><circle cx="12" cy="16" r="2" fill="#965B83" opacity=".4"/><circle cx="28" cy="12" r="2" fill="#965B83" opacity=".4"/></svg>,
                title: "Loyal Client Relationships",
                desc: "Francy's commitment, love for animals, and gratitude-driven approach have earned her a devoted clientele who return time and again for her gentle, consistent care.",
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
