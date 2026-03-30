import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Pet Grooming Services in Houston",
  description:
    "Give your pet the ultimate pampering with expert pet grooming at The Dog House in Houston—affordable, professional, breed-specific care you can trust.",
  openGraph: {
    title: "Pet Grooming",
    description:
      "Give your pet the ultimate pampering with expert pet grooming at The Dog House in Houston—affordable, professional, breed-specific care you can trust.",
    url: "https://www.thedoghouseps.com/pet-grooming/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Pet Grooming at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pet-grooming/" },
};

const reviews = [
  {
    name: "Kevin Garnepudi",
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
  },
  {
    name: "William Gillespie",
    text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them.",
  },
  {
    name: "Ross Monsen",
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
  },
  {
    name: "Tiffany Tegeler",
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
  },
];

const pricingExtras = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/de-matting.jpg", label: "De-Matting", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-brushing.jpg", label: "Brushing", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-furminating.jpg", label: "Furminating", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-de-tick.jpg", label: "De-Tick", price: "$20 / Hour" },
];

const groomers = [
  {
    name: "Keylin Paulina Orellana Delcid",
    role: "Master Pet Groomer",
    location: "Galleria / Uptown Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
    href: "/keylin-paulina-orellana-delcid",
  },
  {
    name: "Margarita Batres",
    role: "Master Pet Groomer",
    location: "Pearland",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg",
    href: "/margarita-batres",
  },
  {
    name: "Francy Quevedo",
    role: "Master Pet Groomer",
    location: "Memorial Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg",
    href: "/francy-quevedo",
  },
];

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM / 4:00 PM – 5:00 PM"],
    phone: "Option 1: (713) 820-6140",
    email: "galleria@thedoghouseps.com",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM / 4:00 PM – 5:00 PM"],
    phone: "Option 2: (713) 820-6140",
    email: "memorial@thedoghouseps.com",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"],
    phone: "Option 3: (713) 820-6140",
    email: "pearland@thedoghouseps.com",
  },
];

