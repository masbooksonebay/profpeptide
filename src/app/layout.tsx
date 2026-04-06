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
                                                                          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mx-auto max-w-5xl w-full px-4 sm:px-6 mb-4 text-xs text-amber-800">
                                                                                    For educational and research purposes only. Not medical advice. Not for human use.
                                                                                            </div>
                                                                                                    <Footer />
                                                                                                          </body>
                                                                                                              </html>
                                                                                                                );
                                                                                                                }