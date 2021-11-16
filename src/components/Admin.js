import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { fetchMovies } from "../features/moviesSlice";
import { Link } from "react-router-dom";
import { deleteMovie } from "../features/moviesSlice";

const Admin = () => {
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
            <th>Overview</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.rating}</td>
              <td>{m.overview}</td>
              <td>
                <img width="150" src={m.imageUrl} alt="example" />
              </td>
              <td>
                <Button color="success">Güncelle</Button>
              </td>
              <td>
                <Button
                  color="danger"
                  onClick={() => dispatch(deleteMovie(m.id))}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
