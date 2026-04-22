"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export type BlogPost = { title: string; img: string; href: string };

export default function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const transition = (nextIndex: () => number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setStartIndex(nextIndex);
      setFading(false);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      transition(() => (startIndex + 1) % posts.length);
    }, 8000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex, posts.length]);

  const goNext = () => transition(() => (startIndex + 1) % posts.length);
  const goPrev = () => transition(() => (startIndex - 1 + posts.length) % posts.length);

  const visible = [0, 1, 2].map((offset) => posts[(startIndex + offset) % posts.length]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          transition: "opacity 0.4s ease",
          opacity: fading ? 0 : 1,
        }}
      >
        {visible.map((post, i) => (
          <a
            key={i}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "block",
              backgroundColor: "#F8F8F8",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "6px 6px 9px rgba(0,0,0,.08)",
            }}
          >
            <Image
              src={post.img}
              alt={post.title}
              width={500}
              height={280}
              loading="lazy"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "16px",
                  color: "#1F2124",
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  color: "#965B83",
                  fontWeight: 600,
                  marginTop: "12px",
                }}
              >
                {t("blog_read_more")}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation — below cards, no dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginTop: "36px",
        }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.6)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}
