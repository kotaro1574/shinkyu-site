import analyze from '@next/bundle-analyzer'

const withBundleAnalyzer = analyze({
  defaultSizes: 'gzip',
  enabled: true,
})

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

export default withBundleAnalyzer(nextConfig)
