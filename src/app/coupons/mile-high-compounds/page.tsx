"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

const v = vendors["mile-high-compounds"];


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
      <CouponBreadcrumb slug="mile-high-compounds" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Mile High Compounds Discount Code &mdash; Save 10%</h1>
      </div>
      <CouponFacts slug="mile-high-compounds" />
      <CouponCodeCard slug="mile-high-compounds" className="mb-8" />

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
            Mile High Compounds publishes a genuinely public, batch-versioned COA Library &mdash; each product lists a current Certificate of Analysis plus its previous batches. The certificates we reviewed were split across two named US labs: Chromate (most compounds; RP-HPLC with UV detection for identity, quantity, and purity &mdash; 99.1&ndash;99.7% observed &mdash; each report carrying a QR code and access code verifiable at chromate.org/verify) and Vanguard Laboratory of Olympia, WA, which is ISO/IEC 17025:2017 accredited (A2LA Certificate #6377.01.01, printed on the report) and reports chromatographic purity and quantity by HPLC-UV/VIS. Mile High describes its program as &ldquo;8x&rdquo; testing spanning endotoxins, sterility, and heavy metals; those panels are not printed on the certificates we reviewed, so they are reported as the vendor states them. Its coded GLP names decode on the certificates &mdash; MHC-2 TRZ is Tirzepatide, MHC-3 RT is Retatrutide, MHC-1 SM is Semaglutide. The facilities are described as cGMP-certified and FDA-audited (a manufacturing claim).
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Mile High Compounds catalog &amp; prices</h2>

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
            <FAQItem q="Is Mile High Compounds third-party tested?" a="Yes — it publishes a public, batch-versioned COA library. The certificates we reviewed come from two named US labs: Chromate (RP-HPLC-UV for identity, quantity, and purity; QR-verifiable at chromate.org/verify) and Vanguard Laboratory of Olympia, WA, which is ISO/IEC 17025:2017 accredited (A2LA #6377.01.01). Mile High describes its program as '8x' testing including endotoxins, sterility, and heavy metals; those panels are not printed on the certificates we reviewed, so they reflect the vendor's stated process." />
            <FAQItem q="What is Mile High Compounds' purity standard?" a="Mile High Compounds states a 99%+ purity standard; the certificates we reviewed ran 99.1–99.7% by RP-HPLC-UV, published on its site as a batch-versioned COA library from Chromate and Vanguard Laboratory." />
            <FAQItem q="What does Mile High Compounds carry?" a="A catalog of 60+ research compounds across metabolic, recovery, growth-hormone, cognitive, skin, longevity, and bioregulator categories, in vial and capsule formats." />
          </div>
        </div>
      </div>
    </div>
  );
}
