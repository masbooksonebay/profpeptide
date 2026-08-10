import { activeVendorCount } from "@/data/vendors";
import { CODES_VERIFIED_DATE } from "@/data/codes-verified";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/coupons",
  title: `Peptide Discount Codes (${CODES_VERIFIED_DATE}) — Verified Coupon & Promo Codes | Prof. Peptide`,
  description: `Verified peptide discount codes, promo codes, and coupon codes for ${activeVendorCount} vendors. Updated regularly. Save up to 50% on research peptides.`,
  // Defer OG image to this segment's opengraph-image.tsx (page-specific card).
  useDefaultOgImage: false,
});

export default function CouponsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-6">
          <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Prof. Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions.
        </p>
      </div>
    </>
  );
}
