import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      //array of movies in the payload
      const movies = action.payload;

      state.push(...movies);
    },
    toggleFavourite: (state, action) => {
      // payload contains the movie
      const id = action.payload.id;

      //toggle the isfavourite state
      const movie = state.find((movie) => movie.id === id);
      if (movie) {
        movie.isFavourite = !movie.isFavourite;
      }
    },
  },
});

export const { addMovie, toggleFavourite } = movieSlice.actions;
export default movieSlice.reducer;
