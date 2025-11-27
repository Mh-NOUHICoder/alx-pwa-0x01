"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "@/components/commons/MovieCard";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("query") ?? ""; // ✅ fallback to empty string
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return; // ✅ skip if query is empty
    async function fetchSearch() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setMovies(data.results || []); // ✅ fallback to empty array
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    }
    fetchSearch();
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-4">
        Search Results for "{query}"
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((m: any) => (
          <MovieCard
            key={m.id}
            movie={{
              id: m.id,
              title: m.title,
              poster_path: m.poster_path,
              year: m.release_date?.split("-")[0],
              rating: m.vote_average,
              overview: m.overview,
            }}
          />
        ))}
      </div>
    </div>
  );
}
