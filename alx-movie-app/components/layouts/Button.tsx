import React from "react";
import Link from "next/link";

export default function LayoutButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const classes = "inline-flex items-center gap-2 rounded-lg px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 shadow";
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href} className={classes}>{children}</Link>;
}
