import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { backLinkParam } from "@/data/back-link-sources";
import { CopyCode } from "@/components/CopyCode";
import { vendors as vendorRegistry } from "@/data/vendors";
import { FEATURED_VENDORS_REVIEWED_DATE, FEATURED_VENDORS_REVIEWED_DATE_ISO } from "@/data/reviewed-dates";
import NavLink from "@/components/NavLink";

export const metadata = {
  alternates: { canonical: "/best-peptide-vendors" },
  title: "Featured Vendors — Vetted Research Suppliers | Prof. Peptide",
  description:
    "Alphabetical list of the peptide vendors we've vetted for third-party testing, published COAs, purity standards, shipping reliability, and community reputation. Not a ranking.",
  openGraph: {
    title: "Featured Vendors — Vetted Research Suppliers",
    description:
      "Alphabetical list of vetted peptide research suppliers — third-party tested, COA-backed, and reviewed by Prof. Peptide.",
    url: "https://profpeptide.com/best-peptide-vendors",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["https://profpeptide.com/og-image.png"],
  },
};

interface HubVendor {
  name: string;
  slug: string;
  url: string;
  code: string; // DERIVED from src/data/vendors.ts at build — never hand-set here
  discount: string;
  description: string;
  strengths: string[];
}

// CURATION STANDARD — this Featured Vendors list is a hand-curated subset, NOT
// the full registry. A vendor is only featured here once we've verified it
// properly attributes sales (affiliate tracking confirmed working end-to-end).
// Newly approved / unverified vendors stay OFF this list until then, even while
// they appear on /coupons and /vendors (which list the whole registry).
//   - Alpha Peptides: newly approved, attribution not yet verified — intentionally
//     excluded here (still present on /coupons, /vendors, /coupons/alpha-peptides).
//   - Nura Peptide: added Aug 2026 once attribution was confirmed, REMOVED 2026-09-01 — it is
//     not converting. Same call that emptied its 20 profile pins (data/vendor-priority.ts).
//     It keeps its coupon page, registry entry and price rows; only the editorial placements go.
//     No renumbering needed: this list is sorted by display name at render and carries no
//     ordinal, so a removal closes cleanly.
//   - Ascension Peptides + Swiss Chems: removed from this featured subset Aug 2026.
//     (Ascension remains PROVEN in attribution.ts and still surfaces on profiles;
//     Swiss Chems is CUT — see attribution.ts — so it was already off every profile.)
//   - EZ Peptides, Oasis Labs: removed from this featured subset Aug 2026. Both remain PROVEN in
//     attribution.ts, so they still surface on /coupons, /vendors, and every profile block
//     (price-row derivation) — this removal is the /best-peptide-vendors page only. Capstone
//     Peptides added the same day (registry entry + public Accumark COA library).
//   - Glacier Aminos: removed Aug 2026 (see above), RE-ADDED 2026-09-05 along with Crush Research
//     (new). Both summaries are sourced from their own /coupons/<slug> pages, not re-derived from
//     the vendor sites. Peptide Partners' summary was also rewritten the same day — it was thin
//     next to the others — pulling in its two-lab-in-parallel testing detail from the same source.
// Curated copy for the featured subset. Every field EXCEPT `code` and `discount` is
// hand-set for this page; `code` and the discount RATE are omitted on purpose and
// pulled from the registry below, so a code change (e.g. Glacier PROF10→PROFPEPTIDE) or
// a rate change (e.g. Amino Club 20→35% boost, Aug 2026) can never go stale here again —
// a hardcoded rate is invisible to every registry-level check. The one place a rate also
// appears — the "N% off with code" strength chip — is written as the RATE_CHIP sentinel
// and filled from vendors.ts in the map; a card with no rate chip (Peptide Partners) has
// no sentinel and is left exactly as-is. Only the RATE derives; all other copy is hand-set.
const RATE_CHIP = "{RATE}";
const featured: Omit<HubVendor, "code" | "discount">[] = [
  {
    name: "Amino Club",
    slug: "amino-club",
    url: "https://aminoclub.com?utm_source=affiliate_marketing&code=PROFPEPTIDE",
    description:
      "US-based supplier with a broad catalog of more than two dozen research compounds. Every batch is third-party tested by an ISO/IEC 17025-accredited lab to a 99%+ HPLC purity standard, with additional heavy-metal (ICP-MS), sterility, and endotoxin screening. Each product links a batch-specific Certificate of Analysis that is downloadable and independently verifiable through the issuing lab’s portal.",
    strengths: ["Third-party tested, 99%+ purity", "ISO/IEC 17025-accredited lab", "Per-batch verifiable COAs", RATE_CHIP],
  },
  {
    name: "Peptide Partners",
    slug: "peptide-partners",
    url: "https://peptide.partners/ref/48/",
    description:
      "US-based research peptide supplier that tests batches through two independent labs running in parallel — TrustPointe Analytics (Dorr, MI) and Kovera Labs — with many batches carrying certificates from both. Testing covers purity by RP-HPLC (99.7–99.99% across the certificates reviewed), identity by LC-MS, endotoxin under USP <85> (≤0.5 EU/mL), heavy metals by ICP, and rapid sterility screening. Every certificate is independently verifiable on the issuing lab’s own website, though the certificates themselves carry no laboratory accreditation mark.",
    strengths: ["Two independent labs in parallel", "RP-HPLC purity 99.7–99.99%", "Endotoxin, heavy metals & sterility tested", "Verifiable on each lab’s site"],
  },
  {
    name: "Glacier Aminos",
    slug: "glacier-aminos",
    url: "https://glacieraminos.shop/?ref=cknlhxrm",
    description:
      "US-based supplier with a fully public catalog and no account gating required to browse or buy. Glacier Aminos publishes a public, batch-searchable Certificate of Analysis library, with certificates issued over time by three independent US labs — Forever Young Pharmacy, Freedom Diagnostics, and most recently Kovera Labs, whose reports carry a per-record code verifiable directly at the lab. Testing covers HPLC purity and net peptide content, with the newest lots adding endotoxin, sterility, and heavy-metal screening. Cold-chain shipping is included on every order.",
    strengths: ["Public, batch-searchable COA library", "Three independent labs over time", "Cold-chain shipping included", RATE_CHIP],
  },
  {
    name: "Crush Research",
    slug: "crush-research",
    url: "https://crushresearch.shop/?ref=PROFPEPTIDE",
    description:
      "US-based, veteran-owned supplier built around batch- and lot-level accountability. Every batch is tested by ILS Laboratories, an ISO/IEC 17025-accredited lab, running a Full QC Panel — HPLC purity and identity, heavy metals by ICP-MS, and sterility by PCR — with HPLC conformity checked across three vials per batch rather than a single sample. Every report is independently verifiable at portal.ils-lab.com using the access code printed on it.",
    strengths: ["ILS Laboratories, ISO/IEC 17025-accredited", "Three vials tested per batch", "Verifiable at portal.ils-lab.com", RATE_CHIP],
  },
  {
    name: "Capstone Peptides",
    slug: "capstone-peptides",
    url: "https://capstonepeptides.com/",
    description:
      "US-based research-compound supplier with an openly browsable catalog and per-vial pricing (no account required). Every one of its 25 catalog compounds carries a batch certificate from Accumark Labs in a public COA library; 24 link the certificate from the product page, and the Retatrutide 30 mg lot is verifiable by its AccuVerify code. The certificate we reviewed — a 30 mg Retatrutide lot — is a core panel confirming identity, purity (99.52% against a >98.0% spec), and quantity; it does not include endotoxin, heavy-metal, or sterility testing, and Accumark prints no lab accreditation.",
    strengths: ["Public Accumark Labs COA library", "Identity + HPLC purity + quantity", "Browsable catalog & per-vial prices", RATE_CHIP],
  },
];

