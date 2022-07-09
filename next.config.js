/** @type {{reactStrictMode: boolean, pageExtensions: string[], experimental: {optimizeFonts: boolean}}} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
}

module.exports = nextConfig
