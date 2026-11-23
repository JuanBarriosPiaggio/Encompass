import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { businessJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Encompass London | Loft conversions and extensions in Earlsfield",
    template: "%s | Encompass London",
  },
  description:
    "Design-and-build loft conversions, extensions, kitchens and joinery from our Earlsfield studio. One team, from drawing to handover. Houzz 4.9 from 40 reviews.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    images: [{ url: site.logo, alt: "Encompass" }],
  },
  icons: { icon: site.logo, apple: site.logo },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable} js`}>
      <body>
        <JsonLd data={businessJsonLd()} />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
