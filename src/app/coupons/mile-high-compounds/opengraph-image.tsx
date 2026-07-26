import { generateCouponOg, altFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = altFor("mile-high-compounds");

export default function Image() {
  return generateCouponOg("mile-high-compounds");
}
