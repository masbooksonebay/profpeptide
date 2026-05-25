import React from "react";

export interface AmazonCTAButtonProps {
  href: string;
  label: string;
}

export default function AmazonCTAButton({ href, label }: AmazonCTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="btn-primary text-sm inline-block"
    >
      Shop {label} on Amazon &rarr;
    </a>
  );
}
