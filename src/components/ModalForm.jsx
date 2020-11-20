import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import MovieList from "./MovieList";

class ModalForm extends React.Component {
  state = {
    products: [],
    show: false,
    // credentials: this.props.data ? this.props.data : {},
  };

  // onChangeHandler = (e) => {
  //   this.setState({
  //     credentials: {
  //       ...this.state.credentials,
  //       [e.target.id]: e.target.value,
  //     },
  //   });
  // };

  render() {
    console.log(this.state);
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton className="flex justify-content-center">
            <Modal.Title className="text-dark">
              {this.props.movie.Title}
            </Modal.Title>
          </Modal.Header>
          <img
            src={this.props.movie.Poster}
            alt="movie"
            style={{ objectFit: "cover", height: "200px" }}
          />
          <Modal.Body>
            <CommentList movieId={this.props.movie.imdbID} />

            <AddComment movieId={this.props.movie.imdbID} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
