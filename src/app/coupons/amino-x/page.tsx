"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";
import BackLink from "@/components/BackLink";


export default function AminoXCouponPage() {
  const v = vendors["amino-x"];
  const rows = vendorProductRows("amino-x");
  const discountPct = vendorDiscountPct("amino-x");
  const autoApply = codeAutoApplies("amino-x");
  const shopUrl = makeShopUrlFor("amino-x");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="amino-x" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Amino X Discount Code: {v.code} &mdash; Save {discountPct}%</h1>
      </div>
            <CouponCodeCard slug="amino-x" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Amino X (AMINO X LLC, aminox.net) is a US-based research-peptide vendor with a focused catalog spanning metabolic, recovery, growth-hormone, cognitive, and skin-health research &mdash; 17 listings, shown with live prices below. It offers free shipping on orders over $200, and the vendor also circulates a public AMINO15 discount code. Profile-backed compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>
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
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Every batch is third-party tested by Kovera Labs, an independent analytical laboratory. Identity and purity are confirmed by RP-HPLC and LC-MS against a published 99%+ purity standard, so each compound is characterized by both a chromatographic purity measurement and mass-spectrometry identity confirmation rather than purity alone.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Each product carries a batch-matched Certificate of Analysis &mdash; published on the product page and independently verifiable at koveralabs.com/verify using the per-record access code printed on each certificate &mdash; documenting the lot number, purity percentage, identity confirmation, and test date. That lot-level, externally verifiable documentation, paired with the 99%+ purity threshold and Kovera Labs&apos; RP-HPLC and LC-MS panel, gives researchers a traceable quality record for every order. All Amino X compounds are sold for research use only (RUO).
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Amino X catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Amino X&apos;s list price; the bold figure is{" "}
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
              q="What peptides does Amino X carry?"
              a="Amino X carries research compounds across metabolic, recovery, growth-hormone, cognitive, and skin-health categories. Profile-backed compounds include MOTS-c, Retatrutide, Tirzepatide, BPC-157, TB-500, CJC-1295, Tesamorelin, GHK-Cu, and Selank, along with the KLOW blend."
            />
            <FAQItem
              q="Does Amino X have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Amino X order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Amino X coupon code?"
              a={`Add your items to cart at aminox.net, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="What testing does Amino X do?"
              a="Every batch is third-party tested by Kovera Labs, an independent analytical laboratory. Testing covers RP-HPLC purity (99%+) and LC-MS identity confirmation, with a batch-matched Certificate of Analysis for each lot."
            />
            <FAQItem
              q="What is the minimum purity standard at Amino X?"
              a="Amino X verifies a minimum of 99%+ purity via RP-HPLC analysis through Kovera Labs, with identity confirmed by LC-MS, before a batch is offered for sale."
            />
            <FAQItem
              q="Does Amino X provide Certificates of Analysis?"
              a="Yes. Every batch has a batch-matched Certificate of Analysis, published on the product page and independently verifiable at koveralabs.com/verify using the per-record access code on each certificate, documenting purity (RP-HPLC) and identity (LC-MS) for the specific lot."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
