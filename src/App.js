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
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/project" element={ <Project />}/>
        <Route path="/blog" element={ <Blog />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
