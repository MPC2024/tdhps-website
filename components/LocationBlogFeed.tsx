import Image from "next/image";
import Link from "next/link";
import { getPostsByLocation } from "@/lib/blog";

interface LocationBlogFeedProps {
  location: "galleria" | "memorial" | "pearland";
  locationName: string;
}

export default function LocationBlogFeed({
  location,
  locationName,
}: LocationBlogFeedProps) {
  const posts = getPostsByLocation(location, 4);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(24px,3vw,40px)",
              color: "#1F2124",
              marginBottom: "12px",
            }}
          >
            Latest from {locationName}
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              color: "#54595F",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Discover the latest news, tips, and updates from our {locationName}{" "}
            location
          </p>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              .location-blog-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 32px;
              }
              @media (max-width: 768px) {
                .location-blog-grid {
                  gap: 24px;
                }
              }
              .blog-card {
                display: flex;
                flex-direction: column;
                height: 100%;
                border-radius: 16px;
                overflow: hidden;
                background-color: #f9f9f9;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border: 1px solid #e8e8e8;
              }
              .blog-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 12px 24px rgba(150, 91, 131, 0.15);
              }
              .blog-card-image {
                position: relative;
                width: 100%;
                height: 200px;
                overflow: hidden;
                background-color: #e8e8e8;
              }
              .blog-card-image img {
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
              .blog-card-content {
                padding: 24px;
                display: flex;
                flex-direction: column;
                flex: 1;
              }
              .blog-card-date {
                font-family: "Outfit", sans-serif;
                font-size: 13px;
                color: #965B83;
                font-weight: 600;
                margin-bottom: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .blog-card-title {
                font-family: "Bowlby One SC", sans-serif;
                font-size: 18px;
                color: #1F2124;
                line-height: 1.4;
                margin-bottom: 12px;
                flex: 1;
              }
              .blog-card-excerpt {
                font-family: "Outfit", sans-serif;
                font-size: 14px;
                color: #54595F;
                line-height: 1.6;
                margin-bottom: 16px;
                flex: 1;
              }
              .blog-card-link {
                font-family: "Outfit", sans-serif;
                font-size: 14px;
                color: #965B83;
                font-weight: 600;
                text-decoration: none;
                display: inline-block;
                border-bottom: 2px solid #965B83;
                padding-bottom: 2px;
                transition: all 0.2s ease;
              }
              .blog-card-link:hover {
                border-bottom-color: #1F2124;
                color: #1F2124;
              }
            `,
          }}
        />

        <div className="location-blog-grid">
          {posts.map((post) => {
            const postDate = new Date(post.date);
            const formattedDate = postDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <div key={post.slug} className="blog-card">
                {post.featuredImage && (
                  <div className="blog-card-image">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="blog-card-content">
                  <div className="blog-card-date">{formattedDate}</div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">
                    {post.excerpt.length > 100
                      ? post.excerpt.substring(0, 100) + "..."
                      : post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              fontFamily: '"Outfit", sans-serif',
              fontSize: "15px",
              color: "#965B83",
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "2px solid #965B83",
              paddingBottom: "4px",
            }}
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
