import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

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
    {
      title: "AI Image Generator",
      description:
        "Generative image app using AI models — repo and deployed project on Vercel",
      link: "https://github.com/madhurirajbanshi/ai-image-generator",
      hostedLink: "https://ai-image-generator-beta-blond.vercel.app/",
      image: "/ai-image.png",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < projectList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

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

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full transition-all shadow-lg ${
              currentIndex === 0
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-blue-600/80 hover:bg-blue-500 hover:scale-110"
            }`}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-8" style={{ width: "max-content" }}>
              {projectList.map((project, index) => {
                const CardContent = (
                  <motion.div
                    className="overflow-hidden rounded-xl flex flex-col h-full cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      width: "350px",
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
                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                );
                return project.hostedLink ? (
                  <a
                    key={index}
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={index}>{CardContent}</div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === projectList.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full transition-all shadow-lg ${
              currentIndex === projectList.length - 1
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-blue-600/80 hover:bg-blue-500 hover:scale-110"
            }`}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
