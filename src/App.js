import React, { useState } from "react";
import Header from "./components/Header";
import { Row, Col, Container } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Admin from "./components/Admin";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
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
                  <MovieList searchQuery={searchQuery}/>
                </Col>
              </Row>
            }
          />
          <Route path={"/details/:id"} element={<MovieDetails />} />
          <Route path="/admin" element={<Admin searchQuery={searchQuery}/>} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
