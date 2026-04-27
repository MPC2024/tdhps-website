import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thedoghouseps.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thedoghouseps.com",
        pathname: "/**",
      },
    ],
  },

  /* ── Performance Optimizations ── */
  experimental: {
    optimizeCss: true,
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },

  async redirects() {
    return [
      // ── Location redirects ──
      { source: "/locations/galleria", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland", destination: "/pearland-location", permanent: true },
      { source: "/locations/galleria-uptown-park-location", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial-park-location", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland-location", destination: "/pearland-location", permanent: true },

      // ── Service page redirects ──
      { source: "/day-care", destination: "/dog-day-care", permanent: true },
      { source: "/about", destination: "/our-staff", permanent: true },

      // ── WordPress blog URL redirects (301) ──
      // WordPress date-based permalink format: /YYYY/MM/DD/slug/ and /YYYY/MM/DD/slug
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/",
        destination: "/blog/:slug",
        permanent: true,
      },
      // WordPress month-based permalink format: /YYYY/MM/slug/ and /YYYY/MM/slug
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:slug/",
        destination: "/blog/:slug",
        permanent: true,
      },

      // ── WordPress query string redirects (handled via has condition) ──
      // Note: Query string redirects like ?p=123 are not directly supported in Next.js redirects
      // These would need to be handled via middleware or server-side logic

      // ── WordPress RSS/Feed redirects ──
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/", destination: "/blog", permanent: true },
      { source: "/feed/rss", destination: "/blog", permanent: true },
      { source: "/feed/rss/", destination: "/blog", permanent: true },

      // ── WordPress admin/system path redirects ──
      // These should 404 or redirect to homepage, but we'll redirect to homepage for SEO safety
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },

      // ── WordPress asset redirects (to homepage as they don't exist) ──
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
