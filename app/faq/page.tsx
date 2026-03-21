import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
  description:
    "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
  openGraph: {
    title: "Dog Grooming FAQs | Questions About Pet Grooming in Houston",
    description:
      "We all know finding the right dog groomer can be a headache, check out our list of frequently asked questions. Call us today! 713.820.6140",
    url: "https://www.thedoghouseps.com/faq/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/faq/" },
};

const groomingFaqs = [
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

const boardingFaqs = [
  {
    q: "Can I check-in for pet boarding and pet grooming after 11:15 AM?",
    a: "– If pet grooming is on a different day: Yes, you can check-in after 11:15 AM.\n– If pet grooming is on the check-in day: No, you'll need to arrive before 11:15 AM to ensure same-day pet grooming.\nNote: A $15 late fee per pet applies for check-ins after 11:00 AM.",
  },
  {
    q: "Can I combine doggie daycare with pet grooming services?",
    a: "Yes, you can! For daycare, the required vaccinations are Bordetella (Kennel Cough), Distemper, and Rabies. We also recommend the Influenza vaccine. Please specify your preferred pickup time at check-in to maximize playtime before and/or after dog grooming.",
  },
  {
    q: "Is a potty break possible during a groom-only service?",
    a: "Certainly, we offer potty breaks for an additional $5. However, please note that this service is not available at our Pearland location.",
  },
  {
    q: "What Vaccines Do My Pets Need for Pet Boarding and Doggie Daycare?",
    a: "For both pet boarding and dog daycare, pets must have current Bordetella (Kennel Cough), Distemper, and Rabies vaccinations. Influenza vaccination is also highly recommended for added protection.",
  },
  {
    q: "When Can I Drop Off for Pet Boarding?",
    a: "– Weekdays: 7:00 AM – 7:00 PM\n– Saturday: 8:00 AM – 6:00 PM\n– Sunday: 8:00 AM – 9:00 AM or 4:00 PM – 5:00 PM",
  },
  {
    q: "Is Doggie Daycare Included in the Pet Boarding Fee?",
    a: "Absolutely, daycare is complimentary with your pet's boarding stay.",
  },
  {
    q: "How Often Do Dogs Play Outside?",
    a: "Your dog will enjoy four outdoor play sessions daily—two in the morning and two in the afternoon. Naptime is from 12 PM to 2 PM to keep them refreshed.",
  },
  {
    q: "What's the Duration of Each Outdoor Session?",
    a: "Each session ranges from 45 minutes to 1 hour, weather and breed permitting.",
  },
  {
    q: "Are Play Areas Segregated by Size and Temperament?",
    a: "Yes, we offer separate, secure, and covered play yards, tailored to accommodate dogs of different sizes and temperaments.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const lines = a.split("\n");
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "28px 32px",
        boxShadow: "0 2px 8px rgba(0,0,0,.06)",
        borderLeft: "4px solid #965B83",
      }}
    >
      <h3
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "17px",
          fontWeight: 700,
          color: "#1F2124",
          marginBottom: "10px",
          lineHeight: 1.4,
        }}
      >
        {q}
      </h3>
      <div
        style={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: "15px",
          color: "#54595F",
          lineHeight: 1.75,
        }}
      >
        {lines.map((line, i) => (
          <p key={i} style={{ margin: "4px 0" }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "380px",
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
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Frequently Asked <span style={{ color: "#E0598A" }}>Questions</span>
          </h1>
          <div style={{ marginTop: "32px" }}>
            <Link href="/appointment-request" className="btn-primary">
              Schedule An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pet Grooming FAQs ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,38px)",
              color: "#1F2124",
              marginBottom: "40px",
            }}
          >
            Pet Grooming
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {groomingFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Boarding & Daycare FAQs ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,38px)",
              color: "#1F2124",
              marginBottom: "40px",
            }}
          >
            Pet Boarding and Doggie Daycare
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {boardingFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to Book an Appointment?
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "32px",
            }}
          >
            Have more questions? Call us at{" "}
            <a
              href="tel:7138206140"
              style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}
            >
              (713) 820-6140
            </a>
          </p>
          <Link href="/appointment-request" className="btn-secondary">
            Schedule An Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
