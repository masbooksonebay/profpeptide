import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("retatrutide-phase-3-update-may-2026");

export default function Image() {
  return generateNewsOg("retatrutide-phase-3-update-may-2026");
}
