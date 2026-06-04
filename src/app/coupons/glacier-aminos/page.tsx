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
        <span className="text-[#0891b2] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function GlacierAminosCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Glacier Aminos Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <span className="text-xs bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-2 py-0.5 rounded-full font-semibold">Editor&apos;s Pick</span>
        <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"🇺🇸"} US</span>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Glacier Aminos is a US-based research peptide supplier with domestic fulfillment and USD pricing. The company operates a fully public catalog &mdash; all products, including its three GLP-1 class compounds, are listed and accessible without account gating. Their catalog spans the metabolic GLP category, recovery and repair peptides, longevity compounds, and cosmetic peptides, alongside a small number of proprietary research blends not carried by other Prof. Peptide-tracked vendors.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Glacier Aminos describes a seven-step testing protocol applied to its compounds, with three categories of results visible on the public Certificates of Analysis &mdash; identity, mass, and endotoxin testing. Testing is conducted by independent USA-based laboratories, and every batch is traceable: researchers can search a batch number directly on glacieraminos.shop to pull the matching COA. This batch-level traceability lets researchers verify documentation against the specific batch they receive rather than a generic product-page certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Cold-chain shipping is included on Glacier Aminos orders, helping preserve compound integrity in transit. Pricing is competitive across the catalog &mdash; Glacier&apos;s Retatrutide pricing is the lowest tracked across Prof. Peptide&apos;s vendor pool, at roughly $62.99 per 10mg vial as of May 2026. The catalog also includes KLOW 80, a Glacier-exclusive research blend combining KPV, LL-37, Oxytocin, and the company&apos;s Wolverine blend.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CodeBox code="PROF10" />
          <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
          <a href="https://glacieraminos.shop/?ref=cknlhxrm" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
            Shop Glacier Aminos &rarr;
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="What peptides does Glacier Aminos carry?" a="Glacier Aminos carries research compounds across several categories. Its metabolic GLP catalog includes Semaglutide, Tirzepatide, Retatrutide, and Cagrilintide, along with combination compounds such as a GLP-3/Cagrilintide blend and a GLP-2.5 tirzepatide/retatrutide hybrid. Recovery and repair peptides include BPC-157, TB-500, GHK-Cu, and a CJC-1295/Ipamorelin blend. Longevity and additional research compounds include Epithalon, FOXO4-DRI, 5-Amino-1MQ, AOD-9604, DSIP, Glutathione, and Cartalax. Glacier also carries KLOW 80, a proprietary blend of KPV, LL-37, Oxytocin, and its Wolverine blend." />
            <FAQItem q="Does Glacier Aminos have a discount code?" a="Yes. Use code PROF10 at checkout to save 10% on your entire Glacier Aminos order. This code is verified and maintained by Prof. Peptide and valid as of June 2026." />
            <FAQItem q="How do I use the Glacier Aminos discount code?" a="Add your items to cart at glacieraminos.shop, proceed to checkout, and enter PROF10 in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="How does Glacier Aminos test its peptides?" a="Glacier Aminos describes a seven-step testing protocol for its compounds. Three categories of results are visible on the public Certificates of Analysis: identity, mass, and endotoxin testing. Testing is performed by independent USA-based laboratories." />
            <FAQItem q="How do I verify a Glacier Aminos Certificate of Analysis?" a="Every Glacier Aminos batch is traceable. Each Certificate of Analysis is tied to a batch number, and researchers can search that batch number directly on glacieraminos.shop to pull the matching COA — verifying documentation against the specific batch received rather than a generic product-page certificate." />
            <FAQItem q="Is Glacier Aminos pricing competitive?" a="Yes. Glacier Aminos prices competitively across its catalog, and its Retatrutide pricing is the lowest tracked across Prof. Peptide's vendor pool — roughly $62.99 per 10mg vial as of May 2026. Cold-chain shipping is included on orders to help preserve compound integrity in transit." />
          </div>
        </div>

      </div>
    </div>
  );
}
