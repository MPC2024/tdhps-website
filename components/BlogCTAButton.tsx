"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogCTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/appointment-request"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        fontFamily: '"Outfit", sans-serif',
        fontSize: "18px",
        fontWeight: 600,
        padding: "15px 30px",
        borderRadius: "50px",
        textDecoration: "none",
        border: "2px solid #ffffff",
        backgroundColor: hovered ? "#ffffff" : "transparent",
        color: hovered ? "#965B83" : "#ffffff",
        transition: "all 2s ease",
      }}
    >
      Schedule An Appointment
    </Link>
  );
}
