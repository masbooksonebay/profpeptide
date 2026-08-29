// IG carousel — the Lilly retatrutide lawsuits article.
// Data only. Render with:  npx tsx scripts/ig-carousel.tsx 2026-08-29-lilly-lawsuits
//
// Source article: /news/lilly-retatrutide-lawsuits-ruo-sellers-2026. Every line below is
// drawn from it — nothing here asserts anything the article doesn't. In particular the
// allegation framing is not decoration: it gets its own slide, because a carousel is
// read without the article attached to it.
import type { Carousel } from "../ig-carousel";

const carousel: Carousel = {
  date: "2026-08-29",
  name: "lilly-lawsuits",
  slides: [
    // 1 — cover (dark field). Has to work as a grid thumbnail, so the whole hook is the
    // headline: two short sentences, the surprising one in accent. No body copy at all.
    {
      dark: true,
      headline: [{ text: "Lilly sued six retatrutide sellers." }, { text: "No patent claims.", accent: true }],
      headlineSize: 92,
      accentBar: true,
      subhead: "And nothing under federal drug law either.",
    },
    // 2 — the facts, and only the facts
    {
      label: "WHAT HAPPENED",
      headline: [{ text: "Six federal suits," }, { text: "one day", accent: true }],
      headlineSize: 64,
      body: [
        "August 12, 2026 — Eli Lilly filed six lawsuits over sales of retatrutide.",
        "Four research-use-only peptide sellers, one med spa, one compounding pharmacy.",
        "Lilly seeks an injunction, disgorgement of profits, and attorneys’ fees.",
      ],
    },
    // 3 — the architecture: the actual story
    {
      label: "THE ARCHITECTURE",
      headline: [{ text: "State law," }, { text: "not federal", accent: true }],
      headlineSize: 64,
      body: [
        "The complaints plead no patent counts and no drug-law counts.",
        "Instead: unfair-competition and consumer-protection statutes from eight states — plus one Lanham Act count, against the med spa only.",
        "The reason is structural. Federal drug law gives competitors no private right of action.",
      ],
    },
    // 4 — the portable doctrine, the one line worth carrying away
    {
      label: "THE DOCTRINE",
      callout: {
        title: "An “RUO” label is not a legal shield.",
        note: "Lilly’s theory looks past the label to the marketing around it.",
      },
      afterCallout:
        "Dosing charts, injection instructions, weight-loss claims, consumer-facing channels — the argument is that a disclaimer doesn’t neutralise the rest of the page.",
    },
    // 5 — what it isn’t (dark bookend, pairing with the cover). The URL is the CTA button
    // rather than the small footer line: on Instagram nothing is tappable, so it has to be
    // read and typed, which means it needs the largest treatment on the slide, not the
    // smallest. footerUrl is off so the same string isn’t printed twice.
    {
      dark: true,
      headline: [{ text: "A lawsuit is an allegation —" }, { text: "not a finding.", accent: true }],
      headlineSize: 60,
      accentBar: true,
      subhead:
        "No court has ruled. No defendant has been found liable. Every claim described is still unproven.",
      cta: "profpeptide.com/news",
      swipe: false,
    },
  ],
};

export default carousel;
