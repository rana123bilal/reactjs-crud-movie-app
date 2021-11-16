import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { addMovie } from "../features/moviesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  let navigate = useNavigate();

  const [newMovie, setNewMovie] = useState({});

  const dispatch = useDispatch();

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
      <Button type="submit" color="primary">
        Ekle
      </Button>
    </Form>
  );
};

export default AddMovie;
