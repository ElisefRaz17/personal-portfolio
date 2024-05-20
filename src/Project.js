import React from "react";
// import cssProjects from "../assets/cssprojects.png";
// import devlog from "../assets/devlog.png";
// import getInspirred from "../assets/get-inspirred.png";
// import uilogs from "../assets/uilogs.png";
import reactcomponents from "./assets/ReactTabs.jpg"
import { SampleReactComponents } from "./projects/sampleReactComponents/sampleReactComponents";


const Project = () => {


  return (
    <section className="bg-primary text-cyan-700 px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
          <SampleReactComponents/>
    
        {/* {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-orange-500 hover:bg-orange-500 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-orange-700 hover:bg--800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </section>
  );
}

export default Project;