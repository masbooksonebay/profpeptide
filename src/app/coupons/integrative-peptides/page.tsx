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

export default function IntegrativePeptidesCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Integrative Peptides Discount Code &mdash; Save 10% with PROFPEPTIDE</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-medium">Oral Peptide Formulations</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Integrative Peptides was founded in 2018 with a mission to make advanced peptide therapies accessible without needles or high costs. They specialize in oral peptide formulations designed for physician use and patient access &mdash; a key differentiator from most research peptide vendors who sell injectable lyophilized powders. They use FDA-compliant manufacturing and independent third-party lab testing to verify &ge;99% purity on every batch, screening for heavy metals, microbials, and other contaminants.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Their product catalog includes BPC-157, TB4-Frag, Thymosin Alpha-1, KPV, Thymogen Alpha-1, CerebroPrep, CogniPep, PinealPep, and other peptide complexes &mdash; all in oral and convenient formats. Every batch undergoes independent third-party laboratory testing and is screened for heavy metals, residual solvents, and endotoxins. This oral-first approach makes Integrative Peptides particularly relevant for practitioners and patients who prefer non-injectable administration routes.
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
 <a
 href="https://integrativepeptides.com/affiliate/profpeptide/"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop Integrative Peptides &rarr;
 </a>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="Does Integrative Peptides have a discount code?"
 a="Yes, use code PROFPEPTIDE for 10% off your order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="What makes Integrative Peptides different?"
 a="They specialize in oral peptide formulations that don't require needles or reconstitution, making them accessible for both physicians and patients. Most research peptide vendors sell injectable lyophilized powders — Integrative Peptides focuses exclusively on convenient oral formats."
 />
 <FAQItem
 q="Are Integrative Peptides products third-party tested?"
 a="Yes, every batch is independently tested to ≥99% purity and screened for heavy metals, residual solvents, and endotoxins. Manufacturing is FDA-compliant."
 />
 <FAQItem
 q="Where does Integrative Peptides ship?"
 a="They are a US-based company shipping domestically."
 />
 </div>
 </div>
 </div>
 </div>
 );
}
