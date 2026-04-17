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

export default function BehemothLabzCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Behemoth Labz Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Behemoth Labz is a US-based research compound supplier founded in 2014 with a focus on SARMs, peptides, nootropics, prohormones, and supplements for scientific research purposes. Based in the United States, Behemoth Labz ships domestically with free shipping on orders over $100 and offers worldwide shipping, making their catalog accessible to researchers globally.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Behemoth Labz conducts third-party testing on every product through Colmaric Analyticals LLC, an accredited analytical laboratory in Goodlettsville, Tennessee. All test results are published publicly, with Certificates of Analysis consistently returning purity results above 99% across their compound catalog. This commitment to independent verification and public transparency establishes Behemoth Labz as one of the more rigorously documented suppliers in the research compound space.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Behemoth Labz products are available in multiple forms including liquid solution, capsules, and powder. Their catalog spans SARMs, peptide blends, nootropics, prohormones, and post-cycle therapy compounds &mdash; offering researchers a broad selection across biological research areas. The company also offers a subscription program with recurring discounts for regular researchers.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROF10" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
          <a href="https://behemothlabz.com/aff/208/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
            Shop Behemoth Labz &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What products does Behemoth Labz carry?" a="Behemoth Labz carries research products across SARMs, peptides, nootropics, prohormones, and PCT categories. Their SARMs catalog includes RAD-140, MK-677, LGD-4033, Ostarine, YK-11, S-23, GW-501516, and SR-9009. Nootropics include Noopept, Phenibut, and racetam-class compounds. Their peptide selection includes individual compounds and pre-formulated research blends. Products are available in liquid, capsule, and powder forms. All products are third-party tested by Colmaric Analyticals with published COAs." />
            <FAQItem q="Does Behemoth Labz have a discount code?" a="Yes. Use code PROF10 at checkout to save 10% on your entire Behemoth Labz order. This code is verified and maintained by Prof. Peptide and valid as of April 2026." />
            <FAQItem q="How do I use the Behemoth Labz discount code?" a="Add your items to cart at behemothlabz.com, proceed to checkout, and enter PROF10 in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="How is Behemoth Labz third-party tested?" a="Every Behemoth Labz product is tested by Colmaric Analyticals LLC, an accredited laboratory in Goodlettsville, Tennessee. Certificates of Analysis are published publicly and consistently show purity results above 99%." />
            <FAQItem q="Does Behemoth Labz offer free shipping?" a="Yes. Behemoth Labz offers free domestic shipping on US orders over $100. International shipping is available worldwide at additional rates." />
            <FAQItem q="How long has Behemoth Labz been in business?" a="Behemoth Labz was founded in 2014, giving them over a decade of experience in the research compound supply industry." />
          </div>
        </div>

      </div>
    </div>
  );
}
