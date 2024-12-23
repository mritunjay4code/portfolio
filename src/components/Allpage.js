import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skils";
import Projects from "./Project";
import Contact from "./Contact";
const Allpage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skils" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Allpage;
