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

export default function VitalCoreResearchCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Vital Core Research Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Vital Core Research is a US-based research compound supplier headquartered in Arizona, reachable by phone at 877-848-2595 and by email at info@vitalcoreresearch.com. The company operates a Research Rewards Program offering loyalty points on every purchase, redeemable against future orders. Same-day shipping is standard, with full order tracking provided on all shipments. Vital Core Research offers one of the most comprehensive research compound catalogs available &mdash; 56 products spanning peptides, SARMs, GLP-class metabolic compounds, peptide blends, and capsule formulations.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every Vital Core Research batch is independently third-party tested, with a Certificate of Analysis available directly on each product page &mdash; COA documentation is displayed per product rather than maintained in a separate library. Competitive pricing is combined with a loyalty rewards structure that reduces cost for returning researchers.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            The Vital Core Research catalog spans an unusually broad range of research categories. Their metabolic compound lineup covers the full GLP generation spectrum including GLP-1 (Semaglutide), GLP-2 (Tirzepatide), GLP-3 (Retatrutide), Cagrilintide, and combination blends. Recovery compounds include BPC-157, TB-500, and the BPC-157/TB-500 blend. Growth hormone secretagogues include CJC-1295 (both DAC and No DAC variants), Ipamorelin, Sermorelin, Tesamorelin, Hexarelin, GHRP-2, and GHRP-6. The catalog also includes novel compounds not widely carried by other vendors, including SLU-PP-332 (an exercise mimetic compound) and Tesofensine, both available in capsule format. A SARMs catalog of 13 compounds runs alongside the peptide lineup. Pre-formulated blends include GLOW (<Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link> + BPC-157 + TB-500) and KLOW (KPV + GHK-Cu + BPC-157 + TB-500).
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://vitalcoreresearch.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Vital Core Research &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Vital Core Research have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Vital Core Research order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Vital Core Research discount code?"
              a="Add your items to cart at vitalcoreresearch.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="Is Vital Core Research third-party tested?"
              a="Yes. Every Vital Core Research batch is independently third-party tested. A Certificate of Analysis is available directly on each product page, allowing researchers to review documentation for the specific compound before ordering."
            />
            <FAQItem
              q="Does Vital Core Research carry SARMs as well as peptides?"
              a="Yes — Vital Core Research carries 13 SARMs compounds alongside their peptide catalog, including LGD-4033, RAD-140, MK-677, MK-2866, S4, S23, GW-501516, YK-11, and others."
            />
            <FAQItem
              q="Does Vital Core Research have a loyalty program?"
              a="Yes — the Research Rewards Program awards points on every purchase, redeemable against future orders."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What Does Vital Core Research Carry?</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Vital Core Research carries 56 research compounds across peptides, SARMs, and blends. Their metabolic catalog covers the full GLP generation range including{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>,{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>, Cagrilintide, and combination blends. Recovery peptides include{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link> and{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>. Growth hormone secretagogues include{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link> (both DAC and No DAC),{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>,{" "}
            <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>, Hexarelin, GHRP-2, GHRP-6, and{" "}
            <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>. Longevity compounds include{" "}
            <Link href="/supplements/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>,{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epithalon</Link>, and{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>. Cognitive peptides include{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link> and{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>. Sexual health compounds include{" "}
            <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>. Immune compounds include{" "}
            <Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>. Novel compounds include SLU-PP-332 capsules and Tesofensine capsules. Pre-formulated blends include GLOW and KLOW. A 13-compound SARMs catalog is also available.
          </p>
        </div>
      </div>
    </div>
  );
}
