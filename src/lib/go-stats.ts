// Aggregation for the /go/ click counters. ONE implementation, shared by the /api/go-stats route
// and scripts/go-stats.mjs (which executes this file through ts.transpileModule, the same trick
// gen-content-dates.mjs uses) so the browser view and the CLI can never disagree about a number
// Mark is about to act on.
//
// WHAT THESE NUMBERS ARE — this text ships in the route's own output, deliberately, so a figure
// cannot be read out of context:
//   · CLICKS through PP's own /go/ redirect. Not conversions. Not commission.
//   · NOT a vendor's total PP-attributed traffic. A reader who sees a code on X, in the
//     newsletter, or clicks Shop inside a per-vendor /coupons/{slug} product grid — every one of
//     those grids is Phase-B and exempt from /go/ routing — reaches the vendor WITHOUT passing
//     through /go/, and is invisible here while still earning.
// So a low count is not evidence of a weak vendor, and the ranking is a ranking of on-site click
// volume through one route.

export const GO_STATS_CAVEAT = [
  "Clicks through PP's own /go/ redirect. NOT conversions and NOT commission.",
  "NOT a vendor's total PP-attributed traffic: readers arriving from X, the newsletter, or a",
  "Phase-B /coupons/{slug} product grid (all exempt from /go/ routing) never touch this route",
  "and are invisible here while still earning. A low count is not a weak vendor.",
];

export interface GoKeyParts { slug: string; from: string; day: string }

/** `go:{slug}:{from}:{YYYY-MM-DD}` — split from the RIGHT so the parse never depends on a slug
 *  being colon-free. Returns null for anything that is not a well-formed counter key. */
export function parseGoKey(key: string): GoKeyParts | null {
  const p = key.split(":");
  if (p.length < 4 || p[0] !== "go") return null;
  const day = p[p.length - 1];
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null;
  return { slug: p.slice(1, -2).join(":"), from: p[p.length - 2], day };
}

export interface GoStats {
  total: number;
  firstDay: string | null;
  lastDay: string | null;
  daysWithData: number;
  vendorCount: number;
  keysCounted: number;
  byVendor: { name: string; clicks: number; pct: number }[];
  bySurface: { name: string; clicks: number; pct: number }[];
  byDay: { day: string; clicks: number }[];
  vendorSurface: { slug: string; clicks: number; surfaces: { name: string; clicks: number }[] }[];
}

/** Pure: given the selected keys and their counter values, produce the whole report. */
export function aggregateGoStats(keys: string[], values: (string | number | null)[]): GoStats {
  const byVendor: Record<string, number> = {};
  const bySurface: Record<string, number> = {};
  const byDay: Record<string, number> = {};
  const vs: Record<string, Record<string, number>> = {};
  let total = 0;
  let counted = 0;

  keys.forEach((key, i) => {
    const parts = parseGoKey(key);
    if (!parts) return;
    const n = Number(values[i]) || 0;
    counted += 1;
    byVendor[parts.slug] = (byVendor[parts.slug] || 0) + n;
    bySurface[parts.from] = (bySurface[parts.from] || 0) + n;
    byDay[parts.day] = (byDay[parts.day] || 0) + n;
    if (!vs[parts.slug]) vs[parts.slug] = {};
    vs[parts.slug][parts.from] = (vs[parts.slug][parts.from] || 0) + n;
    total += n;
  });

  const rank = (o: Record<string, number>) =>
    Object.keys(o)
      .sort((a, b) => o[b] - o[a] || a.localeCompare(b))
      .map((name) => ({ name, clicks: o[name], pct: total ? Math.round((o[name] / total) * 1000) / 10 : 0 }));

  const days = Object.keys(byDay).sort();

  return {
    total,
    firstDay: days.length ? days[0] : null,
    lastDay: days.length ? days[days.length - 1] : null,
    daysWithData: days.length,
    vendorCount: Object.keys(byVendor).length,
    keysCounted: counted,
    byVendor: rank(byVendor),
    bySurface: rank(bySurface),
    byDay: days.map((day) => ({ day, clicks: byDay[day] })),
    vendorSurface: Object.keys(vs)
      .sort((a, b) => byVendor[b] - byVendor[a] || a.localeCompare(b))
      .map((slug) => ({
        slug,
        clicks: byVendor[slug],
        surfaces: Object.keys(vs[slug])
          .sort((a, b) => vs[slug][b] - vs[slug][a])
          .map((name) => ({ name, clicks: vs[slug][name] })),
      })),
  };
}

/** Plain-text rendering — used by both the CLI and the route's ?format=text view. */
export function renderGoStatsText(s: GoStats, scope: string): string {
  const L: string[] = [];
  L.push("/go/ CLICKS");
  L.push("=".repeat(72));
  GO_STATS_CAVEAT.forEach((c) => L.push(c));
  L.push("=".repeat(72), "");
  L.push(`Scope        : ${scope}`);
  L.push(`Total clicks : ${s.total}`);
  L.push(`Period       : ${s.firstDay ?? "—"} .. ${s.lastDay ?? "—"}  (${s.daysWithData} day(s) with data)`);
  L.push(`Vendors seen : ${s.vendorCount}`);
  L.push(`Keys counted : ${s.keysCounted}`, "");
  const tbl = (rows: { name: string; clicks: number; pct: number }[]) =>
    rows.map((r, i) => `  ${String(i + 1).padStart(2)}. ${String(r.clicks).padStart(6)}  ${r.pct.toFixed(1).padStart(5)}%  ${r.name}`);
  L.push("BY VENDOR (ranked):", ...tbl(s.byVendor), "");
  L.push("BY SURFACE (ranked):", ...tbl(s.bySurface), "");
  L.push("BY DAY:", ...s.byDay.map((d) => `  ${d.day}  ${String(d.clicks).padStart(6)}`), "");
  L.push("PER-VENDOR SURFACE SPLIT:");
  s.vendorSurface.forEach((v) =>
    L.push(`  ${v.slug.padEnd(26)} ${v.surfaces.map((x) => `${x.name}=${x.clicks}`).join("  ")}`),
  );
  return L.join("\n");
}
