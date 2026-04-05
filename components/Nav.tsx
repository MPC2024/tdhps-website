"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Pet Grooming",      href: "/pet-grooming" },
      { label: "Dog Day Care",      href: "/dog-day-care" },
      { label: "Pet Boarding",      href: "/houston-pet-boarding" },
      { label: "Grooming School",   href: "/grooming-school" },
      { label: "Pet Cam",           href: "/pet-cam" },
    ],
  },
  {
    label: "Locations",
    href: "#",
    children: [
      { label: "Galleria / Uptown Park", href: "/locations/galleria" },
      { label: "Memorial Park",          href: "/locations/memorial" },
      { label: "Pearland",               href: "/locations/pearland" },
    ],
  },
  { label: "Our Staff",  href: "/our-staff" },
  { label: "Blog",       href: "/blog" },
  { label: "FAQ",        href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen((v) => !v);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileOpenDropdown(null);
  };

  return (
    <nav aria-label="Main navigation">
      {/* ── Desktop nav ── */}
      <ul className="hidden lg:flex items-center gap-1">
        {navItems.map((item) =>
          item.children ? (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-charcoal hover:text-primary transition-colors"
                style={{ fontFamily: "Outfit, sans-serif", fontSize: "15px", color: "#33373D" }}
                aria-expanded={openDropdown === item.label}
              >
                {item.label}
                <svg
                  className="w-3 h-3 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <ul
                className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100 transition-all duration-200"
                style={{
                  opacity: openDropdown === item.label ? 1 : 0,
                  pointerEvents: openDropdown === item.label ? "auto" : "none",
                  transform: openDropdown === item.label ? "translateY(0)" : "translateY(-6px)",
                }}
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-primary transition-colors"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-semibold transition-colors hover:text-primary"
                style={{ fontFamily: "Outfit, sans-serif", fontSize: "15px", color: "#33373D" }}
              >
                {item.label}
              </Link>
            </li>
          )
        )}

        {/* CTA */}
        <li className="ml-3">
          <Link href="/appointment-request" className="btn-primary" style={{ fontSize: "15px", padding: "12px 24px" }}>
            Book Appointment
          </Link>
        </li>
      </ul>

      {/* ── Mobile hamburger ── */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        onClick={toggleMobile}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <span
          className="block w-6 h-0.5 bg-current transition-all duration-300"
          style={{ transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
        />
        <span
          className="block w-6 h-0.5 bg-current transition-all duration-300"
          style={{ opacity: mobileOpen ? 0 : 1 }}
        />
        <span
          className="block w-6 h-0.5 bg-current transition-all duration-300"
          style={{ transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
        />
      </button>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={closeMobile} role="button" tabIndex={0} aria-label="Close mobile menu" />

          {/* Drawer */}
          <div className="relative ml-auto w-80 max-w-full bg-white h-full shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-semibold text-lg" style={{ color: "#965B83", fontFamily: "Bowlby One SC, sans-serif" }}>
                Menu
              </span>
              <button onClick={closeMobile} aria-label="Close menu" className="p-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col py-2 flex-1">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      className="flex items-center justify-between w-full px-5 py-3.5 text-left font-semibold text-gray-800 hover:bg-purple-50"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 transition-transform"
                        style={{ transform: mobileOpenDropdown === item.label ? "rotate(180deg)" : "none" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileOpenDropdown === item.label && (
                      <ul className="bg-gray-50 border-t border-gray-100">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-8 py-3 text-sm text-gray-700 hover:text-primary hover:bg-purple-50"
                              style={{ fontFamily: "Outfit, sans-serif", color: "#54595F" }}
                              onClick={closeMobile}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-5 py-3.5 font-semibold text-gray-800 hover:bg-purple-50 hover:text-primary"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Mobile CTA */}
            <div className="p-5 border-t border-gray-100">
              <Link
                href="/appointment-request"
                className="btn-primary w-full text-center block"
                onClick={closeMobile}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
