import { generateCouponOg, altFor } from "@/lib/coupon-og";

// CARD_REV 2026-09-02-r2 — cache-bust token. Bump whenever this vendor's RATE changes.
//
// WHY THIS EXISTS: Next derives the ?<hash> on /opengraph-image from THIS FILE, not from the
// rendered PNG. The card's percentage comes from vendors[].discount at render time, so a rate
// change repaints the image but leaves the URL byte-identical — and X, Slack and every other
// unfurler key their cache on the URL. Measured on the 35% -> 20% revert: the image correctly
// repainted to "20% OFF" while the hash stayed 0ebb6d013f746420, so every already-cached card
// would have kept showing 35% indefinitely. Editing this file is what moves the hash and makes
// an unfurler treat it as a new image.

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = altFor("amino-club");

export default function Image() {
  return generateCouponOg("amino-club");
}
