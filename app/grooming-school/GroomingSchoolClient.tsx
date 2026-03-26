"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

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

const programIcons = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shampoo.svg", label: "Bathing Techniques" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-brush.svg", label: "Brushing & De-shedding" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/cut.svg", label: "Breed-Specific Cuts" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/scissors.svg", label: "Scissoring Skills" },
];

const howReferralOptions = ["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"];

const inputSt: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontFamily: '"Outfit", sans-serif',
  fontSize: "15px",
  color: "#1F2124",
  outline: "none",
  boxSizing: "border-box",
  backgroundColor: "#fff",
};

const labelSt: React.CSSProperties = {
  fontFamily: '"Outfit", sans-serif',
  fontSize: "15px",
  fontWeight: 600,
  color: "#1F2124",
  display: "block",
  marginBottom: "6px",
};

const fieldSt: React.CSSProperties = { marginBottom: "20px" };

const requiredStar = <span style={{ color: "#CC3366" }}>*</span>;

function SuccessMessage() {
  return (
    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f0faf0", borderRadius: "12px" }}>
      <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#1F2124", marginBottom: "12px" }}>Thank You!</h3>
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Your application has been received. We&apos;ll be in touch soon.</p>
    </div>
  );
}

function BathingProgramForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  if (submitted) return <SuccessMessage />;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/grooming-school", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program: "Bathing Program",
          fullName: formData.get("fullName") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          format: formData.get("bathingFormat") as string,
          motivation: formData.get("motivation") as string,
          animalComfort: Number(formData.get("animalComfort")),
          priorExperience: formData.get("priorExperience") as string,
          allergies: formData.get("allergies") as string,
          programGoals: formData.get("programGoals") as string,
          techniquesInterest: formData.get("techniquesInterest") as string,
          careerGoals: formData.get("careerGoals") as string,
          howHeard: formData.get("howHeard") as string,
        }),
      });

      if (!res.ok) throw new Error("Server error. Please try again.");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Submission failed.");

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px" }}>
      {error && (
        <div style={{ background: "#FEE2E2", border: "1px solid #FCA5A5", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#B91C1C" }}>
          {error}
        </div>
      )}
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "24px" }}><em>&quot;*&quot; indicates required fields</em></p>
      <div style={fieldSt}><label style={labelSt}>Full Name: {requiredStar}</label><input name="fullName" type="text" required style={inputSt} /></div>
      <div style={fieldSt}><label style={labelSt}>Email Address {requiredStar}</label><input name="email" type="email" required style={inputSt} /></div>
      <div style={fieldSt}><label style={labelSt}>Phone Number {requiredStar}</label><input name="phone" type="tel" required style={inputSt} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>Which program format are you interested in? {requiredStar}</label>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Online", "In-Person"].map((opt) => (
            <label key={opt} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#1F2124", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <input type="radio" name="bathingFormat" value={opt} required style={{ accentColor: "#965B83" }} /> {opt}
            </label>
          ))}
        </div>
      </div>
      <div style={fieldSt}><label style={labelSt}>What motivated you to apply to our bather program? {requiredStar}</label><textarea name="motivation" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>On a scale from 0-5, how comfortable are you with animals? {requiredStar}</label>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#69727D", marginBottom: "8px" }}>[0 (not at all) - 5 (I Love Animals)]</p>
        <input name="animalComfort" type="number" min={0} max={5} required style={{ ...inputSt, width: "120px" }} />
      </div>
      <div style={fieldSt}><label style={labelSt}>Have you had any previous experience in pet grooming or related fields? {requiredStar}</label><textarea name="priorExperience" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>Do you have any allergies or conditions we should be aware of? {requiredStar}</label><textarea name="allergies" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>What do you hope to achieve by completing our program? {requiredStar}</label><textarea name="programGoals" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>Are there any specific techniques or skills you are particularly interested in learning? {requiredStar}</label><textarea name="techniquesInterest" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>What are your career goals within the pet grooming industry? {requiredStar}</label><textarea name="careerGoals" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>How did you hear about our program? {requiredStar}</label>
        <select name="howHeard" required style={{ ...inputSt, cursor: "pointer" }}>
          <option value="">Select All</option>
          {howReferralOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <button type="submit" disabled={submitting} style={{ width: "100%", padding: "15px 30px", backgroundColor: "#965B83", color: "#fff", border: "none", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", cursor: "pointer", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function BasicGroomingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  if (submitted) return <SuccessMessage />;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/grooming-school", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program: "Basic Grooming",
          fullName: formData.get("fullName") as string,
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          format: formData.get("basicFormat") as string,
          motivation: formData.get("motivation") as string,
          animalComfort: Number(formData.get("animalComfort")),
          priorExperience: formData.get("priorExperience") as string,
          techniquesInterest: formData.get("techniquesInterest") as string,
          careerGoals: formData.get("careerGoals") as string,
          programGoals: formData.get("programGoals") as string,
          allergies: formData.get("allergies") as string,
          howHeard: formData.get("howHeard") as string,
        }),
      });

      if (!res.ok) throw new Error("Server error. Please try again.");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Submission failed.");

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px" }}>
      {error && (
        <div style={{ background: "#FEE2E2", border: "1px solid #FCA5A5", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#B91C1C" }}>
          {error}
        </div>
      )}
      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "24px" }}><em>&quot;*&quot; indicates required fields</em></p>
      <div style={fieldSt}><label style={labelSt}>Full Name: {requiredStar}</label><input name="fullName" type="text" required style={inputSt} /></div>
      <div style={fieldSt}><label style={labelSt}>Email Address {requiredStar}</label><input name="email" type="email" required style={inputSt} /></div>
      <div style={fieldSt}><label style={labelSt}>Phone Number {requiredStar}</label><input name="phone" type="tel" required style={inputSt} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>Preferred Program Format: {requiredStar}</label>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Online", "In-Person"].map((opt) => (
            <label key={opt} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#1F2124", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <input type="radio" name="basicFormat" value={opt} required style={{ accentColor: "#965B83" }} /> {opt}
            </label>
          ))}
        </div>
      </div>
      <div style={fieldSt}><label style={labelSt}>What motivated you to apply to our Basic Groomer program? {requiredStar}</label><textarea name="motivation" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>On a scale from 0-5, how comfortable are you with animals? {requiredStar}</label>
        <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#69727D", marginBottom: "8px" }}>[0 (not at all) - 5 (extremely passionate)]</p>
        <input name="animalComfort" type="number" min={0} max={5} required style={{ ...inputSt, width: "120px" }} />
      </div>
      <div style={fieldSt}><label style={labelSt}>Do you have any prior experience in pet grooming or animal care? {requiredStar}</label><textarea name="priorExperience" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>Are there specific grooming techniques or skills you are eager to learn? {requiredStar}</label><textarea name="techniquesInterest" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>What are your career goals within the pet grooming industry? {requiredStar}</label><textarea name="careerGoals" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>What do you hope to achieve by completing our Basic Groomer program? {requiredStar}</label><textarea name="programGoals" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}><label style={labelSt}>Do you have any allergies or conditions we should be aware of? {requiredStar}</label><textarea name="allergies" required rows={3} style={{ ...inputSt, resize: "vertical" }} /></div>
      <div style={fieldSt}>
        <label style={labelSt}>How did you hear about our Basic Groomer program? {requiredStar}</label>
        <select name="howHeard" required style={{ ...inputSt, cursor: "pointer" }}>
          <option value="">Select All</option>
          {howReferralOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <button type="submit" disabled={submitting} style={{ width: "100%", padding: "15px 30px", backgroundColor: "#965B83", color: "#fff", border: "none", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", cursor: "pointer", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

export default function GroomingSchoolClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#965B83",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/Screenshot-1404-01-31-at-6.42.38%20AM.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(150,91,131,0.75)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(30px,4vw,60px)", color: "#ffffff", marginBottom: "16px", lineHeight: 1.1 }}>
            Houston&apos;s Premiere <span style={{ color: "#ffddee" }}>Dog Grooming School</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,20px)", color: "rgba(255,255,255,0.9)", marginBottom: "12px", maxWidth: "600px" }}>
            Welcome to Our Professional Pet Grooming School!
          </p>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "rgba(255,255,255,0.85)", marginBottom: "32px", maxWidth: "600px", lineHeight: 1.7 }}>
            Start your pet grooming career learning from experienced dog groomers with decades of experience.
          </p>
          <a href="#programs" style={{ backgroundColor: "#ffffff", color: "#965B83", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
            View Our Programs
          </a>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            Our Promise to Students
          </h2>
          <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#965B83", textAlign: "center", marginBottom: "50px", fontWeight: 400 }}>
            Excellence in Grooming Education
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "40px" }}>
            {[
              {
                title: "World-Class Instruction",
                text: "At The Dog House Pet Salon, we know that skilled and professional groomers are the heart of the pet care industry. Our professional dog grooming classes are crafted to connect you with passionate experts who provide the knowledge and hands-on experience required for success in this rewarding field. Whether you're just starting or experienced, our comprehensive courses are tailored to meet your needs.",
              },
              {
                title: "Support Beyond Graduation",
                text: "At The Dog House Pet Salon, our support doesn't end when you finish your courses. We are committed to your continuous growth and success in the pet grooming industry. Our graduates benefit from ongoing mentorship, career advice, and access to a network of professional groomers. We strive to ensure that each of our students has the resources and guidance needed to build a successful and fulfilling grooming career.",
              },
              {
                title: "A Commitment to Quality",
                text: "At The Dog House Pet Salon, we hold ourselves to the highest standards of grooming education. Our courses are meticulously designed to ensure that every student gains comprehensive knowledge and hands-on experience, fostering a deep understanding of pet care and grooming techniques. These programs have taught every groomer at The Dog House Pet Salon over the last 15 years.",
              },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "40px" }}>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "16px" }}>{card.title}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Icons ── */}
      <section style={{ backgroundColor: "#965B83", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "30px" }}>
          {programIcons.map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <Image src={item.img} alt={item.label} width={80} height={80} style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "12px", filter: "brightness(0) invert(1)" }} />
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#ffffff", fontWeight: 600 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programs / Forms ── */}
      <section id="programs" style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "60px" }}>
            Apply to Our Programs
          </h2>
          <div style={{ marginBottom: "80px" }}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "28px", color: "#965B83", marginBottom: "8px" }}>Bathing Program</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginBottom: "30px", lineHeight: 1.7 }}>
              Learn the fundamentals of professional pet bathing — the foundation of every great groomer&apos;s career. Our Bathing Program teaches proper techniques using salon-grade products and equipment.
            </p>
            <BathingProgramForm />
          </div>
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "28px", color: "#965B83", marginBottom: "8px" }}>Basic Grooming</h3>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginBottom: "30px", lineHeight: 1.7 }}>
              Whether you&apos;re just starting your journey as a professional groomer or an experienced groomer aiming to refine your skills, our comprehensive dog grooming training courses are tailored to meet your needs.
            </p>
            <BasicGroomingForm />
          </div>
        </div>
      </section>

      {/* ── Our Groomers ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            Meet Your Instructors
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "30px" }}>
            {groomers.map((g) => (
              <div key={g.name} style={{ textAlign: "center", backgroundColor: "#F8F8F8", borderRadius: "12px", padding: "30px" }}>
                <Image src={g.img} alt={g.name} width={200} height={200} style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", marginBottom: "16px" }} />
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#965B83", fontWeight: 600, marginBottom: "4px" }}>{g.role}</p>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "4px" }}>{g.name}</h3>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "12px" }}>{g.location}</p>
                <Link href={g.href} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: 600, textDecoration: "underline" }}>Read Full Bio</Link>
              </div>
            ))}
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
    </>
  );
}
