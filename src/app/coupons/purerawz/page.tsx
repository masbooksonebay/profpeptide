"use client";

import { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

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
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-600 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#1e2d3d] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
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

export default function PureRawzCouponPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "PureRawz Discount Code - Save 10%",
        "description": "Use code PROF10 for 10% off at PureRawz",
        "url": "https://www.profpeptide.com/coupons/purerawz",
        "seller": { "@type": "Organization", "name": "PureRawz" },
      }} />
      <div className="section max-w-3xl">
        <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to Discount Codes
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">PureRawz Discount Code &mdash; Save 10%</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
          <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              PureRawz is a US-based research peptide and compound supplier known for its extensive product catalog and third-party testing standards. Their offerings span peptides, SARMs, nootropics, and other research compounds. PureRawz publishes certificates of analysis on their product pages and offers a wide selection of both common and harder-to-find research compounds.
            </p>
          </div>

          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
            <CodeBox code="PROF10" />
            <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
            <a
              href="https://purerawz.co/?ref=1901"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block"
            >
              Shop PureRawz &rarr;
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-2">
              <FAQItem
                q="What compounds does PureRawz carry?"
                a="PureRawz carries an extensive catalog of research compounds including peptides such as BPC-157, TB-500, CJC-1295, Ipamorelin, Semaglutide, Tirzepatide, and GHK-Cu. They also offer SARMs, nootropics, and other research compounds. Their catalog includes both common research peptides and harder-to-find compounds not widely available from other suppliers."
              />
              <FAQItem
                q="Does PureRawz have a discount code?"
                a="Yes. Use code PROF10 at checkout to save 10% on any PureRawz order. This code is verified and maintained by Prof. Peptide."
              />
              <FAQItem
                q="How do I use the PureRawz discount code?"
                a="Add your items to cart at purerawz.co, proceed to checkout, and enter PROF10 in the discount code field. The 10% discount will be applied to your order total."
              />
              <FAQItem
                q="What types of third-party testing does PureRawz provide?"
                a="PureRawz publishes certificates of analysis (COAs) on their product pages. Third-party testing verifies compound identity, purity, and consistency, allowing researchers to review documentation before purchasing."
              />
              <FAQItem
                q="Is PureRawz pricing competitive?"
                a="PureRawz offers competitive pricing across their catalog, particularly for larger quantity orders. Combined with the PROF10 discount code for 10% off, their pricing is among the more affordable options for research-grade compounds."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
