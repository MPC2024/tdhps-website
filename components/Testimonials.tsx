'use client';

import React from 'react';

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Galleria",
    pet: "Golden Retriever",
    text: "We've been bringing Max here for 5 years. The groomers know exactly how he likes his cut and he actually gets excited to go!",
  },
  {
    name: "Carlos R.",
    location: "Memorial Park",
    pet: "French Bulldog",
    text: "Best boarding facility in Houston. The webcams give me peace of mind when I travel. My Frenchie loves the daycare staff.",
  },
  {
    name: "Sarah T.",
    location: "Pearland",
    pet: "Poodle Mix",
    text: "The grooming team is incredibly patient with my anxious rescue. They take the time to make her feel safe. Couldn't ask for more.",
  },
  {
    name: "Michael D.",
    location: "River Oaks",
    pet: "German Shepherd",
    text: "Finally found a groomer who can handle large breeds properly. The de-shedding treatment is amazing - my house is so much cleaner!",
  },
  {
    name: "Lisa P.",
    location: "Heights",
    pet: "Shih Tzu",
    text: "Love that they speak Spanish - makes everything so much easier for my mom. The staff is always friendly and professional.",
  },
  {
    name: "David K.",
    location: "Friendswood",
    pet: "Labrador",
    text: "The daycare has been a game-changer for our Lab's energy levels. He comes home tired and happy every time.",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#f8f5f6", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#1F2124",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          What Pet Owners Love About{" "}
          <span style={{ color: "#965B83" }}>The Dog House</span>
        </h2>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "16px",
            color: "#54595F",
            textAlign: "center",
            marginBottom: "48px",
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}
        >
          Real reviews from real pet owners across Houston who trust us with
          their furry family members.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                padding: "28px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  marginBottom: "14px",
                  color: "#965B83",
                  fontSize: "16px",
                }}
              >
                {"★ ★ ★ ★ ★"}
              </div>
              <p
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: "15px",
                  color: "#1F2124",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                style={{
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: "14px",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1F2124",
                    margin: "0 0 2px 0",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: "12px",
                    color: "#54595F",
                    margin: 0,
                  }}
                >
                  {t.pet} &bull; {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
