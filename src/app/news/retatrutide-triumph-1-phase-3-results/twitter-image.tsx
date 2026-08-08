import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("retatrutide-triumph-1-phase-3-results");

export default function Image() {
  return generateNewsOg("retatrutide-triumph-1-phase-3-results");
}
