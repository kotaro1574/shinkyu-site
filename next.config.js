/** @type {{reactStrictMode: boolean, pageExtensions: string[], experimental: {optimizeFonts: boolean}}} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  images: {
    domains: ['source.unsplash.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
}

module.exports = nextConfig
