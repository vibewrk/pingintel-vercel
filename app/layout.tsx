import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s — PING",
    default: "PING — Dynamic Data Infrastructure",
  },
  description:
    "AI-powered exposure technology for the insurance industry. Ping is data superintelligence for the commercial property insurance industry.",
  metadataBase: new URL("https://pingintel.com"),
  openGraph: {
    siteName: "PING",
    title: "PING — Dynamic Data Infrastructure",
    description: "AI-powered exposure technology for the insurance industry.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="LPONKFCA"
          strategy="afterInteractive"
          defer
        />
        <Script id="linkedin-tracking" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8532818";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8532818&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
