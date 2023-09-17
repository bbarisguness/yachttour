/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.74.191.230',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
