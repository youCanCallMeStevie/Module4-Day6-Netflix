import React from "react";
import MovieList from "./MovieList";
import { FormControl, Button, Form } from "react-bootstrap";

class Home extends React.Component {
  state = {
    keyWord: "",
    isTyped: false,
  };

  HandleSearchQuery = query => {
    if (query.length > 2) {
      this.setState({ keyWord: query, isTyped: true });
    } else {
      this.setState({ keyWord: "", isTyped: false });
    }
  };

  render() {
    return (
      <>
        
          <Form inline style ={{paddingTop: "15px"}} >
            <FormControl
              type="text"
              placeholder="Search Movies"
              className="mr-sm-2"
              onChange={e => {
                this.HandleSearchQuery(e.target.value);
              }}
              style={{position: "relative", marginLeft: "40vw"}}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

        {/* <form className="searchBar" action="">
            <input
              type="search"
              onChange={(e) => {
                this.HandleSearchQuery(e.target.value);
              }}
            />
            <i className="fa fa-search"></i>
          </form> */}
        {this.state.isTyped ? (
          <MovieList query={this.state.keyWord} />
        ) : (
          <>
            <MovieList query="batman" />
            <MovieList query="superman" />
            <MovieList query="hulk" />
          </>
        )}
      </>
    );
  }
}

export default Home;
