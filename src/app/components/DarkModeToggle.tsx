"use client";

import { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import useLang from "../hooks/useLang";
import { t } from "../i18n";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function DarkModeToggle({ darkMode, setDarkMode }: Props) {
  const lang = useLang();
  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="mt-auto mb-4">
      <motion.div
        className="relative bg-gray-200/40 dark:bg-neutral-800/40 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/30 rounded-full p-1 w-24 h-10"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1 w-10 h-8 bg-gradient-to-r from-cyan-500 to-purple-800 rounded-full shadow-lg"
          initial={false}
          animate={darkMode ? { x: 48 } : { x: 0 }}
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
              !darkMode 
                ? "text-white" 
                : "text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={t("sidebar_light_mode", lang)}
          >
            <Sun size={16} />
          </motion.button>
          
          <motion.button
            onClick={() => setDarkMode(true)}
            className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ${
              darkMode 
                ? "text-white" 
                : "text-gray-600 hover:text-gray-800"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={t("sidebar_dark_mode", lang)}
          >
            <Moon size={16} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
export default memo(DarkModeToggle, (prev, next) => (
  prev.darkMode === next.darkMode && prev.setDarkMode === next.setDarkMode
));
