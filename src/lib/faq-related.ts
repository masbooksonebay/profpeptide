import { faqQuestions, FAQ_CATEGORY_ORDER, faqQuestionBySlug } from "@/data/faqQuestions";
import type { FaqQuestion } from "@/data/faqQuestions";
import { peptideCategories } from "@/data/peptideCategories";

// Compound DISPLAY NAME from a compound slug, read out of the /peptides taxonomy — the same table
// the library page and the price index render from.
//
// WHY DERIVED, NOT MAPPED: the FAQ picker needs "BPC-157" where the page title says "How often is
// BPC-157 dosed?", and the dosing category will eventually carry one spoke per compound (64 of
// them). A hand-written label map of that size drifts the first time a compound is renamed, and
// this codebase has already paid for hand-kept parallel lists twice (six "Back to" variants, and
// the coupon lastmod map). Here the name has exactly one home and the FAQ borrows it.
const NAME_BY_SLUG: Record<string, string> = {};
for (const cat of peptideCategories) {
  for (const p of cat.peptides) NAME_BY_SLUG[p.slug] = p.name;
}

export function compoundDisplayName(slug: string): string {
  return NAME_BY_SLUG[slug] ?? slug;
}

// The picker label: the compound name with a trailing qualifier trimmed, so
// "CJC-1295 + Ipamorelin (GH Stack)" reads as "CJC-1295 + Ipamorelin" in a list whose heading has
// already said what the list is. The trim is guarded against collisions by pickerLabels() below —
// a parenthetical is sometimes the only thing distinguishing two entries (CJC-1295 DAC vs no-DAC),
// and silently showing one label twice would be worse than a long one.
function trimQualifier(name: string): string {
  return name.replace(/\s*\([^()]*\)\s*$/, "").trim() || name;
}

/** Picker labels for a set of compound slugs, keyed by slug. Trimmed where the trim is unambiguous
 *  within THIS set, full name where two entries would otherwise collide. */
export function pickerLabels(slugs: string[]): Record<string, string> {
  const full: Record<string, string> = {};
  const trimmed: Record<string, string> = {};
  for (const s of slugs) {
    full[s] = compoundDisplayName(s);
    trimmed[s] = trimQualifier(full[s]);
  }
  const counts: Record<string, number> = {};
  for (const s of slugs) counts[trimmed[s]] = (counts[trimmed[s]] ?? 0) + 1;
  const out: Record<string, string> = {};
  for (const s of slugs) out[s] = counts[trimmed[s]] > 1 ? full[s] : trimmed[s];
  return out;
}

export interface FaqRelatedLink {
  href: string;
  label: string;
}

// 🔒 THE RELATED RULE (Mark, 2026-08-30). Related is a STRUCTURAL relation, never a hand-picked
// sample of a list the page already renders:
//   · Category page  -> the OTHER category pages. A per-compound spoke is a CHILD of a category
//     page, not a sibling of it, and the category page already lists its children in the picker —
//     showing three of them again under "Related" was two competing lists of the same links.
//   · Compound spoke -> the SAME COMPOUND across categories (how is X dosed / how often is X dosed
//     / how much bac water for X), then its category page, then its profile. That is the reader's
//     actual next question, and it is the one relation nothing else on the page provides.
//   · General spoke  -> its hand-written `related` (the needle/bac-water and TRT clusters, which
//     are genuine sibling sets with no compound to key off).
export function faqRelatedLinks(q: FaqQuestion): FaqRelatedLink[] {
  const toLink = (x: FaqQuestion): FaqRelatedLink => ({ href: `/faq/${x.slug}`, label: x.question });

  if (q.categoryFor) {
    // FAQ_CATEGORY_ORDER drives the ordering so the list reads in the hub's own sequence.
    return FAQ_CATEGORY_ORDER.map(({ key }) => faqQuestions.find((x) => x.categoryFor === key))
      .filter((x): x is FaqQuestion => Boolean(x) && x !== q)
      .map(toLink);
  }

  if (q.whereToBuy) {
    const compound = q.whereToBuy.compoundSlug;
    const siblings = faqQuestions.filter(
      (x) => x !== q && x.whereToBuy?.compoundSlug === compound
    );
    const links = siblings.map(toLink);

    const categoryPage = faqQuestions.find((x) => x.categoryFor === q.category);
    if (categoryPage) links.push(toLink(categoryPage));

    // The profile, unless the handoff box directly above already points there — two links to the
    // same URL on one page is the redundancy this rule exists to remove.
    const profileHref = `/peptides/${compound}`;
    if (q.handoff.href !== profileHref) {
      links.push({ href: profileHref, label: `${compoundDisplayName(compound)} research profile` });
    }
    return links;
  }

  return (q.related ?? [])
    .map((slug) => faqQuestionBySlug(slug))
    .filter((x): x is FaqQuestion => Boolean(x))
    .map(toLink);
}
