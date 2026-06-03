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

export default function PeptidesGgCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Peptides.gg Discount Code &mdash; Save 15%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"🇺🇸"} US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Peptides.gg is a US-made research peptide supplier with a deep catalog of 90+ products available as vials, ready-to-use liquids, and capsules &mdash; covering GLP/metabolic, growth hormone, recovery, longevity and bioregulator, and nootropic research categories. Orders ship the same day, shipping is free on orders over $200, and every order earns 5% back in store credit. Researchers running ongoing protocols can save an additional 15% through the Subscription Saver. Returns are accepted within 30 days, and support is available by chat, phone, and email.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Every batch is third-party tested with published COAs, where each sample ID links directly to its full lab report &mdash; so you can verify the exact lot you receive rather than a generic reference document. Purity runs 98&ndash;99%+ depending on the product. The catalog spans GLP/metabolic compounds (Retatrutide, Semaglutide, Tirzepatide, Cagrilintide, Mazdutide, Survodutide, Orforglipron), growth-hormone secretagogues (CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, IGF-1 LR3), recovery peptides (BPC-157, TB-500, GHK-Cu, KPV, plus KLOW and GLOW blends), longevity and bioregulators (Epitalon and a deep Khavinson bioregulator line), and nootropics (Semax, Selank, Noopept).
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROF15" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">15% off your entire order</p>
 <a
 href="https://peptides.gg/?coupon=prof15"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop Peptides.gg &rarr;
 </a>
 </div>


 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What peptides does Peptides.gg carry?"
 a="Peptides.gg carries 90+ research-grade products across GLP/metabolic, growth hormone, recovery, longevity and bioregulator, and nootropic categories — available as vials, liquids, and capsules. Highlights include Retatrutide, Semaglutide, Tirzepatide, Cagrilintide, CJC-1295, Ipamorelin, Tesamorelin, IGF-1 LR3, BPC-157, TB-500, GHK-Cu, KPV, KLOW and GLOW blends, Epitalon and a deep Khavinson bioregulator line, plus Semax, Selank, and Noopept."
 />
 <FAQItem
 q="Does Peptides.gg have a discount code?"
 a="Yes. Use code PROF15 at checkout to save 15% on any Peptides.gg order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Peptides.gg discount code?"
 a="Add your items to cart at peptides.gg, proceed to checkout, and enter PROF15 in the discount code field. The 15% discount will be applied to your order total."
 />
 <FAQItem
 q="What testing does Peptides.gg conduct?"
 a="Peptides.gg third-party tests every batch and publishes COAs where each sample ID links to the full lab report, so you can verify the exact lot you receive. Purity runs 98–99%+ depending on the product."
 />
 <FAQItem
 q="How does Peptides.gg ship, and what does it cost?"
 a="Peptides.gg is US-made and ships orders the same day. Shipping is free on orders over $200, and returns are accepted within 30 days. Every order also earns 5% back in store credit."
 />
 <FAQItem
 q="Does Peptides.gg offer a subscription discount?"
 a="Yes — the Subscription Saver takes an additional 15% off recurring orders, on top of any one-time code, for researchers running ongoing protocols."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
