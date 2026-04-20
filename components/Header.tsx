"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { getStaticSearchIndex, searchResults as performSearch, SearchResult } from "@/lib/searchIndex";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

const getNavStructure = (t: (key: any) => string): NavItem[] => [
  {
    label: t("pet_grooming"),
    items: [
      { label: t("pet_grooming"), href: "/pet-grooming" },
      { label: t("pet_bathing"), href: "/pet-bathing/" },
    ],
  },
  {
    label: t("pet_boarding"),
    items: [
      { label: t("houston_pet_boarding"), href: "/houston-pet-boarding" },
      { label: t("houston_daycare"), href: "/dog-day-care" },
    ],
  },
  { label: t("grooming_school"), href: "/grooming-school/" },
  {
    label: t("shop"),
    items: [
      { label: t("nuvet_labs"), href: "https://www.nuvet.com/85413", external: true },
      { label: t("farmers_dog"), href: "https://tfd.partners/thedoghousepetsalon", external: true },
    ],
  },
  {
    label: t("resources"),
    items: [
      { label: t("adopt_a_pet"), href: "https://dlpr.org/adopt-a-pet/", external: true },
      { label: t("blogs"), href: "/blog" },
      { label: t("contact_us"), href: "/contact-us" },
      { label: t("donate"), href: "https://dlpr.org/donate/", external: true },
      { label: t("faq"), href: "/faq" },
      { label: t("i_found_pet"), href: "https://www.mypetcredentials.com/lost-and-found/found-a-pet#tab-text--found-pet", external: true },
      { label: t("i_lost_pet"), href: "https://www.mypetcredentials.com/lost-and-found/found-a-pet#tab-text--found-pet", external: true },
      { label: t("the_app"), href: "https://www.mypetcredentials.com/how-it-works", external: true },
    ],
  },
  { label: t("our_staff"), href: "/our-staff" },
  {
    label: t("locations"),
    items: [
      { label: "Galleria", href: "/galleria-uptown-park-location" },
      { label: "Memorial Park", href: "/memorial-park-location" },
      { label: "Pearland", href: "/pearland-location" },
    ],
  },
];

