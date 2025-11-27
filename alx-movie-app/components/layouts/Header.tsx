import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            <i className="fa-solid fa-film" />
          </div>
          <div>
            <div className="text-lg font-semibold">MovieLand</div>
            <div className="text-xs text-gray-500">PrayFirst. Discover. Watch. </div>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <form className="hidden sm:flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-3 py-1">
            <input
              className="bg-transparent outline-none text-sm px-2 w-48"
              placeholder="Search movies..."
              aria-label="Search movies"
            />
            <button type="submit" className="pl-2">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>

          <Link href="/favorites" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <i className="fa-solid fa-heart" />
          </Link>

          <Link href="/account" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
            <i className="fa-solid fa-user" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
