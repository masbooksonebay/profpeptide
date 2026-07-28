import Link from "next/link";

/**
 * One vendor product card: a compound, its sizes + pre-code prices, stock, and a deep
 * shop link. The compound name is an INTERNAL link into PP's library when a profile
 * exists; otherwise plain text. Presentational + reusable — the caller supplies the data
 * and the (already-built) shop URL. Matches the /prices master-card treatment (panel-card
 * grid, same tokens). Prices are shown PRE-code; the page states the discount separately.
 */
export interface VendorProductCardProps {
  compound: string;
  compoundName: string;
  hasProfile: boolean;
  sizes: { sizeMg: number; basePrice: number; inStock: boolean }[];
  /** fully-built vendor product URL incl. affiliate params. */
  shopUrl: string;
}

export function VendorProductCard({ compound, compoundName, hasProfile, sizes, shopUrl }: VendorProductCardProps) {
  return (
    <div className="panel-card px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] items-center gap-x-4 gap-y-2 text-left tabular-nums">
      {/* compound name → internal /peptides link, or plain text when no profile exists */}
      {hasProfile ? (
        <Link
          href={`/peptides/${compound}`}
          className="text-sm font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors min-w-0 truncate"
        >
          {compoundName}
        </Link>
      ) : (
        <span className="text-sm font-semibold text-[#16181B] dark:text-slate-100 min-w-0 truncate">{compoundName}</span>
      )}

      {/* sizes + pre-code prices — wraps to a second row on mobile */}
      <div className="col-span-2 sm:col-span-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {sizes.map((s) => (
          <span key={s.sizeMg} className="whitespace-nowrap">
            <span className="text-xs text-gray-400 dark:text-slate-500">{s.sizeMg}mg</span>{" "}
            <span className="font-semibold text-[#16181B] dark:text-slate-100">${s.basePrice.toFixed(2)}</span>
            {!s.inStock && <span className="ml-1 text-xs text-red-500">out of stock</span>}
          </span>
        ))}
      </div>

      {/* deep shop link carrying the affiliate params */}
      <a
        href={shopUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="col-span-2 sm:col-span-1 justify-self-start sm:justify-self-end text-sm font-medium text-[#3A759F] hover:underline whitespace-nowrap"
      >
        Shop &rarr;
      </a>
    </div>
  );
}
