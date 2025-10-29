"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const initial = stored === "en" ? "en" : "es";
    setLang(initial);
    if (typeof document !== "undefined") {
      document.documentElement.lang = initial;
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as "es" | "en" | undefined;
      if (detail === "es" || detail === "en") setLang(detail);
    };
    window.addEventListener("app:language", handler as EventListener);
    return () => window.removeEventListener("app:language", handler as EventListener);
  }, []);

  const toggle = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", next);
      window.dispatchEvent(new CustomEvent("app:language", { detail: next }));
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  return (
    <div className="mt-4">
      <motion.div
        className="relative bg-gray-200/40 dark:bg-neutral-800/40 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/30 rounded-full p-1 w-24 h-10"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1 w-10 h-8 bg-gradient-to-r from-cyan-500 to-purple-800 rounded-full shadow-lg"
          initial={false}
          animate={lang === "es" ? { x: 0 } : { x: 48 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        />
        
        {/* botones */}
        <div className="relative flex justify-between items-center">
          <motion.button
            onClick={() => {
              const next = "es";
              setLang(next);
              if (typeof window !== "undefined") {
                localStorage.setItem("lang", next);
                window.dispatchEvent(new CustomEvent("app:language", { detail: next }));
              }
              if (typeof document !== "undefined") {
                document.documentElement.lang = next;
              }
            }}
            className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-200 text-xs font-bold ${
              lang === "es" 
                ? "text-white" 
                : "text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Español"
          >
            ES
          </motion.button>
          
          <motion.button
            onClick={() => {
              const next = "en";
              setLang(next);
              if (typeof window !== "undefined") {
                localStorage.setItem("lang", next);
                window.dispatchEvent(new CustomEvent("app:language", { detail: next }));
              }
              if (typeof document !== "undefined") {
                document.documentElement.lang = next;
              }
            }}
            className={`w-10 h-8 flex items-center justify-center rounded-full transition-colors duration-200 text-xs font-bold ${
              lang === "en" 
                ? "text-white" 
                : "text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="English"
          >
            EN
          </motion.button>
        </div>
       </motion.div>
     </div>
   );
 }