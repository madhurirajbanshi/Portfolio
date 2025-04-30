import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-[200px] flex items-center justify-center p-4 md:p-10 my-16"
      id="about"
    >
      <motion.div
        className="w-full max-w-5xl bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-2/5 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background gradient */}
            <motion.div
              className="absolute -z-10 left-0 top-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>

            {/* Image container */}
            <div className="relative h-full min-h-[250px] md:min-h-[400px] p-4">
              <motion.div
                className="absolute inset-0 m-4 border-2 border-purple-500/50 rounded-lg"
                animate={{
                  borderColor: [
                    "rgba(168, 85, 247, 0.5)",
                    "rgba(59, 130, 246, 0.5)",
                    "rgba(168, 85, 247, 0.5)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              ></motion.div>

              <img
                src="https://img.freepik.com/premium-photo/portrait-indian-businesswoman-white-background-holding-laptop_665346-22333.jpg?w=2000"
                alt="Madhuri Rajbanshi"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Side: About Text */}
          <motion.div
            className="w-full md:w-3/5 p-6 text-white"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                About Me
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.div>
              </motion.span>
            </motion.h2>

            <motion.p
              className="mt-4 text-base md:text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Hello! I'm Madhuri Rajbanshi, a passionate full-stack developer
              with expertise in creating elegant, responsive, and
              high-performance web applications. I blend creativity with
              technical precision to deliver solutions that not only look great
              but perform flawlessly.
            </motion.p>

            <motion.p
              className="mt-3 text-base md:text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              With extensive experience in React, .NET, and Node.js, I thrive on
              turning complex problems into simple, beautiful solutions. My
              approach combines clean code principles with user-centered design
              to create applications that provide exceptional experiences.
            </motion.p>

            <motion.p
              className="mt-3 text-base md:text-lg leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              I'm constantly exploring emerging technologies and best practices,
              ensuring my skills remain at the cutting edge. When I'm not
              coding, you'll find me contributing to open-source projects and
              mentoring aspiring developers in my community.
            </motion.p>

            <motion.div
              className="mt-5 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-transparent border border-purple-500 text-white py-2 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
