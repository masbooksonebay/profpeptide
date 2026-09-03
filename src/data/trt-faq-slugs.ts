// The FAQ slugs whose category is "trt" (src/data/faqQuestions.ts). Kept as an EXPLICIT small
// list rather than derived by importing faqQuestions.ts, which is ~2,500 lines — pulling that in
// just to filter one flag would ship the entire FAQ dataset into every client bundle that needs
// this list (FooterDisclaimer renders on every page, sitewide). scripts/check-faqs-advisory.mjs
// asserts this list matches the real category:"trt" set on every build, so it cannot silently
// drift the way a hand-maintained list normally would.
export const TRT_FAQ_SLUGS = [
  "how-often-is-testosterone-cypionate-injected",
  "how-often-is-testosterone-enanthate-injected",
  "can-testosterone-be-injected-subcutaneously",
  "how-long-does-trt-take-to-work",
  "what-is-a-normal-testosterone-level",
  "how-often-is-bloodwork-done-on-trt",
  "does-trt-cause-hair-loss",
] as const;
