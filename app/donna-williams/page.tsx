import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Trainer Donna Williams: A Grooming Expert",
  description:
    "Meet Donna Williams, a professional groomer and pet trainer in Houston with a passion for dogs and a thriving salon franchise in Texas.",
  openGraph: {
    title: "Pet Trainer Donna Williams: A Grooming Expert",
    description:
      "Meet Donna Williams, a professional groomer and pet trainer in Houston with a passion for dogs and a thriving salon franchise in Texas.",
    url: "https://www.thedoghouseps.com/donna-williams/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-17.jpg",
        alt: "Donna Williams – Master Pet Groomer & Trainer",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/donna-williams/" },
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

export default function DonnaWilliamsPage() {
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
            Nationally Renowned Certified Master Pet Groomer &amp; Trainer
          </p>
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Donna Williams
          </h1>
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
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-17-918x1024.jpg"
              alt="Donna Williams – Owner & Master Pet Groomer"
              width={460}
              height={512}
              style={{
                width: "100%",
                maxWidth: "460px",
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
                lineHeight: 1.1,
              }}
            >
              Donna Williams
            </h2>
            <h3
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "18px",
                color: "#965B83",
                marginBottom: "24px",
              }}
            >
              Career Highlights
            </h3>
            <ul
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.9,
                paddingLeft: "20px",
                marginBottom: "28px",
              }}
            >
              <li>30+ years of pet grooming experience</li>
              <li>
                Built a successful pet salon franchise in Houston, TX (15 yrs and
                counting)
              </li>
              <li>
                3 convenient location serving Houston, Pearland, and the surrounding
                areas
              </li>
              <li>Groomed over 50,000+ Dogs</li>
              <li>Rescued 500+ Dogs</li>
            </ul>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Donna believes in high-quality pet grooming with top-notch safety and
              care for every dog.
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
              Donna Williams is the principal owner of The Dog House Pet Salon and a
              nationally renowned certified dog groomer. Originally from Vietnam,
              Donna migrated to the United States at an early age and was raised in
              the grand state of Montana, The Treasure State. After high School Donna
              enlisted into the US Navy and served as a Petty Officer Third Class for
              five years.
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
              It was here where she found her passion for caring for canines. During
              her deployment in the Caribbean Island of Puerto Rico, she was chosen for
              a mission that tasked her team on a rescue mission that involved rescuing
              dogs. This was the spark that lit the flame. Ever since that mission with
              the Navy, Donna has never stopped loving and caring for canines. Donna is
              now a certified dog whisperer.
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
              After her naval duties were completed, she embarked on the journey of
              learning everything she could and, about how to care for and enhance the
              beauty of all dogs. She began her apprenticeship with groomers and
              learned hands-on techniques that helped beautify and enhance the health
              of her canine friends.
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
              In 2009, Donna launched The Dog House Pet Salon. As a nationally
              renowned certified dog groomer, she brings 30 years of pet
              beautification skills and techniques to her entrepreneurial endeavor of
              providing a high-quality white glove grooming service to every dog she
              takes on as a client.
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
              Her abundant patience and compassion for every dog is on display at
              every interaction with her canine friends. Her love and care for dogs is
              immeasurable. She teaches that all dogs have immense love to give their
              human owners and have something to teach us. She stresses that grooming
              techniques like daily brushing are invaluable when caring for your
              canine.
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
              { num: "30+", label: "Years of Experience" },
              { num: "50,000+", label: "Dogs Groomed" },
              { num: "500+", label: "Dogs Rescued" },
              { num: "3", label: "Houston Locations" },
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

      {/* ── What Sets Donna Apart ── */}
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
            What Sets <span style={{ color: "#965B83" }}>Donna</span> Apart
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
            Nationally renowned, Navy veteran, certified master groomer — Donna
            Williams brings three decades of unmatched dedication to every dog
            she cares for.
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
                icon: "🏆",
                title: "Nationally Renowned Expertise",
                desc: "With 30+ years of certified grooming experience, Donna is recognized nationwide for her white-glove service, attention to detail, and ability to handle any breed with expertise.",
              },
              {
                icon: "🐕",
                title: "Certified Dog Whisperer",
                desc: "Donna's patience and compassion for every dog is unparalleled. A certified dog whisperer, she teaches that all dogs have immense love to give and something to teach us.",
              },
              {
                icon: "💜",
                title: "Rescue & Community Champion",
                desc: "Having rescued 500+ dogs throughout her career, Donna's love for canines extends far beyond the salon. She is deeply committed to the well-being of every dog in her community.",
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
