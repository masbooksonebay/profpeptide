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

export default function ParticlePeptidesCouponPage() {
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Particle Peptides Discount Code &mdash; Save 10%</h1>
 </div>
 <div className="flex flex-wrap items-center gap-2 mb-8">
 <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
 <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full">{"\uD83C\uDDEC\uD83C\uDDE7"} UK</span>
 </div>

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Particle Peptides is a European research peptide supplier operating since 2015, headquartered in Lucenec, Slovakia (PARTICLE s.r.o., Kolonada 4490/18, Lucenec 984 01). The company serves research institutes, universities, laboratories, and individual researchers worldwide, and has built a client base of over 10,000 researchers with a 4.9/5 rating from 323 verified reviews. Particle Peptides ships internationally. Their website includes a built-in peptide dosage calculator and an educational blog covering peptide science and research. Particle Peptides also proactively warns customers about fake and cloned websites impersonating their brand.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Particle Peptides conducts the most comprehensive independent testing program of any vendor in Prof. Peptide&apos;s network. Every product is independently analyzed across six parameters: purity, molecular identity, peptide content, bioburden, endotoxin levels, and heavy metals &mdash; covering both class 1 and class 2 heavy metal contaminants. Particle Peptides states they are the only company in the market to present independent analysis of all six parameters across their entire product range. All testing limits are established in accordance with the European Pharmacopoeia (Ph. Eur.) &mdash; the gold standard for pharmaceutical substance quality in Europe. Compounds are produced by a manufacturer inspected by the FDA, NMPA, EMA, TGA, and MFDA, and compliant with cGMP, ISO 9001, and ISO 13485 standards. Testing is conducted blind and independently across multiple laboratories. All Certificates of Analysis are publicly accessible through a dedicated COA Vault on their website at particlepeptides.com/en/coa-vault.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Particle Peptides stores all compounds in temperature-controlled environments to preserve peptide integrity from storage through delivery. The company emphasizes long-term customer relationships through recurring discounts and responsive customer service operating from their European base.com.
 </p>
 </div>

 <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b]">
 <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
 <CodeBox code="PROFPEPTIDE" />
 <p className="text-center text-sm text-[#0891b2] font-medium mt-2 mb-4">10% off your entire order</p>
 <a
 href="https://particlepeptides.com/en/"
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-center block"
 >
 Shop Particle Peptides &rarr;
 </a>
 </div>

 <div>
 <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What peptides does Particle Peptides carry?"
 a="Particle Peptides carries 25 research compounds across eight categories. Healing and regeneration compounds include BPC-157, TB-500, GHK-Cu, LL-37, and KPV. Growth hormone secretagogues include Ipamorelin, CJC-1295 with DAC, Mod GRF 1-29 (CJC-1295 no DAC), GHRP-2, GHRP-6, and Hexarelin. Longevity and anti-aging compounds include Epithalon, MOTS-c, Pinealon, Thymalin, and Thymosin Alpha-1. Weight loss compounds include Retatrutide and AOD-9604. Cognitive compounds include Semax and Selank. Sleep research compounds include DSIP. Reproductive health compounds include Melanotan 2. Their specialty catalog also includes FOXO4-DRI (Proxofim), a rare senolytic compound."
 />
 <FAQItem
 q="Does Particle Peptides have a discount code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Particle Peptides order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Particle Peptides discount code?"
 a="Add your items to cart at particlepeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
 />
 <FAQItem
 q="What testing does Particle Peptides conduct?"
 a="Particle Peptides provides independent analysis of six parameters for every product: purity, molecular identity, peptide content, bioburden, endotoxin levels, and heavy metals class 1 and class 2. All testing is performed to European Pharmacopoeia (Ph. Eur.) standards across multiple independent laboratories. COAs are publicly available in their dedicated COA Vault at particlepeptides.com/en/coa-vault."
 />
 <FAQItem
 q="Where does Particle Peptides ship from?"
 a="Particle Peptides ships internationally from their European base in Lucenec, Slovakia. They serve researchers, universities, and laboratories worldwide."
 />
 <FAQItem
 q="Does Particle Peptides carry any rare or specialty peptides?"
 a="Yes — Particle Peptides carries several compounds not widely available elsewhere, including FOXO4-DRI (Proxofim), a synthetic senolytic peptide studied for its role in selective clearance of senescent cells; Pinealon, a synthetic neuroprotective bioregulator; and Thymalin, an immune-modulating polypeptide. Their catalog also covers standard recovery, GH secretagogue, metabolic, cognitive, longevity, and reproductive health compounds."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
