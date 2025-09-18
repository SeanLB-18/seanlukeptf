import React, { useEffect, useRef, useState } from "react";

const Education = () => {
  const pathRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
  
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionTop = pathRef.current.getBoundingClientRect().top + scrollY;
      const progress = Math.min(
        (scrollY + windowHeight - sectionTop) / windowHeight,
        1
      );
      path.style.strokeDashoffset = length * (1 - progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      year: "2018",
      degree: "High School",
      school: "Harris Memorial College",
    },
    {
      year: "2020",
      degree: "Senior High School",
      school: "APEC Schools Taytay",
      details: "Accountancy, Business, and Management",
    },
    {
      year: "2025",
      degree: "BS in Information Technology",
      school: "STI College Cainta",
      details: "Web Development & Fundamentals of Programming",
    },
  ];

  return (
    <div className="min-h-screen relative font-serif" id="education">
      <section>
        {/* Title */}
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-[5rem]">Education</h1>
        </div>

        {/* Path + Education Items */}
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* SVG Animated Path */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M2 0 V1000"
              stroke="#F5F5F7"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {/* Education Points */}
          <div className="space-y-10">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`fade-in-card opacity-0 translate-y-1 transition-all duration-700 ease-out card-shinee ${
                    visibleItems.includes(index.toString())
                      ? "opacity-100 translate-y-0"
                      : ""
                  } p-6 rounded-xl shadow-lg w-80 border border-gray-500 bg-opacity-50 backdrop-blur-sm`}
                  data-index={index}
                >
                  <time className="border-white/30 w-fit pb-1 ml-5 bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3 text-sm">{item.year}</time>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-400">{item.school}</p>
                  <p className="mt-2 text-gray-300 text-sm">{item.details}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-300 rounded-full border-4 border-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
