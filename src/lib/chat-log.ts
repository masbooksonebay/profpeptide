// Per-turn analytics for the AI chat — what people ASK, which is the layer neither the Anthropic
// console (spend, tokens) nor Vercel (request counts) can show.
//
// WHAT THIS IS FOR: content gaps (a question the corpus can't answer is a page that should exist),
// failed retrievals, which guardrails actually fire, and abuse patterns. The highest-value record
// in the set is the one where retrieval returned nothing or the model said it couldn't find
// something — that is a content gap with a real user attached to it.
//
// 🔒 PRIVACY POSTURE, and why each choice is the way it is:
//   · The IP is HASHED, never stored raw. Rate limiting needs to recognise a repeat caller;
//     analytics only needs to distinguish one from another. Those are different requirements and
//     this stores the weaker one.
//   · The hash is SALTED from a server-side env var. An unsalted SHA-256 of an IPv4 address is not
//     anonymisation — the whole space is ~4 billion values, so it is brute-forceable in seconds on
//     a laptop. Without the salt configured this refuses to derive a hash at all (see hashIp) and
//     stores a constant placeholder instead, because a reversible hash would be worse than no
//     identifier: it looks anonymous while not being anonymous.
//   · The ANSWER TEXT is never stored. Retrieved slugs plus token counts describe what happened
//     without keeping a copy of what the assistant said.
//   · Nothing is kept from the user but the question itself.
//
// 🔒 RETENTION: 30 days, enforced by a KV TTL set ON WRITE. Not a cleanup job — a cleanup job is a
// thing that can silently stop running and leave data accumulating for years while a policy page
// claims otherwise. Each record expires on its own whether or not anything else works.
//
// FAILURE MODE: logging must never break a conversation. Every entry point here swallows its own
// errors and returns rather than throwing, so a KV outage costs analytics, not answers.
import { createHash } from "node:crypto";
import { kv } from "@vercel/kv";

export const LOG_RETENTION_DAYS = 30;
const LOG_TTL_SECONDS = LOG_RETENTION_DAYS * 24 * 60 * 60;

/** Newest-first list of record keys. Capped so it can't grow without bound; entries whose record
 *  has already expired simply resolve to null on read and are filtered out. Keyspace-scoped so
 *  /api/chat ("chat") and /api/chat-app ("chatapp") keep wholly separate analytics streams. */
const indexKeyFor = (keyspace: string) => `${keyspace}:log:index`;
const LOG_INDEX_MAX = 2000;

export type ChatGuardrail =
  | "dosing_prefilter"
  | "rate_limited"
  | "oversized_body"
  | "session_limit"
  | "not_configured"
  | "api_error";

export interface RetrievedRef {
  url: string;
  score: number;
}

export interface ChatLogRecord {
  /** ISO-8601 UTC. */
  ts: string;
  /** Salted SHA-256 prefix — see hashIp. Never a raw address. */
  ipHash: string;
  question: string;
  /** Every page retrieval returned across the turn's tool calls, in order. */
  retrieved: RetrievedRef[];
  /** True when the regulatory news slot added a page ranking alone had missed. */
  newsSlotFired: boolean;
  /** Which deterministic guardrail fired, if any. */
  guardrail: ChatGuardrail | null;
  /** 🔴 A search returned no pages at all. */
  zeroRetrieval: boolean;
  /** 🔴 The answer told the user the site doesn't cover this. Detected from the answer, which is
   *  then discarded — the flag is kept, the text is not. */
  notFound: boolean;
  inputTokens: number | null;
  outputTokens: number | null;
  latencyMs: number;
}

/**
 * Salted, truncated SHA-256 of the client IP.
 *
 * Returns the constant "unsalted" when CHAT_LOG_SALT is unset. That is deliberate: a bare hash of
 * an IP is trivially reversible by enumeration, so emitting one would create the appearance of
 * anonymisation without the substance. Losing the ability to distinguish callers is the correct
 * trade when the alternative is storing something that can be turned back into an address.
 */
export function hashIp(ip: string): string {
  const salt = process.env.CHAT_LOG_SALT;
  if (!salt) return "unsalted";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 16);
}

/** Phrases the assistant uses when the corpus doesn't cover something. Matching is on the ANSWER,
 *  which is not retained — only this boolean survives. Kept broad on purpose: a false positive
 *  costs one over-reported content gap, a false negative loses the signal entirely. */
const NOT_FOUND_MARKERS = [
  "doesn't have",
  "does not have",
  "couldn't find",
  "could not find",
  "couldn't retrieve",
  "could not retrieve",
  "isn't covered",
  "is not covered",
  "don't have information",
  "do not have information",
  "no matching content",
  "wasn't able to find",
  "was not able to find",
];

export function looksLikeNotFound(answer: string): boolean {
  const a = answer.toLowerCase();
  return NOT_FOUND_MARKERS.some((m) => a.includes(m));
}

/**
 * Write one turn's record. Never throws — a logging failure must cost analytics, not the answer.
 * Returns true when the write landed, so callers/tests can assert on it without depending on it.
 */
export async function logChatTurn(record: ChatLogRecord, keyspace = "chat"): Promise<boolean> {
  try {
    const indexKey = indexKeyFor(keyspace);
    const key = `${keyspace}:log:${record.ts}:${Math.random().toString(36).slice(2, 10)}`;
    // TTL on the record itself — retention cannot outlive the policy even if everything else here
    // breaks or the index is never trimmed again.
    await kv.set(key, record, { ex: LOG_TTL_SECONDS });
    await kv.lpush(indexKey, key);
    await kv.ltrim(indexKey, 0, LOG_INDEX_MAX - 1);
    await kv.expire(indexKey, LOG_TTL_SECONDS);
    return true;
  } catch {
    // Swallowed by design. See the header: a KV outage degrades analytics, never the conversation.
    return false;
  }
}

/** Most recent records, newest first. Entries whose record has expired are filtered out. */
export async function readRecentLog(limit = 200, keyspace = "chat"): Promise<ChatLogRecord[]> {
  try {
    const keys = await kv.lrange<string>(indexKeyFor(keyspace), 0, Math.max(0, limit - 1));
    if (!keys || keys.length === 0) return [];
    const records = await Promise.all(keys.map((k) => kv.get<ChatLogRecord>(k).catch(() => null)));
    return records.filter((r): r is ChatLogRecord => Boolean(r));
  } catch {
    return [];
  }
}
