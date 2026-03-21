import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Grooming Tips & Pet Care Advice | Dog House Pet Salon Blog",
  description:
    "Explore dog grooming tips, pet care advice, and the latest updates from The Dog House blogs. Stay informed and keep your furry friend happy and healthy!",
  openGraph: {
    title: "Dog Grooming Tips & Pet Care Advice | Dog House Pet Salon Blog",
    description:
      "Explore dog grooming tips, pet care advice, and the latest updates from The Dog House blogs. Stay informed and keep your furry friend happy and healthy!",
    url: "https://www.thedoghouseps.com/blog/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/blog/" },
};

const posts = [
  {
    title: "The Benefits of Routine Dog Grooming in Houston's Climate",
    excerpt:
      "Modern dogs need more than a quick walk around the block. Discover whether dog daycare in Houston is worth it, the real benefits it provides...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2026/03/Shihtzu_Grooming_Pearland.jpg",
    href: "https://www.thedoghouseps.com/the-benefits-of-routine-dog-grooming-in-houstons-climate/",
  },
  {
    title: "Is Dog Daycare Worth It? Here's What Houston Pet Parents Should Know",
    excerpt:
      "Modern dogs need more than a quick walk around the block. Discover whether dog daycare in Houston is worth it, the real benefits it provides...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/doggy-day-care-galleria-1024x1005.jpg",
    href: "https://www.thedoghouseps.com/is-dog-daycare-worth-it-heres-what-houston-pet-parents-should-know/",
  },
  {
    title: "Why Winter Grooming Is Essential for Your Dog's Health and Comfort",
    excerpt:
      "Winter grooming is essential for protecting your dog's skin, coat, and overall comfort during colder months. From dry air and indoor heating to wet winter...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2026/01/winter-dog-grooming-houston-1024x750.jpg",
    href: "https://www.thedoghouseps.com/https-www-thedoghouseps-com-how-often-should-you-groom-your-dog-complete-guide-2/",
  },
  {
    title: "How Often Should You Groom Your Dog? (Complete Guide)",
    excerpt:
      "Regular grooming is essential for your dog's health, comfort, and happiness. But how often should you groom your furry friend? The answer varies based on...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/12/golden-doodle-grooming-haircut-memorial-park-rice-village-1024x768.jpg",
    href: "https://www.thedoghouseps.com/how-often-should-you-groom-your-dog-complete-guide/",
  },
  {
    title: "5 Must-Know Grooming Trends for Galleria Pup Parents",
    excerpt:
      "As Houston's premier Galleria dog grooming destination, The Dog House Pet Salon blends style, wellness, and local...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Dog-Grooming-Trends.jpg",
    href: "https://www.thedoghouseps.com/galleria-grooming-trends-2025/",
  },
  {
    title: "Pearland Dog Daycare Playdates: What to Expect",
    excerpt:
      "At The Dog House Pet Salon Pearland, our Pearland dog daycare playdates offer more than just supervised fun—they're designed to promote socialization, mental stimulation, and...",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/05/Pearland-Dog-Daycare-Playdates.png",
    href: "https://www.thedoghouseps.com/pearland-pup-playdates-daycare-expectations/",
  },
  {
    title: "Dog Boarding Houston: What to Look for in a Quality Overnight Facility",
    excerpt:
      "Choosing the right dog boarding facility in Houston can feel overwhelming. Here's everything you need to know to find a safe, loving home-away-from-home for your pet.",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dog-in-bed.webp",
    href: "https://www.thedoghouseps.com/houston-pet-boarding/",
  },
  {
    title: "The Ultimate Guide to Pet Grooming for Houston Dog Owners",
    excerpt:
      "Houston's heat and humidity make regular grooming essential. Learn how to maintain your pet's coat, skin, and overall hygiene with tips from our expert groomers.",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/washing-pet-dog-corgi.webp",
    href: "https://www.thedoghouseps.com/pet-grooming/",
  },
  {
    title: "Doggy Daycare vs. Dog Walker: Which Is Right for Your Pet?",
    excerpt:
      "Both doggy daycare and dog walkers provide companionship and exercise, but which is the better fit for your dog's personality and lifestyle? We break down the pros and cons.",
    img: "https://www.thedoghouseps.com/wp-content/uploads/2025/03/dogie-daycare.jpg",
    href: "https://www.thedoghouseps.com/dog-day-care/",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ── */}
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
        </div>
      </section>

      {/* ── Blog Grid ── */}
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
                key={post.href}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "6px 6px 9px rgba(0,0,0,.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a href={post.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={post.img}
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
                </a>
                <div
                  style={{
                    padding: "28px 28px 32px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h2
                    style={{
                      fontFamily: '"Bowlby One SC", sans-serif',
                      fontSize: "20px",
                      color: "#1F2124",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "15px",
                      color: "#54595F",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                      flexGrow: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#965B83",
                      textDecoration: "none",
                    }}
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
