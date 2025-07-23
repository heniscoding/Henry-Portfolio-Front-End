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
      {/* Maker Bio Section with Background */}
      <div id="about" className="relative overflow-hidden">
        {/* Anchor for scroll offset */}
        <div id="about-anchor" className="absolute -top-16" aria-hidden="true" />

        {/* Background image */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center bg-fixed bg-no-repeat z-0"
          style={{ backgroundImage: "url('/data/maker-bio-background.jpg')" }}
        ></div>

        <section className="relative py-20 px-4 z-10 bg-white/90 text-gray-800 items-center duration-500">
          <div className="max-w-3xl mx-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <div className="py-4 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-custom-light-orange">Maker</span>{" "}
                  <span className="text-gray-600">Bio</span>
                </h2>
                <p className="text-md md:text-custom-base leading-relaxed text-gray-800 text-left space-y-4 font-sans max-w-prose mx-auto">
                  I’m a freelance developer and drone videographer with a
                  maker’s mindset and a soft spot for projects that solve real
                  problems — simply, beautifully, and without unnecessary noise.
                  <br />
                  <br />
                  These days, I split my time between clean code and clean shots
                  — building intuitive apps with tools like{" "}
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
                  </a>{" "}
                  — and capturing cinematic moments with drones and cameras.
                  Whether it's a web tool or a wide-angle flyover, I’m drawn to
                  things that work well, feel good, and serve a clear purpose.
                  <br />
                  <br />
                  I like digging into the details, experimenting with ideas, and
                  turning rough concepts into smooth, working realities.
                  <br />
                  <br />
                  Outside the screen, I chase fresh air, fast bikes, crispy
                  chicken wings, and the kind of countryside escapes that reset
                  your brain. I believe good ideas need room to breathe — and
                  sometimes that means stepping away from the desk and into the
                  world.
                  <br />
                  <br />
                  If you’ve got a project with purpose (or just a hunch that
                  could turn into something cool), let’s talk.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

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

        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-60 z-0"></div>

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

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {/* Icon Grid */}
            {[
              { icon: <FaReact />, label: "React", color: "text-blue-500" },
              { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
              { icon: <SiPostgresql />, label: "PostgreSQL", color: "text-blue-600" },
              { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
              { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
              { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-400" },
              { icon: <MdOutlineDesignServices />, label: "UX/UI", color: "text-purple-500" },
              { icon: <FaWordpress />, label: "WordPress", color: "text-blue-600" },
              { icon: <SiExpress />, label: "Express", color: "text-gray-500" },
              { icon: <MdApi />, label: "REST APIs", color: "text-green-400" },
              { icon: <FaVideo />, label: "DaVinci Resolve", color: "text-rose-500" },
              { icon: <FaPaperPlane />, label: "DJI Mini 4 Pro", color: "text-sky-500" },
              { icon: <FaCameraRetro />, label: "Sony ZV-E10", color: "text-indigo-500" },
              { icon: <FaCamera />, label: "Osmo Action 4", color: "text-orange-400" },
              { icon: <MdTune />, label: "ND Filters + Manual", color: "text-teal-400" },
            ].map(({ icon, label, color }, idx) => (
              <motion.div
                key={idx}
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
                <span className="text-sm text-gray-800 dark:text-gray-100">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
