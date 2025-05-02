import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8" style={{ background: "#0B101B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Me</h3>
            <p className="text-gray-300 mb-6 text-sm">
              I'm a passionate full-stack developer focused on creating
              intuitive and efficient web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/madhurirajbanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/madhurirajbanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/madhurirajbanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300 text-sm">
                  madhurirajbanshi318@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300 text-sm">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Madhuri Rajbanshi. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <FaHeart className="text-pink-500 mx-1" /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
