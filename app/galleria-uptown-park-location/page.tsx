import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Galleria Houston | The Dog House Pet Salon",
  description:
    "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
  openGraph: {
    title: "Pet Grooming Salon Galleria Houston | The Dog House Pet Salon",
    description:
      "Tired of inconsistent grooming results? At our pet grooming salon in Galleria Houston, your pet gets professional, reliable care every visit.",
    url: "https://www.thedoghouseps.com/galleria-uptown-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/galleria-uptown-park-location/" },
};

const services = [
  {
    label: "Pet Grooming",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
    desc: "Elevate your pet's style with professional grooming services tailored to their breed, ensuring they look their best",
    link: "/pet-grooming",
    linkText: "Priced by breed & weight",
  },
  {
    label: "Pet Bathing",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-bathing.png",
    desc: "Keep your furry friend clean and smelling fresh with gentle bathing services designed to maintain their hygiene",
    link: "/pet-bathing",
    linkText: "Priced by breed & weight",
  },
  {
    label: "Pet Boarding",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png",
    desc: "Trust our comfortable and secure accommodations to provide personalized care for your pet while you're traveling",
    link: "/houston-pet-boarding",
    linkText: "See Pricing Details",
  },
  {
    label: "Doggie Daycare",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    desc: "Provide your canine companion with a safe and stimulating environment for play and socialization while you're away",
    price: "$20 per day",
  },
  {
    label: "Nail File",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png",
    desc: "Keep your pet's nails healthy and smooth with our gentle, professional nail filing service",
    price: "$10",
  },
  {
    label: "Teeth Brush",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/teeth-brush.png",
    desc: "Maintain your pet's dental health with our effective brushing services, ensuring a happy and healthy smile",
    price: "$10",
  },
  {
    label: "Pet Shop",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shop.png",
    desc: "Explore our comprehensive selection of pet essentials, including food, toys, and accessories, conveniently available in our shop.",
    extra: "(Nuvet Labs | Farmer's Dog)",
  },
];

const faqs = [
  {
    q: "What vaccinations does my pet need for pet grooming?",
    a: "Your pet must have an up-to-date Bordetella (Kennel Cough) vaccine. We also strongly recommend having Distemper, Influenza, and Rabies vaccines for added protection.",
  },
  {
    q: "What are the drop-off times for pet grooming?",
    a: "Weekdays: 7:00 AM to 11:00 AM\nSaturday: 8:00 AM to 11:00 AM",
  },
  {
    q: "Can I drop-off my pet after 11:00 AM?",
    a: "Yes, we offer a late check-in window from 11:00 AM to 11:15 AM. However, please note there's an additional $15 late fee per pet.",
  },
  {
    q: "Is a rush fee available?",
    a: "Yes, for an extra $15 per pet, you can move your pet to the front of the grooming queue.",
  },
  {
    q: "How long does the pet grooming process take?",
    a: "Grooming times vary by breed, coat length, and service type. Drying can take 15 minutes to 2–3 hours. We will call you when your pet is ready.",
  },
];

