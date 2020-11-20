import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";
import JumboCarousel from "./components/JumboCarousel";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <JumboCarousel />
      <MovieList />
      <Footer />

    </div>
  );
}

export default App;
