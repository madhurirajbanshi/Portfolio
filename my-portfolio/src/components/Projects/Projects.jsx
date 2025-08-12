import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "Page Voyage",
      description:
        "Digital book discovery platform with personalized recommendations and social reading features",
      link: "https://github.com/madhurirajbanshi/Page-Voyage",
      hostedLink: "https://book-voyager-frontend.onrender.com",
      image: "/PageVoyage.png",
    },
    {
      title: "Red Cross Blood Management System",
      description:
        "Comprehensive tracking and management system for blood donations and inventory",
      link: "https://github.com/madhurirajbanshi/RedCross_System",
      image: "/RedCross.png",
    },
    {
      title: "GovLens - Government Sentiment Analyzer",
      description:
        "Advanced tool for analyzing sentiment and trends in government communications",
      link: "https://github.com/madhurirajbanshi/GovLens",
      hostedLink: "https://govlens.onrender.com",
      image: "/GovLens.png",
    },
  ];

  return (
    <div
      className="min-h-screen mt-10 flex flex-col items-center justify-start p-5 md:p-16 py-24"
      id="projects"
      style={{ background: "#0B101B" }}
    >
      <motion.div
        className="w-full max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning from web
            applications to algorithm visualizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => {
            const CardContent = (
              <motion.div
                className="overflow-hidden rounded-xl flex flex-col h-full cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)",
                  boxShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(90, 100, 190, 0.2)",
                }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-1.5 rounded-full transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-5 bg-gradient-to-b from-blue-900/20 to-purple-900/10 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-blue-400 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </motion.div>
            );
            return project.hostedLink ? (
              <a
                key={index}
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
