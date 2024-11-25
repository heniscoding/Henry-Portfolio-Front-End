import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
  <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Henry</h1>
  <p className="text-lg sm:text-xl mt-4">Your Friendly Freelance Software Developer From South London</p>
  <a
    href="#projects"
    className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
  >
    View My Work
  </a>
</section>

  );
};

export default Hero;
