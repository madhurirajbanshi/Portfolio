import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceId = "service_9adg3ch";
    const templateId = "template_8g5bvay";
    const publicKey = "UXjK4LFqBoGCEkDc8";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || "Portfolio Contact Form",
      message: formData.message,
      to_name: "Madhuri",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setSubmitStatus("error");
        setErrorMessage("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
      });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/madhurirajbanshi",
      color: "hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/madhuri-rajbanshi/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/MadhuriRaj83809",
      color: "hover:bg-blue-400",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-8 md:p-16 py-24 -mt-6"
      id="contact"
    >
      <motion.div
        className="w-full max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <motion.div
          className="mb-16 text-center"
          variants={childVariants}
          custom={0}
        >
          <h2 className="text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-800"
            variants={childVariants}
            custom={1}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div>
                {errorMessage && (
                  <motion.div
                    className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Failed to send message. Please try again later.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={childVariants}
            custom={2}
            className="flex flex-col gap-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:madhurirajbanshi318@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      madhurirajbanshi318@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Kachankawal,Jhapa</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-gray-800 hover:bg-opacity-80 ${link.color} py-3 px-5 rounded-lg text-white transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm">
                  Looking for new opportunities! I'm open to collaborations and
                  freelance work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
