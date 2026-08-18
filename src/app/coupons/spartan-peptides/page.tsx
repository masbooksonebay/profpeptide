"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { vendors } from "@/data/vendors";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

const v = vendors["spartan-peptides"];


export default function SpartanPeptidesCouponPage() {
 // gatsby_pagedata vendor with path-form vendorSlug (products/<slug>/); makeShopUrlFor composes the
 // deep link via vendorDeepLink — query-param-on-root affiliate → /products/<slug>/?a_aid=...&a_bid=...
 const rows = vendorProductRows("spartan-peptides");
 const discountPct = vendorDiscountPct("spartan-peptides");
 const autoApply = codeAutoApplies("spartan-peptides");
 const shopUrl = makeShopUrlFor("spartan-peptides");
 return (
 <div className="section max-w-3xl">
 <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
 &larr; Back to Discount Codes
 </Link>
      <CouponBreadcrumb slug="spartan-peptides" />

 <div className="flex flex-wrap items-center gap-3 mb-1">
 <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Spartan Peptides Discount Code &mdash; Save {discountPct}%</h1>
 </div>
 <CouponFacts slug="spartan-peptides" />
 <CouponCodeCard slug="spartan-peptides" className="mb-8" />

 <div className="space-y-8">
 <div>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
 Spartan Peptides is a US-based research-peptide supplier offering a focused catalog of compounds at &ge;98% HPLC-verified purity, with same-day domestic dispatch. Their range spans metabolic and GLP compounds, tissue-repair and growth-hormone peptides, cognitive and longevity research compounds, and pre-built stacks.
 </p>
 <dl className="space-y-2 mb-4">
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link> (<Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link> + <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>), <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>
 </dd>
 </div>
 <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
 <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
 <dd className="text-gray-600 dark:text-slate-300">
 <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
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
 Every Spartan Peptides batch is verified to a &ge;98% purity standard by HPLC (with mass spectrometry confirming molecular identity), and the original lab reports are published for each compound in a public COA library. The reports we reviewed were issued by MZ Biolabs, an independent analytical laboratory at 2102 N Country Club Rd, Tucson, AZ, and signed by analytical chemist Ken Pendarvis &mdash; observed purity ran 99.4&ndash;99.97% across the compounds checked. No accreditation is printed on the certificates. A Certificate of Analysis lets researchers confirm identity and purity before use.
 </p>
 <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
 Compounds are manufactured and shipped domestically from within the United States, with same-day dispatch on US orders placed before 2 PM Pacific and discreet packaging.
 </p>
 </div>

 {/* Catalog — code card, then the product grid (one row per compound+size). */}
 <div>
 <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Spartan Peptides catalog &amp; prices</h2>

 <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

 <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
 Struck-through prices are Spartan Peptides&apos; list price; the bold figure is{" "}
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
 q="What peptides does Spartan Peptides carry?"
 a="Spartan Peptides carries research compounds across eight categories. Anti-aging and cellular health compounds include GHK-Cu, Epitalon, NAD+, and MOTS-c. Recovery and repair peptides include BPC-157 and TB-500. Their weight loss catalog features GLP-3 (Retatrutide). Muscle development compounds include IGF-1 LR3. Additional categories cover sexual health (PT-141), mood and sleep, focus and clarity, and immunity compounds."
 />
 <FAQItem
 q="Does Spartan Peptides have a discount code?"
 a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Spartan Peptides order. This code is verified and maintained by Prof. Peptide.`}
 />
 <FAQItem
 q="How do I use the Spartan Peptides discount code?"
 a={`Add your items to cart at spartanpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
 />
 <FAQItem
 q="What testing methods does Spartan Peptides use?"
 a="Spartan Peptides conducts HPLC analysis to verify purity (minimum ≥98% required for batch release) and mass spectrometry to confirm molecular identity. This dual-method approach confirms both purity and compound identity — HPLC alone cannot verify that a compound is what it claims to be. The lab reports are issued by MZ Biolabs, an independent analytical laboratory in Tucson, AZ; no accreditation is printed on the certificates."
 />
 <FAQItem
 q="What is the minimum purity standard at Spartan Peptides?"
 a="Spartan Peptides requires a minimum of ≥98% purity via HPLC analysis before any batch is approved for sale. Batches that fail to meet this threshold are not released to customers."
 />
 <FAQItem
 q="Does Spartan Peptides provide Certificates of Analysis?"
 a="Yes. Every compound has a Certificate of Analysis detailing purity percentage, molecular weight confirmation, and the testing methodology used — published in Spartan Peptides' public COA library rather than only on request."
 />
 </div>
 </div>

 </div>
 </div>
 );
}
