/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export, served from the site root (/)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
