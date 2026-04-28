"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import BlogCarousel, { type BlogPost } from "@/components/BlogCarousel";
import StoreLocations from "@/components/StoreLocations";

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

const pricingExtras = [
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/de-matting.jpg", label: "De-Matting", labelEs: "Desenredado", price: "$40 / Hour", priceEs: "$40 / Hora" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-brushing.jpg", label: "Brushing", labelEs: "Cepillado", price: "$40 / Hour", priceEs: "$40 / Hora" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-furminating.jpg", label: "Furminating", labelEs: "Deslanado", price: "$40 / Hour", priceEs: "$40 / Hora" },
  { img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-de-tick.jpg", label: "De-Tick", labelEs: "Desparasitación", price: "$20 / Hour", priceEs: "$20 / Hora" },
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
        paddingBottom: "min(56.25%, 450px)",
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
            loading="lazy"
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

function PricingCarousel({ items, language }: { items: typeof pricingExtras; language: string }) {
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
    <div style={{ marginBottom: "40px", position: "relative" }}>
      {/* Left arrow */}
      <button
        onClick={goPrev}
        style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(150,91,131,0.2)", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#965B83", fontSize: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        aria-label="Previous"
      >
        <i className="fa-solid fa-arrow-left" />
      </button>
      {/* Right arrow */}
      <button
        onClick={goNext}
        style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(150,91,131,0.2)", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#965B83", fontSize: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
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
        padding: "80px 50px 40px",
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
                {language === "es" && item.labelEs ? item.labelEs : item.label}
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
                {language === "es" && item.priceEs ? item.priceEs : item.price}
              </div>
            </div>
          );
        })}
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
          .review-card-bathing {
            padding: 24px 16px !important;
            min-height: auto !important;
            gap: 16px !important;
          }
          .review-card-bathing .review-card-content {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .review-carousel-arrows-bathing {
            display: none !important;
          }
          .review-carousel-container-bathing {
            gap: 0 !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="review-carousel-container-bathing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}
        >
          <button className="review-carousel-arrows-bathing" onClick={goPrev} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" style={{ fontSize: "16px" }} />
          </button>
          <div className="review-card-bathing" style={{ flex: 1, backgroundColor: "#fff", borderRadius: "16px", padding: "40px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: "32px", overflow: "hidden", minHeight: "180px" }}>
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
          <button className="review-carousel-arrows-bathing" onClick={goNext} style={{ background: "none", border: "2px solid #E0E0E0", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#965B83" }} aria-label="Next">
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

function HoursModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>{t("bathing_hours_modal_title")}</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("bathing_galleria_memorial")}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}><tbody>
          {[["Monday","7:00 am – 7:00 pm"],["Tuesday","7:00 am – 7:00 pm"],["Wednesday","7:00 am – 7:00 pm"],["Thursday","7:00 am – 7:00 pm"],["Friday","7:00 am – 7:00 pm"],["Saturday","8:00 am – 6:00 pm"],["Sunday","Closed"]].map(([d,h]) => (
            <tr key={d} style={{ borderBottom: "1px solid #f0f0f0" }}><td style={{ padding: "8px 0", fontWeight: 500 }}>{d}</td><td style={{ padding: "8px 0", textAlign: "right" }}>{h}</td></tr>
          ))}
        </tbody></table>
        <p style={{ fontSize: "13px", fontStyle: "italic", color: "#965B83" }}>{t("sunday_note")}</p>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginTop: "24px", marginBottom: "12px" }}>{t("bathing_pearland_hours")}</h3>
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
  const { t } = useLanguage();
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }} onClick={onClose}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", maxWidth: "700px", width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "40px", position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#965B83" }}><i className="fa-solid fa-xmark" /></button>
        <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "24px", color: "#965B83", marginBottom: "24px" }}>{t("bathing_vaccinations_modal_title")}</h2>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("bathing_vax_grooming")}</h3>
        <p style={{ marginBottom: "12px" }}>{t("bathing_vax_grooming_text")}</p>
        <ol style={{ paddingLeft: "20px", listStyleType: "decimal", marginBottom: "24px" }}><li>Bordetella</li></ol>
        <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#965B83", marginBottom: "12px" }}>{t("bathing_vax_boarding")}</h3>
        <p style={{ marginBottom: "12px" }}>{t("bathing_vax_boarding_text")}</p>
        <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }}><li>Bordetella</li><li>Distemper</li><li>Rabies</li><li style={{ fontStyle: "italic", color: "#965B83" }}>Influenza is NOT REQUIRED but RECOMMENDED</li></ol>
      </div>
    </div>
  );
}

