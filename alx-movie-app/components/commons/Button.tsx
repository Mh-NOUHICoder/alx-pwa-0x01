import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  icon?: string; // font-awesome class e.g. "fa-play"
};

export default function Button({ variant = "primary", icon, children, ...rest }: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-medium shadow-sm transition";
  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {icon && <i className={`fa-solid ${icon}`} aria-hidden />}
      <span>{children}</span>
    </button>
  );
}
