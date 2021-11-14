import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  return axios.get("http://localhost:4000/movies").then((res) => res.data);
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
