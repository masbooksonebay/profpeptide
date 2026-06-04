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
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:bg-[#1e293b] transition-colors"
      >
        <span className="text-sm font-medium text-[#1e2d3d] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#0891b2] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AminoClubCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Amino Club Discount Code &mdash; Save 20%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">&ge;99% Purity Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"🇺🇸"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Amino Club is a US-based research-peptide vendor with a broad catalog spanning tissue repair, dermal, metabolic, GH-secretagogue, cellular, neuro, and circadian research.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every batch is third-party tested by an ISO/IEC 17025-accredited lab &mdash; HPLC purity (99%+), identity confirmation, plus heavy-metal (ICP-MS), sterility, and endotoxin screening &mdash; with verifiable batch-specific Certificates of Analysis linked on each product page.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Flagship compounds include Retatrutide, Cagrilintide, BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, NAD+, and the GLOW and KLOW blends.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">20% off your entire order</p>
          <a
            href="https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Amino Club &rarr;
          </a>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Amino Club carry?"
              a="Amino Club carries research compounds across tissue repair, dermal, metabolic, GH-secretagogue, cellular, neuro, and circadian categories. Flagship compounds include Retatrutide, Cagrilintide, BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, and NAD+, along with the GLOW and KLOW blends."
            />
            <FAQItem
              q="Does Amino Club have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 20% on any Amino Club order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Amino Club discount code?"
              a="Add your items to cart at aminoclub.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 20% discount will be applied to your order total."
            />
            <FAQItem
              q="What testing does Amino Club do?"
              a="Every batch is third-party tested by an ISO/IEC 17025-accredited laboratory. Testing covers HPLC purity (99%+), identity confirmation, heavy-metal screening via ICP-MS, sterility, and endotoxin screening."
            />
            <FAQItem
              q="What is the minimum purity standard at Amino Club?"
              a="Amino Club verifies a minimum of 99%+ purity via HPLC analysis through an ISO/IEC 17025-accredited third-party lab before a batch is offered for sale."
            />
            <FAQItem
              q="Does Amino Club provide Certificates of Analysis?"
              a="Yes. Every batch has a verifiable batch-specific Certificate of Analysis, linked directly on each product page, documenting purity, identity, and the additional heavy-metal, sterility, and endotoxin screening."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
