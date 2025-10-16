"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Zap, User, MapPin, Calendar } from "lucide-react";
import dynamic from "next/dynamic";

const Model3D = dynamic(() => import("../components/Models3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
    </div>
  ),
});

export default function Inicio() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const quotes = [
    "BIENVENIDO A MI PORTAFOLIO",
    "ESPERO TE GUSTE MI TRABAJO",
    "AYER FUNCIONABA"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

  const getIconColor = () => {
     return isDarkMode ? '#ffffff' : 'rgb(192, 132, 252)';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full h-full flex items-center justify-between px-8">
        {/* Modelo 3D - Lado izquierdo */}
        <motion.div 
          className="flex-1 h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="w-full h-full max-w-[600px]">
            <Model3D darkMode={isDarkMode} />
          </div>
        </motion.div>

        {/* Contenido - Lado derecho */}
        <motion.div 
          className="flex-1 max-w-md pr-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 backdrop-blur-sm rounded-xl border shadow-lg"
            style={{
              backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20, 20, 20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
            }}
          >
            <p 
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: getTextColor('rgb(168, 85, 247)', 'rgb(96, 165, 250)') }}
            >
              "{quotes[currentQuote]}"
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-start gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Calendar, value: "4", label: "Años Exp" },
              { icon: Code, value: "7", label: "Proyectos" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center backdrop-blur-sm px-3 py-2 rounded-lg border transition-all duration-200"
                style={{
                  backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20, 20, 20)'),
                  borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: getBgColor('rgba(229, 231, 235)', 'rgba(55, 65, 81, 0.6)')
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon 
                  className="mx-auto mb-1" 
                  size={16} 
                  style={{ color: getIconColor() }}
                />
                <p 
                  className="text-sm font-bold"
                  style={{ color: getTextColor('#000000', 'white') }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: getTextColor('#000000', 'white') }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-sm leading-relaxed backdrop-blur-sm p-6 rounded-xl border shadow-xl"
            style={{
              backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20,20,20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)'),
              color: getTextColor('black', 'white')
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <User 
                size={16} 
                style={{ color: getIconColor() }}
              />
              <span 
                className="font-semibold"
                style={{ color: getTextColor('#000000', '#FFFFFF') }}
              >
                Luis Fernando Cajigas
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <MapPin 
                size={14} 
                style={{ color: getIconColor() }}
              />
              <span 
                className="font-semibold"
                style={{ color: getTextColor('#000000', '#FFFFFF') }}
              >
                Pasto, Nariño - Colombia
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ color: getTextColor('#1f2937', '#d1d5db') }}
            >
              Soy estudiante de quinto semestre de{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                Ingeniería de Software
              </span>{" "}
              en la Universidad Cooperativa de Colombia, con formación especializada en{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                frontend y backend
              </span>.
              <br /><br />
              Nacido en 2005 en Pasto, Nariño, descubrí mi pasión por la programación desde temprana edad.
              A lo largo de mi formación he realizado diversos cursos en{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                desarrollo de software
              </span>{" "}
              y{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                creación de interfaces digitales
              </span>, fortaleciendo mis habilidades técnicas y creativas.
              <br /><br />
              Mi propósito es explorar las infinitas posibilidades que ofrece la programación y el diseño digital,
              buscando constantemente nuevas formas de expresión a través de la{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                innovación
              </span>,
              la{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                experimentación
              </span>{" "}
              y el{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                pensamiento crítico
              </span>.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-6 flex justify-start"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 font-bold text-xs">
              <Zap size={12} className="text-yellow-400" />
              <span style={{ color: getTextColor('#000000', '#FFFFFF') }}>
                Explora mi portafolio
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}