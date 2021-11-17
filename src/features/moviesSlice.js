import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  return axios.get("http://localhost:4000/movies").then((res) => res.data);
});

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie) => {
    axios.post("http://localhost:4000/movies", newMovie);
    return newMovie;
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id) => {
    axios.delete(`http://localhost:4000/movies/${id}`);
    return id;
  }
);

export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async (updatedMovie) => {
    axios.put(`http://localhost:4000/movies/${updatedMovie.id}`, updatedMovie);
    return updatedMovie;
  }
);

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
    [addMovie.fulfilled]: (state, action) => {
      state.movies.push(action.payload);
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
    },
    [updateMovie.fulfilled]: (state, action) => {
      state.movies = state.movies.map((m) =>
        m.id === action.payload.id ? action.payload : m
      );
    },
  },
});

export default moviesSlice.reducer;
