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

export default function SpartanPeptidesCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Spartan Peptides Discount Code &mdash; Save 10%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">&ge;98% Purity Verified</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Spartan Peptides is a US-based research peptide supplier distinguished by the depth of its internal research infrastructure. The company maintains a dedicated research team of peptide researchers, biochemists, and quality assurance specialists with expertise spanning peptide science, endocrinology, analytical chemistry, and regulatory affairs. Their catalog covers eight research categories: anti-aging and cellular health, repair and recovery, weight loss, muscle development, sexual health, mood and sleep, focus and clarity, and immunity compounds.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Spartan Peptides conducts three categories of quality testing on every batch. HPLC (High-Performance Liquid Chromatography) analysis is used to verify purity, with a minimum threshold of &ge;98% required before any batch is approved for sale &mdash; batches that fail this standard are not released. Mass spectrometry (MS) is applied to confirm molecular identity, verifying that the peptide sequence is precisely as specified and free from structural anomalies or substitutions. This dual-method approach &mdash; HPLC for purity quantification and MS for identity confirmation &mdash; exceeds the single-method testing offered by most research peptide suppliers, as HPLC alone cannot confirm compound identity. Every batch is accompanied by a comprehensive Certificate of Analysis documenting purity, molecular weight confirmation, and testing methodology.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Independent third-party testing is conducted in partnership with accredited external laboratories, providing an additional accountability layer beyond in-house analysis. Spartan Peptides applies the same commitment to scientific rigor to their educational content: their research team follows a structured five-step editorial process &mdash; Primary Source Review, Expert Drafting, Internal Peer Review, Fact-Checking, and Compliance Review &mdash; with articles updated when new research emerges and last-reviewed dates displayed for transparency.
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
 <a
 href="https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop Spartan Peptides &rarr;
 </a>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What peptides does Spartan Peptides carry?"
 a="Spartan Peptides carries research compounds across eight categories. Anti-aging and cellular health compounds include GHK-Cu, Epitalon, NAD+, and MOTS-c. Recovery and repair peptides include BPC-157 and TB-500. Their weight loss catalog features GLP-3 (Retatrutide). Muscle development compounds include IGF-1 LR3. Additional categories cover sexual health (PT-141), mood and sleep, focus and clarity, and immunity compounds."
 />
 <FAQItem
 q="Does Spartan Peptides have a discount code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Spartan Peptides order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Spartan Peptides discount code?"
 a="Add your items to cart at spartanpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
 />
 <FAQItem
 q="What testing methods does Spartan Peptides use?"
 a="Spartan Peptides conducts HPLC analysis to verify purity (minimum ≥98% required for batch release) and mass spectrometry to confirm molecular identity. This dual-method approach confirms both purity and compound identity — HPLC alone cannot verify that a compound is what it claims to be. All batches are also independently verified by accredited third-party laboratories."
 />
 <FAQItem
 q="What is the minimum purity standard at Spartan Peptides?"
 a="Spartan Peptides requires a minimum of ≥98% purity via HPLC analysis before any batch is approved for sale. Batches that fail to meet this threshold are not released to customers."
 />
 <FAQItem
 q="Does Spartan Peptides provide Certificates of Analysis?"
 a="Yes. Every batch comes with a comprehensive Certificate of Analysis detailing purity percentage, molecular weight confirmation, and the testing methodology used. COAs are available upon request."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
