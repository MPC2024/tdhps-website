import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ReviewWidget } from "@/components/ReviewWidget";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Dog Grooming in Memorial Park Houston",
  description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
  openGraph: {
    title: "Dog Grooming in Memorial Park Houston",
    description: "Pamper your pet with exceptional grooming, boarding, and daycare services at The Dog House Pet Salon in Memorial Park, Houston!",
    url: "https://www.thedoghouseps.com/memorial-park-location/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/memorial-park-location/" },
};

const faqs = [
  { q: "What vaccinations does my pet need?", a: "Your pet must have an up-to-date Bordetella (Kennel Cough) vaccine. We also strongly recommend Distemper, Influenza, and Rabies vaccines." },
  { q: "What are the drop-off times?", a: "Weekdays: 7:00 AM to 11:00 AM\nSaturday: 8:00 AM to 11:00 AM" },
  { q: "Can I drop-off my pet after 11:00 AM?", a: "Yes, we offer a late check-in window from 11:00 AM to 11:15 AM with an additional $15 late fee per pet." },
  { q: "Why no check-ins after 11:15 AM?", a: "Due to our high-volume operations, we need to synchronize pet grooming schedules across facilities to provide optimal service. Any check-in after 11:00 AM disrupts this workflow. To ensure all pets are ready for pickup by closing time, we strongly recommend adhering to our 11:00 AM cut-off." },
  { q: "Can I provide vaccination records at check-in?", a: "Yes, but please make sure the Bordetella vaccine is current. For a smoother check-in, we suggest emailing your pet's vaccination records in advance." },
  { q: "Can I self-administer vaccines and bring the vial as proof?", a: "Unfortunately, we can only accept vaccinations verified by a licensed or registered third party." },
  { q: "Is a rush fee available?", a: "Yes, for an extra $15 per pet, you can move your pet to the front of the grooming queue." },
  { q: "Does the rush fee guarantee completion within an hour?", a: "No, the rush fee prioritizes your pet. Grooming duration varies based on breed, weight, coat length, and pet cooperation. We'll provide an estimated pick-up time at check-in." },
  { q: "How long does the pet grooming process take?", a: "Grooming times vary by breed, coat length, and service type. Drying can take 15 minutes to 2-3 hours. We will call you when your pet is ready." },
  { q: "How much will grooming cost?", a: "The cost is tailored to your pet's unique needs, factoring in breed, weight, coat length, and specific services. Our groomers can provide a ballpark figure over the phone or an exact quote in person." },
  { q: "Why opt for nail filing over clipping?", a: "Nail filing offers a higher level of precision, minimizing the risk of injuring the quick. It results in smoother, rounded nails and is more comfortable for your pet." },
  { q: "Why is dental care essential for my dog?", a: "Regular dental care prevents periodontal disease caused by plaque and tartar. Left unchecked, this can result in inflamed gums and tooth loss. A quick brush keeps your dog's smile gleaming and contributes to overall well-being." },
];

const boardingFaqs = [
  { q: "Can I check-in for boarding and grooming after 11:15 AM?", a: "If grooming is on a different day: Yes. If grooming is on the check-in day: No — you'll need to arrive before 11:15 AM. A $15 late fee applies for check-ins after 11:00 AM." },
  { q: "Can I combine daycare with grooming services?", a: "Yes! For daycare, required vaccinations are Bordetella, Distemper, and Rabies. We also recommend the Influenza vaccine. Please specify your preferred pickup time at check-in." },
  { q: "Is a potty break possible during a groom-only service?", a: "Certainly, we offer potty breaks for an additional $5. This service is not available at our Pearland location." },
  { q: "What vaccines do pets need for boarding and daycare?", a: "Pets must have current Bordetella, Distemper, and Rabies vaccinations. Influenza vaccination is also highly recommended." },
  { q: "When can I drop off for boarding?", a: "Weekdays: 7:00 AM – 7:00 PM\nSaturday: 8:00 AM – 6:00 PM\nSunday: 8:00 AM – 9:00 AM or 4:00 PM – 5:00 PM" },
  { q: "Is daycare included in the boarding fee?", a: "Absolutely, daycare is complimentary with your pet's boarding stay." },
  { q: "How often do dogs play outside?", a: "Your dog will enjoy four outdoor play sessions daily — two in the morning and two in the afternoon. Naptime is from 12 PM to 2 PM." },
  { q: "What's the duration of each outdoor session?", a: "Each session ranges from 45 minutes to 1 hour, weather and breed permitting." },
  { q: "Are play areas segregated by size and temperament?", a: "Yes, we offer separate, secure, and covered play yards tailored to dogs of varying sizes and temperaments." },
  { q: "Do you board cats?", a: "Indeed, your feline friends are also welcome!" },
];

