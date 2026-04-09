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

export default function LimitlessBiotechCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Limitless Biotech Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Limitless Biotech is a US-based research peptide supplier founded in Florida, formerly known as Limitless Life Nootropics. The company offers one of the largest research peptide catalogs available &mdash; over 90 compounds spanning peptides, nootropics, and advanced longevity compounds. Limitless Biotech ships worldwide and offers a 30-day money-back guarantee. Their products are used by physicians, biohackers, and research laboratories. Products contain no fillers such as mannitol or lactose.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Limitless Biotech implements a comprehensive multi-method testing protocol on every batch. Quality control includes HPLC purity verification, LC-MS (Liquid Chromatography&ndash;Mass Spectrometry) for molecular identity confirmation, sterility screening, endotoxin testing for bacterial toxins, and chemical contaminant analysis. A proactive raw material testing stage is conducted before compounds enter the production process, providing an additional quality gate prior to synthesis. All testing is performed by three independent third-party laboratories complying with FDA and DEA standards &mdash; a multi-tiered approach that reduces reliance on any single lab&apos;s results. Every product page includes a Certificate of Analysis with HPLC results, LC-MS molecular confirmation, and contaminant screening data. All batches are verified at a minimum purity of &ge;98.5%.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Limitless Biotech manufactures compounds in US-based facilities following Good Manufacturing Practices. The production process uses solid-phase peptide synthesis with advanced purification protocols including precision cleavage steps and multi-stage purification to maintain molecular integrity. Both lyophilized and non-lyophilized formats are available, with both formats undergoing the same third-party testing standards.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://limitlessbiotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Limitless Biotech &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Limitless Biotech have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Limitless Biotech order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Limitless Biotech discount code?"
              a="Add your items to cart at limitlessbiotech.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="What testing does Limitless Biotech conduct?"
              a="Limitless Biotech conducts five types of testing: HPLC purity verification, LC-MS molecular identity confirmation, sterility screening, endotoxin testing, and chemical contaminant analysis. Raw materials are also tested before production begins. All testing is performed by three independent third-party laboratories complying with FDA and DEA standards. Minimum purity is ≥98.5% on all batches."
            />
            <FAQItem
              q="Are Certificates of Analysis available for Limitless Biotech products?"
              a="Yes. COAs with HPLC results are available directly on each product page. Each COA includes HPLC purity data, LC-MS molecular confirmation, and contaminant screening results for the specific batch."
            />
            <FAQItem
              q="Does Limitless Biotech ship internationally?"
              a="Yes — Limitless Biotech offers worldwide shipping. A 30-day money-back guarantee is also available."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What Does Limitless Biotech Carry?</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Limitless Biotech carries 90+ research-grade compounds &mdash; one of the largest catalogs in the research peptide space. Their catalog includes recovery peptides such as{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link> and{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>, growth hormone secretagogues including{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>, and{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>, metabolic compounds including{" "}
            <Link href="/peptides/aod-9604" className="text-[#0891b2] hover:underline">AOD-9604</Link> and{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>, cognitive and nootropic compounds including{" "}
            <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link> and{" "}
            <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>, longevity compounds including{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>,{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>, and{" "}
            <Link href="/supplements/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>, and sexual health compounds including{" "}
            <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>. Peptide capsule and spray formats are also available alongside standard lyophilized compounds.
          </p>
        </div>
      </div>
    </div>
  );
}
