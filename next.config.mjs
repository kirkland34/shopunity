/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `experimental.typedRoutes`
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};
export default nextConfig;
