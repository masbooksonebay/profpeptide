"use client";
import { usePathname } from "next/navigation";
import { TRT_FAQ_SLUGS } from "@/data/trt-faq-slugs";
import { TRT_FOOTER_DISCLAIMER } from "@/data/trt-disclaimers";

// The footer's one-line disclaimer, varied by route — extracted from Footer.tsx so the RUO/
// not-for-human-consumption line it carried sitewide can be gated off the 7 TRT FAQ pages, where
// it is factually wrong (testosterone is a prescription medicine used by humans under medical
// supervision, not a research chemical). See trt-faq-slugs.ts / trt-disclaimers.ts.
//
// WHY A CLIENT COMPONENT WITH usePathname() IS SAFE HERE, NOT A HYDRATION-FLASH RISK: this
// mirrors the site's own existing Disclaimer.tsx (the /peptides amber box), which uses the exact
// same pattern. Verified directly against the prerendered build output before relying on it:
// Disclaimer.tsx's route-gated text IS present in .next/server/app/peptides/bpc-157.html — Next
// resolves usePathname() during static generation itself, so the STATIC HTML already carries the
// correct per-route text. There is no swap-after-hydration and nothing a crawler would miss.
export default function FooterDisclaimer() {
  const pathname = usePathname();
  const isTrt = TRT_FAQ_SLUGS.some((slug) => pathname === `/faq/${slug}`);
  return (
    <p className="text-xs text-gray-400 dark:text-slate-500 text-center sm:text-right max-w-sm">
      {isTrt
        ? TRT_FOOTER_DISCLAIMER
        : "For educational and research purposes only. Not medical advice. Not for human consumption."}
    </p>
  );
}
