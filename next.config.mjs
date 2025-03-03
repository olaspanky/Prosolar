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
              // Updated script-src to include Facebook Pixel
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://snap.licdn.com https://*.google-analytics.com https://connect.facebook.net; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com; " +
              // Updated img-src to include Facebook tracking pixel
              "img-src 'self' data: https://px.ads.linkedin.com https://*.google-analytics.com https://www.facebook.com; " +
              // Updated connect-src to include Google Analytics and Facebook
              "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com https://analytics.google.com https://www.facebook.com; " +
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
              "camera=(), " +
              "microphone=(), " +
              "geolocation=(self), " +
              "payment=(), " +
              "autoplay=(), " +
              "fullscreen=(self), " +
              "accelerometer=(), " +
              "gyroscope=(), " +
              "magnetometer=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;