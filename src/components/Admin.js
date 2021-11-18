import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { fetchMovies } from "../features/moviesSlice";
import { Link } from "react-router-dom";
import AdminMovie from "./AdminMovie";

const Admin = ({ searchQuery }) => {
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Button tag={Link} to="/addmovie" color="primary" className="mb-3">
        Film Ekle
      </Button>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th width="500">Overview</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies
            .filter((m) =>
              m.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((m, i) => (
              <AdminMovie movie={m} key={i} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
