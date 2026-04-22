"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface Review {
  text: string;
  textEs: string;
  author: string;
}

const reviews: Review[] = [
  {
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
    textEs: "He estado usando The Dog House para guardería de fin de semana y peluquería por un tiempo y no podría estar más feliz con la forma en que tratan a mi perro y a mí. El personal siempre es amable y servicial, y se nota que realmente se preocupan por los perros que cuidan. Finalmente, como la mayoría de los dueños de Pastor Alemán saben, secar al perro después de un baño es una tarea imposible, pero de alguna manera The Dog House siempre logra hacerlo.",
    author: "Kevin Garnepudi",
  },
  {
    text: "Alamo absolutely loves it here , they take awesome care of him while I am traveling for work . They are so good with all the pets , so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them .",
    textEs: "A Alamo le encanta este lugar, lo cuidan increíblemente bien mientras viajo por trabajo. Son tan buenos con todas las mascotas que decidí donar cinco cajas de juguetes nuevos de Bark Box para que sus amigos y otros padres de mascotas pudieran disfrutarlos.",
    author: "William Gillespie",
  },
  {
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
    textEs: "Me encanta este lugar. Los he estado usando por años. He llevado a mi perro a un millón de peluqueros diferentes, pero este es mi favorito. Si eres como yo y no planificas bien, este es tu lugar. Pueden atenderme de último momento el 90% de las veces. Otros quieren cita con 1-2 meses de anticipación, lo cual es una locura. Excelente personal y a mi perro le encantan. El precio está en línea con todos los demás.",
    author: "Ross Monsen",
  },
  {
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
    textEs: "He estado trayendo a Cooper aquí por aproximadamente un año. Siempre sale viéndose tan fresco y limpio. Es difícil cuando se trata de tocarle la cara y las patas, pero se nota que se toman su tiempo con él. Tienen un programa de puntos. Después de 10 puntos puedes obtener una peluquería gratis para tu perro, lo cual es una gran oferta. También SIEMPRE sale con un pañuelo, lo cual es una gran ventaja aquí.",
    author: "Tiffany Tegeler",
  },
];

export default function ReviewsCarousel() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
      <div
        className="reviews-carousel-container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous review"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#E8E0E5",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background-color 0.2s",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Top: Crescent arc + review icon */}
          <div style={{ flexShrink: 0, position: "relative", width: "80px", height: "80px" }}>
            {/* Purple crescent arc */}
            <svg viewBox="0 0 140 140" width="80" height="80" style={{ position: "absolute", top: 0, left: 0 }}>
              <path
                d="M70 5 A65 65 0 1 1 20 120"
                fill="none"
                stroke="#965B83"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M70 15 A55 55 0 1 1 28 112"
                fill="none"
                stroke="#C9A2BA"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
            {/* Speech bubble icon centered */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <svg viewBox="0 0 60 60" width="36" height="36" fill="none">
                <rect x="8" y="8" width="44" height="32" rx="6" stroke="#965B83" strokeWidth="2.5" fill="#F5EEF2" />
                <polygon points="20,40 28,40 22,50" fill="#F5EEF2" stroke="#965B83" strokeWidth="2.5" strokeLinejoin="round" />
                {/* Stars */}
                <circle cx="22" cy="22" r="3" fill="#965B83" />
                <circle cx="30" cy="22" r="3" fill="#965B83" />
                <circle cx="38" cy="22" r="3" fill="#965B83" />
                {/* Lines */}
                <line x1="18" y1="30" x2="42" y2="30" stroke="#965B83" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Bottom: Review text + author */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#1F2124",
                marginBottom: "20px",
              }}
            >
              {language === "es" ? review.textEs : review.text}
            </p>
            <p
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontWeight: 400,
                color: "#965B83",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {review.author}
            </p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next review"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#E8E0E5",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background-color 0.2s",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#965B83" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>


      <style>{`
        @media (max-width: 768px) {
          .reviews-carousel-container {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 20px !important;
          }
          .reviews-carousel-container button {
            display: none !important;
          }
          .reviews-card-inner {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
