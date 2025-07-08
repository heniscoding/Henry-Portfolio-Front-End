import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../services/api";

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
        <h3 className="mb-10 text-1lg md:text-2xl text-gray-600 text-center font-extrabold animate-fadeIn">
          Recent <span className="text-[#41B06E]">Work</span>
        </h3>
        <p className="mb-10 text-sm leading-relaxed text-gray-800 text-center animate-fadeIn delay-200">
          Here you'll find a small gathering of the latest projects I've worked
          on over the last couple of years. With over a decade of experience in
          the industry since 2012, I've had the opportunity to collaborate on
          diverse and innovative projects that showcase my passion for clean,
          functional, and user-focused development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="h-full flex flex-col justify-between bg-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-md"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                <div>
                  <h3 className="text-sm text-gray-600 font-bold">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <Link to={`/projects/${project._id}`}>
                    <button className="w-full px-4 py-2 bg-[#41B06E] text-gray-200 text-xs font-semibold rounded-none hover:text-white hover:bg-[#2c824e] transition-all duration-300">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
