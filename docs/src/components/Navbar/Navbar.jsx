import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMenu2Fill } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="flex flex-wrap items-center justify-between text-white px-6 pt-6 md:px-20 relative">
      <motion.span
        className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.span>

      <motion.ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex mt-4 md:mt-0 flex-col md:flex-row md:items-center bg-black bg-opacity-30 backdrop-blur-sm md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none gap-4 md:gap-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            className="hover:text-purple-400 cursor-pointer transition duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <a href={`#${item.toLowerCase()}`} className="relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="md:hidden">
        {menu ? (
          <motion.div whileTap={{ scale: 0.9 }} onClick={() => setMenu(false)}>
            <RiCloseLine
              size={30}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            />
          </motion.div>
        ) : (
          <motion.div whileTap={{ scale: 0.9 }} onClick={() => setMenu(true)}>
            <RiMenu2Fill
              size={30}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300"
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
