import React from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends React.Component {
  render() {
    return (
      <div className="col mb-3 mb-lg-0 pr-1 movieCard">
        <img src={this.props.Movie.Poster} className="img-fluid thumbnails" />
        <h4 className="text-light" style={{ display: "none" }}>
          {this.props.Movie.Title}
        </h4>

        <Button
          variant="danger"
          style={{ display: "none" }}
          onClick={this.props.onClicked}
        >
          View Details
        </Button>
      </div>
    );
  }
}

export default SingleMovie;
