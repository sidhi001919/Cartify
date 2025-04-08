import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { path: '/add', icon: assets.add_icon, label: 'Add Items' },
    { path: '/list', icon: assets.order_icon, label: 'List Items' },
    { path: '/orders', icon: assets.order_icon, label: 'Orders' },
  ];

  return (
    <motion.div
      initial={{ width: '18%' }}
      animate={{ width: isCollapsed ? '80px' : '18%' }}
      transition={{ duration: 0.3 }}
      className="min-h-screen border-r bg-white shadow-sm relative"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white p-1.5 rounded-full shadow-md border border-neutral-100"
      >
        <motion.img
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          src={assets.dropdown_icon}
          alt="toggle sidebar"
          className="w-3 h-3"
        />
      </motion.button>

      <div className="flex flex-col gap-2 pt-6 px-4">
        <AnimatePresence>
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-blue-300'
                }`
              }
            >
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                src={item.icon}
                alt={item.label}
                className="w-5 h-5"
              />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Sidebar;