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
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const { categories, isLoading: categoriesLoading } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    getSingleMovie(id);
  }, [id]);

  const getSingleMovie = (id) => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
        setLoading(false);
      });
  };

  const category = categories.find(
    (cat) => cat.id === movie.categoryId?.toString()
  );

  if (loading || categoriesLoading) {
    return (
      <div className="d-flex justify-content-center my-auto">
        <Loader type="Oval" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <Card style={{ height: "400px" }}>
      <Row>
        <Col md="3">
          <CardImg
            alt="Card image cap"
            src={movie.imageUrl}
            top
            width="100%"
          />
        </Col>
        <Col md="9">
          <CardBody>
            <CardTitle tag="h5">{movie.name}</CardTitle>
            <CardText>
              <strong>Category: </strong>
              {category ? category.categoryName : "Unknown"}
            </CardText>
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
