import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../services/api";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100"
    >
      <div className="max-w-3xl w-full mx-auto px-6">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-2xl md:text-3xl text-center font-bold"
        >
          <span className="text-gray-800">Recent</span>{" "}
          <span className="text-custom-light-orange">Work</span>
        </motion.h3>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm md:text-base text-gray-700 max-w-3xl mx-auto"
        >
          Here’s a little showcase of what I’ve been up to lately — projects
          that mix creativity, code, and caffeine. I’ve been building things for
          the web since 2012, and I still get a buzz from solving problems and
          seeing ideas come to life. Each project here reflects my love of clean
          interfaces, solid performance, and good UX.
        </motion.p>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-md overflow-hidden flex flex-col hover:shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                <h4 className="text-md font-semibold text-gray-800">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {project.description}
                </p>

                <div className="mt-4">
                  <Link to={`/projects/${project.slug}`}>
                    <button className="btn-custom-orange w-full px-4 py-2 text-white text-sm font-semibold transition-colors duration-300">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
