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

export default function IgnitePeptidesCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Ignite Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Ignite Peptides is a US-based research peptide supplier founded in 2022 and headquartered in Owatonna, Minnesota. The company serves academic researchers, independent scientists, and professional laboratories across the United States, with a catalog of over 40 research-grade peptides spanning metabolic, recovery, growth hormone, cognitive, and longevity research categories. All orders ship domestically from within the United States with discreet packaging and encrypted payment systems.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ignite Peptides conducts two-stage independent third-party testing on every batch &mdash; testing occurs both before and after a product is added to their catalog, providing an additional verification step beyond the single-test standard common in the industry. All testing is performed by US-based independent laboratories meeting strict ISO and GMP standards. Every product is guaranteed to meet 99%+ purity, and a Certificate of Analysis is provided for every product in their catalog. COAs are publicly accessible on their website.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="welcome10" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://ignitepeptides.com/ref/profpeptide/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Ignite Peptides &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Ignite Peptides have a discount code?"
              a="Yes. Use code welcome10 at checkout to save 10% on your Ignite Peptides order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Ignite Peptides discount code?"
              a="Add your items to cart at ignitepeptides.com, proceed to checkout, and enter welcome10 in the discount code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="Is Ignite Peptides third-party tested?"
              a="Yes. Ignite Peptides uses US-based independent laboratories meeting ISO and GMP standards. Every batch undergoes two-stage testing — before and after being listed for sale — and a Certificate of Analysis is provided for every product. All testing guarantees 99%+ purity."
            />
            <FAQItem
              q="What is Ignite Peptides' purity standard?"
              a="Ignite Peptides guarantees 99%+ purity on all research peptides, verified through independent third-party laboratory testing. COAs for all products are publicly available on their website."
            />
            <FAQItem
              q="How many peptides does Ignite Peptides carry?"
              a="Ignite Peptides carries a catalog of 40+ research-grade peptides spanning metabolic, recovery, growth hormone, and other research categories."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Ignite Peptides Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ignite Peptides carries 40+ research-grade compounds across metabolic, recovery, growth hormone, and longevity categories. Their catalog includes compounds such as{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#0D7377] hover:underline">TB-500</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>, and{" "}
            <Link href="/peptides/retatrutide" className="text-[#0D7377] hover:underline">Retatrutide</Link>, alongside a broad range of additional peptides for diverse research applications.
          </p>
        </div>
    </div>
  );
}
