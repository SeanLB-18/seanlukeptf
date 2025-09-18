import React from "react";
import { projectList } from "./projectList";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card-shine cursor-pointer p-2 max-w-80 rounded-sm space-y-2 bg-white/10 backdrop-blur-md relative z-10 
  shadow-2xl hover:scale-105 ease-in-out transition duration-500 
  h-[25rem] md:h-[27rem] lg:h-[28rem] "
    >
      <div className="flex flex-col justify-center items-center w-full ">
        <img
          src={project.picture}
          alt={project.name}
          className=" object-covered rounded-lg w-full max-h-40 "
        />
      </div>
      <h2 className="text-[1.2rem]  font-semibold border-b-2 border-white/30 w-fit pb-1 ml-5 bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3 ">
        {project.name}
      </h2>
     
        <p
          className="lg:text-[0.8rem] pl-1 xl:text-[0.9rem] md:text-[0.9rem] text-[0.8rem] w-full tracking-wider   text-white  pt-4 "
          style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.6)" }}
        >
          {project.description}
        </p>
      

      <div className="flex space-x-5 ml-4 opacity-90 pt-5  ">
        {project.logos.map((logos, i) => (
          <div key={i}>
            <img src={logos} className="h-6 w-6 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
