/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required because Next.js image optimization needs a server
  }
}

export default nextConfig
