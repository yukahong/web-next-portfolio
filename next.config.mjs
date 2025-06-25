/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/web-next-portfolio" : "";

const nextConfig = {
  basePath: basePath,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
