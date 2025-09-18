import React, { useRef, useState } from "react"; 

import { projectList } from "./projectList";
import ProjectCard from "./ProjectCard";
import { socialLink } from "./socialLink";
import cube from "./assets/cube.png";
import { motion, useInView } from "framer-motion";
import ContactModal from "./ContactModal";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div id="project" className="flex flex-col">
      <div>
        <div className="min-h-screen" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <h1 className="md:text-[5rem] text-[3rem] tracking-wider bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3 font-[SecondFont]">
              Projects
            </h1>
            <motion.div
              initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
              animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              id="triangle"
              className="lg:block hidden"
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                version="1.1"
                viewBox="0 0 2000 2000"
              >
                <polygon
                  className="cls-1"
                  points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
                ></polygon>
                <polygon
                  className="cls-3"
                  points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
                ></polygon>
                <g id="Layer_2" data-name="Layer 2">
                  <polygon
                    className="cls-2"
                    points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
                  ></polygon>
                </g>
              </svg>
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap md:grid md:grid-cols-2 lg:flex-wrap lg:flex justify-center h-auto items-center p-5 gap-12 border-1 border-gray-400 rounded-lg shadow-gray-500/50 inset-shadow-gray-500 inset-shadow-sm shadow-xl w-10/12"
            >
              {projectList.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <footer>
          <div className=" flex flex-col md:grid md:grid-cols-4 justify-between gap-5 items-center max-h-[420px] w-full border-t-1 border-[#e7e5e538]/10 bg-gradient-to-t from-[#e7e5e538] to-80% mt-10">
            <div className="flex justify-center flex-col items-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="relative px-8 py-3 rounded-md cursor-pointer
                bg-white/10 backdrop-blur-md border border-white/20 
                text-white tracking-wider font-medium
                shadow-md hover:bg-gray-900/20 hover:-translate-y-1
                hover:border-gray-700
                transition-all duration-300 
                overflow-hidden group"
              >
                <span className="relative z-10 font-[ThirdFont] tracking-wider text-[1.5rem]">
                  Contact me
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-800/10 to-gray-700/30
                  opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                />
              </button>
            </div>
            <div className="order-last ">
              <h2>
                © {new Date().getFullYear()} Sean Luke Balbin, All Rights
                Reserved
              </h2>
            </div>
            <div className="flex space-x-4">
              {socialLink.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.picture}
                    alt="social"
                    className="h-10 w-10 object-contain opacity-80 cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:translate-y-[-4px]"
                    draggable="false"
                  />
                </a>
              ))}
            </div>
            <div className="order-first">
              <img
                src={cube}
                className="md:h-50 md:w-80 h-30 w-40 object-contain float opacity-80"
                draggable="false"
              />
            </div>
          </div>
        </footer>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Projects;
