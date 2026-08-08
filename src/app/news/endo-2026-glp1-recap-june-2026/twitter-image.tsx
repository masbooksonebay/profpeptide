import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("endo-2026-glp1-recap-june-2026");

export default function Image() {
  return generateNewsOg("endo-2026-glp1-recap-june-2026");
}
