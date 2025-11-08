import React from "react";
import Nav from "./Components/Nav/Nav.jsx";
import { BrowserRouter } from "react-router";
import "./App.css";
import AboutMe from "./Components/About/AboutMe.jsx";
import Home from "./Components/Home/Home.jsx";
import Education from "./Components/Education/Education.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <div>

        <AboutMe />
      </div>
      <Education />
    </BrowserRouter>
  );
}
