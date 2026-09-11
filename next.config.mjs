/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536, 1920],
  },
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
