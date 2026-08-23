"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";


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

export default function PeptidologyCouponPage() {
  const rows = vendorProductRows("peptidology");
  const discountPct = vendorDiscountPct("peptidology");
  const autoApply = codeAutoApplies("peptidology");
  const shopUrl = makeShopUrlFor("peptidology");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="peptidology" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Peptidology Discount Code &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="peptidology" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Peptidology (peptidology.co) is a research-peptide supplier with a catalog of 70+ compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator research categories, in vial, capsule, and blend formats. It positions analytical rigor as its differentiator (see testing below). Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic & Weight Loss"><P slug="retatrutide">Retatrutide</P>, <P slug="tirzepatide">Tirzepatide</P>, <P slug="semaglutide">Semaglutide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery & Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500</P>, <P slug="kpv-bpc-157">KPV + BPC-157</P></Cat>
            <Cat label="Performance & Energy"><P slug="igf-1-lr3">IGF-1 LR3</P>, <P slug="follistatin">Follistatin</P>, <P slug="mgf">MGF</P></Cat>
            <Cat label="Growth Hormone"><P slug="ipamorelin">Ipamorelin</P>, <P slug="cjc-1295">CJC-1295</P>, <P slug="cjc-1295-dac-ipamorelin">CJC-1295 / Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="ghrp-2">GHRP-2</P></Cat>
            <Cat label="Cognitive & Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="semax-selank">Semax / Selank</P>, <P slug="adamax">Adamax</P></Cat>
            <Cat label="Skin Health & Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-i">Melanotan I</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health & Immunity"><P slug="kpv">KPV</P>, <P slug="ll-37">LL-37</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Sleep & Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P></Cat>
            <Cat label="Bioregulators"><P slug="cardiogen">Cardiogen</P>, <P slug="cortagen">Cortagen</P>, <P slug="pinealon">Pinealon</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="oxytocin">Oxytocin</P>, <P slug="vip">VIP</P>, <P slug="kisspeptin">Kisspeptin-10</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Every Peptidology batch is tested by Vanguard Laboratory (Olympia, WA; A2LA #6377.01.01, ISO/IEC 17025:2017-accredited) &mdash; identity, chromatographic purity, and assay by HPLC-UV/VIS, heavy metals by ICP-MS, endotoxins by LAL, and sterility by USP &lt;71&gt;, with recent batches adding residual solvents (GC-MS), container-closure integrity, solubility, and trifluoroacetic-acid checks &mdash; and a second lab, Eagle Analytical Services (Houston, TX), runs a ScanRDI rapid sterility test, so each certificate carries two independent sterility results. Peptidology describes this as 14-point testing and states cGMP-aligned production with up to 23 vials tested per batch; a Certificate of Analysis is issued with every order.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Peptidology catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Peptidology&apos;s list price; the bold figure is{" "}
            {autoApply ? (
              <>your price after the {discountPct}% code</>
            ) : (
              <>your price once you apply your discount code at checkout</>
            )}. Prices current as of {PRICES_UPDATED_DATE}.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Peptidology have a coupon code?" a={`Yes. Prof. Peptide maintains a verified discount code for Peptidology — use the "Reveal discount code" button to see it and copy it. It saves ${discountPct}% on any Peptidology order.`} />
            <FAQItem q="How do I use the Peptidology discount code?" a={`Reveal the code and copy it, then add your items to cart at peptidology.co, proceed to checkout, and paste it into the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="Is Peptidology third-party tested?" a="Yes. Every batch is tested by Vanguard Laboratory (A2LA #6377.01.01, ISO/IEC 17025:2017) — identity, purity, and assay by HPLC-UV/VIS, heavy metals (ICP-MS), endotoxins (LAL), and sterility (USP <71>), with recent batches adding residual solvents (GC-MS), container-closure, and solubility checks — and Eagle Analytical Services runs a ScanRDI rapid sterility test, so each certificate carries two independent sterility results." />
            <FAQItem q="What is Peptidology's testing standard?" a="Peptidology describes its program as 14-point testing and states cGMP-aligned production with up to 23 vials tested per batch. Testing runs under Vanguard Laboratory's A2LA / ISO 17025:2017 accreditation, with a second-lab ScanRDI sterility test by Eagle Analytical Services." />
            <FAQItem q="What does Peptidology carry?" a="A catalog of 70+ research compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories, in vial, capsule, and blend formats." />
          </div>
        </div>
      </div>
    </div>
  );
}
