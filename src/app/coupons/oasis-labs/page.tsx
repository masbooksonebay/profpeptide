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

export default function OasisLabsCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Oasis Labs Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">Veteran-Owned</span>
        <span className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Oasis Labs is a veteran-owned research peptide supplier based in Las Vegas, Nevada. Founded by researchers who were dissatisfied with the inconsistency, poor service, and lack of transparency prevalent in the peptide industry, the company operates with a stated commitment to discipline, honesty, and transparency that reflects its veteran ownership. All customer service and order fulfillment is handled in-house at their Las Vegas facility by dedicated staff &mdash; not outsourced. The company offers a loyalty rewards program (Oasis Rewards) providing cash back and tier-based discounts for returning customers.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Oasis Labs conducts independent third-party testing on every batch at US-based laboratories, guaranteeing 99% purity on all research peptides in accordance with industry-standard testing methodology. Testing is performed to standards exceeding GMP (Good Manufacturing Practice) requirements. Certificates of Analysis are publicly accessible through a dedicated COA Library on the Oasis Labs website, with a separate COA Process page detailing their testing methodology. Notably, each Oasis Labs peptide vial features a unique QR code providing instant, point-of-use access to the Certificate of Analysis for that specific product &mdash; enabling immediate purity and dosage verification without navigating to a separate website.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Oasis Labs stores all peptides in medical-grade conditions at -20&deg;C to maintain potency and integrity from production through to shipment. All orders are shipped with cold-shield packaging to preserve temperature stability during transit. Order processing is same-day for orders placed before 12 PM PST Monday through Friday, with FedEx 2Day delivery as standard. Free shipping is available on orders of $150 or more.
          </p>
        </div>

        <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROFPEPTIDE" />
          <p className="text-center text-sm text-[#0D7377] font-medium mt-2 mb-4">10% off your entire order</p>
          <a
            href="https://myoasislabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Shop Oasis Labs &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Does Oasis Labs have a discount code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Oasis Labs order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Oasis Labs discount code?"
              a="Add your items to cart at myoasislabs.com, proceed to checkout, and enter PROFPEPTIDE in the promo code field. The 10% discount will be applied to your order total."
            />
            <FAQItem
              q="How does the Oasis Labs QR code system work?"
              a="Each Oasis Labs peptide vial includes a unique QR code that links directly to the Certificate of Analysis for that specific product. Scanning the QR code provides immediate access to the purity and dosage documentation for the exact batch received, without requiring a separate search on an external website."
            />
            <FAQItem
              q="Is Oasis Labs third-party tested?"
              a="Yes. Oasis Labs independently tests every batch at US-based third-party laboratories to a guaranteed purity of 99%, with testing standards that exceed GMP requirements. A public COA Library and dedicated COA Process page are available on their website. Each product also features a QR code for instant COA access at point of use."
            />
            <FAQItem
              q="How does Oasis Labs store and ship their peptides?"
              a="Oasis Labs stores all peptides in medical-grade conditions at -20°C. Orders are shipped with cold-shield packaging to maintain potency during transit, processed same-day for orders placed before 12 PM PST Monday through Friday, and delivered via FedEx 2Day. Free shipping is available on orders of $150 or more."
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">What Does Oasis Labs Carry?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Oasis Labs carries research-grade peptides across recovery, growth hormone, metabolic, cognitive, and longevity categories. Their catalog includes compounds such as{" "}
            <Link href="/peptides/bpc-157" className="text-[#0D7377] hover:underline">BPC-157</Link>,{" "}
            <Link href="/peptides/tb-500" className="text-[#0D7377] hover:underline">TB-500</Link>,{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0D7377] hover:underline">CJC-1295</Link>,{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0D7377] hover:underline">Ipamorelin</Link>,{" "}
            <Link href="/peptides/semaglutide" className="text-[#0D7377] hover:underline">Semaglutide</Link>,{" "}
            <Link href="/peptides/ghk-cu" className="text-[#0D7377] hover:underline">GHK-Cu</Link>, and{" "}
            <Link href="/peptides/thymosin-alpha-1" className="text-[#0D7377] hover:underline">Thymosin Alpha-1</Link>, among others.
          </p>
        </div>
    </div>
  );
}
