/** @type {import('next').NextConfig} */
const nextConfig = {
  // Work around Windows-locked `.next` directory by using a fresh dist folder.
  distDir: ".next-build",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: { allowedOrigins: ["localhost:3000"] },
  },
};

export default nextConfig;
