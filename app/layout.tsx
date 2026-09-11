import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CustomCursor from "@/components/CustomCursor";
import { constructMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: "Vinhomes Platinum Living",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand-gold focus:px-4 focus:py-2 focus:text-brand-green950"
        >
          Skip to content
        </a>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CustomCursor />

        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </body>
    </html>
  );
}
