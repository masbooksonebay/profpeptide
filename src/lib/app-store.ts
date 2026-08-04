/**
 * The Prof. Peptide iOS App Store URL — the SINGLE source of truth for every outbound
 * link to the app. Import this; never hardcode the URL (two copies drift, and it's the
 * exact class of duplication that has bitten this repo).
 *
 * This is Apple's OWN canonical form: the storefront country (/us/) and the full-app-name
 * slug (prof-peptide-protocol-tracker) that Apple 301-redirects the bare
 * .../app/prof-peptide/id... link to. Linking straight to the canonical removes the redirect
 * hop and makes our outbound link byte-match the URL Apple itself canonicalizes to.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/prof-peptide-protocol-tracker/id6761995269";
