import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categoriesSlice";
import moviesReducer from "../features/moviesSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    movies: moviesReducer,
  },
});
