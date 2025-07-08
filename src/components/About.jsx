import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
} from "react-icons/fa";
import { SiPostgresql, SiExpress } from "react-icons/si";
import { MdOutlineDesignServices, MdApi } from "react-icons/md";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative pt-20 pb-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 flex flex-col items-center justify-center px-6"
      >
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-custom-light-orange"></div>

        {/* Container with Max Width */}
        <div className="max-w-3xl w-full mx-auto">
          <div className="text-center">
            {/* <h2 className="text-1xl md:text-2xl text-gray-900 font-extrabold mb-10 animate-fadeIn">
              The <span className="text-[#41B06E] font-extrabold">Details</span>
            </h2> */}
            <p className="text-md leading-relaxed text-gray-900 animate-fadeIn delay-200">
              Hi! I'm <span className="font-extrabold">Henry</span>, a seasoned
              freelance software developer with a passion for crafting sleek,{" "}
              <span className="font-extrabold">user-focused</span>, and highly
              functional web applications. With expertise in modern technologies
              like{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-extrabold hover:underline"
              >
                React
              </a>
              ,{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-extrabold hover:underline"
              >
                Node.js
              </a>
              , and{" "}
              <a
                href="https://www.mongodb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-extrabold hover:underline"
              >
                MongoDB
              </a>
              , I pride myself on delivering innovative solutions that align
              with the latest{" "}
              <span className="font-extrabold">industry standards</span>. I'm
              committed to{" "}
              <span className="font-extrabold">continuous learning</span> and
              growth, always eager to explore new tools and frameworks to
              broaden my skillset and enhance the quality of my work. Let’s
              collaborate to bring your ideas to life and create something truly{" "}
              <span className="font-extrabold">exceptional</span>!
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-custom-light-orange"></div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="relative pt-20 pb-20 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-gray-100 text-center px-4"
        style={{
          backgroundImage: "url('/data/tech-background6.jpg')",
          backgroundAttachment: "fixed", // Enables parallax effect
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10">
          <h3 className="text-1lg md:text-2xl text-gray-300 font-extrabold mb-10 animate-fadeIn">
            Tech <span className="text-custom-light-orange">Stack</span>
          </h3>
          <p className="mb-20 text-sm text-gray-300 leading-relaxed text-center max-w-3xl animate-fadeIn delay-200">
            Recently I've been using tools like{" "}
            <span className="text-custom-light-orange">React</span>,{" "}
            <span className="text-custom-light-orange">JavaScript</span>,{" "}
            <span className="text-custom-light-orange">Node.js</span>, and{" "}
            <span className="text-custom-light-orange">PostgreSQL</span>, among
            others to build out software applications and websites. They allow
            me to build dynamic, user-focused, and scalable applications with
            clean and efficient code. I'm always excited to expand my expertise
            by diving into new technologies and frameworks, ensuring I stay at
            the forefront of modern development practices.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 text-center">
            <span className="flex flex-col items-center gap-2">
              <FaReact className="text-blue-500 text-3xl" />
              <span className="text-sm">React</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <FaNodeJs className="text-green-500 text-3xl" />
              <span className="text-sm">Node.js</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <SiPostgresql className="text-blue-600 text-3xl" />
              <span className="text-sm">PostgreSQL</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <FaJs className="text-yellow-500 text-3xl" />
              <span className="text-sm">JavaScript</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <FaHtml5 className="text-orange-500 text-3xl" />
              <span className="text-sm">HTML5</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <FaCss3Alt className="text-blue-400 text-3xl" />
              <span className="text-sm">CSS3</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <MdOutlineDesignServices className="text-purple-500 text-3xl" />
              <span className="text-sm">UX/UI</span>
            </span>
            <span className="flex flex-col items-center gap-2">
              <FaWordpress className="text-blue-600 text-3xl" />
              <span className="text-sm">WordPress</span>
            </span>
            {/* Express.js */}
            <span className="flex flex-col items-center gap-2">
              <SiExpress className="text-gray-400 text-3xl" />
              <span className="text-sm">Express</span>
            </span>
            {/* REST APIs */}
            <span className="flex flex-col items-center gap-2">
              <MdApi className="text-green-400 text-3xl" />
              <span className="text-sm">REST APIs</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
