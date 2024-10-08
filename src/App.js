import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Blog />
      <Contact />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
