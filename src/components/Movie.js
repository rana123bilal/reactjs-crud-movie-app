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
import { useSelector } from "react-redux";

const Movie = ({ movie }) => {
  const categories = useSelector((state) => state.categories.categories);

  const category = categories.find(
    (cat) => cat.id === movie.categoryId?.toString()
  );

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
        <CardText>
          <strong>Category: </strong>
          {category ? category.categoryName : "Unknown"}
        </CardText>
        <CardText>{movie.overview.substring(0, 140)}...</CardText>
        <Button tag={Link} to={`/details/${movie.id}`} color="primary">
          Review
        </Button>
      </CardBody>
    </Card>
  );
};

export default Movie;
