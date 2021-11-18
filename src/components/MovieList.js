import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import Movie from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";

const MovieList = ({ searchQuery }) => {
  const movies = useSelector((state) => state.movies.movies);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Row>
      {movies
        .filter((m) =>
          selectedCategory.id ? m.categoryId === selectedCategory.id : m
        )
        .filter((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((m, i) => (
          <Col md="4" className="mb-3" key={i}>
            <Movie movie={m} />
          </Col>
        ))}
    </Row>
  );
};

export default MovieList;
