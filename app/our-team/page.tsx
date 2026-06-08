import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Meet Our Team | The Dog House Pet Salon Houston",
  description:
    "Meet the certified groomers and pet care specialists at The Dog House Pet Salon. 30+ years of combined experience serving Houston pets with love and expertise.",
  openGraph: {
    title: "Meet Our Team | The Dog House Pet Salon Houston",
    description:
      "Certified groomers and pet care specialists with 30+ years of combined experience.",
    url: "https://www.thedoghouseps.com/our-team/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/our-team/" },
};

const heroSvgPath =
  "M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z";

const teamMembers = [
  {
    name: "Donna Williams",
    title: "Owner & Certified Master Groomer",
    experience: "30+ years",
    specialty: "Breed-specific cuts",
    bio: "Donna founded The Dog House Pet Salon with a passion for providing exceptional pet care. Her expertise in breed-specific grooming and dedication to her craft has made her a beloved figure in Houston's pet community. She personally ensures every pet receives the highest standard of care.",
    image: "/images/team/donna.webp",
  },
  {
    name: "Maria Santos",
    title: "Senior Groomer",
    experience: "15 years",
    specialty: "Large breed specialist",
    bio: "Maria is a certified groomer with extensive experience handling large breed dogs. Her bilingual skills (English/Spanish) make her invaluable to our diverse clientele. Clients love her calm demeanor and ability to work with anxious or rescue dogs.",
    image: "/images/team/maria.webp",
  },
  {
    name: "Keylin O.",
    title: "Lead Groomer - Galleria",
    experience: "10 years",
    specialty: "Puppy grooming expert",
    bio: "Keylin specializes in introducing puppies to professional grooming in a stress-free environment. Her patience and gentle touch make her the go-to groomer for young pups and anxious pets. She stays current with all grooming trends and techniques.",
    image: "/images/team/keylin.webp",
  },
  {
    name: "Sarah Chen",
    title: "Boarding & Daycare Manager",
    experience: "8 years",
    specialty: "Pet behavior specialist",
    bio: "Sarah manages all boarding and daycare operations with meticulous attention to pet welfare. Her certification in pet behavior ensures every dog receives personalized care and socialization. She monitors health and happiness with daily webcam check-ins.",
    image: "/images/team/sarah.webp",
  },
  {
    name: "James Rodriguez",
    title: "Bathing Specialist",
    experience: "5 years",
    specialty: "De-shedding and coat care",
    bio: "James brings energy and care to every bath. His de-shedding and coat conditioning expertise helps dogs maintain healthy, beautiful coats. Pet owners rave about how clean and refreshed their dogs feel after James's work.",
    image: "/images/team/james.webp",
  },
  {
    name: "Ashley Williams",
    title: "Front Desk Manager",
    experience: "7 years",
    specialty: "Scheduling and client relations",
    bio: "Ashley is the friendly face that greets every pet and owner. Her scheduling expertise and knowledge of our services ensure smooth operations. Bilingual English/Spanish, she builds lasting relationships with every client.",
    image: "/images/team/ashley.webp",
  },
];

export default function OurTeamPage() {
  // Person schema for each team member
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: teamMembers.map((member) => ({
      "@type": "Person",
      "@id": `https://www.thedoghouseps.com/our-team/#${member.name.replace(/\s+/g, '-').toLowerCase()}`,
      name: member.name,
      jobTitle: member.title,
      affiliation: {
        "@type": "Organization",
        name: "The Dog House Pet Salon",
      },
      description: member.bio,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(160px, 20vh, 220px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp"
          alt="The Dog House Pet Salon team"
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          sizes="100vw"
          priority
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff", opacity: 0.6, zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d={heroSvgPath} />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 3 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            Meet the Team Behind <span style={{ color: "#965B83" }}>Houston's Most Trusted Pet Salon</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px, 2vw, 20px)", color: "#54595F", maxWidth: "700px" }}>
            30+ years of combined expertise. Certified groomers. Pet-first philosophy. Meet the people who care for your furry family.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px, 3vw, 40px)", color: "#1F2124", marginBottom: "24px" }}>
            Pet Care Excellence Through <span style={{ color: "#965B83" }}>People Who Care</span>
          </h2>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: 0 }}>
            Every member of The Dog House team is committed to treating your pet like family. With certifications in grooming, pet behavior, and animal care, our staff brings both expertise and genuine love for what they do. We believe in continuous learning and staying current with the latest techniques and best practices in pet care.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ backgroundColor: "#f8f5f6", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#1F2124", marginBottom: "60px", textAlign: "center" }}>
            Our Team Members
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                id={member.name.replace(/\s+/g, '-').toLowerCase()}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Placeholder for team photo - replace with actual images */}
                <div
                  style={{
                    backgroundColor: "#965B83",
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "60px",
                  }}
                >
                  {member.name.charAt(0)}
                </div>

                {/* Content */}
                <div style={{ padding: "32px" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", margin: "0 0 8px 0" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontWeight: "600", margin: "0 0 16px 0" }}>
                    {member.title}
                  </p>

                  <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "13px", color: "#54595F" }}>
                    <span>{member.experience} experience</span>
                    <span>•</span>
                    <span>{member.specialty}</span>
                  </div>

                  <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Videos */}
      <VideoSection
        title="Meet Our Team in Action"
        subtitle="Watch our groomers and care specialists do what they love most"
        videos={[
          {
            title: "Meet Our Groomers",
            category: "Team",
            duration: "2:00",
          },
          {
            title: "Behind the Scenes",
            category: "Team",
            duration: "3:10",
          },
          {
            title: "Staff Introductions",
            category: "Team",
            duration: "2:45",
          },
        ]}
        layout="3-col"
      />

      {/* CTA Section */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 4vw, 48px)", color: "#ffffff", marginBottom: "24px" }}>
            Ready to Meet Our Team?
          </h2>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: "16px", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.8, marginBottom: "40px" }}>
            Schedule your pet's appointment today and experience the care difference that our certified team brings to every visit.
          </p>
          <Link
            href="/appointment-request"
            className="hover:shadow-lg hover:translate-y-[-2px] transition-all"
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#965B83",
              padding: "14px 40px",
              borderRadius: "6px",
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
