// Entity/keyword retrieval over the build-time chat corpus (src/lib/chat-corpus.generated.ts).
//
// Per the Phase 1 architecture proposal (docs/PP_AI_CHAT_PROPOSAL.md, §2 Option C): the corpus
// has an unusually clean structure for keyword matching — one page per real-world entity
// (compound, vendor, guide topic) with short, distinctive names users type directly. This scores
// pages by token overlap against the query and returns the FULL matched page(s), not sub-chunks —
// "page-level grouping matters more than fine chunking" (Phase 1, confirmed by Phase 2's finding
// that FAQ content and dosing caveats live at the page level, not cleanly chunkable).
//
// This is deliberately NOT an embeddings/vector-search implementation — no new paid API, no
// vector DB. If real usage shows this misses too many paraphrased queries, the fix is inside this
// file only (the tool CONTRACT — query in, matched pages out — doesn't change for callers).
import { generatedChatCorpus } from "./chat-corpus.generated";
import type { ChatCorpusPage } from "./chat-corpus";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "of", "for", "and", "or", "to", "in", "on", "at",
  "what", "which", "who", "how", "do", "does", "did", "i", "me", "my", "you", "your", "it", "this",
  "that", "with", "about", "can", "could", "would", "should", "have", "has", "be", "been", "being",
]);

// Hyphens are split to spaces uniformly here — applied to query, title, slug, AND body text alike —
// so "BPC-157", "BPC 157", and a slug's "bpc-157" segment all tokenize to the same {"bpc","157"}
// and actually match each other. (An earlier version tokenized the slug with hyphens pre-split but
// left titles/queries hyphen-preserved as one token; the mismatch meant slug-match scoring never
// fired for ANY page, and "BPC-157" as a query failed to reliably surface its own profile page over
// comparison pages that merely mention it — caught by testing retrieval before shipping, not just
// unit-testing the scoring function in isolation.)
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

// Normalized (lowercase, hyphens/extra-punctuation collapsed to single spaces) comparison, used to
// detect when the query IS essentially the page's own entity name — not just a word that appears in
// it somewhere. "bpc 157" and "bpc-157" normalize equal; "bpc-157 vs ghk-cu" does not equal "bpc-157".
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

// Build a lightweight inverted index once per process (module-level, computed on first import —
// cheap: it's a token->page-index scan over an already-in-memory array, not a build step).
interface IndexedPage {
  page: ChatCorpusPage;
  titleTokens: Set<string>;
  slugTokens: Set<string>;
  bodyTokenCounts: Map<string, number>;
  normalizedSlug: string;
  /** The title's leading entity-name segment (before " — "/" | ", where every profile/vendor
   *  page's own naming convention puts the compound/vendor name), normalized for exact comparison. */
  normalizedTitleHead: string;
}

let indexed: IndexedPage[] | null = null;

function getIndex(): IndexedPage[] {
  if (indexed) return indexed;
  indexed = generatedChatCorpus.map((page) => {
    const slug = page.url.split("/").filter(Boolean).pop() ?? "";
    const bodyTokenCounts = new Map<string, number>();
    for (const t of tokenize(page.fullText)) bodyTokenCounts.set(t, (bodyTokenCounts.get(t) ?? 0) + 1);
    const titleHead = page.title.split(/\s+[—|]\s+/)[0] ?? page.title;
    return {
      page,
      titleTokens: new Set(tokenize(page.title)),
      slugTokens: new Set(tokenize(slug)),
      bodyTokenCounts,
      normalizedSlug: normalize(slug.replace(/-/g, " ")),
      normalizedTitleHead: normalize(titleHead),
    };
  });
  return indexed;
}

export interface RetrievalHit {
  page: ChatCorpusPage;
  score: number;
}

// Score = weighted token overlap, PLUS a decisive bonus when the query normalizes to essentially
// the page's own entity name (its slug, or the leading segment of its title before the " — "/" | "
// subtitle divider every profile/vendor page uses). That bonus is what separates a compound's own
// canonical page from comparison pages that merely mention it in passing — token-overlap alone
// scores those the same (both contain "bpc-157" once in the title), and on a tie a comparison page
// can out-rank the real profile purely from alphabetical corpus order. Verified against a live
// regression: "BPC-157" previously surfaced 3 /compare/* pages and never the actual profile.
const EXACT_ENTITY_BONUS = 40;

export function searchCorpus(query: string, limit = 3): RetrievalHit[] {
  const qTokens = tokenize(query);
  if (qTokens.length === 0) return [];
  const idx = getIndex();
  const scored: RetrievalHit[] = [];
  const qNormalized = normalize(query);

  for (const entry of idx) {
    let score = 0;
    for (const t of qTokens) {
      if (entry.titleTokens.has(t)) score += 8;
      if (entry.slugTokens.has(t)) score += 6;
      const bodyHits = entry.bodyTokenCounts.get(t);
      if (bodyHits) score += Math.min(bodyHits, 5); // cap so one very common word can't dominate
    }
    if (qNormalized.length > 2 && (qNormalized === entry.normalizedSlug || qNormalized === entry.normalizedTitleHead)) {
      score += EXACT_ENTITY_BONUS;
    }
    if (score > 0) scored.push({ page: entry.page, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

// The corpus token estimate is baked in at generation time (per-page `tokenEstimate`); used by the
// route to decide how many matched pages it can afford to inject for a given call.
export function estimateInjectionTokens(hits: RetrievalHit[]): number {
  return hits.reduce((sum, h) => sum + h.page.tokenEstimate, 0);
}
