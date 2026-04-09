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

export default function RoyalPeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Royal Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Royal Peptides is a US-based research peptide supplier founded in 2023, led by a team with decades of combined experience in biotechnology, logistics, and scientific operations. The company operates fulfillment centers in Texas, Florida, and Indiana within the United States, with additional international logistics hubs in Toronto, Dubai, and Africa &mdash; enabling fast and reliable delivery to researchers worldwide. Same-day shipping is available on orders placed before noon PST. Royal Peptides offers 24/7 customer support and a wholesale program for higher-volume research procurement. Their website also includes a built-in peptide dosage calculator (PepCalc) for researcher convenience.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Royal Peptides manufactures all compounds in cGMP and ISO-certified laboratories, with every product independently third-party tested to 99%+ purity standards. Each batch undergoes three pre-shipment verification steps: purity testing, pH testing, and vacuum-integrity testing &mdash; ensuring compound integrity not just in terms of chemical purity, but physical packaging integrity prior to dispatch. Full traceability and documentation is maintained for every batch as part of their stated &quot;radical transparency&quot; commitment. Royal Peptides also proactively alerts customers about scam and copycat websites using similar domain names, reflecting their focus on supply chain integrity.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://royal-peptides.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Royal Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Royal Peptides have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Royal Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Royal Peptides discount code?"
              a="Add your items to cart at royal-peptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="What testing does Royal Peptides conduct?"
              a="Royal Peptides manufactures in cGMP and ISO-certified labs and independently third-party tests every product to 99%+ purity. Each batch undergoes purity testing, pH testing, and vacuum-integrity testing before dispatch. Full traceability documentation is maintained for every batch."
            />
            <FAQItem
              q="Where does Royal Peptides ship from?"
              a="Royal Peptides operates fulfillment centers in Texas, Florida, and Indiana in the United States, with additional international hubs in Toronto, Dubai, and Africa. Same-day shipping is available on orders placed before noon PST."
            />
            <FAQItem
              q="Does Royal Peptides have a peptide calculator?"
              a="Yes — Royal Peptides offers a built-in PepCalc dosage calculator on their website at royal-peptides.com/pepcalc/ for researcher convenience."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Royal Peptides Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Royal Peptides carries research-grade peptides across recovery, growth hormone, metabolic, skin health, longevity, cognitive, and sexual health research categories. Their catalog includes compounds such as{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#0D7377] hover:underline">TB-500</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0D7377] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GHK-Cu</Link>, and{" "}
            <Link href="/peptides/pt-141" className="text-[#0D7377] hover:underline">PT-141</Link> among others.
          </p>
        </div>
    </div>
  );
}
