/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for static export
  basePath: '/misbahmuhammedve2', // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Required for GitHub Pages (disables Next.js image optimization)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.getlifegard.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.valuemetrix.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buttons-animations-kv.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // Added pathname for consistency
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**', // Added pathname for consistency
      },
    ],
  },
};

module.exports = nextConfig;
