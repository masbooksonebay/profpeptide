import Link from "next/link";
import type { ComponentProps } from "react";

// The trailing "go to this page" link — the `Label &rarr;` shape that appeared 361 times across 83
// files with no component owning it.
//
// WHY THE PROPS ARE PASS-THROUGH: the 361 call sites carried eight different classNames (the bulk on
// `text-[#3A759F] hover:underline`, but also font-medium, text-xs, whitespace-nowrap, grid
// placement...). Baking one in would silently restyle ~55 links, so every prop is forwarded to Link
// untouched and only the GLYPH is owned here. That is the actual defect being fixed: the glyph had
// no single home, which is how ~490 hand-written arrows and six back-label variants accumulated.
// Anyone changing how a navigation arrow looks now changes it once, here.
//
// CHILDREN, NOT A LABEL PROP: many call sites interpolate — `See all {activeVendorCount} verified
// vendors`, `Read the {c.name} research profile`. Taking children lets the migration move the body
// across verbatim instead of trying to flatten JSX into a string, which is the step that would have
// risked corrupting content.
//
// GLYPH: a trailing chevron, matching BackLink and the site's existing hand-drawn disclosure
// chevrons (`M19 9l-7 7-7-7` in Header/ProfileTOC/the homepage scroll cue) rather than introducing a
// second glyph source. This path is that chevron rotated to point right.
//
// 🔴 EXTERNAL LINKS KEEP THE ARROW — do not "fix" them to chevrons. The distinction is deliberate
// and load-bearing on a research site:
//     chevron  = internal navigation (go deeper into Prof. Peptide)
//     arrow →  = this link LEAVES THE SITE for a source
// The ~115 study citations in profile References blocks (`<a href={s.url} target="_blank">{s.title}
// &rarr;</a>`) are the arrow case. They were consciously excluded from the sweep that created this
// component, not missed by it. A future pass that unifies every directional glyph would erase the
// one signal telling a reader they are about to leave for a primary source.
//
// 🔴 NOT FOR PROSE. A `→` inside body text on this site means "converts to" or "escalates to" — dose
// ladders like 2.5→5→7.5 mg, conversions like citrulline→arginine. Those are content, not
// navigation, and must never be routed through this component.
export default function NavLink({
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  return (
    <Link {...rest}>
      {children}{" "}
      {/* inline-block keeps the chevron on the same line as the last word and lets it inherit the
          link's colour; aria-hidden because the link text already carries the destination. */}
      <svg
        className="w-3.5 h-3.5 inline-block align-[-0.125em] shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
