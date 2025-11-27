"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 font-sans relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-800" />

      {/* Floating accent */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 drop-shadow-glow animate-fadeIn">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold animate-slideUp">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-slate-400 max-w-md mx-auto animate-fadeIn">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
