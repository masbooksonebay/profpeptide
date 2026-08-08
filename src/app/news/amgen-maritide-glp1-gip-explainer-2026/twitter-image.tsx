import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("amgen-maritide-glp1-gip-explainer-2026");

export default function Image() {
  return generateNewsOg("amgen-maritide-glp1-gip-explainer-2026");
}
