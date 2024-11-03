import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return axios
      .get("http://localhost:3001/categories")
      .then((res) => res.data);
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    selectedCategory: {},
  },
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
