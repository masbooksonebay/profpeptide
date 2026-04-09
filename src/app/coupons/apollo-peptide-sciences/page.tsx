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

export default function ApolloPeptideSciencesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Apollo Peptide Sciences Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Apollo Peptide Sciences is a US-based research peptide supplier headquartered in Oxnard, California. The company operates with a stated commitment to advancing scientific research through premium research compounds and strict quality standards. Their catalog spans GLP-1, GLP-2, and GLP-3 metabolic compounds, individual peptides across multiple research categories, and reconstitution supplies including bacteriostatic water. Free shipping is available on orders over $200.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Apollo Peptide Sciences provides a Certificate of Analysis and an Endotoxin Report for every product in their catalog &mdash; both documents are publicly accessible on their website prior to purchase. All products undergo independent third-party laboratory testing before being listed for sale, verifying both purity and quantity accuracy. Strict quality control measures are enforced throughout. The combination of COA and endotoxin documentation on every product &mdash; not just purity &mdash; reflects a commitment to transparency that goes beyond the baseline standard in the research peptide space.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://apollopeptidesciences.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Apollo Peptide Sciences &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Apollo Peptide Sciences have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Apollo Peptide Sciences order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Apollo Peptide Sciences discount code?"
              a="Add your items to cart at apollopeptidesciences.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="Does Apollo Peptide Sciences provide Certificates of Analysis?"
              a="Yes. Apollo Peptide Sciences provides both a Certificate of Analysis and an Endotoxin Report for every product. These lab reports are publicly accessible on their website before purchase, so researchers can review documentation prior to ordering."
            />
            <FAQItem
              q="Is Apollo Peptide Sciences third-party tested?"
              a="Yes. All Apollo Peptide Sciences products undergo independent third-party laboratory testing before being listed for sale. Testing verifies both purity and quantity accuracy. Lab reports are available on their website."
            />
            <FAQItem
              q="Does Apollo Peptide Sciences offer free shipping?"
              a="Yes — free shipping is available on orders over $200."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Apollo Peptide Sciences Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Apollo Peptide Sciences carries research peptides across metabolic, recovery, growth hormone, and longevity categories. Their catalog includes GLP-1 compounds such as{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>, GLP-2 compounds such as{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0D7377] hover:underline">Tirzepatide</Link>, and GLP-3 compounds such as{" "}
            <Link href="/peptides/retatrutide" className="text-[#0D7377] hover:underline">Retatrutide</Link>, alongside individual peptides spanning repair, cognitive, and cellular health research applications. Bacteriostatic water and research bundles are also available.
          </p>
        </div>
    </div>
  );
}
