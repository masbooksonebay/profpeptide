// scripts/check-og-routes.mjs — the OG-route guard (retired-aware).
//
// Every per-vendor coupon page (src/app/coupons/<slug>/page.tsx) must ship its OWN
// file-based OpenGraph + Twitter image routes (opengraph-image.tsx + twitter-image.tsx,
// both calling generateCouponOg). In Next.js App Router a segment WITHOUT those files
// silently falls through to the site-wide default og:image (seo.ts OG_IMAGE = og-image.png)
// — a generic Prof. Peptide card instead of the vendor's own. That is not an error Next
// reports; the page builds and ships, and the miss is only ever caught by someone noticing
// a wrong card on a share. crush-research, modern-aminos and treasure-coast-peptides all
// shipped route-less (created in e64c095, never given routes) until they were retrofitted
// in 0db7913 — three pages, found by eye, never counted. This makes the class loud.
//
// ── RETIRED VENDORS ARE THE INVERSE ────────────────────────────────────────────────
// A retired vendor whose coupon page.tsx is KEPT (it redirect()s to /coupons — fusion and
// synthesis do this) must NOT ship image routes: opengraph-image.tsx / twitter-image.tsx are
// independent route segments that the page.tsx redirect and the next.config `/coupons/<slug>{/}?`
// redirect DO NOT cover (the redirect matches the bare path + trailing slash, never the
// `/opengraph-image` sub-segment). So the image route stays live and crawlable — an orphan.
// fusion-peptide's opengraph-image was still being crawled weeks after retirement precisely
// because the OLD version of this guard REQUIRED those files with no retired exemption, so the
// orphan couldn't be deleted without failing the build. This guard now enforces the opposite for
// retired vendors, and additionally requires the page.tsx redirect so the coupon page can't rot
// into a live dead page. A PERMANENT removal deletes the whole dir (nordic/apollo/purerx) and is
// never scanned here; only retired-with-kept-dir vendors hit these rules.
//
// Pure LOCAL analysis — a directory listing + a redirect() substring check + the generated
// vendors.slugs.json registry. No network. Safe on every build.
//
// FAILS (exit 1) when:
//   • an ACTIVE coupon page (or any news article) is missing opengraph-image.tsx / twitter-image.tsx
//   • a RETIRED coupon page still HAS either image route (the orphan), or
//   • a RETIRED coupon page's page.tsx has no redirect() (a live dead page)
//
// Run:  npm run check:og-routes
// Exit: 0 = every page is in its correct state; 1 = at least one violation.

import { readdirSync, existsSync, statSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const REQUIRED = ["opengraph-image.tsx", "twitter-image.tsx"];

// Retired coupon slugs, parsed straight from the COMMITTED src/data/vendors.ts. Do NOT read
// vendors.slugs.json here — it is gitignored AND generated later in the build chain (by
// gen-vendor-slugs.mjs, which runs AFTER this guard), so on a fresh Vercel clone it does not
// exist yet and readFileSync would ENOENT the build. Same top-level-entry regex to_prices.py
// uses: each `  "slug": { … },` block, flagged retired if its body contains `retired: true`.
// News articles are never "retired", so this only affects coupon pages.
const vendorsTs = readFileSync(join(root, "src/data/vendors.ts"), "utf8");
const retiredSlugs = new Set();
for (const m of vendorsTs.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{([\s\S]*?)^ {2}\},/gm)) {
  if (/\bretired:\s*true\b/.test(m[2])) retiredSlugs.add(m[1]);
}

// Every per-item page that wants its OWN card needs both route files. Coupon pages
// (generateCouponOg) and news ARTICLE pages (generateNewsOg) both qualify — each is a
// slug directory with a page.tsx. The /news hub's page.tsx sits directly in src/app/news
// (not a subdirectory), so it isn't scanned here; it ships its own routes separately.
const BASES = [
  { label: "coupon page", dir: join(root, "src/app/coupons"), gen: "generateCouponOg", retireAware: true },
  { label: "news article", dir: join(root, "src/app/news"), gen: "generateNewsOg", retireAware: false },
];

const offenders = [];
let total = 0;
for (const { label, dir, gen, retireAware } of BASES) {
  const slugs = readdirSync(dir).filter((name) => {
    const d = join(dir, name);
    return statSync(d).isDirectory() && existsSync(join(d, "page.tsx"));
  });
  for (const slug of slugs.sort()) {
    total++;
    const present = REQUIRED.filter((f) => existsSync(join(dir, slug, f)));
    const missing = REQUIRED.filter((f) => !existsSync(join(dir, slug, f)));

    if (retireAware && retiredSlugs.has(slug)) {
      // Retired: MUST NOT have image routes, and page.tsx MUST redirect.
      if (present.length) {
        offenders.push({ slug: `${label} ${slug}`, kind: "retired-has-routes", detail: present.join(" + ") });
      }
      const pageSrc = readFileSync(join(dir, slug, "page.tsx"), "utf8");
      if (!/\bredirect\s*\(/.test(pageSrc)) {
        offenders.push({ slug: `${label} ${slug}`, kind: "retired-no-redirect", detail: "page.tsx" });
      }
    } else if (missing.length) {
      // Active: MUST have both routes.
      offenders.push({ slug: `${label} ${slug}`, kind: "active-missing-routes", detail: missing.join(" + "), gen });
    }
  }
}

if (offenders.length) {
  console.error(`\ncheck:og-routes FAILED — ${offenders.length} violation(s).`);
  for (const o of offenders) {
    if (o.kind === "active-missing-routes") {
      console.error(`    • ${o.slug} — ACTIVE, missing ${o.detail} (wrap ${o.gen}("<slug>"))`);
    } else if (o.kind === "retired-has-routes") {
      console.error(`    • ${o.slug} — RETIRED, must DELETE ${o.detail} (live crawlable OG orphan; the redirect doesn't cover it)`);
    } else if (o.kind === "retired-no-redirect") {
      console.error(`    • ${o.slug} — RETIRED, page.tsx has no redirect() (live dead page — add redirect("/coupons"))`);
    }
  }
  console.error(
    `  Active item pages need opengraph-image.tsx AND twitter-image.tsx (wrappers around\n` +
    `  generateCouponOg / generateNewsOg). Retired coupon pages must have NEITHER (they leak a\n` +
    `  crawlable OG image the redirect can't catch) and MUST redirect(). Permanent removals delete\n` +
    `  the whole dir instead.`,
  );
  process.exit(1);
}

console.log(`check:og-routes OK — ${total} coupon + news-article page(s): active pages ship both card routes, retired pages carry none and redirect.`);
