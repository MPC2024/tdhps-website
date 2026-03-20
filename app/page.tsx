import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Dog House Pet Salon | Houston TX Pet Grooming, Daycare & Boarding",
  description:
    "Welcome to The Dog House Pet Salon — Houston's premier dog grooming, doggie daycare, and pet boarding with 25+ years of experience. Galleria, Memorial Park, and Pearland locations.",
};

const services = [
  {
    title: "Pet Grooming",
    description:
      "Professional grooming for all breeds. Bath, trim, nail clipping, ear cleaning, and more.",
    href: "/pet-grooming",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-grooming.jpg",
    imgAlt: "Dog grooming at The Dog House Pet Salon",
  },
  {
    title: "Dog Day Care",
    description:
      "Safe, supervised playtime for your pup. Socialization, exercise, and enrichment all day.",
    href: "/dog-day-care",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/doggy-day-care-galleria-1024x1005.jpg",
    imgAlt: "Dogs playing in daycare at The Dog House Pet Salon",
  },
  {
    title: "Pet Boarding",
    description:
      "Comfortable overnight boarding with attentive care so you can travel with peace of mind.",
    href: "/houston-pet-boarding",
    imgSrc: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/pet-boarding.jpg",
    imgAlt: "Pet boarding at The Dog House Pet Salon Houston",
  },
];

const locations = [
  {
    name: "Galleria / Uptown Park",
    address: "5917 Richmond Ave, Houston, TX 77057",
    href: "/locations/galleria",
    appointmentHref: "/appointment-request-form_location_richmond",
  },
  {
    name: "Memorial Park",
    address: "6434 Washington Ave, Houston, TX 77007",
    href: "/locations/memorial",
    appointmentHref: "/appointment-request-memorial",
  },
  {
    name: "Pearland",
    address: "2810 Business Center Dr, Pearland, TX 77584",
    href: "/locations/pearland",
    appointmentHref: "/appointment-request-pearland",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "85vh", backgroundColor: "#1F2124" }}
      >
        <Image
          src="https://www.thedoghouseps.com/wp-content/uploads/2025/05/The-dog-house-pet-salon-hero-1.webp"
          alt="The Dog House Pet Salon hero"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.55 }}
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <p
            className="text-base md:text-lg uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: 600, color: "#965B83" }}
          >
            THE DOG HOUSE Pet Salon
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
            style={{ fontFamily: "Bowlby One SC, sans-serif", lineHeight: 1.1 }}
          >
            We take care of{" "}
            <span style={{ color: "#965B83" }}>your pets</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit, sans-serif", color: "#e0d8e8" }}
          >
            Houston&apos;s premier pet grooming, daycare &amp; boarding — with 25+ years
            of experience and three convenient locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment-request" className="btn-primary">
              Book an Appointment
            </Link>
            <Link
              href="#services"
              className="btn-secondary"
              style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="container-site">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Bowlby One SC, sans-serif", color: "#1F2124" }}
            >
              Our Services
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "Outfit, sans-serif", color: "#54595F" }}
            >
              We offer top-tier pet care for your furry family members — from a quick
              bath to a full day of play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.href}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={svc.imgSrc}
                    alt={svc.imgAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: "Bowlby One SC, sans-serif", color: "#1F2124" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ fontFamily: "Outfit, sans-serif", color: "#54595F" }}
                  >
                    {svc.description}
                  </p>
                  <Link
                    href={svc.href}
                    className="btn-secondary"
                    style={{ fontSize: "14px", padding: "10px 22px" }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="py-20">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "Bowlby One SC, sans-serif", color: "#1F2124" }}
            >
              3 Convenient Locations
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ fontFamily: "Outfit, sans-serif", color: "#54595F" }}
            >
              Serving Uptown Houston, The Galleria, Memorial Park, Pearland, and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.href}
                className="text-center p-8 rounded-xl border"
                style={{ borderColor: "#f0edf3" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#965B83" }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "Bowlby One SC, sans-serif", color: "#1F2124" }}
                >
                  {loc.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ fontFamily: "Outfit, sans-serif", color: "#54595F" }}
                >
                  {loc.address}
                </p>
                <div className="flex flex-col gap-2">
                  <Link href={loc.appointmentHref} className="btn-primary" style={{ fontSize: "14px", padding: "10px 22px" }}>
                    Book Here
                  </Link>
                  <Link
                    href={loc.href}
                    className="text-sm"
                    style={{ color: "#965B83", fontFamily: "Outfit, sans-serif" }}
                  >
                    View Location →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: "#965B83" }}
      >
        <div className="container-site">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "Bowlby One SC, sans-serif" }}
          >
            Ready to pamper your pet?
          </h2>
          <p
            className="text-lg mb-8 opacity-90"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Schedule an appointment at any of our three Houston-area locations today.
          </p>
          <Link
            href="/appointment-request"
            className="btn-primary"
            style={{ backgroundColor: "#ffffff", color: "#965B83", fontSize: "18px", padding: "16px 40px" }}
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
