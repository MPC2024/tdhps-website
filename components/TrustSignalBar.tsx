/**
 * Trust Signal Bar Component
 * Displays key trust signals: experience, clients, locations, credentials
 * Icons use TDHPS brand purple (#965B83)
 */

const brandPurple = "#965B83";
const brandPink = "#E0598A";

const icons = {
  star: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={brandPurple} stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={brandPurple} stroke="none">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  mapPin: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  video: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const signals = [
  { label: "30+ Years Experience", icon: icons.star },
  { label: "40,000+ Happy Clients", icon: icons.heart },
  { label: "3 Houston-Area Locations", icon: icons.mapPin },
  { label: "Certified Master Groomer", icon: icons.award },
  { label: "Live Webcams Available", icon: icons.video },
  { label: "Hablamos Español", icon: icons.globe },
];

export default function TrustSignalBar() {
  return (
    <section
      style={{
        backgroundColor: "#f9f7fb",
        padding: "30px 20px",
        borderTop: "1px solid #e8e3ed",
        borderBottom: "1px solid #e8e3ed",
      }}
    >
      <div
        style={{
          maxWidth: "1520px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {signals.map((signal, i) => (
          <div
            key={i}
            style={{
              padding: "16px 12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {signal.icon}
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "clamp(12px, 2vw, 14px)",
                color: "#54595F",
                fontWeight: 500,
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {signal.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
