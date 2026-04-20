"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const POSTS_PER_PAGE = 6;

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pagePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function goToPage(page: number) {
    if (page === currentPage) return;
    setVisible(false);
    setTimeout(() => {
      setCurrentPage(page);
      setVisible(true);
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
  }

  // Build page list
  const pages: (number | "...")[] = [];
  const WINDOW = 2;
  for (let p = 1; p <= totalPages; p++) {
    if (
      p <= 5 ||
      p === totalPages ||
      (p >= currentPage - WINDOW && p <= currentPage + WINDOW)
    ) {
      if (
        pages.length > 0 &&
        typeof pages[pages.length - 1] === "number" &&
        (pages[pages.length - 1] as number) < p - 1
      ) {
        pages.push("...");
      }
      pages.push(p);
    }
  }

  const arrowStyle: React.CSSProperties = {
    fontFamily: '"Outfit", sans-serif',
    fontSize: "18px",
    fontWeight: 400,
    color: "#54595F",
    textDecoration: "none",
    padding: "6px 10px",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "none",
    border: "none",
  };

  const pageStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: '"Outfit", sans-serif',
    fontSize: "15px",
    fontWeight: active ? 700 : 500,
    color: active ? "#ffffff" : "#1F2124",
    backgroundColor: active ? "#965B83" : "transparent",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    flexShrink: 0,
    cursor: "pointer",
    border: "none",
  });

  return (
    <div ref={gridRef}>
      {/* Blog Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        {pagePosts.map((post) => (
          <article
            key={post.slug}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "6px 6px 9px rgba(0,0,0,.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href={`/blog/${post.slug}`}>
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={600}
                  height={400}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    background: "linear-gradient(135deg, #965B83 0%, #E0598A 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "48px",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    TDHPS
                  </span>
                </div>
              )}
            </Link>
            <div
              style={{
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              {post.categories.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "12px",
                  }}
                >
                  {post.categories.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#965B83",
                        backgroundColor: "rgba(150,91,131,0.1)",
                        padding: "3px 10px",
                        borderRadius: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <h2
                style={{
                  fontFamily: '"Bowlby One SC", sans-serif',
                  fontSize: "20px",
                  color: "#1F2124",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {post.title}
                </Link>
              </h2>

              <time
                dateTime={post.date}
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "13px",
                  color: "#999",
                  marginBottom: "12px",
                }}
              >
                {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  flexGrow: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                aria-label={`Read more about ${post.title}`}
                style={{
                  display: "inline-block",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#965B83",
                  textDecoration: "none",
                }}
              >
                Read More <span className="sr-only">: {post.title}</span> &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              backgroundColor: "#ffffff",
              borderRadius: "50px",
              padding: "8px 16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              border: "1px solid #EBEBEB",
            }}
          >
            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage <= 1}
              style={{ ...arrowStyle, color: currentPage <= 1 ? "#CCCCCC" : "#54595F" }}
              aria-label="Previous page"
            >
              &#8249;
            </button>

            {/* Page numbers */}
            {pages.map((p, i) =>
              p === "..." ? (
                <span
                  key={`e-${i}`}
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "15px",
                    color: "#54595F",
                    padding: "0 4px",
                    letterSpacing: "2px",
                  }}
                >
                  ···
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => goToPage(p as number)}
                  style={pageStyle(p === currentPage)}
                  aria-label={`Page ${p}`}
                  aria-current={p === currentPage ? "page" : undefined}
                >
                  {p}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
              style={{ ...arrowStyle, color: currentPage >= totalPages ? "#CCCCCC" : "#54595F" }}
              aria-label="Next page"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
