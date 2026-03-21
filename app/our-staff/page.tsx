import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Staff | The Dog House Pet Salon",
  description:
    "Meet The Dog House team in Houston! With 25+ years of pet grooming, daycare, and boarding expertise, we ensure your pets receive the best care.",
  openGraph: {
    title: "Our Staff | The Dog House Pet Salon",
    description:
      "Meet The Dog House team in Houston! With 25+ years of pet grooming, daycare, and boarding expertise, we ensure your pets receive the best care.",
    url: "https://www.thedoghouseps.com/our-staff/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
        alt: "Our Staff at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/our-staff/" },
};

const groomers = [
  {
    name: "Keylin Paulina Orellana Delcid",
    title: "Master Pet Groomer",
    location: "Galleria / Uptown Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
    slug: "/keylin-paulina-orellana-delcid",
  },
  {
    name: "Margarita Batres",
    title: "Master Pet Groomer",
    location: "Pearland",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg",
    slug: "/margarita-batres",
  },
  {
    name: "Francy Quevedo",
    title: "Master Pet Groomer",
    location: "Memorial Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg",
    slug: "/francy-quevedo",
  },
];

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

export default function OurStaffPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-grooming-houston.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div
          style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}
        />
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
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Our <span style={{ color: "#965B83" }}>Staff</span>
          </h1>
          <div style={{ marginTop: "32px" }}>
            <Link href="/appointment-request" className="btn-primary">
              Get An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Owner Bio ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
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
              Nationally Renowned Certified Master Pet Groomer &amp; Trainer
            </p>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(28px,4vw,52px)",
                color: "#1F2124",
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Donna Williams
            </h2>
            <h3
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "20px",
                color: "#965B83",
                marginBottom: "16px",
              }}
            >
              Career Highlights:
            </h3>
            <ul
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.8,
                paddingLeft: "20px",
                marginBottom: "24px",
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
                marginBottom: "24px",
              }}
            >
              Donna believes in high-quality pet grooming staff with top-notch safety
              and care for every dog
            </p>
            <Link href="/donna-williams" className="btn-primary">
              Read Full Bio
            </Link>
          </div>
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
        </div>
      </section>

      {/* ── Our Pet Groomers ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px,3vw,42px)",
              color: "#1F2124",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Our Pet Groomers
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {groomers.map((g) => (
              <div
                key={g.name}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.08)",
                  textAlign: "center",
                }}
              >
                <Image
                  src={g.img}
                  alt={g.name}
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <div style={{ padding: "30px 24px" }}>
                  <p
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "13px",
                      color: "#965B83",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    {g.title}
                  </p>
                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "22px",
                      color: "#1F2124",
                      marginBottom: "4px",
                    }}
                  >
                    {g.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "15px",
                      color: "#54595F",
                      marginBottom: "20px",
                    }}
                  >
                    {g.location}
                  </p>
                  <Link href={g.slug} className="btn-primary">
                    Read Full Bio
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
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
            You Can Find Us At These Locations
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
                  backgroundColor: "#F8F8F8",
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
