import { vendors } from "@/data/vendors";

/**
 * Renders a vendor's current discount code, DERIVED from the registry (src/data/vendors.ts).
 *
 * Use this in prose instead of typing a code literal like "(PROF15)". A hardcoded code in
 * free prose is the one class check:codes can't verify — there's no slug to bind it to, and a
 * code like PROF15 maps to several vendors, so it's ambiguous. Deriving removes the literal
 * entirely: it can't go stale and needs no guard. Pure data render — safe in server or client
 * components.
 *
 *   peptides.gg discount code (<VendorCode slug="peptides-gg" />)
 */
export function VendorCode({ slug }: { slug: string }) {
  return <>{vendors[slug]?.code ?? ""}</>;
}
