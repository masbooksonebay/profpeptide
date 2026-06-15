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
  // Force Vercel's file tracer to bundle the OG card assets with the coupon
  // image routes. They are read from disk at render time (see src/lib/coupon-og.tsx);
  // without this the tracer can drop them and 500 the cards in production.
  experimental: {
    outputFileTracingIncludes: {
      "/coupons/**": ["./public/og/coupon-card-base.png", "./public/fonts/*.ttf"],
    },
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.profpeptide.com" }],
        destination: "https://profpeptide.com/:path*",
        permanent: true,
      },
      {
        source: "/research{/}?",
        destination: "/peptides",
        permanent: true,
      },
      ...studiesRedirectSlugs.map((slug) => ({
        source: `/research/${slug}{/}?`,
        destination: `/peptides/${slug}#studies`,
        permanent: true,
      })),
      {
        source: "/tirzepatideresearch",
        destination: "/peptides/tirzepatide",
        permanent: true,
      },
      {
        source: "/tesamorelin",
        destination: "/peptides/tesamorelin",
        permanent: true,
      },
      {
        source: "/retatrutide",
        destination: "/peptides/retatrutide",
        permanent: true,
      },
      {
        source: "/news/rfk-peptide-ban-2026-v2{/}?",
        destination: "/news/rfk-peptide-ban-2026",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
