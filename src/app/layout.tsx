import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import ThemeProvider from "@/components/ThemeProvider";
import { appPeptideFloor } from "@/data/peptideCategories";
import { supplementCount } from "@/data/supplements";

// This is the DEFAULT description inherited by every page without its own, so its counts must
// never rot (they previously read a stale "40+" while the library held 62). Both are DERIVED and
// floored to a ten for the approximate "N+" phrasing: peptides from the taxonomy, supplements
// from the supplement list. They auto-advance (→ "70+") as the libraries grow.
const supplementFloor = Math.floor(supplementCount / 10) * 10;

export const metadata: Metadata = {
  title: "Prof. Peptide — Research Guide for Peptides and Natural Supplements",
  description: `Evidence-based research profiles for ${appPeptideFloor}+ peptides and ${supplementFloor}+ natural supplements. Dosage calculator, verified discount codes, and independent education. No ads.`,
  metadataBase: new URL("https://profpeptide.com"),
  manifest: "/site.webmanifest",
  // Explicit, single source of favicon declarations (the App Router
  // src/app/icon.* convention files were removed to avoid duplicate/competing
  // rel="icon" tags). Ships a transparent 96px multiple-of-48 PNG for Google.
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // No `images` here: the homepage/root OG image is provided by the file convention
  // (app/opengraph-image.tsx + app/twitter-image.tsx → 1200×630 brand card via the same
  // generator as the vendor cards). The old 1024² og-image.png was removed so there is no
  // conflicting declaration. Content pages set their own images via buildPageMetadata (seo.ts).
  openGraph: {
    title: "Prof. Peptide",
    description: "Evidence-based peptide education and research tools.",
    url: "https://profpeptide.com",
    siteName: "Prof. Peptide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Peptide",
    description: "Evidence-based peptide education and research tools.",
  },
};

// Runs before first paint (in <head>). Dark mode is disabled site-wide: this
// always clears the `dark` class so the site renders light-only with no flash,
// even for a visitor who has a stale "dark" saved from before. Must stay in
// sync with ThemeProvider's init logic.
const themeScript = `(function(){try{document.documentElement.classList.remove('dark')}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F6F8] dark:bg-[#0f172a] text-gray-800 dark:text-slate-200">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Disclaimer />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
