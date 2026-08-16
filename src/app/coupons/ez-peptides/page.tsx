"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function EZPeptidesCouponPage() {
  const v = vendors["ez-peptides"];
  const rows = vendorProductRows("ez-peptides");
  const discountPct = vendorDiscountPct("ez-peptides");
  const autoApply = codeAutoApplies("ez-peptides");
  const shopUrl = makeShopUrlFor("ez-peptides");
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="ez-peptides" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">EZ Peptides Discount Code: PROFPEPTIDE &mdash; Save 10%</h1>
 </div>
 <CouponCodeCard slug="ez-peptides" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 EZ Peptides is a U.S.-based research-peptide supplier headquartered in Albuquerque, New Mexico, known for fast fulfillment (0&ndash;2 business-day shipping), with an independent Certificate of Analysis on every batch and a self-reported 4.7/5 rating across 176+ reviews (EZ&apos;s own figure; no independent Trustpilot profile exists to corroborate it). Their catalog spans metabolic, recovery, growth-hormone, cognitive, skin, immunity, longevity, and sexual-health research compounds. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/semax-selank" className="text-[#3A759F] hover:underline">Semax + Selank</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
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
 <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>
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
 Every EZ Peptides batch is third-party tested by Janoshik, an independent analytical laboratory, and ships lyophilized from a U.S.-based facility in Albuquerque under standardized, sterile conditions. Each batch-numbered Janoshik Test Report quantifies peptide content across multiple vials and reports purity by HPLC, and every report is independently checkable at janoshik.com/verify/ using a unique key printed on it (alongside a QR code), so researchers can confirm the specific lot before use.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Because the analysis is performed by an outside laboratory rather than in-house, the results carry independent, conflict-free verification. Each COA documents the identity and purity of its specific lot, giving researchers a lot-level record that supports consistency and reproducibility across research settings.
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
   <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">EZ Peptides catalog &amp; prices</h2>

   <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

   <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
     Struck-through prices are EZ Peptides&apos; list price; the bold figure is{" "}
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
 q="What peptides does EZ Peptides carry?"
 a="The EZ Peptides catalog covers a wide range of research compounds including metabolic and GLP peptides such as Semaglutide, Tirzepatide, and Retatrutide, recovery compounds including BPC-157 and TB-500, cognitive peptides such as Semax and Selank, and longevity compounds including NAD+. PT-141 and additional compounds round out their catalog."
 />
 <FAQItem
 q="Does EZ Peptides have a coupon code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any EZ Peptides order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the EZ Peptides discount code?"
 a="Add your items to cart at ezpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total."
 />
 <FAQItem
 q="Is EZ Peptides third-party tested?"
 a="Yes — by Janoshik, an independent analytical laboratory. Each batch-numbered Janoshik Test Report quantifies peptide content across multiple vials and reports purity by HPLC, and carries a unique key and QR code that independently verify it at janoshik.com/verify/."
 />
 <FAQItem
 q="How fast does EZ Peptides ship?"
 a="EZ Peptides processes orders within 0-2 business days, with same-day shipping available. Full order tracking is provided on all shipments."
 />
 <FAQItem
 q="What is the EZ Peptides customer rating?"
 a="EZ Peptides reports a 4.7 out of 5 rating across 176+ customer reviews on its own site. That is a self-reported figure — EZ has no independent Trustpilot profile, so Prof. Peptide could not corroborate it against a third-party review platform."
 />
 </div>
 </div>
 </div>
 </div>
 );
}
