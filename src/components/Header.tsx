"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { CategoryIcon } from "./CategoryIcon";

const categories = [
  { label: "Metabolic & Weight Loss", slug: "metabolic" },
  { label: "Recovery & Tissue Repair", slug: "recovery" },
  { label: "Performance & Energy", slug: "performance" },
  { label: "Cognitive & Nootropic", slug: "cognitive" },
  { label: "Growth Hormone", slug: "growth-hormone" },
  { label: "Skin Health & Anti-Aging", slug: "skin-health" },
  { label: "Gut Health & Immunity", slug: "gut-health" },
  { label: "Longevity", slug: "longevity" },
  { label: "Sexual Health", slug: "sexual-health" },
];

const researchPeptides = [
  { name: "AOD-9604", slug: "aod-9604" },
  { name: "BPC-157", slug: "bpc-157" },
  { name: "CJC-1295", slug: "cjc-1295" },
  { name: "Epitalon", slug: "epitalon" },
  { name: "Follistatin", slug: "follistatin" },
  { name: "GH Stack", slug: "gh-stack" },
  { name: "GHK-Cu", slug: "ghk-cu" },
  { name: "IGF-1 LR3", slug: "igf-1-lr3" },
  { name: "Ipamorelin", slug: "ipamorelin" },
  { name: "Melanotan II", slug: "melanotan-ii" },
  { name: "MOTS-c", slug: "mots-c" },
  { name: "NAD+", slug: "nad-plus" },
  { name: "PT-141", slug: "pt-141" },
  { name: "Retatrutide", slug: "retatrutide" },
  { name: "Selank", slug: "selank" },
  { name: "Semaglutide", slug: "semaglutide" },
  { name: "Semax", slug: "semax" },
  { name: "Sermorelin", slug: "sermorelin" },
  { name: "TB-500", slug: "tb-500" },
  { name: "Tesamorelin", slug: "tesamorelin" },
  { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1" },
  { name: "Tirzepatide", slug: "tirzepatide" },
  { name: "Wolverine Stack", slug: "wolverine-stack" },
];

type DropdownVariant = "categories" | "research";

const nav: { label: string; href: string; dropdown?: DropdownVariant }[] = [
  { label: "Peptides", href: "/peptides", dropdown: "categories" },
  { label: "Supplements", href: "/supplements", dropdown: "categories" },
  { label: "Research", href: "/research", dropdown: "research" },
  { label: "News", href: "/news" },
  { label: "Calculator", href: "/calculator" },
  { label: "Codes", href: "/coupons" },
  { label: "App", href: "/app" },
];

function DropdownPanel({ baseHref, variant }: { baseHref: string; variant: DropdownVariant }) {
  if (variant === "research") {
    return (
      <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl shadow-lg py-2 w-64 max-h-[80vh] overflow-y-auto">
        {researchPeptides.map((p) => (
          <Link
            key={p.slug}
            href={`/research/${p.slug}`}
            className="block px-4 py-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-[#0891b2] hover:text-white transition-colors"
          >
            {p.name}
          </Link>
        ))}
        <div className="border-t border-gray-100 dark:border-slate-700 mt-1 pt-1">
          <Link
            href={baseHref}
            className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-[#0891b2] hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="w-5 text-center text-xs">&rarr;</span>
            Browse by Category
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl shadow-lg py-2 w-64">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`${baseHref}?category=${cat.slug}`}
          className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-[#0891b2] hover:text-white transition-colors"
        >
          <span className="flex-shrink-0 w-5 text-center"><CategoryIcon name={cat.label} /></span>
          {cat.label}
        </Link>
      ))}
      <div className="border-t border-gray-100 dark:border-slate-700 mt-1 pt-1">
        <Link
          href={baseHref}
          className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-[#0891b2] hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
        >
          <span className="w-5 text-center text-xs">&rarr;</span>
          View All {baseHref === "/peptides" ? "Peptides" : "Supplements"}
        </Link>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleEnter = useCallback((href: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(href);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0f172a] border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-9 h-9 flex items-center justify-center rounded-md border-[1.5px] border-[#0891b2] text-[#0891b2] font-semibold text-base leading-none select-none flex-shrink-0">
            Pp
          </span>
          <span className="text-[#0891b2] font-bold text-xl tracking-tight">
            Prof. Peptide
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.href)}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    href={item.href}
                    className={`text-sm transition-all duration-150 hover:scale-105 inline-flex items-center gap-0.5 pb-1 ${
                      pathname.startsWith(item.href)
                        ? "text-[#0891b2] font-medium"
                        : "text-gray-600 dark:text-slate-300 hover:text-[#0891b2]"
                    } ${activeDropdown === item.href ? "text-[#0891b2]" : ""}`}
                  >
                    {item.label}
                    <svg className={`w-3 h-3 ml-0.5 transition-transform duration-150 ${activeDropdown === item.href ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {activeDropdown === item.href && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0">
                      <div className="h-3 w-full" />
                      <div className="w-2 h-2 bg-[#0891b2] rotate-45 mx-auto -mb-1 relative z-10" />
                      <DropdownPanel baseHref={item.href} variant={item.dropdown!} />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-all duration-150 hover:scale-105 ${
                    pathname === item.href
                      ? "text-[#0891b2] font-medium"
                      : "text-gray-600 dark:text-slate-300 hover:text-[#0891b2]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100"
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
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-[#0f172a] px-4 pb-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm border-b border-gray-50 dark:border-slate-800 ${
                pathname.startsWith(item.href) ? "text-[#0891b2] font-medium" : "text-gray-600 dark:text-slate-300"
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
