"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

let debounceTimer: NodeJS.Timeout;

export default function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setSuggestions(data.results?.slice(0, 6) || []);
      } catch (err) {
        console.error("Search error:", err);
      }
    }, 300); // 🔥 Fast debounce
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    setSuggestions([]);
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            <i className="fa-solid fa-film" />
          </div>
          <div>
            <div className="text-lg font-semibold">MovieLand</div>
            <div className="text-xs text-gray-500">PrayFirst. Discover. Watch.</div>
          </div>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="relative hidden sm:flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-3 py-1"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm px-2 w-48 text-slate-900 dark:text-slate-100"
            placeholder="Search movies..."
            aria-label="Search movies"
          />
          <button type="submit" className="pl-2 text-slate-600 dark:text-slate-300 hover:text-indigo-500">
            <i className="fa-solid fa-magnifying-glass" />
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">
              {suggestions.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/movies/${s.id}`}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                    onClick={() => setSuggestions([])}
                  >
                    {s.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${s.poster_path}`}
                        alt={s.title}
                        className="w-10 h-14 object-cover rounded-md"
                      />
                    )}
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <div className="text-xs text-slate-400">
                        {s.release_date?.split("-")[0] || "—"} • {s.genre_ids?.length ? "Genres" : ""}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Icons */}
        <nav className="flex items-center gap-3">
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
