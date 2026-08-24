"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, codeAutoApplies, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";

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

export default function ImprovedPeptidesCouponPage() {
  const v = vendors["improved-peptides"];
  const rows = vendorProductRows("improved-peptides");
  const discountPct = vendorDiscountPct("improved-peptides");
  const autoApply = codeAutoApplies("improved-peptides");
  const shopUrl = makeShopUrlFor("improved-peptides");
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="improved-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Improved Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="improved-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Improved Peptides (improvedpeptides.com, operated by The Improved Company LLC) is a US-based research-peptide supplier that states it launched in 2026 and has shipped 1,300+ orders. Its catalog is single-vial lyophilized peptides, with a standing &ldquo;buy two, get one free&rdquo; promotion (which does not combine with a discount code). Payment is by Visa, Mastercard, PayPal, Venmo, and Zelle. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <Cat label="Metabolic &amp; GLP"><P slug="semaglutide">GLP-1S (Semaglutide)</P>, GLP-2T and GLP-3R (coded GLP compounds), <P slug="mots-c">MOTS-C</P>, <P slug="5-amino-1mq">5-Amino-1MQ</P></Cat>
            <Cat label="Recovery &amp; Tissue Repair"><P slug="bpc-157">BPC-157</P>, <P slug="tb-500">TB-500</P>, <P slug="kpv">KPV</P>, and a Wolverine (BPC-157 + TB-500) blend</Cat>
            <Cat label="Growth Hormone"><P slug="cjc-1295">CJC-1295</P>/<P slug="ipamorelin">Ipamorelin</P>, <P slug="tesamorelin">Tesamorelin</P></Cat>
            <Cat label="Cognitive &amp; Nootropic"><P slug="selank">Selank</P>, <P slug="semax">Semax</P></Cat>
            <Cat label="Skin &amp; Pigmentation"><P slug="ghk-cu">GHK-Cu</P>, <P slug="melanotan-i">MT-1</P>, <P slug="melanotan-ii">MT-2</P>, <P slug="pt-141">PT-141</P>, plus GLOW and KLOW blends</Cat>
            <Cat label="Sleep &amp; Recovery"><P slug="dsip">DSIP</P></Cat>
            <Cat label="Longevity"><P slug="epitalon">Epithalon</P>, <P slug="nad-plus">NAD+</P></Cat>
</dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Improved Peptides publishes a public COA Library, and each product page links its own Certificate of Analysis &mdash; a genuinely public, per-product library that most vendors don&rsquo;t offer. Of its 24 catalog items, 10 currently have a published COA; the rest are marked &ldquo;in verification,&rdquo; available on request. The certificates we reviewed were split across two independent US labs: Freedom Diagnostics (signed by principal chemist Alex Johnson, each report carrying a search code verifiable at FreedomDiagnosticsTesting.com) and Krause Analytical of Austin, TX (signed by laboratory director Mark C. Krause). Each report confirms identity by LC-MS and purity by RP-HPLC-UV &mdash; 99.02&ndash;99.9% across the certificates reviewed &mdash; plus net peptide content, and each carries a product-specific lot (e.g. IP-BPC-2026-001, an April 2026 batch). Improved&rsquo;s coded GLP names map to known compounds &mdash; its &ldquo;GLP-1S&rdquo; certificate is issued for Semaglutide. Improved additionally states that it runs endotoxin (under 0.25 EU/mg), microbial and sterility testing to USP standards, and fills in an ISO 7 cleanroom; those panels are not printed on the certificates we reviewed, so they are reported here as the vendor states them, not as independently verified. No lab accreditation is printed on the certificates.
          </p>
        </div>

        {/* Catalog — code card, then the product grid (one row per compound+size). */}
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Improved Peptides catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Improved Peptides&apos; list price; the bold figure is{" "}
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
              q="What compounds does Improved Peptides carry?"
              a="Improved Peptides carries about 24 single-vial lyophilized research compounds spanning recovery (BPC-157, TB-500, KPV, a Wolverine blend), metabolic/GLP (GLP-1S which its COA identifies as Semaglutide, plus coded GLP-2T and GLP-3R, MOTS-C, 5-Amino-1MQ), growth-hormone secretagogues (CJC-1295/Ipamorelin, Tesamorelin), skin and pigmentation (GHK-Cu, MT-1, MT-2, PT-141, GLOW and KLOW blends), cognitive and sleep (Selank, Semax, DSIP), and longevity (Epithalon, NAD+)."
            />
            <FAQItem
              q="Does Improved Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Improved Peptides order. This code is verified and maintained by Prof. Peptide. Improved also runs an automatic 'buy two, get one free' bundle, but bundle pricing does not combine with a discount code — the 15% code applies to standard (non-bundle) pricing.`}
            />
            <FAQItem
              q="How do I use the Improved Peptides discount code?"
              a="Add your items to cart at improvedpeptides.com, go to checkout, and enter PROFPEPTIDE in the code field. A 15% discount applies to your order total (the code is accepted in uppercase). It applies to standard pricing rather than the buy-two-get-one-free bundle."
            />
            <FAQItem
              q="How does Improved Peptides test its peptides?"
              a="It publishes a public COA Library and links a Certificate of Analysis on each product page (10 of 24 items currently have one; the rest are 'in verification,' by request). The certificates come from two independent US labs — Freedom Diagnostics (signed by chemist Alex Johnson, with a search code verifiable at FreedomDiagnosticsTesting.com) and Krause Analytical in Austin, TX (signed by director Mark C. Krause). Each confirms identity by LC-MS and purity by RP-HPLC-UV (99.02–99.9% across the certificates reviewed) plus net content, with a product-specific lot. Improved additionally states it runs endotoxin, microbial/sterility, and ISO 7 cleanroom controls; those are not printed on the certificates we reviewed, so they reflect the vendor's stated process, not independently verified testing."
            />
            <FAQItem
              q="What is GLP-1S?"
              a="GLP-1S is Improved Peptides' coded name for Semaglutide — confirmed on its Krause Analytical certificate, which lists the compound as Semaglutide (CAS 910463-68-2). GLP-2T and GLP-3R are additional coded GLP-class compounds; their specific identities are not established here."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
