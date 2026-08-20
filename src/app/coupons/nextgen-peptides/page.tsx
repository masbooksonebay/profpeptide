"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

const v = vendors["nextgen-peptides"];


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

export default function NextGenPeptidesCouponPage() {
  // Product rows from the captured price data (28 rows, under the 32 cap). NextGen is a
  // woo vendor with no captured product slug, so makeShopUrlFor gets no deep-link builder
  // and every Shop link falls back to the vendor homepage (never a bare path). Its
  // affiliate URL is attribution-only (?ref=…), so the code is entered at checkout.
  const rows = vendorProductRows("nextgen-peptides");
  const discountPct = vendorDiscountPct("nextgen-peptides");
  const autoApply = codeAutoApplies("nextgen-peptides");
  const shopUrl = makeShopUrlFor("nextgen-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="nextgen-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">NextGen Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="nextgen-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            NextGen Peptides (ngpeptide.com) is a US-based research-peptide supplier that states 75,000+ orders fulfilled, offering research compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories in vial, spray, and capsule formats, with same-day US shipping. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic & Weight Loss"><P slug="retatrutide">Retatrutide</P>, <P slug="tirzepatide">Tirzepatide</P>, <P slug="cagrilintide">Cagrilintide</P>, <P slug="mots-c">MOTS-c</P>, <P slug="aod-9604">AOD-9604</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery & Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="wolverine-stack">BPC-157 + TB-500</P></Cat>
            <Cat label="Growth Hormone"><P slug="ipamorelin">Ipamorelin</P>, <P slug="cjc-1295-dac-ipamorelin">CJC-1295 / Ipamorelin</P>, <P slug="sermorelin">Sermorelin</P>, <P slug="tesamorelin">Tesamorelin</P>, <P slug="tesamorelin-ipamorelin">Tesamorelin / Ipamorelin</P></Cat>
            <Cat label="Cognitive & Nootropic"><P slug="semax">Semax</P>, <P slug="selank">Selank</P>, <P slug="adamax">Adamax</P></Cat>
            <Cat label="Skin Health & Anti-Aging"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-ii">Melanotan II</P>, <P slug="glow">GLOW</P>, <P slug="klow">KLOW</P></Cat>
            <Cat label="Gut Health & Immunity"><P slug="kpv">KPV</P>, <P slug="thymosin-alpha-1">Thymosin Alpha-1</P></Cat>
            <Cat label="Sleep & Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="nad-plus">NAD+</P>, <P slug="epitalon">Epitalon</P>, <P slug="glutathione">Glutathione</P></Cat>
            <Cat label="Bioregulators"><P slug="pinealon">Pinealon</P></Cat>
            <Cat label="Sexual Health"><P slug="pt-141">PT-141</P>, <P slug="vip">VIP</P>, <P slug="kisspeptin">Kisspeptin-10</P></Cat>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            NextGen Peptides&apos; compounds are third-party tested by ILS Laboratories (San Diego, CA; ISO/IEC 17025-accredited); the vendor notes that batches before March 2026 were tested by Freedom Diagnostics. Each ILS certificate runs a full QC panel &mdash; peptide purity and net content by HPLC, identity by HPLC retention-time matching, heavy metals (ICP-MS, USP &lt;233&gt;), sterility (PCR), endotoxin (USP &lt;85&gt;), and a fentanyl screen &mdash; and carries a QR code and access code that verify it at portal.ils-lab.com. Purity is stated at ≥99% by HPLC, and NextGen publishes a public, searchable COA Library at ngpeptide.com/coa-library/ that lists per-batch certificates by product, batch number, and test date.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">NextGen Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are NextGen Peptides&apos; list price; the bold figure is{" "}
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
            <FAQItem q="Does NextGen Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any NextGen Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the NextGen Peptides discount code?" a={`Add your items to cart at ngpeptide.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`} />
            <FAQItem q="Is NextGen Peptides third-party tested?" a="Yes — by ILS Laboratories (San Diego, CA; ISO/IEC 17025-accredited), with earlier (pre-March 2026) batches tested by Freedom Diagnostics. Each ILS COA runs peptide purity and content by HPLC, identity by HPLC retention-time matching, heavy metals (ICP-MS), sterility (PCR), endotoxin (USP <85>), and a fentanyl screen, and is individually QR-verifiable at portal.ils-lab.com. NextGen publishes a public, searchable COA Library at ngpeptide.com/coa-library/." />
            <FAQItem q="What is NextGen Peptides' purity standard?" a="NextGen Peptides states ≥99% purity verified by HPLC, with a Certificate of Analysis available for every product." />
            <FAQItem q="What does NextGen Peptides carry?" a="Research compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories, in vial, spray, and capsule formats." />
          </div>
        </div>
      </div>
    </div>
  );
}
