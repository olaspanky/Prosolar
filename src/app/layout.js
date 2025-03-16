import { Inter } from "next/font/google";
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Providers } from "./Provider";
import { Suspense } from "react";
import Script from "next/script";

const syne = Syne({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-syne",
});
const syne2 = Syne({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-syne2",
});
const jak = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jak",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosolar",
  description: "Prosolar",
  other: {
    "google-site-verification": "0BQHA9XFVrwCldFiC8aip6Jxmbk_fYOKRmMveQy7b58",
  },
};

export default function RootLayout({ children }) {
  const canonicalBase = "https://prosolarng.com/"; // Replace with your actual domain

  return (
    <html lang="en" className={`${syne.variable} ${syne2.variable} ${jak.variable}`}>
      <head>
        {/* Canonical Tag */}
        <link rel="canonical" href={canonicalBase} />

        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com https://analytics.google.com https://www.facebook.com https://www.google.com;"
        />
      </head>
      
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBTNTB7C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBTNTB7C');
          `}
        </Script>

        <Suspense>
          <Providers />
        </Suspense>
        <GoogleAnalytics />
        <div className="w-[100vw] min-h-screen">{children}</div>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight">
          {`
            _linkedin_partner_id = "1613905";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-script" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b) {
                  window.lintrk.q.push([a,b]);
                };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=1613905&fmt=gif"
          />
        </noscript>

        <Footer />
      </body>
    </html>
  );
}