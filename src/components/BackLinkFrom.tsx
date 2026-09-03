"use client";

// Source-aware back link for /coupons/<slug>. Renders the page's own prerendered default, then
// upgrades it to the surface the reader actually arrived from, per ?from=.
//
// WHY window.location AND NOT useSearchParams — this is the HubCategoryBrowser rule (see
// components/HubCategoryBrowser.tsx): useSearchParams opts the route out of static rendering (it
// demands a Suspense boundary and bails the page to client-side rendering), which is exactly what
// cost /peptides its prerendered HTML once before. Reading window.location.search directly keeps all
// 57 coupon pages prerendering ○ static, which is the whole point — the crawler and the
// no-JS/no-param reader get the correct default in the HTML itself.
//
// WHY useLayoutEffect AND NOT useEffect — useEffect commits AFTER paint, so an arriving reader would
// see "Back to Discount Codes" and watch it swap. useLayoutEffect commits synchronously BEFORE the
// browser paints, so on a soft navigation — which is every inbound path here, since they are all
// <Link> clicks — the correct label is the first thing painted. No flash.
// The only case that can still swap is a HARD load of a URL that already carries ?from= (a shared
// or bookmarked link), where the prerendered HTML necessarily holds the default. That is rare and
// harmless, and it is the price of keeping the page static rather than dynamic.
//
// useLayoutEffect warns when it runs during SSR, so it is selected only in the browser. The server
// render therefore executes NO effect and emits exactly the default — see the byte-identity note
// in BackLink.

import { useState, useLayoutEffect, useEffect } from "react";
import BackLinkAnchor from "@/components/BackLinkAnchor";
import { resolveBackLink, BACK_LINK_DEFAULT } from "@/data/back-link-sources";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function BackLinkFrom({ href, label }: { href: string; label: string }) {
  // Seeded with the page's own hardcoded default, so the server render and the first client render
  // agree exactly — no hydration mismatch, and no dependence on the map for the majority case.
  const [target, setTarget] = useState<{ href: string; label: string }>({ href, label });

  useIsomorphicLayoutEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("from");
    if (!raw) return; // Cold arrival from search: keep the prerendered default untouched.
    const next = resolveBackLink(raw);
    // resolveBackLink is total — an unknown surface or a hand-edited value returns the default,
    // so this only ever assigns a real target.
    if (next !== BACK_LINK_DEFAULT) setTarget(next);
  }, []);

  return <BackLinkAnchor href={target.href}>{target.label}</BackLinkAnchor>;
}
