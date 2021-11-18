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

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getSingleMovie = (id) => {
    axios
      .get(`http://localhost:4000/movies/${id}`)
      .then((res) => setMovie(res.data));

    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    getSingleMovie(id);
  }, [id]);

  return (
    <Card style={{ height: "400px" }}>
      {loading ? (
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
              <CardText>{movie.overview}</CardText>
              <h4>
                <Badge color="dark">{movie.rating}</Badge>
              </h4>
            </CardBody>
          </Col>
        </Row>
      ) : (
        <div className="d-flex justify-content-center my-auto">
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        </div>
      )}
    </Card>
  );
};

export default MovieDetails;
