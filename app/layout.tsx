import type { Metadata, Viewport } from "next";
import "./globals.css";
import { poppins, plexMono } from "./fonts";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { TransitionProvider } from "@/components/providers/TransitionProvider";
import { IntroCurtain } from "@/components/providers/IntroCurtain";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: "Power Clean — Industrial Cleaning, Engineered for Performance",
    template: "%s · Power Clean",
  },
  description:
    "Water-based industrial cleaning chemistry from Roovel Solutions Pvt. Ltd. — 25+ years of precision cleaning solutions, replacing hazardous solvents across Indian manufacturing.",
  keywords: [
    "industrial cleaning",
    "degreaser",
    "TCE replacement",
    "parts washing",
    siteConfig.name,
    siteConfig.company,
  ],
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
        <LenisProvider>
          <TransitionProvider>
            <SiteNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </TransitionProvider>
          <IntroCurtain />
          <CustomCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
