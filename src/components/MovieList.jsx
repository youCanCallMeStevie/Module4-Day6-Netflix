import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import ModalForm from "./ModalForm";

class MovieList extends React.Component {
  state = {
    Movies: { batman: [], superman: [], hulk: [] },
    selectedMovie: null,
    displayModal: false,
  };

  getMovies = async (query) => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=827e9820&s=" + query
      );
      let movies = await response.json();
      console.log(movies.Search);
      let newMovies = { ...this.state.Movies };
      newMovies[query] = movies.Search;
      this.setState({ Movies: newMovies });
    } catch (e) {
      console.log("error: ", e);
    }
  };
  componentDidMount = () => {
    const movieList = ["batman", "superman", "hulk"];
    for (let arr of movieList) {
      this.getMovies(arr);
    }
  };

  render() {
    return (
      <>
        <Container>
          {this.state.selectedMovie && (
            <ModalForm
              show={this.state.displayModal}
              movie={this.state.selectedMovie}
              onHide={() => this.setState({ displayModal: false })}
            />
          )}
          <h1>BATMAN</h1>
          <Row>
            {this.state.Movies.batman.map((movie) => (
              <Col
                xs={12}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({ displayModal: true, selectedMovie: movie })
                  }
                />
              </Col>
            ))}
          </Row>

          <h1>SUPERMAN</h1>
          <Row>
            {this.state.Movies.superman.map((movie) => (
              <Col
                xs={12}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({ displayModal: true, selectedMovie: movie })
                  }
                />
              </Col>
            ))}
          </Row>

          <h1>HULK</h1>
          <Row>
            {this.state.Movies.hulk.map((movie) => (
              <Col
                xs={12}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({ displayModal: true, selectedMovie: movie })
                  }
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieList;
