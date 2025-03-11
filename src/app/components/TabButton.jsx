import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white font-semibold"
    : "text-gray-400 hover:text-blue-300 transition-colors";

  return (
    <button onClick={selectTab} className="relative">
      <p className={`mr-3 text-lg ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-blue-500 to-green-500 mt-2 rounded-md"
      />
    </button>
  );
};

export default TabButton;