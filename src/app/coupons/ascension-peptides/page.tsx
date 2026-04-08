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
      className="block w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-lg font-mono font-bold text-[#1e2d3d] tracking-widest text-center cursor-pointer hover:bg-gray-100 transition-colors"
    >
      {copied ? (
        <span className="text-[#0D7377] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-[#1e2d3d] pr-4">{q}</span>
        <span className="text-[#0D7377] flex-shrink-0 text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function AscensionPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Ascension Peptides Discount Code &mdash; Save 50%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">Best Deal</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Ascension Peptides is a US-based research peptide supplier shipping exclusively within the United States. The company is reachable by phone at (303) 518-6550 during business hours Monday through Friday, 9am&ndash;5pm CST. Ascension distinguishes itself through an extensive catalog of individual peptides and pre-formulated peptide blends and stacks &mdash; combining multiple compounds into single research formulations. Wholesale and distributor tiered pricing programs are available for higher-volume research operations.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Ascension Peptides conducts multi-stage third-party testing on all products, guaranteeing 99%+ purity and verifying that compounds are contaminant-free and potency-verified. Certificates of Analysis are publicly accessible through a dedicated &quot;Lab Testing / COAs&quot; page on their website, allowing researchers to review documentation prior to purchase.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ascension Peptides offers the largest discount available across Prof. Peptide&apos;s entire vendor network. Using code PROFPEPTIDE at checkout applies a 50% discount &mdash; a savings level that is rare in the research peptide space and makes Ascension Peptides a compelling option for researchers prioritizing value without compromising on documented quality standards.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">50% off your entire order</p>
          <a
            href="https://ascensionpeptides.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Ascension Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Ascension Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 50% on any Ascension Peptides order. This is the largest discount available across our entire vendor network and is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Ascension Peptides discount code?"
              a="Add your items to cart at ascensionpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 50% discount will be applied to your order total."
            />
            <FAQItem
              q="Is Ascension Peptides third-party tested?"
              a="Yes. Ascension Peptides conducts multi-stage independent third-party testing on all products, with 99%+ purity guaranteed. Certificates of Analysis are publicly available on their dedicated Lab Testing / COAs page before purchase."
            />
            <FAQItem
              q="Does Ascension Peptides offer peptide blends and stacks?"
              a="Yes — Ascension Peptides offers a range of pre-formulated peptide blends and stacks including the Wolverine Stack (BPC-157 + TB-500), GLOW (GHK-Cu + BPC-157 + TB-500), KLOW (GHK-Cu + BPC-157 + TB-500 + KPV), Calm + Clarity (PE 22-28 + Pinealon + Selank), and FIT Stack (CJC-1295 + Ipamorelin). These pre-combined formulations are designed for researchers studying synergistic compound interactions."
            />
            <FAQItem
              q="Does Ascension Peptides ship internationally?"
              a="No — Ascension Peptides ships within the United States only. International shipping is not currently available due to regulatory restrictions."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Ascension Peptides Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ascension Peptides carries a wide range of individual research peptides and pre-formulated blends. Their catalog includes GLP-1 compounds such as{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>, recovery peptides including{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link> and{" "}
            <Link href="/peptides/tb-500" className="text-[#0D7377] hover:underline">TB-500</Link>, growth hormone secretagogues including{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link> and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0D7377] hover:underline">Ipamorelin</Link>, skin health compounds including{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GHK-Cu</Link> and Melanotan, and longevity compounds including{" "}
            <Link href="/supplements/nad-plus" className="text-[#0D7377] hover:underline">NAD+</Link>,{" "}
            <Link href="/peptides/epitalon" className="text-[#0D7377] hover:underline">Epithalon</Link>, and{" "}
            <Link href="/peptides/mots-c" className="text-[#0D7377] hover:underline">MOTS-c</Link>. Pre-formulated stacks including the{" "}
            <Link href="/peptides/wolverine-stack" className="text-[#0D7377] hover:underline">Wolverine Stack</Link> and{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GLOW blend</Link> are also available.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
          <p className="text-sm text-gray-600 mb-3">
            Can&apos;t find what you need? Search for related supplements on Amazon.
          </p>
          <a
            href="https://www.amazon.com/s?k=research+peptide+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#0D7377] hover:underline"
          >
            Search on Amazon &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
