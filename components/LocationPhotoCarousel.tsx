"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Photo {
  url: string;
  location: string;
}

interface LocationPhotoCarouselProps {
  placeId: string;
  locationName: string;
}

export default function LocationPhotoCarousel({
  placeId,
  locationName,
}: LocationPhotoCarouselProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch(`/api/location-photos?placeId=${encodeURIComponent(placeId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          setPhotos(data.photos);
        }
      })
      .catch(() => {});
  }, [placeId]);

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
        Photos from Our {locationName} Location
      </h2>

      <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes location-carousel-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .location-carousel-track {
            display: flex;
            gap: 16px;
            animation: location-carousel-scroll 30s linear infinite;
          }
          .location-carousel-track:hover {
            animation-play-state: paused;
          }
          .location-carousel-item {
            flex: 0 0 200px;
            height: 200px;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .location-carousel-item:hover {
            transform: scale(1.15);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
            z-index: 2;
          }
        `}} />

        <div className="location-carousel-track">
          {duplicated.map((photo, i) => (
            <div key={i} className="location-carousel-item">
              <Image
                src={photo.url}
                alt={`Photo from ${locationName} location`}
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
