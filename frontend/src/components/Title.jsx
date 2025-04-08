import React from "react";
import { motion } from "framer-motion";

const Title = ({ text1, text2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-4 mb-6"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="h-[2px] bg-primary"
      />
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-lg tracking-wide"
      >
        {text1} <span className="text-primary font-semibold">{text2}</span>
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="h-[2px] bg-primary"
      />
    </motion.div>
  );
};

export default Title;
