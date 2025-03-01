/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              // Required for GTM and inline scripts; can't remove without breaking functionality
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://snap.licdn.com https://*.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com; " +
              "img-src 'self' data: https://px.ads.linkedin.com https://*.google-analytics.com; " +
              "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com; " +
              "frame-src 'self' https://www.googletagmanager.com; " +
              "object-src 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self'; " +
              "report-uri /csp-report", // Optional: for CSP violation reporting
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), " + // Fully disabled
              "microphone=(), " + // Fully disabled
              "geolocation=(self), " + // Restricted to your domain
              "payment=(), " + // Fully disabled
              "autoplay=(), " + // Fully disabled
              "fullscreen=(self), " + // Restricted to your domain
              "accelerometer=(), " + // Additional privacy-sensitive features
              "gyroscope=(), " + // Additional privacy-sensitive features
              "magnetometer=()" // Additional privacy-sensitive features
          },
        ],
      },
    ];
  },
};

export default nextConfig;