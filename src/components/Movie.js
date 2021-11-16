import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={movie.imageUrl} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">
          {movie.name}{" "}
          <h4 className="d-inline">
            <Badge color="dark">{movie.rating}</Badge>
          </h4>
        </CardTitle>
        <CardText>{movie.overview.substring(0, 140)}...</CardText>
        <Button tag={Link} to={`/details/${movie.id}`} color="primary">
          Detay
        </Button>
      </CardBody>
    </Card>
  );
};

export default Movie;
