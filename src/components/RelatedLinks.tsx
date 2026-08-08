import Link from "next/link";

export interface RelatedLink {
  href: string;
  label: string;
}

// EDITORIAL SURFACES ONLY. A regulatory/news article that links to /prices,
// /coupons, or a vendor page reads as a commercial funnel and undercuts PP's
// positioning as the credible source in this vertical. This block is a strict
// allowlist: content and tool surfaces are permitted, everything else is
// rejected, and the named commercial prefixes are called out explicitly.
const ALLOWED = [/^\/peptides\/[^/]+$/, /^\/calculator(\/|$)/, /^\/news(\/|$)/, /^\/compare\/[^/]+$/];
const BLOCKED = [/^\/prices(\/|$)/, /^\/coupons(\/|$)/, /^\/best-peptide-vendors(\/|$)/, /^\/vendors?(\/|$)/];

// Throws on any non-editorial href. Because the articles that use this component
// are statically generated, a bad link fails `next build` (not just `next dev`) —
// so a commercial link can never ship. The links are hand-curated per article, so
// a hard throw is the right guardrail: catch the mistake, don't silently drop it.
function assertEditorial(href: string): void {
  const isBlocked = BLOCKED.some((re) => re.test(href));
  const isAllowed = ALLOWED.some((re) => re.test(href));
  if (isBlocked || !isAllowed) {
    throw new Error(
      `RelatedLinks: "${href}" is not an editorial surface. ` +
        `Allowed: /peptides/<slug>, /calculator, /news/*, /compare/<slug>. ` +
        `Blocked: /prices, /coupons, /best-peptide-vendors, vendor pages. ` +
        `This block must never link commercial pages.`,
    );
  }
}

// A curated "Related" block for the foot of an article — for the reader who
// finishes, where inline links serve the reader who stops mid-read. Keep it to
// three or four links chosen by what the article was actually about; do not echo
// every peptide mentioned. See RELATED_LINKS spec in the news pages.
export default function RelatedLinks({ items }: { items: RelatedLink[] }) {
  items.forEach((i) => assertEditorial(i.href));
  if (items.length === 0) return null;
  return (
    <nav aria-label="Related" className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-800">
      <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-3">Related</h2>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-sm text-[#3A759F] hover:underline">
              {i.label} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
