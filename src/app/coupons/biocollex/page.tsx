"use client";

import { useState } from "react";
import Link from "next/link";

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-600 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#1e2d3d] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#0891b2] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-medium text-[#1e2d3d] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#0891b2] flex-shrink-0 text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function BioCollexCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BioCollex Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioCollex is a U.S.-based peptide supplier headquartered in Oakland, Maryland, focused on providing research-grade compounds for laboratory use. All products are synthesized by a C-GMP certified manufacturer and required to meet 99% purity through independent third-party lab testing. Every batch ships with a Certificate of Analysis for full traceability and reproducibility.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioCollex is known for fast fulfillment &mdash; all orders placed before 3 PM EST ship same day, with delivery in 2&ndash;3 business days. Free shipping is available on U.S. orders over $200. The company emphasizes competitive pricing and responsive 24/7 customer support.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The BioCollex catalog includes a strong selection of research compounds including Retatrutide, Tirzepatide, BPC-157, TB-500, GHK-Cu, NAD+, Semax, Selank, PT-141, Tesamorelin, CJC-1295, Ipamorelin, and more. Pre-formulated blends such as the Wolverine Stack (BPC-157 + TB-500) are also available.
          </p>
          </div>

        <div className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#0891b2]/10 border border-[#0891b2]/30 rounded-lg">
          <svg className="w-5 h-5 text-[#0891b2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-base font-bold text-[#1e2d3d] dark:text-white tracking-tight">
            Verified working as of April 2026
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://biocollexresearch.com/?ref=profpeptidehq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop BioCollex &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
 <FAQItem
 q="What peptides does BioCollex carry?"
 a="The BioCollex catalog includes a strong selection of research compounds including Retatrutide, Tirzepatide, BPC-157, TB-500, GHK-Cu, NAD+, Semax, Selank, PT-141, Tesamorelin, CJC-1295, Ipamorelin, and more. Pre-formulated blends such as the Wolverine Stack (BPC-157 + TB-500) are also available."
 />
            <FAQItem
              q="Does BioCollex have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any BioCollex order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the BioCollex discount code?"
              a="Add your items to cart at biocollexresearch.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="Is BioCollex third-party tested?"
              a="Yes. All BioCollex products are required to meet 99% purity through independent third-party lab testing. Every batch ships with a Certificate of Analysis."
            />
            <FAQItem
              q="How fast does BioCollex ship?"
              a="All orders placed before 3 PM EST ship same day. Standard delivery takes 2-3 business days. Free shipping is available on U.S. orders over $200."
            />
            <FAQItem
              q="Where is BioCollex located?"
              a="BioCollex is headquartered in Oakland, Maryland, USA. Products are synthesized by a C-GMP certified manufacturer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
