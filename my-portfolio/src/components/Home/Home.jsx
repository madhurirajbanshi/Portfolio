import { useState } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const [cvError, setCvError] = useState(false);

  const handleCVDownload = (e) => {};

  return (
    <div className="text-white min-h-screen flex flex-col md:flex-row w-full justify-center items-center p-8 md:p-20 gap-10 -mt-10">
      <motion.div
        className="md:w-1/2 max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <motion.span
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi,
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Madhuri Rajbanshi
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I'm a passionate full-stack developer specializing in building
          responsive and robust web applications. Committed to continuous
          learning, adaptability, and contributing to impactful digital
          experiences.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            View My Work
          </a>

          <a
            href="/Madhuri.pdf"
            download="Madhuri_Rajbanshi_CV.pdf"
            className={`py-3 px-6 text-base ${
              cvError
                ? "bg-red-900/20 border-red-500/30"
                : "bg-gray-800 border-purple-500/30"
            } border rounded-lg font-medium flex items-center gap-2 hover:bg-gray-700 transition-colors`}
            style={{ transition: "transform 0.2s, background-color 0.2s" }}
            onClick={handleCVDownload}
            onAuxClick={handleCVDownload}
          >
            <FileText size={18} className={cvError ? "text-red-400" : ""} />
            {cvError ? "CV Unavailable" : "Download CV"}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="relative rounded-full p-0.5 bg-gradient-to-r from-blue-500/70 to-purple-600/70 overflow-hidden">
            <img
              src="/Madhuri.png"
              alt="Madhuri Rajbanshi"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
