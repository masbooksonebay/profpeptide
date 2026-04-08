import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
