import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Pet Bathing Houston - Pamper Your Pet | The Dog House",
  description:
    "Pamper your pup with expert pet bathing in Houston at The Dog House. We offer gentle, professional dog washing using safe products for a clean, healthy coat.",
  openGraph: {
    title: "Pet Bathing",
    description:
      "Pamper your pup with expert pet bathing in Houston at The Dog House. We offer gentle, professional dog washing using safe products for a clean, healthy coat.",
    url: "https://www.thedoghouseps.com/pet-bathing/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/Mask-Group.png",
        alt: "Pet Bathing at The Dog House Pet Salon",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pet-bathing/" },
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

const loyaltyPerks = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png", label: "Premium Shampoos" },
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

export default function PetBathingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Pet Bathing", url: "https://www.thedoghouseps.com/pet-bathing" },
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
            Houston <span style={{ color: "#E0598A" }}>Pet Bathing</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#ffffff", marginBottom: "32px", maxWidth: "600px" }}>
            Fresh, fluffy, and oh-so-clean — schedule your pet&apos;s bath with us!
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
            <Link href="/appointment-request" style={{ backgroundColor: "transparent", border: "2px solid #fff", color: "#fff", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
              Get Groom Price Estimate
            </Link>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "rgba(255,255,255,0.75)", marginTop: "12px" }}>✅ No obligation • Takes 30 seconds</p>
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
          The Dog House Pet Salon has become the pet grooming center for all animal lovers &amp; owners in Houston. With over 25+ Years of pet grooming experience, we&apos;ve been successfully delivering a pet&apos;s paradise to our clients &amp; their furry friends. Our level of care &amp; attention to detail is unmatched in the industry, and that&apos;s what has kept our community growing &amp; returning for decades.
        </p>
      </section>

      {/* ── What Is Pet Bathing ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            What Is Pet Bathing or Dog Bathing?
          </h2>
          <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", textAlign: "center", marginBottom: "40px" }}>
            Pet Bathing Is An Essential &amp; Healthy Process For All Animals
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8 }}>
              Pet bathing, sometimes referred to as pet grooming baths, is a fundamental part of maintaining the overall health and hygiene of your animal companion. Regular bathing is crucial for pets of all kinds — from dogs and cats to other furry friends — as it removes dirt, bacteria, and potential irritants from their skin and fur, promoting a comfortable, itch-free experience.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8 }}>
              By investing in routine pet bathing, pet owners help prevent many common health issues that can arise from poor hygiene, including skin infections, matted fur, and even stress-related conditions. At The Dog House, our professional bathers use techniques that make the process calm and enjoyable — even for pets that may be anxious about water or grooming.
            </p>
          </div>
        </div>
      </section>

      {/* ── Total Bathing Package ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/washing-pet-dog-corgi.webp"
              alt="Pet bathing Houston"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "24px" }}>
              Total Bathing Package
            </h2>
            <div style={{ marginBottom: "24px" }}>
              <Link href="/appointment-request" className="btn-primary">Book Now</Link>
            </div>
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#965B83", fontWeight: 600, marginBottom: "16px" }}>Pet bathing includes:</h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: 0 }}>
              <li>✔ Thorough brush out (De-matting coat $10/15 minutes)</li>
              <li>✔ External expression of anal glands</li>
              <li>✔ Nail trimming (File or grind is an additional $10)</li>
              <li>✔ Ear cleaning and plucking</li>
              <li>✔ Total drying</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "8px" }}>
            Pet Grooming Services &amp; Pricing
          </h2>
          <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", textAlign: "center", marginBottom: "40px" }}>
            Groomed To Perfection
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {pricingExtras.map((item) => (
              <div key={item.label} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={item.img} alt={item.label} width={200} height={200} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "8px" }}>{item.label}</h3>
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

      {/* ── Benefits of Professional Pet Bathing ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Benefits of Professional Dog and Pet Bathing
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", maxWidth: "700px", margin: "0 auto 50px", lineHeight: 1.7 }}>
            Professional pet bathing does more than keep your pet clean — it&apos;s a full health and wellness service.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "Prevents Skin Issues",
                text: "Regular baths help wash away dirt, bacteria, and other environmental irritants that can lead to skin conditions. For pets prone to allergies, our specialized shampoos help relieve itchy skin and reduce flare-ups, creating a more comfortable experience.",
              },
              {
                title: "Healthier Coat and Less Shedding",
                text: "Routine bathing and conditioning treatments support a soft, shiny coat and control shedding. For dog owners, especially those with breeds that shed frequently, this means less fur around the home and a healthier pet.",
              },
              {
                title: "Odor Control",
                text: "Regular pet bathing prevents unpleasant odors caused by oils, dirt, and bacteria buildup. Our bathing services include deodorizing treatments, so your pet feels and smells clean long after their visit.",
              },
              {
                title: "Early Detection of Health Issues",
                text: "Our world-class pet bathers carefully inspect your pet's skin for any unusual lumps, sores, or signs of infection. Early detection can be crucial in preventing potential health issues from escalating.",
              },
              {
                title: "Additional Grooming Benefits",
                text: "Along with bathing, our service includes essential grooming tasks like nail trimming, ear cleaning, and dental care. Each of these tasks contributes to reducing the chances of infections and keeping your pet in peak condition.",
              },
            ].map((benefit) => (
              <div key={benefit.title} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{benefit.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Pet Bathing Is Essential ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "16px" }}>
              Why Pet Bathing Is Essential for a Happy and Healthy Pet
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              For pets, a clean coat and skin are directly linked to overall well-being. When they go too long without a bath, they can develop tangled fur, flaky skin, and, in some cases, unpleasant odors that could signal underlying health concerns. Matted fur can trap moisture and harbor bacteria, leading to discomfort and potential infections.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              At our facility, pet bathing services are tailored to each animal&apos;s specific needs. Dog bathing differs from cat bathing in both method and products used, and our trained bathers understand how to approach each pet type uniquely.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "16px" }}>
              Our Comprehensive Pet Bathing Services
            </h2>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              <li>✔ Comprehensive pet bathing</li>
              <li>✔ Nail trimming (File or grind is an additional $10)</li>
              <li>✔ Thorough brush out (De-matting coat $10/15 minutes)</li>
              <li>✔ Ear cleaning and plucking</li>
              <li>✔ Teeth brushing</li>
              <li>✔ Total drying</li>
              <li>✔ External expression of anal glands</li>
            </ul>
            <Link href="/appointment-request" className="btn-primary">Book a Bathing Appointment</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Our Pet Bathing Services ── */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#ffffff", textAlign: "center", marginBottom: "12px" }}>
            Why Choose Our Pet Bathing Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.9)", textAlign: "center", maxWidth: "800px", margin: "0 auto 50px", lineHeight: 1.7 }}>
            With a skilled team that&apos;s passionate about pet care, our bathing services go beyond basic grooming. We combine attention to detail, specialized care, and top-tier products to provide a bathing experience that leaves your pet looking and feeling refreshed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30c-1.5 0-3-1-3-3 0-2.5 3-5 3-5s3 2.5 3 5c0 2-1.5 3-3 3z" fill="#fff" opacity=".8"/><circle cx="12" cy="14" r="3" fill="#fff" opacity=".7"/><circle cx="20" cy="10" r="3" fill="#fff" opacity=".7"/><circle cx="28" cy="14" r="3" fill="#fff" opacity=".7"/><circle cx="16" cy="22" r="3.5" fill="#fff" opacity=".5"/><circle cx="24" cy="22" r="3.5" fill="#fff" opacity=".5"/></svg>, title: "Experienced Bathers", desc: "Our bathers use techniques that make the process calm and enjoyable, even for pets that may be anxious about water or grooming." },
              { icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="6" width="16" height="28" rx="8" stroke="#fff" strokeWidth="2.5"/><rect x="15" y="26" width="10" height="5" rx="2" fill="#fff" opacity=".4"/><circle cx="20" cy="14" r="2" fill="#fff" opacity=".6"/><path d="M16 9h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: "Premium Products", desc: "We use only top-tier, pet-safe shampoos and conditioners tailored to your dog's specific coat type and skin condition." },
              { icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="10" r="4" stroke="#fff" strokeWidth="2"/><line x1="24" y1="14" x2="32" y2="6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><path d="M10 16c2-4 6-8 10-8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M10 16l2 14h6l-2-14" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>, title: "Breed-Specific Care", desc: "From short-haired breeds to double-coated dogs, we tailor each bath to the specific needs of your pet's breed." },
              { icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 34s-12-7-12-16c0-5 4-9 8-9 2.5 0 4 1.5 4 1.5s1.5-1.5 4-1.5c4 0 8 4 8 9 0 9-12 16-12 16z" fill="#fff" opacity=".4" stroke="#fff" strokeWidth="2.5"/></svg>, title: "Gentle Handling", desc: "Your pet's comfort is our priority. We use calming techniques and patient handling to reduce anxiety throughout the process." },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "30px" }}>
                <div style={{ marginBottom: "12px" }}>{item.icon}</div>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#ffffff", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
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
            Stay informed with our blog, featuring tips and trends to help you keep your pets clean, healthy, and looking their best.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { title: "Essential Grooming Tips for New Pet Owners", desc: "Learn the basics of pet grooming, from brushing and bathing to nail trimming, to keep your pet looking their best." },
              { title: "How to Care for Your Pet's Coat Year-Round", desc: "Find out how to adjust your grooming routine to match the changing seasons and keep your pet's coat healthy and shiny." },
              { title: "Common Grooming Mistakes and How to Avoid Them", desc: "Avoid common pitfalls in pet grooming with our expert advice on best practices and stress-free techniques." },
            ].map((post) => (
              <div key={post.title} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "20px" }}>{post.desc}</p>
                <Link href="/blog" aria-label={`Read more about ${post.title}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600, textDecoration: "none" }}>Read More <span className="sr-only">: {post.title}</span> →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/blog" className="btn-primary">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
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

      {/* ── Loyalty Perks ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "30px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "16px" }}>
                Why Choose<br />The Dog House?
              </h2>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
                We go beyond just bathing — every visit comes with premium care products, loyalty rewards, and the personal touch your pet deserves.
              </p>
            </div>
            {loyaltyPerks.map((p) => (
              <div key={p.label} style={{ textAlign: "center" }}>
                <Image src={p.img} alt={p.label} width={150} height={150} style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "12px" }} />
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
              Never Miss a Moment!<br />Live Pet Daycare Streaming
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "24px" }}>
              Leaving your loved ones is hard, we understand. That&apos;s why The Dog House Pet Salon is equipped with webcams; allowing you to receive real time updates on your loved ones whenever you desire.
            </p>
            <Link href="/pet-cam" className="btn-primary">View Webcams</Link>
          </div>
          <div>
            <Image src="/images/pet-camera.jpg" alt="Pet webcam at The Dog House" width={500} height={333} quality={85} style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
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
              All pets must have current vaccinations on file before their first bathing appointment. Required vaccines for daycare and grooming services:
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
            You Can Find Us At These Locations Near You
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
    </>
  );
}
