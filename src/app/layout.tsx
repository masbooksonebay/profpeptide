import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prof. Peptide — Research-Grade Peptide Education",
  description:
    "Evidence-based peptide education, dosage calculators, coupon codes, and research resources. Trusted by thousands of researchers.",
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
        <Footer />
      </body>
    </html>
  );
}