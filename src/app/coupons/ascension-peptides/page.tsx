"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function AscensionPeptidesCouponPage() {
  const v = vendors["ascension-peptides"];
  const rows = vendorProductRows("ascension-peptides");
  const discountPct = vendorDiscountPct("ascension-peptides");
  const autoApply = codeAutoApplies("ascension-peptides");
  const shopUrl = makeShopUrlFor("ascension-peptides");
  return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="ascension-peptides" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Ascension Peptides Discount Code &mdash; Save {discountPct}%</h1>
 </div>
 <CouponFacts slug="ascension-peptides" />
 <CouponCodeCard slug="ascension-peptides" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Ascension Peptides is a US-based research peptide supplier shipping exclusively within the United States. Ascension distinguishes itself through an extensive catalog of individual peptides and pre-formulated peptide blends and stacks &mdash; combining multiple compounds into single research formulations. Wholesale and distributor tiered pricing programs are available for higher-volume research operations. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>
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
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
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
 <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Bioregulators</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
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
 Every Ascension Peptides product links a batch-matched Certificate of Analysis from MZ Biolabs, an independent lab in Tucson, AZ (mzbiolabs.com). Each certificate is tied to a lot number and analysis date and reports purity by HPLC-UV (area %), identity by HPLC-MS (monoisotopic mass confirmation), and &mdash; on many lots &mdash; measured content by HPLC-UV in mg per vial; each carries a &ldquo;Proof of Authenticity&rdquo; QR code and is signed by the analyzing chemist. Ascension states a 99%+ purity standard for its catalog, and every COA is downloadable from the product page and a dedicated Lab Testing / COAs page.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Using code PROFPEPTIDE at checkout applies a {discountPct}% storewide discount at Ascension Peptides &mdash; deep savings without compromising on the vendor&rsquo;s documented quality standards.
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Ascension Peptides catalog &amp; prices</h2>

 <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

 <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
 Struck-through prices are Ascension Peptides&apos; list price; the bold figure is{" "}
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
 q="What peptides does Ascension Peptides carry?"
 a="Ascension Peptides carries a wide range of individual research peptides and pre-formulated blends. Their catalog includes GLP-1 compounds such as Semaglutide, recovery peptides including BPC-157 and TB-500, growth hormone secretagogues including CJC-1295 and Ipamorelin, skin health compounds including GHK-Cu and Melanotan, and longevity compounds including NAD+, Epithalon, and MOTS-c. Pre-formulated stacks including the Wolverine Stack and GLOW blend are also available."
 />
 <FAQItem
 q="Does Ascension Peptides have a discount code?"
 a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Ascension Peptides order. This code is verified and maintained by Prof. Peptide.`}
 />
 <FAQItem
 q="How do I use the Ascension Peptides discount code?"
 a={`Add your items to cart at ascensionpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
 />
 <FAQItem
 q="Is Ascension Peptides third-party tested?"
 a="Yes — by MZ Biolabs, an independent lab in Tucson, AZ. Each product links a batch-matched Certificate of Analysis reporting purity by HPLC-UV, identity by HPLC-MS, and (on many lots) measured content in mg per vial, with a 'Proof of Authenticity' QR code on every report. Ascension states a 99%+ purity standard, and every COA is downloadable from the product page and a dedicated Lab Testing / COAs page."
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

 </div>
 </div>
 );
}
