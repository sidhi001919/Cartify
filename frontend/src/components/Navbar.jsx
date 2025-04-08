import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between py-6 px-4 md:px-8 bg-neutral shadow-sm"
    >
      <Link to="/" className="text-primary text-2xl font-bold tracking-wider">
        CARTIFY
      </Link>

      <ul className="hidden sm:flex gap-8 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-2 py-1 transition-colors duration-200 hover:text-primary ${
              isActive ? "text-primary" : "text-gray-600"
            }`
          }
        >
          <span>HOME</span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `relative px-2 py-1 transition-colors duration-200 hover:text-primary ${
              isActive ? "text-primary" : "text-gray-600"
            }`
          }
        >
          <span>COLLECTION</span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-2 py-1 transition-colors duration-200 hover:text-primary ${
              isActive ? "text-primary" : "text-gray-600"
            }`
          }
        >
          <span>ABOUT</span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative px-2 py-1 transition-colors duration-200 hover:text-primary ${
              isActive ? "text-primary" : "text-gray-600"
            }`
          }
        >
          <span>CONTACT</span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </motion.button>

        <div className="group relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (token ? null : navigate("/login"))}
            className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </motion.button>
          {token && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50"
            >
              <div className="flex flex-col gap-2 w-40 py-3 px-4 bg-white shadow-lg rounded-lg border border-neutral-dark">
                <button
                  onClick={() => navigate("/profile")}
                  className="text-left px-2 py-1.5 text-gray-600 hover:text-primary hover:bg-neutral-light rounded transition-colors duration-200"
                >
                  My Profile
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="text-left px-2 py-1.5 text-gray-600 hover:text-primary hover:bg-neutral-light rounded transition-colors duration-200"
                >
                  Orders
                </button>
                <button
                  onClick={logout}
                  className="text-left px-2 py-1.5 text-gray-600 hover:text-primary hover:bg-neutral-light rounded transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </div>
        <Link
          to="/cart"
          className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-200"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {getCartCount() > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-1 top-1 w-4 h-4 bg-primary text-white text-xs flex items-center justify-center rounded-full"
              >
                {getCartCount()}
              </motion.div>
            )}
          </motion.div>
        </Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisible(true)}
          className="p-2 text-gray-600 hover:text-primary transition-colors duration-200 sm:hidden"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>

      {/* Sidebar menu for small screens */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: visible ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl z-50"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-neutral-dark">
            <h2 className="text-xl font-bold text-primary">CARTIFY</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisible(false)}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-neutral-light text-primary"
                    : "text-gray-600 hover:bg-neutral-light hover:text-primary"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-neutral-light text-primary"
                    : "text-gray-600 hover:bg-neutral-light hover:text-primary"
                }`
              }
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-neutral-light text-primary"
                    : "text-gray-600 hover:bg-neutral-light hover:text-primary"
                }`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-neutral-light text-primary"
                    : "text-gray-600 hover:bg-neutral-light hover:text-primary"
                }`
              }
            >
              CONTACT
            </NavLink>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
