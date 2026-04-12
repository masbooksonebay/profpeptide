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
 className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
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

export default function EZPeptidesCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">EZ Peptides Discount Code &mdash; Save 10%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 EZ Peptides is a U.S.-based peptide supplier headquartered in Albuquerque, New Mexico, founded to support the research community with rigorously sourced compounds. The company is known for fast fulfillment &mdash; orders ship within 0&ndash;2 business days with same-day shipping available &mdash; and consistent product quality backed by independent third-party lab testing.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 With a 4.7/5 customer rating across 176+ reviews, EZ Peptides has built a strong reputation for reliable service, competitive pricing, and responsive customer support. Every batch is accompanied by a Certificate of Analysis (COA) so researchers can verify purity and consistency before use. Products are manufactured in a U.S.-based facility under standardized conditions.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 The EZ Peptides catalog covers a wide range of research compounds including metabolic and GLP peptides such as Semaglutide, Tirzepatide, and Retatrutide, recovery compounds including BPC-157 and TB-500, cognitive peptides such as Semax and Selank, and longevity compounds including NAD+. PT-141 and additional compounds round out their catalog.
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
 <a
 href="https://ezpeptides.com/?ref=nldbbgvs"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop EZ Peptides &rarr;
 </a>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What peptides does EZ Peptides carry?"
 a="The EZ Peptides catalog covers a wide range of research compounds including metabolic and GLP peptides such as Semaglutide, Tirzepatide, and Retatrutide, recovery compounds including BPC-157 and TB-500, cognitive peptides such as Semax and Selank, and longevity compounds including NAD+. PT-141 and additional compounds round out their catalog."
 />
 <FAQItem
 q="Does EZ Peptides have a discount code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any EZ Peptides order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the EZ Peptides discount code?"
 a="Add your items to cart at ezpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
 />
 <FAQItem
 q="Is EZ Peptides third-party tested?"
 a="Yes. Every EZ Peptides batch is independently third-party tested. A Certificate of Analysis is available for every batch, allowing researchers to verify purity and consistency."
 />
 <FAQItem
 q="How fast does EZ Peptides ship?"
 a="EZ Peptides processes orders within 0-2 business days, with same-day shipping available. Full order tracking is provided on all shipments."
 />
 <FAQItem
 q="What is the EZ Peptides customer rating?"
 a="EZ Peptides has a 4.7 out of 5 rating across 176+ customer reviews, reflecting consistent quality and reliable service."
 />
 </div>
 </div>
 </div>
 </div>
 );
}
