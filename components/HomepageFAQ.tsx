"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What pet services do you offer?",
    answer:
      "We offer professional dog grooming at all three locations. Boarding and daycare are available at Galleria and Memorial Park. Pearland specializes in grooming only. All services include bathing, nail filing, teeth brushing, and spa treatments.",
  },
  {
    question: "Which locations offer boarding and daycare?",
    answer:
      "Boarding and daycare services are available at Galleria (5917 Richmond Ave) and Memorial Park (6434 Washington Ave). Pearland (2810 Business Center Dr) offers grooming services only.",
  },
  {
    question: "Does Pearland offer boarding or daycare?",
    answer:
      "No, Pearland specializes exclusively in professional dog grooming. For boarding and daycare, visit Galleria or Memorial Park.",
  },
  {
    question: "What vaccinations are required?",
    answer:
      "Grooming requires a current Bordetella vaccination. Boarding and daycare require Bordetella, Distemper, and Rabies. Influenza is not required but recommended. All vaccinations must be unexpired.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes, you can book grooming appointments online at all three locations or call (713) 820-6140.",
  },
  {
    question: "Do you groom large dogs?",
    answer:
      "Yes, we groom dogs of all sizes. Our professional groomers safely handle large breeds and tailor each session to your dog's specific needs.",
  },
  {
    question: "Is daycare offered with boarding?",
    answer:
      "Yes, at Galleria and Memorial Park. While boarding, your pet enjoys supervised daycare with other dogs, playtime, and enrichment activities.",
  },
];

export default function HomepageFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: "clamp(40px, 10vw, 80px) 20px",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e8e3ed",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <h2
          style={{
            fontFamily: '"Bowlby One SC", Sans-serif',
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "#1F2124",
            marginBottom: "12px",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontFamily: '"Outfit", Sans-serif',
            fontSize: "clamp(14px, 3vw, 16px)",
            color: "#54595F",
            lineHeight: 1.7,
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Have questions about our pet care services? Find answers below.
        </p>

        {/* FAQ list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {faqItems.map((item, index) => (
            <details
              key={index}
              open={expandedIndex === index}
              onClick={(e) => {
                e.preventDefault();
                toggleFAQ(index);
              }}
              style={{
                border: "1px solid #e8e3ed",
                borderRadius: "8px",
                padding: "0",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: expandedIndex === index ? "#f9f7fb" : "#ffffff",
                transition: "background-color 0.2s ease",
              }}
            >
              <summary
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  color: "#1F2124",
                  fontWeight: 500,
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    fontSize: "20px",
                    marginLeft: "16px",
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}
                >
                  ▼
                </span>
              </summary>

              <div
                style={{
                  padding: "0 20px 20px 20px",
                  borderTop: "1px solid #e8e3ed",
                  display: expandedIndex === index ? "block" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Outfit", Sans-serif',
                    fontSize: "clamp(14px, 2.5vw, 16px)",
                    color: "#54595F",
                    lineHeight: 1.7,
                    margin: "0",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"Outfit", Sans-serif',
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#54595F",
              marginBottom: "20px",
            }}
          >
            Still have questions? We're here to help!
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/appointment-request"
              style={{
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                fontFamily: '"Outfit", Sans-serif',
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "44px",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#965B83";
              }}
            >
              Book Appointment
            </a>
            <a
              href="tel:713-820-6140"
              style={{
                backgroundColor: "transparent",
                color: "#965B83",
                padding: "15px 30px",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                fontFamily: '"Outfit", Sans-serif',
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "44px",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                border: "2px solid #965B83",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#965B83";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#965B83";
              }}
            >
              Call 713-820-6140
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
