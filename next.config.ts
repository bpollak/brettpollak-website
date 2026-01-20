import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // For static export to GitHub Pages, images are served as-is
    // Pre-optimize images during build using scripts/optimize-images.js
    // WebP versions are generated for all PNGs/JPEGs
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
