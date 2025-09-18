import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.jsx";
import FirstSection from "./FirstSection.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Particles from "./particles.jsx";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div>
        <Particles id="particles" />
        <Navbar />
        <FirstSection />
        <div className=" md:ml-24">  <Skills /></div>
      
        <Experience />
        <Projects />
      </div>
    </>
  </StrictMode>
);
