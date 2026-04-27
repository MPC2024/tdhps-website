"use client";

import Link from "next/link";
import DiscountsCTAText from "@/components/DiscountsCTAText";

export default function DiscountsCTAClient() {
  return (
    <section style={{ background: "linear-gradient(135deg, #965B83 0%, #B8769D 100%)", padding: "80px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto", padding: "0 20px" }}>
        <DiscountsCTAText />
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
          <Link href="/appointment-request/" style={{ display: "inline-block", backgroundColor: "#fff", color: "#965B83", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            Book an Appointment
          </Link>
          <Link href="/contact-us" style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "1rem", border: "2px solid #fff", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
