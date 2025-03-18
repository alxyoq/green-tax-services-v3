/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'web-assets.same.dev'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Static HTML export
  trailingSlash: true,
};

export default nextConfig;