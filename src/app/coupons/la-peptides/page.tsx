"use client";

import { useState } from "react";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

const v = vendors["la-peptides"];

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

export default function LAPeptidesCouponPage() {
  const rows = vendorProductRows("la-peptides");
  const discountPct = vendorDiscountPct("la-peptides");
  const autoApply = codeAutoApplies("la-peptides");
  const shopUrl = makeShopUrlFor("la-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="la-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">LA Peptides Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="la-peptides" />
      <CouponCodeCard slug="la-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            LA Peptides is a US-based research-peptide supplier with a catalog of 70+ compounds spanning metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator research categories, plus spray and capsule formats. Orders ship domestically with fast, discreet, trackable US shipping. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic & Weight Loss"><P slug="retatrutide">Retatrutide</P>, <P slug="tirzepatide">Tirzepatide</P>, <P slug="semaglutide">Semaglutide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="cagrilintide">Cagrilintide</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P>, <P slug="aod-9604">AOD-9604</P></Cat>
            <Cat label="Recovery & Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500</P></Cat>
            <Cat label="Performance & Energy"><P slug="igf-1-lr3">IGF-1 LR3</P></Cat>
            <Cat label="Growth Hormone"><P slug="ipamorelin">Ipamorelin</P>, <P slug="cjc-1295-dac-ipamorelin">CJC-1295 / Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P></Cat>
            <Cat label="Cognitive & Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="adamax">Adamax</P></Cat>
            <Cat label="Skin Health & Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health & Immunity"><P slug="kpv">KPV</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Sleep & Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P></Cat>
            <Cat label="Bioregulators"><P slug="cardiogen">Cardiogen</P>, <P slug="pinealon">Pinealon</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="vip">VIP</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            LA Peptides states that every batch undergoes third-party testing to a minimum purity of ≥99%, and that its peptides are sourced and manufactured within the United States under strict quality standards for research use.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">LA Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are LA Peptides&apos; list price; the bold figure is{" "}
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
            <FAQItem q="Does LA Peptides have a discount code?" a="Yes. Use code PROFPEPTIDE at checkout to save 10% on any LA Peptides order. This code is verified and maintained by Prof. Peptide." />
            <FAQItem q="How do I use the LA Peptides discount code?" a="Add your items to cart at lapeptides.net, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The 10% discount will be applied to your order total." />
            <FAQItem q="Is LA Peptides third-party tested?" a="Yes. LA Peptides states that every batch undergoes third-party testing to a minimum purity of ≥99%, and publishes a full batch-specific Certificate of Analysis library at lapeptides.net/product-certificates/, issued by the third-party lab Bioviridian — covering purity (RP-HPLC), identity (LC-MS), endotoxin, heavy metals, and sterility." />
            <FAQItem q="Where does LA Peptides ship from?" a="LA Peptides states its peptides are sourced and manufactured within the United States and ships domestically with fast, discreet, trackable shipping." />
            <FAQItem q="What does LA Peptides carry?" a="A catalog of 70+ research peptides across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories, in vial, spray, and capsule formats." />
          </div>
        </div>
      </div>
    </div>
  );
}