const navStructure = getNavStructure((key) => key);

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [allSearchResults, setAllSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const index = getStaticSearchIndex();
    setAllSearchResults(index);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = performSearch(searchQuery, allSearchResults);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, allSearchResults]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileOpenDropdown(null);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40" style={{ width: "100%", maxWidth: "100vw" }}>
        {/* ── TOP BAR ── */}
        <div
          className="hidden md:flex items-center justify-between py-2 text-sm"
          style={{
            backgroundColor: "transparent",
            borderBottom: "1px solid #e5e1e8",
            padding: "8px 30px",
            width: "100%",
          }}
        >
          <style>{`
            @media (max-width: 1024px) {
              .topbar-text { font-size: 12px !important; gap: 12px !important; }
              .topbar-phone { font-size: 12px !important; }
              .topbar-lang { font-size: 11px !important; }
            }
            @media (max-width: 640px) {
              .topbar-text { font-size: 11px !important; gap: 8px !important; }
              .topbar-phone { font-size: 11px !important; }
              .topbar-lang { font-size: 10px !important; }
            }
          `}</style>
          {/* Left side */}
          <div className="topbar-text flex items-center gap-6">
            <a
              href="tel:+17138206140"
              className="topbar-phone flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: "#333", fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              713-820-6140
            </a>
            <span style={{ color: "#999", fontSize: "14px" }}>{t("hablamos")}</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "#333" }}
              aria-label="Open search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Language toggle */}
            <div className="topbar-lang flex items-center gap-2.5" style={{ color: "#333", fontSize: "14px", fontFamily: "Outfit, sans-serif" }}>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  fontWeight: language === "en" ? 700 : 400,
                  opacity: language === "en" ? 1 : 0.6,
                  cursor: "pointer",
                }}
              >
                EN
              </button>
              <span style={{ opacity: 0.3 }}>|</span>
              <button
                onClick={() => setLanguage("es")}
                style={{
                  fontWeight: language === "es" ? 700 : 400,
                  opacity: language === "es" ? 1 : 0.6,
                  cursor: "pointer",
                }}
              >
                ES
              </button>
            </div>

            {/* Book Appointment button */}
            <Link
              href="/appointment-request"
              className="px-4 py-1.5 rounded-full text-white transition-colors hover:opacity-90"
              style={{
                backgroundColor: "#965B83",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                padding: "clamp(8px, 2vw, 16px) clamp(12px, 3vw, 30px)",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {t("book_appointment")}
            </Link>
          </div>
        </div>

        {/* ── MAIN NAV BAR ── */}
        <div
          className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-sm" : "relative"} transition-all duration-300`}
          style={{
            width: "100%",
            backgroundColor: isSticky ? "white" : "transparent",
            borderBottom: isSticky ? "1px solid #e5e1e8" : "none",
          }}
        >
          <div className="py-3 flex items-center justify-between gap-3" style={{ width: "100%", boxSizing: "border-box", padding: "12px 30px" }}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="The Dog House Pet Salon – Home" style={{ minWidth: isSticky ? "65px" : "108px" }}>
              <Image
                src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/The-Dog-House-Logo-Full.webp"
                alt="The Dog House Pet Salon"
                width={108}
                height={80}
                priority
                quality={85}
                className={isSticky ? "logo-sticky" : "logo-normal"}
                style={{ height: "auto", width: isSticky ? "65px" : "108px", transition: "width 0.3s ease" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {getNavStructure(t).map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.items ? (
                    <>
                      <button
                        className="flex items-center gap-1 px-2 py-2 text-sm font-semibold transition-colors hover:opacity-70"
                        style={{
                          color: "#333",
                          fontFamily: "Outfit, sans-serif",
                          fontSize: "15px",
                        }}
                      >
                        {item.label}
                        <svg
                          className="w-3.5 h-3.5 transition-transform"
                          style={{
                            transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown menu */}
                      <div
                        className="absolute top-full left-0 min-w-[220px] bg-white shadow-lg rounded-lg py-2 z-50"
                        style={{
                          opacity: openDropdown === item.label ? 1 : 0,
                          pointerEvents: openDropdown === item.label ? "auto" : "none",
                          transform: openDropdown === item.label ? "translateY(0)" : "translateY(-8px)",
                          transition: "all 200ms ease-in-out",
                          border: "1px solid #f0edf3",
                        }}
                      >
                        {item.items.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2.5 text-sm transition-colors hover:bg-purple-50"
                            style={{
                              color: "#555",
                              fontFamily: "Outfit, sans-serif",
                            }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="px-2 py-2 text-sm font-semibold transition-colors hover:opacity-70"
                      style={{
                        color: "#333",
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile hamburger button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className="block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: mobileOpen ? "rotate(45deg) translate(8px, 8px)" : "none",
                  backgroundColor: "#333",
                }}
              />
              <span
                className="block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                  backgroundColor: "#333",
                }}
              />
              <span
                className="block w-6 h-0.5 bg-current transition-all duration-300"
                style={{
                  transform: mobileOpen ? "rotate(-45deg) translate(8px, -8px)" : "none",
                  backgroundColor: "#333",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            aria-label="Close mobile menu"
          />

          {/* Drawer */}
          <div
            className="relative ml-auto bg-white h-full shadow-2xl flex flex-col overflow-y-auto"
            style={{ fontFamily: "Outfit, sans-serif", width: "min(100%, 320px)", maxWidth: "90vw" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "#f0edf3" }}
            >
              <span
                className="font-semibold text-lg"
                style={{
                  color: "#965B83",
                  fontFamily: "Bowlby One SC, sans-serif",
                }}
              >
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="p-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <ul className="flex flex-col py-2 flex-1">
              {getNavStructure(t).map((item) => (
                <li key={item.label}>
                  {item.items ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-6 py-3.5 text-left font-semibold hover:bg-purple-50"
                        style={{ color: "#333" }}
                        onClick={() =>
                          setMobileOpenDropdown(
                            mobileOpenDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <svg
                          className="w-4 h-4 transition-transform"
                          style={{
                            transform:
                              mobileOpenDropdown === item.label
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <ul
                          className="bg-gray-50"
                          style={{ borderTop: "1px solid #f0edf3" }}
                        >
                          {item.items.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                target={child.external ? "_blank" : undefined}
                                rel={child.external ? "noopener noreferrer" : undefined}
                                className="block px-8 py-3 text-sm hover:text-primary hover:bg-purple-50"
                                style={{ color: "#555" }}
                                onClick={closeMobileMenu}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-6 py-3.5 font-semibold hover:bg-purple-50 hover:text-primary"
                      style={{ color: "#333" }}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div
              className="p-6"
              style={{ borderTop: "1px solid #f0edf3" }}
            >
              <Link
                href="/appointment-request"
                className="block text-center w-full py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#965B83",
                  fontFamily: "Outfit, sans-serif",
                }}
                onClick={closeMobileMenu}
              >
                {t("book_appointment")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── SEARCH MODAL ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-4 md:pt-20 px-4"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 px-6 py-4 border-b" style={{ borderColor: "#e5e1e8" }}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                style={{ color: "#965B83" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={t("search_placeholder")}
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-lg outline-none"
                style={{ fontFamily: "Outfit, sans-serif" }}
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1 hover:opacity-70 transition-opacity"
                aria-label="Close search"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#999" }}
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            {/* Search results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <Link
                          href={result.href}
                          className="block px-6 py-3 hover:bg-purple-50 transition-colors border-b"
                          style={{ borderColor: "#f0edf3" }}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                        >
                          <div
                            className="font-semibold"
                            style={{ color: "#333", fontSize: "15px" }}
                          >
                            {result.title}
                          </div>
                          {result.excerpt && (
                            <div
                              className="text-sm mt-1"
                              style={{ color: "#999", fontSize: "13px" }}
                            >
                              {result.excerpt.substring(0, 100)}...
                            </div>
                          )}
                          <div
                            className="text-xs mt-1"
                            style={{ color: "#965B83" }}
                          >
                            {result.type === "blog" ? "Blog Post" : "Page"}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-8 text-center" style={{ color: "#999" }}>
                    {t("no_results")}
                  </div>
                )
              ) : (
                <div className="px-6 py-8 text-center text-sm" style={{ color: "#999" }}>
                  {t("search_placeholder")}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
