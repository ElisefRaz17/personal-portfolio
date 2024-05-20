import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import { SampleReactComponents } from "./projects/sampleReactComponents/sampleReactComponents";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      {/* <SampleReactComponents /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
