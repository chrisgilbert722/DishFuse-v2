/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Force Next.js to treat /public as static root
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
