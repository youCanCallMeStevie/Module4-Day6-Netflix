import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
