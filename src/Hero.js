import React from "react";
import HeroImg from "./assets/CurrentHeadshot.jpeg";
import "./Hero.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCode,
} from "react-icons/ai";
import CourseaLogo from "./assets/coursera-icon.png";
import HeroImage from "./assets/HeroImage1.png";
import OrganicShape from "./assets/OrganicShape.png";
const Hero = () => {
  return (
    <section className="bg-primary px-5 text-amber-800 py-32" id="hero">
      <div className="container mx-auto flex flex-wrap flex-col md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="w-2/3 flex flex-row flex-wrap">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl md:text-6md">Creative Developer</h1>

            <p className="py-5">
              Proficient in the following roles:
              <b>
                Frontend Developer, Full Stack Developer, UI/UX Designer and Software Engineer
              </b>
              <br />
            </p>

            <div className="flex py-5 ">
              <a
                href="https://www.linkedin.com/in/elise-frazier-89b356180/"
                className="pr-4 inline-block text-accent hover:text-cyan-800"
              >
                {" "}
                <AiOutlineLinkedin size={40} />{" "}
              </a>
              <a
                href="https://github.com/ElisefRaz17"
                className="pr-4 inline-block text-accent hover:text-cyan-800"
              >
                {" "}
                <AiOutlineGithub size={40} />{" "}
              </a>
              <a
                href="https://www.coursera.org/user/892105428b950ab4c0729e92e21a1741"
                className="pr-4 inline-block text-accent hover:text-cyan-800"
              >
                {" "}
                <AiOutlineCode size={40} />{" "}
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ paddingLeft: "100px",position:'relative' }}>
            <img
              src={HeroImage}
              alt="coding illustration"
              className="rounded-full"
              style={{ borderRadius: "50px", zIndex:'3', position:'relative' }}
            />
            <img src={OrganicShape} style={{position:'absolute',bottom:'0', zIndex:'1'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
