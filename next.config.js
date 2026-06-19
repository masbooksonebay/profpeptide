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
      "/coupons/**": ["./public/og/coupon-card-base.png", "./public/fonts/*.ttf"],
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
      // Retired vendors: permanently redirect their coupon pages to the hub.
      // page.tsx kept on disk; excluded from the sitemap in next-sitemap.config.js.
      {
        source: "/coupons/particle-peptides{/}?",
        destination: "/coupons",
        permanent: true,
      },
      {
        source: "/coupons/fusion-peptide{/}?",
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
