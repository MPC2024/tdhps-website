"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import BlogCarousel, { type BlogPost } from "@/components/BlogCarousel";

const bathingBlogPosts: BlogPost[] = [
  { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
  { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
  { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
  { title: "Best Dog Shampoos for Houston's Humid Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/cute-jack-russell-terrier-puppy-studio.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Bathe a Dog That Hates the Water", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Cat Bathing 101: Tips from Houston's Top Groomers", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How Often Should You Bathe Your Dog?", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "The Benefits of Professional Pet Bathing Services", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "DIY Dog Bathing vs. Professional Grooming: Pros & Cons", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Keep Your Dog's Coat Healthy Between Baths", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dark-brown-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Pet Bathing for Senior Dogs: Special Considerations", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "What's Included in a Professional Pet Bath at The Dog House?", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/small-dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
];

const reviews = [
  {
    name: "Kevin Garnepudi",
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
  },
  {
    name: "William Gillespie",
    text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them.",
  },
  {
    name: "Ross Monsen",
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
  },
  {
    name: "Tiffany Tegeler",
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
  },
];

const pricingExtras = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/de-matting.jpg", label: "De-Matting", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-brushing.jpg", label: "Brushing", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-furminating.jpg", label: "Furminating", price: "$40 / Hour" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-de-tick.jpg", label: "De-Tick", price: "$20 / Hour" },
];

const loyaltyPerks = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png", label: "Premium Shampoos" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/30.png", label: "30 Day Guarantee" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/just4you.png", label: "Just For You" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/loyalty-card.png", label: "Loyalty Card" },
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

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        marginBottom: "60px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "6px 6px 20px rgba(0,0,0,0.15)",
        cursor: playing ? "default" : "pointer",
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/8bPoLGDA6Wc?autoplay=1"
          title="The Dog House Pet Salon"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <>
          <Image
            src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/video-post.png"
            alt="Watch The Dog House Pet Salon Video"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
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

function PricingCarousel({ items }: { items: typeof pricingExtras }) {
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

  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + items.length) % items.length;
    const next = (activeIndex + 1) % items.length;
    return [prev, activeIndex, next];
  };

  const visible = getVisibleIndices();

  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        overflow: "hidden",
        padding: "80px 20px 40px",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: sliding ? `translateX(${slideDirection === "left" ? "-30px" : "30px"})` : "translateX(0)",
        opacity: sliding ? 0.7 : 1,
      }}>
        {visible.map((itemIndex, position) => {
          const item = items[itemIndex];
          const isCenter = position === 1;
          return (
            <div
              key={item.label + "-" + position}
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
                  alt={item.label}
                  width={200}
                  height={200}
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
                {item.label}
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
      {/* Navigation arrows */}
      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "8px" }}>
        <button
          onClick={goPrev}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83", padding: "8px" }}
          aria-label="Previous"
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          onClick={goNext}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83", padding: "8px" }}
          aria-label="Next"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCarousel({ reviews: reviewsData }: { reviews: typeof reviews }) {
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
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}
        >
          <button onClick={goPrev} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" style={{ fontSize: "16px" }} />
          </button>
          <div className="review-card-bathing" style={{ flex: 1, backgroundColor: "#fff", borderRadius: "16px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "32px", overflow: "hidden", minHeight: "180px" }}>
            <div className="review-card-content" style={{ transition: "transform 0.3s ease, opacity 0.3s ease", transform: sliding ? "translateX(-40px)" : "translateX(0)", opacity: sliding ? 0 : 1, display: "flex", alignItems: "center", gap: "32px", width: "100%" }}>
              <div style={{ flexShrink: 0, width: "80px", height: "80px", borderRadius: "50%", border: "3px solid #965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-comment-dots" style={{ fontSize: "28px", color: "#965B83" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
                  {review.text}
                </p>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "16px", color: "#965B83", margin: 0 }}>
                  {review.name}
                </p>
              </div>
            </div>
          </div>
          <button onClick={goNext} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Next">
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

function HoursModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>The Dog House Pet Salon</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>Galleria / Memorial Hours</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}><tbody>
          {[["Monday","7:00 am – 7:00 pm"],["Tuesday","7:00 am – 7:00 pm"],["Wednesday","7:00 am – 7:00 pm"],["Thursday","7:00 am – 7:00 pm"],["Friday","7:00 am – 7:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
        <p style={{ fontSize: "13px", fontStyle: "italic", color: "#965B83" }}>Sunday boarding drop off &amp; pick up from 8am–9am or 4pm–5pm only</p>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginTop: "24px", marginBottom: "12px" }}>Pearland Hours</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}><tbody>
          {[["Monday","7:00 am – 6:00 pm"],["Tuesday","7:00 am – 6:00 pm"],["Wednesday","7:00 am – 6:00 pm"],["Thursday","7:00 am – 6:00 pm"],["Friday","7:00 am – 6:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}

function VaccinationsModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>Required Vaccinations</h2>
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

const bathingServices = [
  { title: "Teeth Brushing", text: "We finish with teeth brushing to remove plaque buildup and freshen your pet\u2019s breath, contributing to their overall oral health." },
  { title: "Thorough Wash and Conditioning", text: "Using shampoos and conditioners suited to your pet\u2019s skin type, we wash away all dirt and grime while nourishing their coat." },
  { title: "Nail Trimming", text: "Routine nail trimming helps prevent painful splitting or snagging and ensures that your pet can walk comfortably." },
  { title: "Ear Cleaning", text: "Ear cleanings are crucial to avoid infections, particularly for dog breeds prone to ear issues." },
];

function BathingServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % bathingServices.length);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + bathingServices.length) % bathingServices.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(bathingServices[(startIndex + i) % bathingServices.length]);
    }
    return items;
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
        {getVisibleItems().map((item) => (
          <div key={item.title} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
            <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px", lineHeight: 1.3 }}>
              {item.title}
            </h4>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button
          onClick={goPrev}
          style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", backgroundColor: "#965B83", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}
          aria-label="Previous"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          onClick={goNext}
          style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", backgroundColor: "#965B83", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}
          aria-label="Next"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

const benefitsData = [
  { icon: "fa-solid fa-hand-sparkles", title: "Prevents Skin Issues", text: "Regular baths help wash away dirt, bacteria, and other environmental irritants that can lead to skin conditions. For pets prone to allergies, our specialized shampoos help relieve itchy skin and reduce flare-ups, creating a more comfortable experience." },
  { icon: "fa-solid fa-shirt", title: "Healthier Coat and Less Shedding", text: "Routine bathing and conditioning treatments support a soft, shiny coat and control shedding. For dog owners, especially those with breeds that shed frequently, this means less fur around the house and a healthier coat for your pet." },
  { icon: "fa-solid fa-wind", title: "Odor Control", text: "Regular pet bathing prevents unpleasant odors caused by oils, dirt, and bacteria buildup. Our bathing services include deodorizing treatments, so your pet feels and smells clean long after their visit." },
  { icon: "fa-solid fa-stethoscope", title: "Early Detection of Health Issues", text: "Our world-class pet bathers carefully inspect your pet's skin for any unusual lumps, sores, or signs of infection. Early detection can be crucial in preventing potential health issues from escalating." },
  { icon: "fa-solid fa-scissors", title: "Additional Grooming Benefits", text: "Along with bathing, our service includes essential grooming tasks like nail trimming, ear cleaning, and dental care. Each of these tasks contributes to reducing the chances of infections and keeping your pet in peak condition." },
];

function BenefitsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setStartIndex((prev) => (prev + 2) % benefitsData.length);
        setSliding(false);
      }, 300);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 2) % benefitsData.length);
      setSliding(false);
    }, 300);
  };

  const goPrev = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 2 + benefitsData.length) % benefitsData.length);
      setSliding(false);
    }, 300);
  };

  const visible = [
    benefitsData[startIndex % benefitsData.length],
    benefitsData[(startIndex + 1) % benefitsData.length],
  ];

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "40px",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: sliding ? 0 : 1,
        transform: sliding ? "translateX(-20px)" : "translateX(0)",
      }}>
        {visible.map((item) => (
          <div key={item.title} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "#965B831A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className={item.icon} style={{ fontSize: "22px", color: "#965B83" }} />
            </div>
            <div>
              <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px", lineHeight: 1.3 }}>
                {item.title}
              </h4>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button onClick={goPrev} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", backgroundColor: "#965B83", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }} aria-label="Previous">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button onClick={goNext} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", backgroundColor: "#965B83", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }} aria-label="Next">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default function PetBathingContent() {
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [showVaccinationsModal, setShowVaccinationsModal] = useState(false);

  return (
    <>
      {showHoursModal && <HoursModal onClose={() => setShowHoursModal(false)} />}
      {showVaccinationsModal && <VaccinationsModal onClose={() => setShowVaccinationsModal(false)} />}

      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/dog-bathing.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
        }}
      >
        {/* White overlay with 0.6 opacity */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.6)" }} />

        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(36px,5vw,72px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            Professional Pet Bathing for <span style={{ color: "#965B83" }}>a Happier, Healthier Pet</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
            Fresh, fluffy, and oh-so-clean — schedule your pet's spa day with us!
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">Book An Appointment</Link>
            <a href="https://calculator.thedoghouseps.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1fb6b0", color: "#ffffff", padding: "15px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "opacity 0.3s ease" }}>
              Get Bath Price Estimate
            </a>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginTop: "12px" }}>
            <i className="fa-solid fa-circle-check" style={{ color: "#965B83", marginRight: "6px" }} />
            No obligation &bull; Takes 30 seconds
          </p>
        </div>
      </section>

      {/* ── Professional Pet Bathing + Video ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: 1.2 }}>
            Professional Pet Bathing Services for <span style={{ color: "#965B83" }}>a Happier, Healthier Pet.</span>
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", marginBottom: "40px" }}>
            Book Now a Spa Day Your Pet Will Love!
          </p>

          {/* YouTube Video Player with Poster */}
          <VideoPlayer />

          {/* Counter Boxes */}
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "50px", flexWrap: "wrap" }}>
            <CounterBox target={30} suffix="+" label="30+ Years" />
            <CounterBox target={40000} suffix="+" label="Satisfied Clients" />
          </div>

          {/* Success Text */}
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: "1.2em" }}>
            Over <span style={{ color: "#965B83" }}>30+ Years</span> of Success with <span style={{ color: "#965B83" }}>40,000+</span> Satisfied Clients
          </h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
            The Dog House Pet Salon has become the pet bathing center for all animal lovers in Houston. With over 30+ Years of pet grooming experience, we&apos;ve been successfully delivering a pet&apos;s paradise to our clients &amp; their furry friends. Our level of care &amp; attention to detail is unmatched in the industry, and that&apos;s what has kept our community growing &amp; returning for decades.
          </p>
        </div>
      </section>

      {/* ── Total Bathing Package ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/04/doggie-washing.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
        }}
      >
        {/* White overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.2)" }} />

        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: "12px",
              padding: "50px 60px",
              maxWidth: "850px",
              width: "100%",
            }}
          >
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "24px" }}>
              Total Bathing Package
            </h2>
            <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "2px solid #1F2124" }}>
              <Link href="/appointment-request" className="btn-primary">Book Now</Link>
            </div>
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#965B83", fontWeight: 600, marginBottom: "16px" }}>Pet bathing includes:</h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: 0 }}>
              <li>✔ Pet bathing</li>
              <li>✔ Thorough brush out (De-matting cost $10/15 minutes)</li>
              <li>✔ External expression of anal glands</li>
              <li>✔ Nail trimming (File or grind is an additional $10)</li>
              <li>✔ Ear cleaning and plucking</li>
              <li>✔ Total drying</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", textAlign: "center", marginBottom: "8px", lineHeight: 1.2 }}>
            Pet Grooming Services &amp; Pricing
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
            Groomed To Perfection
          </p>
          <PricingCarousel items={pricingExtras} />
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 4px rgba(0,0,0,.08)", border: "1px solid #E0E0E0" }}>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#1F2124", lineHeight: 1.7, textAlign: "center", marginBottom: "16px" }}>
              Pricing can vary from breed to breed. Upon arrival with your pet, our groomers will consult with you to determine an exact price.
            </p>
            <hr style={{ border: "none", borderTop: "1px solid #E0E0E0", margin: "16px 0" }} />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#1F2124", lineHeight: 1.7, textAlign: "center" }}>
              <strong>*Please Note:</strong> There is an additional difficulty fee of $15 for pets that exhibit aggressive behavior or are particularly challenging to groom. There is an additional rush fee for expedited pet grooming services.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: "#965B83", padding: "32px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,36px)", color: "#fff", margin: 0 }}>
            Ready to Treat Your Furry Friend?
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
            Schedule An Appointment
          </Link>
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <TestimonialCarousel reviews={reviews} />

      {/* ── Why Choose Our Pet Bathing Services Section ── */}
      <section style={{ backgroundColor: "#FFF", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
          {/* Left Column — Icon Boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Hours of Operations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-regular fa-calendar" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                Hours of Operations
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
                View
              </button>
            </div>

            {/* Required Vaccinations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-solid fa-syringe" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                Required Vaccinations
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
                View
              </button>
            </div>

            {/* View Webcams Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "16px", display: "block", marginInline: "auto" }}>
                <circle cx="25" cy="18" r="8" stroke="#965B83" strokeWidth="2.5" fill="none" />
                <circle cx="25" cy="18" r="3" fill="#965B83" />
                <path d="M15 32c0-2 2-4 4-4h12c2 0 4 2 4 4v4H15v-4z" stroke="#965B83" strokeWidth="2.5" fill="none" />
              </svg>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                View Webcams
              </h3>
              <Link
                href="/pet-cam"
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
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                View
              </Link>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
              Why Choose Our Pet Bathing Services
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              With a skilled team that&apos;s passionate about pet care, pet bathing services go beyond basic grooming. We combine attention to detail, specialized care, and top-tier products to provide a bathing experience that leaves your pet looking and feeling refreshed.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              Experienced bathers at The Dog House use techniques that make the process calm and enjoyable, even for pets that may be anxious about water or grooming. Whether you&apos;re looking for a dog bather who can pamper your pup or a gentle hand for your cat, we are the perfect fit for your pet&apos;s needs.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "24px" }}>
              By choosing professional pet bathing, you invest in your pet&apos;s happiness, comfort, and health.
            </p>
            <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", marginBottom: "16px" }}>
              Pamper Your Fur-Baby With:
            </h4>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "disc", paddingLeft: "20px", margin: "0 0 24px" }}>
              <li>Comprehensive pet bathing</li>
              <li>Nail trimming (File or grind is an additional $10)</li>
              <li>Thorough brush out (De-matting coat $10/15 minutes)</li>
              <li>Ear cleaning and plucking</li>
              <li>External expression of anal glands</li>
              <li>Complete drying</li>
            </ul>
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
              View Webcams
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pet Bathing Info Cards ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "80px 20px 120px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
          {/* Left Column — What Is Pet Bathing */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/washing-pet-dog-corgi.webp"
              alt="Pet bathing - washing corgi"
              width={700}
              height={400}
              style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
            />
            <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "0 0 16px 16px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(20px,2.5vw,28px)", color: "#1F2124", marginBottom: "8px", lineHeight: 1.2 }}>
                What Is Pet Bathing or Dog Bathing?
              </h3>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#965B83", marginBottom: "16px" }}>
                Pet Bathing Is An Essential &amp; Healthy Process For All Animals
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
                Pet bathing, sometimes referred to as pet grooming baths, is a fundamental part of maintaining the overall health and hygiene of your animal companion. Regular bathing is crucial for pets of all kinds — from dogs and cats to other furry friends — as it removes dirt, bacteria, and potential irritants from their skin and fur, promoting a comfortable, itch-free experience. By investing in routine pet bathing, pet owners help prevent many common health issues that can arise from poor hygiene, including skin infections, matted fur, and even stress-related conditions.
              </p>
            </div>
          </div>

          {/* Right Column — Why Pet Bathing Is Essential */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/side-view-woman-washing-dog.webp"
              alt="Professional pet bathing service"
              width={700}
              height={400}
              style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
            />
            <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "0 0 16px 16px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(20px,2.5vw,28px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.2 }}>
                Why Pet Bathing Is Essential for a Happy and Healthy Pet
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "12px" }}>
                For pets, a clean coat and skin are directly linked to overall well-being. When they go too long without a bath, they can develop tangled fur, flaky skin, and, in some cases, unpleasant odors that could signal underlying health concerns. Matted fur can quickly escalate into a painful issue, causing irritation, trapping debris, and even restricting movement. For this reason, professional bathing services are not just a luxury but an essential service that contributes to your pet&apos;s happiness and health.
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
                At our facility, pet bathing services are tailored to each animal&apos;s specific needs. Dog bathing differs from cat bathing in both method and products used, and our trained bathers understand how to approach each pet type uniquely. The process includes gentle washing with specially formulated shampoos, addressing specific concerns such as shedding or dandruff, and conditioning treatments to keep fur manageable and smooth.
              </p>
            </div>
          </div>
        </div>

        {/* Curved bottom border */}
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
      </section>

      {/* ── Comprehensive Pet Bathing Services ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.2 }}>
            Our Comprehensive Pet Bathing Services
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", maxWidth: "700px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            We offer a complete bathing and grooming experience that covers everything your pet needs for optimal comfort and hygiene. Our pet bathing process includes:
          </p>
          <BathingServicesCarousel />
        </div>
      </section>

      {/* ── Loyalty / Punch Card ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", justifyItems: "center" }}>
          {/* Left — Premium Shampoos + $30 Credit + Just For You */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png"
              alt="Premium Shampoos"
              width={200}
              height={200}
              style={{ width: "150px", height: "auto" }}
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/30.png"
              alt="$30 Credit - Groom Punch Card"
              width={400}
              height={400}
              style={{ width: "300px", height: "auto" }}
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/just4you.png"
              alt="Just For You"
              width={200}
              height={200}
              style={{ width: "150px", height: "auto" }}
            />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.6 }}>
              Redeem on Your 12th Bath, Groom, or Basic Service
            </p>
          </div>
          {/* Right — Loyalty Card */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/loyalty-card.png"
              alt="Pawsitively Grateful Loyalty Card"
              width={500}
              height={350}
              style={{ width: "100%", maxWidth: "450px", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ── Locations (Grooming page style) ── */}
      <section style={{
        backgroundImage: "url('https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F8F8F8",
        padding: "80px 20px",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#FFF", opacity: 0.7, zIndex: 1 }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#000", textAlign: "center", marginBottom: "50px" }}>
            You Can Find Us At These Locations Near You
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "stretch" }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center", minHeight: "100%" }}>
              <div style={{ flex: "0 0 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={locations[0].img} alt={locations[0].address} width={200} height={200} quality={85} style={{ width: "200px", height: "200px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px" }} />
                  <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 600, color: "#fff", margin: 0 }}>{locations[0].address}</h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (<p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: "4px 0", lineHeight: 1.6 }}>{h}</p>))}
                </div>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", marginBottom: "12px", fontWeight: 600, letterSpacing: "1px" }}>{locations[0].option}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px" }} />
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: 0 }}>{locations[0].phone}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }} />
                  <a href={`mailto:${locations[0].email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", textDecoration: "none" }}>{locations[0].email}</a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {locations.slice(1).map((loc) => (
                <div key={loc.address} style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center" }}>
                  <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={loc.img} alt={loc.address} width={150} height={150} quality={85} style={{ width: "150px", height: "150px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#fff" }}>
                      <i className="fa-solid fa-location-dot" style={{ fontSize: "16px" }} />
                      <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0 }}>{loc.address}</h3>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      {loc.hours.map((h) => (<p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: "2px 0", lineHeight: 1.3 }}>{h}</p>))}
                    </div>
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#fff", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.5px" }}>{loc.option}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", color: "#fff" }}>
                      <i className="fa-solid fa-phone" style={{ fontSize: "12px" }} />
                      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: 0 }}>{loc.phone}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff" }}>
                      <i className="fa-solid fa-envelope" style={{ fontSize: "12px" }} />
                      <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", textDecoration: "none" }}>{loc.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits of Professional Pet Bathing (Carousel) ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", marginBottom: "40px" }}>
            Benefits of Professional Dog and Pet Bathing
          </h2>
          <BenefitsCarousel />
        </div>
      </section>

      {/* ── The Best Pet Bathing Services ── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left — Text */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "16px" }}>
              The Best Pet Bathing Services for <span style={{ color: "#965B83" }}>Cats &amp; Dogs in Houston</span>
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              For pets, a clean coat and skin are directly linked to overall well-being. When they go too long without a bath, they can develop tangled fur, flaky skin, and, in some cases, unpleasant odors that could signal underlying health concerns. Matted fur can trap moisture and harbor bacteria, leading to discomfort and potential infections.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              At our facility, pet bathing services are tailored to each animal&apos;s specific needs. Dog bathing differs from cat bathing in both method and products used, and our trained bathers understand how to approach each pet type uniquely.
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              The process includes gentle washing with specially formulated shampoos, addressing specific concerns such as shedding or dandruff, and conditioning treatments to keep fur manageable and smooth.
            </p>
          </div>

          {/* Right — Image with gradient overlay */}
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/greyhound-dog-with-towel-after-bath.png.webp"
              alt="Pet bathing services Houston"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 20%, #965b83 100%)" }} />
            <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
              <Link
                href="/appointment-request"
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
                Get An Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "80px 20px 160px", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#FFF", textAlign: "center", marginBottom: "12px" }}>
            Discover Expert Advice and the Latest Trends
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#FFF", textAlign: "center", marginBottom: "48px" }}>
            Stay informed with our blog, featuring tips and trends to help you keep your pets clean, healthy, and looking their best.
          </p>
          <BlogCarousel posts={bathingBlogPosts} />
        </div>
      </section>
    </>
  );
}
