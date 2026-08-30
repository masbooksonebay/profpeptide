import Link from "next/link";

// The "return to the listing" link at the head of a detail page.
//
// WHY THIS EXISTS: there was no owning component, so 143 pages each inlined their own
// `<Link ...>&larr; Back to X</Link>`. Identical className on all 143 — but nothing enforced that,
// and the labels had already drifted (/coupons was reached by both "Back to Discount Codes" ×54 and
// "Back to Vendor Coupons" ×1). One component makes the drift impossible rather than merely fixed.
//
// GLYPH: a leading chevron, not a full arrow. Every platform back affordance — browser chrome, iOS,
// Android — uses a chevron for "go back one level", and a full arrow reads as a distinct action.
// Drawn as inline SVG with the same hand-built approach the site's disclosure chevrons already use
// (Header dropdowns, ProfileTOC, the homepage scroll cue all carry `M19 9l-7 7-7-7`), so this is the
// established pattern rather than a new dependency. The path here is that same chevron rotated to
// point left.
//
// The className is baked in deliberately: it was byte-identical across all 143 call sites, so making
// it a prop would only invite the divergence this component removes.
export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-[#3A759F] hover:underline mb-6 inline-flex items-center gap-1"
    >
      {/* aria-hidden: the link text already says "Back to X", so announcing the chevron would be
          redundant noise for a screen reader. */}
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {children}
    </Link>
  );
}