// Merge each featured vendor's live discount CODE and RATE in from the registry (single
// source of truth). Unknown slug ⇒ build error, so this list can never silently drift from
// vendors.ts. The discount pill (v.discount) and the RATE_CHIP strength both derive here.
// Sorted by DISPLAY NAME at render (like /vendors and the /coupons hub) so a hand-ordered
// `featured` array can't ship out of alphabetical order — a new vendor lands in place, not appended.
const vendors: HubVendor[] = featured
  .map((f) => {
    const reg = vendorRegistry[f.slug];
    if (!reg) throw new Error(`best-peptide-vendors: "${f.slug}" is not in the vendor registry`);
    const pct = reg.discount.match(/\d+/)?.[0] ?? reg.discount;
    return {
      ...f,
      code: reg.code,
      discount: reg.discount,
      strengths: f.strengths.map((s) => (s === RATE_CHIP ? `${pct}% off with code` : s)),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default function BestPeptideVendorsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Featured Peptide Vendors",
        "description": "Alphabetical list of the peptide vendors Prof. Peptide has vetted for third-party testing, COA transparency, purity standards, shipping reliability, and community reputation.",
        "datePublished": "2026-04-16",
        "dateModified": FEATURED_VENDORS_REVIEWED_DATE_ISO,
        "url": "https://profpeptide.com/best-peptide-vendors",
        "publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Featured Vendors" }])} />

      <div className="section max-w-4xl">
        {/* Editorial review stamp — DERIVED from FEATURED_VENDORS_REVIEWED_ISO (a hand-set
            human-review date, bumped when the curated list is re-vetted), not typed inline.
            The H1 no longer carries its own date — that produced two months on one screen
            (H1 "July" vs this badge "August") and put a stale "(July 2026)" in the title.
            The constant is now the single source of this page's "when," so it can't drift. */}
        <span className="tag mb-3 inline-block">Updated {FEATURED_VENDORS_REVIEWED_DATE}</span>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-4">
          Featured Peptide Vendors
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
          Below is a list of the research peptide vendors we&rsquo;ve vetted and recommend. To make our list, a vendor must provide third-party lab testing with published Certificates of Analysis, meet documented purity standards, offer transparent shipping, maintain responsive customer service, and hold a positive reputation in the research community.
        </p>

        <div className="mb-8 p-4 bg-[#3A759F]/5 border border-[#3A759F]/20 rounded-lg flex items-start gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm text-gray-700 dark:text-slate-200 font-medium mb-1">Looking for active discounts?</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              This page covers vendor quality. Current codes and promotions live on our codes page.
            </p>
          </div>
          <NavLink href="/coupons" className="text-sm font-medium text-[#3A759F] hover:underline whitespace-nowrap">See current codes</NavLink>
        </div>

        {/* Card shape matches /coupons (CouponsHubCard) and /vendors (VendorTestingCard) post-2026-09
            redesign: a header band (name + pill, bg-gray-50, border-b) over a body (px-5 py-4),
            same rounded-xl/border/shadow-sm hover:shadow-md/hover:border-accent treatment. NO search
            box, NO A–Z bar (CouponsBrowser) — this is a short, hand-curated list, not a 57-entry
            directory; those controls exist there because of the count, not because of the shape. */}
        <div className="space-y-4">
          {vendors.map((v) => (
            <div
              key={v.slug}
              className="rounded-xl overflow-hidden border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 transition-all duration-200 bg-white dark:bg-[#0f172a]"
            >
              <div className="px-5 py-3.5 bg-gray-50 dark:bg-[#1e293b] border-b border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3">
                <h2 className="font-bold text-xl leading-tight text-[#16181B] dark:text-slate-100 truncate">
                  <Link href={`/coupons/${v.slug}?from=${backLinkParam("featured-vendors")}`} className="hover:text-[#3A759F] transition-colors">
                    {v.name}
                  </Link>
                </h2>
                <span className="text-sm font-bold text-[#3A759F] bg-[#3A759F]/15 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
                  {v.discount}
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                  {v.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {v.strengths.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-600 dark:text-slate-300 border border-[#D9DEE4] dark:border-slate-600 px-2.5 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {/* Code (chip) + Shop (filled CTA, no arrow) on one row, equal height —
                      same pattern as the price-table rows. Review link is its own line below. */}
                  <div className="flex items-center justify-between gap-3">
                    <CopyCode code={v.code} />
                    <a
                      href={`/go/${v.slug}?from=featured-vendors`}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="btn-primary text-xs px-4 h-9 py-0 whitespace-nowrap"
                    >
                      Shop {v.name}
                    </a>
                  </div>
                  <NavLink
                    href={`/coupons/${v.slug}?from=${backLinkParam("featured-vendors")}`}
                    className="inline-block text-xs font-medium text-[#3A759F] hover:underline"
                  >Read full review</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">How We Vet Vendors</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Every vendor on this page is evaluated against the same criteria: third-party lab testing, published Certificates of Analysis, documented purity standards, catalog breadth, transparent shipping, responsive customer service, and reputation in the research community. Meeting all of them gets a vendor on the list &mdash; we don&rsquo;t score beyond that. We update this list regularly as the market changes.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            For a side-by-side breakdown of each vendor&rsquo;s documented testing, see our <Link href="/vendor-testing-index" className="text-[#3A759F] hover:underline">Vendor COA &amp; Testing-Transparency Index</Link>.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Looking for <Link href="/coupons" className="text-[#3A759F] hover:underline">active discount codes</Link> or our <Link href="/peptides" className="text-[#3A759F] hover:underline">peptide research library</Link>?
          </p>
        </div>

        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            All products are research compounds intended for laboratory use only.
          </p>
        </div>
      </div>
    </>
  );
}
