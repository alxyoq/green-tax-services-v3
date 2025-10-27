/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    // Note: We're using manually optimized AVIF images instead of Next.js optimization
  },
  output: 'export', // Static HTML export
  trailingSlash: true,
};

export default nextConfig;
