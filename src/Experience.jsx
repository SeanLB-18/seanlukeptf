import React from "react";
import { experienceList } from "./experienceList";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.3,  
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const lineVariants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <div className="min-h-[500px] py-16" id="experience">
      <section className="max-w-5xl mx-auto px-6">
   
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[3rem] md:text-[4rem] font-[SecondFont] text-center mb-16 tracking-wider bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3"
        >
          Experience
        </motion.h1>

   
        <div className="relative">
         
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute left-[6px] top-0 w-[2px] h-full bg-gray-500 origin-top"
          />

        
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {experienceList.map((experience, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 ml-8 relative">
                <div className="w-11/12 bg-white/5 border border-white/10 rounded-lg shadow-lg px-6 py-4 backdrop-blur-sm hover:shadow-xl transition-all">
                  <h2 className="md:text-[2.1rem] text-[1.4rem] font-[ThirdFont] tracking-wider text-white">
                    {experience.name}
                  </h2>
                  <p className="md:text-[1.7rem] text-[1.2rem] text-gray-300 mb-2 font-[ThirdFont]">
                    {experience.company} • {experience.date}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ">
                    {experience.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-200 md:text-[1.3rem] text-[1rem]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