export default function GalleriaLocationPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/the-dog-house-galleria.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div
          aria-hidden="true"
          style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(32px,5vw,64px)",
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            The Dog House{" "}
            <span style={{ color: "#965B83" }}>Pet Salon – Galleria</span>
          </h1>
          <Link
            href="/appointment-request-form_location_richmond"
            style={{
              backgroundColor: "#965B83",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "50px",
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: "16px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Schedule An Appointment
          </Link>
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ backgroundColor: "#33373D", padding: "20px" }}>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <a
              href="https://maps.google.com/?q=5917+Richmond+Ave,+Houston,+TX+77057"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}
            >
              📍 5917 Richmond Ave, Houston, TX 77057
            </a>
            <span style={{ color: "#ffffff", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>
              <span style={{ color: "#965B83", fontWeight: 700 }}>Option 1</span> ·{" "}
              <a href="tel:7138206140" style={{ color: "#ffffff", textDecoration: "none" }}>
                (713) 820-6140
              </a>
            </span>
            <span
              style={{ color: "#965B83", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600 }}
            >
              ¡Hablamos Español!
            </span>
            <a
              href="mailto:galleria@thedoghouseps.com"
              style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}
            >
              galleria@thedoghouseps.com
            </a>
          </div>
          <Link
            href="/appointment-request-form_location_richmond"
            style={{
              backgroundColor: "#965B83",
              color: "#ffffff",
              padding: "10px 24px",
              borderRadius: "50px",
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: "15px",
              display: "inline-block",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* About */}
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
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(24px,3vw,36px)",
                color: "#1F2124",
                marginBottom: "20px",
              }}
            >
              A pet grooming and boarding center your pet will love
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              Welcome to The Dog House Pet Salon, our premier pet grooming and boarding salon, located in the vibrant
              Galleria area of Houston, Texas, just minutes away from the iconic Galleria Mall and the scenic Gerald D.
              Hines Waterwall Park. We pride ourselves on being the best choice for your pet care needs, offering a
              comprehensive range of services including dog boarding, dog grooming, doggie daycare, nail filing, teeth
              brushing, dematting, and furminating. Our experienced and compassionate team ensures your pets receive the
              highest level of care in a safe and comfortable environment.
            </p>
            <Link
              href="/appointment-request-form_location_richmond"
              style={{
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: "16px",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Schedule An Appointment
            </Link>
          </div>
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/the-dog-house-galleria.webp"
              alt="The Dog House Pet Salon Galleria"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
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
            Services We Provide
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}
          >
            {services.map((svc) => (
              <div
                key={svc.label}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "30px 20px",
                  textAlign: "center",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.1)",
                }}
              >
                <Image
                  src={svc.img}
                  alt={svc.label}
                  width={80}
                  height={80}
                  style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "16px" }}
                />
                <h3
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "18px",
                    color: "#1F2124",
                    marginBottom: "8px",
                  }}
                >
                  {svc.label}
                </h3>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    color: "#54595F",
                    lineHeight: 1.6,
                  }}
                >
                  {svc.desc}
                  {"link" in svc && svc.link ? (
                    <>
                      {" "}
                      (<Link href={svc.link} style={{ color: "#965B83" }}>{svc.linkText}</Link>)
                    </>
                  ) : null}
                  {"price" in svc && svc.price ? ` (${svc.price})` : ""}
                  {"extra" in svc && svc.extra ? ` ${svc.extra}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groomer */}
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
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.jpg"
              alt="Keylin Paulina Orellana Delcid"
              width={220}
              height={220}
              style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", marginBottom: "16px" }}
            />
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "14px",
                color: "#965B83",
                fontWeight: 600,
              }}
            >
              Master Pet Groomer · Galleria / Uptown Park
            </p>
          </div>
          <div>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(22px,3vw,32px)",
                color: "#1F2124",
                marginBottom: "16px",
              }}
            >
              Keylin Paulina Orellana Delcid
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Keylin Orellana is a certified pet groomer with 5 years of experience, originally from Honduras. Her
              passion for animal care led her to pursue a career in pet grooming after moving to the United States.
              Keylin values creating happy, healthy lifestyles for pets and educating their owners. Known for her
              positive attitude and resilience, she finds joy in helping animals with their grooming needs.
            </p>
            <Link
              href="/keylin-paulina-orellana-delcid"
              style={{
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: "16px",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Read Full Bio
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "30px",
            }}
          >
            Our Operational Hours
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            {[
              { day: "Monday – Friday", hours: "7 AM – 7 PM" },
              { day: "Saturday", hours: "8 AM – 6 PM" },
              { day: "Sunday", hours: "8–9 AM, 4–5 PM" },
            ].map((h) => (
              <div
                key={h.day}
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "20px 30px",
                  minWidth: "180px",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "16px",
                    color: "#ffffff",
                    marginBottom: "6px",
                  }}
                >
                  {h.day}
                </p>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                  }}
                >
                  {h.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(26px,3vw,40px)",
              color: "#1F2124",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
              gap: "16px",
            }}
          >
            {faqs.map((faq) => (
              <details
                key={faq.q}
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "8px",
                  padding: "20px 24px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "15px",
                    color: "#1F2124",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {faq.q}
                  <span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    lineHeight: 1.7,
                    marginTop: "12px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boarding & Daycare FAQ ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "16px" }}>
            Pet Boarding and Doggie Daycare
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "36px" }}>
            Our Galleria location offers premium boarding and daycare services with 24/7 supervision, daily outdoor play sessions, and comfortable, climate-controlled accommodations. Cats are also welcome!
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "16px" }}>
            {[
              { q: "Can I check-in for boarding and grooming after 11:15 AM?", a: "If grooming is on a different day: Yes. If grooming is on the check-in day: No — you'll need to arrive before 11:15 AM. A $15 late fee applies for check-ins after 11:00 AM." },
              { q: "Can I combine daycare with grooming services?", a: "Yes! For daycare, required vaccinations are Bordetella, Distemper, and Rabies. We also recommend the Influenza vaccine. Please specify your preferred pickup time at check-in." },
              { q: "What vaccines do pets need for boarding and daycare?", a: "Pets must have current Bordetella, Distemper, and Rabies vaccinations. Influenza vaccination is also highly recommended." },
              { q: "When can I drop off for boarding?", a: "Monday–Friday: 7:00 AM – 7:00 PM\nSaturday: 8:00 AM – 6:00 PM\nSunday: 8:00 AM – 9:00 AM or 4:00 PM – 5:00 PM" },
              { q: "Is daycare included in the boarding fee?", a: "Absolutely — daycare is complimentary with your pet's boarding stay." },
              { q: "How often do dogs play outside?", a: "Your dog will enjoy four outdoor play sessions daily — two in the morning and two in the afternoon. Naptime is from 12 PM to 2 PM." },
              { q: "Are play areas segregated by size and temperament?", a: "Yes, we offer separate, secure, and covered play yards tailored to dogs of varying sizes and temperaments." },
              { q: "Do you board cats?", a: "Indeed, your feline friends are also welcome at our Galleria location!" },
            ].map((faq) => (
              <details key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "20px 24px", cursor: "pointer" }}>
                <summary style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "15px", color: "#1F2124", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}<span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginTop: "12px", whiteSpace: "pre-line" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Explore the Galleria Area
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
            Top attractions near our Galleria / Uptown Park location
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { name: "The Galleria Mall", desc: "One of the largest malls in the U.S., featuring over 400 stores, restaurants, an indoor ice-skating rink, and two Westin hotels — all just minutes from our salon." },
              { name: "Gerald D. Hines Waterwall Park", desc: "A stunning 186-foot U-shaped fountain and surrounding park in the heart of Uptown Houston — perfect for a relaxing stroll after your pet's grooming appointment." },
              { name: "Houston Arboretum & Nature Center", desc: "A 155-acre nature sanctuary featuring walking trails, wildlife viewing, and educational exhibits. A peaceful green escape within the Memorial Park system." },
            ].map((a) => (
              <div key={a.name} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px" }}>{a.name}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            What Our Customers Are Saying!
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { name: "Kevin Garnepudi", text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after." },
              { name: "William Gillespie", text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them." },
              { name: "Ross Monsen", text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this is my go-to. They're able to squeeze me in last minute 90% of the time. Great staff and my dog loves them. Price is in line with everyone else." },
              { name: "Tiffany Tegeler", text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! They have a punch program — after 10 punches you can get a free groom for your pup. He also ALWAYS leaves with a little bandana which is a huge perk!" },
            ].map((r) => (
              <div key={r.name} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/rating_922004.png" alt="star" width={20} height={20} style={{ width: "20px", height: "20px" }} />
                  ))}
                </div>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, color: "#1F2124", fontSize: "15px" }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%205917%20Richmond%20Ave%2C%20Houston%2C%20TX%2077057&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Galleria Location"
          allowFullScreen
        />
      </section>
    </>
  );
}
