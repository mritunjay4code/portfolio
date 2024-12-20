import React from "react";

const Project = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      codeLink: "#",
      liveDemoLink: "#",
      image: "ecom.avif",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      tags: ["React", "Firebase", "Material-UI"],
      codeLink: "#",
      liveDemoLink: "#",
      image: "ecom.avif",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      tags: ["React", "Firebase", "Material-UI"],
      codeLink: "#",
      liveDemoLink: "#",
      image: "ecom.avif",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      tags: ["React", "Firebase", "Material-UI"],
      codeLink: "#",
      liveDemoLink: "#",
      image: "ecom.avif",
    },
  ];

  return (
    <div>
      <h1>Future project</h1>
      <div
        className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        id="project"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Code
                </a>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-white bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Project;
