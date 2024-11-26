import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-60 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-gray-100 text-center px-4"
      style={{
        backgroundImage: "url('/data/hero-background-v5.jpeg')",
        backgroundAttachment: "fixed", // Enables parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-200 animate-fade-in">
          Henry<span className="text-custom-light-orange"> Alderslade</span>
        </h1>
        <p className="text-lg md:text-1xl mt-6 max-w-2xl">
          A seasoned, friendly Freelance Software Developer from South London
        </p>
        <div className="mt-12 flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
          <a
            href="#projects"
            className="px-4 py-2 bg-custom-green text-gray-100 text-sm font-semibold hover:bg-blue-600 transition-all duration-300 text-center"
          >
            View Work
          </a>
          <a
            href="/data/Henry-Alderslade-CV-2024.pdf"
            download
            className="px-4 py-2 bg-custom-pink text-gray-100 text-sm font-semibold hover:bg-green-600 transition-all duration-300 text-center"
          >
            Download CV
          </a>
          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-custom-orange text-gray-800 text-sm font-semibold hover:bg-gray-800 transition-all duration-300 text-center"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
