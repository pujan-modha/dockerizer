/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
