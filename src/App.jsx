import React from "react";
import Nav from "./Components/Nav/Nav.jsx";
import { BrowserRouter } from "react-router";
import "./App.css";
import AboutMe from "./Components/About/AboutMe.jsx";
import Home from "./Components/Home/Home.jsx";
import Education from "./Components/Education/Education.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <div>
        <AboutMe />
      </div>
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </BrowserRouter>
  );
}
