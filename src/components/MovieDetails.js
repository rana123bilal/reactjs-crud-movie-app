import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
} from "reactstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const getSingleMovie = (id) => {
    axios
      .get(`http://localhost:4000/movies/${id}`)
      .then((res) => setMovie(res.data));
  };

  useEffect(() => {
    getSingleMovie(id);
  }, [id]);

  return (
    <Card>
      <Row>
        <Col md="3">
          <CardImg alt="Card image cap" src={movie.imageUrl} top width="100%" />
        </Col>
        <Col md="9">
          <CardBody>
            <CardTitle tag="h5">{movie.name}</CardTitle>
            <CardText>{movie.overview}</CardText>
            <h4>
              <Badge color="dark">{movie.rating}</Badge>
            </h4>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieDetails;
