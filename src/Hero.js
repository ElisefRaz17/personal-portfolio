import React from "react";
import HeroImg from "./assets/CurrentHeadshot.jpeg";
import "./Hero.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCode,
} from "react-icons/ai";
import CourseaLogo from './assets/coursera-icon.png';
const Hero = () => {
  return (
    <section className="bg-primary px-5 text-cyan-700 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl md:text-6md">
            I am <span className="text-accent">E</span>lise <br />
            Frontend Developer, FullStack Developer and Data Engineer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/elise-frazier-89b356180/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/ElisefRaz17"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.coursera.org/user/892105428b950ab4c0729e92e21a1741"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineCode size={40}/>{" "}
            </a>
          </div>

          <a
            href="project/#project"
            className=" btn bg-orange-700  border-2 border-[#0d2323] text-white px-6 py-3 hover:bg-pink-400"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img"  style={{paddingLeft:'100px'}}>
          <img
            src={HeroImg}
            alt="coding illustration"
            className="rounded-full"
            style={{borderRadius:'50px'}}
           
            // style={{margin:'100px',padding:'50px'}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;