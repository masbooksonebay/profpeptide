// Breadcrumb JSON-LD generator — the single source of the BreadcrumbList shape.
//
// Before this, ~152 pages hand-duplicated the same object literal. New pages (and any
// migrated ones) call breadcrumbJsonLd() instead, so the shape is defined once. Pass the
// full trail Home → … → current page; the LAST crumb omits `item`, per Google's guidance
// (the page you're on carries no link). Non-final crumbs need a `path` from the site root.
//
//   breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Peptides", path: "/peptides" }, { name: "BPC-157" }])
//
// The emitted object is byte-identical to the legacy hand-written literals (same key order:
// @type, position, name, item), so migrating a page never changes its rendered output.

const SITE = "https://profpeptide.com";

export interface Crumb {
  name: string;
  /** Path from the site root, e.g. "/peptides". "/" (or "") → the site root itself.
   *  Omit on the final crumb — the current page carries no `item`. */
  path?: string;
}

export function breadcrumbJsonLd(trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => {
      const isLast = i === trail.length - 1;
      const li: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
      };
      // Every crumb but the last links to its page; the current page has no `item`.
      if (!isLast && c.path !== undefined) {
        li.item = c.path === "/" || c.path === "" ? SITE : SITE + c.path;
      }
      return li;
    }),
  };
}
