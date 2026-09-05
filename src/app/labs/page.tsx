import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { labs } from "@/data/labs";

export const metadata = {
  ...buildPageMetadata({
    path: "/labs",
    title: "Peptide Testing Labs — Accreditation & Verification | Prof. Peptide",
    description: "The independent laboratories behind PP-listed vendors' Certificates of Analysis: what each lab claims, what Prof. Peptide found checking that claim against A2LA, ANAB, and PJLA, and how to verify a certificate yourself.",
  }),
  robots: { index: true, follow: true },
};

export default function LabsIndexPage() {
  return (
    <div className="section max-w-3xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Labs" }])} />
      <span className="tag mb-3 inline-block">Testing & Verification</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Peptide Testing Labs</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
        The independent laboratories that issue the Certificates of Analysis PP-listed vendors publish. Each profile reports what Prof. Peptide could verify — accreditation claims checked against the accrediting bodies&apos; own directories, what a lab&apos;s reports actually test, and how to verify a certificate yourself — never a ranking of one lab against another.
      </p>

      <div className="space-y-3">
        {labs.map((lab) => (
          <Link
            key={lab.slug}
            href={`/labs/${lab.slug}`}
            className="block border border-[#D9DEE4] dark:border-slate-600 bg-[#F4F6F8] dark:bg-slate-800/40 rounded-xl px-5 py-4 hover:border-brand transition-colors"
          >
            <span className="text-base font-semibold text-[#16181B] dark:text-slate-100">{lab.name}</span>
            <p className="text-xs text-gray-600 dark:text-slate-400 mt-1 leading-relaxed">{lab.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
