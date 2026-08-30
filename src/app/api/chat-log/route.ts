// Private read-back for the chat analytics log (see src/lib/chat-log.ts).
//
// 🔒 GATING: a shared secret in CHAT_LOG_TOKEN, supplied as ?token= or an x-chat-log-token header.
// Deliberately NOT an auth system — there are no accounts on this site to hang one off — but not
// open either. Three properties matter here:
//   · If CHAT_LOG_TOKEN is unset the route returns 404, not an empty page. An unconfigured
//     deployment should look like it has no such endpoint at all, rather than advertising one that
//     is waiting for a secret.
//   · Comparison is length-checked then constant-time (timingSafeEqual), so response timing can't
//     be used to recover the token a character at a time.
//   · A wrong token also gets 404, not 401 — nothing here should confirm the endpoint exists.
//
// 🔒 It is an /api route, so it is structurally absent from the sitemap (next-sitemap enumerates
// pages, not route handlers) and from the search index (gen-search-index.mjs walks content page
// directories). X-Robots-Tag: noindex, nofollow is set anyway — defence in depth, and it covers a
// crawler that reaches the URL some other way.
//
// This route is READ-ONLY. It can never write or delete a record.
import { timingSafeEqual } from "node:crypto";
import { readRecentLog, LOG_RETENTION_DAYS, type ChatLogRecord } from "@/lib/chat-log";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOT_FOUND = () =>
  new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex, nofollow" } });

function tokenMatches(supplied: string | null): boolean {
  const expected = process.env.CHAT_LOG_TOKEN;
  if (!expected || !supplied) return false;
  const a = Buffer.from(supplied);
  const b = Buffer.from(expected);
  // timingSafeEqual throws on length mismatch, so the length check has to come first — it leaks
  // only the token's length, which is not the secret.
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

function row(r: ChatLogRecord): string {
  const hits = r.retrieved.length
    ? r.retrieved.map((h) => `${esc(h.url)} <span class="s">${h.score}</span>`).join("<br>")
    : '<span class="warn">— nothing retrieved —</span>';
  const flags = [
    r.guardrail ? `<span class="flag g">${esc(r.guardrail)}</span>` : "",
    r.newsSlotFired ? '<span class="flag n">news slot</span>' : "",
    r.zeroRetrieval ? '<span class="flag w">zero retrieval</span>' : "",
    r.notFound ? '<span class="flag w">not found</span>' : "",
  ].filter(Boolean).join(" ");
  return `<tr>
    <td class="mono">${esc(r.ts.replace("T", " ").slice(0, 19))}</td>
    <td class="mono dim">${esc(r.ipHash)}</td>
    <td>${esc(r.question)}</td>
    <td class="mono small">${hits}</td>
    <td>${flags || '<span class="dim">—</span>'}</td>
    <td class="mono small">${r.inputTokens ?? "—"} / ${r.outputTokens ?? "—"}</td>
    <td class="mono small">${r.latencyMs}ms</td>
  </tr>`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const supplied = url.searchParams.get("token") ?? req.headers.get("x-chat-log-token");
  if (!tokenMatches(supplied)) return NOT_FOUND();

  const limit = Math.min(500, Math.max(1, Number(url.searchParams.get("limit") ?? 200) || 200));
  const records = await readRecentLog(limit);

  // The gap list is the point of the whole exercise, so it is rendered FIRST and separately rather
  // than left for someone to notice inside a long table.
  const gaps = records.filter((r) => r.zeroRetrieval || r.notFound);
  const guardrails = records.filter((r) => r.guardrail);

  const body = `<!doctype html><html><head><meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>Chat log</title>
<style>
  body{font:14px/1.5 -apple-system,system-ui,sans-serif;margin:24px;color:#16181B;background:#fff}
  h1{font-size:20px;margin:0 0 4px} h2{font-size:15px;margin:28px 0 8px}
  .meta{color:#5E6B78;font-size:12px;margin-bottom:8px}
  table{border-collapse:collapse;width:100%;margin-top:8px}
  th,td{border-bottom:1px solid #D9DEE4;padding:6px 8px;text-align:left;vertical-align:top}
  th{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#5E6B78}
  .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
  .small{font-size:12px} .dim{color:#8A94A0} .s{color:#8A94A0}
  .warn{color:#B45309}
  .flag{display:inline-block;font-size:11px;padding:1px 6px;border-radius:10px;margin-right:4px}
  .g{background:#FEF3C7;color:#92400E} .n{background:#EAF2F7;color:#2A5876} .w{background:#FEE2E2;color:#991B1B}
  .empty{color:#8A94A0;font-style:italic}
</style></head><body>
<h1>Prof. Peptide — chat log</h1>
<div class="meta">${records.length} record(s) · retention ${LOG_RETENTION_DAYS} days (KV TTL) · IPs are salted hashes, never raw · answer text is not stored</div>

<h2>Content gaps — zero retrieval or "not found" (${gaps.length})</h2>
${gaps.length ? `<table><tr><th>When</th><th>IP hash</th><th>Question</th><th>Retrieved</th><th>Flags</th><th>In/Out</th><th>Latency</th></tr>${gaps.map(row).join("")}</table>` : '<p class="empty">None — every question retrieved something and no answer admitted a gap.</p>'}

<h2>Guardrails fired (${guardrails.length})</h2>
${guardrails.length ? `<table><tr><th>When</th><th>IP hash</th><th>Question</th><th>Retrieved</th><th>Flags</th><th>In/Out</th><th>Latency</th></tr>${guardrails.map(row).join("")}</table>` : '<p class="empty">None.</p>'}

<h2>All turns (${records.length})</h2>
${records.length ? `<table><tr><th>When</th><th>IP hash</th><th>Question</th><th>Retrieved</th><th>Flags</th><th>In/Out</th><th>Latency</th></tr>${records.map(row).join("")}</table>` : '<p class="empty">No records yet.</p>'}
</body></html>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
