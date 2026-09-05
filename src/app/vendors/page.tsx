"use client";

import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { vendors as registry, regionFlag, type Vendor as RegistryVendor } from "@/data/vendors";
import { CouponsBrowser } from "@/components/CouponsBrowser";
import { VendorTestingCard, type VendorTestingVendor } from "@/components/VendorTestingCard";

/**
 * /vendors redesigned 2026-09 from a near-duplicate of /coupons (same 57 vendors, same
 * discount/code/Shop) into the TESTING directory: which lab tested which vendor, sourced from
 * facts.labs (migrated in c648ec5). Layout is /coupons' own — search box, A–Z bar, letter
 * dividers, one card per row, Professor's Picks once at top — via the SAME CouponsBrowser shell,
 * generalized to take a renderCard callback rather than forked. US/International stay merged into
 * one alphabetical run, same as /coupons (nothing downstream reads that split here either).
 */
const NO_LAB_NOTE: Record<string, string> = {
  // Aero's own site (not this page) says a public COA library is "in preparation" — true and
  // worth saying, but not a lab name and not a promise this page should imply is imminent.
  "aero-peptides": "No lab named — public COA library in preparation",
  // Finnrick is a blind-testing/ranking SERVICE, not a COA-issuing lab — do not let this read as
  // one. (Same distinction the paradigm-peptides coupon page already draws.)
  "paradigm-peptides": "No lab named — Finnrick blind-tests select products, not a certifying lab",
  "integrative-peptides": "No lab named",
};

/**
 * 1–3 labs: name them. 4+: a count ("Third-party tested by N independent laboratories") — NOT a
 * bare lab-count rule, a LENGTH one: Orbitrex's 5-name line measured at 784px in the card's 808px
 * content width (a 24px margin, not worth shipping). But limitless-biotech's 4-name line is only
 * 86 characters — comfortably shorter than Orbitrex's 116 — so a mechanical "4 or more" cutoff
 * would compress a line that actually fits. 100 chars sits in the gap between them (limitless-
 * biotech 86, Orbitrex 116) with margin on both sides.
 */
function labLineFor(slug: string, v: RegistryVendor): string {
  const labs = v.facts?.labs ?? [];
  if (labs.length === 0) return NO_LAB_NOTE[slug] ?? "No lab named";
  const full = `Third-party tested by ${labs.map((l) => l.name).join(", ")}`;
  return full.length <= 100 ? full : `Third-party tested by ${labs.length} independent laboratories`;
}

function toCard(v: RegistryVendor): VendorTestingVendor {
  return {
    slug: v.detailPage?.replace(/^\/coupons\//, "") ?? "",
    name: v.name,
    region: `${regionFlag[v.region]} ${v.region}`,
    detailPage: v.detailPage,
    labLine: labLineFor(v.detailPage?.replace(/^\/coupons\//, "") ?? "", v),
  };
}

const activeVendors = Object.values(registry).filter((v) => !v.retired);
const byName = (a: RegistryVendor, b: RegistryVendor) => a.name.localeCompare(b.name);

const picks = activeVendors.filter((v) => v.editorsPick).sort(byName).map(toCard);
const otherVendors = activeVendors.filter((v) => !v.editorsPick).sort(byName).map(toCard);

export default function VendorProfilesPage() {
  return (
    <div className="section max-w-4xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Verified Vendors" }])} />
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-8">Verified Vendors</h1>

      <div className="flex items-center justify-center gap-2.5 mb-8 py-3.5 px-4 bg-[#3A759F]/10 border border-[#3A759F]/30 rounded-lg">
        <svg className="w-5 h-5 text-[#3A759F] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-base font-bold text-[#16181B] dark:text-white tracking-tight">
          Which lab tested which vendor, from their own published certificates
        </p>
      </div>

      <CouponsBrowser
        picks={picks}
        vendors={otherVendors}
        renderCard={(v, anchorKey) => <VendorTestingCard v={v} anchorKey={anchorKey} />}
      />
    </div>
  );
}
