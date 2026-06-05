/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        // HTML pages — never cache; Cloudflare and browsers must always fetch fresh
        source: '/((?!_next/static|_next/image|favicon.svg|robots.txt|.*\\.png|.*\\.jpg|.*\\.svg).*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
      {
        // Static JS/CSS bundles have content hashes — safe to cache forever
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
