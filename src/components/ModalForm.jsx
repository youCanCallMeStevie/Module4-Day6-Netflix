import React from "react";
import { Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class ModalForm extends React.Component {
  state = {
 //   products: [],
    comments: [],
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


  updateStateWithNewComment = (newComment) => {
    console.log('newComment PRE', newComment)
    this.setState({comments: [...this.state.comments, newComment]}, () => console.log(this.state.comments))
  }


  commentFetch = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      let comments = await response.json();
      console.log("comments",comments);
      this.setState({ comments }); //these results will now fill the empty state array
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount() {
 this.commentFetch()
  }


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
            <CommentList movieId={this.props.movie.imdbID}  comments={this.state.comments}/>

            <AddComment movieId={this.props.movie.imdbID} addNewComment={this.updateStateWithNewComment}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
