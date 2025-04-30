import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-white min-h-screen flex flex-col md:flex-row w-full justify-center items-center p-8 md:p-20 gap-10 -mt-10">
      <motion.div
        className="md:w-1/2 max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
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
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I am a versatile full-stack developer with a focus on delivering
          efficient and scalable web applications. Experienced in React, .NET,
          and Node.js, I take pride in writing clean and maintainable code that
          enhances user experience and drives business success.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          View My Work
        </motion.a>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -z-10 -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
          <motion.div
            className="absolute -z-10 -left-10 -bottom-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-75"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-600">
            <img
              src="https://img.freepik.com/premium-photo/portrait-indian-businesswoman-white-background-holding-laptop_665346-22333.jpg?w=2000"
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
