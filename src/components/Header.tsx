"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { CategoryIcon } from "./CategoryIcon";
import SearchOverlay from "./SearchOverlay";
import PpMark from "./PpMark";

const categories = [
  { label: "Metabolic & Weight Loss", slug: "metabolic" },
  { label: "Recovery & Tissue Repair", slug: "recovery" },
  { label: "Performance & Energy", slug: "performance" },
  { label: "Cognitive & Nootropic", slug: "cognitive" },
  { label: "Growth Hormone", slug: "growth-hormone" },
  { label: "Skin Health & Anti-Aging", slug: "skin-health" },
  { label: "Gut Health & Immunity", slug: "gut-health" },
  { label: "Sleep & Recovery", slug: "sleep-recovery" },
  { label: "Longevity", slug: "longevity" },
  { label: "Bioregulators", slug: "bioregulators" },
  { label: "Sexual Health", slug: "sexual-health" },
];

type DropdownVariant = "categories" | "items";

type NavItem = { label: string; href: string };

type NavEntry = {
  label: string;
  href: string;
  dropdown?: DropdownVariant;
  /** child links for the "items" dropdown variant */
  items?: NavItem[];
  /** pathname prefixes that mark this entry active; defaults to [href] */
  matchHrefs?: string[];
};

const nav: NavEntry[] = [
  { label: "Peptides", href: "/peptides", dropdown: "categories" },
  {
    label: "Calculator & Tools",
    href: "/calculator",
    dropdown: "items",
    items: [
      { label: "Dosage Calculator", href: "/calculator" },
      { label: "Track / Log", href: "/log" },
      // Add tools here as they ship, e.g. { label: "Price Comparison", href: "/prices" }
    ],
    matchHrefs: ["/calculator", "/log"],
  },
  { label: "Codes", href: "/coupons" },
  { label: "App", href: "/app" },
];

function DropdownPanel({ entry }: { entry: NavEntry }) {
  if (entry.dropdown === "items") {
    return (
      <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl shadow-lg py-2 w-56">
        {entry.items?.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block px-4 py-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-brand hover:text-white transition-colors"
          >
            {it.label}
          </Link>
        ))}
      </div>
    );
  }

  // "categories" variant (default): peptide category quick-links
  const baseHref = entry.href;
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isActive = (entry: NavEntry) => {
    const hrefs = entry.matchHrefs ?? [entry.href];
    return hrefs.some((h) => pathname === h || pathname.startsWith(h + "/"));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
    };
    // Lets other components (e.g. the homepage HeroSearch) open the same overlay.
    const onOpenSearch = () => setSearchOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search", onOpenSearch);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", onOpenSearch);
    };
  }, []);

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-end gap-2 md:gap-2.5">
          <PpMark className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0" />
          <span className="text-[#1e2d3d] dark:text-slate-100 font-extrabold text-xl md:text-2xl tracking-tight leading-none -translate-y-[3px]">
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
                      isActive(item)
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
                      <DropdownPanel entry={item} />
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
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-md text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100 transition-colors"
            aria-label="Open search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
            </svg>
          </button>
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
          {nav.map((item) =>
            item.dropdown === "items" && item.items ? (
              // No mobile dropdown mechanism — flatten the tool links inline
              // under a section label so they never vanish on mobile.
              <div key={item.href}>
                <p className="pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500">
                  {item.label}
                </p>
                {item.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 pl-3 text-sm border-b border-gray-50 dark:border-slate-800 ${
                      pathname === it.href ? "text-[#0891b2] font-medium" : "text-gray-600 dark:text-slate-300"
                    }`}
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            ) : (
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
            )
          )}
        </div>
      )}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
