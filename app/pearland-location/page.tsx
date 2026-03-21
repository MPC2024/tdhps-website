import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Grooming Salon Pearland",
  description:
    "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
  openGraph: {
    title: "Pet Grooming Salon Pearland",
    description:
      "Struggling to find gentle, reliable pet grooming Salon in Pearland? Our experienced team treats your pet like family with care you can trust.",
    url: "https://www.thedoghouseps.com/pearland-location/",
    images: [
      {
        url: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
        alt: "Pet Grooming at The Dog House Pet Salon Pearland",
      },
    ],
  },
  alternates: { canonical: "https://www.thedoghouseps.com/pearland-location/" },
};

const services = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
    label: "Pet Grooming",
    desc: "Elevate your pet's style with professional grooming services tailored to their breed, ensuring they look their best",
    link: "/pet-grooming",
    linkText: "Priced by breed & weight",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-bathing.png",
    label: "Pet Bathing",
    desc: "Keep your furry friend clean and smelling fresh with gentle bathing services designed to maintain their hygiene",
    link: "/pet-bathing",
    linkText: "Priced by breed & weight",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png",
    label: "Nail File",
    desc: "Keep your pet's nails healthy and smooth with our gentle, professional nail filing service",
    price: "$10",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/teeth-brush.png",
    label: "Teeth Brush",
    desc: "Maintain your pet's dental health with our effective brushing services, ensuring a happy and healthy smile",
    price: "$10",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shop.png",
    label: "Pet Shop",
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
    a: "– Weekdays: 7:00 AM to 11:00 AM\n– Saturday: 8:00 AM to 11:00 AM",
  },
  {
    q: "Can I drop-off my pet after 11:00 AM?",
    a: "Yes, we offer a late check-in window from 11:00 AM to 11:15 AM. However, please note there's an additional $15 late fee per pet.",
  },
  {
    q: "Why no check-ins after 11:15 AM?",
    a: "Due to our high-volume operations, we need to synchronize pet grooming schedules across facilities to provide optimal service. Any check-in after 11:00 AM disrupts this workflow. Therefore, to ensure all pets are ready for pickup by closing time, we strongly recommend adhering to our 11:00 AM cut-off.",
  },
  {
    q: "Can I provide vaccination records at check-in?",
    a: "Yes, but please make sure the Bordetella vaccine is current. For a smoother check-in, we suggest emailing your pet's vaccination records in advance.",
  },
  {
    q: "Can I self-administer vaccines and bring the vial as proof?",
    a: "Unfortunately, we can only accept vaccinations verified by a licensed or registered third party.",
  },
  {
    q: "Is a rush fee available?",
    a: "Yes, for an extra $15 per pet, you can move your pet to the front of the pet grooming queue.",
  },
  {
    q: "Does the rush fee guarantee completion within an hour?",
    a: "No, the rush fee prioritizes your pet. Pet Grooming duration varies based on breed, weight, coat length, and pet cooperation. We'll provide an estimated pick-up time at check-in.",
  },
  {
    q: "How long does the pet grooming process take?",
    a: "Pet Grooming times vary depending on multiple factors like breed, coat length, and type of grooming service. Critical factors like drying can take from 15 minutes up to 2-3 hours. We'll call you once your pet is ready; don't arrive unannounced.",
  },
  {
    q: "How much will my pet's grooming cost at The Dog House Pet Salon?",
    a: "The cost of pet grooming is tailored to your pet's unique needs, factoring in breed, weight, coat length, and specific grooming services. Our master groomers can provide a ballpark figure over the phone or an exact quote upon an in-person evaluation. Rest assured, our priority is to offer you excellent value without compromising on your pet's comfort and appearance.",
  },
  {
    q: "Why opt for pet nail filing over clipping?",
    a: "Nail filing isn't just an aesthetic choice; it's a wellness decision for your dog. Unlike traditional clipping, filing offers a higher level of precision, minimizing the risk of injuring the quick—the sensitive part of the nail. Not only is this procedure more comfortable for your pet, but it also results in smoother, rounded nails, reducing the chances of scratches on both you and your furry friend.",
  },
  {
    q: "Why is dental care essential for my dog?",
    a: "Think of it as more than just a brushing routine—it's preventive healthcare. Regular dental care prevents periodontal disease caused by plaque and tartar accumulation. Left unchecked, this can result in inflamed gums and even tooth loss. So, a quick brush not only keeps your dog's smile gleaming but also contributes to their overall well-being.",
  },
];

