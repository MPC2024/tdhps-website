"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) {
      return;
    }

    // Detect mobile device
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    setIsMobile(mobile);

    if (mobile) {
      // Mobile fallback: show after 30 seconds of inactivity
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }, 30000);

      return () => clearTimeout(timer);
    } else {
      // Desktop: track mouse leaving viewport at top
      const handleMouseLeave = (e: MouseEvent) => {
        // Check if mouse is leaving from the top of the viewport
        if (e.clientY <= 0) {
          setShowPopup(true);
          sessionStorage.setItem("exitIntentShown", "true");
          document.removeEventListener("mouseleave", handleMouseLeave);
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <>
      {/* Dark Overlay */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 9998,
        }}
      />

      {/* Popup Container */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "100%",
          maxWidth: "440px",
          padding: "0 16px",
          animation: "exitPopupFadeIn 0.3s ease-out forwards",
        }}
      >
        {/* Modal Card */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 25px 50px rgba(0,0,0,0.25)", overflow: "hidden", position: "relative" }}>
          {/* Close Button
              Training: Steve Schoger (Refactoring UI) — Close button affordance
              Dark color (#4B5563) provides better contrast than light gray (#9CA3AF)
              Hover state (background) provides visual feedback
          */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "#4B5563",
              zIndex: 10,
              transition: "background-color 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            &times;
          </button>

          {/* Content */}
          <div style={{ padding: "48px 32px 32px" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#1F2124", marginBottom: "12px", textAlign: "center" }}>
              Wait! Don&apos;t leave without your special offer
            </h2>

            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", marginBottom: "28px" }}>
              Book your first grooming appointment today and get 10% off
            </p>

            {/* Primary CTA Button
                Training: Steve Schoger (Refactoring UI) + Sarah Drasner (Animation)
                - Padding on 8px grid (16px instead of 14px)
                - Easing: cubic-bezier for responsive feel
                - Add shadow for elevation hierarchy
            */}
            <Link
              href="/appointment-request"
              onClick={handleClose}
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#965B83",
                color: "#ffffff",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                padding: "16px 24px",
                borderRadius: "8px",
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "16px",
                transition: "background-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#7A4A6B";
                el.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#965B83";
                el.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              Claim My 10% Off
            </Link>

            {/* Secondary Button
                Training: Steve Schoger — Secondary options need affordance
                Added border for clarity (distinguishes from plain text)
            */}
            <button
              onClick={handleClose}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                background: "transparent",
                border: "1px solid #E5E7EB",
                cursor: "pointer",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "14px",
                color: "#6B7280",
                padding: "12px 16px",
                borderRadius: "6px",
                transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#D1D5DB";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F9FAFB";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              No thanks, I&apos;ll pay full price
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Training: Sarah Drasner (Animation Principles)
           Entrance animation: ease-out (decelerate) makes interaction feel responsive.
           Animation includes fade + scale + subtle translateY for 3D drop-in effect.
        */
        @keyframes exitPopupFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -45%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        /* Respect user's motion preferences (Accessibility)
           If user has enabled "Reduce Motion" in OS settings, disable animations.
        */
        @media (prefers-reduced-motion: reduce) {
          @keyframes exitPopupFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
}
