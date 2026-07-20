import type { Metadata } from "next";
import Image from "next/image";
import PpMark from "@/components/PpMark";

// Local-only A/B for the header "Pp" logo: the current traced SVG mark vs two
// candidate PNGs (with border / without border), each shown inside a faithful
// replica of the real header bar so they're judged in true header context.
// Noindexed and excluded from the sitemap (/prototype/*). The live Header.tsx,
// PpMark.tsx, and the favicon/icon set are all untouched — nothing here ships.
export const metadata: Metadata = {
  title: "Header logo A/B — border vs borderless (dev)",
  robots: { index: false, follow: false },
};

// Replica of the real header lockup (Header.tsx): white bar, same tile sizing
// (w-12 h-12 md:w-14 md:h-14) and wordmark, with a faux nav on the right so the
// spacing/context matches the shipped header.
function HeaderBar({ label, mark }: { label: string; mark: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">{label}</p>
      <header className="bg-white border-b border-gray-100 rounded-lg ring-1 ring-gray-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex items-center justify-between">
          <span className="flex items-end gap-2 md:gap-2.5">
            {mark}
            <span className="text-[#1e2d3d] font-extrabold text-xl md:text-2xl tracking-tight leading-none -translate-y-[3px]">
              Prof. Peptide
            </span>
          </span>
          <span className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <span>Peptides</span>
            <span>Calculator</span>
            <span>Codes</span>
            <span>App</span>
          </span>
        </div>
      </header>
    </div>
  );
}

const pngCls = "w-12 h-12 md:w-14 md:h-14 flex-shrink-0 object-contain";

export default function LogoABPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-[#1e2d3d] mb-1">Header logo — A/B (border vs borderless)</h1>
      <p className="text-sm text-gray-500 mb-8">
        Dev-only preview. Each row is a replica of the real header bar. The live header, the
        <code className="mx-1 px-1 rounded bg-gray-100 font-mono text-xs">PpMark</code>
        component, and the favicon/icon set are all unchanged.
      </p>

      <HeaderBar
        label="Current — traced SVG mark (shipped)"
        mark={<PpMark className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0" />}
      />
      <HeaderBar
        label="Variant 1 — PNG WITH border"
        mark={
          <Image
            src="/logo-ab/pp-border.png"
            alt="Prof. Peptide — with border"
            width={56}
            height={56}
            className={pngCls}
            priority
          />
        }
      />
      <HeaderBar
        label="Variant 2 — PNG WITHOUT border"
        mark={
          <Image
            src="/logo-ab/pp-borderless.png"
            alt="Prof. Peptide — without border"
            width={56}
            height={56}
            className={pngCls}
            priority
          />
        }
      />
    </div>
  );
}
