import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateMovie } from "../features/moviesSlice";
import { useDispatch } from "react-redux";

const UpdateMovie = ({ movie, toggle }) => {
  const [updatedMovie, setUpdatedMovie] = useState({
    id: movie.id,
    name: movie.name,
    rating: movie.rating,
    imageUrl: movie.imageUrl,
    overview: movie.overview,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie(updatedMovie));
  };

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
      <Button type="submit" color="success" onClick={toggle}>
        Edit
      </Button>
    </Form>
  );
};

export default UpdateMovie;
