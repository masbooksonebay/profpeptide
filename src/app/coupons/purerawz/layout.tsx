import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons/purerawz",
  title: "PureRawz Coupon Code & Discount — Save 10% (2026) | Prof. Peptide",
  description:
    "Save 10% at PureRawz with discount code PROF10 — verified promo code for 2026. US-based, third-party tested peptides, SARMs, nootropics, research compounds.",
});

export default function PureRawzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
