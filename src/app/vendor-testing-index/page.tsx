"use client";

import Link from "next/link";
import { vendors, type Vendor } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

// Rows are DERIVED from the vendor registry (src/data/vendors.ts) — every active vendor
// auto-appears, so this surface can never silently drift out of completeness. Each cell maps
// from that vendor's structured `facts`; "Pending" renders wherever a fact is absent, which is
// honest (not a negative judgment) and matches the page's long-standing convention. Nothing is
// inferred across vendors. Testing detail (methods, contaminants, cold-chain, named lab) was
// migrated into facts from this page's former hand-typed table; see VendorFacts in vendors.ts.
const VERIFIED = "Jul 1, 2026";

interface Row {
  slug: string;
  name: string;
  thirdParty: string;
  publishedCoa: string;
  batchCoa: string;
  methods: string;
  contaminants: string;
  purity: string;
  coaUrl: string;
  coldChain: string;
}

// facts → row cells. publishedCoa and batchCoa both derive from the single `coa` access field:
// any COA availability → published "Yes" (or "On request" / "Yes (login)"); only per-batch and
// library COAs are treated as batch-specific. thirdParty shows the named lab / accreditation, or
// "Pending" when the vendor states testing but names no lab on file.
function deriveRow(slug: string, v: Vendor): Row {
  const f = v.facts ?? {};
  const thirdParty = f.labName
    ? `Yes — ${f.labName}`
    : f.labAccreditation
    ? `Yes — ${f.labAccreditation}-accredited lab`
    : "Pending";
  const publishedCoa =
    f.coa === "on-request"
      ? "On request"
      : f.coa === "login-gated"
      ? "Yes (login)"
      : f.coa
      ? "Yes"
      : "Pending";
  const batchCoa = f.coa === "per-batch" || f.coa === "library" ? "Yes" : "Pending";
  return {
    slug,
    name: v.name,
    thirdParty,
    publishedCoa,
    batchCoa,
    methods: f.testMethods ?? "Pending",
    contaminants: f.contaminants ?? "Pending",
    purity: f.purityStandard ?? "Pending",
    coaUrl: "Pending", // no vendor currently publishes a direct, linkable COA-library URL
    coldChain: f.coldChain ? "Yes" : "Pending",
  };
}

const rows: Row[] = Object.entries(vendors)
  .filter(([, v]) => !v.retired)
  .map(([slug, v]) => deriveRow(slug, v))
  .sort((a, b) => a.name.localeCompare(b.name));

const COLUMNS: { key: keyof Row; label: string }[] = [
  { key: "thirdParty", label: "Third-party testing" },
  { key: "publishedCoa", label: "Published COAs" },
  { key: "batchCoa", label: "Batch-specific COAs" },
  { key: "methods", label: "Testing methods" },
  { key: "contaminants", label: "Sterility / endotoxin / heavy metals" },
  { key: "purity", label: "Purity standard" },
  { key: "coaUrl", label: "Public COA URL" },
  { key: "coldChain", label: "Cold-chain shipping" },
];

function Cell({ value }: { value: string }) {
  const muted = value === "Pending" || value === "On request";
  return (
    <span className={muted ? "text-gray-400 dark:text-slate-500 italic" : "text-gray-700 dark:text-slate-200"}>
      {value === "Pending" ? "Pending verification" : value}
    </span>
  );
}

function downloadCsv() {
  const headers = ["Vendor", "Coupon page", ...COLUMNS.map((c) => c.label), "Last verified"];
  const esc = (s: string) => `"${String(s).replace(/"/g, '""')}"`;
  const lines = [
    headers.map(esc).join(","),
    ...rows.map((r) =>
      [
        r.name,
        `https://profpeptide.com/coupons/${r.slug}`,
        ...COLUMNS.map((c) => r[c.key]),
        VERIFIED,
      ]
        .map(esc)
        .join(",")
    ),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "prof-peptide-vendor-testing-index.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function VendorTestingIndexPage() {
  return (
    <div className="section max-w-6xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Vendor Testing Index" }])} />
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Vendor COA &amp; Testing-Transparency Index</h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-6">Last reviewed: June 2026</p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
          A structured, side-by-side record of what each research-peptide vendor publicly documents about its lab testing &mdash; third-party testing, Certificates of Analysis, purity standards, and testing methods. Every cell is drawn from the vendor&rsquo;s own materials; nothing is inferred and no vendor&rsquo;s claim is applied to another.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
          <strong className="font-semibold text-[#16181B] dark:text-slate-100">&ldquo;Pending verification&rdquo; means we have not yet confirmed that data point from a public source &mdash; it is not a negative judgment.</strong> Cells are filled only when verifiable. See{" "}
          <Link href="/methodology" className="text-[#3A759F] hover:underline">how we compile and verify</Link>{" "}
          this data. All entries are for research-use-only context and are not medical advice. Affiliate relationships do not determine vendor inclusion, ranking, or verification &mdash; see our{" "}
          <Link href="/disclaimer" className="text-[#3A759F] hover:underline">disclaimer</Link>.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button onClick={downloadCsv} className="btn-primary text-sm px-4 py-2">
            Download as CSV
          </button>
          <Link href="/contact" className="text-sm font-medium text-[#3A759F] hover:underline">
            Submit a correction or a COA &rarr;
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto border border-[#D9DEE4] dark:border-slate-700 rounded-xl">
        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#1e293b] text-left">
              <th className="px-3 py-3 font-semibold text-[#16181B] dark:text-slate-100 whitespace-nowrap sticky left-0 bg-gray-50 dark:bg-[#1e293b]">Vendor</th>
              {COLUMNS.map((c) => (
                <th key={c.key} className="px-3 py-3 font-semibold text-[#16181B] dark:text-slate-100 whitespace-nowrap">{c.label}</th>
              ))}
              <th className="px-3 py-3 font-semibold text-[#16181B] dark:text-slate-100 whitespace-nowrap">Last verified</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-t border-gray-100 dark:border-slate-800 align-top">
                <th scope="row" className="px-3 py-3 text-left font-medium whitespace-nowrap sticky left-0 bg-white dark:bg-[#0f172a]">
                  <Link href={`/coupons/${r.slug}`} className="text-[#3A759F] hover:underline">{r.name}</Link>
                </th>
                {COLUMNS.map((c) => (
                  <td key={c.key} className="px-3 py-3"><Cell value={r[c.key]} /></td>
                ))}
                <td className="px-3 py-3 text-gray-500 dark:text-slate-400 whitespace-nowrap">{VERIFIED}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-3xl mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
        For educational and research purposes only. Not medical advice. Not for human use. Testing claims reflect what each vendor documents publicly and may change; verify a current, batch-specific COA before purchase.
      </div>
    </div>
  );
}
