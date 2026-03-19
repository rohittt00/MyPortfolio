import React, { useState } from "react";
import { projects } from "../../constants";

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-white rounded-2xl shadow-lg 
            overflow-hidden hover:shadow-purple-500/40 transition duration-300"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map(
                  (tag, index) =>
                    tag && (
                      <span
                        key={index}
                        className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    )
                )}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleOpenModal(project)}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 
                text-white py-2 rounded-lg text-sm font-semibold"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal} // ✅ backdrop click close
        >
          <div
            className="bg-gray-900 rounded-xl max-w-3xl w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()} // ✅ prevent inside click
          >
            {/* 🔥 BACK BUTTON (Mobile) */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 left-4 text-white text-2xl bg-black/50 px-3 py-1 rounded-full md:hidden"
            >
              ←
            </button>

            {/* 🔥 CLOSE BUTTON (Desktop) */}
            <button
              onClick={handleCloseModal}
              className="hidden md:block absolute top-3 right-4 text-white text-3xl hover:text-purple-500"
            >
              &times;
            </button>

            {/* IMAGE */}
            <div className="flex justify-center p-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                {selectedProject.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map(
                  (tag, index) =>
                    tag && (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs text-purple-400 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    )
                )}
              </div>

              {/* LINKS */}
              <div className="flex gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded"
                  >
                    GitHub
                  </a>
                )}

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;