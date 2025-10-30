"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  // Partículas inicializadas sólo en el cliente para evitar errores de hidratación
  const [particles, setParticles] = useState<{ left: number; top: number; dx: number; dy: number }[]>([]);
  // Detectar modo oscuro/claro para ajustar estilos del splash
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const root = document.documentElement;
    const initial = root.classList.contains("dark");
    setIsDarkMode(initial);
    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => setIsVisible(false), 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  // Inicializar posiciones de partículas en el cliente
  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        dx: Math.random() * 200 - 100,
        dy: Math.random() * 200 - 100,
      }))
    );
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-gradient-to-br ${
            isDarkMode ? "from-neutral-900 via-neutral-800 to-black" : "from-gray-50 via-white to-gray-200"
          }`}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeInOut" 
          }}
        >
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
                animate={{
                  x: [0, p.dx],
                  y: [0, p.dy],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-600/10 to-gray-800/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="relative z-10 text-center">
            
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring", 
                stiffness: 200 
              }}
            >
              <div className="relative">
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r rounded-xl flex items-center justify-center shadow-2xl ${
                    isDarkMode ? "from-blue-900 to-blue-800" : "from-purple-600 to-cyan-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.4)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code className="text-white" size={32} />
                </motion.div>
                
                <motion.div
                  className="absolute -top-2 -right-2 text-gray-400"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles size={16} />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <motion.span
                  className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Luis Fernando
                </motion.span>
              </h1>
              
              <motion.p
                className={`text-xl md:text-2xl mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Desarrollador <span className={`${isDarkMode ? "text-blue-400" : "text-blue-900"} font-semibold`}>Full Stack</span>
              </motion.p>
            </motion.div>

            <motion.div
              className="w-80 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Cargando portafolio...</span>
                <span className="text-sm text-blue-800 font-mono">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
              
              <div className={`w-full rounded-full h-1 overflow-hidden ${isDarkMode ? "bg-gray-800/50" : "bg-gray-200"}`}>
                <motion.div
                  className={`h-full bg-gradient-to-r rounded-full shadow-lg ${
                    isDarkMode ? "from-neutral-600 to-neutral-800" : "from-purple-600 to-cyan-500"
                  }`}
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-neutral-400/30 border-t-neural-400 rounded-full"
              />
              <span>BIENVENIDO A MI PORTAFOLIO</span>
            </motion.div>
          </div>

          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${isDarkMode ? "from-black/50" : "from-gray-300/50"} to-transparent`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

