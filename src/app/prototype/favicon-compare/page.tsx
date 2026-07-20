/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

// Noindexed dev preview comparing the current coupon-tag favicon against a
// conical-flask variant. Flask geometry is Lucide "FlaskConical" (lucide-static
// v1.25.0, ISC license — permissive), recolored to exactly #3A759F. Both a
// stroke version and a solid-fill silhouette (the outline path filled) are shown,
// because thin strokes vanish at 16px. The live coupon-tag set (/icon.svg,
// favicon-*, apple-icon) is NOT modified — this page only renders marks for
// comparison. Excluded from the sitemap (/prototype/*).
export const metadata: Metadata = {
  title: "Favicon compare — coupon tag vs conical flask (dev)",
  robots: { index: false, follow: false },
};

const SIZES = [16, 24, 32, 48, 64];
const FILL = "#3A759F";

// Lucide FlaskConical (ISC) — recolored stroke #3A759F, padded viewBox, transparent.
function FlaskStroke({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="-3 -3 30 30" fill="none" stroke={FILL} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
      <path d="M6.453 15h11.094" />
      <path d="M8.5 2h7" />
    </svg>
  );
}

// Solid silhouette: Lucide's flask outline path filled (auto-closed across the
// neck top), fill #3A759F — reads at favicon size where the stroke does not.
function FlaskSolid({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="-3 -3 30 30">
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2 Z" fill={FILL} />
    </svg>
  );
}

type Mark = { label: string; render: (s: number) => React.ReactNode };
const MARKS: Mark[] = [
  { label: "Coupon tag (current, shipped)", render: (s) => <img src="/icon.svg" alt={`coupon tag ${s}px`} width={s} height={s} style={{ width: s, height: s }} /> },
  { label: "Flask — solid fill (favicon-viable)", render: (s) => <FlaskSolid size={s} /> },
  { label: "Flask — stroke (Lucide default)", render: (s) => <FlaskStroke size={s} /> },
];

function Panel({ bg, dark, name }: { bg: string; dark: boolean; name: string }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-black/10" style={{ background: bg, color: dark ? "#f1f5f9" : "#16181B" }}>
      <p className="text-sm font-semibold mb-5">{name}</p>
      <div className="space-y-6">
        {MARKS.map((m) => (
          <div key={m.label}>
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">{m.label}</p>
            <div className="flex items-end gap-6">
              {SIZES.map((s) => (
                <div key={s} className="flex flex-col items-center gap-1.5">
                  <div style={{ width: s, height: s }} className="flex items-center justify-center">{m.render(s)}</div>
                  <span className="text-[10px] opacity-50">{s}px</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FaviconComparePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-[#16181B] mb-1">Favicon compare — coupon tag vs conical flask</h1>
      <p className="text-sm text-gray-500 mb-2">
        Flask geometry: <strong>Lucide &ldquo;FlaskConical&rdquo;</strong> (lucide-static v1.25.0, <strong>ISC license</strong>),
        recolored to exactly <code className="px-1 rounded bg-gray-100 font-mono text-xs">#3A759F</code>, transparent background.
        The shipped coupon-tag set is unchanged — this is comparison-only.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Judge at <strong>16px</strong>. Measured: the stroke flask has <strong>0 fully-opaque pixels at 16px</strong>
        (it fades out), while the solid flask keeps a readable silhouette — so the solid version is the favicon-viable one.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <Panel bg="#FFFFFF" dark={false} name="On a white tab" />
        <Panel bg="#0f172a" dark name="On a dark tab" />
      </div>
    </div>
  );
}
