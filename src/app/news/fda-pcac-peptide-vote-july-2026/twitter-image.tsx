import { generateNewsOg, newsAltFor } from "@/lib/coupon-og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = newsAltFor("fda-pcac-peptide-vote-july-2026");

export default function Image() {
  return generateNewsOg("fda-pcac-peptide-vote-july-2026");
}
