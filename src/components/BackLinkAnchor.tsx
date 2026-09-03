import Link from "next/link";

// The rendered anchor for a back link — markup, glyph and className extracted VERBATIM from
// BackLink so the server default and the client source-aware variant cannot drift into two
// different-looking back links. Nothing here decides WHAT to link to; that is BackLink's job.
//
// GLYPH: a leading chevron, not a full arrow. Every platform back affordance — browser chrome, iOS,
// Android — uses a chevron for "go back one level", and a full arrow reads as a distinct action.
// Drawn as inline SVG with the same hand-built approach the site's disclosure chevrons already use
// (Header dropdowns, ProfileTOC, the homepage scroll cue all carry `M19 9l-7 7-7-7`), so this is the
// established pattern rather than a new dependency. The path here is that same chevron rotated to
// point left.
//
// The className is baked in deliberately: it was byte-identical across all 143 original call sites,
// so making it a prop would only invite the divergence this component removes.
export default function BackLinkAnchor({ href, children }: { href: string; children: React.ReactNode }) {
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
