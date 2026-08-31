"use client";

import FAQItem from "@/components/FAQItem";
import { CouponBreadcrumb } from "@/components/CouponBreadcrumb";
import { CouponCodeCard } from "@/components/CouponCodeCard";
import { vendorDiscountPct } from "@/data/prices";
import BackLink from "@/components/BackLink";

export default function LevelUpPeptidesCouponPage() {
  const discountPct = vendorDiscountPct("level-up-peptides");
  return (
    <div className="section max-w-3xl">
      <BackLink href="/coupons">Back to Discount Codes</BackLink>
      <CouponBreadcrumb slug="level-up-peptides" />

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Level Up Peptides Discount Code: PROFPEPTIDE &mdash; Save {discountPct}%</h1>
      </div>
      <CouponCodeCard slug="level-up-peptides" className="mb-8" />

      <div className="space-y-8">
        <div>
          {/* No compound catalog on this page BY DESIGN — the storefront is register-to-browse, so a
              list here would describe products a reader cannot reach without first making an account.
              The account requirement is stated up front instead, because it is the thing a reader
              most needs to know before clicking through. */}
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Level Up Peptides (level-up-peptides.com) is a US-based research-compound supplier. One thing is worth knowing before you click through: its storefront is register-to-browse. Every catalog page returns a &ldquo;Login Required&rdquo; screen asking you to log in or create an account, and no products or prices render until you do. Registration is free, and it gates browsing rather than purchasing alone.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            That account wall is the reason this page carries no compound list. Prof. Peptide lists a vendor&rsquo;s catalog by research area where the catalog is publicly readable; here it is not, and a list assembled anyway would describe shelves a reader cannot see for themselves.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            What earns Level Up a page is its testing record, which is the deepest of any vendor on this site. Its compounds are tested by Freedom Diagnostics. The certificate we reviewed &mdash; lot LU-LC10.A, reported August 24, 2026 &mdash; goes well past the purity-and-identity core that most research-market certificates stop at. It reports purity at 99.85% by HPLC-UV, identity by LC-MS, and measured net peptide content; then it adds three panels almost nobody else in this market runs.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            Bacterial endotoxin is tested to USP &lt;85&gt; and run in duplicate, with both determinations at or below 0.05 EU/mL. Microbial contamination is screened by PCR, which reported no detectable microbial DNA. Elemental impurities are measured by ICP-MS across arsenic, cadmium, lead and mercury. Those three panels answer what is in the vial besides the peptide &mdash; a different question from purity, and the one a purity figure alone cannot speak to.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
            The cadence behind that certificate is also real rather than a single showpiece lot: the laboratory&rsquo;s own index records 21 certificates for Level Up across seven submission dates between May 26 and August 18, 2026. Freedom Diagnostics prints no laboratory accreditation on these certificates, so none is claimed here.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Level Up Peptides is US-based. All products are sold for laboratory and research use only.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              q="Do you need an account to browse Level Up Peptides?"
              a="Yes. Level Up Peptides runs a register-to-browse storefront: every catalog page returns a “Login Required” screen asking you to log in or create an account, and no products or prices render until you do. Registration is free. This is worth knowing before clicking through, because it gates browsing rather than purchasing alone."
            />
            <FAQItem
              q="Does Level Up Peptides have a coupon code?"
              a={`Yes. Use code PROFPEPTIDE at checkout to save ${discountPct}% on any Level Up Peptides order. This code is verified and maintained by Prof. Peptide.`}
            />
            <FAQItem
              q="How do I use the Level Up Peptides discount code?"
              a={`Add your items to cart at level-up-peptides.com, proceed to checkout, and enter PROFPEPTIDE in the discount code field. The ${discountPct}% discount will be applied to your order total.`}
            />
            <FAQItem
              q="Is Level Up Peptides third-party tested?"
              a="Yes, and its panel is the deepest of any vendor on this site. Level Up's compounds are tested by Freedom Diagnostics. The certificate reviewed here — lot LU-LC10.A, reported August 24, 2026 — covers purity at 99.85% by HPLC-UV, identity by LC-MS, and measured net peptide content, and then adds three panels most research-market certificates omit: bacterial endotoxin to USP <85>, run in duplicate with both determinations at or below 0.05 EU/mL; microbial screening by PCR, reporting no detectable microbial DNA; and elemental impurities by ICP-MS across arsenic, cadmium, lead and mercury. The laboratory's index records 21 certificates for Level Up across seven submission dates between May 26 and August 18, 2026. Freedom Diagnostics prints no laboratory accreditation on these certificates, so none is claimed here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
