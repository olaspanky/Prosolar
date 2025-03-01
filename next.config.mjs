/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: you can remove this if not needed
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents framing of your site
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              // Scripts: GTM, LinkedIn, and inline scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://snap.licdn.com https://*.google-analytics.com; " +
              // Styles: Google Fonts and Slick Carousel
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              // Fonts: Google Fonts
              "font-src 'self' https://fonts.gstatic.com; " +
              // Images: LinkedIn tracking pixel
              "img-src 'self' data: https://px.ads.linkedin.com https://*.google-analytics.com; " +
              // Connections: GTM, LinkedIn, and Analytics
              "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com; " +
              // Frames: GTM noscript iframe
              "frame-src 'self' https://www.googletagmanager.com; " +
              "object-src 'none';", // No plugins allowed
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Controls referrer info
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Restricts features
          },
        ],
      },
    ];
  },
};

export default nextConfig;