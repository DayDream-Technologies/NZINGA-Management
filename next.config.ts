import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  
  // For GitHub Pages deployment - update this to your repo name
  basePath: isProd ? "/NZINGA-Management" : "",
  assetPrefix: isProd ? "/NZINGA-Management/" : "",
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  
  // Trailing slashes help with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
