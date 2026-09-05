import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    path: "/deals",
    title: "Vendor Deals & Promotions — Peptide Discount Codes | Prof. Peptide",
    description: "Live vendor promotions, straight from the vendors' own creatives — with Prof. Peptide's own code called out wherever it beats what's printed on the flyer.",
  }),
  robots: { index: true, follow: true },
};

export default function DealsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-6">
          <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Every entry on this page is a paid link. Prof. Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions.
        </p>
      </div>
    </>
  );
}
