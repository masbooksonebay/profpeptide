import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@vercel/kv";
import { aggregateGoStats, parseGoKey, renderGoStatsText, GO_STATS_CAVEAT } from "@/lib/go-stats";

// /api/go-stats — per-vendor /go/ click counts, read straight out of KV.
//
// WHY THIS ROUTE EXISTS AT ALL: the KV credentials are Vercel *Sensitive* vars, which are
// write-only — `vercel env pull` SUCCEEDS but writes them as empty strings (verified 2026-09-02;
// non-sensitive vars in the same pull come down populated). So no local script can read the
// counters without someone hand-copying a token out of the dashboard. A route running INSIDE the
// deployment already has the env in scope, so the numbers become readable with no credential
// ever leaving Vercel and nothing secret on any laptop.
//
// 🔴 NOT REACHABLE ON PRODUCTION — TWO INDEPENDENT LAYERS, neither of them URL obscurity:
//
//   1. CODE (the one that matters). VERCEL_ENV is set by the platform, not by us, and cannot be
//      spoofed by a request. When it is "production" this route 404s before touching KV, before
//      reading a credential and before any aggregation. (The body is a plain "Not Found" rather
//      than Next's own 404 page, so the STATUS matches a missing route but the body is
//      distinguishable — this guard is about withholding the DATA, not about hiding that the
//      path exists. Obscurity is not the control here.) This is what
//      protects https://profpeptide.com/api/go-stats, which is a PUBLIC alias with no SSO in
//      front of it. Without this guard, shipping the route would publish PP's click data.
//   2. PLATFORM (defence in depth). Preview *.vercel.app deployment URLs sit behind Vercel
//      deployment protection: an unauthenticated request 302s to vercel.com/sso-api (verified
//      2026-09-02 against a live deployment URL). So even on preview, reaching this needs Mark's
//      Vercel login.
//
// Layer 1 is deliberately the primary. Deployment protection is an account setting someone could
// turn off; the env check ships with the code.
//
// READ-ONLY BY CONSTRUCTION: only KV_REST_API_READ_ONLY_TOKEN is ever read. There is NO fallback
// to KV_REST_API_TOKEN — a reporting endpoint must not hold a write credential, and if the
// read-only token is absent this route fails rather than quietly escalating its own privileges.
//
// Views: JSON (default), ?format=text, ?format=html.
// Scope: ?day=YYYY-MM-DD pins one day, ?since=YYYY-MM-DD sets a lower bound.

export const runtime = "nodejs";
// The counters change on every click, so this must never be prerendered or cached.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const NOINDEX = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" };
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(request: NextRequest) {
  // ── Layer 1: never on production ──────────────────────────────────────────────────────────────
  if (process.env.VERCEL_ENV === "production") {
    return new NextResponse("Not Found", { status: 404, headers: NOINDEX });
  }

  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_READ_ONLY_TOKEN;
  if (!url || !token) {
    return NextResponse.json(
      {
        error: "KV read-only credentials not in scope",
        KV_REST_API_URL: url ? "set" : "missing",
        KV_REST_API_READ_ONLY_TOKEN: token ? "set" : "missing",
        note: "This route uses the READ-ONLY token only and never falls back to the read/write one.",
      },
      { status: 503, headers: NOINDEX },
    );
  }

  const sp = request.nextUrl.searchParams;
  const format = sp.get("format");
  const day = DATE_RE.test(sp.get("day") ?? "") ? sp.get("day")! : null;
  const since = DATE_RE.test(sp.get("since") ?? "") ? sp.get("since")! : null;

  const kv = createClient({ url, token });

  // SCAN cursor loop rather than KEYS — non-blocking on the server, safe as the keyspace grows.
  const keys: string[] = [];
  let cursor = 0;
  do {
    const [next, batch] = await kv.scan(cursor, { match: "go:*", count: 1000 });
    keys.push(...batch);
    cursor = Number(next);
  } while (cursor !== 0);

  const selected = keys.filter((k) => {
    const parts = parseGoKey(k);
    if (!parts) return false;
    if (day) return parts.day === day;
    if (since) return parts.day >= since;
    return true;
  });

  const values = selected.length ? await kv.mget<(string | number | null)[]>(...selected) : [];
  const stats = aggregateGoStats(selected, values ?? []);
  const scope = day ? `day ${day}` : since ? `since ${since}` : "all time";
  const meta = { scope, keysSeen: keys.length, keysSelected: selected.length, env: process.env.VERCEL_ENV ?? "local" };

  if (format === "text") {
    return new NextResponse(renderGoStatsText(stats, scope), {
      status: 200,
      headers: { ...NOINDEX, "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (format === "html") {
    const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);
    const body = `<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex,nofollow">
<title>/go/ clicks — ${esc(scope)}</title>
<style>body{font:14px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;max-width:60rem;margin:2rem auto;padding:0 1rem;color:#16181B;background:#fff}
@media(prefers-color-scheme:dark){body{color:#e2e8f0;background:#0f172a}}
pre{white-space:pre-wrap}.caveat{border-left:3px solid #3A759F;padding:.6rem 0 .6rem .8rem;margin:0 0 1.4rem}</style>
<h1>/go/ clicks &mdash; ${esc(scope)}</h1>
<div class="caveat">${GO_STATS_CAVEAT.map(esc).join("<br>")}</div>
<pre>${esc(renderGoStatsText(stats, scope))}</pre>`;
    return new NextResponse(body, {
      status: 200,
      headers: { ...NOINDEX, "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.json({ caveat: GO_STATS_CAVEAT, meta, ...stats }, { status: 200, headers: NOINDEX });
}
