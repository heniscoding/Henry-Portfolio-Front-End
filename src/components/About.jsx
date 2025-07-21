import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaCamera,
  FaCameraRetro,
  FaVideo,
  FaPaperPlane,
} from "react-icons/fa";
import { SiPostgresql, SiExpress } from "react-icons/si";
import { MdOutlineDesignServices, MdApi, MdTune } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 flex flex-col items-center px-6 scroll-mt-[64px]"
      >
        <div
          id="about-anchor"
          className="absolute -top-24"
          aria-hidden="true"
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-custom-light-orange">Maker</span>{" "}
            <span className="text-gray-600">Bio</span>
          </h2>

          <p className="text-md md:text-custom-base leading-relaxed text-gray-800">
            I’m a freelance developer and drone videographer with a maker’s
            mindset and a soft spot for projects that solve real problems —
            simply, beautifully, and without unnecessary noise.
            <br />
            <br />
            These days, I split my time between clean code and clean shots —
            building intuitive apps with tools like{" "}
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
            — and capturing cinematic moments with drones and cameras. Whether
            it's a web tool or a wide-angle flyover, I’m drawn to things that
            work well, feel good, and serve a clear purpose.
            <br />
            <br />
            I like digging into the details, experimenting with ideas, and
            turning rough concepts into smooth, working realities.
            <br />
            <br />
            Outside the screen, I chase fresh air, fast bikes, crispy chicken
            wings, and the kind of countryside escapes that reset your brain. I
            believe good ideas need room to breathe — and sometimes that means
            stepping away from the desk and into the world.
            <br />
            <br />
            If you’ve got a project with purpose (or just a hunch that could
            turn into something cool), let’s talk.
          </p>
        </motion.div>
      </section>

      {/* Tech & Creative Stack Section */}
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
        <div className="absolute inset-0 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">Tech Stack</span>{" "}
            <span className="text-custom-light-orange">/ Creative Gear</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:text-base text-gray-800 dark:text-gray-300 leading-relaxed"
          >
            Whether I’m coding a web app or capturing cinematic drone shots, I
            rely on a mix of digital tools to bring ideas to life. My stack
            blends logic, visuals, and storytelling — for things that work well
            and look even better.
          </motion.p>

          {/* Combined Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {[
              {
                icon: <FaReact />,
                label: "React",
                color: "text-blue-500",
                description: "Frontend library for building user interfaces",
              },
              {
                icon: <FaNodeJs />,
                label: "Node.js",
                color: "text-green-500",
                description: "JavaScript runtime for backend development",
              },
              {
                icon: <SiPostgresql />,
                label: "PostgreSQL",
                color: "text-blue-600",
                description: "Powerful open-source SQL database",
              },
              {
                icon: <FaJs />,
                label: "JavaScript",
                color: "text-yellow-400",
                description: "Core language of the web",
              },
              {
                icon: <FaHtml5 />,
                label: "HTML5",
                color: "text-orange-500",
                description: "Markup language for structuring content",
              },
              {
                icon: <FaCss3Alt />,
                label: "CSS3",
                color: "text-blue-400",
                description: "Styling language for layouts and design",
              },
              {
                icon: <MdOutlineDesignServices />,
                label: "UX/UI",
                color: "text-purple-500",
                description: "User interface and experience design principles",
              },
              {
                icon: <FaWordpress />,
                label: "WordPress",
                color: "text-blue-600",
                description: "CMS for building and managing websites",
              },
              {
                icon: <SiExpress />,
                label: "Express",
                color: "text-gray-500",
                description: "Backend framework for Node.js",
              },
              {
                icon: <MdApi />,
                label: "REST APIs",
                color: "text-green-400",
                description: "Designing and consuming RESTful services",
              },
              {
                icon: <FaVideo />,
                label: "DaVinci Resolve",
                color: "text-rose-500",
                description:
                  "Professional editing, grading, and post-production",
              },
              {
                icon: <FaPaperPlane />,
                label: "DJI Mini 4 Pro",
                color: "text-sky-500",
                description: "Compact drone with pro-level flight and footage",
              },
              {
                icon: <FaCameraRetro />,
                label: "Sony ZV-E10",
                color: "text-indigo-500",
                description: "Mirrorless camera with interchangeable lenses",
              },
              {
                icon: <FaCamera />,
                label: "Osmo Action 4",
                color: "text-orange-400",
                description: "Stabilized action camera for high-motion shots",
              },
              {
                icon: <MdTune />,
                label: "ND Filters + Manual",
                color: "text-teal-400",
                description:
                  "Precise control of exposure, shutter, and motion blur",
              },
            ].map(({ icon, label, color, description }, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="relative group flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${color} text-3xl`}
                  aria-label={label}
                >
                  {icon}
                </motion.div>
                <span className="text-sm text-gray-800 dark:text-gray-100">
                  {label}
                </span>

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 w-max max-w-[160px] px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 text-center">
                  {description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
