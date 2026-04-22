import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogGrid from "./BlogGrid";
import BlogCTAButton from "@/components/BlogCTAButton";
import BlogHeroText from "@/components/BlogHeroText";
import BlogCTAText from "@/components/BlogCTAText";

export const metadata: Metadata = {
  title: "Dog Grooming Tips & Pet Care Advice | Dog House Pet Salon Blog",
  description:
    "Explore dog grooming tips, pet care advice, and the latest updates from The Dog House blogs. Stay informed and keep your furry friend happy and healthy!",
  openGraph: {
    title: "Dog Grooming Tips & Pet Care Advice | Dog House Pet Salon Blog",
    description:
      "Explore dog grooming tips, pet care advice, and the latest updates from The Dog House blogs. Stay informed and keep your furry friend happy and healthy!",
    url: "https://www.thedoghouseps.com/blog",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url(https://www.thedoghouseps.com/wp-content/uploads/2025/03/image67.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "160px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#ffffff",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 2,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path
              fill="#F8F8F8"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <BlogHeroText postCount={posts.length} />
        </div>
      </section>

      {/* Blog Grid + Pagination (client) */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          marginBottom: "110px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <BlogCTAText />
          <BlogCTAButton />
        </div>
      </section>
    </>
  );
}
