
import { Inter } from "next/font/google";
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartProviders from "./components/Provider";
import { Footer } from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Pixel from "./components/Pixel";
const syne = Syne({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-syne',
});
const syne2 = Syne({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-syne2',
});
const jak = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jak',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosolar",
  description: "Prosolar",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en" className={`${syne.variable} ${syne2.variable} ${jak.variable}`}>
      <body>
        <CartProviders>
          <GoogleAnalytics />
          
          <div className="max-w-[100vw]">
            {children}
          </div>
          
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
              style={{ display: 'none' }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=1613905&fmt=gif"
            />
          </noscript>
          <Pixel name='FACEBOOK_PIXEL_1' />
          <Footer />
        </CartProviders>
      </body>
    </html>
  );
}
