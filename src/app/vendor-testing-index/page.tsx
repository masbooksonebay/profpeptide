"use client";

import Link from "next/link";

// Every cell below is sourced from the vendor's own /coupons/<slug> page or
// vendors.ts as of the "verified" date. "Pending" = not yet confirmed from a
// public source (not a negative judgment). No cell is guessed or borrowed from
// another vendor. Public COA URL is "Pending" for all rows because no vendor
// currently publishes a direct, linkable COA-library URL on its page.
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

const rows: Row[] = [
  { slug: "almighty-peptides", name: "Almighty Peptides", thirdParty: "Pending", publishedCoa: "Pending", batchCoa: "Pending", methods: "HPLC, mass spec", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "amino-club", name: "Amino Club", thirdParty: "Yes — ISO/IEC 17025 lab", publishedCoa: "Yes", batchCoa: "Yes", methods: "HPLC, ICP-MS, PCR, USP <85>", contaminants: "Heavy metals, sterility, endotoxin", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "amino-x", name: "Amino X", thirdParty: "Yes — Kovera Labs", publishedCoa: "Yes", batchCoa: "Yes", methods: "RP-HPLC, LC-MS", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "ascension-peptides", name: "Ascension Peptides", thirdParty: "Yes — multi-stage", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "behemoth-labz", name: "Behemoth Labz", thirdParty: "Yes — Colmaric Analyticals", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "biocollex", name: "BioCollex", thirdParty: "Pending", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "99%", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "ez-peptides", name: "EZ Peptides", thirdParty: "Yes", publishedCoa: "Yes", batchCoa: "Yes", methods: "Pending", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "glacier-aminos", name: "Glacier Aminos", thirdParty: "Yes — independent US labs", publishedCoa: "Yes", batchCoa: "Yes", methods: "Identity, mass, endotoxin", contaminants: "Endotoxin", purity: "Pending", coaUrl: "Pending", coldChain: "Yes" },
  { slug: "ignite-peptides", name: "Ignite Peptides", thirdParty: "Yes — US independent (ISO/GMP)", publishedCoa: "Yes", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "integrative-peptides", name: "Integrative Peptides", thirdParty: "Yes", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Heavy metals, endotoxin, residual solvents", purity: "≥99%", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "limitless-biotech", name: "Limitless Biotech", thirdParty: "Yes — three independent labs", publishedCoa: "Yes", batchCoa: "Yes", methods: "HPLC, LC-MS", contaminants: "Sterility, endotoxin, contaminants", purity: "≥98.5%", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "midwest-peptide", name: "Midwest Peptide", thirdParty: "Yes", publishedCoa: "Yes", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "oasis-labs", name: "Oasis Labs", thirdParty: "Yes — US labs", publishedCoa: "Yes", batchCoa: "Yes — per-vial QR", methods: "Pending", contaminants: "Pending", purity: "99%", coaUrl: "Pending", coldChain: "Yes" },
  { slug: "peptide-partners", name: "Peptide Partners", thirdParty: "Yes — TrustPointe, Kovera, BioRegen, Chromate", publishedCoa: "Yes", batchCoa: "Yes", methods: "HPLC, USP <85>", contaminants: "Heavy metals, endotoxin, sterility", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "peptides-gg", name: "Peptides.gg", thirdParty: "Yes", publishedCoa: "Yes", batchCoa: "Yes", methods: "Pending", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "purerawz", name: "PureRawz", thirdParty: "Yes", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "purity-peptides", name: "Purity Peptides", thirdParty: "Yes — accredited (N. America)", publishedCoa: "Yes", batchCoa: "Yes", methods: "HPLC, mass spec", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "royal-peptides", name: "Royal Peptides", thirdParty: "Yes — cGMP/ISO labs", publishedCoa: "Yes", batchCoa: "Yes", methods: "Pending", contaminants: "Pending", purity: "99%+", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "spartan-peptides", name: "Spartan Peptides", thirdParty: "Yes — independent", publishedCoa: "Pending", batchCoa: "Pending", methods: "HPLC, mass spec", contaminants: "Pending", purity: "≥98%", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "synthesis-peptides", name: "Synthesis Peptides", thirdParty: "Yes", publishedCoa: "On request", batchCoa: "Yes", methods: "HPLC", contaminants: "Pending", purity: "≥99%", coaUrl: "Pending", coldChain: "Pending" },
  { slug: "vital-core-research", name: "Vital Core Research", thirdParty: "Pending", publishedCoa: "Pending", batchCoa: "Pending", methods: "Pending", contaminants: "Pending", purity: "Pending", coaUrl: "Pending", coldChain: "Pending" },
];

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
