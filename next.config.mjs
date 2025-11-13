/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Removed invalid experimental config
  // turbopack: {
  //   root: 'd:/drone',
  // },
}

export default nextConfig
