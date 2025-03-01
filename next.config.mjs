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
              // Mitigate 'unsafe-inline' and 'unsafe-eval' where possible
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://snap.licdn.com https://*.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com; " +
              "img-src 'self' data: https://px.ads.linkedin.com https://*.google-analytics.com; " +
              "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com; " +
              "frame-src 'self' https://www.googletagmanager.com; " +
              "object-src 'none'; " +
              "base-uri 'self'; " + // Restrict base URI to your domain
              "form-action 'self';" // Limit form submissions to your domain
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
              "geolocation=(self), " + // Restrict to your origin only
              "payment=(), " + // Explicitly disable payment
              "autoplay=(), " + // Optional: disable autoplay unless needed
              "fullscreen=(self)" // Optional: allow fullscreen only for your site
          },
        ],
      },
    ];
  },
};

export default nextConfig;