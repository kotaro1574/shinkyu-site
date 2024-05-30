/** @type {{reactStrictMode: boolean, pageExtensions: string[], experimental: {optimizeFonts: boolean}}} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
