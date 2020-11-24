import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    addComment: {
      comment: "",
      rate: 1,
      elementId: this.props.movieId,
    },
    errMessage: "",
    show: false,

  };

  updateCommentField = e => {
    let addComment = { ...this.state.addComment };
    let currentId = e.currentTarget.id;

    addComment[currentId] = e.currentTarget.value;

    this.setState({ addComment });
  };

  submitComment = async e => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.addComment),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
          }),
        });

        if (response.ok) {

          this.props.addNewComment(this.state.addComment)

          //alert("Comment saved!");
          this.setState({
            addComment: {
              comment: "",
              rate: 1,
              elementId: this.props.movieId,
            },
            errMessage: "",
            show: false
          }, );
          
        } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (error) {
      console.log(error); // Error
      this.setState({
        errMessage: error.message,
      });
    }
  };

  // componentDidUpdate= (previousProps) => {
  //   if { 
    
  //   }
  // };

  render() {
    return (
      <>
        <Form className="w-100 mb-5" onSubmit={this.submitComment}>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="comment">Add a Comment</Form.Label>
                <Form.Control
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Your comment"
                  value={this.state.addComment.comment}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="rate">Rate</Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.addComment.rate}
                  onChange={this.updateCommentField}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label htmlFor="elementId">Element ID</Form.Label>
                <Form.Control
                  type="text"
                  name="elementId"
                  id="elementId"
                  placeholder="Element ID"
                  value={this.state.addComment.elementId}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="flex justify-content-center">
            <Button variant="danger" type="submit" >
              Submit
            </Button>
          </Row>
        </Form>
      </>
    );
  }
}

export default AddComment;
