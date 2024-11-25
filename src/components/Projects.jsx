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
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <Link
              to={`/projects/${project._id}`}
              className="text-blue-500 mt-4 block hover:text-blue-700"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
