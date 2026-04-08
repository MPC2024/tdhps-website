import Link from "next/link";
import Image from "next/image";

const locations = [
  {
    name: "Galleria / Uptown Park",
    address: "5917 Richmond Ave",
    city: "Houston, TX 77057",
    href: "/locations/galleria",
    email: "galleria@thedoghouseps.com",
    appointmentHref: "/appointment-request-form_location_richmond",
  },
  {
    name: "Memorial Park",
    address: "6434 Washington Ave",
    city: "Houston, TX 77007",
    href: "/locations/memorial",
    email: "memorial@thedoghouseps.com",
    appointmentHref: "/appointment-request-memorial",
  },
  {
    name: "Pearland",
    address: "2810 Business Center Dr",
    city: "Pearland, TX 77584",
    href: "/locations/pearland",
    email: "pearland@thedoghouseps.com",
    appointmentHref: "/appointment-request-pearland",
  },
];

const services = [
  { label: "Pet Grooming",    href: "/pet-grooming" },
  { label: "Dog Day Care",    href: "/dog-day-care" },
  { label: "Pet Boarding",    href: "/houston-pet-boarding" },
  { label: "Grooming School", href: "/grooming-school" },
  { label: "Pet Cam",         href: "/pet-cam" },
];

const company = [
  { label: "About Us",   href: "/about" },
  { label: "Our Staff",  href: "/our-staff" },
  { label: "Blog",       href: "/blog" },
  { label: "FAQ",        href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Careers",    href: "/grooming-school" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1F2124", color: "#ffffff" }}>
      {/* ── Main footer content ── */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="The Dog House Pet Salon – Home">
              <Image
                src="/images/logo-full.webp"
                alt="The Dog House Pet Salon"
                width={200}
                height={80}
                quality={85}
                style={{ height: "auto", width: "auto", maxWidth: "200px", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#D4D7DC", fontFamily: "Outfit, sans-serif" }}
            >
              Houston&apos;s premier pet grooming, doggie daycare, and pet boarding service
              with over 25 years of experience. Three convenient locations across Houston.
            </p>

            {/* Phone */}
            <a
              href="tel:+17138206140"
              className="flex items-center gap-2 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#D4B0C8", fontFamily: "Outfit, sans-serif" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (713) 820-6140
            </a>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-base font-semibold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Roboto, sans-serif", color: "#D4B0C8" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#D4D7DC", fontFamily: "Outfit, sans-serif" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-base font-semibold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Roboto, sans-serif", color: "#D4B0C8" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#D4D7DC", fontFamily: "Outfit, sans-serif" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3
              className="text-base font-semibold mb-5 uppercase tracking-wider"
              style={{ fontFamily: "Roboto, sans-serif", color: "#D4B0C8" }}
            >
              Our Locations
            </h3>
            <ul className="space-y-5">
              {locations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: "#ffffff", fontFamily: "Outfit, sans-serif" }}
                  >
                    {loc.name}
                  </Link>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "#D4D7DC", fontFamily: "Outfit, sans-serif" }}
                  >
                    {loc.address}<br />
                    {loc.city}
                  </p>
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-xs mt-1 block hover:text-white transition-colors"
                    style={{ color: "#A0A3A8", fontFamily: "Outfit, sans-serif" }}
                  >
                    {loc.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Book CTA ── */}
        <div
          className="mt-12 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t"
          style={{ borderColor: "#33373D" }}
        >
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: "Bowlby One SC, sans-serif", color: "#ffffff" }}
          >
            Ready to pamper your pet?
          </p>
          <Link href="/appointment-request" className="btn-primary">
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ backgroundColor: "#161819", borderTop: "1px solid #2a2d30" }}>
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#A0A3A8" }}>
          <p style={{ fontFamily: "Outfit, sans-serif" }}>
            &copy; {new Date().getFullYear()} The Dog House Pet Salon. All rights reserved.
          </p>
          <div className="flex items-center gap-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
