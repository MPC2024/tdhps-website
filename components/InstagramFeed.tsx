import Image from "next/image";

interface InstagramPost {
  id: string;
  imageUrl: string;
  permalink: string;
  caption?: string;
}

interface InstagramFeedProps {
  posts?: InstagramPost[];
  maxPosts?: number;
}

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=3&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.data || [])
      .filter((p: any) => p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM")
      .slice(0, 3)
      .map((p: any) => ({
        id: p.id,
        imageUrl: p.media_url,
        permalink: p.permalink,
        caption: p.caption?.slice(0, 100) || "",
      }));
  } catch {
    return [];
  }
}

export async function InstagramFeed({ posts, maxPosts = 3 }: InstagramFeedProps) {
  const feedPosts = posts || (await fetchInstagramPosts());
  const displayPosts = feedPosts.slice(0, maxPosts);

  if (displayPosts.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <a
          href="https://www.instagram.com/thedoghouseps/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "#965B83",
            color: "#ffffff",
            fontFamily: '"Outfit", sans-serif',
            fontSize: "18px",
            fontWeight: 600,
            padding: "16px 40px",
            borderRadius: "50px",
            textDecoration: "none",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          Follow @thedoghouseps on Instagram
        </a>
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .ig-feed-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .ig-feed-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .ig-feed-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1;
          background: #f5f5f5;
        }
        .ig-feed-card:hover .ig-feed-overlay {
          opacity: 1;
        }
        .ig-feed-overlay {
          position: absolute;
          inset: 0;
          background: rgba(150, 91, 131, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      `}} />
      <div className="ig-feed-grid">
        {displayPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-feed-card"
            style={{ display: "block", textDecoration: "none" }}
          >
            <Image
              src={post.imageUrl}
              alt={post.caption || "Instagram post from The Dog House Pet Salon"}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="ig-feed-overlay">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#ffffff" stroke="none" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
