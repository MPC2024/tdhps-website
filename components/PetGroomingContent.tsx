"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import BlogCarousel, { type BlogPost } from "@/components/BlogCarousel";
import StoreLocations from "@/components/StoreLocations";

const groomingBlogPosts: BlogPost[] = [
  { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
  { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
  { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
  { title: "Best Dog Grooming Tools Every Houston Pet Owner Should Have", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/cute-jack-russell-terrier-puppy-studio.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Choose the Right Groomer for Your Dog's Breed", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Puppy's First Grooming Appointment: What to Expect", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Cat Grooming 101: Tips from Houston's Top Stylists", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Signs Your Dog Needs a Professional Grooming Session", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Grooming Anxiety in Dogs: How to Make It Stress-Free", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Why Regular Nail Trims Matter for Your Dog's Health", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/small-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "The Difference Between a Bath & Full Groom Explained", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Seasonal Grooming Tips for Houston Pet Owners", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dark-brown-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
];

const reviews = [
  {
    name: "Kevin Garnepudi",
    textKey: "grooming_review1" as const,
  },
  {
    name: "William Gillespie",
    textKey: "grooming_review2" as const,
  },
  {
    name: "Ross Monsen",
    textKey: "grooming_review3" as const,
  },
  {
    name: "Tiffany Tegeler",
    textKey: "grooming_review4" as const,
  },
];

const pricingExtras = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/de-matting.jpg", labelKey: "grooming_de_matting" as const, price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-brushing.jpg", labelKey: "grooming_brushing" as const, price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-furminating.jpg", labelKey: "grooming_furminating" as const, price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-de-tick.jpg", labelKey: "grooming_de_tick" as const, price: "$20 / Hour" },
];

const groomers = [
  {
    name: "Keylin Paulina Orellana Delcid",
    roleKey: "grooming_master_groomer" as const,
    location: "Galleria / Uptown Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/keylin-paulina-orellana-delcid.webp",
    href: "/keylin-paulina-orellana-delcid",
  },
  {
    name: "Margarita Batres",
    roleKey: "grooming_master_groomer" as const,
    location: "Pearland",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/margarita-batres.jpg",
    href: "/margarita-batres",
  },
  {
    name: "Francy Quevedo",
    roleKey: "grooming_master_groomer" as const,
    location: "Memorial Park",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/francy-quevedo.jpg",
    href: "/francy-quevedo",
  },
];

const locations = [
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/5917-richmond-ave.png",
    address: "5917 Richmond Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "galleria@thedoghouseps.com",
    option: "OPTION 1",
    isLarge: true,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
    isLarge: false,
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
    isLarge: false,
  },
];

function TestimonialCarousel({ reviews: reviewsData, t }: { reviews: typeof reviews; t: (key: any) => string }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviewsData.length);
        setSliding(false);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, reviewsData.length]);

  const goNext = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviewsData.length);
      setSliding(false);
    }, 300);
  };

  const goPrev = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
      setSliding(false);
    }, 300);
  };

  const review = reviewsData[current];

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
      <style>{`
        @media (max-width: 767px) {
          .review-card-grooming {
            padding: 24px 16px !important;
            min-height: auto !important;
            gap: 16px !important;
          }
          .review-card-grooming .review-card-content {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .review-carousel-arrows {
            display: none !important;
          }
          .review-carousel-container {
            gap: 0 !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="review-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}
        >
          {/* Left Arrow */}
          <button className="review-carousel-arrows" onClick={goPrev} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" style={{ fontSize: "16px" }} />
          </button>

          {/* Card */}
          <div className="review-card-grooming" style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            overflow: "hidden",
            minHeight: "180px",
          }}>
            <div className="review-card-content" style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: sliding ? "translateX(-40px)" : "translateX(0)",
              opacity: sliding ? 0 : 1,
              display: "flex",
              alignItems: "center",
              gap: "32px",
              width: "100%",
            }}>
              {/* Speech bubble icon */}
              <div style={{ flexShrink: 0, width: "clamp(60px, 15vw, 80px)", height: "clamp(60px, 15vw, 80px)", borderRadius: "50%", border: "3px solid #965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-comment-dots" style={{ fontSize: "clamp(20px, 5vw, 28px)", color: "#965B83" }} />
              </div>
              {/* Text + Name */}
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}>
                  {t(review.textKey as any)}
                </p>
                <p style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "clamp(13px, 3.5vw, 16px)",
                  color: "#965B83",
                  margin: 0,
                }}>
                  {review.name}
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="review-carousel-arrows" onClick={goNext} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Next">
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

function CounterBox({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div
      ref={ref}
      style={{
        border: "none",
        borderRadius: "20px",
        backgroundColor: "#965B831A",
        padding: "20px 20px 10px",
        textAlign: "center",
        minWidth: "260px",
      }}
    >
      <div style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#965B83" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginTop: "4px" }}>
        {label}
      </div>
    </div>
  );
}

function PricingCarousel({ items, t }: { items: typeof pricingExtras; t: (key: any) => string }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const [sliding, setSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");

  const goNext = () => {
    if (sliding) return;
    setSlideDirection("left");
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setSliding(false);
    }, 300);
  };

  const goPrev = () => {
    if (sliding) return;
    setSlideDirection("right");
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      setSliding(false);
    }, 300);
  };

  // Show 3 items: prev, active, next
  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + items.length) % items.length;
    const next = (activeIndex + 1) % items.length;
    return [prev, activeIndex, next];
  };

  const visible = getVisibleIndices();

  return (
    <div style={{ marginBottom: "40px", position: "relative" }}>
      {/* Left arrow */}
      <button
        onClick={goPrev}
        style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "none", border: "2px solid rgba(150,91,131,0.3)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#965B83", fontSize: "18px" }}
        aria-label="Previous"
      >
        <i className="fa-solid fa-arrow-left" />
      </button>
      {/* Right arrow */}
      <button
        onClick={goNext}
        style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "none", border: "2px solid rgba(150,91,131,0.3)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#965B83", fontSize: "18px" }}
        aria-label="Next"
      >
        <i className="fa-solid fa-arrow-right" />
      </button>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        overflow: "hidden",
        padding: "80px 60px 40px",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: sliding ? `translateX(${slideDirection === "left" ? "-30px" : "30px"})` : "translateX(0)",
        opacity: sliding ? 0.7 : 1,
      }}>
        {visible.map((itemIndex, position) => {
          const item = items[itemIndex];
          const isCenter = position === 1;
          return (
            <div
              key={item.labelKey + "-" + position}
              style={{
                backgroundColor: isCenter ? "#965B83" : "rgba(150,91,131,0.08)",
                borderRadius: "20px",
                padding: isCenter ? "40px 40px 30px" : "30px 24px 20px",
                textAlign: "center",
                width: isCenter ? "420px" : "320px",
                transition: "all 0.4s ease",
                transform: isCenter ? "scale(1)" : "scale(0.9)",
                border: isCenter ? "none" : "1px solid rgba(150,91,131,0.2)",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() => setActiveIndex(itemIndex)}
            >
              <div style={{
                width: isCenter ? "140px" : "100px",
                height: isCenter ? "140px" : "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: isCenter ? "-90px auto 20px" : "-70px auto 16px",
                border: "4px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",
              }}>
                <Image
                  src={item.img}
                  alt={t(item.labelKey)}
                  width={200}
                  height={200}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h4 style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: isCenter ? "40px" : "24px",
                color: isCenter ? "#fff" : "#1F2124",
                marginBottom: "12px",
                transition: "all 0.3s ease",
              }}>
                {t(item.labelKey)}
              </h4>
              <div style={{
                display: "inline-block",
                backgroundColor: isCenter ? "rgba(255,255,255,0.2)" : "rgba(150,91,131,0.1)",
                padding: "8px 20px",
                borderRadius: "8px",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                fontWeight: 600,
                color: isCenter ? "#fff" : "#965B83",
                transition: "all 0.3s ease",
              }}>
                {item.price}
              </div>
            </div>
          );
        })}
      </div>
      {/* Arrows moved to sides of carousel */}
    </div>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        marginBottom: "60px",
        paddingBottom: "min(56.25%, 450px)",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "6px 6px 20px rgba(0,0,0,0.15)",
        cursor: playing ? "default" : "pointer",
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/Tvs3dnIe0P0?autoplay=1"
          title="The Dog House Pet Salon"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image54.jpg"
            alt="Watch The Dog House Pet Salon Video"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          {/* Play Button */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderLeft: "30px solid #fff",
                marginLeft: "6px",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function HoursModal({ onClose, t }: { onClose: () => void; t: (key: any) => string }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>The Dog House Pet Salon</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("grooming_gallery_memorial_hours")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}><tbody>
          {[["Monday","7:00 am – 7:00 pm"],["Tuesday","7:00 am – 7:00 pm"],["Wednesday","7:00 am – 7:00 pm"],["Thursday","7:00 am – 7:00 pm"],["Friday","7:00 am – 7:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
        <p style={{ fontSize: "13px", fontStyle: "italic", color: "#965B83" }}>{t("sunday_note")}</p>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginTop: "24px", marginBottom: "12px" }}>{t("grooming_pearland_hours")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}><tbody>
          {[["Monday","7:00 am – 6:00 pm"],["Tuesday","7:00 am – 6:00 pm"],["Wednesday","7:00 am – 6:00 pm"],["Thursday","7:00 am – 6:00 pm"],["Friday","7:00 am – 6:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}

function VaccinationsModal({ onClose, t }: { onClose: () => void; t: (key: any) => string }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>{t("form_vaccinations_required_grooming_heading")}</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>Grooming Services</h3>
        <p style={{ marginBottom: "12px" }}>The following unexpired vaccinations are required for Grooming Services:</p>
        <ol style={{ paddingLeft: "20px", listStyleType: "decimal", marginBottom: "24px" }}><li>Bordetella</li></ol>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>Boarding and Daycare Services</h3>
        <p style={{ marginBottom: "12px" }}>The following unexpired vaccinations are required for Boarding and Daycare Services:</p>
        <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}><li>Bordetella</li><li>Distemper</li><li>Rabies</li><li style={{ fontStyle: "italic", color: "#965B83" }}>Influenza is NOT REQUIRED but RECOMMENDED</li></ol>
      </div>
    </div>
  );
}

export default function PetGroomingContent() {
  const { t, language } = useLanguage();
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [showVaccinationsModal, setShowVaccinationsModal] = useState(false);

  return (
    <>
      {showHoursModal && <HoursModal onClose={() => setShowHoursModal(false)} t={t} />}
      {showVaccinationsModal && <VaccinationsModal onClose={() => setShowVaccinationsModal(false)} t={t} />}
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/brown-cute-dog-scaled.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
          overflow: "hidden",
        }}
      >
        {/* white overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.6 }} />
        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            {t("grooming_pet_grooming")} <span style={{ color: "#965B83" }}>{t("grooming_houston")}</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
            {t("grooming_hero_text")}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">{t("book_appointment")}</Link>
            <a href="/calculator" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1fb6b0", borderColor: "#1fb6b0", border: "2px solid #1fb6b0", color: "#fff", padding: "12px clamp(20px, 3vw, 30px)", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "clamp(14px, 1.5vw, 18px)", display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "all 0.3s" }}>
              {t("grooming_price_estimate")}
            </a>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#1F2124", marginTop: "12px" }}>{t("grooming_no_obligation")}</p>
        </div>
        {/* Curved bottom border SVG */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* ── Professional Grooming + Video ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: 1.2 }}>
            {t("grooming_professional_happy_pet")} <span style={{ color: "#965B83" }}>{t("grooming_happier_healthier")}</span>
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", marginBottom: "40px" }}>
            {t("grooming_book_spa_day")}
          </p>

          {/* YouTube Video Player with Poster */}
          <VideoPlayer />

          {/* Counter Boxes */}
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "50px", flexWrap: "wrap" }}>
            <CounterBox target={40000} suffix="+" label={t("grooming_satisfied_clients_label")} />
          </div>

          {/* Success Text */}
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: "1.2em" }}>
            {language === "es" ? (<>Más de <span style={{ color: "#965B83" }}>30+ Años</span> de Éxito con <span style={{ color: "#965B83" }}>40,000+</span> Clientes Satisfechos</>) : (<>Over <span style={{ color: "#965B83" }}>30+ Years</span> of Success with <span style={{ color: "#965B83" }}>40,000+</span> Satisfied Clients</>)}
          </h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
            {t("grooming_center_description")}
          </p>
        </div>
      </section>

      {/* ── Grooming Packages ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "80px 35px 100px", overflow: "hidden" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Header row */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", gap: "20px" }}>
            <div>
              <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#fff", marginBottom: "8px" }}>
                {t("grooming_our_packages")}
              </h2>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>
                {t("grooming_two_types")}
              </p>
            </div>
            <Link
              href="/appointment-request"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                backgroundColor: "transparent",
                whiteSpace: "nowrap",
              }}
            >
              {t("book_appointment")}
            </Link>
          </div>

          {/* Two cards side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            {/* Complete Grooming */}
            <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "40px 30px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "40px", fontWeight: 400, marginBottom: "20px" }}>
                <span style={{ color: "#1F2124" }}>{language === "es" ? "Peluquería " : "Complete "}</span>
                <span style={{ color: "#965B83" }}>{language === "es" ? "Completa de Mascotas" : "Pet Grooming"}</span>
              </h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                <li>{t("grooming_meet_groomer")}</li>
                <li>{t("grooming_complete_bath")}</li>
                <li>{t("grooming_brush_dematting")}</li>
                <li>{t("grooming_anal_glands")}</li>
                <li>{t("grooming_ear_cleaning")}</li>
                <li>{t("grooming_nail_clip")}</li>
                <li>{t("grooming_breed_haircut")}</li>
              </ul>
            </div>
            {/* Basic Grooming */}
            <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "40px 30px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "40px", fontWeight: 400, marginBottom: "20px" }}>
                <span style={{ color: "#1F2124" }}>{language === "es" ? "Peluquería " : "Basic "}</span>
                <span style={{ color: "#965B83" }}>{language === "es" ? "Básica de Mascotas" : "Pet Grooming"}</span>
              </h3>
              <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                <li>{t("grooming_complete_bath")}</li>
                <li>{t("grooming_brush_dematting")}</li>
                <li>{t("grooming_anal_glands")}</li>
                <li>{t("grooming_ear_cleaning")}</li>
                <li>{t("grooming_nail_clip")}</li>
                <li>{t("grooming_face_trimming")} <em style={{ color: "#965B83" }}>{t("grooming_body_trim_note")}</em></li>
              </ul>
            </div>
          </div>

          {/* Looking for Pet Bathing */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(24px,2.5vw,36px)", color: "#fff", marginBottom: "12px" }}>
              {t("grooming_looking_bathing").split("?")[0]}?
            </h3>
            <Link
              href="/pet-bathing"
              style={{
                color: "#fff",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              {t("grooming_click_here")}
            </Link>
          </div>
        </div>
        {/* Curved bottom */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", textAlign: "center", marginBottom: "8px", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto 8px" }}>
            {t("grooming_professional_pricing_title")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
            {t("grooming_groomed_perfection")}
          </p>
          <PricingCarousel items={pricingExtras} t={t} />
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px 0" }}>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#888", lineHeight: 1.6, textAlign: "center", marginBottom: "8px" }}>
              {t("grooming_pricing_vary")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "12px", color: "#999", lineHeight: 1.6, textAlign: "center", fontStyle: "italic" }}>
              *{t("grooming_pricing_note")}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: "#965B83", padding: "32px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,36px)", color: "#fff", margin: 0 }}>
            {t("grooming_ready_treat")}
          </h2>
          <Link
            href="/appointment-request"
            style={{
              border: "2px solid #fff",
              color: "#fff",
              backgroundColor: "transparent",
              padding: "12px 30px",
              borderRadius: "50px",
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {t("schedule_appointment")}
          </Link>
        </div>
      </section>

      {/* ── New Client Discount ── */}
      <section style={{
        position: "relative",
        backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image74-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        overflow: "hidden",
      }}>
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#f9f9f9", opacity: 0.2, zIndex: 0 }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Card aligned left */}
          <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: "20px",
            padding: "50px 40px",
            textAlign: "center",
            maxWidth: "850px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#54595F", letterSpacing: "2px", marginBottom: "8px", textTransform: "uppercase" }}>
              {t("grooming_special_discount")}
            </p>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,4vw,54px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.2 }}>
              {t("grooming_new_client")} <span style={{ color: "#965B83" }}>{t("grooming_get_10_off")}</span>
            </h2>
            <Link
              href="/appointment-request"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 40px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              {t("grooming_book_now")}
            </Link>
            {/* Description inside box with top black border */}
            <div style={{ borderTop: "2px solid #1F2124", marginTop: "24px", paddingTop: "16px" }}>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#54595F", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>
                {t("grooming_new_clients_get_off")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <TestimonialCarousel reviews={reviews} t={t} />

      {/* ── Never Miss a Moment Section ── */}
      <section style={{ backgroundColor: "#FFF", padding: "80px 20px" }}>
        <div className="service-info-grid" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
          {/* Left Column — Icon Boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Hours of Operations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-regular fa-calendar" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("hours_operations")}
              </h3>
              <button
                onClick={() => setShowHoursModal(true)}
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#965B83",
                  backgroundColor: "transparent",
                  border: "2px dashed #965B83",
                  borderRadius: "50px",
                  padding: "10px 30px",
                  cursor: "pointer",
                }}
              >
                {t("grooming_view_button")}
              </button>
            </div>

            {/* Required Vaccinations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-solid fa-syringe" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("form_vaccinations_required_grooming_heading")}
              </h3>
              <button
                onClick={() => setShowVaccinationsModal(true)}
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#965B83",
                  backgroundColor: "transparent",
                  border: "2px dashed #965B83",
                  borderRadius: "50px",
                  padding: "10px 30px",
                  cursor: "pointer",
                }}
              >
                {t("grooming_view_button")}
              </button>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", marginBottom: "8px", lineHeight: 1.1 }}>
              {t("grooming_never_miss_moment")}
            </h2>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,36px)", color: "#965B83", marginBottom: "16px", lineHeight: 1.2 }}>
              {t("grooming_live_streaming")}
            </h3>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#54595F", letterSpacing: "1px", marginBottom: "20px" }}>
              #THEDOGHOUSEPETSALON Daycare TV
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("grooming_webcam_text1")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("grooming_webcam_text2")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "24px" }}>
              {t("grooming_webcam_text3")}
            </p>
            <Link
              href="/pet-cam"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              {t("grooming_view_webcams")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F8F8F8",
        padding: "80px 20px",
        position: "relative",
      }}>
        {/* White overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#FFF",
          opacity: 0.7,
          zIndex: 1,
        }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontFamily: '"Bowlby One SC", sans-serif',
            fontSize: "clamp(26px,3vw,40px)",
            color: "#000",
            textAlign: "center",
            marginBottom: "50px",
          }}>
            {t("grooming_you_can_find")}
          </h2>

          {/* 2-Column Layout: Large card on left, stacked cards on right */}
          <div className="locations-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "stretch",
          }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div className="location-card" style={{
              backgroundColor: "#965B83",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              alignItems: "center",
              minHeight: "100%",
            }}>
              {/* Image */}
              <div style={{
                flex: "0 0 200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src={locations[0].img}
                  alt={locations[0].address}
                  width={200}
                  height={200}
                  quality={85}
                  loading="lazy"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px" }} />
                  <h3 style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].address}
                  </h3>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (
                    <p key={h} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "16px",
                      color: "#fff",
                      margin: "4px 0",
                      lineHeight: 1.6,
                      letterSpacing: "0.3px",
                    }}>
                      {h}
                    </p>
                  ))}
                </div>

                <p style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "18px",
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}>
                  {locations[0].option}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px" }} />
                  <p style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    margin: 0,
                  }}>
                    {locations[0].phone}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }} />
                  <a href={`mailto:${locations[0].email}`} style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    color: "#fff",
                    textDecoration: "none",
                  }}>
                    {locations[0].email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards (Washington Ave + Business Center) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {/* Washington Ave Card */}
              <div className="location-card" style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                {/* Image */}
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[1].img}
                    alt={locations[1].address}
                    width={150}
                    height={150}
                    quality={85}
                    loading="lazy"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].address}
                    </h3>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    {locations[1].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>

                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[1].option}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[1].phone}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[1].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[1].email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Center Card */}
              <div className="location-card" style={{
                backgroundColor: "#965B83",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                alignItems: "center",
              }}>
                {/* Image */}
                <div style={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image
                    src={locations[2].img}
                    alt={locations[2].address}
                    width={150}
                    height={150}
                    quality={85}
                    loading="lazy"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                    <h3 style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].address}
                    </h3>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    {locations[2].hours.map((h) => (
                      <p key={h} style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        color: "#fff",
                        margin: "2px 0",
                        lineHeight: 1.3,
                      }}>
                        {h}
                      </p>
                    ))}
                  </div>

                  <p style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "11px",
                    color: "#fff",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}>
                    {locations[2].option}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                    <p style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      margin: 0,
                    }}>
                      {locations[2].phone}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                    <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                    <a href={`mailto:${locations[2].email}`} style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "11px",
                      color: "#fff",
                      textDecoration: "none",
                    }}>
                      {locations[2].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Donna Williams Section ── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div className="grid-responsive" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left — Text */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "16px" }}>
              {language === "es" ? (<>Maestra Certificada de Renombre Nacional <span style={{ color: "#965B83" }}>Peluquera y Entrenadora de Mascotas</span></>) : (<>Nationally Renowned Certified Master <span style={{ color: "#965B83" }}>Pet Groomer &amp; Trainer</span></>)}
            </h2>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "20px", letterSpacing: "1px" }}>
              {t("grooming_donna_name")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#965B83", fontStyle: "italic", marginBottom: "16px" }}>
              {t("grooming_career_highlights")}
            </p>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2, listStyle: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
              <li>{t("grooming_donna_item1")}</li>
              <li>{t("grooming_donna_item2")}</li>
              <li>{t("grooming_donna_item3")}</li>
              <li>{t("grooming_donna_item4")}</li>
              <li>{t("grooming_donna_item5")}</li>
            </ul>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              {t("grooming_donna_believes")}
            </p>
          </div>

          {/* Right — Image with gradient overlay */}
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image-17.jpg"
              alt="Donna Williams - Master Pet Groomer"
              width={1200}
              height={1000}
              loading="lazy"
              quality={95}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 768px) 90vw, 600px"
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(255,255,255,0) 20%, #965b83 100%)",
            }} />
            {/* Read Full Bio button */}
            <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
              <Link
                href="/donna-williams"
                style={{
                  display: "inline-block",
                  backgroundColor: "#fff",
                  color: "#1F2124",
                  padding: "12px 30px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Pet Groomers ── */}
      <section style={{
        position: "relative",
        backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image53-scaled.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        overflow: "hidden",
      }}>
        {/* White overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFF", opacity: 0.85, zIndex: 0 }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", textAlign: "center", marginBottom: "50px" }}>
            {t("grooming_our_pet_groomers")}
          </h2>

          <div className="groomers-grid">
            {groomers.map((g) => (
              <div key={g.name} style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: "20px",
                padding: "40px 24px",
                textAlign: "center",
                border: "1px solid rgba(150,91,131,0.15)",
              }}>
                {/* Circular photo */}
                <div style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  border: "4px solid #fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}>
                  <Image
                    src={g.img}
                    alt={g.name}
                    width={200}
                    height={200}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "4px" }}>
                  {t(g.roleKey as any)}
                </h3>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#1F2124", marginBottom: "8px" }}>
                  {g.name}
                </p>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", fontStyle: "italic", marginBottom: "16px" }}>
                  {g.location}
                </p>
                <Link
                  href={g.href}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#965B83",
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "50px",
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Read Full Bio
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Houston's #1 ── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", alignItems: "center" }} className="grid-responsive">
          {/* Left — Title + Button */}
          <div>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#965B83", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>
              {language === "es" ? "EL #1 DE HOUSTON" : "HOUSTON'S #1"}
            </p>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "24px" }}>
              {language === "es" ? "Servicio de Peluquería de Mascotas" : "Pet Grooming Service"}
            </h2>
            <Link
              href="/appointment-request"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Schedule An Appointment
            </Link>
          </div>

          {/* Middle — Image */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/yw-pro.jpg"
              alt="Houston Pet Grooming Team"
              width={500}
              height={400}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Right — Text Content */}
          <div>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8 }}>
              {t("grooming_houston_center_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Pet Grooming Academy ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="grid-responsive">
          {/* Left — Title + Content + Button */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "8px" }}>
              {language === "es" ? (<>Nuestra <span style={{ color: "#965B83" }}>Academia de Peluquería</span></>) : (<>Our Pet <span style={{ color: "#965B83" }}>Grooming Academy</span></>)}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#965B83", fontStyle: "italic", marginBottom: "20px" }}>
              {t("grooming_school_subtitle")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, marginBottom: "24px" }}>
              {t("grooming_school_desc")}
            </p>
            <Link
              href="/grooming-school"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              {t("grooming_view_courses")}
            </Link>
          </div>

          {/* Right — Icon Grid (2 rows x 4 columns) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="grid-responsive-4">
            {[
              {
                label: t("grooming_pet_care"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
              },
              {
                label: t("grooming_bathing"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="M4 12a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3a1 1 0 0 0-1-1"/><path d="M6 12V5a2 2 0 0 1 2-2h1"/><path d="M14 6h.01"/><path d="M10 6h.01"/><path d="M12 6h.01"/></svg>,
              },
              {
                label: t("grooming_shampoo"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v4"/><path d="M14 2v4"/><rect x="8" y="6" width="8" height="4" rx="1"/><path d="M8 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10"/><path d="M12 14v4"/><path d="M10 16h4"/></svg>,
              },
              {
                label: t("grooming_brushing_category"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="8" rx="2"/><path d="M9 10v12"/><path d="M12 10v12"/><path d="M15 10v12"/><path d="M6 6h12"/></svg>,
              },
              {
                label: t("grooming_cutting"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
              },
              {
                label: t("grooming_combing"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v4H4z"/><path d="M7 8v14"/><path d="M10 8v14"/><path d="M13 8v14"/><path d="M16 8v14"/></svg>,
              },
              {
                label: t("grooming_styling"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A5.5 5.5 0 0 1 15 7.5V12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.5A5.5 5.5 0 0 1 9.5 2z"/><path d="M10 13v9"/><path d="M6 22h8"/><path d="M17 6l2-2"/><path d="M19 10h2"/><path d="M17 14l2 2"/></svg>,
              },
              {
                label: t("grooming_handling"),
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#965B83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13"/></svg>,
              },
            ].map((item) => (
              <div key={item.label} style={{
                backgroundColor: "#965b831a",
                borderRadius: "16px",
                padding: "32px 20px",
                textAlign: "center",
                minHeight: "140px",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ marginBottom: "12px" }}>
                  {item.svg}
                </div>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "80px 20px 160px", overflow: "hidden" }}>
        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#FFF", textAlign: "center", marginBottom: "12px" }}>
            {t("grooming_discover_expert")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#FFF", textAlign: "center", marginBottom: "48px" }}>
            {t("grooming_stay_informed")}
          </p>
          <BlogCarousel posts={groomingBlogPosts} />
        </div>
      </section>

      <StoreLocations />
    </>
  );
}
