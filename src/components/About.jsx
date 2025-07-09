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
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 flex flex-col items-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-custom-light-orange">About</span>{" "}
            <span className="text-gray-900">Me</span>
          </h2>

          <p className="text-md md:text-custom-base leading-relaxed text-gray-800">
            Hey, I’m <span className="font-bold">Henry</span> — a freelance
            software developer who loves building smooth, user-friendly web apps
            that actually make people’s lives easier. I work mostly with modern
            tools like{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              Node.js
            </a>
            , and{" "}
            <a
              href="https://www.mongodb.com"
              target="_blank"
              rel="noreferrer"
              className="text-green-700 font-semibold hover:underline"
            >
              MongoDB
            </a>
            , and I’m always tinkering with new tech just to see what’s
            possible. <br />
            <br />
            I’m not about buzzwords or bloated code — just clean, purposeful
            development that does what it’s supposed to do (and does it well).
            Whether you’ve got a big idea or just need something fixed fast, I’m
            up for it. Let’s make something cool together.
          </p>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="relative py-20 text-center px-4 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
      >
        {/* Background Images (light and dark) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 block dark:hidden"
          style={{
            backgroundImage: "url('/data/tech-background-light3.jpg')",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/data/tech-background6.jpg')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            <span className="text-gray-900 dark:text-white">Tech</span>{" "}
            <span className="text-custom-light-orange">Stack</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:text-base text-gray-800 dark:text-gray-300 leading-relaxed"
          >
            I'm currently working with tools like{" "}
            <span className="text-custom-light-orange font-semibold">
              React
            </span>
            ,{" "}
            <span className="text-custom-light-orange font-semibold">
              JavaScript
            </span>
            ,{" "}
            <span className="text-custom-light-orange font-semibold">
              Node.js
            </span>{" "}
            and{" "}
            <span className="text-custom-light-orange font-semibold">
              PostgreSQL
            </span>{" "}
            to build scalable and user-first digital experiences.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-5 gap-10"
          >
            {[
              {
                icon: <FaReact className="text-blue-500 text-3xl" />,
                label: "React",
              },
              {
                icon: <FaNodeJs className="text-green-500 text-3xl" />,
                label: "Node.js",
              },
              {
                icon: <SiPostgresql className="text-blue-600 text-3xl" />,
                label: "PostgreSQL",
              },
              {
                icon: <FaJs className="text-yellow-400 text-3xl" />,
                label: "JavaScript",
              },
              {
                icon: <FaHtml5 className="text-orange-500 text-3xl" />,
                label: "HTML5",
              },
              {
                icon: <FaCss3Alt className="text-blue-400 text-3xl" />,
                label: "CSS3",
              },
              {
                icon: (
                  <MdOutlineDesignServices className="text-purple-500 text-3xl" />
                ),
                label: "UX/UI",
              },
              {
                icon: <FaWordpress className="text-blue-600 text-3xl" />,
                label: "WordPress",
              },
              {
                icon: <SiExpress className="text-gray-500 text-3xl" />,
                label: "Express",
              },
              {
                icon: <MdApi className="text-green-400 text-3xl" />,
                label: "REST APIs",
              },
            ].map(({ icon, label }, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                {icon}
                <span className="text-sm text-gray-800 dark:text-gray-100">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
