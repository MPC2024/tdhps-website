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
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: "#9CA3AF",
              zIndex: 10,
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
                padding: "14px 16px",
                borderRadius: "8px",
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              Claim My 10% Off
            </Link>

            <button
              onClick={handleClose}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "14px",
                color: "#6B7280",
                padding: "8px",
              }}
            >
              No thanks, I&apos;ll pay full price
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes exitPopupFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
