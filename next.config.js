/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'morosite.testgrande.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
