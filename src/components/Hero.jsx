import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaFileDownload,
  FaRocket,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-60 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center px-4 transition-colors duration-500"
    >
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/data/tech-background-light.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:block hidden z-0"
        style={{
          backgroundImage: "url('/data/tech-background4.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-60 z-0 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-gray-900 dark:text-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white drop-shadow-lg"
        >
          Henry{" "}
          <span className="text-custom-light-orange drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] dark:drop-shadow-none transition duration-300">
            Alderslade
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl mt-10 mb-10 text-gray-700 dark:text-gray-300 font-medium"
        >
          <span>I’m a&nbsp;</span>
          <span className="font-semibold text-black dark:text-white tracking-wide">
            <Typewriter
              words={[
                "coder",
                "drone pilot",
                "motorcycle enthusiast",
                "coffee drinker",
                "problem solver",
                "tech explorer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4"
        >
          {/* View Work */}
          <a
            href="#projects"
            className="group px-5 py-2 text-sm font-medium rounded bg-gradient-to-r from-blue-500 to-blue-700 text-white opacity-80 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaRocket className="transition-transform duration-300 group-hover:translate-x-1" />
            View Work
          </a>

          {/* Download CV */}
          <a
            href="/data/Henry-Alderslade-CV-2024.pdf"
            download
            className="group px-5 py-2 text-sm font-medium rounded bg-gradient-to-r from-purple-500 to-purple-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaFileDownload className="transition-transform duration-300 group-hover:translate-y-1" />
            Download CV
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2 text-sm font-medium rounded bg-gradient-to-r from-emerald-500 to-emerald-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaGithub className="transition-transform duration-300 group-hover:rotate-3" />
            Visit GitHub
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2 text-sm font-medium rounded bg-gradient-to-r from-pink-500 to-pink-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaInstagram className="transition-transform duration-300 group-hover:scale-105" />
            Instagram
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about-anchor"
        className="absolute bottom-10 text-custom-light-orange hover:text-orange-600 transition-colors duration-300 animate-bounce"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
