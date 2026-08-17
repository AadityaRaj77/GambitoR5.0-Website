/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow SVGs to be served through Next.js image optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Cache optimized images for up to 1 year on CDN / browser
    minimumCacheTTL: 31536000,
  },
  // Hide the "N" dev indicator badge in the bottom-left corner
  devIndicators: false,
};

export default nextConfig;
