import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectList = [
    {
      title: "Page Voyage",
      description: "Digital book discovery platform",
      link: "https://github.com/madhurirajbanshi/Page-Voyage",
      image: "/PageVoyage.png",
      tags: ["fullstack", "react"],
    },
    {
      title: "Red Cross Blood Management System",
      description: "Tracking and management system for blood donations",
      link: "https://github.com/madhurirajbanshi/RedCross_System",
      image: "/RedCross.png",
      tags: ["fullstack", "react"],
    },
    {
      title: "Know Your Algo",
      description: "Algorithm visualization and education tool",
      link: "https://github.com/bpcancode/know-ur-algo",
      image: "/Know.png",
      tags: ["frontend", "education"],
    },
    {
      title: "Todo List App",
      description: "Simple yet effective task management application",
      link: "https://github.com/madhurirajbanshi/Todo-List",
      image: "/TodoList.png",
      tags: ["frontend", "react"],
    },
    {
      title: "GovLens - Government Sentiment Analyzer",
      description: "Tool analyzing government communications",
      link: "https://github.com/madhurirajbanshi/GovLens",
      image: "/GovLens.png",
      tags: ["ai", "fullstack"],
    },
    {
      title: "Tic-Tac-Toe",
      description: "Interactive game with unbeatable AI opponent",
      link: "https://github.com/madhurirajbanshi/Tic-Tac-Toe",
      image: "/Tic-Tac-Toe.png",
      tags: ["game", "frontend"],
    },
  ];

  const categories = [
    { name: "all", label: "All Projects" },
    { name: "frontend", label: "Frontend" },
    { name: "fullstack", label: "Full Stack" },
    { name: "game", label: "Games" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((project) => project.tags.includes(activeFilter));

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-8 md:p-16 py-24"
      id="projects"
    >
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects spanning from web applications to
            algorithm visualizations
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === category.name
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter(category.name)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-0.5 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 bg-gray-900 rounded-2xl overflow-hidden h-full">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
