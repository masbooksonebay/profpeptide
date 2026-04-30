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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.profpeptide.com" }],
        destination: "https://profpeptide.com/:path*",
        permanent: true,
      },
      {
        source: "/compare/retatrutide-vs-tirzepatide",
        destination: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide",
        permanent: true,
      },
      {
        source: "/compare/retatrutide-vs-semaglutide",
        destination: "/compare/semaglutide-vs-tirzepatide-vs-retatrutide",
        permanent: true,
      },
      {
        source: "/research",
        destination: "/peptides",
        permanent: true,
      },
      ...studiesRedirectSlugs.map((slug) => ({
        source: `/research/${slug}`,
        destination: `/peptides/${slug}#studies`,
        permanent: true,
      })),
    ];
  },
};
module.exports = nextConfig;
