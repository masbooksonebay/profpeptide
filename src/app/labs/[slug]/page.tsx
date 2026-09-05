import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { labs, type LabProfile, ACCREDITATION_CHECKED_DATE } from "@/data/labs";
import { vendorsUsingLab } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import BackLink from "@/components/BackLink";

export function generateStaticParams() {
  return labs.map((l) => ({ slug: l.slug }));
}

function lookup(slug: string): LabProfile | null {
  return labs.find((l) => l.slug === slug) ?? null;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lab = lookup(params.slug);
  if (!lab) return {};
  return {
    ...buildPageMetadata({
      path: `/labs/${lab.slug}`,
      title: `${lab.name} — Lab Profile & Accreditation Check | Prof. Peptide`,
      description: `${lab.name} (${lab.location}): what its Certificates of Analysis test, how to verify one, and what Prof. Peptide found checking its accreditation claim against A2LA, ANAB, and PJLA's own directories.`,
    }),
    robots: { index: true, follow: true },
  };
}

const FINDING_LABEL: Record<string, string> = {
  "no-record": "No accreditation record found",
  "unconfirmed-lead": "Possible record found — identity unconfirmed",
};

export default function LabProfilePage({ params }: { params: { slug: string } }) {
  const lab = lookup(params.slug);
  if (!lab) notFound();
  const vendors = vendorsUsingLab(lab.slug);

  return (
    <div className="section max-w-4xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Labs", path: "/labs" }, { name: lab.name }])} />
      <BackLink href="/labs">Back to Labs</BackLink>

      <span className="tag mb-3 inline-block">Lab Profile</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-2">{lab.name}</h1>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-8">{lab.location}</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Identity</h2>
        <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed">{lab.identity}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Accreditation</h2>
        <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-4">{lab.accreditationClaim}</p>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-3">
          Prof. Peptide checked {lab.name} against the searchable directories published by three accreditation bodies, as of {ACCREDITATION_CHECKED_DATE}:
        </p>
        <div className="space-y-3">
          {lab.accreditationFindings.map((f) => (
            <div key={f.body} className="border border-[#D9DEE4] dark:border-slate-700 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100">
                {f.body}: {FINDING_LABEL[f.status]}
              </p>
              {f.status === "unconfirmed-lead" && (
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">{f.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {lab.cloneWarning && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">A cloned report template</h2>
          <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed">{lab.cloneWarning}</p>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">What its reports contain</h2>
        <div className="space-y-3">
          {lab.panel.map((p) => (
            <div key={p.name} className="border border-[#D9DEE4] dark:border-slate-700 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold text-[#16181B] dark:text-slate-100">
                {p.name} <span className="font-normal text-gray-400 dark:text-slate-500">· {p.method}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">{p.measures}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">How verification works</h2>
        <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-3">{lab.verification.mechanics}</p>
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{lab.verification.limits}</p>
      </section>

      {vendors.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Which PP-listed vendors use this lab</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {vendors.map((v) => (
              <li key={v.slug}>
                <Link href={`/coupons/${v.slug}`} className="text-sm text-[#3A759F] hover:underline">{v.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Limitations</h2>
        <ul className="list-disc pl-5 space-y-2">
          {lab.limitations.map((l, i) => (
            <li key={i} className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{l}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-gray-100 dark:border-slate-800 pt-6">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">Sources</h2>
        <ul className="space-y-1">
          {lab.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel={s.kind === "lab" ? "nofollow noopener" : "noopener noreferrer"}
                className="text-xs text-[#3A759F] hover:underline break-words"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
