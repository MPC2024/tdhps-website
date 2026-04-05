import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

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
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          minHeight: "380px",
          display: "flex",
          alignItems: "center",
          padding: "80px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "60px" }}
          >
            <path
              fill="#ffffff"
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
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(36px,5vw,72px)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#E0598A" }}>Blogs</span>
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginTop: "16px",
            }}
          >
            {posts.length} articles on grooming, pet care, and more
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1520px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {posts.map((post) => (
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
                        background:
                          "linear-gradient(135deg, #965B83 0%, #E0598A 100%)",
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
                  {/* Categories */}
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

                  {/* Date */}
                  <time
                    dateTime={post.date}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "13px",
                      color: "#999",
                      marginBottom: "12px",
                    }}
                  >
                    {new Date(post.date + "T00:00:00").toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
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
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#33373D",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,36px)",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Ready to Book a Grooming Appointment?
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "32px",
            }}
          >
            Houston&apos;s premier pet grooming, daycare, and boarding service.
          </p>
          <Link href="/appointment-request" className="btn-primary">
            Schedule An Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
