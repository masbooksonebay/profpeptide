// The affiliate-disclosure line. Two variants, same box:
//   "vendor"   (default) — the existing wording, for a page monetised by a vendor discount code /
//               product-sale affiliate link. Every current call site uses this; unchanged.
//   "referral" — for a page monetised by a REFERRAL fee rather than a product sale (e.g. a future
//               TRT page linking to a telehealth provider, no discount code, no product purchase).
//               🔴 MECHANISM AND WORDING ONLY, per the task that added this (2026-09-04): no
//               provider is named or linked anywhere in this file or wired to any page. This
//               variant renders nowhere yet — it exists so a disclosure can be added the moment a
//               referral link exists, without inventing the wording under deadline then.
export default function PageDisclaimer({ variant = "vendor" }: { variant?: "vendor" | "referral" }) {
  return (
    <p className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-800 text-xs text-gray-400 dark:text-slate-500 leading-relaxed">
      {variant === "referral"
        ? "We may earn a referral fee from healthcare provider links on this page."
        : "We may earn commissions from peptide vendor affiliate links."}
    </p>
  );
}
