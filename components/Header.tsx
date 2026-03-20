"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 bg-white shadow-sm"
      style={{ borderBottom: "1px solid #f0edf3" }}
    >
      {/* ── Top bar (phone + locations) ── */}
      <div
        className="hidden md:flex items-center justify-between px-5 py-1.5 text-xs text-white"
        style={{ backgroundColor: "#965B83" }}
      >
        <div className="flex items-center gap-6">
          <a
            href="tel:+17138206140"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            (713) 820-6140
          </a>
          <span style={{ opacity: 0.6 }}>|</span>
          <span style={{ fontFamily: "Outfit, sans-serif" }}>
            Houston&apos;s Premier Pet Grooming, Daycare &amp; Boarding
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:galleria@thedoghouseps.com"
            className="hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            galleria@thedoghouseps.com
          </a>
        </div>
      </div>

      {/* ── Main header ── */}
      <div className="container-site flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="The Dog House Pet Salon – Home">
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2023/10/The-Dog-House-Logo-01.png"
            alt="The Dog House Pet Salon"
            width={180}
            height={60}
            priority
            style={{ height: "auto", maxHeight: "60px", width: "auto" }}
          />
        </Link>

        {/* Nav */}
        <Nav />
      </div>
    </header>
  );
}
