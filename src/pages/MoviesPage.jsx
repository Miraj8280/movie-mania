import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetAllMoviesQuery } from "../app/movie";
import { LuLoader2 } from "react-icons/lu";
import Movie from "../components/Movie";
import { addMovie } from "../app/movieSlice";

const MoviesPage = () => {
  const movies = useSelector((state) => state.movies);
  const { data, error, isLoading } = useGetAllMoviesQuery({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length) {
      return;
    }
    if (data) {
      const moviesWithFavouriteFlag = data.map((movie) => ({
        ...movie,
        isFavourite: false,
      }));

      dispatch(addMovie(moviesWithFavouriteFlag));
    }
  }, [data, movies]);

  if (isLoading || !movies || movies.length === 0) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <LuLoader2 size={50} className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <h2 className="text-center text-4xl py-5 m-4">Welcome!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 place-center justify-items-center">
        {movies
          .slice()
          .sort((a, b) => b.rating - a.rating)
          .map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};

export default MoviesPage;
