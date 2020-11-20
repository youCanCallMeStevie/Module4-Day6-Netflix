import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MovieList extends React.Component {
  state = {
    Movies: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=827e9820&s=harry%20potter"
      );
      let Movies = await response.json();

      this.setState({ Movies: Movies.Search });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.Movies.map((movie) => (
              <Col
                xs={12}
                md={3}
                lg={2}
                key={`MovieID${movie.imdbID}`}
                className="mb-3"
              >
                <SingleMovie Movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieList;
