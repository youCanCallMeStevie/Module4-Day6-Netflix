import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
class ModalForm extends React.Component {
  
  state = {
    products: [],
    show: false,
    credentials: this.props.data ? this.props.data : {},
  };
  fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "GET",
          headers: new Headers({
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA"
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ products: data });
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    this.fetchData();
  };
  

  onChangeHandler = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const url =
      this.props.method === "PUT"
        ? "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.data._id
        : "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(url, {
        method: "POST", //this.props.method
        body: JSON.stringify(this.state.credentials),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA"
        }),
      });
      if (response.ok) {
        alert("Thanks for your comment!");
        this.props.refetchData();
        this.setState({ show: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Button variant="primary" onClick={() => this.setState({ show: true })}>
          {this.props.btn}
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Movie Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              id={"comment"}
              value={this.state.credentials.comment}
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"rate"}
              value={this.state.credentials.rating}
              type="number"
              min="1"
              max="5"
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"elementID"}
              value={this.state.credentials.elementID}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              Leave Comment
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
