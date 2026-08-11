"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function OasisLabsCouponPage() {
  const v = vendors["oasis-labs"];
  const rows = vendorProductRows("oasis-labs");
  const discountPct = vendorDiscountPct("oasis-labs");
  const autoApply = codeAutoApplies("oasis-labs");
  const shopUrl = makeShopUrlFor("oasis-labs");
  return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="oasis-labs" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Oasis Labs Discount Code &mdash; Save 15%</h1>
 </div>
 <CouponFacts slug="oasis-labs" />
 <CouponCodeCard slug="oasis-labs" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Oasis Labs is a veteran-owned research peptide supplier based in Las Vegas, Nevada. Founded by researchers who were dissatisfied with the inconsistency, poor service, and lack of transparency prevalent in the peptide industry, the company operates with a stated commitment to discipline, honesty, and transparency that reflects its veteran ownership. All customer service and order fulfillment is handled in-house at their Las Vegas facility by dedicated staff &mdash; not outsourced. The company offers a loyalty rewards program (Oasis Rewards) providing cash back and tier-based discounts for returning customers.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Oasis Labs maintains a broad research catalog spanning metabolic, recovery, performance, growth-hormone, cognitive, skin, immunity, sleep, longevity, and sexual-health research. Popular compounds by research area:
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
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
 <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin-ipamorelin" className="text-[#3A759F] hover:underline">Tesamorelin + Ipamorelin</Link>
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
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
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
 Oasis Labs states a 99% purity standard and publishes a Certificate of Analysis for every batch through a public COA Library, with a separate COA Process page describing its methodology. Recent batches are tested by Bioviridian &mdash; identity by MALDI-MS, purity by RP-HPLC (214 nm), and content by HPLC quantitation &mdash; each COA carrying a per-record Web Verification Code (verifiable at bioviridians.com/coa-search.html) and a QR code; earlier batches were tested by BioRegen (identity, purity, and content by LC-MS, verifiable by a shared security key at bioregen.com/verify). Each vial also carries a QR code that opens that batch&apos;s COA at the point of use. Oasis describes its testing as exceeding GMP requirements &mdash; the certificates are third-party analytical reports and do not carry a GMP or accreditation mark.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Oasis Labs stores all peptides in medical-grade conditions at -20&deg;C to maintain potency and integrity from production through to shipment. All orders are shipped with cold-shield packaging to preserve temperature stability during transit. Order processing is same-day for orders placed before 12 PM PST Monday through Friday, with FedEx 2Day delivery as standard. Free shipping is available on orders of $150 or more.
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Oasis Labs catalog &amp; prices</h2>

 <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

 <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
 Struck-through prices are Oasis Labs&apos; list price; the bold figure is{" "}
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
 q="What peptides does Oasis Labs carry?"
 a="Oasis Labs carries research-grade peptides across recovery, growth hormone, metabolic, cognitive, and longevity categories. Their catalog includes compounds such as BPC-157, TB-500, CJC-1295, Ipamorelin, Semaglutide, GHK-Cu, and Thymosin Alpha-1, among others."
 />
 <FAQItem
 q="Does Oasis Labs have a discount code?"
 a="Yes. Use code PROFPEPTIDE at checkout to save 15% on any Oasis Labs order. This code is verified and maintained by Prof. Peptide."
 />
 <FAQItem
 q="How do I use the Oasis Labs discount code?"
 a="Add your items to cart at myoasislabs.com, proceed to checkout, and enter PROFPEPTIDE in the promo code field. The 15% discount will be applied to your order total."
 />
 <FAQItem
 q="How does the Oasis Labs QR code system work?"
 a="Each Oasis Labs peptide vial includes a unique QR code that links directly to the Certificate of Analysis for that specific product. Scanning the QR code provides immediate access to the purity and dosage documentation for the exact batch received, without requiring a separate search on an external website."
 />
 <FAQItem
 q="Is Oasis Labs third-party tested?"
 a="Yes. Recent batches are tested by Bioviridian (identity by MALDI-MS, purity by RP-HPLC, content by HPLC), each COA carrying a per-record Web Verification Code and QR; earlier batches were tested by BioRegen (LC-MS, shared security key). Oasis states a 99% purity standard and describes its testing as exceeding GMP requirements — the certificates are third-party analytical reports and do not carry a GMP or accreditation mark. A public COA Library and COA Process page are on the site, and each vial has a QR code for point-of-use COA access."
 />
 <FAQItem
 q="How does Oasis Labs store and ship their peptides?"
 a="Oasis Labs stores all peptides in medical-grade conditions at -20°C. Orders are shipped with cold-shield packaging to maintain potency during transit, processed same-day for orders placed before 12 PM PST Monday through Friday, and delivered via FedEx 2Day. Free shipping is available on orders of $150 or more."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
