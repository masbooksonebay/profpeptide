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

export default function PeptidePartnersCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Peptide Partners Discount Code &mdash; Save 10%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-2 py-0.5 rounded-full font-semibold">Editor&apos;s Pick</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDFA\uD83C\uDDF8"} US</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Peptide Partners is a US-based research peptide supplier operating out of Florida, reachable during business hours at (941) 248-3873. The company operates on a wholesale pricing model, listing cost per milligram transparently on every product page &mdash; a practice uncommon among research peptide suppliers. Bulk pricing structures offer significant savings at higher quantities. Their catalog spans metabolic compounds, growth hormone secretagogues, recovery peptides, cognitive compounds, longevity peptides, and skin health compounds.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Peptide Partners conducts four categories of independent third-party testing on their batches &mdash; purity, endotoxin, heavy metals, and sterility &mdash; using multiple accredited laboratories including TrustPointe Analytics, Kovera, BioRegen, and Chromate. Purity is verified via HPLC (High-Performance Liquid Chromatography), with recent batch results consistently exceeding 99% across compounds including BPC-157 (99.99%), Thymosin Alpha-1 (99.95%), Ipamorelin/CJC-1295 (99.92%), and NAD+ (99.92%). Endotoxin testing follows USP &lt;85&gt; Bacterial Endotoxin Test methodology using the Charles River Endosafe PTS system, with full suitability data &mdash; including coefficient of variation and spike recovery &mdash; published alongside results for complete transparency. Heavy metals certifications and sterility testing on reconstitution products round out the quality documentation package.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Every certificate of analysis provided by Peptide Partners is independently verifiable on the issuing laboratory&apos;s own website &mdash; not merely a downloadable PDF. Each product page lists a Manufacturer ID and Batch ID enabling direct cross-reference with the third-party lab&apos;s records. Peptide Partners explicitly addresses certificate fraud in the research peptide industry, noting that doctored images and stolen certificates are common, and provides verification guidance so researchers can authenticate documentation themselves.
 </p>
 </div>

 <div className="border-l-4 border-l-amber-400 border border-amber-200 dark:border-amber-700/50 rounded-xl p-6 bg-[#FFFBEB]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
 <a
 href="https://peptide.partners/"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop Peptide Partners &rarr;
 </a>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="Does Peptide Partners have a discount code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Peptide Partners order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Peptide Partners discount code?"
 a="Add your items to cart at peptide.partners, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
 />
 <FAQItem
 q="What types of third-party testing does Peptide Partners provide?"
 a="Peptide Partners conducts four independent test types per batch: HPLC purity testing, USP <85> bacterial endotoxin testing, heavy metals testing, and sterility testing on reconstitution products. Testing is performed by multiple independent laboratories including TrustPointe Analytics, Kovera, BioRegen, and Chromate. All certificates are verifiable directly on the issuing laboratory's website."
 />
 <FAQItem
 q="How do I verify a Peptide Partners Certificate of Analysis?"
 a="Each Peptide Partners product page lists a Manufacturer ID and Batch ID. You can cross-reference these against the certificate on the third-party laboratory's own website — TrustPointe, Kovera, BioRegen, or Chromate — to confirm the certificate is genuine and the values have not been altered."
 />
 <FAQItem
 q="Is Peptide Partners pricing competitive?"
 a="Peptide Partners operates on a wholesale pricing model and lists cost per milligram on every product page, making price comparison straightforward. Bulk quantity pricing offers substantial savings. Their pricing is among the most competitive available for independently tested, research-grade peptides."
 />
 </div>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What Does Peptide Partners Carry?</h2>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Peptide Partners carries research peptides across a broad range of categories. Their metabolic and GLP-1 compound catalog includes Semaglutide, Tirzepatide, Retatrutide, and MOTS-c.
 Recovery peptides include BPC-157, TB-500, and combination blends.
 Growth hormone secretagogues include Ipamorelin, CJC-1295, Sermorelin, and Tesamorelin.
 Additional categories include cognitive compounds such as Semax and Selank,
 skin health peptides including GHK-Cu,
 longevity and mitochondrial compounds including NAD+, SS-31, and Humanin,
 and immune peptides including Thymosin Alpha-1 and PT-141.
 </p>
 </div>
 </div>
 </div>
 );
}
