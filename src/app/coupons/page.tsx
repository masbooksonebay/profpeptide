"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/CategoryIcon";
import {
  vendors as registry,
  regionFlag,
  CODES_VERIFIED_DATE,
  type Vendor as RegistryVendor,
} from "@/data/vendors";

interface Vendor {
  name: string;
  url: string;
  code: string;
  discount: string;
  region: string;
  editorsPick?: boolean;
  bestDeal?: boolean;
  purityBadge?: string;
  specialBadge?: string;
  specialBadgeColor?: string;
  description?: string;
  detailPage?: string;
  comingSoon?: boolean;
}

interface VendorSection {
  label: string;
  vendors: Vendor[];
}

/**
 * Vendor list is DERIVED from the registry (src/data/vendors.ts) — the single
 * source of truth. Active (non-retired) vendors are partitioned into sections by
 * their own registry flags, so a new vendor appears here automatically and can't
 * be forgotten (mirrors the /vendors directory and the sitemap generation).
 *   Featured Vendors → editorsPick
 *   Best Deals       → bestDeal (and not already featured)
 *   US Vendors       → US region, otherwise unflagged
 *   International    → non-US region, otherwise unflagged
 * The partition is complete and non-overlapping: every active vendor lands in
 * exactly one section.
 */
function toCard(v: RegistryVendor): Vendor {
  return {
    name: v.name,
    url: v.url,
    code: v.code,
    discount: v.discount,
    region: `${regionFlag[v.region]} ${v.region}`,
    editorsPick: v.editorsPick,
    bestDeal: v.bestDeal,
    comingSoon: v.comingSoon,
    detailPage: v.detailPage,
  };
}

const activeVendors = Object.values(registry).filter((v) => !v.retired);
const byName = (a: RegistryVendor, b: RegistryVendor) => a.name.localeCompare(b.name);

const sections: VendorSection[] = (
  [
    { label: "Featured Vendors", vendors: activeVendors.filter((v) => v.editorsPick) },
    { label: "Best Deals", vendors: activeVendors.filter((v) => v.bestDeal && !v.editorsPick) },
    {
      label: "US Vendors",
      vendors: activeVendors.filter((v) => v.region === "US" && !v.editorsPick && !v.bestDeal),
    },
    {
      label: "International",
      vendors: activeVendors.filter((v) => v.region !== "US" && !v.editorsPick && !v.bestDeal),
    },
  ] as const
)
  .map((s) => ({ label: s.label, vendors: [...s.vendors].sort(byName).map(toCard) }))
  .filter((s) => s.vendors.length > 0);

function CodeBox({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="block w-full bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 px-4 py-2.5 rounded-lg text-sm font-mono font-bold text-[#16181B] dark:text-slate-100 tracking-widest text-center cursor-pointer hover:bg-gray-100 dark:bg-slate-700 transition-colors"
    >
      {copied ? (
        <span className="text-[#3A759F] font-sans font-medium tracking-normal">Copied!</span>
      ) : (
        code
      )}
    </button>
  );
}

