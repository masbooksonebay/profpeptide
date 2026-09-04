import { RevealCode } from "@/components/RevealCode";
import { REVEAL_GATE_VENDORS } from "@/data/reveal-gate-vendors";

/**
 * The Shop affordance for a /vendors card — replaces the old "View profile →" text, which
 * duplicated the card's own full-bleed overlay Link to the same destination. Branches exactly the
 * way VendorCodeChip does, one component up on the same card, for the same reason: a GATED vendor's
 * code must not be one click from leaving the site (that skips the gate), so its Shop control opens
 * the SAME reveal modal the code chip opens, rather than linking out directly. Every non-gated
 * vendor gets a plain /go/ link.
 *
 * 🔴 MUST BE RENDERED AS A DOM SIBLING of the card's full-bleed overlay Link, inside its own
 * `relative z-10` wrapper — never nested inside the overlay anchor (invalid HTML, ambiguous click
 * target). Copies VendorCodeChip's own wrapper exactly; see vendors/page.tsx.
 */
export function VendorShopButton({ slug, from }: { slug: string; from: string }) {
  if (REVEAL_GATE_VENDORS.has(slug)) {
    return (
      <RevealCode
        slug={slug}
        from={from}
        triggerClassName="btn-primary w-full text-center block"
      >
        Shop
      </RevealCode>
    );
  }
  return (
    <a
      href={`/go/${slug}?from=${from}`}
      target="_blank"
      rel="sponsored nofollow noopener"
      className="btn-primary w-full text-center block"
    >
      Shop
    </a>
  );
}
