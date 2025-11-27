import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} MovieLand. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="/about" className="hover:text-gray-700">About</a>
          <a href="/privacy" className="hover:text-gray-700">Privacy</a>
          <span className="text-xs text-gray-400">Built with ❤️ by Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
