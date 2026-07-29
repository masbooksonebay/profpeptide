"use client";

import { useState } from "react";
import { CopyCode } from "@/components/CopyCode";
import Link from "next/link";
import { CODES_VERIFIED_DATE } from "@/data/vendors";
import { RegionPill } from "@/components/RegionPill";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ModernAminosCouponPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Modern Aminos Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="modern-aminos" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Modern Aminos is a US-based research-chemical supplier that positions itself around testing rigor and responsive service. Its full catalog sits behind a free research-account login &mdash; researchers register and log in to view the product selection &mdash; a compliance-oriented gate the company applies to its entire store. Because the catalog is account-gated, the specific compound list is not enumerated here; create a free account on modernaminos.com to browse current products.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The Modern Aminos guarantee centers on third-party, multi-vial batch testing: each product is tested across multiple vials per batch to verify purity, compound identity, quantity, and endotoxin levels. Rather than a single spot check, testing draws from several vials of the same batch. Every vial carries a unique batch number, letting a researcher match the exact product received to its corresponding laboratory testing report rather than relying on a generic product-page certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Beyond testing, the company emphasizes customer service and fast fulfillment, with support and shipping teams positioned as a core part of the experience. Modern Aminos operates a US store at modernaminos.com; this Prof. Peptide code applies to that US store.
          </p>
        </div>

        <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
          <CopyCode code="PROFPEPTIDE" size="large" />
          <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">10% off your entire order</p>
          <a href="https://modernaminos.com/?ref=profpeptide" target="_blank" rel="noopener noreferrer sponsored" className="btn-primary w-full text-center block">
            Shop Modern Aminos</a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Modern Aminos have a discount code?" a={`Yes. Use code PROFPEPTIDE at checkout to save 10% on your entire Modern Aminos order. This code is verified and maintained by Prof. Peptide and valid as of ${CODES_VERIFIED_DATE}.`} />
            <FAQItem q="How do I use the Modern Aminos discount code?" a="Log in to your Modern Aminos account at modernaminos.com, add your items to cart, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="How does Modern Aminos test its peptides?" a="Modern Aminos states that each product undergoes third-party, multi-vial batch testing to verify purity, compound identity, quantity, and endotoxin levels — drawing from multiple vials of the same batch rather than a single spot check." />
            <FAQItem q="How do I verify a Modern Aminos batch?" a="Every Modern Aminos vial carries a unique batch number. That number lets you match the specific product you received to its corresponding third-party laboratory testing report, rather than relying on a generic product-page certificate." />
            <FAQItem q="Why does Modern Aminos require an account to view products?" a="Modern Aminos gates its full catalog behind a free research-account login as part of a compliance-oriented, research-only purchasing model. Registering an account on modernaminos.com is free and lets you view the current product selection and pricing." />
            <FAQItem q="Is Modern Aminos US-based?" a="Yes. Modern Aminos operates a US store at modernaminos.com, and this Prof. Peptide discount code applies to that US store." />
          </div>
        </div>

      </div>
    </div>
  );
}
