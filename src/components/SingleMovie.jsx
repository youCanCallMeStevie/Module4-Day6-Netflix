import React from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <div className="col mb-5 mb-lg-0 pr-1 no-gutters mx-0">
        <span className="overlay-icons"><img src={this.props.Movie.Poster} alt="" className="img-fluid thumbnails" />
        <h4 className="text-light movieCard" style={{ display: "none" }}>
          {this.props.Movie.Title}
        </h4>

        <Button
          variant="danger"
          style={{ display: "none" }}
          onClick={this.props.onClicked}
        >
          View Details
        </Button>
        </span>
      </div>
    );
  }
}

export default SingleMovie;