function VendorCard({ v }: { v: Vendor }) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-200 ${
        v.detailPage
            ? "border border-[#D9DEE4] dark:border-slate-600 shadow-sm hover:shadow-md hover:border-[#3A759F]/40 bg-white dark:bg-[#0f172a]"
            : "border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md bg-white dark:bg-[#0f172a]"
      }`}
    >
      <div
        className={`border-b border-gray-100 dark:border-slate-700 flex items-center justify-between ${
          "px-5 py-3.5 bg-gray-50 dark:bg-[#1e293b]"
        }`}
      >
        <h2
          className={`font-bold leading-tight ${
            "text-base"
          }`}
        >
          {v.detailPage ? (
            <Link href={v.detailPage} className="inline-block text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-all duration-150 hover:scale-105 origin-left">
              {v.name}
            </Link>
          ) : (
            <span className="text-[#16181B] dark:text-slate-100">{v.name}</span>
          )}
        </h2>
        <span className="text-xs font-bold text-[#3A759F] bg-[#3A759F]/15 px-2.5 py-1 rounded-full whitespace-nowrap">
          {v.discount}
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
            Verified
          </span>
          {v.editorsPick && (
            <span className="text-xs bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-2 py-0.5 rounded-full font-semibold">
              Editor&apos;s Pick
            </span>
          )}
          {v.bestDeal && (
            <span className="text-xs bg-green-100 text-green-800 border border-green-300 px-2 py-0.5 rounded-full font-medium">
              Best Deal
            </span>
          )}
          {v.purityBadge && (
            <span className="text-xs bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full font-medium">
              {v.purityBadge}
            </span>
          )}
          {v.specialBadge && (
            <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${v.specialBadgeColor || "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 border-gray-300"}`}>
              {v.specialBadge}
            </span>
          )}
          {v.region && (
            <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full">
              {v.region}
            </span>
          )}
        </div>

        {v.description && (
          <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-3">{v.description}</p>
        )}

        <div className="mb-4">
          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider font-medium mb-1">{v.code ? "Click to copy code" : "Discount code"}</p>
          {v.code ? (
            <CodeBox code={v.code} />
          ) : (
            <div className="w-full bg-gray-50 dark:bg-[#1e293b] border border-[#D9DEE4] dark:border-slate-600 px-4 py-2.5 rounded-lg text-sm text-center text-gray-500 dark:text-slate-400 italic">Coming soon</div>
          )}
        </div>

        <a
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center block"
        >
          Shop Now &rarr;
        </a>

        {v.detailPage && (
          <Link
            href={v.detailPage}
            className="block w-full text-center text-xs font-medium text-[#3A759F] hover:text-[#0a5c60] mt-3 py-2 rounded-lg hover:bg-[#3A759F]/10 transition-colors"
          >
            Learn More &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

export default function CouponsPage() {
  return (
    <div className="section max-w-3xl">
      <span className="tag mb-3 inline-block">Updated Regularly</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-8">Discount Codes</h1>

      <div className="flex items-center justify-center gap-2.5 mb-8 py-3.5 px-4 bg-[#3A759F]/10 border border-[#3A759F]/30 rounded-lg">
        <svg className="w-5 h-5 text-[#3A759F] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-base font-bold text-[#16181B] dark:text-white tracking-tight">
          Verified codes &mdash; {CODES_VERIFIED_DATE}
        </p>
      </div>

      <div className="space-y-8 mb-10">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3 pb-1.5 border-b border-gray-100 dark:border-slate-700">
              {section.label}
            </p>
            <div className="space-y-4">
              {section.vendors.map((v) => (
                <VendorCard key={v.name} v={v} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link href="/vendor-testing-index" className="card group block mb-4">
        <span className="text-[#3A759F] mb-3 block"><Icon name="shield-block-outline" /></span>
        <h3 className="text-base font-semibold text-[#16181B] dark:text-slate-100 mb-1.5 group-hover:text-[#3A759F] transition-colors">Vendor COA &amp; Testing-Transparency Index</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          A side-by-side record of every vendor&rsquo;s documented third-party testing, COAs, purity standards, and testing methods — with honest &ldquo;pending&rdquo; where unconfirmed.
        </p>
        <span className="text-xs font-medium text-[#3A759F] group-hover:underline">Compare vendor testing &rarr;</span>
      </Link>

      <Link href="/best-peptide-vendors" className="card group block mb-8">
        <span className="text-[#3A759F] mb-3 block"><Icon name="shield-block-outline" /></span>
        <h3 className="text-base font-semibold text-[#16181B] dark:text-slate-100 mb-1.5 group-hover:text-[#3A759F] transition-colors">Featured Vendors</h3>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
          Our vetted list of research peptide suppliers — with third-party testing, published COAs, and the quality criteria we use to include them.
        </p>
        <span className="text-xs font-medium text-[#3A759F] group-hover:underline">See our full vetted vendor list &rarr;</span>
      </Link>
    </div>
  );
}
