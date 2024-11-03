import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateMovie } from "../features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice";

const UpdateMovie = ({ movie, toggle }) => {
  const dispatch = useDispatch();
  const { categories, isLoading: categoriesLoading, error } = useSelector(
    (state) => state.categories
  );

  const [updatedMovie, setUpdatedMovie] = useState({
    id: movie.id,
    name: movie.name,
    rating: movie.rating,
    imageUrl: movie.imageUrl,
    overview: movie.overview,
    categoryId: movie.categoryId ? movie.categoryId.toString() : "",
  });

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie(updatedMovie));
    toggle(); // Close the modal or update the UI accordingly
  };

  if (categoriesLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error}</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleName">Movie Name</Label>
        <Input
          id="exampleName"
          name="name"
          type="text"
          value={updatedMovie.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleRating">Rating</Label>
        <Input
          id="exampleRating"
          name="rating"
          type="text"
          value={updatedMovie.rating}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleImage">ImageUrl</Label>
        <Input
          id="exampleImage"
          name="imageUrl"
          type="text"
          value={updatedMovie.imageUrl}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleOverview">Overview</Label>
        <Input
          id="exampleOverview"
          name="overview"
          type="textarea"
          rows="5"
          value={updatedMovie.overview}
          onChange={handleChange}
        />
      </FormGroup>
      {/* New Category Select Field */}
      <FormGroup>
        <Label for="categorySelect">Category</Label>
        <Input
          id="categorySelect"
          name="categoryId"
          type="select"
          value={updatedMovie.categoryId}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </Input>
      </FormGroup>
      <Button type="submit" color="success">
        Edit
      </Button>
    </Form>
  );
};

export default UpdateMovie;
