"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { emoji: "\uD83D\uDD25", label: "Metabolic & Weight Loss", slug: "metabolic" },
  { emoji: "\u26A1", label: "Recovery & Tissue Repair", slug: "recovery" },
  { emoji: "\uD83C\uDFC3", label: "Performance & Energy", slug: "performance" },
  { emoji: "\uD83E\uDDE0", label: "Cognitive & Nootropic", slug: "cognitive" },
  { emoji: "\uD83E\uDDEC", label: "Growth Hormone", slug: "growth-hormone" },
  { emoji: "\u2728", label: "Skin Health & Anti-Aging", slug: "skin-health" },
  { emoji: "\uD83D\uDEE1\uFE0F", label: "Gut Health & Immunity", slug: "gut-health" },
  { emoji: "\uD83C\uDF3F", label: "Longevity", slug: "longevity" },
  { emoji: "\u2764\uFE0F", label: "Sexual Health", slug: "sexual-health" },
];

const nav = [
  { label: "Peptides", href: "/peptides", dropdown: true },
  { label: "Supplements", href: "/supplements", dropdown: true },
  { label: "Research", href: "/research" },
  { label: "Calculator", href: "/calculator" },
  { label: "Discount Codes", href: "/coupons" },
  { label: "FAQ", href: "/faq" },
  { label: "Get the App", href: "/app" },
];

function DropdownMenu({ baseHref, onClose }: { baseHref: string; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-0 mt-0 bg-white border border-gray-100 rounded-xl shadow-lg py-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`${baseHref}?category=${cat.slug}`}
          onClick={onClose}
          className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-600 hover:bg-[#0d9488] hover:text-white transition-colors"
        >
          <span className="text-base flex-shrink-0 w-5 text-center">{cat.emoji}</span>
          {cat.label}
        </Link>
      ))}
      <div className="border-t border-gray-100 mt-1 pt-1">
        <Link
          href={baseHref}
          onClick={onClose}
          className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-[#0D7377] hover:bg-gray-50 transition-colors"
        >
          <span className="w-5 text-center text-xs">&rarr;</span>
          View All {baseHref === "/peptides" ? "Peptides" : "Supplements"}
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#0D7377] font-bold text-xl tracking-tight">
            Prof. Peptide
          </span>
          <span className="hidden sm:inline text-xs text-gray-400 font-normal mt-0.5">
            Research &amp; Education
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm transition-all duration-150 hover:scale-105 inline-flex items-center gap-0.5 ${
                    pathname.startsWith(item.href)
                      ? "text-[#0D7377] font-medium"
                      : "text-gray-600 hover:text-[#0D7377]"
                  }`}
                >
                  {item.label}
                  <svg className={`w-3 h-3 ml-0.5 transition-transform duration-150 ${activeDropdown === item.href ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeDropdown === item.href && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  >
                    <div className="w-2 h-2 bg-[#0D7377] rotate-45 mx-auto -mb-1 relative z-10" />
                    <DropdownMenu baseHref={item.href} onClose={() => setActiveDropdown(null)} />
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-all duration-150 hover:scale-105 ${
                  pathname === item.href
                    ? "text-[#0D7377] font-medium"
                    : "text-gray-600 hover:text-[#0D7377]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm border-b border-gray-50 ${
                pathname.startsWith(item.href) ? "text-[#0D7377] font-medium" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
