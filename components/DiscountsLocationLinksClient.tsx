"use client";

import Link from "next/link";

export default function DiscountsLocationLinksClient() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
      <Link href="/galleria-uptown-park-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
        <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Galleria / Uptown Park</h3>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>5917 Richmond Ave, Houston, TX 77057</p>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(713) 820-6140</p>
      </Link>
      <Link href="/memorial-park-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
        <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Memorial Park</h3>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>6434 Washington Ave, Houston, TX 77007</p>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(713) 820-6140</p>
      </Link>
      <Link href="/pearland-location" style={{ backgroundColor: "#f5f5f5", padding: "30px", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s ease", borderLeft: "4px solid #965B83", display: "flex", flexDirection: "column", gap: "12px" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#965B83"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; e.currentTarget.style.color = "inherit"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
        <h3 style={{ fontSize: "1.2rem", margin: "0", fontWeight: "700", color: "inherit" }}>Pearland</h3>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>2810 Business Center Dr #126, Pearland, TX 77584</p>
        <p style={{ fontSize: "0.95rem", margin: "0", opacity: 0.8, color: "inherit" }}>(713) 820-6140</p>
      </Link>
    </div>
  );
}
