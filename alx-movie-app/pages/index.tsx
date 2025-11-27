"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import MovieCard, { Movie } from "@/components/commons/MovieCard";
import Button from "@/components/commons/Button";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=00baf95c334ad0d63228ba529cdcd308&language=en-US&page=1`
        );
        const data = await res.json();
        console.log("TMDB response:", data); // <-- inspect what comes back

        if (!data.results) {
          console.error("No results in TMDB response:", data);
          return;
        }

        const mapped: Movie[] = data.results.map((m: any) => ({
          id: m.id,
          title: m.title,
          poster_path: m.poster_path,
          year: m.release_date?.split("-")[0],
          rating: m.vote_average,
          overview: m.overview,
        }));

        setMovies(mapped);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-sora font-bold mb-3 text-white">
          🎬 Welcome to{" "}
          <span className="text-indigo-400">MovieLand Movies</span>
        </h1>
        <p className="text-gray-400 font-sora text-lg max-w-xl mx-auto">
          Explore, rate, and discover your favorite movies with style.
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="primary" icon="fa-play">
            Watch Now
          </Button>
        </div>
      </section>

      {/* Movie Grid */}
      <section>
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Trending Now
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>
    </>
  );
}
