/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Ensure static files from /public are included
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
