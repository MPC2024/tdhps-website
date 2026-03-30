"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #f5f5f5;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          opacity: ${isVisible ? 1 : 0};
          visibility: ${isVisible ? "visible" : "hidden"};
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          z-index: 40;
        }

        .scroll-to-top-btn:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          background-color: #ffffff;
        }

        .scroll-to-top-btn:active {
          transform: scale(0.95);
        }

        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9B6B8E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}
