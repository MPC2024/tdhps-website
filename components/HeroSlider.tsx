"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  imgSrc: string;
  imgAlt: string;
  subheading: string;
  heading: React.ReactNode;
  text: string;
}

const slides: Slide[] = [
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: <>We take care of <span style={{ color: "#965B83" }}>your pets</span></>,
    text: "Whether it's a bubbly bath, a stylish trim, or just a little pampering, your pet deserves the best. Book today and let us treat your furry friend like family.",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-2.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: <>Treat Your <span style={{ color: "#965B83" }}>pet to a spa</span> day</>,
    text: "Pampering pets with love, care, and style — book your pet's spa day today!",
  },
  {
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-3.webp",
    imgAlt: "The dog house pet salon hero",
    subheading: "THE DOG HOUSE Pet Salon",
    heading: <>Experience <span style={{ color: "#965B83" }}>Joy and care</span></>,
    text: "A pet's wagging tail or soft purr brings instant joy—pure, simple, and unconditional.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "clamp(700px, 62.5vw, 900px)",
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
            zIndex: i === current ? 1 : 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background image */}
          <Image
            src={slide.imgSrc}
            alt={slide.imgAlt}
            fill
            priority={i === 0}
            style={{ objectFit: "cover", zIndex: 0 }}
            sizes="100vw"
          />
          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "10px 30px",
              width: "100%",
              maxWidth: "1520px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "clamp(280px, 50%, 700px)",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  fontWeight: 500,
                  fontFamily: '"Outfit", Sans-serif',
                  color: "#6B4562",
                }}
              >
                {slide.subheading}
              </p>
              <h1
                style={{
                  fontSize: "clamp(36px, 4.17vw, 60px)",
                  marginBottom: "15px",
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  color: "#000",
                  lineHeight: 1.2,
                }}
              >
                {slide.heading}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "50px",
                  color: "#000",
                  fontFamily: '"Outfit", Sans-serif',
                }}
              >
                {slide.text}
              </p>
              <Link
                href="/appointment-request"
                style={{
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "15px 30px",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontFamily: '"Outfit", Sans-serif',
                  display: "inline-block",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#965B83";
                }}
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Curved bottom border */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80px",
          zIndex: 3,
          display: "block",
        }}
      >
        <path
          d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
