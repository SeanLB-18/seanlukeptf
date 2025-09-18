import React, { useState, useEffect } from "react";
import { NavItems } from "./NavItems";
import ContactModal from "./ContactModal";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-shinee");
    const directions = ["top", "right", "bottom", "left"];

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.classList.remove(...directions.map((dir) => `shine-${dir}`));
        const randomDirection =
          directions[Math.floor(Math.random() * directions.length)];
        card.classList.add(`shine-${randomDirection}`);
      });

      card.addEventListener("mouseout", () => {
        card.classList.remove(...directions.map((dir) => `shine-${dir}`));
      });
    });
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    if (windowWidth < 768) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          windowWidth >= 768
            ? isScrolled
              ? "-translate-y-full"
              : "translate-y-0"
            : "translate-y-0"
        }`}
      >
        <div className="flex justify-center items-center">
          <ul
            className=" justify-center w-full  flex
        bg-gradient-to-r from-gray-700/30 via-gray-800/10 to-gray-700/30 
        backdrop-blur-lg
        border-b border-gray-700/40 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_20px_rgba(0,0,0,0.6)]
        px-6 py-5"
          >
            {NavItems.map((item, index) => (
              <li
                key={index}
                className={`font-[FirstFont] relative group cursor-pointer md:px-10 px-5 py-2 font-medium md:text-[1.2rem] lg:text-[1.3rem] text-[1.8rem] flex  items-center tracking-wide transition-all duration-300 
          ${
            item.label === "Contact"
              ? " card-shinee rounded-lg  "
              : "text-gray-300 "
          }`}
              >
                {item.label === "Contact" ? (
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="w-full h-full flex flex-col items-center gap-1 cursor-pointer"
                  >
                    {item.logo}
                    <span className="md:block hidden">{item.label}</span>
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="flex flex-col  items-center gap-1 "
                  >
                    {item.logo}
                    <span className="md:block hidden">{item.label}</span>
                  </a>
                )}

                {item.label !== "Contact" && (
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-[3px] 
          bg-gradient-to-r from-gray-400 to-gray-800 
          rounded-full transition-all duration-500 
          group-hover:w-3/4 group-hover:left-1/8 "
                  ></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

   
      {windowWidth >= 768 && (
        <div
          className={`  fixed top-0 h-80 mt-64 rounded-lg w-16 z-50
      bg-gradient-to-b from-gray-700/30 via-gray-800/10 to-gray-700/30 
        backdrop-blur-lg
        border-b border-gray-700/40 
        shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_20px_rgba(0,0,0,0.6)]
      flex flex-col items-center py-6 gap-5 transition-transform duration-500 ease-in-out ${
        isScrolled ? "translate-x-0" : "-translate-x-40"
      }`}
        >
          {NavItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`relative group flex items-center justify-center p-2 
        hover:text-white transition-all duration-300 
        ${
          item.label === "Contact"
            ? "bg-gray-200 card-shinee  rounded-lg hover:bg-gray-300"
            : "text-gray-300"
        }`}
              onClick={(e) => {
                if (item.label === "Contact") {
                  e.preventDefault();
                  setIsContactOpen(true);
                }
              }}
            >
              {React.cloneElement(item.logo, { className: "w-6 h-6" })}

              <span
                className="absolute left-full ml-4 whitespace-nowrap px-3 py-2
        bg-gradient-to-r from-gray-700/30 via-gray-800/10 to-gray-700/30
        backdrop-blur-lg border border-gray-700/40 rounded-md shadow-lg 
        text-gray-200 text-sm opacity-0 
        transition-all duration-300 transform -translate-x-2 
        group-hover:opacity-100 group-hover:translate-x-0"
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      )}

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Navbar;
