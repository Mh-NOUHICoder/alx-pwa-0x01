import React from "react";

export default function Loading({ size = 8, label = "Loading..." }: { size?: number; label?: string }) {
  const s = `${size}w ${size}h`;
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className="animate-spin rounded-full border-4 border-t-blue-600 border-gray-200"
        style={{ width: `${size * 8}px`, height: `${size * 8}px` }}
        role="status"
        aria-label={label}
      />
      <span className="mt-2 text-sm text-gray-500">{label}</span>
    </div>
  );
}
