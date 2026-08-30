"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function BioCollexCouponPage() {
  // woo vendor with path-form vendorSlug; makeShopUrlFor (no per-page builder) composes the
  // deep link via the universal composer. Attribution-only URL → code entered at checkout.
  const v = vendors["biocollex"];
  const rows = vendorProductRows("biocollex");
  const discountPct = vendorDiscountPct("biocollex");
  const autoApply = codeAutoApplies("biocollex");
  const shopUrl = makeShopUrlFor("biocollex");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="biocollex" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">BioCollex Discount Code: {v.code} &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="biocollex" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioCollex (biocollexresearch.com) is a U.S.-based peptide supplier headquartered in Oakland, Maryland, focused on providing research-grade compounds for laboratory use. All products are independently tested to a 99% purity standard by Freedom Diagnostics (FreedomDiagnosticsTesting.com), and BioCollex states they are synthesized by a C-GMP certified manufacturer. Every batch ships with a batch-matched Certificate of Analysis &mdash; reporting purity by HPLC-UV, identity by LC-MS, and net peptide content, with a per-lot accession and search code searchable at FreedomDiagnosticsTesting.com &mdash; for full traceability and reproducibility.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            BioCollex is known for fast fulfillment &mdash; all orders placed before 3 PM EST ship same day, with delivery in 2&ndash;3 business days. Free shipping is available on U.S. orders over $200. The company emphasizes competitive pricing and responsive 24/7 customer support.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
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
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/ss-31" className="text-[#3A759F] hover:underline">SS-31</Link>
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
            The BioCollex catalog includes a strong selection of research compounds including Retatrutide, Tirzepatide, <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, GHK-Cu, NAD+, Semax, Selank, PT-141, Tesamorelin, <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, and more. Pre-formulated blends such as the Wolverine Stack (BPC-157 + TB-500) are also available.
          </p>
          </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">BioCollex catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are BioCollex&apos;s list price; the bold figure is{" "}
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
 q="What peptides does BioCollex carry?"
 a="The BioCollex catalog includes a strong selection of research compounds including Retatrutide, Tirzepatide, BPC-157, TB-500, GHK-Cu, NAD+, Semax, Selank, PT-141, Tesamorelin, CJC-1295, Ipamorelin, and more. Pre-formulated blends such as the Wolverine Stack (BPC-157 + TB-500) are also available."
 />
            <FAQItem
              q="Does BioCollex have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any BioCollex order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the BioCollex coupon code?"
              a={`Add your items to cart at biocollexresearch.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is BioCollex third-party tested?"
              a="Yes — by Freedom Diagnostics, an independent US lab. Every batch ships with a batch-matched Certificate of Analysis reporting purity by HPLC-UV (≥99%), identity by LC-MS, and net peptide content, each carrying a per-lot search code searchable at FreedomDiagnosticsTesting.com."
            />
            <FAQItem
              q="How fast does BioCollex ship?"
              a="All orders placed before 3 PM EST ship same day. Standard delivery takes 2-3 business days. Free shipping is available on U.S. orders over $200."
            />
            <FAQItem
              q="Where is BioCollex located?"
              a="BioCollex is headquartered in Oakland, Maryland, USA. BioCollex states its products are synthesized by a C-GMP certified manufacturer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
