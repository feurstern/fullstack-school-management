import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://static.wikitide.net",
        pathname: "houkai2ndwiki/",
        search: "",
      },
    ],
  },
};

export default nextConfig;
