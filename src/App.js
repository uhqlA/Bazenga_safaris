import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Rendered components
import Navbar from "./Navbar";
import Home from "../src/Components/Pages/Home/Home";
import About from "../src/Components/Pages/About/About";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
};

export default App;
