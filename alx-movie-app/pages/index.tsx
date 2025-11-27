"use client";

import React from "react";
import Layout from "@/components/layouts/Layout";
import MovieCard from "@/components/commons/MovieCard";
import Button from "@/components/commons/Button";

// Example movie data
const movies = [
  {
    id: 1,
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    year: 2010,
    rating: 8.8,
    overview: "A skilled thief leads a team into dreams to steal secrets and plant ideas.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    year: 2014,
    rating: 8.6,
    overview: "A team travels through a wormhole to find a new home for humanity.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    year: 2008,
    rating: 9.0,
    overview: "Batman faces the Joker in a battle for Gotham’s soul.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-white">
          🎬 Welcome to <span className="text-indigo-400">Go.Gym Movies</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
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
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Trending Now</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
