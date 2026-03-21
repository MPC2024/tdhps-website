"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    text: "I have been using the dog house for weekend day care and grooming for a while and could not be happier with the way they treat my dog as well as myself. The staff is always friendly and accommodating and can tell they genuinely care about the dogs they look after. Finally as most German Shepherd owners know getting the dog dry after a bath is an impossible task yet some how the Dog House always is able to accomplish this!",
    author: "Kevin Garnepudi",
  },
  {
    text: "Alamo absolutely loves it here , they take awesome care of him while I am traveling for work . They are so good with all the pets , so I decided to donate five boxes worth of new Bark Box toys, so his friends and other pet parents could enjoy them .",
    author: "William Gillespie",
  },
  {
    text: "Love this place! I have been using them for years. I have taken my dog to a million different groomers, but this my got to. If you're like me and not a good planner, then this is your spot. They're able to squeeze me in last minute 90% of the time. Where others want an appointment 1-2 months in advance which is nuts. Great staff and my dog loves them. Price is in line with everyone else.",
    author: "Ross Monsen",
  },
  {
    text: "I've been taking Cooper here for about a year. He always leaves looking so fresh and clean! He is difficult when it comes to messing with his face and paws but I can tell they take their time with him. They have a punch program. After 10 punches you can get a free groom for your pup which is a great deal. He also ALWAYS leaves with a little bandana which is a huge perk here!",
    author: "Tiffany Tegeler",
  },
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            borderRadius: "50px",
            padding: "40px",
            border: "1px solid #965B83",
          }}
        >
          {/* Stars */}
          <div style={{ flexShrink: 0 }}>
            <Image
              src="https://www.thedoghouseps.com/wp-content/uploads/2025/04/rating_922004.png"
              alt="5 star rating"
              width={60}
              height={60}
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          {/* Review content */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "18px",
                lineHeight: 1.5,
                color: "#1F2124",
                marginBottom: "16px",
              }}
            >
              {review.text}
            </p>
            <h3
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "20px",
                fontWeight: 400,
                color: "#965B83",
              }}
            >
              {review.author}
            </h3>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label="Previous review"
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#965B83",
            padding: "8px",
          }}
        >
          <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", fill: "currentColor" }}>
            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#965B83",
            padding: "8px",
          }}
        >
          <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", fill: "currentColor" }}>
            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
          </svg>
        </button>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: i === current ? "#965B83" : "#ddd",
                cursor: "pointer",
                padding: 0,
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
