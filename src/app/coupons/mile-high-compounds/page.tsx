"use client";

import { useState } from "react";
import Link from "next/link";
import { CopyCode } from "@/components/CopyCode";
import { RegionPill } from "@/components/RegionPill";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

const v = vendors["mile-high-compounds"];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:bg-[#1e293b] transition-colors"
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

function Cat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
      <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">{label}</dt>
      <dd className="text-gray-600 dark:text-slate-300">{children}</dd>
    </div>
  );
}
function P({ slug, children }: { slug: string; children: React.ReactNode }) {
  return <Link href={`/peptides/${slug}`} className="text-[#3A759F] hover:underline">{children}</Link>;
}

export default function MileHighCompoundsCouponPage() {
  // woo vendor with path-form vendorSlug; makeShopUrlFor composes the deep link.
  const rows = vendorProductRows("mile-high-compounds");
  const discountPct = vendorDiscountPct("mile-high-compounds");
  const autoApply = codeAutoApplies("mile-high-compounds");
  const shopUrl = makeShopUrlFor("mile-high-compounds");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Mile High Compounds Discount Code &mdash; Save 10%</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">Verified</span>
        <RegionPill slug="mile-high-compounds" />
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Mile High Compounds is a US-based research-materials supplier with a catalog of 60+ compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator research categories, in vial and capsule formats. The company positions testing transparency as its core differentiator, with same-day shipping. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic & Weight Loss"><P slug="retatrutide">Retatrutide</P>, <P slug="tirzepatide">Tirzepatide</P>, <P slug="semaglutide">Semaglutide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="cagrilintide">Cagrilintide</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P>, <P slug="aod-9604">AOD-9604</P></Cat>
            <Cat label="Recovery & Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500</P>, <P slug="kpv-bpc-157">KPV + BPC-157</P></Cat>
            <Cat label="Performance & Energy"><P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Growth Hormone"><P slug="ipamorelin">Ipamorelin</P>, <P slug="cjc-1295-dac-ipamorelin">CJC-1295 / Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="tesamorelin-ipamorelin">Tesamorelin / Ipamorelin</P></Cat>
            <Cat label="Cognitive & Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="semax-selank">Semax / Selank</P>, <P slug="adamax">Adamax</P></Cat>
            <Cat label="Skin Health & Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health & Immunity"><P slug="kpv">KPV</P>, <P slug="ll-37">LL-37</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Sleep & Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P>, <P slug="ss-31">SS-31</P></Cat>
            <Cat label="Bioregulators"><P slug="cardiogen">Cardiogen</P>, <P slug="pinealon">Pinealon</P>, <P slug="thymogen">Thymogen</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P>, <P slug="vip">VIP</P>, <P slug="kisspeptin">Kisspeptin-10</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Mile High Compounds states that its products are produced in cGMP-certified, FDA-audited facilities and independently tested by American third-party labs, describing itself as the first to deploy &ldquo;8x&rdquo; testing. It states a 99%+ purity guarantee, provides a Certificate of Analysis with every compound, and publishes test reports on its site.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Mile High Compounds catalog &amp; prices</h2>

          <div className="border border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-gray-50 dark:bg-[#1e293b] mb-6">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">Your Discount Code</p>
            <CopyCode code={v.code} size="large" />
            <p className="text-center text-sm text-[#3A759F] font-medium mt-2 mb-4">{discountPct}% off your entire order</p>
            <a href={v.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
              Shop Mile High Compounds</a>
          </div>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Mile High Compounds&apos; list price; the bold figure is{" "}
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
            <FAQItem q="Does Mile High Compounds have a discount code?" a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any Mile High Compounds order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the Mile High Compounds discount code?" a="Add your items to cart at milehighcompounds.is, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="Is Mile High Compounds third-party tested?" a="Mile High Compounds states its products are produced in cGMP-certified, FDA-audited facilities and independently tested by American third-party labs, and that it deploys '8x' testing with a Certificate of Analysis for every compound and public test reports. Confirm the current COA for any specific compound on the vendor's site." />
            <FAQItem q="What is Mile High Compounds' purity standard?" a="Mile High Compounds states a 99%+ purity guarantee, verified through independent American third-party laboratory testing, with COAs published on its site." />
            <FAQItem q="What does Mile High Compounds carry?" a="A catalog of 60+ research compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories, in vial and capsule formats." />
          </div>
        </div>
      </div>
    </div>
  );
}
