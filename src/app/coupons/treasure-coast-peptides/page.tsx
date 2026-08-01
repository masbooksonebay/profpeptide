"use client";

import { useState } from "react";
import { CopyCode } from "@/components/CopyCode";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import Link from "next/link";
import { vendors } from "@/data/vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { RegionPill } from "@/components/RegionPill";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100 pr-4">{q}</span>
        <span className="text-[#3A759F] flex-shrink-0 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-50 dark:border-slate-800 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function TreasureCoastPeptidesCouponPage() {
  // woo vendor with path-form vendorSlug; makeShopUrlFor composes the deep link via the
  // universal composer. ref-only affiliate URL → code entered at checkout.
  const v = vendors["treasure-coast-peptides"];
  const rows = vendorProductRows("treasure-coast-peptides");
  const discountPct = vendorDiscountPct("treasure-coast-peptides");
  const autoApply = codeAutoApplies("treasure-coast-peptides");
  const shopUrl = makeShopUrlFor("treasure-coast-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Treasure Coast Peptides Discount Code &mdash; Save 15%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="treasure-coast-peptides" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Treasure Coast Peptides is a Florida-based, U.S. life-science research supplier (operated by Treasure Coast Solutions). Alongside a broad research-peptide catalog, it also stocks laboratory research supplies &mdash; bacteriostatic water, vials, and everyday consumables &mdash; making it a one-stop source for a research workflow. Orders over $200 ship free within the US, and every order is backed by a satisfaction / money-back guarantee. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>, <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
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
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>, <Link href="/peptides/ghrp-6" className="text-[#3A759F] hover:underline">GHRP-6</Link>, <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Cognitive &amp; Nootropic</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link>, <Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link>, <Link href="/peptides/pinealon" className="text-[#3A759F] hover:underline">Pinealon</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin Health &amp; Anti-Aging</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-i" className="text-[#3A759F] hover:underline">Melanotan I</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>, <Link href="/peptides/vip" className="text-[#3A759F] hover:underline">VIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity &amp; Sleep</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>, <Link href="/peptides/cibinetide" className="text-[#3A759F] hover:underline">Cibinetide (ARA-290)</Link>, <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sexual &amp; Reproductive</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>, <Link href="/peptides/kisspeptin" className="text-[#3A759F] hover:underline">Kisspeptin</Link>, <Link href="/peptides/oxytocin" className="text-[#3A759F] hover:underline">Oxytocin</Link>
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Treasure Coast states that its research peptides are third-party tested for identity, purity, and concentration &mdash; the concentration check verifies the labeled potency of the material, not just its identity. Product listings carry a &ldquo;Third Party Tested&rdquo; assurance, and orders are covered by a satisfaction / money-back guarantee, easy returns, and secure ordering. Confirm the current documentation for any specific compound with the vendor before purchase.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            All products are supplied strictly for laboratory, analytical, and in-vitro research use by qualified professionals &mdash; not for human or veterinary use. Treasure Coast Solutions describes itself as a chemical supplier, not a compounding pharmacy or 503A/503B outsourcing facility.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Treasure Coast catalog &amp; prices</h2>

          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] mb-6">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
            <CopyCode code={v.code} size="large" />
            <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">{discountPct}% off your entire order</p>
            <VerifiedBadge slug="treasure-coast-peptides" />
            <a href={v.url} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary w-full text-center block">
              Shop Treasure Coast Peptides</a>
          </div>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Treasure Coast&apos;s list price; the bold figure is{" "}
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
            <FAQItem q="What peptides does Treasure Coast Peptides carry?" a="Treasure Coast carries a broad research-peptide catalog spanning metabolic compounds (Cagrilintide, MOTS-c, AOD-9604, 5-Amino-1MQ), recovery and repair peptides (BPC-157, TB-500, KPV), growth-hormone secretagogues (CJC-1295, Ipamorelin, Sermorelin, Tesamorelin, GHRP-6, IGF-1 LR3), cognitive compounds (Semax, Selank, Pinealon), skin peptides (GHK-Cu, Melanotan-1, Melanotan-2, GLOW), longevity and sleep compounds (NAD+, Epitalon, Cibinetide, DSIP), and sexual/reproductive compounds (PT-141, Kisspeptin, Oxytocin). It also stocks laboratory research supplies." />
            <FAQItem q="Does Treasure Coast Peptides have a discount code?" a={`Yes. Use code PROFPEPTIDE at checkout to save 15% on your entire Treasure Coast Peptides order. This code is verified and maintained by Prof. Peptide and valid as of ${CODES_VERIFIED_DATE}.`} />
            <FAQItem q="How do I use the Treasure Coast Peptides discount code?" a="Add your items to cart at treasurecoastpeptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 15% discount will be applied to your order total." />
            <FAQItem q="How does Treasure Coast Peptides test its peptides?" a="Treasure Coast states its research peptides are third-party tested for identity, purity, and concentration. The concentration testing verifies the labeled potency of the material. Confirm the current documentation for any specific compound with the vendor before purchase." />
            <FAQItem q="Where is Treasure Coast Peptides based and what does shipping cost?" a="Treasure Coast Peptides is a Florida-based, U.S. supplier. Orders over $200 ship free within the United States. Every order is backed by a satisfaction / money-back guarantee, easy returns, and secure ordering." />
            <FAQItem q="Does Treasure Coast Peptides sell research supplies too?" a="Yes. In addition to research peptides, Treasure Coast stocks laboratory research supplies such as bacteriostatic water, vials, and everyday consumables, so a full research workflow can be sourced in one order." />
          </div>
        </div>

      </div>
    </div>
  );
}
