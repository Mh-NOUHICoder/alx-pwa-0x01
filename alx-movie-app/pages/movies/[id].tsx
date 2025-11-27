"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function MovieDetailsPage() {
  const router = useRouter();
  const { id } = router.query; // movie id from URL
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-300">
        Loading movie details...
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Backdrop */}
      {backdropUrl && (
        <div className="relative h-[400px] w-full">
          <Image
            src={backdropUrl}
            alt={movie.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          {posterUrl && (
            <div className="w-64 flex-shrink-0">
              <Image
                src={posterUrl}
                alt={movie.title}
                width={400}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-slate-400 mb-4">
              {movie.release_date?.split("-")[0]} • {movie.runtime} min •{" "}
              {movie.genres?.map((g: any) => g.name).join(", ")}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <i className="fa-solid fa-star text-yellow-400" />
              <span className="font-semibold">{movie.vote_average?.toFixed(1)}</span>
              <span className="text-slate-400">/ 10</span>
            </div>
            <p className="text-lg leading-relaxed">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
