import type { Metadata, Viewport } from "next";
import "./globals.css";
import { poppins, plexMono } from "./fonts";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { TransitionProvider } from "@/components/providers/TransitionProvider";
import { IntroCurtain } from "@/components/providers/IntroCurtain";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { QuickContact } from "@/components/layout/QuickContact";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Power Clean",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "industrial cleaning chemicals",
    "water based degreaser",
    "aqueous cleaner degreaser",
    "TCE replacement",
    "trichloroethylene alternative",
    "ultrasonic cleaning chemical",
    "spray cleaner low foam",
    "rust preventive",
    "rust remover",
    "cooling tower descaler",
    "aluminium cleaner ADC12",
    "degreasing chemicals India",
    "parts washing chemistry",
    siteConfig.name,
    siteConfig.company,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Power Clean — industrial cleaning chemicals by Roovel Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@powercleanindia",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/logo.png" },
};

/**
 * Layout always matches device width and starts at 1:1 — never zoomed out.
 * Pinch-zoom IN stays available (up to 5×) as WCAG 1.4.4 requires; we never
 * set user-scalable=no or maximum-scale=1.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        <LenisProvider>
          <TransitionProvider>
            <SiteNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </TransitionProvider>
          <QuickContact />
          <IntroCurtain />
          <CustomCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
