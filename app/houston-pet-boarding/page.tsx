import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Dog Boarding Houston: Safe & Friendly Dog Care",
  description:
    "The Dog House offers trusted pet boarding in Houston with cozy overnight stays, caring staff, and pet-friendly amenities—your dog's home away from home.",
  openGraph: {
    title: "Houston Pet Boarding",
    description:
      "The Dog House offers trusted pet boarding in Houston with cozy overnight stays, caring staff, and pet-friendly amenities—your dog's home away from home.",
    url: "https://www.thedoghouseps.com/houston-pet-boarding/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/The-Dog-House-Logo-01-scaled-e1745772269992.webp",
        alt: "Houston Pet Boarding at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/houston-pet-boarding/" },
};

const boardingPackages = [
  { suite: "Standard Suite", size: "3'×3' Room Size", price: "$40", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/small-dog-in-bed.webp" },
  { suite: "Standard + Suite", size: "5'×3' Room Size", price: "$50", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-shelter.webp" },
  { suite: "The Hideaway", size: "5'×5' Room Size", price: "$55", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp" },
  { suite: "The Post Oak", size: "6'×6' Room Size", price: "$55", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-with-blanket.webp" },
  { suite: "The Richmond or The Westheimer", size: "7'×7' Room Size", price: "$55", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-penthouse.webp" },
  { suite: "Penthouse Suite", size: "15'×12' Room Size", price: "$65", unit: "/ Night", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dark-brown-dog-in-bed.webp" },
];

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

const loyaltyPerks = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png", label: "Premium Amenities" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/30.png", label: "30 Day Guarantee" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/just4you.png", label: "Just For You" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/loyalty-card.png", label: "Loyalty Card" },
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

export default function HoustonPetBoardingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pet Boarding", url: "https://www.thedoghouseps.com/houston-pet-boarding" },
        ]}
      />
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/video-post.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,72px)", color: "#ffffff", marginBottom: "16px", lineHeight: 1.1 }}>
            Houston <span style={{ color: "#965B83" }}>pet boarding</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,0.9)", marginBottom: "32px" }}>
            All boarding clients get free daycare during their stay
          </p>
          <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#965B83", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px" }}>25+</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px" }}>Years</div>
          </div>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px" }}>8,000+</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px" }}>Satisfied Clients</div>
          </div>
        </div>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "800px", margin: "20px auto 0", lineHeight: 1.7 }}>
          The Dog House Pet Salon has become the pet grooming center for all animal lovers &amp; owners in Houston. With over 25+ Years of pet grooming experience, we&apos;ve been successfully delivering a pet&apos;s paradise to our clients &amp; their furry friends.
        </p>
      </section>

      {/* ── Boarding Special ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", backgroundColor: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "16px" }}>
            Boarding Clients Special
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "24px" }}>
            {["Enjoy Daycare Included", "No Extra Charge", "It's All Part of your Boarding Price"].map((tag) => (
              <span key={tag} style={{ backgroundColor: "#965B83", color: "#fff", padding: "8px 20px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontSize: "15px", fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
          <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
        </div>
      </section>

      {/* ── Boarding Packages ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Our Pet Boarding Packages
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 50px" }}>
            We provide personalized pet boarding packages for dogs and cats, ensuring enriching activities and a safe, happy stay. Enjoy perks like real-time webcam access, flexible schedules, and loyalty program discounts. Trust us to care for your pet like family!
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .boarding-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
            @media (max-width: 900px) { .boarding-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 600px) { .boarding-grid { grid-template-columns: 1fr; } }
          `}} />
          <div className="boarding-grid">
            {boardingPackages.map((pkg) => (
              <div key={pkg.suite} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", display: "flex", flexDirection: "column" }}>
                <Image src={pkg.img} alt={pkg.suite} width={400} height={250} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "4px" }}>{pkg.suite}</h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "12px" }}>{pkg.size}</p>
                  <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "28px", color: "#965B83", marginBottom: "4px" }}>{pkg.price}</p>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "16px" }}>{pkg.unit}</p>
                  <Link href="/appointment-request" style={{ backgroundColor: "#965B83", color: "#fff", padding: "10px 20px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "14px", display: "inline-block", textDecoration: "none", textAlign: "center", marginTop: "auto" }}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
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

      {/* ── About Boarding ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "16px" }}>
              Exceptional Pet Boarding<br />in Houston Services
            </h2>
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#965B83", fontWeight: 400, marginBottom: "24px" }}>
              The Paradise for All Pets
            </h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              At The Dog House Pet Salon in Houston, we offer the ultimate pet boarding experience. Our attentive, world-class staff is passionate about pets and willing to go the extra mile to ensure your loved ones have a safe and enjoyable experience.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              We have earned our reputation as the best cat and dog boarding provider in Houston and nearby locations. We are proud to offer top-tier pet boarding services to the residents of Houston, TX and its surrounding communities, including Pearland, Memorial Park, The Heights, Montrose, The Galleria, and Uptown Park.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              Because your pet is a family member, we recommend taking advantage of our pet suites where owners are provided with the peace of mind that their animal is not only safe, but thoroughly enjoying their stay.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "20px" }}>What&apos;s Included in Pet Boarding?</h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: 0 }}>
              <li>✔ Climate-controlled private suites</li>
              <li>✔ Elevated and padded beds</li>
              <li>✔ Minimum 4 play periods per day (no extra charge)</li>
              <li>✔ 30+ minutes outside in the dog park per play period</li>
              <li>✔ Pet assigned to playgroup for socialization</li>
              <li>✔ Real-time webcam access for pet parents</li>
              <li>✔ Optional grooming during boarding stay</li>
            </ul>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#69727D", marginTop: "16px", lineHeight: 1.7 }}>
              * Please Note: Each pet will receive a one-time $25.00 temperament assessment to ensure your pet is not toy, water, or food aggressive.
            </p>
          </div>
        </div>
      </section>

      {/* ── Loyalty Perks ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#965B83", textAlign: "center", fontWeight: 600, marginBottom: "40px" }}>
            Redeem on Your 12th Bath, Groom, or Basic Service
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "30px" }}>
            {loyaltyPerks.map((p) => (
              <div key={p.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "16px", minHeight: "120px", width: "100%" }}>
                  <Image src={p.img} alt={p.label} width={150} height={150} style={{ maxWidth: "120px", height: "auto", objectFit: "contain" }} />
                </div>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", fontWeight: 600, color: "#1F2124" }}>{p.label}</p>
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
              Never Miss a Moment!<br />Live Pet Streaming
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "24px" }}>
              Leaving your loved ones is hard, we understand. That&apos;s why The Dog House Pet Salon is equipped with webcams; allowing you to receive real time updates on your loved ones whenever you desire.
            </p>
            <Link href="/pet-cam" className="btn-primary">View Webcams</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", maxWidth: "220px", margin: "0 auto" }}>
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/webcam-1.png" alt="Pet webcam" width={220} height={147} style={{ width: "100%", maxWidth: "220px", height: "auto", borderRadius: "12px" }} />
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            You Can Find Us At These Locations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {locations.map((loc) => (
              <div key={loc.address} style={{ backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={loc.img} alt={loc.address} width={500} height={300} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "12px" }}>{loc.address}</h3>
                  {loc.hours.map((h) => <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", margin: "2px 0" }}>{h}</p>)}
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", marginTop: "8px", fontWeight: 600 }}>{loc.phone}</p>
                  <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", display: "block", marginTop: "4px" }}>{loc.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours & Vaccinations ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          <div style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,2.5vw,30px)", color: "#1F2124", marginBottom: "24px" }}>
              Hours of Operations
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Galleria &amp; Memorial</p>
              {["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM / 4:00 PM – 5:00 PM"].map((h) => (
                <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", margin: "4px 0" }}>{h}</p>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", marginBottom: "8px" }}>Pearland</p>
              {["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"].map((h) => (
                <p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", margin: "4px 0" }}>{h}</p>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,2.5vw,30px)", color: "#1F2124", marginBottom: "24px" }}>
              Required Vaccinations
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              All boarding pets must have current vaccinations on file before their first stay. Required vaccines:
            </p>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: "0 0 16px" }}>
              <li>✔ Bordetella (Kennel Cough)</li>
              <li>✔ Distemper (DHPP)</li>
              <li>✔ Rabies</li>
              <li>✔ Influenza (recommended)</li>
            </ul>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#69727D", lineHeight: 1.7 }}>
              Please bring vaccination records at drop-off or email them in advance to your location.
            </p>
          </div>
        </div>
      </section>

      {/* ── Boarding Amenities Grid ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Premium Boarding Amenities
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 50px" }}>
            Every boarding suite at The Dog House is designed to give your pet the comfort and care of a luxury stay.
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            .amenities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
            @media (max-width: 1024px) { .amenities-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 600px) { .amenities-grid { grid-template-columns: 1fr; } }
          `}} />
          <div className="amenities-grid">
            {[
              { icon: "🛏️", title: "Elevated Padded Beds", desc: "Each pet sleeps on a raised, padded bed — no cold concrete floors." },
              { icon: "❄️", title: "Climate-Controlled Suites", desc: "Private suites maintain comfortable temperatures year-round for your pet's comfort." },
              { icon: "🐕", title: "Daily Playgroups", desc: "Minimum 4 play periods per day with 30+ minutes outside in the dog park each session." },
              { icon: "📹", title: "Live Webcam Access", desc: "Watch your pet play and relax in real time via our webcam system — peace of mind guaranteed." },
              { icon: "✂️", title: "Optional Grooming", desc: "Combine boarding with a full grooming session so your pet leaves looking their best." },
              { icon: "🤝", title: "Socialization Playgroups", desc: "Pets are matched to appropriate playgroups based on size, temperament, and energy level." },
              { icon: "💊", title: "Medication Administration", desc: "Our trained staff can administer medications and follow special dietary requirements." },
              { icon: "🚿", title: "Complimentary Bath", desc: "Select boarding packages include a bath so your pet comes home fresh and clean." },
            ].map((amenity) => (
              <div key={amenity.title} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{amenity.icon}</div>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "17px", color: "#1F2124", marginBottom: "8px" }}>{amenity.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>{amenity.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/appointment-request" className="btn-primary">Reserve a Suite Today</Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Discover Expert Advice and the Latest Trends
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "50px", maxWidth: "700px", margin: "0 auto 50px" }}>
            Stay informed with our blog, featuring tips and trends to help you keep your pets healthy, happy, and well-groomed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Essential Grooming Tips for New Pet Owners", desc: "Learn the basics of pet grooming, from brushing and bathing to nail trimming, to keep your pet looking their best." },
              { title: "How to Care for Your Pet's Coat Year-Round", desc: "Find out how to adjust your grooming routine to match the changing seasons and keep your pet's coat healthy." },
              { title: "Common Grooming Mistakes and How to Avoid Them", desc: "Avoid common pitfalls in pet grooming with our expert advice on best practices and stress-free grooming techniques." },
            ].map((post) => (
              <div key={post.title} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "20px" }}>{post.desc}</p>
                <Link href="/blog" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600, textDecoration: "none" }}>Read More →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/blog" className="btn-primary">View All Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
