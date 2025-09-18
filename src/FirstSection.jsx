import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import { loadFull } from "tsparticles";
import BackgroundShapesCanvas from "./BackGroundShapesCanvas";
import { motion, AnimatePresence } from "framer-motion";
import github from "./assets/github-mark-white.png";
import linkIn from "./assets/icons8-linkedin-50.png";
import { Typewriter } from "react-simple-typewriter";
import Spline from "@splinetool/react-spline";
import ModelViewer from "./ModelViewer";
const FirstSection = () => {
  return (
    <div className="font-serif" id="home">
      <div className="min-h-screen grid grid-cols-2 place-items-center overflow-hidden">
    
        <section>
          <div className=" max-w-2xl mb-10">
            <div className=" max-h-20 md:max-h-50 md:w-full  ml-28 flex flex-col space-y-5">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="text-[3rem] md:text-[5rem] lg:text-[7rem] bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3 font-[SecondFont] lg:leading-29 md:leading-20 leading-12 z-20 relative"
              >
                Sean Luke Balbin
              </motion.h1>
              <div>
                <h2 className="text-[0.8rem] md:text-[1.5rem] mt-2 bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3">
                  <Typewriter
                    words={[
                      "Front End Developer",
                      "Building ideas into code",
                      "Exploring Web, Data, and Security",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </h2>
              </div>

              <div className="flex gap-5 text-gray-300 items-center ">
            
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className=" text-[0.8rem] md:text-[1rem] h-10 w-24 rounded-md cursor-pointer card-shinee transition-transform ease-in-out duration-300 hover:-translate-y-1"
                >
                  Resume
                </motion.button>

             
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-[0.8rem] md:text-[1rem] card-shinee h-10 w-24 rounded-md cursor-pointer transition-transform ease-in-out duration-300 hover:-translate-y-1"
                >
                  Projects
                </motion.button>

                
                <a
                  href="https://github.com/SeanLB-18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={github}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="h-7 w-7 lg:h-10 lg:w-10 object-contain opacity-75 cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:translate-y-[-4px]"
                    draggable="false"
                  />
                </a>

           
                <a
                  href="https://www.linkedin.com/in/sean-luke-balbin-933a45350/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={linkIn}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="h-7 w-7 lg:h-10 lg:w-10 object-contain opacity-75 cursor-pointer duration-300 hover:scale-110 hover:-rotate-6 hover:translate-y-[-4px]"
                    draggable="false"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

     
        <section className="hidden md:block">
          <ModelViewer />
        </section>
      </div>
    </div>
  );
};

export default FirstSection;
