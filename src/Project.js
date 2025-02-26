import React from "react";
import { SampleReactComponents } from "./projects/sampleReactComponents/sampleReactComponents.jsx";
import PhotoGallery from "./PhotoGallery.tsx";
import FigmaUI from "./FigmaUI.js";
import ProjectCards from "./components/ProjectCards.js";
import image1 from "./assets/todoapp.png";
import image2 from "./assets/icanbeher.png"
import image3 from "./assets/weathertracker.png"

const Project = () => {
  const urls = [
    {
      id: 0,
      name: 'ToDo List App',
      url: "https://github.com/ElisefRaz17/todolist",
      previewImg: image1,
      description: "A TodoList App built with MERN tech stack and user authentication"
    },
    {
      id: 1,
      name: "I Can Be Her App",
      url: "https://nextjs-boilerplate-iujp22gej-elises-projects-7f81aa22.vercel.app/",
      previewImg: image2,
      descriptipn: "Find recommended women in tech that are inspired by your current role"
    },
    {
      id: 2,
      name: "Weather App",
      url: "https://weather-favorite-tracking-app-elisefrazier1.replit.app/",
      previewImg: image3,
      description: "Get wing speeds of asynchronously via weather app API"
    }
  ]
  return (
    <section
      className="bg-primary text-cyan-700 px-5 py-32"
      id="project"
      style={{ paddingLeft: "20px" }}
    >
      <div className="container grid mx-auto md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5">Projects</h2>

          <p className="pb-5">
            Below are some of the projects I have worked on. I have experience
            in Frontend Development, Data Engineering and Full Stack
            Development.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container flex flex-row flex-wrap gap-10 justify-center">
        <ProjectCards urls={urls} />
        <SampleReactComponents />
        <PhotoGallery />
        <FigmaUI />

      </div>
    </section>
  );
};

export default Project;
