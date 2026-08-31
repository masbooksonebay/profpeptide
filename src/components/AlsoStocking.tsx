import Link from "next/link";
import NavLink from "@/components/NavLink";
import { vendors } from "@/data/vendors";
import { alsoStockingVendors, compoundVendorCount, blendVendorCount, isBlendSlug } from "@/data/prices";
import { peptideCategories } from "@/data/peptideCategories";

// Display name from the /peptides taxonomy — the same table the library page and the FAQ picker
// labels read, so the compound is never named two different ways on one site.
const NAME_BY_SLUG: Record<string, string> = {};
for (const c of peptideCategories) for (const p of c.peptides) NAME_BY_SLUG[p.slug] = p.name;

// The "Also stocking {compound}" foot block.
//
// WHY IT EXISTS: the priority card block near the top of a profile is capped at four slots, so on
// a well-stocked compound a dozen vendors with real price rows get no profile link at all. Those
// are the under-distributed vendors the placement audit identified — wide catalogs, thin internal
// link profiles — and this is where they earn one.
//
// 🔴 WHAT MAKES IT EARN CREDIT rather than read as boilerplate: it is derived from verified stock,
// so it lists different vendors on different profiles and is ABSENT entirely where fewer than
// three remain. A block that appeared identically on all 64 profiles would be the exact pattern
// Google discounts.
//
// GLYPH: the trailing price link uses NavLink (chevron), not a hand-typed "→". The brief specified
// an arrow, but the site's settled rule is chevron = internal navigation, arrow = this link LEAVES
// for a source — and honouring the arrow literally would have broken that rule on 20+ profiles at
// once. Same reasoning the BackLink/NavLink extraction was built on.
//
// 🔒 LINK BUDGET. Each vendor name is ONE link, to its coupon page — no second anchor, no
// per-vendor price link. The single trailing line is the only price-page link, and its anchor
// text varies by compound and vendor count rather than repeating one phrase site-wide.
export default function AlsoStocking({ compoundSlug }: { compoundSlug: string }) {
  const compoundName = NAME_BY_SLUG[compoundSlug] ?? compoundSlug;
  const also = alsoStockingVendors(compoundSlug);
  if (also.length === 0) return null;
  const total = isBlendSlug(compoundSlug)
    ? blendVendorCount(compoundSlug)
    : compoundVendorCount(compoundSlug);

  return (
    <div className="mt-8 pt-6 border-t border-[#D9DEE4] dark:border-slate-700">
      <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">
        Also stocking {compoundName}
      </h2>
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
        {also.map((slug, i) => (
          <span key={slug}>
            {i > 0 && ", "}
            <Link href={`/coupons/${slug}`} className="text-[#3A759F] hover:underline">
              {vendors[slug]?.name ?? slug}
            </Link>
          </span>
        ))}
        {" — each carries a current price row for this compound."}
      </p>
      {total >= 3 && (
        <p className="text-sm mt-2">
          <NavLink href={`/prices/${compoundSlug}`} className="text-[#3A759F] hover:underline font-medium">
            Compare all {total} vendors stocking {compoundName}
          </NavLink>
        </p>
      )}
    </div>
  );
}
