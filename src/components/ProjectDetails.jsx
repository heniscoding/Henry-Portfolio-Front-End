import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProjects } from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const { data } = await fetchProjects();
        const selectedProject = data.find((proj) => proj._id === id);
        setProject(selectedProject);
      } catch (err) {
        console.error(err);
      }
    };

    loadProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="pt-20 px-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Projects
      </button>
      <div className="bg-white p-6 shadow rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-4xl font-bold mt-4">{project.title}</h1>
        <p className="text-gray-600 mt-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 hover:text-blue-700"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
