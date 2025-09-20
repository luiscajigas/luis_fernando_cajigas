"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Coffee, Zap, User, MapPin, Calendar } from "lucide-react";

export default function Inicio() {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "BIENVENIDO A MI PORTAFOLIO",
    "ESPERO TE GUSTE MI TRABAJO",
    ";)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-end overflow-hidden">
     
      {/* Título de fondo */}
      <h1 className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold text-neutral-700 dark:text-neutral-700 opacity-10 select-none leading-none">
        INICIO
      </h1>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gray-400/30 dark:bg-neutral-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div 
        className="absolute bottom-20 right-6 max-w-md text-right z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
       
        {/* Quote rotativo */}
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-6 p-4 bg-gray-100/80 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-neutral-700/30 shadow-lg"
        >
          <p className="text-blue-700 dark:text-blue-700 text-sm font-bold hover:text-blue-500 dark:hover:text-blue-500">
            "{quotes[currentQuote]}"
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div 
          className="flex justify-end gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { icon: Calendar, value: "5", label: "Años", color: "text-blue-900 dark:text-blue-900" },
            { icon: Code, value: "7", label: "Proyectos", color: "text-blue-900 dark:text-blue-900" },
            { icon: Coffee, value: "∞", label: "Café", color: "text-blue-900 dark:text-blue-900" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center bg-gray-100/60 dark:bg-neutral-800/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200/40 dark:border-gray-700/30"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <stat.icon className={`${stat.color} mx-auto mb-1`} size={16} />
              <p className="text-gray-900 dark:text-white text-sm font-bold">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto principal */}
        <motion.div 
          className="text-xs leading-relaxed text-gray-800 dark:text-gray-300 bg-gray-100/80 dark:bg-neutral-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/30 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center gap-2 mb-4 justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <User className="text-blue-900 dark:text-blue-900" size={16} />
            <span className="text-gray-800 dark:text-gray-400 font-semibold">Luis Fernando Cajigas</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 mb-4 justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <MapPin className="text-blue-900 dark:text-blue-900" size={14} />
            <span className="text-gray-800 dark:text-gray-400 font-semibold">Pasto, Nariño - Colombia</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-800 dark:text-gray-300"
          >
            Soy estudiante de quinto semestre de <span className="font-bold text-gray-900 dark:text-white">Ingeniería de Software</span> en la
            Universidad Cooperativa de Colombia, con formación especializada en <span className="font-bold text-gray-900 dark:text-white">frontend y backend</span>.
            <br /><br />
            Nacido en 2005 en Pasto, Nariño, descubrí mi pasión por la programación desde temprana edad.
            A lo largo de mi formación he realizado diversos cursos en <span className="font-bold text-gray-900 dark:text-white">desarrollo de software</span> y
            <span className="font-bold text-gray-900 dark:text-white"> creación de interfaces digitales</span>, fortaleciendo mis habilidades técnicas y creativas.
            <br /><br />
            Mi propósito es explorar las infinitas posibilidades que ofrece la programación y el diseño digital,
            buscando constantemente nuevas formas de expresión a través de la <span className="font-bold text-gray-900 dark:text-white">innovación</span>,
            la <span className="font-bold text-gray-900 dark:text-white">experimentación</span> y el <span className="font-bold text-gray-900 dark:text-white">pensamiento crítico</span>.
          </motion.p>
        </motion.div>

        {/* Indicador de explorar */}
        <motion.div 
          className="mt-6 flex justify-end"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-2 font-bold text-gray-600 dark:text-gray-500 text-xs">
            <Zap size={12} className="text-yellow-400" />
            <span>Explora mi portafolio</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}