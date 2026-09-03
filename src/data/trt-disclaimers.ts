// TRT-appropriate disclaimer wording — the replacement for "Research use only. Not medical
// advice." (and the footer's "Not for human consumption.") on the 7 category:"trt" FAQ pages
// (see trt-faq-slugs.ts). RUO/not-for-human-use framing is WRONG on this content: testosterone is
// a prescription medicine taken by humans under medical supervision, not a research chemical.
//
// 🔒 REPORT, NOT PRESCRIBE (scripts/check-faqs-advisory.mjs). Neither line below is a command to
// the reader: they REPORT that this is educational content and that individual-care decisions
// belong with a licensed provider, rather than INSTRUCTING the reader to do something ("Talk to
// your doctor" is an instruction and does not appear here on purpose — see the task's own note).
// The automated guard doesn't scan this file (it isn't a FAQ answer body), but the same standard
// applies deliberately.

/** Page-body line, replaces "Research use only. Not medical advice." on TRT FAQ pages. */
export const TRT_MEDICAL_DISCLAIMER =
  "This page is educational and is not medical advice. Testosterone replacement therapy is a prescription treatment; decisions about individual care belong with a licensed healthcare provider.";

/** Footer line, replaces "For educational and research purposes only. Not medical advice. Not
 *  for human consumption." on TRT FAQ pages. Shorter, footer register; same substance. */
export const TRT_FOOTER_DISCLAIMER =
  "For educational purposes only. Not medical advice. Individual care decisions belong with a licensed healthcare provider.";
