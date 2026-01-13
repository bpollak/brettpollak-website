import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/brettpollak-website',
  assetPrefix: '/brettpollak-website',
};

export default nextConfig;
