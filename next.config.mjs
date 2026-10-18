/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const basePath = isCustomDomain ? '' : (isGithubPages ? '/portfolio-website' : '');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
