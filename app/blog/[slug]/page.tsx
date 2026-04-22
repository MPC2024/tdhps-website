import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import BlogCTAButton from "@/components/BlogCTAButton";

/* ---------- static params ---------- */

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

/* ---------- metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    const title = post.title;
    const description =
      post.excerpt || `Read ${post.title} on The Dog House Pet Salon blog.`;
    const url = `https://www.thedoghouseps.com/blog/${slug}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [post.author],
        images: post.featuredImage ? [{ url: post.featuredImage }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: post.featuredImage ? [post.featuredImage] : [],
      },
      alternates: { canonical: url },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

/* ---------- page ---------- */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  /* JSON-LD for BlogPosting */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.thedoghouseps.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
      url: "https://www.thedoghouseps.com",
    },
    description: post.excerpt,
    mainEntityOfPage: `https://www.thedoghouseps.com/blog/${slug}`,
    ...(post.featuredImage && {
      image: { "@type": "ImageObject", url: post.featuredImage },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          ...(post.featuredImage
            ? {
                backgroundImage: `url(${post.featuredImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }
            : {
                background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
              }),
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "160px 20px 120px",
          overflow: "hidden",
        }}
      >
        {/* White overlay (only when featured image is present) */}
        {post.featuredImage && (
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
        )}

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
              fill="#ffffff"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: 3,
          }}
        >
          {/* Categories */}
          {post.categories.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "12px",
                    fontWeight: 600,
                    color: post.featuredImage ? "#965B83" : "#ffffff",
                    backgroundColor: post.featuredImage
                      ? "rgba(150,91,131,0.12)"
                      : "rgba(224,89,138,0.6)",
                    padding: "4px 14px",
                    borderRadius: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(28px,4vw,52px)",
              color: post.featuredImage ? "#1F2124" : "#ffffff",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "15px",
              color: post.featuredImage ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.7)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <time dateTime={post.date}>{formattedDate}</time>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* MDX Content */}
          <div className="blog-content">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div
              style={{
                marginTop: "48px",
                paddingTop: "24px",
                borderTop: "1px solid #eee",
              }}
            >
              <span
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#54595F",
                  marginRight: "12px",
                }}
              >
                Tags:
              </span>
              <div
                style={{
                  display: "inline-flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "12px",
                      color: "#54595F",
                      backgroundColor: "#F0F0F0",
                      padding: "4px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div style={{ marginTop: "48px" }}>
            <Link
              href="/blog"
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "15px",
                fontWeight: 600,
                color: "#965B83",
                textDecoration: "none",
              }}
            >
              &larr; Back to All Posts
            </Link>
          </div>
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
          <BlogCTAButton />
        </div>
      </section>
    </>
  );
}
