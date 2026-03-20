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
      // Normalise legacy WP paths
      {
        source: "/locations/memorial-park-location",
        destination: "/locations/memorial",
        permanent: true,
      },
      {
        source: "/locations/galleria-uptown-park-location",
        destination: "/locations/galleria",
        permanent: true,
      },
      {
        source: "/locations/pearland-location",
        destination: "/locations/pearland",
        permanent: true,
      },
      {
        source: "/day-care",
        destination: "/dog-day-care",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
