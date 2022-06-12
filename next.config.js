/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
}

module.exports = nextConfig
