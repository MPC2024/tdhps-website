"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

const HIDDEN_ON = ["/cancellation-policy", "/blog", "/galleria-uptown-park-location", "/memorial-park-location", "/pearland-location"];

export default function StoreLocations() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"galleria" | "memorial" | "pearland">("galleria");

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  const getTabText = (id: string): string => {
    switch (id) {
      case "galleria":
        return t("galleria_location");
      case "memorial":
        return t("memorial_location");
      case "pearland":
        return t("pearland_location");
      default:
        return id;
    }
  };

  const tabs = [
    { id: "galleria" },
    { id: "memorial" },
    { id: "pearland" },
  ];

  const maps = {
    galleria: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.608356167197!2d-95.48587042302354!3d29.731101933346256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d0d3c86635%3A0x907f8ce8816292c5!2sThe%20Dog%20House%20Pet%20Salon%20-%20Galleria!5e0!3m2!1sen!2sph!4v1775807330986!5m2!1sen!2sph"
        title="Google Maps - The Dog House Pet Salon Galleria Location"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    memorial: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.5!2d-95.4685!3d29.7635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6434%20Washington%20Ave%2C%20Houston%2C%20TX%2077007%2C%20USA!5e0!3m2!1sen!2sus!4v1777326000000!5m2!1sen!2sus"
        title="Google Maps - The Dog House Pet Salon Memorial Park Location"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    pearland: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.605565937552!2d-95.3920789!3d29.556979000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640933369770417%3A0x33fab8848295e333!2s2810%20Business%20Center%20Dr%2C%20Pearland%2C%20TX%2077584%2C%20USA!5e0!3m2!1sen!2sph!4v1775807459117!5m2!1sen!2sph"
        title="Google Maps - The Dog House Pet Salon Pearland Location"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  };

  const tabButtonStyle = (tabId: string): React.CSSProperties => ({
    fontFamily: '"Bowlby One SC", sans-serif',
    fontSize: "clamp(13px, 3vw, 16px)",
    fontWeight: 400,
    height: "clamp(80px, 20vw, 165px)",
    padding: "12px clamp(8px, 3vw, 24px)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
    minWidth: "clamp(100px, 25vw, 200px)",
    borderStyle: "dashed",
    borderWidth: "3px",
    ...(activeTab === tabId
      ? {
          borderColor: "#FFF",
          backgroundColor: "#965B83",
          color: "#FFF",
        }
      : {
          borderColor: "#965B83",
          backgroundColor: "#ffffff",
          color: "#965B83",
        }),
  });

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 20px 135px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
        {/* Tabs Container with Negative Margin */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "40px",
            marginTop: "-150px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 10,
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "galleria" | "memorial" | "pearland")}
              style={tabButtonStyle(tab.id)}
            >
              <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.4 }}>
                {getTabText(tab.id).split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </span>
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div style={{ marginTop: "40px" }}>
          {maps[activeTab]}
        </div>
      </div>
    </section>
  );
}
