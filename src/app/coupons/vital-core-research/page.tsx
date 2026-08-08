"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function VitalCoreResearchCouponPage() {
  const v = vendors["vital-core-research"];
  const rows = vendorProductRows("vital-core-research");
  const discountPct = vendorDiscountPct("vital-core-research");
  const autoApply = codeAutoApplies("vital-core-research");
  const shopUrl = makeShopUrlFor("vital-core-research");
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="vital-core-research" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Vital Core Research Discount Code &mdash; Save 20%</h1>
 </div>
 <CouponFacts slug="vital-core-research" />
 <CouponCodeCard slug="vital-core-research" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Vital Core Research is a US-based research compound supplier headquartered in Arizona. The company operates a Research Rewards Program offering loyalty points on every purchase, redeemable against future orders. Same-day shipping is standard, with full order tracking provided on all shipments. Vital Core Research offers one of the most comprehensive research compound catalogs available &mdash; 56 products spanning peptides, SARMs, GLP-class metabolic compounds, peptide blends, and capsule formulations. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/cagrisema" className="text-[#3A759F] hover:underline">CagriSema</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ghrp-2" className="text-[#3A759F] hover:underline">GHRP-2</Link>, <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, <Link href="/peptides/hexarelin" className="text-[#3A759F] hover:underline">Hexarelin</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual Health</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>
 </dd>
 </div>
 </dl>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Every Vital Core Research batch is independently third-party tested, with a Certificate of Analysis available directly on each product page &mdash; COA documentation is displayed per product rather than maintained in a separate library. Competitive pricing is combined with a loyalty rewards structure that reduces cost for returning researchers.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 The Vital Core Research catalog spans an unusually broad range of research categories. Their metabolic compound lineup covers the full GLP generation spectrum including GLP-1 (Semaglutide), GLP-2 (Tirzepatide), GLP-3 (Retatrutide), Cagrilintide, and combination blends. Recovery compounds include BPC-157, TB-500, and the BPC-157/TB-500 blend. Growth hormone secretagogues include CJC-1295 (both DAC and No DAC variants), Ipamorelin, Sermorelin, Tesamorelin, Hexarelin, GHRP-2, and GHRP-6. The catalog also includes novel compounds not widely carried by other vendors, including SLU-PP-332 (an exercise mimetic compound) and Tesofensine, both available in capsule format. A SARMs catalog of 13 compounds runs alongside the peptide lineup. Pre-formulated blends include GLOW (GHK-Cu + BPC-157 + TB-500) and KLOW (KPV + GHK-Cu + BPC-157 + TB-500).
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
   <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Vital Core Research catalog &amp; prices</h2>

   <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

   <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
     Struck-through prices are Vital Core Research&apos;s list price; the bold figure is{" "}
     {autoApply ? (
       <>your price after the {discountPct}% code</>
     ) : (
       <>your price once you apply code {v.code} at checkout</>
     )}. Prices current as of {PRICES_UPDATED_DATE}.
   </p>
 </div>


 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
 <div className="space-y-2">
 <FAQItem
 q="What products does Vital Core Research carry?"
 a="Vital Core Research carries 56 research products across peptides, SARMs, and blends. Their metabolic catalog covers the full GLP generation range including Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, and combination blends. Recovery peptides include BPC-157 and TB-500. Growth hormone secretagogues include CJC-1295 (both DAC and No DAC), Ipamorelin, Sermorelin, Tesamorelin, Hexarelin, GHRP-2, GHRP-6, and IGF-1 LR3. Longevity compounds include NAD+, Epithalon, and MOTS-c. Cognitive peptides include Semax and Selank. Sexual health compounds include PT-141. Immune compounds include Thymosin Alpha-1. Novel compounds include SLU-PP-332 capsules and Tesofensine capsules. Pre-formulated blends include GLOW and KLOW. A 13-compound SARMs catalog is also available."
 />
 <FAQItem
 q="Does Vital Core Research have a discount code?"
 a="Yes. Use code PROF20 at checkout to save 20% on any Vital Core Research order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Vital Core Research discount code?"
 a="Add your items to cart at vitalcoreresearch.com, proceed to checkout, and enter PROF20 in the discount code field. The 20% discount will be applied to your order total."
 />
 <FAQItem
 q="Is Vital Core Research third-party tested?"
 a="Yes. Every Vital Core Research batch is independently third-party tested. A Certificate of Analysis is available directly on each product page, allowing researchers to review documentation for the specific compound before ordering."
 />
 <FAQItem
 q="Does Vital Core Research carry SARMs as well as peptides?"
 a="Yes — Vital Core Research carries 13 SARMs compounds alongside their peptide catalog, including LGD-4033, RAD-140, MK-677, MK-2866, S4, S23, GW-501516, YK-11, and others."
 />
 <FAQItem
 q="Does Vital Core Research have a loyalty program?"
 a="Yes — the Research Rewards Program awards points on every purchase, redeemable against future orders."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
