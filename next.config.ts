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
      // Nav links use /locations/<slug> -- redirect straight to the real page route
      { source: "/locations/galleria", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland", destination: "/pearland-location", permanent: true },
      // Legacy WP long-form paths -- also go directly to the real page route
      { source: "/locations/galleria-uptown-park-location", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial-park-location", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland-location", destination: "/pearland-location", permanent: true },
      // Other legacy redirects
      { source: "/day-care", destination: "/dog-day-care", permanent: true },
      { source: "/about", destination: "/our-staff", permanent: true },

      // ── WordPress blog URL redirects (301) ──
      // WordPress date-based permalink format: /YYYY/MM/DD/slug/
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      // WordPress date-based with trailing slash
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/",
        destination: "/blog/:slug",
        permanent: true,
      },
      // WordPress month-based permalink format: /YYYY/MM/slug/
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
