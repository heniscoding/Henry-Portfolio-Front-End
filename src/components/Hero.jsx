import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-60 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-gray-100 text-center px-4"
      style={{
        backgroundImage: "url('/data/tech-background4.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
        >
          Henry
          <span className="text-custom-light-orange"> Alderslade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          <span>I’m a&nbsp;</span>
          <span className="text-white font-semibold">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4"
        >
          <a
            href="#projects"
            className="px-4 py-2 bg-[#1679AB] text-white text-sm rounded hover:bg-[#12638b] transform hover:scale-105 transition duration-300"
          >
            View Work
          </a>
          <a
            href="/data/Henry-Alderslade-CV-2024.pdf"
            download
            className="px-4 py-2 bg-[#874CCC] text-white text-sm rounded hover:bg-[#6d3ca6] transform hover:scale-105 transition duration-300"
          >
            Download CV
          </a>
          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#41B06E] text-white text-sm rounded hover:bg-[#2c824e] transform hover:scale-105 transition duration-300"
          >
            Visit GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
