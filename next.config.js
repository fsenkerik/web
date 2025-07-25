const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // klidně ponech, ale není nutný
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig
