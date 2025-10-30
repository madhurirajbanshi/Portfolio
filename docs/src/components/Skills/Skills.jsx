import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDotnet,
  SiPostman,
  SiMysql,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        {
          icon: <FaReact className="text-blue-400 text-2xl" />,
          name: "React.js",
        },
        {
          icon: <FaHtml5 className="text-orange-500 text-2xl" />,
          name: "HTML5",
        },
        {
          icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
          name: "CSS3",
        },
        {
          icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
          name: "TailwindCSS",
        },
        {
          icon: <FaReact className="text-blue-300 text-2xl" />,
          name: "React Native",
        },

        {
          icon: <FaJsSquare className="text-yellow-400 text-2xl" />,
          name: "JavaScript (ES6+)",
        },
      ],
    },
    backend: {
      title: "Backend",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          icon: <SiDotnet className="text-blue-500 text-2xl" />,
          name: "ASP.NET Core",
        },
        {
          icon: <FaNodeJs className="text-green-500 text-2xl" />,
          name: "Node.js",
        },
        {
          icon: <span className="text-indigo-400 text-xl">🔗</span>,
          name: "RESTful APIs",
        },
        {
          icon: <SiGraphql className="text-pink-500 text-2xl" />,
          name: "GraphQL",
        },
        {
          icon: <span className="text-green-400 text-xl">🔐</span>,
          name: "Authentication & Authorization",
        },
        {
          icon: <span className="text-blue-400 text-xl">📚</span>,
          name: "Entity Framework Core",
        },
      ],
    },
    tools: {
      title: "Tools & Other",
      color: "from-pink-500 to-orange-400",
      skills: [
        { icon: <FaGitAlt className="text-red-500 text-2xl" />, name: "Git" },
        {
          icon: <FaGithub className="text-gray-300 text-2xl" />,
          name: "GitHub",
        },
        {
          icon: <SiMysql className="text-blue-600 text-2xl" />,
          name: "SQL Server",
        },
        {
          icon: <SiPostman className="text-orange-500 text-2xl" />,
          name: "Postman",
        },
        {
          icon: <FaCode className="text-indigo-500 text-2xl" />,
          name: "Visual Studio",
        },
        {
          icon: <SiSupabase className="text-green-600 text-2xl" />,
          name: "Supabase",
        },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-12 py-24"
      id="skills"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Technical Expertise
          </span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/80 backdrop-blur-md p-1 rounded-full flex shadow-xl">
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm md:text-base ${
                  activeTab === category
                    ? `bg-gradient-to-r ${skillCategories[category].color} text-white shadow-lg`
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(category)}
                whileHover={{ scale: activeTab !== category ? 1.05 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                {skillCategories[category].title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-800/50 p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.div
              key={category}
              className={`${activeTab === category ? "block" : "hidden"}`}
              initial="hidden"
              animate={activeTab === category ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {skillCategories[category].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-md border border-gray-700/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/80 transition-all shadow-lg"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 20px rgba(79, 70, 229, 0.3)`,
                    }}
                  >
                    <div className="mb-4 p-4 rounded-full bg-gray-900/80 border border-gray-700/50 shadow-inner flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
