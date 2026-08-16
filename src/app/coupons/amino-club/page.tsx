"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { CouponFacts } from "@/components/CouponFacts";
import { VendorProductGrid, makeShopUrlFor } from "@/components/VendorProductGrid";
import { vendorProductRows, vendorDiscountPct, PRICES_UPDATED_DATE } from "@/data/prices";
import { vendors } from "@/data/vendors";


export default function AminoClubCouponPage() {
  // Product rows driven by the captured price data (one row per compound+size).
  const rows = vendorProductRows("amino-club");
  const discountPct = vendorDiscountPct("amino-club");
  const code = vendors["amino-club"].code;
  // Universal deep-link builder: vendorSlug is now the full permalink PATH
  // (us/products/<handle>), so the URL is just domain + path + affiliate query — no
  // per-vendor base baked into the template. makeShopUrlFor falls back to the vendor
  // homepage for any slugless row.
  const shopUrl = makeShopUrlFor(
    "amino-club",
    (vendorSlug) => `https://www.aminoclub.com/${vendorSlug}?utm_source=affiliate_marketing&code=${code}`,
  );
  return (
    <div className="section max-w-3xl">
      <Link href="/coupons" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Discount Codes
      </Link>
      <CouponBreadcrumb slug="amino-club" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Amino Club Discount Code: PROFPEPTIDE &mdash; Save 20%</h1>
      </div>
      <CouponFacts slug="amino-club" />
      <CouponCodeCard slug="amino-club" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Amino Club is a US-based research-peptide vendor with a broad catalog of more than two dozen research compounds spanning metabolic, recovery, growth-hormone, skin, cognitive, immunity, longevity, and sexual-health research. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; Weight Loss</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>, <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">Cagrilintide</Link>, <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-C</Link>, <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Tissue Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Performance &amp; Energy</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Growth Hormone</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>, <Link href="/peptides/gh-stack" className="text-[#3A759F] hover:underline">GH Stack</Link>, <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>
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
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/melanotan-ii" className="text-[#3A759F] hover:underline">Melanotan II</Link>, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>, <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Gut Health &amp; Immunity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>, <Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Sleep &amp; Recovery</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/dsip" className="text-[#3A759F] hover:underline">DSIP</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, <Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link>
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
            Every batch is tested by an ISO/IEC 17025-accredited third-party laboratory under a full quality-control panel, not purity alone. HPLC quantifies purity against a published 99%+ standard; identity is confirmed against a reference standard; ICP-MS screens for heavy metals (arsenic, cadmium, chromium, mercury, lead); sterility is verified by PCR; and bacterial endotoxin is measured by the USP &lt;85&gt; method. Every batch is tested before release, so each lot carries its own documented result rather than a single representative certificate.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Each product page links a batch-specific Certificate of Analysis showing the lot number, purity percentage, identity confirmation, and test date &mdash; downloadable and independently verifiable through the issuing laboratory&apos;s portal. That lot-level, externally verifiable documentation, paired with the 99%+ purity threshold and ISO/IEC 17025 accreditation, gives researchers a traceable quality record for every order.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-5">Amino Club catalog &amp; prices</h2>

          <VendorProductGrid rows={rows} discountPct={discountPct} shopUrlFor={shopUrl} />

          {/* Freshness stamp beneath the grid — a documented ranking signal on coupon queries. */}
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">
            Struck-through prices are Amino Club&apos;s list price; the bold figure is your price after the {discountPct}% code. Prices current as of {PRICES_UPDATED_DATE}.
          </p>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="What peptides does Amino Club carry?"
              a="Amino Club carries research compounds across tissue repair, dermal, metabolic, GH-secretagogue, cellular, neuro, and circadian categories. Flagship compounds include Retatrutide, Cagrilintide, BPC-157, TB-500, GHK-Cu, CJC-1295/Ipamorelin, and NAD+, along with the GLOW and KLOW blends."
            />
            <FAQItem
              q="Does Amino Club have a coupon code?"
              a="Yes. Use code PROFPEPTIDE at checkout to save 20% on any Amino Club order. This code is verified and maintained by Prof. Peptide."
            />
            <FAQItem
              q="How do I use the Amino Club discount code?"
              a="Add your items to cart at aminoclub.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The discount will be applied to your order total."
            />
            <FAQItem
              q="What testing does Amino Club do?"
              a="Every batch is third-party tested by an ISO/IEC 17025-accredited laboratory. Testing covers HPLC purity (99%+), identity confirmation, heavy-metal screening via ICP-MS, sterility, and endotoxin screening."
            />
            <FAQItem
              q="What is the minimum purity standard at Amino Club?"
              a="Amino Club verifies a minimum of 99%+ purity via HPLC analysis through an ISO/IEC 17025-accredited third-party lab before a batch is offered for sale."
            />
            <FAQItem
              q="Does Amino Club provide Certificates of Analysis?"
              a="Yes. Every batch has a verifiable batch-specific Certificate of Analysis, linked directly on each product page, documenting purity, identity, and the additional heavy-metal, sterility, and endotoxin screening."
            />
          </div>
        </div>

      </div>
    </div>
  );
}
