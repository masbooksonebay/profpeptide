import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("eco2026-oral-glp1-recap-may-2026");

export default function Image() {
  return generateNewsOg("eco2026-oral-glp1-recap-may-2026");
}
