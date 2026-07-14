/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'orval.dev' },
      { protocol: 'https', hostname: 'b.stripecdn.com' },
      { protocol: 'https', hostname: 'v3.zod.dev' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'biomejs.dev' },
    ],
  },
}

export default nextConfig
