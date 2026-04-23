"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const services = [
  {
    label: "loc_service_pet_grooming",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-grooming.png",
    desc: "loc_service_grooming_desc",
    link: "/pet-grooming",
    linkText: "loc_service_priced_by",
  },
  {
    label: "loc_service_pet_bathing",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-bathing.png",
    desc: "loc_service_bathing_desc",
    link: "/pet-bathing",
    linkText: "loc_service_priced_by",
  },
  {
    label: "loc_service_pet_boarding",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png",
    desc: "loc_service_boarding_desc",
    link: "/houston-pet-boarding",
    linkText: "loc_service_pricing_details",
  },
  {
    label: "loc_service_doggie_daycare",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/doggie-daycare.png",
    desc: "loc_service_daycare_desc",
    price: "loc_service_daycare_price",
  },
  {
    label: "loc_service_nail_file",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/pet-boarding.png",
    desc: "loc_service_nail_file_desc",
    price: "loc_service_nail_file_price",
  },
  {
    label: "loc_service_teeth_brush",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/04/teeth-brush.png",
    desc: "loc_service_teeth_brush_desc",
    price: "loc_service_teeth_brush_price",
  },
];

export default function MemorialServicesSection() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(26px,3vw,40px)",
            color: "#1F2124",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          {t("location_services_heading")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {services.map((svc) => (
            <div key={svc.label} style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "30px 20px", textAlign: "center", boxShadow: "6px 6px 9px rgba(0,0,0,.1)" }}>
              <Image src={svc.img} alt={t(svc.label as any)} width={80} height={80} style={{ width: "80px", height: "80px", objectFit: "contain", margin: "0 auto 16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px" }}>{t(svc.label as any)}</h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.6 }}>
                {t(svc.desc as any)}{"link" in svc && svc.link ? <> (<Link href={svc.link} style={{ color: "#965B83" }}>{t(svc.linkText as any)}</Link>)</> : null}{"price" in svc && svc.price ? ` (${t(svc.price as any)})` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
