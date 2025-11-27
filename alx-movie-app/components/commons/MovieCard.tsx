import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Movie = {
  id: string | number;
  title: string;
  poster_path?: string;
  year?: string | number;
  rating?: number;
  overview?: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <article className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
      <Link href={`/movies/${movie.id}`} className="block">
        {/* Poster */}
        <div className="relative w-full h-64 bg-slate-900">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">
              <i className="fa-regular fa-image fa-2x" />
            </div>
          )}
          
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2">
            {movie.title}
          </h3>
          <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
            <span>{movie.year ?? "—"}</span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400 drop-shadow" />
              <span>{movie.rating?.toFixed(1) ?? "N/A"}</span>
            </span>
          </div>
          {movie.overview && (
            <p className="mt-3 text-sm text-slate-300 line-clamp-3">
              {movie.overview}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
