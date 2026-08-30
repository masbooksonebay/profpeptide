// Deterministic, code-level guardrails for the AI chat — the parts of the locked spec that must
// not depend on the model's judgment (rate limits, the obvious-case dosing refusal). The rest of
// the dosing rule (the second-person test's long tail) lives in the system prompt — see
// chat-system-prompt.ts.
import { kv } from "@vercel/kv";
import { createHash } from "node:crypto";

// ── rate limits — constants at the top so Mark can tune in one place ─────────────────────────
export const MAX_TURNS_PER_SESSION = 10; // user messages per conversation (client sends full history)
export const MAX_MESSAGES_PER_SESSION = MAX_TURNS_PER_SESSION * 2; // user+assistant pairs
export const MAX_REQUESTS_PER_IP_PER_DAY = 30;
export const MAX_BODY_BYTES = 20 * 1024;
export const MAX_OUTPUT_TOKENS = 700; // chat answers point at pages, they don't reproduce them

// ── deterministic dosing pre-filter ───────────────────────────────────────────────────────────
// Catches the OBVIOUS first-person "apply this dose to me" phrasings for free, before the model
// is even called — zero cost, zero risk of the model second-guessing itself on the clearest cases.
// Deliberately narrow: it must not fire on factual third-person dosing questions like "how is
// BPC-157 dosed" (the exact title format every profile's own dosing section already uses) or
// "what doses were used in retatrutide trials". The system prompt (chat-system-prompt.ts) handles
// the long tail of rephrasings this can't anticipate.
const FIRST_PERSON_DOSING_PATTERNS: RegExp[] = [
  /\bhow much(?: of (?:it|this|that|[\w-]+))? should i (?:take|use|run|dose|inject|start with)\b/i,
  /\bhow much (?:should|can|do) i\b/i,
  /\bwhat (?:dose|dosage|amount|protocol) should i\b/i,
  /\bwhat should i (?:take|run|stack|use|dose|do)\b/i,
  /\bis (?:this|that|it|\d+\s*(?:mg|mcg|iu))\s+too much for me\b/i,
  /\b(?:should|can) i take\b/i,
  /\bam i taking too much\b/i,
  /\bhow much for me\b/i,
  /\bmy (?:dose|dosage|protocol)\b/i,
  /\bwhat('?s| is) (?:safe|too much|the right dose) for me\b/i,
];

export interface DosingCheck {
  blocked: boolean;
  reason?: string;
}

export function checkFirstPersonDosing(message: string): DosingCheck {
  for (const re of FIRST_PERSON_DOSING_PATTERNS) {
    if (re.test(message)) {
      return {
        blocked: true,
        reason:
          "Prof. Peptide can share what a compound's trials, label, or research community report as " +
          "a dose — but can't tell you what to take. That's a question for a licensed clinician who " +
          "knows your situation. Ask me a factual question instead — e.g. \"what doses were used in " +
          "the [compound] trials?\" — and I'll point you to what the research page says.",
      };
    }
  }
  return { blocked: false };
}

// ── KV-backed rate limiting (Vercel KV, already provisioned — used today by /go/ click counting) ──
function todayKey(prefix: string, id: string): string {
  const day = new Date().toISOString().slice(0, 10); // UTC date, stable across a day's requests
  return `chat:${prefix}:${day}:${id}`;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
}

export async function checkIpDailyLimit(ip: string): Promise<RateLimitResult> {
  const key = todayKey("ip", ip);
  const count = await kv.incr(key);
  if (count === 1) await kv.expire(key, 60 * 60 * 26); // ~1 day + slack for clock skew, self-cleaning
  const remaining = Math.max(0, MAX_REQUESTS_PER_IP_PER_DAY - count);
  return { ok: count <= MAX_REQUESTS_PER_IP_PER_DAY, remaining };
}

export function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

// ── APP rate limiting (/api/chat-app) — per-INSTALL, not per-IP ──────────────────────────────────
// Per-IP limiting is wrong for a mobile app: carrier-grade NAT puts many real users behind one
// address, so an IP/day bucket would lock out people who did nothing. The app client sends a stable
// per-install id header; that is the primary bucket. IP is only a fallback for a request that
// carries no id, and a separate per-IP ABUSE CEILING (counted on every request) stops the obvious
// bypass — rotating fresh install ids from one address to mint unlimited quota. The keyspace is
// `chatapp:*`, wholly separate from `/api/chat`'s `chat:*`, so web and app cannot exhaust each
// other's budget.
export const APP_INSTALL_HEADER = "x-pp-install-id";
export const MAX_REQUESTS_PER_INSTALL_PER_DAY = 40; // primary limit, per install
export const MAX_REQUESTS_PER_APP_IP_PER_DAY = 40; // no-id fallback — same bound, never unlimited
// Generous on purpose: a legit carrier-NAT cluster of app users must clear it, while it still caps
// one address minting quota via id rotation. A backstop, not the primary limit.
export const APP_IP_ABUSE_CEILING = 500;

const APP_LIMIT_TTL_SECONDS = 60 * 60 * 26; // ~1 day + skew slack; self-cleaning

/** Accept only a plausible opaque per-install id — a bounded, printable token. Anything else is
 *  treated as "no id" and falls back to the IP bucket (safe, bounded), never trusted as a fresh id. */
export function isValidInstallId(v: unknown): v is string {
  return typeof v === "string" && /^[A-Za-z0-9._-]{8,128}$/.test(v);
}

/** Fixed-length key material for an install id. Plain (unsalted) SHA-256 is fine here — this is a
 *  rate-limit KEY, not stored analytics, and it must not collapse to a shared constant when the
 *  analytics salt is unset (which would rate-limit every install as one). Distinct from chat-log's
 *  hashIp, which is deliberately salt-gated for the privacy record. */
function installKeyHash(installId: string): string {
  return createHash("sha256").update(installId).digest("hex").slice(0, 24);
}

function appDayKey(kind: string, id: string): string {
  const day = new Date().toISOString().slice(0, 10);
  return `chatapp:${kind}:${day}:${id}`;
}

export interface AppRateLimitResult {
  ok: boolean;
  remaining: number;
  /** Which bucket decided this request — for telemetry only, never affects the answer. */
  scope: "install" | "ip" | "abuse";
}

/**
 * Rate-limit an app chat request. `installId` should be the validated header value or null.
 * Order: the per-IP abuse ceiling is incremented on EVERY request first (so id rotation can't dodge
 * it), then the primary per-install (or IP-fallback) bucket. A request with no id degrades to a
 * bounded per-IP bucket — never to unlimited.
 */
export async function checkAppRateLimit(installId: string | null, ip: string): Promise<AppRateLimitResult> {
  // 1) Abuse ceiling — always counted, keyed on IP, catches install-id rotation from one address.
  const capKey = appDayKey("ipcap", ip);
  const cap = await kv.incr(capKey);
  if (cap === 1) await kv.expire(capKey, APP_LIMIT_TTL_SECONDS);
  if (cap > APP_IP_ABUSE_CEILING) return { ok: false, remaining: 0, scope: "abuse" };

  // 2) Primary limiter: per-install when we have a valid id, else a bounded per-IP fallback.
  if (installId) {
    const key = appDayKey("inst", installKeyHash(installId));
    const count = await kv.incr(key);
    if (count === 1) await kv.expire(key, APP_LIMIT_TTL_SECONDS);
    return {
      ok: count <= MAX_REQUESTS_PER_INSTALL_PER_DAY,
      remaining: Math.max(0, MAX_REQUESTS_PER_INSTALL_PER_DAY - count),
      scope: "install",
    };
  }
  const key = appDayKey("ip", ip);
  const count = await kv.incr(key);
  if (count === 1) await kv.expire(key, APP_LIMIT_TTL_SECONDS);
  return {
    ok: count <= MAX_REQUESTS_PER_APP_IP_PER_DAY,
    remaining: Math.max(0, MAX_REQUESTS_PER_APP_IP_PER_DAY - count),
    scope: "ip",
  };
}
