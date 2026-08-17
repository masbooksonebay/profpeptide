import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("glp1-compounding-503a-503b-three-lanes-2026");

export default function Image() {
  return generateNewsOg("glp1-compounding-503a-503b-three-lanes-2026");
}
