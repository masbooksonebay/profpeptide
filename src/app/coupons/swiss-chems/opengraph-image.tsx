import { generateCouponOg, altFor } from "@/lib/coupon-og";

// CARD_REV 2026-09-03-r1 — cache-bust token. Bump whenever this vendor's CODE or RATE changes.
//
// WHY THIS EXISTS: Next derives the ?<hash> on /opengraph-image from THIS FILE, not from the
// rendered PNG. The card's code/percentage come from vendors[].code / .discount at render time,
// so a code change repaints the image but leaves the URL byte-identical — and X, Slack and every
// other unfurler key their cache on the URL. Measured on amino-club's 35% -> 20% revert: the
// image repainted correctly while the hash stayed put, so every already-cached card kept the old
// value indefinitely until this token moved it. Editing this file is what makes an unfurler
// treat the card as a new image.

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = altFor("swiss-chems");

export default function Image() {
  return generateCouponOg("swiss-chems");
}
