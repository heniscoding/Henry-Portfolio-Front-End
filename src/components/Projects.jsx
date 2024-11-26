import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../services/api';

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
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto max-w-screen-lg">
        <h3 className="mb-3 text-1lg md:text-2xl text-gray-600 text-center font-extrabold mb-10 animate-fadeIn">
          Recent <span className="text-custom-light-orange">Projects</span>
        </h3>
        <p className="my-6 text-sm md:text-base leading-relaxed text-gray-800 text-center animate-fadeIn delay-200">
          Here you'll find a small gathering of the latest projects I've worked on over the last couple of years.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex flex-col bg-gray-200 text-gray-100 p-4 shadow-lg w-full sm:w-1/3 lg:w-1/4 rounded-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-none"
              />
              <h3 className="text-xl text-gray-600 font-bold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <Link
                to={`/projects/${project._id}`}
                className="mt-4"
              >
                <button
                  className="px-4 py-2 bg-custom-light-orange text-gray-800 text-xs font-semibold rounded-none hover:bg-blue-600 transition-all duration-300"
                >
                  View Project
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
