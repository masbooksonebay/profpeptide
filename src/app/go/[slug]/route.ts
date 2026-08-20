import { NextRequest, NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import { kv } from "@vercel/kv";
import { goTarget } from "@/lib/go";
import { recordGoClick } from "@/lib/go-count";

// Tracked affiliate redirect. /go/{slug}?from={surface} counts the click in Vercel KV
// (fire-and-forget) and 302s to the vendor's affiliate URL, passed through VERBATIM so the ref
// token survives (see goTarget). Noindex + robots-disallowed (next-sitemap) so /go/ never enters
// the index; links to it stay rel="sponsored nofollow noopener". 302 (temporary), not 301.
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const target = goTarget(slug);

  // Unknown vendor — send the click to the coupons hub rather than 404 it.
  if (!target) {
    return new NextResponse(null, {
      status: 302,
      headers: { Location: new URL("/coupons", request.url).toString(), "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  // Count the click WITHOUT blocking the 302. `waitUntil` keeps the invocation alive until the KV
  // write settles (a plain `void` promise is dropped when Vercel freezes the function after the
  // response — that lost writes in production; see PP /go/ diagnosis). It does NOT delay the response.
  // Any KV error is still swallowed inside recordGoClick (now also logged) so a broken counter can
  // never break a click — the redirect below is constructed and returned regardless.
  waitUntil(recordGoClick((k) => kv.incr(k), slug, request.nextUrl.searchParams.get("from"), new Date()));

  // Location is the RAW affiliate URL — NOT new URL(target) — so the ref path/query is byte-identical.
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: target,
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}