const bathingServices = [
  { titleKey: "bathing_teeth_brushing" as const, textKey: "bathing_teeth_desc" as const },
  { titleKey: "bathing_thorough_wash" as const, textKey: "bathing_wash_desc" as const },
  { titleKey: "bathing_nail_trimming" as const, textKey: "bathing_nail_desc" as const },
  { titleKey: "bathing_ear_cleaning" as const, textKey: "bathing_ear_desc" as const },
];

function BathingServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setVisibleCount(1);
      else if (window.innerWidth <= 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const { t } = useLanguage();

  return (
    <div>
      <div className="bathing-services-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: "24px", marginBottom: "40px" }}>
        {getVisibleItems().map((item) => (
          <div key={item.titleKey} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center" }}>
            <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "12px", lineHeight: 1.3 }}>
              {t(item.titleKey)}
            </h4>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>
              {t(item.textKey)}
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
  { icon: "fa-solid fa-hand-sparkles", titleKey: "bathing_benefits_skin" as const, textKey: "bathing_benefits_skin_text" as const },
  { icon: "fa-solid fa-shirt", titleKey: "bathing_benefits_coat" as const, textKey: "bathing_benefits_coat_text" as const },
  { icon: "fa-solid fa-wind", titleKey: "bathing_benefits_odor" as const, textKey: "bathing_benefits_odor_text" as const },
  { icon: "fa-solid fa-stethoscope", titleKey: "bathing_benefits_health" as const, textKey: "bathing_benefits_health_text" as const },
  { icon: "fa-solid fa-scissors", titleKey: "bathing_benefits_grooming" as const, textKey: "bathing_benefits_grooming_text" as const },
];

function BenefitsCarousel() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setStartIndex((prev) => (prev + visibleCount) % benefitsData.length);
        setSliding(false);
      }, 300);
    }, 8000);
    return () => clearInterval(timer);
  }, [visibleCount]);

  const goNext = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + visibleCount) % benefitsData.length);
      setSliding(false);
    }, 300);
  };

  const goPrev = () => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - visibleCount + benefitsData.length) % benefitsData.length);
      setSliding(false);
    }, 300);
  };

  const visible = [];
  for (let i = 0; i < visibleCount; i++) {
    visible.push(benefitsData[(startIndex + i) % benefitsData.length]);
  }

  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
        gap: "24px",
        marginBottom: "40px",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: sliding ? 0 : 1,
        transform: sliding ? "translateX(-20px)" : "translateX(0)",
      }}>
        {visible.map((item) => (
          <div key={item.titleKey} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "30px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "#965B831A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className={item.icon} style={{ fontSize: "22px", color: "#965B83" }} />
            </div>
            <div>
              <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", marginBottom: "8px", lineHeight: 1.3 }}>
                {t(item.titleKey)}
              </h4>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, margin: 0 }}>
                {t(item.textKey)}
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
  const { t, language } = useLanguage();
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
          minHeight: "clamp(400px, 60vh, 700px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)",
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

        <div style={{ maxWidth: "1520px", width: "100%", margin: "130px auto 50px", padding: "0 20px", position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(28px, 5vw, 60px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.1 }}>
            {t("bathing_pet_bathing")} <span style={{ color: "#965B83" }}>{t("bathing_houston")}</span>
          </h1>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "clamp(16px,2vw,22px)", color: "#1F2124", marginBottom: "32px", maxWidth: "600px" }}>
            {t("bathing_hero_text")}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/appointment-request" className="btn-primary">{t("book_appointment")}</Link>
            <a href="/calculator" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1fb6b0", color: "#ffffff", padding: "12px clamp(20px, 3vw, 30px)", borderRadius: "50px", fontFamily: '"Outfit", sans-serif', fontWeight: 600, fontSize: "18px", display: "inline-flex", alignItems: "center", textDecoration: "none", transition: "opacity 0.3s ease" }}>
              {t("bathing_get_price_estimate")}
            </a>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#54595F", marginTop: "12px" }}>
            <i className="fa-solid fa-circle-check" style={{ color: "#965B83", marginRight: "6px" }} />
            {t("bathing_no_obligation")}
          </p>
        </div>
      </section>

      {/* ── Professional Pet Bathing + Video ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: 1.2 }}>
            {t("bathing_professional_title")} <span style={{ color: "#965B83" }}>{t("bathing_professional_title_highlight")}</span>
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", marginBottom: "40px" }}>
            {t("bathing_book_spa_day")}
          </p>

          {/* YouTube Video Player with Poster */}
          <VideoPlayer />

          {/* Counter Boxes */}
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "50px", flexWrap: "wrap" }}>
            <CounterBox target={30} suffix="+" label={t("bathing_30_years_label")} />
            <CounterBox target={40000} suffix="+" label={t("bathing_satisfied_clients")} />
          </div>

          {/* Success Text */}
          <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", maxWidth: "892px", margin: "0 auto 16px", lineHeight: "1.2em" }}>
            {language === "es" ? (
              <>Más de <span style={{ color: "#965B83" }}>30+ Años</span> de Éxito con <span style={{ color: "#965B83" }}>40,000+</span> Clientes Satisfechos</>
            ) : (
              <>Over <span style={{ color: "#965B83" }}>30+ Years</span> of Success with <span style={{ color: "#965B83" }}>40,000+</span> Satisfied Clients</>
            )}
          </h3>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
            {t("bathing_center_description")}
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
          padding: "100px 35px",
        }}
      >
        {/* White overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.2)" }} />

        <div style={{ maxWidth: "1520px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-start" }}>
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
              {t("bathing_total_package")}
            </h2>
            <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "2px solid #1F2124" }}>
              <Link href="/appointment-request" className="btn-primary">{t("bathing_book_now")}</Link>
            </div>
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: "20px", color: "#965B83", fontWeight: 600, marginBottom: "16px" }}>{t("bathing_includes")}</h3>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "none", padding: 0, margin: 0 }}>
              <li>{t("bathing_item1")}</li>
              <li>{t("bathing_item2")}</li>
              <li>{t("bathing_item3")}</li>
              <li>{t("bathing_item4")}</li>
              <li>{t("bathing_item5")}</li>
              <li>✔ Pet bathing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 35px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", textAlign: "center", marginBottom: "8px", lineHeight: 1.2 }}>
            {t("bathing_services_pricing")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", textAlign: "center", marginBottom: "40px" }}>
            {t("bathing_groomed_perfection")}
          </p>
          <PricingCarousel items={pricingExtras} language={language} />
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 0" }}>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "13px", color: "#888", lineHeight: 1.6, textAlign: "center", marginBottom: "8px" }}>
              {t("bathing_pricing_vary")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "12px", color: "#999", lineHeight: 1.6, textAlign: "center", fontStyle: "italic" }}>
              *{t("bathing_pricing_note")}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: "#965B83", padding: "32px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(22px,3vw,36px)", color: "#fff", margin: 0 }}>
            {t("bathing_ready_treat")}
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
            {t("bathing_schedule_appointment")}
          </Link>
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <TestimonialCarousel reviews={reviews} language={language} />

      {/* ── Why Choose Our Pet Bathing Services Section ── */}
      <section style={{ backgroundColor: "#FFF", padding: "80px 20px" }}>
        <div className="service-info-grid" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
          {/* Left Column — Icon Boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Hours of Operations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-regular fa-calendar" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("bathing_hours_title")}
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
                {t("bathing_view_btn")}
              </button>
            </div>

            {/* Required Vaccinations Box */}
            <div style={{ backgroundColor: "#965B831A", borderRadius: "16px", padding: "30px", textAlign: "center" }}>
              <i className="fa-solid fa-syringe" style={{ fontSize: "40px", color: "#965B83", marginBottom: "16px", display: "block" }} />
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#1F2124", marginBottom: "16px" }}>
                {t("bathing_vaccinations_title")}
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
                {t("bathing_view_btn")}
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
                {t("bathing_webcams_title")}
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
              {t("bathing_why_choose_title")}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("bathing_why_choose_intro")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("bathing_why_choose_p1")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "24px" }}>
              {t("bathing_why_choose_p2")}
            </p>
            <h4 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "20px", color: "#965B83", marginBottom: "16px" }}>
              {t("bathing_pamper_with")}
            </h4>
            <ul style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 2.2, listStyle: "disc", paddingLeft: "20px", margin: "0 0 24px" }}>
              <li>{t("bathing_service_item1")}</li>
              <li>{t("bathing_service_item2")}</li>
              <li>{t("bathing_service_item3")}</li>
              <li>{t("bathing_service_item4")}</li>
              <li>{t("bathing_service_item5")}</li>
              <li>{t("bathing_service_item6")}</li>
            </ul>
            <Link
              href="/pet-cam"
              style={{
                display: "inline-block",
                backgroundColor: "#965B83",
                color: "#fff",
                padding: "12px clamp(20px, 3vw, 30px)",
                borderRadius: "50px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              {language === "es" ? "Ver Cámaras Web" : "View Webcams"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pet Bathing Info Cards ── */}
      <section style={{ position: "relative", backgroundColor: "#965B83", padding: "clamp(100px, 15vh, 160px) 20px clamp(60px, 10vh, 120px)" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
          {/* Left Column — What Is Pet Bathing */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/washing-pet-dog-corgi.webp"
              alt="Pet bathing - washing corgi"
              width={700}
              height={400}
              loading="lazy"
              style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
            />
            <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "0 0 16px 16px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(20px,2.5vw,28px)", color: "#1F2124", marginBottom: "8px", lineHeight: 1.2 }}>
                {t("bathing_what_is_title")}
              </h3>
              <p style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "14px", color: "#965B83", marginBottom: "16px" }}>
                {t("bathing_what_is_subtitle")}
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
                {t("bathing_what_is_text")}
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
              loading="lazy"
              style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
            />
            <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "0 0 16px 16px" }}>
              <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(20px,2.5vw,28px)", color: "#1F2124", marginBottom: "16px", lineHeight: 1.2 }}>
                {t("bathing_why_essential_title")}
              </h3>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7, marginBottom: "12px" }}>
                {t("bathing_why_essential_p1")}
              </p>
              <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.7 }}>
                {t("bathing_why_essential_p2")}
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
            {t("bathing_comprehensive_services")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", maxWidth: "700px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            {t("bathing_services_intro")}
          </p>
          <BathingServicesCarousel />
        </div>
      </section>

      {/* ── Loyalty / Punch Card ── */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div className="grid-responsive" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", justifyItems: "center" }}>
          {/* Left — Premium Shampoos + $30 Credit + Just For You */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/image778.png"
              alt="Premium Shampoos"
              width={200}
              height={200}
              loading="lazy"
              style={{ width: "150px", height: "auto" }}
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/30.png"
              alt="$30 Credit - Groom Punch Card"
              width={400}
              height={400}
              loading="lazy"
              style={{ width: "300px", height: "auto" }}
            />
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/just4you.png"
              alt="Just For You"
              width={200}
              height={200}
              loading="lazy"
              style={{ width: "150px", height: "auto" }}
            />
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#54595F", lineHeight: 1.6 }}>
              {t("bathing_redeem_loyalty")}
            </p>
          </div>
          {/* Right — Loyalty Card */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/loyalty-card.png"
              alt="Pawsitively Grateful Loyalty Card"
              width={800}
              height={560}
              loading="lazy"
              quality={95}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 768px) 90vw, 100vw"
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
        <div style={{ maxWidth: "1520px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "clamp(26px,3vw,40px)", color: "#000", textAlign: "center", marginBottom: "50px" }}>
            {t("bathing_locations_heading")}
          </h2>
          <div className="locations-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "stretch" }}>
            {/* LEFT: Large Richmond Ave Card */}
            <div className="location-card" style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center", minHeight: "100%" }}>
              <div style={{ flex: "0 0 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={locations[0].img} alt={locations[0].address} width={200} height={200} quality={85} loading="lazy" style={{ width: "200px", height: "200px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
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
                <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#fff", marginTop: "4px", marginBottom: "8px" }}>
                  After Hours: <a href="tel:+17139666350" style={{ color: "#fff" }}>(713) 966-6350</a>
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: "16px" }} />
                  <a href={`mailto:${locations[0].email}`} style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#fff", textDecoration: "none" }}>{locations[0].email}</a>
                </div>
              </div>
            </div>

            {/* RIGHT: Stacked cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {locations.slice(1).map((loc) => (
                <div key={loc.address} className="location-card" style={{ backgroundColor: "#965B83", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "row", gap: "24px", alignItems: "center" }}>
                  <div style={{ flex: "0 0 150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={loc.img} alt={loc.address} width={150} height={150} quality={85} loading="lazy" style={{ width: "150px", height: "150px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", objectFit: "cover" }} />
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
                    <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "10px", color: "#fff", marginTop: "2px", marginBottom: "4px" }}>
                      After Hours: <a href="tel:+17139666350" style={{ color: "#fff" }}>(713) 966-6350</a>
                    </p>
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
            {t("bathing_benefits_title")}
          </h2>
          <BenefitsCarousel />
        </div>
      </section>

      {/* ── The Best Pet Bathing Services ── */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div className="grid-responsive" style={{ maxWidth: "1520px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left — Text */}
          <div>
            <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#1F2124", lineHeight: 1.1, marginBottom: "16px" }}>
              {t("bathing_best_services_title")}
            </h2>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("bathing_best_services_p1")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7, marginBottom: "16px" }}>
              {t("bathing_best_services_p2")}
            </p>
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "16px", color: "#54595F", lineHeight: 1.7 }}>
              {t("bathing_best_services_p3")}
            </p>
          </div>

          {/* Right — Image with gradient overlay */}
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/03/greyhound-dog-with-towel-after-bath.png.webp"
              alt="Pet bathing services Houston"
              width={1200}
              height={1000}
              loading="lazy"
              quality={95}
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
                {t("bathing_get_appointment")}
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
        <div style={{ maxWidth: "1520px", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "50px", color: "#FFF", textAlign: "center", marginBottom: "12px" }}>
            {t("bathing_discover_expert")}
          </h2>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "18px", color: "#FFF", textAlign: "center", marginBottom: "48px" }}>
            {t("bathing_blog_intro")}
          </p>
          <BlogCarousel posts={bathingBlogPosts} />
        </div>
      </section>

      <StoreLocations />
    </>
  );
}
