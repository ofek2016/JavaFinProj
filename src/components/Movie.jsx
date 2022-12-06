import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Movie() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d0ee0bb1bf1b6080c79e79e840383412";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const getMovies = () => {
    fetch(API_URL)
      .then((respons) => respons.json())
      .then((data) => setMovies(Object.values(data.results)))
      .catch((err) => console.log(err));
  };

  useEffect(() => getMovies(), []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d0ee0bb1bf1b6080c79e79e840383412&language=en-US&query=${query}&page=1&include_adult=false`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(Object.values(data.results));
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDB App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"> </Navbar.Toggle>
          <Navbar.Collapse id="nabarScroll">
            <Nav className="me-auto my-2 my-lg-3" navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>

              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry not found movies</h2>
        )}
      </div>
    </>
  );
}

export default Movie;
