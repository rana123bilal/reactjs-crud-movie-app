import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { addMovie } from "../features/moviesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  let navigate = useNavigate();

  const [newMovie, setNewMovie] = useState({});
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(newMovie));
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleName">Movie Name</Label>
        <Input
          id="exampleName"
          name="name"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleRating">Rating</Label>
        <Input
          id="exampleRating"
          name="rating"
          type="text"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleImage">ImageUrl</Label>
        <Input
          id="exampleImage"
          name="imageUrl"
          type="text"
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
      <Button type="submit" color="primary">
        Add
      </Button>
    </Form>
  );
};

export default AddMovie;
