import JsonLd from "@/components/JsonLd";
import { vendors } from "@/data/vendors";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

/**
 * BreadcrumbList JSON-LD for a vendor coupon page: Home → Discount Codes → {vendor}.
 * One shared emitter for all /coupons/<slug> pages so the shape lives only in
 * breadcrumbJsonLd(). Renders nothing for an unknown slug.
 */
export function CouponBreadcrumb({ slug }: { slug: string }) {
  const v = vendors[slug];
  if (!v) return null;
  return (
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Discount Codes", path: "/coupons" },
        { name: v.name },
      ])}
    />
  );
}
