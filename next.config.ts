import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/brettpollak-website' : '',
  assetPrefix: isGithubPages ? '/brettpollak-website' : '',
};

export default nextConfig;
