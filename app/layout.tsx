import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const description =
  "Ronald Flierl is a data-driven Marketing Manager & AI workflow expert in Port Moresby, PNG — full-funnel paid acquisition, lead generation and CRO for Tier-1 institutions.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Marketing Manager",
    "Performance Marketing",
    "Paid Acquisition",
    "Meta Ads",
    "Google Ads",
    "Lead Generation",
    "CRO",
    "AI Workflows",
    "Port Moresby",
    "Papua New Guinea",
    "Ronald Flierl",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grain min-h-screen font-sans antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
