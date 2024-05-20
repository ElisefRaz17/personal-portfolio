import React from "react";
import AboutImg from "./assets/About.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5">
            About Me
          </h2>

          <p className="pb-5">
            My name is Elise Frazier and I am interested in pursuing in a career as a
            Frontend Developer, Data Engineer and/or Full Stack Developer. With showcasing my frontend 
            expericence, this portfolio website does utilizing the following programs in it React, Typescript and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Tailwind CSS, Typescript and JavaScript.
          </p>

          <p>In backend I know Node.js.</p>

          <p>
            In my spare time I like to create handmade jewelry and create creative projects that involve tech and art.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default About;