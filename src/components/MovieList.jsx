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

  HandleSearchQuery = (query) => {
    let newMovies = { ...this.state.Movies };

    if (query) {
      for (let category in newMovies) {
        let filteredcategory = newMovies[category].filter((movie) =>
          movie.Title.toLowerCase().includes(query.toLowerCase())
        );

        newMovies[category] = filteredcategory;
        this.setState({ Movies: newMovies });
      }
    } else {
      this.setState({ Movies: { batman: [], superman: [], hulk: [] } });
    }
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
          <div className="form-inline my-2 my-lg-0">
            {/* searchbar */}

            <form className="searchBar" action="">
              <input
                type="search"
                onChange={(e) => {
                  this.HandleSearchQuery(e.target.value);
                }}
              />
              <i class="fa fa-search"></i>
            </form>
          </div>

          <h1 className="mt-4 mb-3">BATMAN</h1>
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
                    this.setState({
                      displayModal: true,
                      selectedMovie: movie,
                    })
                  }
                />
              </Col>
            ))}
          </Row>

          <h1 className="mt-4 mb-3">SUPERMAN</h1>
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
                xs={12}
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
        </Container>
      </>
    );
  }
}

export default MovieList;
