"use client";

import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";
import BackLink from "@/components/BackLink";


export default function OrderMyPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("order-my-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="order-my-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Order My Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="order-my-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Order My Peptides (ordermypeptides.com, operated by New Life Health Labs LLC) is a US research-peptide supplier running a lean, GLP-forward WooCommerce catalog &mdash; the metabolic peptides plus a short bench of recovery blends and singles. Popular compounds by research area:
          </p>
          <dl className="space-y-2 mb-4">
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Metabolic &amp; GLP</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link> (listed as &ldquo;Reta GGG&rdquo;), <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Recovery &amp; Repair</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                a <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">BPC-157 + TB-500</Link> blend, <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link> (GHK-Cu + BPC-157 + TB-500), <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3 text-sm">
              <dt className="font-semibold text-[#16181B] dark:text-slate-100 sm:w-44 sm:flex-shrink-0">Skin &amp; Longevity</dt>
              <dd className="text-gray-600 dark:text-slate-300">
                <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>, <Link href="/peptides/nad-plus" className="text-[#3A759F] hover:underline">NAD+</Link>, plus bacteriostatic water
              </dd>
            </div>
          </dl>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Order My Peptides lists its triple-agonist retatrutide product under the coded name &ldquo;Reta GGG&rdquo;; the compound behind it is identified on that product&apos;s Certificate of Analysis. Tirzepatide and Semaglutide are listed under their own names.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Order My Peptides publishes a per-batch{" "}
            <a href="https://ordermypeptides.com/coas/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">Certificate of Analysis library</a>{" "}
            &mdash; each product tied to a lot code &mdash; with testing by Accumark Labs. The panel is HPLC with UV/DAD detection, reporting identity, measured quantity, and purity, alongside an HPLC chromatogram and mass-spectrum trace. The differentiator is lab-side verification: every certificate carries a QR code and sample code that resolve on the testing lab&apos;s own site (accumarklabs.com), so a certificate is authenticated on the lab&apos;s records rather than trusting a downloaded PDF. Prof.&nbsp;Peptide opened two current certificates &mdash; Semaglutide 5&nbsp;mg (lot 1045, 99.56% purity) and Tirzepatide 10&nbsp;mg (lot 1600, 99.75% purity) &mdash; both issued by Accumark Labs, both lab-verifiable, with measured content meeting or exceeding the label weight.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Shipping perks (not a discount):</span> the store advertises free shipping over $150 and same-day dispatch on orders placed over $200. These are shipping terms set by the vendor, separate from the coupon code &mdash; they do not stack onto or change the {discountPct}% discount. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem q="Does Order My Peptides have a coupon code?" a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on your Order My Peptides order. This code is verified and maintained by Prof. Peptide.`} />
            <FAQItem q="How do I use the Order My Peptides discount code?" a={`Add your items to cart at ordermypeptides.com, proceed to checkout, and enter PROFPEPTIDE in the coupon field. The ${discountPct}% discount is applied to your order total.`} />
            <FAQItem q="How is Order My Peptides tested?" a="Order My Peptides publishes a per-batch Certificate of Analysis library, with testing by Accumark Labs. Each certificate reports identity, measured quantity, and purity by HPLC with UV/DAD detection, plus a chromatogram and mass-spectrum trace, and is tied to a lot code. Each cert carries a QR and sample code that verify on the lab's own site (accumarklabs.com). Prof. Peptide opened the Semaglutide 5mg (99.56%) and Tirzepatide 10mg (99.75%) certificates — both Accumark, both lab-verifiable." />
            <FAQItem q="What is 'Reta GGG'?" a="Reta GGG is Order My Peptides' store name for retatrutide, the triple-agonist (GGG) GLP compound. The compound behind the coded name is identified on that product's Certificate of Analysis. Tirzepatide and Semaglutide are listed under their own names." />
            <FAQItem q="Does Order My Peptides offer free shipping?" a="The store advertises free shipping on orders over $150 and same-day dispatch on orders over $200. These are shipping terms set by the vendor and are separate from the PROFPEPTIDE coupon — they do not change or stack onto the discount." />
            <FAQItem q="Who operates Order My Peptides?" a="Order My Peptides (ordermypeptides.com) is operated by New Life Health Labs LLC, a US supplier. All products are sold for laboratory and research use only." />
          </div>
        </div>

      </div>
    </div>
  );
}