const attractions = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pearland-town-center.webp",
    name: "Pearland Town Center",
    desc: "A popular shopping and dining destination with a mix of retail stores, restaurants, and entertainment options.",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/central-park.webp",
    name: "Centennial Park",
    desc: "A community park featuring walking trails, a splash pad, playgrounds, sports fields, and picnic areas.",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/southdownpark.webp",
    name: "Southdown Park",
    desc: "A family-friendly park with a playground, splash pad, walking trails, and a large pavilion for community events.",
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/thedoghousepetsalon", label: "Facebook", path: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z", vb: "0 0 512 512" },
  { href: "https://twitter.com/TheDogHousePS", label: "X/Twitter", path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z", vb: "0 0 512 512" },
  { href: "https://www.instagram.com/thedoghouseps/", label: "Instagram", path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z", vb: "0 0 448 512" },
];

export default function PearlandLocationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/the-dog-house-pearland.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,64px)", color: "#ffffff", marginBottom: "24px", lineHeight: 1.1 }}>
            The Dog House <span style={{ color: "#965B83" }}>Pet Salon<br />– Pearland</span>
          </h1>
          <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
        </div>
      </section>

      {/* ── Hero Info Bar ── */}
      <section style={{ backgroundColor: "#33373D", padding: "20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            <a href="https://maps.google.com/?q=2810+Business+Center+Dr+%23126,+Pearland,+TX+77584" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>
              <svg viewBox="0 0 384 512" style={{ width: "16px", height: "16px", fill: "#965B83", flexShrink: 0 }}><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
              2810 Business Center, Dr #126, Pearland, TX 77584
            </a>
            <div style={{ color: "#ffffff", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>
              <span style={{ color: "#965B83", fontWeight: 700, marginRight: "6px" }}>Option 3</span>
              <a href="tel:+17138206140" style={{ color: "#ffffff", textDecoration: "none" }}>(713) 820-6140</a>
            </div>
            <span style={{ color: "#965B83", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600 }}>¡Hablamos Español!</span>
            <a href="mailto:pearland@thedoghouseps.com" style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>pearland@thedoghouseps.com</a>
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: "28px", height: "28px", backgroundColor: "#965B83", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox={s.vb} style={{ width: "14px", height: "14px", fill: "#ffffff" }}><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
          <Link href="/appointment-request-pearland/" style={{ backgroundColor: "#965B83", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "15px", display: "inline-block", textDecoration: "none", whiteSpace: "nowrap" }}>
            Book Now
          </Link>
        </div>
      </section>

      {/* ── Visit Our Salon ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "40px" }}>
            Visit Our <span style={{ color: "#965B83" }}>Salon</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <svg viewBox="0 0 384 512" style={{ width: "28px", height: "28px", fill: "#965B83", marginBottom: "8px" }}><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: 0 }}>Pearland Location</h3>
              <a href="https://maps.google.com/?q=2810+Business+Center+Dr+%23126,+Pearland,+TX+77584" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", textDecoration: "none" }}>
                2810 Business Center, Dr #126, Pearland, TX 77584
              </a>
            </div>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <svg viewBox="0 0 512 512" style={{ width: "28px", height: "28px", fill: "#965B83", marginBottom: "8px" }}><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" /></svg>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: 0 }}>Phone</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", margin: 0 }}>
                <a href="tel:7138206140" style={{ color: "#54595F", textDecoration: "none" }}>713-820-6140</a><br />Option 3
              </p>
            </div>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <svg viewBox="0 0 512 512" style={{ width: "28px", height: "28px", fill: "#965B83", marginBottom: "8px" }}><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: 0 }}>Email</h3>
              <a href="mailto:pearland@thedoghouseps.com" style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", textDecoration: "none" }}>pearland@thedoghouseps.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "20px" }}>
              Your Pet&apos;s Favorite Place
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "30px" }}>
              Welcome to The Dog House Pet Salon in Pearland, TX—your ultimate choice for dog grooming, and bathing. Offering 24/7 supervision, our facility ensures your pet is safe, loved, and well-groomed. Searching for top-notch dog grooming in Pearland? Our expert groomers specialize in pet styling and luxury baths. Committed to industry-leading standards, we are the go-to pet care facility in Pearland. Book your pet&apos;s next visit with us today and experience the difference that is The Dog House Pet Salon!
            </p>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
          </div>
          <div>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/the-dog-house-pearland.jpeg"
              alt="The Dog House Pet Salon Pearland"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            Services We Provide
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {services.map((svc) => (
              <div key={svc.label} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={svc.img} alt={svc.label} width={120} height={120} style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{svc.label}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6 }}>
                  {svc.desc}
                  {svc.link && (
                    <> (<Link href={svc.link} style={{ color: "#965B83" }}>{svc.linkText}</Link>).</>
                  )}
                  {svc.price && <> ({svc.price})</>}
                </p>
                {svc.extra && <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#965B83", marginTop: "8px" }}>{svc.extra}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Groomer Bio ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg"
              alt="Margarita Batres"
              width={300}
              height={300}
              style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", marginBottom: "16px" }}
            />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600 }}>Master Pet Groomer</p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F" }}>Pearland</p>
          </div>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,32px)", color: "#1F2124", marginBottom: "16px" }}>
              Margrita Batres
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "24px" }}>
              Francy Quevedo is a dedicated certified dog groomer at The Dog House Pet Salon in Houston, TX. Originally from Venezuela, she has been grooming for over 8 years and has a special fondness for poodles. Francy&apos;s passion for animals&apos; shines through in her gentle approach and commitment to creating a nurturing environment for every pet. She enjoys building lasting relationships with both dogs and their owners, always striving to make grooming a positive experience.
            </p>
            <Link href="/margarita-batres" className="btn-primary">Read Full Bio</Link>
          </div>
        </div>
      </section>

      {/* ── Hours ── */}
      <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#ffffff", marginBottom: "8px" }}>
            Our Operational Hours
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "rgba(255,255,255,0.85)", marginBottom: "30px" }}>
            Offering flexible hours to suit your pet care needs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            {[
              { day: "Monday – Friday", hours: "7 AM – 7 PM" },
              { day: "Saturday", hours: "8 AM – 6 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((h) => (
              <div key={h.day} style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "20px 30px", minWidth: "180px" }}>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#ffffff", marginBottom: "6px" }}>{h.day}</p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#ffffff", fontWeight: 700 }}>{h.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "40px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "16px" }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ backgroundColor: "#F8F8F8", borderRadius: "8px", padding: "20px 24px", cursor: "pointer" }}>
                <summary style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "15px", color: "#1F2124", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginTop: "12px", whiteSpace: "pre-line" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginBottom: "16px", lineHeight: 1.7 }}>
            The Pearland area offers a variety of attractions near The Dog House Pet Salon&apos;s Pearland location. Here are some highlights:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {attractions.map((a) => (
              <div key={a.name} style={{ backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={a.img} alt={a.name} width={400} height={250} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "8px" }}>{a.name}</h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginTop: "20px", lineHeight: 1.7 }}>
            These attractions provide a mix of shopping, outdoor activities, cultural experiences, and family-friendly fun, all easily accessible from The Dog House Pet Salon in Pearland.
          </p>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            What Our Customers are Saying!
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {[
              { name: "Kevin Garnepudi", text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after." },
              { name: "William Gillespie", text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them." },
              { name: "Ross Monsen", text: "Love this place! I have been using them for years. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance. Great staff and my dog loves them. Price is in line with everyone else." },
              { name: "Tiffany Tegeler", text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! They have a punch program — after 10 punches you can get a free groom. He also ALWAYS leaves with a little bandana which is a huge perk!" },
            ].map((r) => (
              <div key={r.name} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
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
          <div style={{ textAlign: "center" }}>
            <Link href="/appointment-request-pearland" className="btn-primary">Book An Appointment</Link>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ padding: 0 }}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%202810%20Business%20Center%20Dr%20%23126%2C%20Pearland%2C%20TX%2077584%2C%20United%20States&t=m&z=10&output=embed&iwloc=near"
          style={{ width: "100%", height: "400px", border: 0 }}
          title="The Dog House Pet Salon Pearland Location"
          allowFullScreen
        />
      </section>
    </>
  );
}
