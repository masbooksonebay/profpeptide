// AI-chat retrieval corpus — DERIVED, not hand-maintained.
//
// Pages live in chat-corpus.generated.ts, rebuilt from the site's own page.tsx source files and
// src/data/faqQuestions.ts by scripts/gen-chat-corpus.mjs and guarded by scripts/check-chat-corpus.mjs.
// This file only owns the TYPES. To change what's retrievable, edit the actual page content and
// regenerate — never edit the generated array by hand, and never add prose here that doesn't
// already live on a real page (no second editorial layer to maintain).
//
// NEWS pages additionally carry `date`/`dateIso` (see below) — the corpus's only recency signal.
//
// EXCLUSION RULE: discount codes, prices, and stock status are stripped at generation time and
// replaced with a "[[REDACTED]]" token (see gen-chat-corpus.mjs). A retriever must never treat
// that token as real content, and a chat feature must supply codes/prices from vendors.ts / the
// price grid at request time — never from this corpus.
export interface ChatCorpusSection {
  heading: string;
  text: string;
}

export interface ChatCorpusFaq {
  q: string;
  a: string;
}

export type ChatCorpusCategory = "peptide" | "supplement" | "guide" | "comparison" | "vendor" | "faq" | "news" | "lab";

export interface ChatCorpusPage {
  url: string;
  title: string;
  category: ChatCorpusCategory;
  /** Structured body content (profile sections, guide sections, comparison rows, page prose). */
  sections: ChatCorpusSection[];
  /** The page's FAQ accordion, kept explicitly separate and provably preserved — see the
   *  lowercase-code-guard-style blind spot this closes: FAQ content that hides from sweeps
   *  reading only main-page prose. */
  faqs: ChatCorpusFaq[];
  /** Compact citation text derived from a profile's `studies` array, if present. */
  studies: string;
  /** sections + faqs + studies, concatenated — the whole-page injection unit for retrieval. */
  fullText: string;
  tokenEstimate: number;
  /** Count of code/price/stock substitutions made on this page. */
  redactions: number;
  /** Publication date, NEWS ONLY (absent on every other category).
   *
   *  A first-class field rather than body prose because news is the one content type where recency
   *  changes what an answer MEANS. "The FDA has proposed to exclude…" was true when it was written
   *  and may be false later; a retrieved paragraph with no date attached invites the model to
   *  present a dated regulatory posture as the current one. Sourced from src/data/news.ts — the
   *  same registry the /news index and the homepage read, so it cannot drift from what the site
   *  displays. Human form ("August 17, 2026") is what the page shows; `dateIso` is the sortable
   *  counterpart for anything that needs ordering or comparison. */
  date?: string;
  /** ISO-8601 (YYYY-MM-DD) form of `date`, news only. */
  dateIso?: string;
}

export { generatedChatCorpus } from "./chat-corpus.generated";
