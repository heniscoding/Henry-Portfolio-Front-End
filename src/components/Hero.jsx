import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaFileDownload,
  FaInstagram,
  FaTwitter, // ✅ Added for X (Twitter)
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [lazyLoadVideo, setLazyLoadVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const timeout = setTimeout(() => {
        setLazyLoadVideo(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isDesktop]);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative py-60 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {isDesktop && lazyLoadVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/data/hero-background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/data/tech-background4.jpg')",
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-3xl text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl text-white font-extrabold leading-tight drop-shadow-lg"
        >
          Henry{" "}
          <span className="text-custom-light-orange drop-shadow-md transition duration-300">
            Alderslade
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl mt-10 mb-10 text-gray-100 font-medium"
        >
          <span>I’m a&nbsp;</span>
          <span className="font-semibold tracking-wide">
            <Typewriter
              words={[
                "Coder",
                "Drone Videographer",
                "Visual Thinker",
                "Gadgets Geek",
                "Digital Creator",
                "Pixel Perfectionist",
                "Deal Hunter",
                "Coffee Drinker",
                "FPV Fanatic",
                "Pixel Perfectionist",
                "Problem Solver",
                "Tech Explorer",
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
          className="mt-10 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4"
        >
          <a
            href="/data/Henry-Alderslade-CV-2024.pdf"
            download
            className="group px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaFileDownload className="transition-transform duration-300 group-hover:translate-y-1" />
            Download CV
          </a>

          <a
            href="https://github.com/heniscoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaGithub className="transition-transform duration-300 group-hover:rotate-[15deg]" />
            Visit GitHub
          </a>

          <a
            href="https://www.instagram.com/henryalderslade"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaInstagram className="transition-transform duration-300 group-hover:scale-110" />
            Instagram
          </a>

          <a
            href="https://x.com/henryalderslade"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-sky-500 to-sky-700 text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <FaTwitter className="transition-transform duration-300 group-hover:scale-110" />
            X (Twitter)
          </a>
        </motion.div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 text-custom-light-orange hover:text-orange-600 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <FaChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
