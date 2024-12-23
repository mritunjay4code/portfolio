import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skils";
import Projects from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skils" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
