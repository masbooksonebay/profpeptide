/** @type {import("next").NextConfig} */
const studiesRedirectSlugs = [
  "aod-9604",
  "bpc-157",
  "cagrilintide",
  "cjc-1295",
  "dsip",
  "epitalon",
  "follistatin",
  "gh-stack",
  "ghk-cu",
  "igf-1-lr3",
  "ipamorelin",
  "kpv",
  "melanotan-ii",
  "mots-c",
  "nad-plus",
  "pt-141",
  "retatrutide",
  "selank",
  "semaglutide",
  "semax",
  "sermorelin",
  "tb-500",
  "tesamorelin",
  "thymosin-alpha-1",
  "tirzepatide",
  "wolverine-stack",
];

const nextConfig = {
  // Disable Next's default trailing-slash normalization (which emits a 308) so the
  // explicit redirect rule below can normalize trailing slashes with a clean 301.
  skipTrailingSlashRedirect: true,
  // Force Vercel's file tracer to bundle the OG card assets with the coupon
  // image routes. They are read from disk at render time (see src/lib/coupon-og.tsx);
  // without this the tracer can drop them and 500 the cards in production.
  experimental: {
    outputFileTracingIncludes: {
      // Coupon cards render the OFFICIAL brand mark (LogoLockup → public/logo-glasses.png) on the
      // LIGHT vial base (coupon-card-light.jpg); the dark base is still loaded by loadAssets (shared
      // with home/content) so it stays traced too. All must be bundled or the cards 500 in prod.
      "/coupons/**": ["./public/og/coupon-card-base.jpg", "./public/og/coupon-card-light.jpg", "./public/logo-glasses.png", "./public/fonts/*.ttf"],
      // /prices/[compound] + /faq/[slug] OG cards are DYNAMIC routes (parameterized metadata image
      // routes don't prerender in Next 14.2), so they render in a serverless function at runtime and
      // MUST have loadAssets()'s seven files bundled — else readFile ENOENTs → 500 (every /prices card
      // shipped cardless since d99c44d). generateContentOg reads the full loadAssets set, so mirror
      // /coupons/** exactly (both card JPGs, the logo, the four Inter fonts). Enforced by check:og-assets.
      "/prices/**": ["./public/og/coupon-card-base.jpg", "./public/og/coupon-card-light.jpg", "./public/logo-glasses.png", "./public/fonts/*.ttf"],
      "/faq/**": ["./public/og/coupon-card-base.jpg", "./public/og/coupon-card-light.jpg", "./public/logo-glasses.png", "./public/fonts/*.ttf"],
      // News OG cards: article routes render the brand tile (generateNewsOg → logo-glasses.png);
      // the /news hub still uses the content card (generateContentOg → coupon-card-base.jpg).
      // Both need the Inter fonts. Without this, the tracer drops the assets in prod → 500.
      "/news/**": ["./public/logo-glasses.png", "./public/og/coupon-card-base.jpg", "./public/fonts/*.ttf"],
      // /about + /guides OG cards were edge-runtime redraws; converted to the Node runtime so they
      // render the official public/logo-glasses.png (edge can't readFile from disk). Trace the mark.
      "/about/**": ["./public/logo-glasses.png"],
      "/guides/**": ["./public/logo-glasses.png"],
    },
  },
  async headers() {
    // Per-route OG/Twitter card-image endpoints are metadata assets, not pages.
    // Google was "Discovering" them (via the og:image / twitter:image meta tags
    // on every coupon/guide/about page) and surfacing them in the index, burning
    // crawl/indexing quota. They're already excluded from the sitemap
    // (next-sitemap.config.js); this emits X-Robots-Tag: noindex on the routes
    // themselves so Google drops the ones it already found. :path* matches the
    // route at any depth (/about/opengraph-image, /coupons/<vendor>/opengraph-image).
    const noindex = [{ key: "X-Robots-Tag", value: "noindex" }];
    return [
      { source: "/:path*/opengraph-image", headers: noindex },
      { source: "/:path*/twitter-image", headers: noindex },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.profpeptide.com" }],
        destination: "https://profpeptide.com/:path*",
        permanent: true,
      },
      // Legacy peptide URL variants -> canonical /peptides/<slug>, with an
      // explicit 301 (Moved Permanently). next-sitemap excludes the /research/*
      // sources; the canonical /peptides/<slug> is what stays indexable.
      {
        source: "/research{/}?",
        destination: "/peptides",
        statusCode: 301,
      },
      ...studiesRedirectSlugs.map((slug) => ({
        source: `/research/${slug}{/}?`,
        destination: `/peptides/${slug}#studies`,
        statusCode: 301,
      })),
      {
        source: "/tirzepatideresearch",
        destination: "/peptides/tirzepatide",
        statusCode: 301,
      },
      {
        source: "/tesamorelin",
        destination: "/peptides/tesamorelin",
        statusCode: 301,
      },
      {
        source: "/retatrutide",
        destination: "/peptides/retatrutide",
        statusCode: 301,
      },
      {
        source: "/news/rfk-peptide-ban-2026-v2{/}?",
        destination: "/news/rfk-peptide-ban-2026",
        permanent: true,
      },
      // Price-page shorthand redirects: the common name differs from the routed slug, so the
      // natural guess 404s. Catch each (permanent 308). Purely for typed/guessed URLs —
      // nothing links to these internally.
      {
        source: "/prices/nad{/}?", // NAD+ routed at nad-plus
        destination: "/prices/nad-plus",
        permanent: true,
      },
      {
        source: "/prices/kisspeptin-10{/}?", // display name "Kisspeptin-10", routed at kisspeptin
        destination: "/prices/kisspeptin",
        permanent: true,
      },
      {
        source: "/prices/melanotan-2{/}?", // digit form; routed at melanotan-ii (roman numeral)
        destination: "/prices/melanotan-ii",
        permanent: true,
      },
      {
        source: "/prices/melanotan-1{/}?", // digit form; routed at melanotan-i (roman numeral)
        destination: "/prices/melanotan-i",
        permanent: true,
      },
      // Retired vendors: permanently redirect their coupon pages to the hub.
      // page.tsx kept on disk; excluded from the sitemap in next-sitemap.config.js.
      // (Particle Peptides restored 2026-08 — redirect removed; page resolves again.)
      {
        source: "/coupons/fusion-peptide{/}?",
        destination: "/coupons",
        permanent: true,
      },
      // HIDDEN 2026-07-24: affiliate broken — hidden via vendors.ts `retired`, not a
      // permanent retirement. page.tsx kept on disk; remove this + the flag to re-enable.
      {
        source: "/coupons/synthesis-peptides{/}?",
        destination: "/coupons",
        permanent: true,
      },
      // REMOVED vendors (entry deleted, not `retired`): a126305 dropped Nordic Peptides and
      // ec23364 dropped Apollo Peptide Sciences (dead website), leaving no page — so their
      // still-indexed URLs 404'd. Redirect them to the hub to consolidate the residual link
      // equity, matching the retired-pair handling above. No page.tsx exists, so nothing to
      // exclude from the sitemap/index (both derive from the registry, which no longer lists them).
      {
        source: "/coupons/nordic-peptides{/}?",
        destination: "/coupons",
        permanent: true,
      },
      {
        source: "/coupons/apollo-peptide-sciences{/}?",
        destination: "/coupons",
        permanent: true,
      },
      // REMOVED 2026-08-19: PureRx Peptides — affiliate program discontinued. Full removal
      // (nordic/apollo pattern): registry entry, price rows (master doc + generated), LISTED,
      // pipeline entries and the whole coupons/purerx-peptides dir deleted; this redirect
      // consolidates the residual link equity from its indexed page.
      {
        source: "/coupons/purerx-peptides{/}?",
        destination: "/coupons",
        permanent: true,
      },
      // Normalize ANY trailing-slash URL to its canonical no-trailing-slash form
      // with a single clean 301. Kept LAST so the specific redirects above match
      // first; pairs with skipTrailingSlashRedirect above.
      {
        source: "/:path+/",
        destination: "/:path+",
        statusCode: 301,
      },
    ];
  },
};
module.exports = nextConfig;
