"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import BlogCarousel, { type BlogPost } from "@/components/BlogCarousel";

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
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
    isLarge: true,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
    isLarge: false,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
    isLarge: false,
  },
];

const programIcons = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shampoo.svg", label: "Bathing Techniques" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-brush.svg", label: "Brushing & De-shedding" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/cut.svg", label: "Breed-Specific Cuts" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/scissors.svg", label: "Scissoring Skills" },
];

const howReferralOptions = ["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"];

const groomingBlogPosts: BlogPost[] = [
  { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
  { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
  { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
  { title: "Best Dog Grooming Tools Every Houston Pet Owner Should Have", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/cute-jack-russell-terrier-puppy-studio.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Choose the Right Groomer for Your Dog's Breed", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Puppy's First Grooming Appointment: What to Expect", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Cat Grooming 101: Tips from Houston's Top Stylists", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Signs Your Dog Needs a Professional Grooming Session", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Grooming Anxiety in Dogs: How to Make It Stress-Free", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Why Regular Nail Trims Matter for Your Dog's Health", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/small-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "The Difference Between a Bath & Full Groom Explained", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Seasonal Grooming Tips for Houston Pet Owners", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dark-brown-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
];

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

function OurPromiseSection() {
  const [openPromise, setOpenPromise] = useState<number | null>(null);

  const items = [
    {
      title: "Excellence in Grooming Education",
      content: "At The Dog House Pet Salon, we know that skilled and professional groomers are the heart of the pet care industry. Our professional dog grooming classes are crafted to connect you with passionate experts who provide the knowledge and hands-on experience required for success in this rewarding field. Whether you're just starting your journey as a professional groomer or an experienced groomer aiming to refine your skills, our comprehensive dog grooming training courses are tailored to meet your needs.",
    },
    {
      title: "Support Beyond Graduation",
      content: "At The Dog House Pet Salon, our support doesn't end when you finish your courses. We are committed to your continuous growth and success in the pet grooming industry. Our graduates benefit from ongoing mentorship, career advice, and access to a network of professional groomers. We strive to ensure that each of our students has the resources and guidance needed to build a successful and fulfilling grooming career.",
    },
    {
      title: "A Commitment to Quality",
      content: "At The Dog House Pet Salon, we hold ourselves to the highest standards of grooming education. Our courses are meticulously designed to ensure that every student gains comprehensive knowledge and hands-on experience, fostering a deep understanding of pet care and grooming techniques. We prioritize the well-being and happiness of pets, instilling a sense of responsibility and professionalism in our students. By maintaining rigorous training protocols and up-to-date industry practices, we guarantee that our graduates are equipped to provide top-notch grooming services with confidence and expertise.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/washing-pet-dog-home.jpg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* White overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.2)" }} />
      <div style={{ maxWidth: "1520px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "16px", padding: "48px", width: "850px", maxWidth: "100%", boxShadow: "6px 6px 20px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "32px" }}>
            Our Promise to Students
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
              <div key={i} style={{ borderTop: i === 0 ? "1px solid #e0e0e0" : "none", borderBottom: "1px solid #e0e0e0" }}>
                <button
                  onClick={() => setOpenPromise(openPromise === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", textAlign: "left", gap: "16px" }}
                >
                  <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#1F2124", fontWeight: 500, lineHeight: 1.4 }}>{item.title}</span>
                  <i className={`fa-solid fa-chevron-${openPromise === i ? "up" : "down"}`} style={{ color: "#965B83", fontSize: "14px", flexShrink: 0, transition: "transform 0.2s" }} />
                </button>
                {openPromise === i && (
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, paddingBottom: "18px", margin: 0 }}>
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const programsData = [
  {
    id: "bathing",
    title: "Bathing Program",
    hours: "160 class hours",
    imgUrl: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-shampoo.svg",
    price: "$3,800",
    duration: "4 week course / 160 class hours",
    bullets: [
      "Professional Study Material",
      "Proper bathing and blow-drying",
      "Anatomy",
      "Proper dematting",
      "Skin disorders",
      "Proper ear cleaning",
      "Treatment for eyes and ears",
      "Proper toenail clipping",
      "Proper anal gland expression",
    ],
    footnote: "*This program includes (1 All Breed Dog Grooming Guide, 1 Bathing Apron, 1 Brush, 1 Comb, 1 Dematting Tool and 1 Nail Clipper)",
  },
  {
    id: "basic",
    title: "Basic Program",
    hours: "320 class hours",
    imgUrl: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-brush.svg",
    price: "$5,600",
    duration: "8 week course / 320 class hours",
    bullets: [
      "Professional Study Material",
      "Anatomy",
      "Skin disorders",
      "Treatment for eyes and ears",
      "Proper anal gland expression",
      "Proper bathing and blow-drying",
      "Proper dematting",
      "Proper ear cleaning",
      "Proper toenail clipping",
      "Grooming with blades",
      "Basic scissoring techniques",
    ],
    footnote: "* This program includes (1 All Breed Dog Grooming Guide, 1 Grooming Apron, 1 Brush, 1 Comb, 1 Dematting Tool, 1 Nail Clipper, 1 Clipper, 2 Blades and 3 Scissors)",
  },
  {
    id: "professional",
    title: "Professional Groomer Program",
    hours: "480 class hours",
    imgUrl: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/cut.svg",
    price: "$8,500",
    duration: "12 week program / 480 class hours",
    bullets: [
      "Professional Study Material",
      "Anatomy",
      "Skin disorders",
      "Treatment for eyes and ears",
      "Proper anal gland expression",
      "Proper bathing and blow-drying",
      "Proper dematting",
      "Proper ear cleaning",
      "Proper toe nail clipping",
      "All about blades",
      "Clipper maintenance",
      "Grooming with blades",
      "Grooming with snap-on combs",
      "Advanced scissoring techniques",
      "Open book test on all breeds",
      "Grooming position training",
    ],
    footnote: "*This program includes (1 All Breed Dog Grooming Guide, 1 Grooming Apron, 1 Brush, 1 Comb, 1 Dematting Tool, 1 Nail Clipper, 1 Clipper, 3 Scissors, 5 Blades and 8 Snap-On Combs)",
  },
  {
    id: "franchise",
    title: "Franchise Program",
    hours: "960 class hours",
    imgUrl: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/scissors.svg",
    price: "$25,000",
    duration: "24 week course / 960 Class Hours",
    bullets: [
      "Extensive Business Operations Training",
      "Facility Location and Acquisition Assistance",
      "Access to Financing",
      "Vendor Product and Equipment Contacts",
      "Professional Study Material",
      "Anatomy",
      "Skin disorders",
      "Treatment for eyes and ears",
      "Proper anal gland expression",
      "Thorough bathing and blow-drying",
      "Effective dematting",
      "Safe ear cleaning",
      "Proper toenail clipping",
      "All about blades",
      "Clipper maintenance",
      "Grooming with blades",
      "Grooming with snap-on combs",
      "Advanced scissoring techniques",
      "Open book test on all breeds",
      "Groomer Position Training",
    ],
    footnote: "* This program includes (1 All Breed Dog Grooming Guide, 1 Bathing Apron, 1 Brush, 1 Comb, 1 Dematting Tool and 1 Nail Clipper)",
  },
];

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FranchiseFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredFormat: string;
  franchiseModel: string;
  motivation: string;
  businessExperience: string;
  financialComfort: string;
  skillsToGain: string;
  longTermGoals: string;
  successBelief: string;
  groomingExperience: string;
  geographicArea: string;
  financingPlan: string;
  complianceWilling: string;
  howHeard: string[];
}

function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [formData, setFormData] = useState<FranchiseFormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredFormat: "",
    franchiseModel: "",
    motivation: "",
    businessExperience: "",
    financialComfort: "",
    skillsToGain: "",
    longTermGoals: "",
    successBelief: "",
    groomingExperience: "",
    geographicArea: "",
    financingPlan: "",
    complianceWilling: "",
    howHeard: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({ ...prev, [name]: [...(prev[name as keyof FranchiseFormData] as string[]), value] }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: (prev[name as keyof FranchiseFormData] as string[]).filter((item: string) => item !== value) }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectAll = () => {
    if (formData.howHeard.length > 0) {
      setFormData((prev) => ({ ...prev, howHeard: [] }));
    } else {
      setFormData((prev) => ({ ...prev, howHeard: ["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Franchise Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", preferredFormat: "", franchiseModel: "", motivation: "", businessExperience: "", financialComfort: "", skillsToGain: "", longTermGoals: "", successBelief: "", groomingExperience: "", geographicArea: "", financingPlan: "", complianceWilling: "", howHeard: [] });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "900px",
            width: "90%",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#1F2124",
              padding: "0",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "16px" }}>
                Thank You!
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.6 }}>
                Thank you for your franchise application! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "28px", color: "#1F2124", marginBottom: "8px" }}>
                Apply — Franchise Program
              </h2>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "12px", color: "#54595F", marginBottom: "32px" }}>
                * indicates required fields
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1: 3 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name:"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Preferred Program Format:*
                    </label>
                    <select
                      name="preferredFormat"
                      value={formData.preferredFormat}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <option value="">Select Format</option>
                      <option value="Online">Online</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Which franchise model are you interested in?*
                    </label>
                    <select
                      name="franchiseModel"
                      value={formData.franchiseModel}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <option value="">Select Model</option>
                      <option value="Grooming and Bathing">Grooming and Bathing</option>
                      <option value="Full service pet salon (Grooming, Bathing, Boarding and Doggy Daycare)">Full service pet salon (Grooming, Bathing, Boarding and Doggy Daycare)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      What motivated you to apply for our franchise model?*
                    </label>
                    <textarea
                      name="motivation"
                      placeholder="Your response..."
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Do you have any previous experience in owning or managing a business? If so, please describe your experience.*
                    </label>
                    <textarea
                      name="businessExperience"
                      placeholder="Your response..."
                      value={formData.businessExperience}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Row 4: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      On a scale from 0-5, how comfortable are you with financial management and business operations?*
                    </label>
                    <textarea
                      name="financialComfort"
                      placeholder="Your response..."
                      value={formData.financialComfort}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      What specific skills or knowledge do you hope to gain from our franchise training program?*
                    </label>
                    <textarea
                      name="skillsToGain"
                      placeholder="Your response..."
                      value={formData.skillsToGain}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Row 5: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      What are your long-term goals for your dog grooming franchise?*
                    </label>
                    <textarea
                      name="longTermGoals"
                      placeholder="Your response..."
                      value={formData.longTermGoals}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Why do you believe you would be a successful franchise owner in the pet grooming industry?*
                    </label>
                    <textarea
                      name="successBelief"
                      placeholder="Your response..."
                      value={formData.successBelief}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Row 6: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Have you ever worked in the pet grooming industry, or do you possess any relevant certifications? Please elaborate.*
                    </label>
                    <textarea
                      name="groomingExperience"
                      placeholder="Your response..."
                      value={formData.groomingExperience}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      What is your preferred geographic area for operating a franchise, and why have you chosen this location?*
                    </label>
                    <textarea
                      name="geographicArea"
                      placeholder="Your response..."
                      value={formData.geographicArea}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Row 7: 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Do you have a financing plan in place for the initial franchise investment? Please provide any details you are comfortable sharing.*
                    </label>
                    <textarea
                      name="financingPlan"
                      placeholder="Your response..."
                      value={formData.financingPlan}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "8px" }}>
                      Are you willing to comply with the franchise's operational guidelines and brand standards?*
                    </label>
                    <textarea
                      name="complianceWilling"
                      placeholder="Your response..."
                      value={formData.complianceWilling}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "14px",
                        boxSizing: "border-box",
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Row 8: Checkboxes */}
                <div style={{ marginBottom: "24px" }}>
                  <style>{`
                    .checkbox-grid-franchise {
                      display: grid;
                      grid-template-columns: repeat(4, minmax(0, 1fr));
                      gap: 12px;
                    }
                    @media (max-width: 1023px) {
                      .checkbox-grid-franchise {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                      }
                    }
                    @media (max-width: 639px) {
                      .checkbox-grid-franchise {
                        grid-template-columns: repeat(1, minmax(0, 1fr));
                      }
                    }
                  `}</style>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#1F2124" }}>
                      How did you hear about our franchise opportunities?*
                    </label>
                    <button
                      type="button"
                      onClick={handleSelectAll}
                      style={{
                        backgroundColor: "#965B83",
                        color: "#ffffff",
                        border: "none",
                        padding: "6px 16px",
                        borderRadius: "50px",
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.85")}
                      onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
                    >
                      {formData.howHeard.length > 0 ? "Deselect All" : "Select All"}
                    </button>
                  </div>
                  <div className="checkbox-grid-franchise">
                    {["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"].map((option) => (
                      <label key={option} style={{ display: "flex", alignItems: "center", fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          name="howHeard"
                          value={option}
                          checked={formData.howHeard.includes(option)}
                          onChange={handleChange}
                          style={{ marginRight: "8px", cursor: "pointer" }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Row 9: reCAPTCHA Placeholder */}
                <div style={{ marginBottom: "32px", padding: "16px", border: "1px solid #ddd", borderRadius: "6px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <input type="checkbox" style={{ marginRight: "4px", cursor: "pointer" }} />
                  <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F" }}>
                    I'm not a robot
                  </span>
                  <div style={{ marginLeft: "auto", fontSize: "10px", color: "#999", textAlign: "right" }}>
                    <div>reCAPTCHA</div>
                    <div>Privacy - Terms</div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#965B83",
                    color: "#ffffff",
                    padding: "14px 32px",
                    borderRadius: "50px",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 600,
                    fontSize: "16px",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

interface ApplyModalProps {
  isOpen: boolean;
  programName: string;
  onClose: () => void;
}

interface FormDataState {
  fullName: string;
  email: string;
  phone: string;
  format: string;
  motivation: string;
  animalComfort: string;
  priorExperience: string;
  allergies: string;
  goals: string;
  techniques: string;
  careerGoals: string;
  howHeard: string[];
}

function ApplyModal({ isOpen, programName, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    email: "",
    phone: "",
    format: "",
    motivation: "",
    animalComfort: "",
    priorExperience: "",
    allergies: "",
    goals: "",
    techniques: "",
    careerGoals: "",
    howHeard: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({ ...prev, [name]: [...(prev[name as keyof FormDataState] as string[]), value] }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: (prev[name as keyof FormDataState] as string[]).filter((item: string) => item !== value) }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectAll = () => {
    if (formData.howHeard.length > 0) {
      setFormData((prev) => ({ ...prev, howHeard: [] }));
    } else {
      setFormData((prev) => ({ ...prev, howHeard: ["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", format: "", motivation: "", animalComfort: "", priorExperience: "", allergies: "", goals: "", techniques: "", careerGoals: "", howHeard: [] });
    }, 2000);
  };

  if (!isOpen) return null;

  const programNameLower = programName.toLowerCase().replace(/\s+/g, " ");
  const motivationLabel = `What motivated you to apply to our ${programNameLower} program?`;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "900px",
            width: "100%",
            borderRadius: "12px",
            padding: "40px",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "28px",
              cursor: "pointer",
              color: "#1F2124",
            }}
          >
            ×
          </button>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#1F2124", marginBottom: "12px" }}>Thank You!</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F" }}>Thank you for applying! We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "28px", color: "#1F2124", marginBottom: "6px" }}>
                Apply — {programName}
              </h2>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "24px" }}>
                * indicates required fields
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1 — 3 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                {/* Row 2 — 2 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Which program format are you interested in?*
                    </label>
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", backgroundColor: "#fff", cursor: "pointer" }}
                    >
                      <option value="">Select Format</option>
                      <option value="Online">Online</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      {motivationLabel}*
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                </div>

                {/* Row 3 — 2 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      On a scale from 0-5, how comfortable are you with animals? [0 (not at all) - 5 (I Love Animals)]*
                    </label>
                    <textarea
                      name="animalComfort"
                      value={formData.animalComfort}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Have you had any previous experience in pet grooming or related fields? If so, please describe.*
                    </label>
                    <textarea
                      name="priorExperience"
                      value={formData.priorExperience}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                </div>

                {/* Row 4 — 2 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Do you have any allergies or conditions that we should be aware of that might affect your participation in the program?*
                    </label>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      What do you hope to achieve by completing our program?*
                    </label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                </div>

                {/* Row 5 — 2 Columns */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      Are there any specific techniques or skills you are particularly interested in learning?*
                    </label>
                    <textarea
                      name="techniques"
                      value={formData.techniques}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "6px" }}>
                      What are your career goals within the pet grooming industry?*
                    </label>
                    <textarea
                      name="careerGoals"
                      value={formData.careerGoals}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", boxSizing: "border-box", height: "100px", resize: "vertical" }}
                    />
                  </div>
                </div>

                {/* Row 6 — How Did You Hear */}
                <div style={{ marginBottom: "20px" }}>
                  <style>{`
                    .checkbox-grid-apply {
                      display: grid;
                      grid-template-columns: repeat(4, minmax(0, 1fr));
                      gap: 12px;
                      margin-bottom: 12px;
                    }
                    @media (max-width: 1023px) {
                      .checkbox-grid-apply {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                      }
                    }
                    @media (max-width: 639px) {
                      .checkbox-grid-apply {
                        grid-template-columns: repeat(1, minmax(0, 1fr));
                      }
                    }
                  `}</style>
                  <label style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", fontWeight: 600, color: "#1F2124", display: "block", marginBottom: "12px" }}>
                    How did you hear about our program?*
                  </label>
                  <div className="checkbox-grid-apply">
                    {["Existing Customer", "Google/Internet Search", "Social Media", "Referral from a Friend", "Drive By", "Website", "Other"].map((option) => (
                      <label key={option} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: '"Outfit", sans-serif', fontSize: "14px", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          name="howHeard"
                          value={option}
                          checked={formData.howHeard.includes(option)}
                          onChange={handleChange}
                          style={{ accentColor: "#965B83", cursor: "pointer" }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    style={{
                      backgroundColor: "#965B83",
                      color: "#ffffff",
                      padding: "8px 20px",
                      borderRadius: "50px",
                      border: "none",
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 600,
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    {formData.howHeard.length > 0 ? "Deselect All" : "Select All"}
                  </button>
                </div>

                {/* Row 7 — reCAPTCHA Placeholder */}
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    padding: "12px",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <input type="checkbox" style={{ accentColor: "#965B83", cursor: "pointer", width: "20px", height: "20px" }} />
                  <div>
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#1F2124", margin: 0, fontWeight: 600 }}>
                      I&apos;m not a robot
                    </p>
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#54595F", margin: "4px 0 0 0" }}>
                      reCAPTCHA
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#965B83",
                    color: "#ffffff",
                    padding: "15px",
                    borderRadius: "50px",
                    border: "none",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = "1")}
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function ProgramsTabbed() {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showFranchiseModal, setShowFranchiseModal] = useState(false);
  const active = programsData[activeTab];

  const handleApplyClick = (idx: number) => {
    if (idx < 3) {
      setShowModal(true);
    } else if (idx === 3) {
      setShowFranchiseModal(true);
    }
  };

  return (
    <>
      <section id="programs" style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          {/* Header */}
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,50px)", color: "#1F2124", textAlign: "center", marginBottom: "60px", lineHeight: 1.2 }}>
            These programs have taught every groomer at The Dog House Pet Salon over the last 15 years...
          </h2>

          {/* Tab Buttons */}
          <div style={{ display: "flex", gap: "16px", marginBottom: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            {programsData.map((prog, idx) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 20px",
                  backgroundColor: activeTab === idx ? "rgba(150, 91, 131, 0.5)" : "#f3eaf6",
                  color: activeTab === idx ? "#965b83" : "#1F2124",
                  border: "2px solid #965B83",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  minWidth: "200px",
                  textAlign: "left",
                }}
              >
                <img src={prog.imgUrl} alt={prog.title} style={{ width: "40px", height: "40px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{prog.title}</div>
                  <div style={{ fontSize: "12px", opacity: 0.8 }}>{prog.hours}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "12px", borderBottom: "1px solid #000", alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", alignItems: "center" }}>
              {/* Left Column */}
              <div>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "16px" }}>
                  {active.title}
                </h3>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "32px", color: "#965B83", fontWeight: 700, marginBottom: "12px" }}>
                  {active.price}
                </p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "24px", lineHeight: 1.6 }}>
                  {active.duration}
                </p>
                <button
                  onClick={() => handleApplyClick(activeTab)}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#965B83",
                    color: "#ffffff",
                    padding: "12px 32px",
                    borderRadius: "50px",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Apply Now
                </button>
              </div>

              {/* Middle Column — Icon */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={active.imgUrl} alt={active.title} style={{ width: "220px", height: "220px", objectFit: "contain" }} />
              </div>

              {/* Right Column — Bullets */}
              <div>
                <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.8, listStyle: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
                  {active.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: "8px" }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "12px", color: "#54595F", fontStyle: "italic", borderTop: "1px solid #e0e0e0", paddingTop: "16px" }}>
                  {active.footnote}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginTop: "60px", lineHeight: 1.8, maxWidth: "900px", margin: "60px auto 0" }}>
            Whether you&apos;re interested in pet grooming classes, or seeking reputable dog grooming courses, The Dog House Pet Salon&apos;s grooming school is your gateway to a rewarding career in the pet care industry. Contact us today to learn more about our professional dog grooming programs and take the first step toward an exciting and fulfilling career as a professional groomer.
          </p>
        </div>
      </section>

      {/* Modal */}
      <ApplyModal isOpen={showModal} programName={active.title} onClose={() => setShowModal(false)} />
      <FranchiseModal isOpen={showFranchiseModal} onClose={() => setShowFranchiseModal(false)} />
    </>
  );
}

export default function GroomingSchoolClient() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/Woman-trimming-dog.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 0 }} />
        {/* Curved SVG bottom */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        {/* Content — dark text since white overlay */}
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 3 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,72px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            Houston&apos;s Premiere Dog <span style={{ color: "#965B83" }}>Grooming School</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
            Start your pet grooming career learning from experienced dog groomers with decades of experience.
          </p>
          <a href="#programs" style={{ backgroundColor: "#965B83", color: "#ffffff", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
            View Our Programs
          </a>
        </div>
      </section>

      {/* ── Professional Pet Grooming School + Video ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            {/* Left Column */}
            <div style={{ textAlign: "left" }}>
              <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,50px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.2 }}>
                Professional Pet <span style={{ color: "#965B83" }}>Grooming School!</span>
              </h2>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", marginBottom: "24px", lineHeight: 1.7 }}>
                Learn professional pet grooming techniques from industry experts. Our comprehensive program teaches everything you need to become a skilled groomer, from basic bathing to advanced breed-specific cuts.
              </p>
              <a href="#programs" style={{ backgroundColor: "#965B83", color: "#ffffff", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: "18px", display: "inline-block", textDecoration: "none" }}>
                Explore Programs
              </a>
            </div>

            {/* Right Column — Video Player */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "6px 6px 20px rgba(0,0,0,0.15)",
              }}
            >
              <video
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                controls
                poster="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Screenshot-1404-01-31-at-6.42.38%E2%80%AFAM.png"
              >
                <source src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/donna-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <OurPromiseSection />

      {/* ── Programs / Tabbed Section ── */}
      <ProgramsTabbed />

      {/* ── Student Review Video Section ── */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left Column — Video Player */}
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 20px rgba(0,0,0,0.25)" }}>
            <video
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
              controls
              poster="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Screenshot-1404-01-31-at-6.52.15%E2%80%AFAM-1.png"
            >
              <source src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/Student-Review-Video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column — Text Content */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,48px)", color: "#ffffff", marginBottom: "24px", lineHeight: 1.1 }}>
              What Our Students Are Saying
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#ffffff", lineHeight: 1.8 }}>
              See what our students have to say about their hands-on experience and career success after graduation!
            </p>
          </div>
        </div>
      </section>

      {/* ── Donna Williams Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left Column — Text */}
          <div>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#965B83", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>
              HOUSTON'S #1
            </p>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,52px)", color: "#965B83", marginBottom: "24px", lineHeight: 1.1 }}>
              PET GROOMING SERVICE
            </h2>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px", fontWeight: 600 }}>
              Her Highlights:
            </h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, listStyle: "none", paddingLeft: 0, marginBottom: "24px" }}>
              {[
                "30+ years of grooming experience",
                "Built a successful pet salon in Houston, TX (15 yrs and counting)",
                "3 convenient location serving Houston, Pearland, and the surrounding areas",
                "Groomed over 50,000 dogs",
                "Rescued 500+ dogs",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
                  <i className="fa-solid fa-check-circle" style={{ color: "#965B83", marginTop: "4px", flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              Donna believes in high-quality grooming with top-notch safety and care for every dog.
            </p>
          </div>

          {/* Right Column — Image with rounded corners */}
          <div style={{ position: "relative" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-17.jpg"
              alt="Donna Williams - Master Pet Groomer"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(150,91,131,0) 0%, rgba(150,91,131,0.3) 100%)",
              borderRadius: "12px",
            }} />
          </div>
        </div>
      </section>

      {/* ── Our Groomers ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            Meet Your Instructors
          </h2>
          <div className="groomers-grid" style={{ gap: "30px" }}>
            {groomers.map((g) => (
              <div key={g.name} style={{ backgroundColor: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "6px 6px 9px rgba(0,0,0,.08)", textAlign: "center" }}>
                <Image src={g.img} alt={g.name} width={500} height={500} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                <div style={{ padding: "30px 24px" }}>
                  <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "13px", color: "#965B83", letterSpacing: "1px", marginBottom: "4px" }}>{g.role}</p>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "4px" }}>{g.name}</h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", marginBottom: "20px" }}>{g.location}</p>
                  <Link href={g.href} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#fff", fontWeight: 600, textDecoration: "none", backgroundColor: "#965B83", padding: "10px 20px", borderRadius: "50px", display: "inline-block" }}>Read Full Bio</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F8F8F8",
        padding: "80px 20px",
        position: "relative",
      }}>
        {/* White overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFF",
          opacity: 0.7,
          zIndex: 1,
        }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(26px,3vw,40px)",
            color: "#000",
            textAlign: "center",
            marginBottom: "12px",
          }}>
            Train at One of Our Locations
          </h2>
          <p style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "16px",
            color: "#54595F",
            textAlign: "center",
            marginBottom: "50px",
          }}>
            We have dog grooming schools at each of our 3 locations in Houston.
          </p>

          {/* 2-Column Layout: Large card on left, stacked cards on right */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "stretch",
          }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div style={{
              backgroundColor: "#965B83",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              alignItems: "center",
              minHeight: "100%",
            }}>
              {/* Image */}
              <div style={{
                flex: "0 0 200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src={locations[0].img}
                  alt={locations[0].address}
                  width={200}
                  height={200}
                  quality={85}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px" }} />
                  <h3 style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].address}
                  </h3>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p key={h} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#fff",
                      margin: "4px 0",
                      lineHeight: 1.6,
                      letterSpacing: "0.3px",
                    }}>
                      {h}
                    </p>
                  ))}
                </div>

                <p style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "18px",
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}>
                  {locations[0].option}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px" }} />
                  <p style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].phone}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }} />
                  <a href={`mailto:${locations[0].email}`} style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    textDecoration: "none",
                  }}>
                    {locations[0].email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards (Washington Ave + Business Center) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {/* Washington Ave Card */}
              <div style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                {/* Image */}
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[1].img}
                    alt={locations[1].address}
                    width={150}
                    height={150}
                    quality={85}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].address}
                    </h3>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    {locations[1].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>

                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[1].option}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].phone}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[1].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[1].email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Center Card */}
              <div style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                {/* Image */}
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[2].img}
                    alt={locations[2].address}
                    width={150}
                    height={150}
                    quality={85}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].address}
                    </h3>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    {locations[2].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>

                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[2].option}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].phone}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[2].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[2].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Fact */}
          <p style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "16px",
            color: "#54595F",
            textAlign: "center",
            marginTop: "50px",
          }}>
            Fun Fact: Most of our in-person students are from the local communities, including Pearland, The Heights, Montrose, The Galleria, Uptown Park, and beyond.
          </p>
        </div>
      </section>

      {/* ── A Letter From Our Master Trainer ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px 130px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          {/* Left Column — Heading */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,60px)", color: "#965B83", lineHeight: 1.1, marginBottom: "0px" }}>
              A LETTER FROM OUR MASTER TRAINER
            </h2>
          </div>

          {/* Right Column — Letter Content */}
          <div>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#1F2124", marginBottom: "24px" }}>
              TRAIN AT ONE OF OUR LOCATIONS
            </h3>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              Welcome to The Dog House Pet Salon Grooming School! My name is Donna Williams, and I'm excited to tell you about our dog grooming program here in Houston, Texas.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              When I started grooming pets over 25 years ago, it was tough. I didn't have anyone to show me the ropes, and there were so many things I had to figure out on my own. I prayed for a school that could teach me everything I needed to know to be successful.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              That's why I decided to start our grooming school – to help people like you who want to learn and succeed in pet grooming. After starting my first shop over 15 years ago, and now having 3 locations, I can tell you a thing or two about successful dog grooming.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              I designed our program to give you a ton of hands-on practice and real-world experience. One of the hardest things I faced was learning to groom pets quickly but still make them look great.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              That's why we focus on practical skills you'll use daily. We don't teach fancy stuff like color dyeing or crazy haircuts. Instead, we'll show you how to do high-quality grooming quickly with standard cuts that customers love. I'll share all my secret tricks to help you work efficiently and make pets look their best.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              At The Dog House Pet Salon Grooming School, we create a friendly and challenging learning environment.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              You'll learn everything from basic grooming to advanced styles, working with different breeds to learn how to meet each pet's unique needs.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              Work with experienced groomers in our busy salon, and it will build your skills and confidence, so you're ready for any grooming challenge.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "16px" }}>
              We are proud to be part of the Houston community and want to help it grow by training skilled and caring pet groomers. Many of our graduates have successful careers, and some even open their own salons. We're very proud of them and can't wait to see what you will achieve.
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "32px" }}>
              Excited to start a career in dog grooming? We invite you to sign up for The Dog House Pet Salon Grooming School. We look forward to helping you reach your grooming dreams!
            </p>

            {/* Signature */}
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "24px", color: "#965B83", fontStyle: "italic", marginBottom: "4px", margin: 0 }}>
              Warmly
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "28px", color: "#965B83", fontStyle: "italic", marginBottom: "4px", fontWeight: 600 }}>
              Donna Williams
            </p>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginBottom: "24px" }}>
              Master Trainer
            </p>

            <Link
              href="/donna-williams"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Read Full Bio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "80px 20px 160px", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#FFF", textAlign: "center", marginBottom: "12px" }}>
            Discover Expert Advice and the Latest Trends
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#FFF", textAlign: "center", marginBottom: "48px" }}>
            Stay informed with our blog, featuring tips and trends to help you keep your pets happy, healthy, and well cared for.
          </p>
          <BlogCarousel posts={groomingBlogPosts} />
        </div>
      </section>
    </>
  );
}
