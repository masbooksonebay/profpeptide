// scripts/lib/gsc-auth.mjs — service-account auth for Google Search Console API calls.
//
// SHARED by gsc-inspect.mjs and gsc-analytics.mjs so the JWT-signing logic exists once. Neither
// script is part of the Next app (this is operational tooling, not site code), so this lives
// under scripts/lib rather than src/lib.
//
// 🔴 TOKEN REFRESH IS NOT OPTIONAL. Measured directly: a 347-URL gsc-inspect.mjs run against
// Google's URL Inspection API (which is slow — several seconds per call, not this script's own
// pacing) took long enough that the access token issued at the start EXPIRED partway through —
// 212 of 347 succeeded, then every remaining request failed with HTTP 401
// ACCESS_TOKEN_EXPIRED. The first version of this file returned a single token with no expiry
// tracking at all. `TokenManager` below fixes that: it re-authenticates proactively before the
// token would expire, so a caller never has to think about it — every call site just awaits
// `getToken()`.
//
// WHY HAND-ROLLED RATHER THAN `googleapis`/`google-auth-library`: the site has zero Google-API
// dependencies today, and a service-account bearer flow is ~40 lines with Node's built-in
// node:crypto (RS256 sign) and global fetch (Node 25) — pulling in a client library for that is
// not a trade worth making for two scripts. If GSC usage grows beyond these two, revisit.
//
// FLOW (RFC 7523 JWT Bearer, the standard service-account grant — no consent screen, no user):
//   1. Build a JWT: header {alg:RS256,typ:JWT}, claims {iss:<service-account email>, scope,
//      aud:"https://oauth2.googleapis.com/token", iat, exp:iat+3600}.
//   2. Sign it with the service account's PRIVATE KEY (RSA-SHA256) — the key never leaves this
//      process; only the resulting signature crosses the network.
//   3. POST the signed JWT to Google's token endpoint; get back a short-lived access_token.
//   4. Use that as `Authorization: Bearer <token>` on the actual API calls.
//
// 🔒 THE KEY FILE ITSELF IS NEVER LOGGED, PRINTED OR ECHOED — only read into memory here and
// used to sign. Callers pass a PATH, never contents.
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";

function base64url(input) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function signJwt({ clientEmail, privateKey, scope }) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({ iss: clientEmail, scope, aud: TOKEN_URL, iat: now, exp: now + 3600 }),
  );
  const unsigned = `${header}.${claims}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(privateKey, "base64");
  const sig = signature.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return `${unsigned}.${sig}`;
}

/**
 * Exchange the service-account key at `keyPath` for a short-lived OAuth2 access token scoped to
 * `scope` (space-separated if more than one). Returns { accessToken, expiresAt } — expiresAt is
 * an epoch-ms Date.now() value, using Google's OWN `expires_in` from the response rather than
 * assuming the usual 3600s, so a shorter-than-usual grant is still tracked correctly.
 * Throws with a message that distinguishes "key file unreadable/malformed" from "Google rejected
 * the assertion" — the two failure classes that actually need different fixes.
 */
export async function requestAccessToken(keyPath, scope) {
  let key;
  try {
    const raw = readFileSync(keyPath, "utf8");
    key = JSON.parse(raw);
  } catch (e) {
    throw new Error(
      `Could not read/parse the service-account key at ${keyPath}: ${e.message}\n` +
        `(Path only — contents are never printed. Confirm the file exists and is valid JSON.)`,
    );
  }
  if (!key.client_email || !key.private_key) {
    throw new Error(
      `Key file at ${keyPath} is missing client_email or private_key — not a service-account JSON.`,
    );
  }

  const assertion = signJwt({ clientEmail: key.client_email, privateKey: key.private_key, scope });
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    // A failure HERE means Google rejected the JWT/assertion itself (bad key, clock skew,
    // scope Google doesn't recognise) — distinct from a 403 on the API call below, which means
    // the token was ISSUED fine but the service account lacks permission on the property.
    throw new Error(
      `Token exchange failed: HTTP ${res.status} ${res.statusText} — ${JSON.stringify(body)}\n` +
        `This is a service-account / key problem (bad key, wrong client_email, clock skew), not a\n` +
        `property-permission problem — a permission issue would fail LATER, on the API call itself.`,
    );
  }
  if (!body.access_token) {
    throw new Error(`Token exchange returned no access_token: ${JSON.stringify(body)}`);
  }
  // Refresh 2 minutes before Google says it actually expires — a safety margin against clock
  // drift and against a request that starts just before expiry and finishes just after.
  const expiresInMs = (Number(body.expires_in) || 3600) * 1000;
  const expiresAt = Date.now() + expiresInMs - 120_000;
  return { accessToken: body.access_token, expiresAt };
}

/** Back-compat single-shot form (no refresh) — kept for a one-off call that never needs one. */
export async function getAccessToken(keyPath, scope) {
  return (await requestAccessToken(keyPath, scope)).accessToken;
}

/**
 * A token that refreshes itself. Every call site does `await mgr.getToken()` — refresh (or the
 * FIRST auth) happens transparently and only when actually needed, so a short script pays for
 * one token exchange and a long-running sweep pays for however many it genuinely needs.
 */
export function createTokenManager(keyPath, scope) {
  let current = null; // { accessToken, expiresAt }
  return {
    async getToken() {
      if (!current || Date.now() >= current.expiresAt) {
        current = await requestAccessToken(keyPath, scope);
      }
      return current.accessToken;
    },
    /** Force a refresh regardless of the tracked expiry — the reactive fallback for a 401 that
     *  arrives despite proactive refresh (clock skew, a revoked token, anything unexpected). */
    async forceRefresh() {
      current = await requestAccessToken(keyPath, scope);
      return current.accessToken;
    },
  };
}

/**
 * A fetch wrapper that surfaces Google's error body verbatim rather than swallowing it — the
 * whole point of "report the exact error" is losing nothing between Google's response and ours.
 */
export async function gscFetch(url, { accessToken, method = "GET", body } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`GSC API HTTP ${res.status} ${res.statusText} — ${JSON.stringify(json)}`);
    err.status = res.status;
    err.body = json;
    throw err;
  }
  return json;
}
