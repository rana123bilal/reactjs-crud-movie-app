import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../features/moviesSlice";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import UpdateMovie from "./UpdateMovie";

const AdminMovie = ({ movie }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>{movie.name}</td>
        <td>{movie.rating}</td>
        <td>{movie.overview}</td>
        <td>
          <img width="150" src={movie.imageUrl} alt="example" />
        </td>
        <td>
          <Button color="success" onClick={toggle}>
            Edit
          </Button>
        </td>
        <td>
          <Button
            color="danger"
            onClick={() => dispatch(deleteMovie(movie.id))}
          >
            Delete
          </Button>
        </td>
      </tr>
      <Modal toggle={toggle} isOpen={modal}>
        <ModalHeader toggle={toggle}>Edit Film</ModalHeader>
        <ModalBody>
          <UpdateMovie movie={movie} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AdminMovie;
