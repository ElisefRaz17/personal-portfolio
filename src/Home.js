import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";


const Home = () => {
    return(
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Resume/>
        <Footer/>
    </div>
    )
}

export default Home;