"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const groomers = [
  {
    name: "Keylin Paulina Orellana Delcid",
    roleKey: "staff_master_groomer" as const,
    location: "Galleria / Uptown Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
    href: "/keylin-paulina-orellana-delcid",
  },
  {
    name: "Donna Williams",
    roleKey: "donna_hero_title" as const,
    location: "",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-17-918x1024.jpg",
    href: "/donna-williams",
  },
  {
    name: "Margarita Batres",
    roleKey: "staff_master_groomer" as const,
    location: "Pearland",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg",
    href: "/margarita-batres",
  },
  {
    name: "Francy Quevedo",
    roleKey: "staff_master_groomer" as const,
    location: "Memorial Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg",
    href: "/francy-quevedo",
  },
];

interface Props {
  exclude?: string;
}

export default function LocationGroomersSection({ exclude }: Props) {
  const { t } = useLanguage();
  const filteredGroomers = exclude ? groomers.filter(g => g.href !== exclude) : groomers;

  return (
    <section style={{
      position: "relative",
      backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image53-scaled.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "80px 20px",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.85, zIndex: 0 }} />

      <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,50px)", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
          {t("staff_our_pet_groomers")}
        </h2>

        <style dangerouslySetInnerHTML={{ __html: `
          .location-groomers-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 900px) {
            .location-groomers-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .location-groomers-grid {
              grid-template-columns: 1fr;
            }
          }
        `}} />

        <div className="location-groomers-grid">
          {filteredGroomers.map((g) => (
            <div key={g.name} style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "20px",
              padding: "40px 24px",
              textAlign: "center",
              border: "1px solid rgba(150,91,131,0.15)",
            }}>
              <div style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 20px",
                border: "4px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}>
                <Image
                  src={g.img}
                  alt={g.name}
                  width={200}
                  height={200}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "4px" }}>
                {t(g.roleKey)}
              </h3>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "8px" }}>
                {g.name}
              </p>
              {g.location && (
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontStyle: "italic", marginBottom: "16px" }}>
                  {g.location}
                </p>
              )}
              {!g.location && <div style={{ marginBottom: "16px" }} />}
              <Link
                href={g.href}
                style={{
                  display: "inline-block",
                  backgroundColor: "#965B83",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {t("staff_read_full_bio")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
