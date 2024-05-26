import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import favouritesReducer from "./favouriteMovieSlice";
import { movieApi } from "./movie";
export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: movieReducer,
    favourites: favouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
