/** @type {{reactStrictMode: boolean, pageExtensions: string[], experimental: {optimizeFonts: boolean}}} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
