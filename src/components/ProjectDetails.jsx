import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { fetchProjects } from "../services/api";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const { data } = await fetchProjects();
        const selectedProject = data.find((proj) => proj.slug === slug);
        setProject(selectedProject);
      } catch (err) {
        console.error(err);
      }
    };

    loadProject();
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Henry Alderslade</title>
        <meta name="description" content={project.description?.slice(0, 155)} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta
          property="og:url"
          content={`https://henryalderslade.com/projects/${project.slug}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[40vh] overflow-hidden pt-16">
        {/* Background image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm z-10" />

        {/* Content inside hero */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-4 py-6 sm:py-8">
          {/* Back Button - TOP LEFT inside image */}
          <div className="w-full max-w-3xl mx-auto mt-16">
            <motion.button
              onClick={() => window.history.back()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-semibold flex items-center gap-1 hover:text-[#41B06E] transition-colors duration-300"
            >
              <span className="text-lg">←</span> Back
            </motion.button>
          </div>

          {/* Title - CENTERED */}
          <div className="flex justify-center items-center flex-grow">
            <div className="max-w-3xl w-full mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
              >
                {project.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 px-6">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-custom-light-orange"></div>

        <div className="max-w-3xl w-full mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="p-6 text-center">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                {project.description}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-sm rounded-full font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {project.link && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-2 px-5 py-2 bg-[#41B06E] text-white text-sm font-semibold rounded hover:bg-[#2c824e] transition duration-300">
                      🔗 Visit Project
                    </button>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-custom-light-orange"></div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default ProjectDetails;