export default function PetGroomingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pet Grooming", url: "https://www.thedoghouseps.com/pet-grooming" },
        ]}
      />
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image54.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        {/* dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,72px)", color: "#ffffff", marginBottom: "16px", lineHeight: 1.1 }}>
            Pet Grooming <span style={{ color: "#965B83" }}>Houston</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#ffffff", marginBottom: "32px", maxWidth: "600px" }}>
            Luxury, love, and a whole lot of tail wags — treat your pet to a spa day today!
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
            <a href="https://calculator.thedoghouseps.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "transparent", border: "2px solid #fff", color: "#fff", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "all 0.3s" }}>
              Get Groom Price Estimate
            </a>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "rgba(255,255,255,0.75)", marginTop: "12px" }}>✅ No obligation • Takes 30 seconds</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#965B83", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center", alignItems: "center" }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px" }}>25+</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px" }}>Years</div>
          </div>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px" }}>25,000+</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px" }}>Satisfied Clients</div>
          </div>
        </div>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#fff", textAlign: "center", marginTop: "16px", maxWidth: "800px", margin: "20px auto 0" }}>
          Over 25+ Years of Success with 25,000+ Satisfied Clients
        </p>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "800px", margin: "12px auto 0", lineHeight: 1.7 }}>
          The Dog House Pet Salon has become the dog grooming Houston center for all animal lovers. With over 25+ Years of pet grooming experience, we&apos;ve been successfully delivering a pet&apos;s paradise to our clients &amp; their furry friends. Our level of care &amp; attention to detail is unmatched in the industry, and that&apos;s what has kept our community growing &amp; returning for decades.
        </p>
      </section>

      {/* ── Grooming Packages ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Our Pet Grooming Packages
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "50px" }}>
            We offer two types of pet grooming services
          </p>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {/* Complete Grooming */}
            <div style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px 30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "26px", color: "#965B83", marginBottom: "24px" }}>Complete Pet Grooming</h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2, listStyle: "none", padding: 0, margin: 0 }}>
                <li>✔ Meet with the pet groomer to discuss your desired haircut</li>
                <li>✔ A complete bath</li>
                <li>✔ A complete brush out (de-matting coat $10 / 15 minutes)</li>
                <li>✔ Anal glands expressed (external)</li>
                <li>✔ Ear cleaning and plucking</li>
                <li>✔ Nail clip (file or grind is additional $10)</li>
                <li>✔ Breed-specific or client-requested haircut</li>
              </ul>
            </div>
            {/* Basic Grooming */}
            <div style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px 30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "26px", color: "#965B83", marginBottom: "24px" }}>Basic Pet Grooming</h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2, listStyle: "none", padding: 0, margin: 0 }}>
                <li>✔ A complete bath</li>
                <li>✔ A complete brush out (de-matting coat $10 / 15 Minutes)</li>
                <li>✔ Anal glands expressed (external)</li>
                <li>✔ Ear cleaning and plucking</li>
                <li>✔ Nail clip (file or grind is additional $10)</li>
                <li>✔ Trimming of the Face, trimming the butt and leg feathers, shaving the privates and paw pads</li>
                <li style={{ color: "#965B83", fontStyle: "italic" }}>(Body trimming is considered a Complete Groom)</li>
              </ul>
              <div style={{ marginTop: "24px" }}>
                <Link href="/pet-bathing" style={{ color: "#965B83", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "16px", textDecoration: "underline" }}>
                  Looking for Just Pet Bathing? CLICK HERE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "8px" }}>
            Professional Pet Grooming
          </h2>
          <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "22px", color: "#965B83", textAlign: "center", fontWeight: 400, marginBottom: "8px" }}>
            Pet Grooming Services &amp; Pricing
          </h3>
          <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", textAlign: "center", marginBottom: "40px" }}>
            Groomed To Perfection
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {pricingExtras.map((item) => (
              <div key={item.label} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={item.img} alt={item.label} width={200} height={200} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%", margin: "0 auto 16px", display: "block" }} />
                <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "8px" }}>{item.label}</h4>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#965B83", fontWeight: 600 }}>{item.price}</p>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", marginBottom: "40px" }}>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "8px" }}>
              Pricing can vary from breed to breed. Upon arrival with your pet, our groomers will consult with you to determine an exact price.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
              *Please Note: There is an additional difficulty fee of $15 for pets that exhibit aggressive behavior or are particularly challenging to groom. There is an additional rush fee for expedited pet grooming services.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "20px" }}>Ready to Treat Your Furry Friend?</p>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
          </div>
        </div>
      </section>

      {/* ── New Client Discount ── */}
      <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.8)", letterSpacing: "2px", marginBottom: "8px" }}>SPECIAL DISCOUNT</p>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,54px)", color: "#ffffff", marginBottom: "8px" }}>NEW CLIENT?</h2>
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,36px)", color: "#ffffff", marginBottom: "24px" }}>GET 10% OFF</h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "30px" }}>
            NEW CLIENTS GET 10% OFF ANY BATH, GROOM OR BASIC SERVICE.
          </p>
          <Link href="/appointment-request" style={{ backgroundColor: "#ffffff", color: "#965B83", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
            Book Now
          </Link>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/rating_922004.png" alt="star" width={20} height={20} style={{ width: "20px", height: "20px" }} />
                  ))}
                </div>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, color: "#1F2124", fontSize: "15px" }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Webcam Section ── */}
      <section style={{ backgroundColor: "#33373D", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#ffffff", marginBottom: "16px" }}>
              Never Miss a Moment!<br />Live Pet Daycare Streaming
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "16px" }}>
              Leaving your loved ones is hard, we understand. That&apos;s why The Dog House Pet Salon is equipped with webcams; allowing you to receive real time updates on your loved ones whenever you desire.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "24px" }}>
              Transparency is key in any relationship, especially when caring for furry family members. That&apos;s exactly why our dog day care in Houston will always provide this incredible resource to get an inside look at our operations &amp; monitor the luxurious conditions of your loved ones.
            </p>
            <Link href="/pet-cam" className="btn-primary">View Webcams</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", maxWidth: "220px", margin: "0 auto" }}>
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/webcam-1.png" alt="Pet webcam at The Dog House" width={220} height={147} style={{ width: "100%", maxWidth: "220px", height: "auto", borderRadius: "12px" }} />
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            You Can Find Us At These Locations Near You
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {locations.map((loc) => (
              <div key={loc.address} style={{ backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", display: "flex", flexDirection: "column" }}>
                <Image src={loc.img} alt={loc.address} width={500} height={300} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>{loc.address}</h3>
                  {loc.hours.map((h) => (
                    <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", margin: "2px 0" }}>{h}</p>
                  ))}
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", marginTop: "8px", fontWeight: 600 }}>{loc.phone}</p>
                  <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", display: "block", marginTop: "4px" }}>{loc.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donna Williams Bio ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#965B83", fontWeight: 600, marginBottom: "8px" }}>
              Nationally Renowned Certified Master Pet Groomer &amp; Trainer
            </p>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "24px" }}>Donna Williams</h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginBottom: "8px", fontWeight: 600 }}>Career Highlights:</p>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2, paddingLeft: "20px" }}>
              <li>30+ years of pet grooming experience</li>
              <li>Built a successful pet salon franchise in Houston, TX (15 yrs and counting)</li>
              <li>3 convenient location serving Houston, Pearland, and the surrounding areas</li>
              <li>Groomed over 50,000+ Dogs</li>
              <li>Rescued 500+ Dogs</li>
            </ul>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginTop: "16px", lineHeight: 1.7 }}>
              Donna believes in high-quality pet grooming with top-notch safety and care for every dog
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/donna-williams" className="btn-primary">Read Full Bio</Link>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#1F2124", marginBottom: "30px" }}>Our Pet Groomers</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px" }}>
              {groomers.map((g) => (
                <div key={g.name} style={{ textAlign: "center" }}>
                  <Image src={g.img} alt={g.name} width={200} height={200} style={{ width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 12px", display: "block" }} />
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#965B83", fontWeight: 600, marginBottom: "4px" }}>{g.role}</p>
                  <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#1F2124", marginBottom: "4px" }}>{g.name}</p>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#54595F", marginBottom: "8px" }}>{g.location}</p>
                  <Link href={g.href} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#965B83", fontWeight: 600, textDecoration: "underline" }}>Read Full Bio</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Breed Pricing Reference ── */}
      <section id="grooming-price-calculator" style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Pet Grooming Price Guide
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "48px" }}>
            Pricing is based on breed, weight, coat condition, and service type. Final price confirmed at check-in.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { tier: "Extra Small", examples: "Chihuahua, Maltese, Yorkie, Pomeranian", complete: "$55–$75", basic: "$45–$60" },
              { tier: "Small", examples: "Shih Tzu, Bichon Frise, Miniature Poodle, Miniature Schnauzer", complete: "$65–$90", basic: "$55–$75" },
              { tier: "Medium", examples: "Cocker Spaniel, Cavalier, Standard Schnauzer, Beagle", complete: "$80–$110", basic: "$65–$90" },
              { tier: "Large", examples: "Golden Retriever, Labrador, Husky, Shepherd", complete: "$100–$140", basic: "$80–$115" },
              { tier: "Extra Large", examples: "St. Bernard, Great Pyrenees, Newfoundland, Great Dane", complete: "$140–$190+", basic: "$110–$150+" },
              { tier: "Add-On Services", examples: "De-Matting · Furminating · Teeth Brush · Nail File/Grind", complete: "$10–$40", basic: "Per service" },
            ].map((row) => (
              <div key={row.tier} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "28px 24px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "8px" }}>{row.tier}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#54595F", marginBottom: "16px", lineHeight: 1.5 }}>{row.examples}</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, backgroundColor: "#F8F8F8", borderRadius: "8px", padding: "10px 14px" }}>
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#54595F", marginBottom: "4px" }}>Complete</p>
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", fontWeight: 700, color: "#1F2124" }}>{row.complete}</p>
                  </div>
                  <div style={{ flex: 1, backgroundColor: "#F8F8F8", borderRadius: "8px", padding: "10px 14px" }}>
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#54595F", marginBottom: "4px" }}>Basic</p>
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", fontWeight: 700, color: "#1F2124" }}>{row.basic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#54595F", textAlign: "center", marginTop: "24px", lineHeight: 1.6 }}>
            *Prices are estimates. Final pricing confirmed at check-in based on your pet&apos;s actual coat condition and service requirements. Additional $15 fee for pets with aggressive behavior.
          </p>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/appointment-request" className="btn-primary">Get Your Personalized Quote</Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Discover Expert Advice and the Latest Trends
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "48px" }}>
            Stay informed with our blog, featuring tips and trends to help you keep your pets healthy, happy, and well-groomed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
            {[
              { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
              { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
              { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
            ].map((post) => (
              <a key={post.title} href={post.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", backgroundColor: "#F8F8F8", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.08)", transition: "transform 0.2s" }}>
                <Image src={post.img} alt={post.title} width={500} height={280} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600, marginTop: "12px" }}>Read Article →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#ffffff", marginBottom: "12px" }}>
            HOUSTON&apos;S #1 Pet Grooming Service
          </h2>
          <div style={{ marginBottom: "40px" }}>
            <Link href="/appointment-request" style={{ backgroundColor: "#ffffff", color: "#965B83", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
              Schedule An Appointment
            </Link>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto 32px" }}>
            The Dog House Pet Salon has become the pet grooming center for all animal lovers &amp; owners in Houston. With over 25+ Years of pet grooming experience, we&apos;ve been successfully delivering a pet&apos;s paradise to our clients &amp; their furry friends. Our level of care &amp; attention to detail is unmatched in the industry, and that&apos;s what has kept our community growing &amp; returning for decades.
          </p>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
            Whether you&apos;re a dog or cat owner, we&apos;ll treat and love them as our own. We believe in creating soothing pet grooming experiences for your pets. Professional pet grooming is our passion.
          </p>
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#ffffff", marginBottom: "16px" }}>Our Pet Grooming Academy</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", marginBottom: "24px" }}>Creating World-Class Groomers One Student at a Time</p>
            <Link href="/grooming-school" style={{ backgroundColor: "transparent", border: "2px solid #fff", color: "#fff", padding: "13px 28px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
