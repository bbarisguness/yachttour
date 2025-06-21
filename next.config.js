/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lab.moroyachting.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;