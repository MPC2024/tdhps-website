import type { Metadata } from "next";
import Link from "next/link";
import CancellationPolicyHeroText from "@/components/CancellationPolicyHeroText";
import CancellationPolicySections from "@/components/CancellationPolicySections";
import CancellationPolicyCTA from "@/components/CancellationPolicyCTA";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Learn about The Dog House Pet Salon's cancellation policy, designed to give you flexibility with your pet care appointments in Houston.",
  openGraph: {
    title: "Cancellation Policy",
    description:
      "Learn about The Dog House Pet Salon's cancellation policy, designed to give you flexibility with your pet care appointments in Houston.",
    url: "https://www.thedoghouseps.com/cancellation-policy/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/cancellation-policy/" },
};

export default function CancellationPolicyPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "60vh" }}>
      {/* Hero Banner */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogDaycare-300x300.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* White overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <CancellationPolicyHeroText />
        </div>
        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 20px 100px", maxWidth: "900px", margin: "0 auto" }}>
        <CancellationPolicySections />
        <CancellationPolicyCTA />
      </section>
    </main>
  );
}
