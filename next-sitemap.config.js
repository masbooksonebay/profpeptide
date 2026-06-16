/** @type {import('next-sitemap').IConfig} */

// next-sitemap discovers URLs from the Next.js build manifest (every prerendered
// route). That correctly picks up all real content pages — /peptides/*,
// /supplements/*, /news/*, /compare/*, /coupons/*, and every top-level page —
// automatically as new page folders are added, with no manual list to maintain.
// But the manifest ALSO contains per-route image endpoints and noindex/redirect
// routes that must never be in a sitemap. We strip those here.

// Per-route utility endpoints + icon routes: dropped at any depth.
const DROP_PATTERNS = [
  /\/opengraph-image$/,
  /\/twitter-image$/,
  /^\/(icon|apple-icon)(\.png)?$/,
];

// Exact paths to drop: noindex pages (must match the page's robots metadata).
const DROP_EXACT = new Set([
  "/contact", // src/app/contact -> metadata.robots { index: false }
]);

module.exports = {
  siteUrl: "https://profpeptide.com",
  generateRobotsTxt: true,
  trailingSlash: false,
  exclude: [
    // Legacy /research and /research/* -> 301 redirect to /peptides/* (next.config.js).
    // Canonical lives at /peptides/<slug>, which IS included.
    "/research",
    "/research/*",
    // Per-route OG/Twitter image endpoints (belt-and-suspenders with transform()).
    "/*/opengraph-image",
    "/*/twitter-image",
    // Retired vendors -> 301/308 redirect to /coupons (next.config.js). page.tsx
    // is kept on disk so the route stays in the build manifest; exclude it here.
    "/coupons/particle-peptides",
    "/coupons/fusion-peptide",
  ],
  transform: async (config, path) => {
    if (DROP_EXACT.has(path)) return null;
    if (DROP_PATTERNS.some((re) => re.test(path))) return null;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
