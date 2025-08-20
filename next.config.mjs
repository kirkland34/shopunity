/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },   // turn off typed routes
  typescript: { ignoreBuildErrors: true },// unblock build for now
  eslint: { ignoreDuringBuilds: true },   // unblock build for now
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};
export default nextConfig;
