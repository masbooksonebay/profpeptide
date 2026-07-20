/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

// Noindexed dev preview for the regenerated coupon-tag favicon set (fill locked
// to #3A759F). Renders the icons at ACTUAL tab sizes (16/24/32/48/64) on light
// and dark tab backgrounds so legibility can be judged at 16px, not full res.
// Not linked; excluded from the sitemap (/prototype/*).
export const metadata: Metadata = {
  title: "Favicon preview (dev)",
  robots: { index: false, follow: false },
};

const SIZES = [16, 24, 32, 48, 64];

function SizeRow({ src, label }: { src: string; label: string }) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-wider opacity-60 mb-2">{label}</p>
      <div className="flex items-end gap-6">
        {SIZES.map((s) => (
          <div key={s} className="flex flex-col items-center gap-1.5">
            <img src={src} alt={`${label} at ${s}px`} width={s} height={s} style={{ width: s, height: s }} />
            <span className="text-[10px] opacity-50">{s}px</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabPanel({ bg, dark, name }: { bg: string; dark: boolean; name: string }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-black/10" style={{ background: bg, color: dark ? "#f1f5f9" : "#16181B" }}>
      <p className="text-sm font-semibold mb-5">{name}</p>
      <div className="space-y-6">
        <SizeRow src="/icon.svg" label="icon.svg (vector — what modern tabs use)" />
        <SizeRow src="/favicon-48.png" label="favicon-48.png (raster)" />
        <SizeRow src="/favicon.ico" label="favicon.ico (legacy tabs)" />
      </div>
    </div>
  );
}

export default function FaviconPreviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-[#16181B] mb-1">Favicon preview — coupon tag (#3A759F)</h1>
      <p className="text-sm text-gray-500 mb-4">
        Dev-only. The new set is color-locked to exactly <code className="px-1 rounded bg-gray-100 font-mono text-xs">#3A759F</code>,
        transparent background, transparent eyelet knockout. Sizes below are the real tab sizes.
      </p>
      <div className="mb-8 flex items-center gap-6">
        <img src="/icon.svg" alt="coupon tag 128px" width={128} height={128} style={{ width: 128, height: 128 }} />
        <p className="text-sm text-gray-500 max-w-sm">
          128px reference at left. Judge the rows below at <strong>16px</strong> for real tab/SERP legibility.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TabPanel bg="#FFFFFF" dark={false} name="On a white tab" />
        <TabPanel bg="#0f172a" dark name="On a dark tab" />
      </div>
      <p className="mt-8 text-sm text-gray-500">
        The real browser tab for <strong>any</strong> page on this server already shows the new favicon
        (declared as <code className="px-1 rounded bg-gray-100 font-mono text-xs">/icon.svg</code> first,
        then the PNG/ICO fallbacks) — look at this tab, or open the homepage.
      </p>
    </div>
  );
}
