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

export default function FusionPeptideCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Fusion Peptide Discount Code &mdash; Save 15%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-medium">Topicals &amp; Nasal Sprays Available</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Fusion Peptide is a US-based research peptide supplier serving the scientific and academic research community. The company distinguishes itself through an expanded range of delivery formats &mdash; offering topical creams and nasal sprays in addition to the injectable formats standard across most research peptide suppliers. This makes Fusion Peptide a relevant sourcing option for researchers investigating non-injectable administration routes in metabolic and cognitive research applications.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            On quality assurance, Fusion Peptide states that every batch undergoes purity testing with a verified threshold of 99% &mdash; the highest stated purity standard among Prof. Peptide&apos;s featured vendor network. Certificates of Analysis are available for their products, documenting batch-specific purity and compound identity. The company&apos;s catalog spans key areas of research including cognitive enhancement compounds and metabolic peptides, supplied as injectables, topicals, and nasal sprays.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="MARK15" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">15% off your entire order</p>
          <a
            href="https://fusionpeptide.com/?ref=PROFPEPTIDE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Fusion Peptide &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Fusion Peptide have a discount code?"
              a="Yes. Use code MARK15 at checkout to save 15% on any Fusion Peptide order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Fusion Peptide discount code?"
              a="Add your items to cart at fusionpeptide.com, proceed to checkout, and enter MARK15 in the promo code field. The 15% discount will be applied automatically to your order total."
            />
            <FAQItem
              q="Does Fusion Peptide offer alternative delivery formats?"
              a="Yes — Fusion Peptide carries research peptides in topical cream and nasal spray formats in addition to standard lyophilized injectable compounds. This is a notable differentiator; most research peptide suppliers offer injectable formats only. Researchers exploring alternative administration routes may find Fusion Peptide's catalog particularly relevant."
            />
            <FAQItem
              q="Is Fusion Peptide third-party tested?"
              a="Fusion Peptide states that every batch is tested to a purity threshold of 99%. Certificates of Analysis are available for their products documenting purity and compound identity. At 99%, Fusion Peptide's stated purity threshold is the highest among Prof. Peptide's featured vendor network."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Fusion Peptide Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Fusion Peptide carries research peptides across growth hormone secretagogue, recovery, longevity, and performance categories. Their catalog includes compounds such as{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link>,{" "}
            <Link href="/research/epitalon" className="text-[#0D7377] hover:underline">Epithalon</Link>, and{" "}
            <Link href="/peptides/igf-1-lr3" className="text-[#0D7377] hover:underline">IGF-1 LR3</Link>, available in injectable, topical, and nasal spray formats. The company identifies cognitive enhancement and metabolic research as primary application areas for their compound portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
