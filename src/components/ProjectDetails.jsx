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

      <section className="relative pt-24 pb-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-800 px-6">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-custom-light-orange"></div>

        <div className="max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <button
              onClick={() => window.history.back()}
              className="all-[unset] inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[#41B06E] cursor-pointer transition-colors duration-300"
            >
              <span className="text-lg">←</span> Back to Home
            </button>
          </motion.div>

          {/* Project card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-64 sm:h-80 md:h-[28rem] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                {project.title}
              </h1>

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