const reviews = [
  { name: "Kevin Garnepudi", text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after." },
  { name: "William Gillespie", text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them." },
  { name: "Ross Monsen", text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this is my go-to. They're able to squeeze me in last minute 90% of the time. Great staff and my dog loves them." },
  { name: "Tiffany Tegeler", text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! They have a punch program — after 10 punches you can get a free groom for your pup. He also ALWAYS leaves with a little bandana which is a huge perk!" },
];

const nearbyAttractions = [
  { name: "Memorial Park", desc: "One of the largest urban parks in the U.S., offering running trails, biking paths, a golf course, and picnic spots." },
  { name: "Memorial City Mall", desc: "A large shopping mall with retail stores, restaurants, and entertainment including an ice skating rink." },
  { name: "Houston Arboretum & Nature Center", desc: "A nature sanctuary within Memorial Park featuring walking trails, wildlife viewing, and educational exhibits." },
];

const services = [
  { label: "Pet Grooming", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png", desc: "Professional grooming tailored to your pet's breed", link: "/pet-grooming", linkText: "Priced by breed & weight" },
  { label: "Pet Bathing", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-bathing.png", desc: "Gentle bathing services for a clean, fresh coat", link: "/pet-bathing", linkText: "Priced by breed & weight" },
  { label: "Pet Boarding", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png", desc: "Comfortable, secure boarding with 24/7 supervision", link: "/houston-pet-boarding", linkText: "See Pricing Details" },
  { label: "Doggie Daycare", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/doggie-daycare.png", desc: "Safe, stimulating environment for play and socialization", price: "$20 per day" },
  { label: "Nail File", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png", desc: "Gentle, professional nail filing service", price: "$10" },
  { label: "Teeth Brush", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/teeth-brush.png", desc: "Effective dental care for a healthy smile", price: "$10" },
];

export default function MemorialParkLocationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.thedoghouseps.com" },
          { name: "Memorial Park", url: "https://www.thedoghouseps.com/memorial-park-location" },
        ]}
      />
      <section style={{ position: "relative", backgroundImage: "url(/images/memorial-location.jpg)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "480px", display: "flex", alignItems: "center", padding: "80px 20px 120px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,5vw,64px)", color: "#ffffff", marginBottom: "24px", lineHeight: 1.1 }}>
            The Dog House <span style={{ color: "#965B83" }}>Pet Salon – Memorial Park</span>
          </h1>
          <Link href="/appointment-request" style={{ backgroundColor: "#965B83", color: "#fff", padding: "14px 32px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "16px", display: "inline-block", textDecoration: "none" }}>Schedule An Appointment</Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "#965B83", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
          {[{ val: "25+", label: "Years Experience" }, { val: "8,000+", label: "Satisfied Clients" }, { val: "3", label: "Houston Locations" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "48px" }}>{s.val}</div>
              <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#33373D", padding: "20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <a href="https://maps.google.com/?q=6434+Washington+Avenue,+Houston,+TX+77007" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>📍 6434 Washington Avenue, Houston, TX 77007</a>
            <span style={{ color: "#ffffff", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}><span style={{ color: "#965B83", fontWeight: 700 }}>Option 2</span> · <a href="tel:7138206140" style={{ color: "#ffffff", textDecoration: "none" }}>(713) 820-6140</a></span>
            <span style={{ color: "#965B83", fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600 }}>¡Hablamos Español!</span>
            <a href="mailto:memorial@thedoghouseps.com" style={{ color: "#ffffff", textDecoration: "none", fontFamily: '"Outfit", sans-serif', fontSize: "14px" }}>memorial@thedoghouseps.com</a>
          </div>
          <Link href="/appointment-request-memorial/" style={{ backgroundColor: "#965B83", color: "#ffffff", padding: "10px 24px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "15px", display: "inline-block", textDecoration: "none", whiteSpace: "nowrap" }}>Book Now</Link>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "20px" }}>Your Pet&apos;s Favorite Place</h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "30px" }}>
              Welcome to The Dog House Pet Salon in Houston, TX—your ultimate choice for dog grooming and bathing. Offering 24/7 supervision, our facility ensures your pet is safe, loved, and well-groomed. Our expert groomers specialize in pet styling and luxury baths. Need reliable dog boarding or daycare? Trust us for personalized care. Book your pet&apos;s next visit with us today!
            </p>
            <Link href="/appointment-request" style={{ backgroundColor: "#965B83", color: "#fff", padding: "14px 32px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "16px", display: "inline-block", textDecoration: "none" }}>Schedule An Appointment</Link>
          </div>
          <div>
            <Image src="/images/memorial-location.jpg" alt="The Dog House Pet Salon Memorial Park" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>Services We Provide</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {services.map((svc) => (
              <div key={svc.label} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
                <Image src={svc.img} alt={svc.label} width={80} height={80} style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{svc.label}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6 }}>
                  {svc.desc}{"link" in svc && svc.link ? <> (<Link href={svc.link} style={{ color: "#965B83" }}>{svc.linkText}</Link>)</> : null}{"price" in svc && svc.price ? ` (${svc.price})` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg" alt="Francy Quevedo" width={220} height={220} style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", display: "block" }} />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600 }}>Master Pet Groomer · Memorial Park</p>
          </div>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,32px)", color: "#1F2124", marginBottom: "16px" }}>Francy Quevedo</h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "24px" }}>
              Francy Quevedo is a dedicated certified dog groomer at The Dog House Pet Salon. Originally from Venezuela, she has been grooming for over 8 years with a special fondness for poodles. Francy&apos;s passion for animals shines through in her gentle approach and commitment to creating a nurturing environment for every pet.
            </p>
            <Link href="/francy-quevedo" style={{ backgroundColor: "#965B83", color: "#fff", padding: "14px 32px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "16px", display: "inline-block", textDecoration: "none" }}>Read Full Bio</Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#ffffff", marginBottom: "30px" }}>Our Operational Hours</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
            {[{ day: "Monday – Friday", hours: "7 AM – 7 PM" }, { day: "Saturday", hours: "8 AM – 6 PM" }, { day: "Sunday", hours: "8–9 AM, 4–5 PM" }].map((h) => (
              <div key={h.day} style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "20px 30px", minWidth: "180px" }}>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#ffffff", marginBottom: "6px" }}>{h.day}</p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#ffffff", fontWeight: 700 }}>{h.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "40px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "16px" }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ backgroundColor: "#F8F8F8", borderRadius: "8px", padding: "20px 24px", cursor: "pointer" }}>
                <summary style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "15px", color: "#1F2124", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}<span style={{ color: "#965B83", fontSize: "20px", flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginTop: "12px", whiteSpace: "pre-line" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boarding & Daycare FAQ ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", marginBottom: "40px" }}>Boarding &amp; Daycare — FAQ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "16px" }}>
            {boardingFaqs.map((faq) => (
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

      {/* ── Reviews ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <ReviewWidget
            locationName={LOCATIONS.memorialPark.name}
            googlePlaceId={LOCATIONS.memorialPark.googlePlaceId}
            yelpBusinessId={LOCATIONS.memorialPark.yelpBusinessId}
            maxReviews={6}
          />
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,3vw,36px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Explore the Memorial Area
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
            Top attractions near our Memorial Park location
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {nearbyAttractions.map((a) => (
              <div key={a.name} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "6px 6px 9px rgba(0,0,0,.08)" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px" }}>{a.name}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <iframe loading="lazy" src="https://maps.google.com/maps?q=The%20Dog%20House%20Pet%20Salon%2C%206434%20Washington%20Avenue%2C%20Houston%2C%20TX%2077007&t=m&z=10&output=embed&iwloc=near" style={{ width: "100%", height: "400px", border: 0 }} title="The Dog House Pet Salon Memorial Park Location" allowFullScreen />
      </section>
    </>
  );
}
