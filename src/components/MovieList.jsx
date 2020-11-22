import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import ModalForm from "./ModalForm";

class MovieList extends React.Component {
  state = {
    Movies: [],
    selectedMovie: null,
    displayModal: false,
  };

  getMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=827e9820&s=" + this.props.query
      );
      let movies = await response.json();
      console.log(movies.Search);
      // let newMovies = { ...this.state.Movies };
      // newMovies[query] = movies.Search;
      let newMovies = movies.Search;

      this.setState({ Movies: newMovies });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount = () => {
    this.getMovies();
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

          <h1 className="mt-4 mb-3">{this.props.query.toUpperCase()}</h1>
          <Row>
            {this.state.Movies.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({
                      displayModal: true,
                      selectedMovie: movie,
                    })
                  }
                />
              </Col>
            ))}
          </Row>

          {/* <h1 className="mt-4 mb-3">SUPERMAN</h1>
          <Row>
            {this.state.Movies.superman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({
                      displayModal: true,
                      selectedMovie: movie,
                    })
                  }
                />
              </Col>
            ))}
          </Row>

          <h1 className="mt-4 mb-3">HULK</h1>
          <Row>
            {this.state.Movies.hulk.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie
                  Movie={movie}
                  onClicked={() =>
                    this.setState({
                      displayModal: true,
                      selectedMovie: movie,
                    })
                  }
                />
              </Col>
            ))}
          </Row> */}
        </Container>
      </>
    );
  }
}

export default MovieList;
