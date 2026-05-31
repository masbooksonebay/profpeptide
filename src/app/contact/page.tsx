import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Prof. Peptide",
  description:
    "Send us a question about a peptide, supplement, vendor, or content correction. We respond personally.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section max-w-2xl">
      <h1 className="mb-2">Contact Prof. Peptide</h1>
      <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-8">
        Have a question about a peptide, supplement, vendor, or want to submit a content correction?
        Send us a note. We respond within 1-2 business days.
      </p>
      <Suspense fallback={<div className="text-base text-gray-500 dark:text-slate-400">Loading form…</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
