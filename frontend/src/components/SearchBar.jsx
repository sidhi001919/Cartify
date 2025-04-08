import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    <AnimatePresence>
      {showSearch && visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border-t border-b bg-white shadow-sm text-center relative"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center border border-primary/20 focus-within:border-primary px-5 py-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white transition-colors duration-300"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none bg-inherit text-sm placeholder:text-gray-400"
              type="text"
              placeholder="Search products..."
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="w-4 opacity-60"
              src={assets.search_icon}
              alt="Search"
            />
          </motion.div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowSearch(false)}
            className="inline w-4 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
            src={assets.cross_icon}
            alt="Close search"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
