import { skillsList } from "./skillsList";
import { motion } from "framer-motion";
import softSkills from "./softSkills";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.2,  
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

const Skills = () => {
  return (
    <div className="mb-10 px-4 ">
      <div className=" max-w-11/12 flex flex-col gap-12" id="skills">
       
        <section>
          <div className="border-1 border-gray-400 rounded-lg shadow-gray-500/50 inset-shadow-gray-500 inset-shadow-sm shadow-xl w-full h-auto">
         
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3 text-[2rem] md:text-[3rem] flex pl-5 pt-5 font-[secondFont] tracking-wider"
            >
              Tech Stacks
            </motion.h1>

         
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="md:grid md:grid-cols-4 gap-4 xl:gap-8 mt-5 mb-8 flex flex-wrap justify-center md:pl-5 px-5"
            >
              {skillsList.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div
                    className="group rounded-sm pl-1 pt-5 mt-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg cursor-pointer 
                      space-y-1 p-2 space-x-3 transition-all ease-in-out duration-500 hover:scale-110 hover:-translate-y-2 floater"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain opacity-90 ml-2"
                        draggable="false"
                      />
                      <span className="text-white font-semibold text-[0.6rem] md:text-[0.9rem]">
                        {skill.name}
                      </span>
                    </div>
                    {skill.percentage && (
                      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden relative">
                        <div
                          className="bg-gray-500 h-full rounded-full transition-all duration-500 group-hover:bg-gray-400"
                          style={{ width: `${skill.percentage}%` }}
                        >
                          <span className="absolute inset-0 flex items-center justify-center text-[0.65rem] text-white font-semibold opacity-100 duration-500">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <style>
            {`
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  60% { opacity: 1; transform: translateY(-4px); }
  100% { opacity: 1; transform: translateY(0); }
}
`}
          </style>
        </section>

      
        <section>
          

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.9 }}
            className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-8 gap-5 pt-5 lg:pt-0"
          >
            {softSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="cursor-pointer md:h-59 rounded-t-md rounded-b-sm bg-white/5 border-1 rounded-3xl p-6 backdrop-blur-lg shadow-gray-800 shadow-xl/40 text-shadow-lg/20 text-whitediff card-shinee group overflow-hidden flex flex-col items-center justify-center transition-all duration-500">
                  <img
                    src={skill.picture}
                    alt={skill.name}
                    className="md:w-10 md:h-10 lg:w-15 lg:h-15 h-10 w-10 object-contain transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-80"
                    draggable="false"
                  />

                  <h2 className="text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.3rem] mt-2 font-bold transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                    {skill.name}
                  </h2>

                  <p className="mt-2 text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] opacity-0 max-h-0 overflow-hidden text-center transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0 group-hover:animate-[fadeInUp_0.6s_ease-out]">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
