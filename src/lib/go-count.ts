// Pure click-counting logic for /go/{slug} — deliberately free of any `vendors` import so it runs
// standalone (the route imports it; scripts/prove-go-count.mjs exercises it against a real KV mock).

// The surfaces a click can originate from. `?from=` is validated against this set so a malformed or
// spoofed value can't create junk counter keys; anything unknown buckets as "unknown".
export const GO_SURFACES = ["coupon-card", "coupon-reveal", "profile-block", "price-grid", "search"] as const;
export type GoSurface = (typeof GO_SURFACES)[number];

export function normalizeFrom(from: string | null | undefined): string {
  return from && (GO_SURFACES as readonly string[]).includes(from) ? from : "unknown";
}

/** UTC day (YYYY-MM-DD) — the counter bucket. Passed in (not read from a clock here) so it's testable. */
export function utcDay(now: Date): string {
  return now.toISOString().slice(0, 10);
}

/** KV counter key: one atomic counter per vendor × surface × UTC day. Read tooling sums by prefix. */
export function goCountKey(slug: string, from: string, dayISO: string): string {
  return `go:${slug}:${from}:${dayISO}`;
}

/**
 * Record one click. FIRE-AND-FORGET at the call site — the 302 must never await this. Any failure
 * (KV not provisioned yet, network blip) is swallowed so a broken counter can never break a click.
 * `kvIncr` is injected (the route passes @vercel/kv's `kv.incr`) so this stays testable without KV.
 */
export async function recordGoClick(
  kvIncr: (key: string) => Promise<number>,
  slug: string,
  from: string | null | undefined,
  now: Date,
): Promise<void> {
  try {
    await kvIncr(goCountKey(slug, normalizeFrom(from), utcDay(now)));
  } catch {
    /* fire-and-forget: never let a counter failure affect the redirect */
  }
}
