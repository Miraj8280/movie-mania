import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../app/movieSlice";
import toast from "react-hot-toast";
import {
  addToFavourites,
  removeFromFavourites,
} from "../app/favouriteMovieSlice";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const imdbId = movie.imdb_url.slice(
    movie.imdb_url.indexOf("/tt") + 1,
    movie.imdb_url.length - 1
  );

  function handleToggleFavourite() {
    dispatch(toggleFavourite(movie));
    if (movie.isFavourite) {
      dispatch(removeFromFavourites(movie));
    } else {
      dispatch(addToFavourites({ ...movie, isFavourite: true }));
    }
    toast.success(
      `Movie ${!movie.isFavourite ? "Added to" : "Removed from"} favourites`,
      {
        position: "bottom-right",
      }
    );
  }

  return (
    <div className="w-70 mb-4 bg-white shadow-md rounded-xl duration-500 cursor-pointer hover:scale-105 hover:shadow-xl">
      <a href={movie.imdb_url} target="_blank" className="h-80 w-72">
        <img
          title="IMDB link"
          className="h-60 w-72 object-cover rounded-t-xl"
          src={"https://images.unsplash.com/photo-1716369967339-e40e46c00c05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={movie.movie}
        />
      </a>
      <div className="px-4 py-2 w-72 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="text-lg text-red-800">#{movie.id}</div>
          <div
            title={`${movie.isFavourite ? "Remove from" : "Add to"} favourites`}
            className="cursor-pointer"
            onClick={() => handleToggleFavourite()}
          >
            {!movie.isFavourite ? (
              <CiHeart
                style={{
                  color: "red",
                }}
                size={28}
              />
            ) : (
              <FaHeart
                style={{
                  color: "tomato",
                }}
                size={24}
              />
            )}
          </div>
        </div>
        <div className="font-regular text-xl mb-2">{movie.movie}</div>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default Movie;
