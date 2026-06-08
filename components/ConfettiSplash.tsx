"use client";

import { useState } from "react";

/**
 * ConfettiSplash — decorative paint splatter/confetti dots for section corners.
 * Used on service/pricing sections to add visual interest to white backgrounds.
 * Renders SVG splatters in top-left and bottom-right corners by default.
 */
export function ConfettiSplash() {
  return (
    <>
      {/* Top-left corner splash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="25" r="4" fill="#965B83" opacity="0.3" />
          <circle cx="45" cy="12" r="3" fill="#965B83" opacity="0.2" />
          <circle cx="30" cy="55" r="5" fill="#965B83" opacity="0.15" />
          <circle cx="8" cy="70" r="3" fill="#965B83" opacity="0.25" />
          <circle cx="60" cy="35" r="2" fill="#965B83" opacity="0.35" />
          <circle cx="25" cy="90" r="4" fill="#965B83" opacity="0.12" />
          <circle cx="75" cy="18" r="3" fill="#965B83" opacity="0.18" />
          <circle cx="50" cy="65" r="6" fill="#965B83" opacity="0.1" />
          <circle cx="12" cy="45" r="2" fill="#965B83" opacity="0.3" />
          <circle cx="85" cy="50" r="3" fill="#965B83" opacity="0.15" />
          <circle cx="40" cy="40" r="7" fill="#965B83" opacity="0.08" />
          <circle cx="65" cy="80" r="2" fill="#965B83" opacity="0.2" />
          <circle cx="95" cy="30" r="4" fill="#965B83" opacity="0.12" />
          <circle cx="20" cy="110" r="3" fill="#965B83" opacity="0.15" />
          <circle cx="110" cy="15" r="2" fill="#965B83" opacity="0.2" />
        </svg>
      </div>

      {/* Top-right corner splash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          transform: "scaleX(-1)",
        }}
      >
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="25" r="4" fill="#965B83" opacity="0.3" />
          <circle cx="45" cy="12" r="3" fill="#965B83" opacity="0.2" />
          <circle cx="30" cy="55" r="5" fill="#965B83" opacity="0.15" />
          <circle cx="8" cy="70" r="3" fill="#965B83" opacity="0.25" />
          <circle cx="60" cy="35" r="2" fill="#965B83" opacity="0.35" />
          <circle cx="25" cy="90" r="4" fill="#965B83" opacity="0.12" />
          <circle cx="75" cy="18" r="3" fill="#965B83" opacity="0.18" />
          <circle cx="50" cy="65" r="6" fill="#965B83" opacity="0.1" />
          <circle cx="12" cy="45" r="2" fill="#965B83" opacity="0.3" />
          <circle cx="85" cy="50" r="3" fill="#965B83" opacity="0.15" />
        </svg>
      </div>

      {/* Bottom-left corner splash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          transform: "scaleY(-1)",
        }}
      >
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="25" r="4" fill="#965B83" opacity="0.3" />
          <circle cx="45" cy="12" r="3" fill="#965B83" opacity="0.2" />
          <circle cx="30" cy="55" r="5" fill="#965B83" opacity="0.15" />
          <circle cx="8" cy="70" r="3" fill="#965B83" opacity="0.25" />
          <circle cx="60" cy="35" r="2" fill="#965B83" opacity="0.35" />
          <circle cx="25" cy="90" r="4" fill="#965B83" opacity="0.12" />
          <circle cx="75" cy="18" r="3" fill="#965B83" opacity="0.18" />
          <circle cx="50" cy="65" r="6" fill="#965B83" opacity="0.1" />
        </svg>
      </div>

      {/* Bottom-right corner splash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="185" cy="175" r="4" fill="#965B83" opacity="0.3" />
          <circle cx="155" cy="188" r="3" fill="#965B83" opacity="0.2" />
          <circle cx="170" cy="145" r="5" fill="#965B83" opacity="0.15" />
          <circle cx="192" cy="130" r="3" fill="#965B83" opacity="0.25" />
          <circle cx="140" cy="165" r="2" fill="#965B83" opacity="0.35" />
          <circle cx="175" cy="110" r="4" fill="#965B83" opacity="0.12" />
          <circle cx="125" cy="182" r="3" fill="#965B83" opacity="0.18" />
          <circle cx="150" cy="135" r="6" fill="#965B83" opacity="0.1" />
          <circle cx="188" cy="155" r="2" fill="#965B83" opacity="0.3" />
          <circle cx="115" cy="150" r="3" fill="#965B83" opacity="0.15" />
        </svg>
      </div>
    </>
  );
}

/**
 * ConfettiRain — 3-5 second falling confetti animation for celebration sections.
 * Renders colored dots that fall from top to bottom with varied speeds and delays.
 */
export function ConfettiRain() {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
      color: ["#965B83", "#c084a0", "#d4a5c0", "#1fb6b0", "#54595F"][Math.floor(Math.random() * 5)],
      opacity: 0.3 + Math.random() * 0.5,
    }))
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes confettiFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .confetti-particle {
            animation: none !important;
            display: none;
          }
        }
      `}} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            className="confetti-particle"
            style={{
              position: "absolute",
              left: p.left,
              top: "-20px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: p.id % 3 === 0 ? "50%" : "2px",
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `confettiFall ${p.duration}s ease-in ${p.delay}s 1 forwards`,
            }}
          />
        ))}
      </div>
    </>
  );
}
