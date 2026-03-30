import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Best Dog Daycare in Houston | Doggy Day Care Services",
  description:
    "Looking for reliable dog daycare in Houston and Pearland, TX? Our doggy daycare provides safe, fun, and affordable care with loving supervision. Book today!",
  openGraph: {
    title: "Houston Dog Daycare",
    description:
      "Looking for reliable dog daycare in Houston and Pearland, TX? Our doggy daycare provides safe, fun, and affordable care with loving supervision. Book today!",
    url: "https://www.thedoghouseps.com/dog-day-care/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Houston Dog Daycare at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/dog-day-care/" },
};

const daycarePackages = [
  { label: "Daily Rate", price: "$20", detail: "/ Per Pet" },
  { label: "10 Day Pass", price: "$180", detail: "/ 1 Day Free" },
  { label: "20 Day Pass", price: "$340", detail: "/ 3 Days Free" },
  { label: "30 Day Pass", price: "$500", detail: "/ 5 Days Free" },
  { label: "100 Day Pass", price: "$1,500", detail: "/ 25 Days Free" },
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

const daycareFeatures = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", label: "Supervised Playtime" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", label: "Outdoor Activities" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", label: "Socialization" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", label: "Cage-Free Environment" },
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

const faqs = [
  {
    q: "Can I combine doggie daycare with pet grooming services?",
    a: "Yes, you can! For daycare, the required vaccinations are Bordetella (Kennel Cough), Distemper, and Rabies. We also recommend the Influenza vaccine. Please specify your preferred pickup time at check-in to maximize playtime before and/or after dog grooming.",
  },
  {
    q: "What's the Duration of Each Outdoor Session?",
    a: "Each session ranges from 45 minutes to 1 hour, weather and breed permitting.",
  },
  {
    q: "Are Play Areas Segregated by Size and Temperament?",
    a: "Yes, we offer separate, secure, and covered play yards, tailored to accommodate dogs of varying sizes and temperaments.",
  },
  {
    q: "Do You Offer Separate Daycare Rooms?",
    a: "Absolutely! Our daycare rooms are designed to cater to dogs of different sizes and temperaments for a safer and more enjoyable play experience.",
  },
  {
    q: "Can You Cater to Special Needs Pets?",
    a: "Yes! Our experienced staff is trained to care for pets with special needs, including senior dogs, dogs with medical conditions, and anxious pets. Please let us know your pet's specific requirements at check-in.",
  },
];

export default function DogDayCarePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Dog Day Care", url: "https://www.thedoghouseps.com/dog-day-care" },
        ]}
      />
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-group.jpg)",
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
            Houston <span style={{ color: "#E0598A" }}>Dog Daycare</span>
          </h1>
          <div style={{ marginTop: "32px" }}>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
          </div>
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

      {/* ── Daycare Services & Pricing ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Our Dog Day Care Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "50px" }}>
            Outdoor Activities &amp; Playtime for your Pets
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {daycarePackages.map((pkg) => (
              <div key={pkg.label} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{pkg.label}</h3>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "32px", color: "#965B83", marginBottom: "4px" }}>{pkg.price}</p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F" }}>{pkg.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "20px" }}>Ready to Treat Your Furry Friend?</p>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
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

      {/* ── About Doggy Daycare ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "16px" }}>
            The Dog House Pet Salon<br /><span style={{ color: "#965B83" }}>#1 Pet Daycare Service in Houston!</span>
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, maxWidth: "900px", margin: "0 auto 40px", textAlign: "center" }}>
            At The Dog House Pet Salon, we believe love and attention are key to making pets happy. Our Doggy Daycare offers supervised playtime, sunshine, and socialization in a cage-free environment with penthouse suites, soothing sounds, and toys. Guests enjoy up to 4 outdoor rotations lasting 45 minutes to 1 hour, depending on weather conditions. To ensure safety, all pets undergo a one-time $25 temperament assessment to check for aggression and behavior with staff and other pets. Current vaccination records are required. Pets remain in their playgroup to build social skills and friendships.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "24px" }}>
            {daycareFeatures.map((f) => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px 20px" }}>
                <Image src={f.img} alt={f.label} width={120} height={120} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%", marginBottom: "16px" }} />
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124" }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp"
              alt="Dog daycare benefits Houston"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "24px" }}>
              The Benefits of Our Premier<br /><span style={{ color: "#965B83" }}>Dog Daycare Services</span> in Houston, TX
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              At The Dog House Pet Salon, we take pride in offering exceptional dog daycare services to the residents of Houston, TX, including Memorial Park, The Heights, The Galleria, Uptown Park, Montrose and neighboring communities.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              Enrolling your beloved pet in our Houston dog daycare program offers numerous benefits. Our facility provides a safe and stimulating environment where dogs can socialize, exercise, and receive the attention and care they need while you&apos;re away.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              Our experienced staff members are dedicated to ensuring that each dog in our care receives the highest level of attention, supervision, and love.
            </p>
          </div>
        </div>
      </section>

      {/* ── Webcam Section ── */}
      <section style={{ backgroundColor: "#33373D", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#E0598A", letterSpacing: "2px", marginBottom: "8px" }}>Watch #THEDOGHOUSEPETSALON</p>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#ffffff", marginBottom: "16px" }}>
              Daycare TV
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "16px" }}>
              Want to check in on your furry friends during the day? Leaving your loved ones is hard, we understand. That&apos;s why The Dog House Pet Salon is equipped with webcams, allowing you to receive real time updates on your loved ones whenever you desire.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "24px" }}>
              Communities are built on trust. That&apos;s why The Dog House Pet Salon has been the best doggy daycare &amp; pet boarding service in Houston for over a decade! When you&apos;re here, you&apos;re family.
            </p>
            <Link href="/pet-cam" className="btn-primary">View Webcams</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", maxWidth: "500px", margin: "0 auto" }}>
            <Image src="/images/pet-camera.jpg" alt="Pet webcam" width={500} height={333} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
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
              All daycare pets must have current vaccinations on file before their first visit:
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

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px" }}>{faq.q}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Discover Expert Advice and the Latest Trends
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", maxWidth: "700px", margin: "0 auto 50px", lineHeight: 1.7 }}>
            Stay informed with our blog, featuring tips and trends to help you keep your pets happy, healthy, and well cared for.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Essential Grooming Tips for New Pet Owners", desc: "Learn the basics of pet grooming, from brushing and bathing to nail trimming, to keep your pet looking their best." },
              { title: "How to Care for Your Pet's Coat Year-Round", desc: "Find out how to adjust your grooming routine to match the changing seasons and keep your pet's coat healthy and shiny." },
              { title: "Common Grooming Mistakes and How to Avoid Them", desc: "Avoid common pitfalls in pet grooming with our expert advice on best practices and stress-free grooming techniques." },
            ].map((post) => (
              <div key={post.title} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
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
