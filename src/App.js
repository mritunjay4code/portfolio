import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Project from "./components/Project";


const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Project/>
      
      <Contact />
    </div>
  );
};

export default App;
