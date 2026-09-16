/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536, 1920],
  },
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  /**
   * The preview is proxied on https://<port>-<sandboxId>.e2b.app, so the dev
   * server sees its own JS/HMR chunks as cross-origin. Listing the proxy
   * domain here keeps /_next/* (and therefore the film players, whose controls
   * and posters are client-side) loading in the preview instead of warning.
   * Only affects `next dev`; ignored by production builds.
   */
  allowedDevOrigins: ["*.e2b.app"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
