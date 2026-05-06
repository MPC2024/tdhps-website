"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Photo {
  url: string;
  location: string;
}

export default function ClientPhotoCarousel() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("/api/client-photos")
      .then((res) => res.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          setPhotos(data.photos);
        }
      })
      .catch(() => {});
  }, []);

  if (photos.length === 0) return null;

  const duplicated = [...photos, ...photos];

  return (
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#f9f7f9",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontFamily: '"Bowlby One SC", sans-serif',
          fontSize: "clamp(26px, 2.5vw, 36px)",
          color: "#1F2124",
          marginBottom: "40px",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        Our Happy Clients
      </h2>

      <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes carouselScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .client-carousel-track {
            display: flex;
            gap: 16px;
            animation: carouselScroll 30s linear infinite;
          }
          .client-carousel-track:hover {
            animation-play-state: paused;
          }
          .client-carousel-item {
            flex: 0 0 200px;
            height: 200px;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .client-carousel-item:hover {
            transform: scale(1.15);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
            z-index: 2;
          }
        `}} />

        <div className="client-carousel-track">
          {duplicated.map((photo, i) => (
            <div key={i} className="client-carousel-item">
              <Image
                src={photo.url}
                alt={`Happy client from ${photo.location}`}
                fill
                sizes="200px"
                quality={75}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
