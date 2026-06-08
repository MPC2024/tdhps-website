import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dog Boarding in Houston | Tips, Requirements & Guide | The Dog House",
  description:
    "Complete guide to dog boarding in Houston. Learn about boarding requirements, vaccinations, preparation tips, and how to choose the right facility for your dog.",
  openGraph: {
    title: "Dog Boarding in Houston | Tips, Requirements & Guide",
    description:
      "Complete guide to dog boarding in Houston. Learn about boarding requirements, vaccinations, preparation tips, and how to choose the right facility for your dog.",
    url: "https://www.thedoghouseps.com/blog/dog-boarding",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/blog/dog-boarding" },
};

export default function DogBoardingCategory() {
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter((post) =>
    post.categories.includes("Dog Boarding")
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dog Boarding in Houston | Tips, Requirements & Guide",
    description:
      "Complete guide to dog boarding in Houston. Learn about boarding requirements, vaccinations, preparation tips, and how to choose the right facility.",
    url: "https://www.thedoghouseps.com/blog/dog-boarding",
    publisher: {
      "@type": "Organization",
      name: "The Dog House Pet Salon",
      url: "https://www.thedoghouseps.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thedoghouseps.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.thedoghouseps.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dog Boarding",
        item: "https://www.thedoghouseps.com/blog/dog-boarding",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #965B83 0%, #1F2124 100%)",
          padding: "120px 20px 80px",
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
          <h1
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(32px,5vw,56px)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Dog Boarding Guide & Resources
          </h1>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "18px",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
              marginBottom: "24px",
            }}
          >
            Everything you need to know about boarding your dog in Houston. Learn about vaccination requirements, preparation checklists, how to ease separation anxiety, and what to expect during your dog's stay.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/houston-pet-boarding"
              style={{
                display: "inline-block",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "15px",
                fontWeight: 600,
                color: "#965B83",
                backgroundColor: "#ffffff",
                padding: "12px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Book Boarding Stay
            </Link>
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "15px",
                fontWeight: 600,
                color: "#ffffff",
                borderBottom: "2px solid #ffffff",
                padding: "12px 0",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              marginBottom: "60px",
              paddingBottom: "40px",
              borderBottom: "2px solid #F0F0F0",
            }}
          >
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "28px",
                color: "#1F2124",
                marginBottom: "16px",
              }}
            >
              Safe, Professional Dog Boarding
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                lineHeight: 1.7,
                maxWidth: "700px",
              }}
            >
              Boarding your dog requires preparation, trust, and the right facility. From understanding vaccination requirements to preparing for overnight stays, our boarding guides help ensure your dog has a safe, comfortable experience while you're away.
            </p>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginBottom: "60px",
            }}
          >
            {categoryPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                <Link href={`/blog/${post.slug}`}>
                  {post.featuredImage ? (
                    <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
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
                          fontSize: "36px",
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
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <time
                    dateTime={post.date}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "13px",
                      color: "#999",
                      marginBottom: "8px",
                    }}
                  >
                    {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>

                  <h3
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "18px",
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
                  </h3>

                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      color: "#54595F",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                      flexGrow: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#965B83",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div
            style={{
              backgroundColor: "#F8F8F8",
              padding: "48px 32px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: '"Bowlby One SC", sans-serif',
                fontSize: "28px",
                color: "#1F2124",
                marginBottom: "12px",
              }}
            >
              Ready to Book a Boarding Stay?
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "16px",
                color: "#54595F",
                marginBottom: "24px",
              }}
            >
              Let The Dog House care for your dog while you travel. Safe, professional boarding with experienced staff.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:713-820-6140"
                style={{
                  display: "inline-block",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "#965B83",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Call 713-820-6140
              </a>
              <Link
                href="/houston-pet-boarding"
                style={{
                  display: "inline-block",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#965B83",
                  borderBottom: "2px solid #965B83",
                  padding: "12px 0",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                View Boarding Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "24px",
              color: "#1F2124",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Boarding Services at Our Locations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { name: "Overnight Boarding", href: "/houston-pet-boarding" },
              { name: "Extended Stays", href: "/houston-pet-boarding" },
              { name: "Facility Tours", href: "/houston-pet-boarding" },
              { name: "Vacation Care", href: "/appointment-request" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                style={{
                  display: "block",
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  textAlign: "center",
                  border: "1px solid #EBEBEB",
                  transition: "all 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#965B83",
                  }}
                >
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
