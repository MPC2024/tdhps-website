"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import BlogCarousel, { type BlogPost } from "@/components/BlogCarousel";
import StoreLocations from "@/components/StoreLocations";

const daycareBlogPosts: BlogPost[] = [
  { title: "The Benefits of Routine Dog Grooming in Houston's Climate", img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg", href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/" },
  { title: "How Often Should You Groom Your Dog? (Complete Guide)", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg", href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/" },
  { title: "5 Must-Know Grooming Trends for Galleria Pup Parents", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg", href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/" },
  { title: "Why Dog Daycare is Essential for Your Pet's Mental Health", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dogs-Playing.jpg", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How to Prepare Your Dog for Their First Daycare Day", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-group.jpg", href: "https://www.thedoghouseps.com/blog/" },
  { title: "The Benefits of Socialization for Dogs in Daycare", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "What to Expect From a Cage-Free Dog Daycare", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How Dog Daycare Helps Working Pet Parents in Houston", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Dog Daycare vs. Dog Walkers: What's the Difference?", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Signs Your Dog is Thriving at Doggy Daycare", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "Understanding Temperament Testing for Dog Daycare", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/cute-jack-russell-terrier-puppy-studio.webp", href: "https://www.thedoghouseps.com/blog/" },
  { title: "How Many Days a Week Should Your Dog Attend Daycare?", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp", href: "https://www.thedoghouseps.com/blog/" },
];

const daycarePackages = [
  { suite: "Daily Rate", size: "Per Pet", price: "$20", unit: "/ Day", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/playful-dog.png" },
  { suite: "10 Day Pass", size: "1 Day Free", price: "$180", unit: "/ Pass", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png" },
  { suite: "20 Day Pass", size: "3 Days Free", price: "$340", unit: "/ Pass", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png" },
  { suite: "30 Day Pass", size: "5 Days Free", price: "$500", unit: "/ Pass", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png" },
  { suite: "100 Day Pass", size: "25 Days Free", price: "$1,500", unit: "/ Pass", img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-group.jpg" },
];

const luxuryFeatures = (t: (key: TranslationKey) => string) => [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp", label: t("daycare_supervised_label"), desc: t("daycare_supervised_desc") },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogs-in-pool.png", label: t("daycare_outdoor_label"), desc: t("daycare_outdoor_desc") },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/twin-dogs.png", label: t("daycare_socialization_label"), desc: t("daycare_socialization_desc") },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/happy-dog.png", label: t("daycare_cagefree_label"), desc: t("daycare_cagefree_desc") },
];

const reviews = [
  {
    name: "Kevin Garnepudi",
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
    textEs: "He estado usando The Dog House para guardería de fin de semana y peluquería por un tiempo y no podría estar más feliz con la forma en que tratan a mi perro y a mí. El personal siempre es amable y servicial, y se nota que realmente se preocupan por los perros que cuidan. Finalmente, como la mayoría de los dueños de Pastor Alemán saben, secar al perro después de un baño es una tarea imposible, pero de alguna manera The Dog House siempre logra hacerlo.",
  },
  {
    name: "William Gillespie",
    text: "Alamo absolutely loves it here, they take awesome care of him while I am traveling for work. They are so good with all the pets, so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them.",
    textEs: "A Alamo le encanta este lugar, lo cuidan increíblemente bien mientras viajo por trabajo. Son tan buenos con todas las mascotas que decidí donar cinco cajas de juguetes nuevos de Bark Box para que sus amigos y otros padres de mascotas pudieran disfrutarlos.",
  },
  {
    name: "Ross Monsen",
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
    textEs: "Me encanta este lugar. Los he estado usando por años. He llevado a mi perro a un millón de peluqueros diferentes, pero este es mi favorito. Si eres como yo y no planificas bien, este es tu lugar. Pueden atenderme de último momento el 90% de las veces. Otros quieren cita con 1-2 meses de anticipación, lo cual es una locura. Excelente personal y a mi perro le encantan. El precio está en línea con todos los demás.",
  },
  {
    name: "Tiffany Tegeler",
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
    textEs: "He estado trayendo a Cooper aquí por aproximadamente un año. Siempre sale viéndose tan fresco y limpio. Es difícil cuando se trata de tocarle la cara y las patas, pero se nota que se toman su tiempo con él. Tienen un programa de puntos. Después de 10 puntos puedes obtener una peluquería gratis para tu perro, lo cual es una gran oferta. También SIEMPRE sale con un pañuelo, lo cual es una gran ventaja aquí.",
  },
];

const loyaltyPerks = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png", label: "Premium Amenities" },
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
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/6434-washington-ave.png",
    address: "6434 Washington Ave",
    hours: ["Monday – Friday: 7:00 AM – 7:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: 8:00 AM – 9:00 AM, 4:00 PM – 5:00 PM"],
    phone: "(713) 820-6140",
    email: "memorial@thedoghouseps.com",
    option: "OPTION 2",
  },
  {
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/2810-business-center-dr.png",
    address: "2810 Business Center Dr.",
    hours: ["Monday – Friday: 7:00 AM – 6:00 PM", "Saturday: 8:00 AM – 6:00 PM", "Sunday: Closed"],
    phone: "(713) 820-6140",
    email: "pearland@thedoghouseps.com",
    option: "OPTION 3",
  },
];

function CounterBox({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
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

function HoursModal({ onClose, t }: { onClose: () => void; t: (key: TranslationKey) => string }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>{t("daycare_modal_title")}</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("daycare_modal_hours_title")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}><tbody>
          {[["Monday","7:00 am – 7:00 pm"],["Tuesday","7:00 am – 7:00 pm"],["Wednesday","7:00 am – 7:00 pm"],["Thursday","7:00 am – 7:00 pm"],["Friday","7:00 am – 7:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
        <p style={{ fontSize: "13px", fontStyle: "italic", color: "#965B83" }}>{t("daycare_modal_sunday_note")}</p>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginTop: "24px", marginBottom: "12px" }}>{t("daycare_modal_pearland_title")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}><tbody>
          {[["Monday","7:00 am – 6:00 pm"],["Tuesday","7:00 am – 6:00 pm"],["Wednesday","7:00 am – 6:00 pm"],["Thursday","7:00 am – 6:00 pm"],["Friday","7:00 am – 6:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
      </div>
    </div>
  );
}

function VaccinationsModal({ onClose, t }: { onClose: () => void; t: (key: TranslationKey) => string }) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>{t("daycare_modal_vaccinations_title")}</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("daycare_modal_vaccinations_subtitle")}</h3>
        <p style={{ marginBottom: "12px" }}>{t("daycare_modal_vax_text")}</p>
        <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}><li>{t("daycare_modal_bordetella")}</li><li>{t("daycare_modal_distemper")}</li><li>{t("daycare_modal_rabies")}</li><li style={{ fontStyle: "italic", color: "#965B83" }}>{t("daycare_modal_influenza")}</li></ol>
      </div>
    </div>
  );
}

function PricingCarousel({ items }: { items: typeof daycarePackages }) {
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
              key={item.suite + "-" + position}
              style={{
                backgroundColor: isCenter ? "#965B83" : "rgba(150,91,131,0.08)",
                borderRadius: "20px",
                padding: isCenter ? "40px 40px 30px" : "30px 24px 20px",
                textAlign: "center",
                width: isCenter ? "570px" : "420px",
                transition: "all 0.4s ease",
                transform: isCenter ? "scale(1)" : "scale(0.9)",
                border: isCenter ? "none" : "1px solid rgba(150,91,131,0.2)",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() => setActiveIndex(itemIndex)}
            >
              <div style={{
                width: isCenter ? "200px" : "100px",
                height: isCenter ? "200px" : "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: isCenter ? "-120px auto 20px" : "-70px auto 16px",
                border: "4px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.4s ease",
              }}>
                <Image
                  src={item.img}
                  alt={item.suite}
                  width={200}
                  height={200}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h4 style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: isCenter ? "24px" : "18px",
                color: isCenter ? "#fff" : "#1F2124",
                marginBottom: "12px",
                transition: "all 0.3s ease",
              }}>
                {item.suite}
              </h4>
              <p style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: isCenter ? "16px" : "14px",
                color: isCenter ? "rgba(255,255,255,0.85)" : "#54595F",
                marginBottom: "12px",
                transition: "all 0.3s ease",
              }}>
                {item.size}
              </p>
              <div style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: isCenter ? "36px" : "24px",
                color: isCenter ? "#fff" : "#965B83",
                marginBottom: "8px",
                transition: "all 0.3s ease",
              }}>
                {item.price}
              </div>
              <p style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "12px",
                color: isCenter ? "rgba(255,255,255,0.7)" : "#54595F",
                marginBottom: "20px",
              }}>
                {item.unit}
              </p>
              <Link
                href="/appointment-request"
                style={{
                  display: "inline-block",
                  backgroundColor: isCenter ? "#fff" : "#965B83",
                  color: isCenter ? "#965B83" : "#fff",
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Book Now
              </Link>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "8px" }}>
        <button onClick={goPrev} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83", padding: "8px" }} aria-label="Previous">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button onClick={goNext} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83", padding: "8px" }} aria-label="Next">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCarousel({ reviews: reviewsData, language }: { reviews: typeof reviews; language: string }) {
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
          .review-card-daycare {
            padding: 24px 16px !important;
            min-height: auto !important;
            gap: 16px !important;
          }
          .review-card-daycare .review-card-content {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .review-carousel-arrows-daycare {
            display: none !important;
          }
          .review-carousel-container-daycare {
            gap: 0 !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="review-carousel-container-daycare"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}
        >
          <button className="review-carousel-arrows-daycare" onClick={goPrev} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" style={{ fontSize: "16px" }} />
          </button>
          <div className="review-card-daycare" style={{ flex: 1, backgroundColor: "#fff", borderRadius: "16px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "32px", overflow: "hidden", minHeight: "180px" }}>
            <div className="review-card-content" style={{ transition: "transform 0.3s ease, opacity 0.3s ease", transform: sliding ? "translateX(-40px)" : "translateX(0)", opacity: sliding ? 0 : 1, display: "flex", alignItems: "center", gap: "32px", width: "100%" }}>
              <div style={{ flexShrink: 0, width: "clamp(60px, 15vw, 80px)", height: "clamp(60px, 15vw, 80px)", borderRadius: "50%", border: "3px solid #965B83", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-comment-dots" style={{ fontSize: "clamp(20px, 5vw, 28px)", color: "#965B83" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
                  {language === "es" && review.textEs ? review.textEs : review.text}
                </p>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(14px, 1.5vw, 16px)", color: "#965B83", margin: 0 }}>
                  {review.name}
                </p>
              </div>
            </div>
          </div>
          <button className="review-carousel-arrows-daycare" onClick={goNext} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Next">
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

const getDaycareFaqs = (t: (key: TranslationKey) => string) => [
  { q: t("daycare_faq_combine_q"), a: t("daycare_faq_combine_a") },
  { q: t("daycare_faq_duration_q"), a: t("daycare_faq_duration_a") },
  { q: t("daycare_faq_segregated_q"), a: t("daycare_faq_segregated_a") },
  { q: t("daycare_faq_separate_q"), a: t("daycare_faq_separate_a") },
  { q: t("daycare_faq_special_q"), a: t("daycare_faq_special_a") },
];

export default function DogDayCareContent() {
  const { t, language } = useLanguage();
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [showVaccinationsModal, setShowVaccinationsModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {showHoursModal && <HoursModal onClose={() => setShowHoursModal(false)} t={t} />}
      {showVaccinationsModal && <VaccinationsModal onClose={() => setShowVaccinationsModal(false)} t={t} />}

      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dogs-Playing.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.6)" }} />
        <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path fill="#ffffff" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
          </svg>
        </div>
        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            {t("daycare_hero_title")} <span style={{ color: "#965B83" }}>{t("daycare_dog_day_care")}</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,20px)", color: "#54595F", marginBottom: "32px" }}>
            {t("daycare_hero_subtitle")}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">Schedule An Appointment</Link>
          </div>
        </div>
      </section>

      {/* ── Video / Stats Section ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>

          {/* Video Player */}
          <div style={{ marginBottom: "50px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
            <video controls playsInline poster="https://www.thedoghouseps.com/wp-content/uploads/2025/03/video-post.png" style={{ width: "100%", display: "block", maxHeight: "600px", objectFit: "cover" }}>
              <source src="/videos/donna-dog-daycare.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Counter */}
          <div style={{ display: "flex", gap: "30px", justifyContent: "center", marginBottom: "50px", flexWrap: "wrap" }}>
            <CounterBox target={30} suffix="+" label={t("daycare_years")} />
            <CounterBox target={40000} suffix="+" label={t("daycare_satisfied_clients")} />
          </div>

          {/* Content below counter */}
          <div style={{ textAlign: "center", maxWidth: "860px", marginInline: "auto" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(32px,4vw,56px)", color: "#1F2124", marginBottom: "24px", lineHeight: 1.1 }}>
              {t("daycare_success_heading")}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.8, margin: 0 }}>
              {t("daycare_center_description")}
            </p>
          </div>

        </div>
      </section>

      {/* ── Daycare Clients Special ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "12px", padding: "40px", width: "850px", maxWidth: "100%", boxShadow: "6px 6px 20px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/The-Dog-House-Logo-01-scaled-e1744211459470-1024x944.webp"
              alt="The Dog House Logo"
              width={120}
              height={120}
              loading="lazy"
              style={{ marginBottom: "20px", width: "120px", height: "auto" }}
            />
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", marginBottom: "24px" }}>
              {t("daycare_clients_special")}
            </h2>
            <div style={{ width: "100%", height: "2px", backgroundColor: "#1F2124", marginBottom: "20px" }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", marginBottom: "24px" }}>
              {[t("daycare_supervised_playtime"), t("daycare_outdoor_sessions"), t("daycare_cage_free")].map((item) => (
                <p key={item} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#1F2124", fontStyle: "italic", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="fa-solid fa-circle-check" style={{ color: "#965B83", fontSize: "16px", flexShrink: 0 }} />
                  {item}
                </p>
              ))}
            </div>
            <Link href="/appointment-request" style={{ display: "inline-block", backgroundColor: "#965B83", color: "#ffffff", padding: "12px 32px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "all 0.3s ease" }}>
              Schedule An Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Daycare Packages Carousel ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#1F2124", textAlign: "center", marginBottom: "12px" }}>
            {t("daycare_services_title")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", textAlign: "center", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 50px" }}>
            {t("daycare_services_description")}
          </p>
          <PricingCarousel items={daycarePackages} />
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3.5vw,48px)", color: "#1F2124", marginBottom: "24px", lineHeight: 1.1 }}>
              {t("daycare_ready_to_treat")}
            </p>
            <Link href="/appointment-request" className="btn-primary">{t("schedule_appointment")}</Link>
          </div>
        </div>
      </section>

      {/* ── Daycare Features (purple bg) ── */}
      <section style={{ backgroundColor: "#965B83", padding: "80px 20px", position: "relative" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px,3vw,42px)", color: "#ffffff", textAlign: "center", marginBottom: "50px" }}>
            {t("daycare_features_title")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {luxuryFeatures(t).map((f) => (
              <div key={f.label} style={{ backgroundColor: "#f7f2f5", borderRadius: "20px", overflow: "hidden", boxShadow: "6px 6px 20px rgba(0,0,0,0.15)" }}>
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <Image
                    src={f.img}
                    alt={f.label}
                    fill
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "22px", color: "#000000", marginBottom: "8px" }}>
                    {f.label}
                  </h3>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#000000", marginBottom: "0" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial Carousel ── */}
      <TestimonialCarousel reviews={reviews} language={language} />

      {/* ── Why Choose Our Daycare Services ── */}
      <section style={{ backgroundColor: "#FFF", padding: "80px 20px" }}>
        <div className="service-info-grid" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
          {/* Left Column — Icon Boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Hours of Operations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-regular fa-calendar" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("daycare_hours_title")}
              </h3>
              <button
                onClick={() => setShowHoursModal(true)}
                style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#965B83", backgroundColor: "transparent", border: "2px dashed #965B83", borderRadius: "50px", padding: "10px 30px", cursor: "pointer" }}
              >
                {t("daycare_hours_view")}
              </button>
            </div>

            {/* Required Vaccinations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-solid fa-syringe" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("daycare_vaccinations_title")}
              </h3>
              <button
                onClick={() => setShowVaccinationsModal(true)}
                style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#965B83", backgroundColor: "transparent", border: "2px dashed #965B83", borderRadius: "50px", padding: "10px 30px", cursor: "pointer" }}
              >
                {t("daycare_vaccinations_view")}
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
                {t("daycare_webcams_title")}
              </h3>
              <Link
                href="/pet-cam"
                style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#965B83", backgroundColor: "transparent", border: "2px dashed #965B83", borderRadius: "50px", padding: "10px 30px", cursor: "pointer", display: "inline-block", textDecoration: "none" }}
              >
                {t("daycare_webcams_view")}
              </Link>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", marginBottom: "24px", lineHeight: 1.1 }}>
              {t("daycare_why_choose_title")}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("daycare_why_choose_text1")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("daycare_why_choose_text2")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              {t("daycare_why_choose_text3")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Loyalty / Punch Card ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div className="grid-responsive" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", justifyItems: "center" }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png" alt="Premium Amenities" width={200} height={200} loading="lazy" style={{ width: "150px", height: "auto" }} />
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/30.png" alt="$30 Credit - Groom Punch Card" width={400} height={400} loading="lazy" style={{ width: "300px", height: "auto" }} />
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/just4you.png" alt="Just For You" width={200} height={200} loading="lazy" style={{ width: "150px", height: "auto" }} />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.6 }}>
              {t("daycare_loyalty_redeem")}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Image src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/loyalty-card.png" alt="Pawsitively Grateful Loyalty Card" width={500} height={350} loading="lazy" style={{ width: "100%", maxWidth: "450px", height: "auto" }} />
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
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#FFF", opacity: 0.7, zIndex: 1 }} />
        <div style={{ maxWidth: "1520px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#000", textAlign: "center", marginBottom: "50px" }}>
            {t("daycare_locations_title")}
          </h2>
          <div className="locations-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "stretch" }}>
            <div className="location-card" style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center", minHeight: "100%" }}>
              <div style={{ flex: "0 0 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={locations[0].img} alt={locations[0].address} width={200} height={200} quality={85} loading="lazy" style={{ width: "200px", height: "200px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <i className="fa-solid fa-location-dot" style={{ fontSize: "18px", color: "#fff" }} />
                  <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", fontWeight: 600, color: "#fff", margin: 0 }}>{locations[0].address}</h3>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  {locations[0].hours.map((h) => (<p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: "4px 0", lineHeight: 1.6 }}>{h}</p>))}
                </div>
                <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#fff", marginBottom: "12px", fontWeight: 600, letterSpacing: "1px" }}>{locations[0].option}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: "16px", color: "#fff" }} />
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", margin: 0 }}>{locations[0].phone}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px", color: "#fff" }} />
                  <a href={`mailto:${locations[0].email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", textDecoration: "none" }}>{locations[0].email}</a>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {locations.slice(1).map((loc) => (
                <div key={loc.address} className="location-card" style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center" }}>
                  <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={loc.img} alt={loc.address} width={150} height={150} quality={85} loading="lazy" style={{ width: "150px", height: "150px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <i className="fa-solid fa-location-dot" style={{ fontSize: "16px", color: "#fff" }} />
                      <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0 }}>{loc.address}</h3>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      {loc.hours.map((h) => (<p key={h} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: "2px 0", lineHeight: 1.3 }}>{h}</p>))}
                    </div>
                    <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "11px", color: "#fff", marginBottom: "8px", fontWeight: 600, letterSpacing: "0.5px" }}>{loc.option}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                      <i className="fa-solid fa-phone" style={{ fontSize: "12px", color: "#fff" }} />
                      <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", margin: 0 }}>{loc.phone}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i className="fa-solid fa-envelope" style={{ fontSize: "12px", color: "#fff" }} />
                      <a href={`mailto:${loc.email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "11px", color: "#fff", textDecoration: "none" }}>{loc.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits of Our Daycare ── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div className="grid-responsive" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "24px" }}>
              {t("daycare_benefits_title")}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("daycare_benefits_text1")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("daycare_benefits_text2")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("daycare_benefits_text3")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", lineHeight: 1.7, fontStyle: "italic" }}>
              {t("daycare_benefits_note")}
            </p>
          </div>
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/sportive-dog-performing-lure-coursing-competition.webp"
              alt="Dog daycare benefits Houston"
              width={600}
              height={500}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 20%, #965b83 100%)" }} />
            <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
              <Link href="/appointment-request" style={{ display: "inline-block", backgroundColor: "#fff", color: "#1F2124", padding: "12px 30px", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                {t("daycare_benefits_appointment")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div style={{ maxWidth: "1520px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "16px", padding: "48px", width: "850px", maxWidth: "100%", boxShadow: "6px 6px 20px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#1F2124", marginBottom: "32px" }}>
              {t("daycare_faq_title")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {getDaycareFaqs(t).map((faq, i) => (
                <div key={i} style={{ borderTop: i === 0 ? "1px solid #e0e0e0" : "none", borderBottom: "1px solid #e0e0e0" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", textAlign: "left", gap: "16px" }}
                  >
                    <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#1F2124", fontWeight: 500, lineHeight: 1.4 }}>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-${openFaq === i ? "up" : "down"}`} style={{ color: "#965B83", fontSize: "14px", flexShrink: 0, transition: "transform 0.2s" }} />
                  </button>
                  {openFaq === i && (
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, paddingBottom: "18px", margin: 0 }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
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
        <div style={{ maxWidth: "1520px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#FFF", textAlign: "center", marginBottom: "12px" }}>
            {t("daycare_blog_title")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#FFF", textAlign: "center", marginBottom: "48px" }}>
            {t("daycare_blog_description")}
          </p>
          <BlogCarousel posts={daycareBlogPosts} />
        </div>
      </section>

      <StoreLocations />
    </>
  );
}
