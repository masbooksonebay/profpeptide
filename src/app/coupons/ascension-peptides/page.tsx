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
 <span className="text-[#0891b2] flex-shrink-0 text-lg">{open ? "\u2212" : "+"}</span>
 </button>
 {open && (
 <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
 {a}
 </div>
 )}
 </div>
 );
}

export default function AscensionPeptidesCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Ascension Peptides Discount Code &mdash; Save 50%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">Best Deal</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Ascension Peptides is a US-based research peptide supplier shipping exclusively within the United States. Ascension distinguishes itself through an extensive catalog of individual peptides and pre-formulated peptide blends and stacks &mdash; combining multiple compounds into single research formulations. Wholesale and distributor tiered pricing programs are available for higher-volume research operations.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Ascension Peptides conducts multi-stage third-party testing on all products, guaranteeing 99%+ purity and verifying that compounds are contaminant-free and potency-verified. Certificates of Analysis are publicly accessible through a dedicated &quot;Lab Testing / COAs&quot; page on their website, allowing researchers to review documentation prior to purchase.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Ascension Peptides offers the largest discount available across Prof. Peptide&apos;s entire vendor network. Using code PROFPEPTIDE at checkout applies a 50% discount &mdash; a savings level that is rare in the research peptide space and makes Ascension Peptides a compelling option for researchers prioritizing value without compromising on documented quality standards. Ascension Peptides can be reached by phone at (303) 518-6550, Monday through Friday, 9am&ndash;5pm CST.
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">50% off your entire order</p>
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
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
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
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What Does Ascension Peptides Carry?</h2>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Ascension Peptides carries a wide range of individual research peptides and pre-formulated blends. Their catalog includes GLP-1 compounds such as Semaglutide, recovery peptides including BPC-157 and TB-500, growth hormone secretagogues including CJC-1295 and Ipamorelin, skin health compounds including GHK-Cu and Melanotan, and longevity compounds including NAD+, Epithalon, and MOTS-c. Pre-formulated stacks including the Wolverine Stack and GLOW blend are also available.
 </p>
 </div>
 </div>
 </div>
 );
}
