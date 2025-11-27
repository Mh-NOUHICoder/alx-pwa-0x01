import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Movie = {
  id: string | number;
  title: string;
  poster?: string; // url
  year?: string | number;
  rating?: number;
  overview?: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <Link href={`/movies/${movie.id}`} className="block">
        <div className="relative w-full h-56 bg-slate-100">
          {movie.poster ? (
            <Image src={movie.poster} alt={movie.title} fill style={{ objectFit: "cover" }} />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              <i className="fa-regular fa-image fa-2x" />
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2">{movie.title}</h3>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>{movie.year ?? "—"}</span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400" />
              <span>{movie.rating ?? "N/A"}</span>
            </span>
          </div>
          {movie.overview && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{movie.overview}</p>}
        </div>
      </Link>
    </article>
  );
}
