import { generateCouponHubOg, COUPON_HUB_ALT } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = COUPON_HUB_ALT;

export default function Image() {
  return generateCouponHubOg();
}
