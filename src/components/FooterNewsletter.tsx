"use client";

import { usePathname } from "next/navigation";
import NewsletterSignup from "@/components/NewsletterSignup";

// Route-aware wrapper for the footer's newsletter row. The homepage (/) carries its OWN elevated
// signup card (page.tsx, variant="card") a screen above the footer, so a second footer form there
// reads as repetitive — suppress it on / ONLY. Every other page keeps the footer form (its only
// signup). Same idiom as Disclaimer.tsx / Header.tsx: a small client component using usePathname()
// in the persistent chrome. SSR-correct — usePathname() resolves during the server render, so the
// whole row (border included) is simply absent from the homepage's initial HTML, not hidden after
// hydration. The bordered wrapper lives here (not in Footer) so nothing empty renders on /.
export default function FooterNewsletter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="border-t border-[#D9DEE4] dark:border-slate-700 pt-8 pb-8">
      <NewsletterSignup variant="footer" />
    </div>
  );
}
