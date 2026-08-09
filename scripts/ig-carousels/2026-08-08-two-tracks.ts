// Weekly IG carousel — the two-tracks news article.
// Data only. Render with:  npx tsx scripts/ig-carousel.tsx 2026-08-08-two-tracks
import type { Carousel } from "../ig-carousel";

const carousel: Carousel = {
  date: "2026-08-08",
  name: "two-tracks",
  slides: [
    // 1 — cover (dark field)
    {
      dark: true,
      headline: [{ text: "Peptides are loosening. GLP-1 compounding is tightening." }],
      headlineSize: 92,
      accentBar: true,
      subhead: "Both are true. They’re two separate FDA tracks.",
    },
    // 2 — Track One
    {
      label: "TRACK ONE",
      headline: [{ text: "Peptides:" }, { text: "loosening", accent: true }],
      headlineSize: 64,
      body: [
        "April 2026 — the FDA removed twelve peptides from Category 2.",
        "July 23–24 — an advisory committee reviewed seven and recommended six for the compounding list. DSIP was rejected.",
      ],
    },
    // 3 — Track Two
    {
      label: "TRACK TWO",
      headline: [{ text: "GLP-1s:" }, { text: "tightening", accent: true }],
      headlineSize: 64,
      body: [
        "At the same time, the FDA proposed excluding semaglutide, tirzepatide and liraglutide from the 503B bulks list.",
        "The comment period closed July 30. It is still a proposal — not a final rule.",
      ],
    },
    // 4 — The catch
    {
      label: "THE CATCH",
      callout: {
        title: "Removal from Category 2 is not permission to compound.",
        note: "Those peptides were not moved into Category 1. Nothing became legal.",
      },
      afterCallout:
        "And a recommendation isn’t a rule. Formal rulemaking follows — historically twelve to twenty-four months.",
    },
    // 5 — CTA (dark bookend — pairs with the dark cover to frame the light interiors)
    {
      dark: true,
      headline: [{ text: "The full breakdown, with primary sources." }],
      headlineSize: 60,
      accentBar: true,
      subhead:
        "What each action does, what it doesn’t, and why nothing is legal to compound today that wasn’t yesterday.",
      cta: "Link in bio",
      footerUrl: true,
      swipe: false,
    },
  ],
};

export default carousel;
