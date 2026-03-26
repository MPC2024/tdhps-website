import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

  async redirects() {
    return [
      // Nav links use /locations/<slug> — redirect straight to the real page route
      { source: "/locations/galleria", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland", destination: "/pearland-location", permanent: true },
      // Legacy WP long-form paths — also go directly to the real page route
      { source: "/locations/galleria-uptown-park-location", destination: "/galleria-uptown-park-location", permanent: true },
      { source: "/locations/memorial-park-location", destination: "/memorial-park-location", permanent: true },
      { source: "/locations/pearland-location", destination: "/pearland-location", permanent: true },
      // Other legacy redirects
      { source: "/day-care", destination: "/dog-day-care", permanent: true },
      { source: "/about", destination: "/our-staff", permanent: true },
    ];
  },
};

export default nextConfig;
