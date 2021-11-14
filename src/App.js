import React from "react";
import Header from "./components/Header";
import { Row, Col, Container } from "reactstrap";
import CategoryList from "./components/CategoryList";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Container className="mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col md="3">
                  <CategoryList />
                </Col>
                <Col md="9">
                  <MovieList />
                </Col>
              </Row>
            }
          />
          <Route path={"/details/:id"} element={<MovieDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
