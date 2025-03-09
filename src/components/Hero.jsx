import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-60 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-gray-100 text-center px-4"
      style={{
        backgroundImage: "url('/data/tech-background4.jpg')",
        backgroundAttachment: "fixed", // Enables parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl animate-fadeIn md:text-5xl font-medium leading-tight text-gray-200 drop-shadow-lg shadow-black animate-fade-in">
          Henry<span className="text-custom-light-orange"> Alderslade</span>
        </h1>

        <p className="text-sm md:text-xl mt-6 max-w-2xl">
          An experienced Web and Software Developer based in South London.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
          <a
            href="#projects"
            className="px-2 py-1 bg-[#1679AB] text-white text-sm hover:text-white hover:bg-[#12638b] transform hover:scale-110 transition-transform duration-300 ease-in-out text-center"
          >
            View Work
          </a>
          <a
            href="/data/Henry-Alderslade-CV-2024.pdf"
            download
            className="px-2 py-1 bg-[#874CCC] text-white text-sm hover:text-white hover:bg-[#6d3ca6] transform hover:scale-110 transition-transform duration-300 ease-in-out text-center"
          >
            Download CV
          </a>
          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-[#41B06E] text-white text-sm hover:text-white hover:bg-[#2c824e] transform hover:scale-110 transition-transform duration-300 ease-in-out text-center"
          >
            Visit GitHub
          </a>
        </div>
      </div>

      {/* Image in Bottom-Left */}
      {/* <img
        src="/data/bgprogrammer-left.png" // Update the path to your image
        alt="Decorative"
        className="absolute bottom-0 left-0 w-auto h-[300px] object-contain opacity-90"
      /> */}
    </section>
  );
};

export default Hero;
