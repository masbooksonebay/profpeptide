import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Prof. Peptide — Research Guide for Peptides and Natural Supplements",
  description:
    "Evidence-based research profiles for 23+ peptides and 48+ natural supplements. Dosage calculator, verified discount codes, and independent education. No ads.",
  metadataBase: new URL("https://profpeptide.com"),
  openGraph: {
    title: "Prof. Peptide",
    description: "Evidence-based peptide education and research tools.",
    url: "https://profpeptide.com",
    siteName: "Prof. Peptide",
    type: "website",
    images: [
      {
        url: "https://profpeptide.com/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Prof. Peptide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Peptide",
    description: "Evidence-based peptide education and research tools.",
    images: ["https://profpeptide.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200">
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
