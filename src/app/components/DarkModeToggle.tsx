"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function DarkModeToggle({ darkMode, setDarkMode }: Props) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="mt-auto mb-4">
      <motion.div
        className="relative bg-neutral-800/40 backdrop-blur-sm border border-gray-700/30 rounded-full p-1 w-24"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute top-1 w-10 h-8 bg-gradient-to-r from-neutral-700 to-blue-900 rounded-full shadow-lg"
          animate={{
            x: darkMode ? 52 : 4,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        />
        
        <div className="relative flex justify-between items-center">
          <motion.button
            onClick={() => setDarkMode(false)}
            className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
              !darkMode ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sun size={16} />
          </motion.button>
          
          <motion.button
            onClick={() => setDarkMode(true)}
            className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
              darkMode ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Moon size={16} />
          </motion.button>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-xs text-gray-500 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {darkMode ? "Modo oscuro" : "Modo claro"}
      </motion.p>
    </div>
  );
}