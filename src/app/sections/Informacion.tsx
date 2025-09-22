"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Languages,
  User,
  MapPin,
  Cake,
  Award,
  Coffee,
  Code,
  Calendar,
  Star,
  Zap,
  Activity,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiDjango,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaJava, FaGamepad, FaBurger } from "react-icons/fa6";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Informacion() {
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false);
  const [mostrarConocerme, setMostrarConocerme] = useState(false);
  const [mostrarLogros, setMostrarLogros] = useState(false);
  const [disponible, setDisponible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  //modo oscuro
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

  const frases = [
    "LA ÚNICA FORMA DE APRENDER UN NUEVO LENJUAGUE ES ESCRÍBIENDO PROGRAMAS EN ÉL",
    "PRIMERO RESUELVE EL PROBLEMA, DESPUES ESCRIBE EL CÓDIGO",
    "SIEMPRE APRENDIENDO Y ADQUIRIENDO NUEVAS HABILIDADES"
  ];
  const [fraseActual, setFraseActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [frases.length]);

  const logros = [
    { titulo: "4 años de experiencia", icono: <Calendar className="text-blue-950" size={20} /> },
    { titulo: "7 proyectos completados", icono: <Code className="text-blue-950" size={20} /> },
    { titulo: "100% autodidacta inicialmente", icono: <Star className="text-blue-950" size={20} /> }
  ];

  const skillsAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

  return (
    <div className="w-full h-full relative overflow-y-auto scrollbar-hide">
      
      {/* particulas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDarkMode ? 'rgba(163, 163, 163, 0.2)' : 'rgba(156, 163, 175, 0.3)'
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <h1 
        className="absolute top-130 left-1/2 -translate-x-1/2 text-9xl sm:text-6xl lg:text-8xl font-extrabold bg-gradient-to-r opacity-20 select-none leading-none"
        style={{ 
          backgroundImage: isDarkMode 
            ? 'linear-gradient(to right, rgb(82, 82, 82), rgb(38, 38, 38))'
            : 'linear-gradient(to right, rgb(209, 213, 219), rgb(107, 114, 128))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}
      >
        INFORMACION
      </h1>

      <motion.div
        className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border"
        style={{
          backgroundColor: isDarkMode ? 'rgba(38, 38, 38, 0.8)' : 'rgba(243, 244, 246, 0.9)',
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(209, 213, 219, 0.7)'
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className={`w-3 h-3 rounded-full ${disponible ? 'bg-green-500' : 'bg-red-500'}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span 
          className="text-sm font-medium"
          style={{ color: getTextColor('#374151', '#d1d5db') }}
        >
          {disponible ? 'Disponible para proyectos' : 'No disponible'}
        </span>
      </motion.div>

      <div className="absolute top-16 right-4 flex flex-col gap-2 z-20">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMostrarIdiomas(!mostrarIdiomas)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-900 hover:from-cyan-500 hover:to-purple-800 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <Languages size={16} />
          Idiomas
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMostrarLogros(!mostrarLogros)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-900 hover:from-cyan-500 hover:to-purple-800 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <Award size={16} />
          Logros
        </motion.button>
      </div>

      <AnimatePresence>
        {mostrarIdiomas && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute top-32 right-4 w-72 backdrop-blur-md rounded-xl p-6 shadow-2xl z-30 border"
            style={{
              backgroundColor: getBgColor('rgba(209, 213, 219)', 'rgb(20, 20, 20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
            }}
          >
            <h3 
              className="text-lg font-bold mb-4 flex items-center gap-2"
              style={{ color: getTextColor('#111827', '#e5e7eb') }}
            >
              <Languages size={20} className="text-blue-800" />
              Idiomas
            </h3>
            <div className="space-y-4">
              {[
                { idioma: "Español (Nativo)", nivel: 100, color: "bg-blue-900" },
                { idioma: "Inglés (B1)", nivel: 46, color: "bg-blue-950" }
              ].map((item, index) => (
                <div key={index}>
                  <div 
                    className="flex justify-between text-sm mb-2"
                    style={{ color: getTextColor('#374151', '#d1d5db') }}
                  >
                    <span>{item.idioma}</span>
                    <span>{item.nivel}%</span>
                  </div>
                  <div 
                    className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: getBgColor('#e5e7eb', '#374151') }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.nivel}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`${item.color} h-full rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarLogros && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute top-32 right-4 w-80 backdrop-blur-md rounded-xl p-6 shadow-2xl z-30 border"
            style={{
              backgroundColor: getBgColor('rgba(209, 213, 219)', 'rgb(20, 20, 20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
            }}
          >
            <h3 
              className="text-lg font-bold mb-4 flex items-center gap-2"
              style={{ color: getTextColor('#111827', '#e5e7eb') }}
            >
              <Award size={20} className="text-blue-800" />
              Logros & Estadísticas
            </h3>
            <div className="space-y-3">
              {logros.map((logro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: getBgColor('rgba(229, 231, 235, 0.8)', 'rgba(38, 38, 38, 0.5)') }}
                >
                  {logro.icono}
                  <span 
                    className="text-sm"
                    style={{ color: getTextColor('#374151', '#d1d5db') }}
                  >
                    {logro.titulo}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 py-20 px-6 min-h-full flex flex-col">
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              backgroundImage: isDarkMode 
                ? 'linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175))'
                : 'linear-gradient(to right, rgb(17, 24, 39), rgb(55, 65, 81))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hola, soy Luis Fernando Cajigas
          </motion.h2>
          
          <motion.p 
            key={fraseActual}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg text-blue-800 font-medium mb-6"
          >
            {frases[fraseActual]}
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mb-6 text-sm"
            style={{ color: getTextColor('#374151', '#9ca3af') }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-500" size={16} />
              <AnimatedCounter end={4} suffix=" años" />
              <span>de experiencia</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Ingeniería de Software - 5to Semestre</span>
          </motion.div>

          <motion.p 
            className="max-w-3xl text-base mb-8 leading-relaxed"
            style={{ color: getTextColor('#374151', '#9ca3af') }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Desde hace 5 años me he dedicado al mundo de la programación, un camino que inicié con curiosidad de forma independiente y que hoy se ha convertido en mi principal proyecto de vida. Actualmente curso el quinto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, donde complemento mi experiencia práctica con una sólida formación académica.
            Me especializo en Desarrollo Web Fullstack, creando aplicaciones dinámicas y centradas en el usuario mediante tecnologías como React, Node.js y Django, aplicando buenas prácticas y patrones de diseño para construir soluciones escalables y de calidad.
          </motion.p>

          <motion.img
            src="/presentacion.jpg"
            alt="Luis Fernando Cajigas"
            className="w-36 h-36 rounded-full object-cover border-4 shadow-xl mb-8"
            style={{ borderColor: getBgColor('#d1d5db', '#4b5563') }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 
            className="text-sm mb-2"
            style={{ color: getTextColor('#4b5563', '#9ca3af') }}
          >
            Mi stack tecnológico
          </h3>
          <h2 
            className="text-2xl font-bold mb-8"
            style={{ color: getTextColor('#111827', '#e5e7eb') }}
          >
            Tecnologías & Herramientas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">

            <motion.div 
              className="backdrop-blur-md rounded-2xl p-6 shadow-xl border"
              style={{
                backgroundColor: getBgColor('rgba(209, 213, 219)', 'rgb(20, 20, 20)'),
                borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgb(147, 51, 234, 0.3)" }}
              initial="hidden"
              animate="visible"
            >
              <h4 
                className="font-bold text-xl mb-6 flex items-center gap-2"
                style={{ color: getTextColor('#111827', '#e5e7eb') }}
              >
                <SiReact className="text-blue-900 hover:text-blue-500" size={24} />
                Frontend 
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { icon: SiHtml5, name: "HTML", color: "text-blue-950" },
                  { icon: SiCss3, name: "CSS", color: "text-blue-950" },
                  { icon: SiSass, name: "SCSS", color: "text-blue-950" },
                  { icon: SiJavascript, name: "JavaScript", color: "text-blue-950" },
                  { icon: SiTypescript, name: "TypeScript", color: "text-blue-950" },
                  { icon: SiTailwindcss, name: "Tailwind", color: "text-blue-950" }
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={skillsAnimationVariants}
                    className="flex items-center space-x-3 p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: getBgColor('rgba(229, 231, 235, 0.8)', 'rgba(38, 38, 38, 0.5)'),
                      color: getTextColor('#111827', '#e5e7eb')
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: getBgColor('rgba(209, 213, 219, 0.9)', 'rgba(55, 65, 81, 0.5)')
                    }}
                  >
                    <skill.icon className={skill.color} size={18} />
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="backdrop-blur-md rounded-2xl p-6 shadow-xl border"
              style={{
                backgroundColor: getBgColor('rgba(209, 213, 219)', 'rgb(20, 20, 20'),
                borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgb(6, 182, 212, 0.3)" }}
              initial="hidden"
              animate="visible"
            >
              <h4 
                className="font-bold text-xl mb-6 flex items-center gap-2"
                style={{ color: getTextColor('#111827', '#e5e7eb') }}
              >
                <SiDjango className="text-blue-900 hover:text-blue-500" size={24} />
                Backend 
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { icon: SiNodedotjs, name: "Node.js", color: "text-blue-950" },
                  { icon: SiPython, name: "Python", color: "text-blue-950" },
                  { icon: FaJava, name: "Java", color: "text-blue-950" },
                  { icon: SiMongodb, name: "MongoDB", color: "text-blue-950" },
                  { icon: SiMysql, name: "MySQL", color: "text-blue-950" },
                  { icon: VscJson, name: "APIs", color: "text-blue-950" }
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    custom={index + 6}
                    variants={skillsAnimationVariants}
                    className="flex items-center space-x-3 p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: getBgColor('rgba(229, 231, 235, 0.8)', 'rgba(38, 38, 38, 0.5)'),
                      color: getTextColor('#111827', '#e5e7eb')
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: getBgColor('rgba(209, 213, 219, 0.9)', 'rgba(55, 65, 81, 0.5)')
                    }}
                  >
                    <skill.icon className={skill.color} size={18} />
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMostrarConocerme(!mostrarConocerme)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-900 hover:from-cyan-500 hover:to-purple-800 text-white text-sm px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <User size={16} />
          Conocerme mejor
        </motion.button>

        <AnimatePresence>
          {mostrarConocerme && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-14 right-0 w-80 backdrop-blur-md rounded-xl p-6 shadow-2xl z-30 border"
              style={{
                backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)'),
                borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
              }}
            >
              <h3 
                className="text-lg font-bold mb-4 flex items-center gap-2"
                style={{ color: getTextColor('#111827', '#e5e7eb') }}
              >
                <User size={20} className="text-blue-800" />
                Un poco más sobre mí
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: FaGamepad, text: "Me gusta leer y jugar videojuegos en mis tiempos libres", color: "text-blue-950" },
                  { icon: MapPin, text: "Ubicación actual: Pasto - Nariño, Colombia", color: "text-blue-950" },
                  { icon: FaBurger, text: "Mi comida favorita es la hamburguesa", color: "text-blue-950" },
                  { icon: Activity, text: "Mi deporte favorito es el voleibol", color: "text-blue-950" },
                  { icon: Cake, text: "Tengo 20 años de edad", color: "text-blue-950" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 text-sm px-4 py-3 rounded-xl shadow-sm border"
                    style={{
                      backgroundColor: getBgColor('rgba(229, 231, 235, 0.8)', 'rgba(38, 38, 38, 0.5)'),
                      borderColor: getBgColor('rgba(209, 213, 219, 0.5)', 'rgba(75, 85, 99, 0.3)'),
                      color: getTextColor('#111827', '#e5e7eb')
                    }}
                  >
                    <item.icon className={item.color} size={20} />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}