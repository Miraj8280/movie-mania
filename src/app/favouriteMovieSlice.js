import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const favouriteMovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      //movie in the payload
      const movie = action.payload;

      state.push(movie);
    },
    removeFromFavourites: (state, action) => {
      // payload contains the movie
      const id = action.payload.id;

      //remove the movie from state
      return state.filter((movie) => movie.id !== id);
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouriteMovieSlice.actions;
export default favouriteMovieSlice.reducer;
