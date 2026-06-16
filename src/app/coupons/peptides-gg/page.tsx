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
 Peptides.gg is a US-made research peptide supplier with a deep catalog of 90+ products available as vials, ready-to-use liquids, and capsules &mdash; covering GLP/metabolic, growth hormone, recovery, longevity and bioregulator, and nootropic research categories. Orders ship the same day, shipping is free on orders over $200, and every order earns 5% back in store credit. Researchers running ongoing protocols can save an additional 15% through the Subscription Saver. Returns are accepted within 30 days, and support is available by chat, phone, and email. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">Cagrilintide</Link>, <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>, <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#0891b2] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#0891b2] hover:underline">5-Amino-1MQ</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">BPC-157 + TB-500</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#0891b2] hover:underline">Tesamorelin + Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/ghk-cu" className="text-[#0891b2] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#0891b2] hover:underline">Melanotan II</Link>, <Link href="/peptides/melanotan-i" className="text-[#0891b2] hover:underline">Melanotan I</Link>, <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#0891b2] hover:underline">VIP</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/dsip" className="text-[#0891b2] hover:underline">DSIP</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>, <Link href="/peptides/ss-31" className="text-[#0891b2] hover:underline">SS-31</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pinealon" className="text-[#0891b2] hover:underline">Pinealon</Link>, <Link href="/peptides/thymogen" className="text-[#0891b2] hover:underline">Thymogen</Link>, <Link href="/peptides/cortagen" className="text-[#0891b2] hover:underline">Cortagen</Link>, <Link href="/peptides/cardiogen" className="text-[#0891b2] hover:underline">Cardiogen</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#1e2d3d] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>
 </dd>
 </div>
 </dl>
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
