import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaServer,
} from "react-icons/fa";
import { SiPostgresql, SiExpress } from "react-icons/si";
import { MdOutlineDesignServices, MdApi } from "react-icons/md";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="pt-20 pb-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-1xl md:text-2xl text-gray-300 font-extrabold mb-4 animate-fadeIn">
            About <span className="text-custom-light-orange">Me</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 animate-fadeIn delay-200">
            Hi I'm <span className="text-custom-light-orange">Henry</span>, a
            freelance software developer with a passion for building sleek and
            functional web applications. I specialize in modern technologies
            like
            <span className="text-custom-light-orange"> React</span>,{" "}
            <span className="text-custom-light-orange">Node.js</span>, and
            <span className="text-custom-light-orange"> MongoDB</span>, and I'm always
            excited to learn new tools and frameworks to expand my skillset.
            Let's work together to create something{" "}
            <span className="text-custom-light-orange">amazing!</span>
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="py-20 bg-black text-gray-100 flex flex-col items-center justify-center px-6"
      >
        <h3 className="text-1lg md:text-2xl text-gray-300 font-extrabold mb-10 animate-fadeIn">
          Tech <span className="text-custom-light-orange">Stack</span>
        </h3>
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
      </section>
    </>
  );
};

export default About;
