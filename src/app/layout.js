import { Inter } from "next/font/google";
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Providers } from "./Provider";
import { Suspense } from "react";
import Head from "next/head"; // Import Head from next/head
import { GoogleTagManager } from '@next/third-parties/google'


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
      <Head>
        {/* Canonical Tag */}
        <link rel="canonical" href={canonicalBase} />

        {/* Content Security Policy */}
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://snap.licdn.com https://px.ads.linkedin.com https://analytics.google.com https://www.facebook.com https://www.google.com;"
        />

        {/* Google Tag Manager */}
       
      </Head>
      <body>
        <Suspense>
          <Providers />
        </Suspense>
        <GoogleAnalytics />
        <GoogleTagManager gtmId="GTM-NBTNTB7C" />

        <div className="w-[100vw] min-h-screen">{children}</div>

        {/* LinkedIn Insight Tag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "1613905";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
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
