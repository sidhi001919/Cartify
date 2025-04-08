import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-4 px-6 bg-white shadow-sm"
    >
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4"
      >
        {/* <span className="text-4xl font-bold text-blue-700 hidden sm:block tracking-wide">
          CARTIFY
        </span> */}
        <div className="hidden sm:block">
  <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-wide">
    CARTIFY
  </span>
  <p className="text-md text-gray-500 mt-1 ml-1 tracking-tight">
    Admin
  </p>
</div>

      </motion.div>

      <motion.button
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05, backgroundColor: "#ff4d4d" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setToken("")}
        className="px-6 py-2.5 text-sm font-semibold text-black bg-primary rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Logout
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
