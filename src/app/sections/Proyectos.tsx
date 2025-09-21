"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Calendar, Code, ExternalLink, X, Star, Zap } from "lucide-react";

export default function Proyectos() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const proyectos = [
    { 
      titulo: "Practica inicio sesion en tailwind", 
      fecha: "Agosto 26",
      descripcion: "Proyecto frontend sobre un inicio de sesión realizado con Tailwind CSS y sus propiedades avanzadas, implementado en Next.js con animaciones fluidas y diseño responsive.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      estado: "Completado"
    },
    { 
      titulo: "Star Session modern",
      fecha: "Septiembre 21",
      descripcion: "Página de autenticación premium con diseño tipo glassmorphism, animaciones garantizando buena experiencia al usuario. Cuenta con una interfaz moderna con efectos visuales y transiciones fluidas",
      imagen: "/images/proyecto2.png",
      github: "https://github.com/luiscajigas/start-session.git",
      web: "https://inico-sesion.vercel.app/",
      tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "React 18"],
      estado: "Completado"
    },
    { 
      titulo: "Practica Pasaporte en tailwind", 
      fecha: "Septiembre 3",
      descripcion: "Pase de abordar digital interactivo con diseño realista tipo ticket físico. Replica la experiencia visual de un boarding pass de aerolínea con QR code funcional, detalles de vuelo y estética profesional de aviación",
      imagen: "/images/proyecto3.png",
      github: "https://github.com/luiscajigas/pasa.git",
      web: "https://pasa-alpha.vercel.app/",
      tecnologias: ["Next.JS", "Tailwind CSS", "React 18"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 4", 
      fecha: "Septiembre 3",
      descripcion: "Landing page empresarial completamente responsive con animaciones avanzadas, optimizada para SEO y rendimiento.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["HTML5", "SCSS", "JavaScript", "GSAP"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 5", 
      fecha: "May 2025",
      descripcion: "Aplicación de gestión de tareas colaborativa con chat en tiempo real y sistema de notificaciones.",
      tecnologias: ["Vue.js", "Socket.io", "Express", "Redis"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 6", 
      fecha: "Jun 2025",
      descripcion: "API REST robusta con documentación completa, autenticación JWT y rate limiting implementado.",
      tecnologias: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 7", 
      fecha: "Jul 2025",
      descripcion: "Plataforma de aprendizaje online con sistema de progreso, certificaciones y gamificación.",
      tecnologias: ["React Native", "Firebase", "Stripe", "WebRTC"],
      estado: "En desarrollo"
    },
  ];

  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("todos");

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

  const getStatusColor = (estado: string) => {
    if (isDarkMode) {
      switch (estado) {
        case "Completado": return "bg-cyan-500/20 text-blue-400 border-blue-500/30";
        case "En desarrollo": return "bg-blue-800/20 text-blue-800 border-blue-500/30";
        default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      }
    } else {
      switch (estado) {
        case "Completado": return "bg-cyan-500/20 text-blue-600 border-blue-500/30";
        case "En desarrollo": return "bg-purple-800/20 text-purple-800 border-purple-500/30";
        default: return "bg-gray-500 text-gray-700 border-gray-300";
      }
    }
  };

  const filteredProjects = proyectos.filter(proyecto => {
    if (filter === "todos") return true;
    return proyecto.estado?.toLowerCase() === filter;
  });

  return (
    <section className="relative flex justify-end w-full min-h-screen px-10 py-20 overflow-hidden">

      <h1 
        className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold opacity-10 select-none leading-none"
        style={{ color: isDarkMode ? 'rgb(55, 65, 81)' : 'rgb(107, 114, 128)' }}
      >
        PROYECTOS
      </h1>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isDarkMode ? 'rgba(156, 163, 175, 0.2)' : 'rgba(107, 114, 128, 0.3)'
            }}
            animate={{
              x: [0, 120, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="absolute top-15 right-27 flex gap-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["todos", "completado", "en desarrollo"].map((filterOption, index) => (
          <motion.button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
              filter === filterOption 
                ? isDarkMode 
                  ? "bg-blue-900 text-white border-blue-800" 
                  : "bg-blue-600 text-white border-blue-500"
                : isDarkMode
                  ? "bg-neutral-800/60 text-gray-400 border-gray-600 hover:border-blue-500 hover:text-blue-400"
                  : "bg-gray-200 text-black border-gray-300 hover:border-blue-400 hover:text-blue-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <div className="w-100 h-180 overflow-y-auto pr-4 space-y-12 scrollbar-hide mt-16">
        {filteredProjects.map((proyecto, index) => (
          <motion.div 
            key={index} 
            className="text-right cursor-pointer group relative"
            onClick={() => setSelected(proyecto)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="absolute right-0 top-1/2 w-12 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: isDarkMode 
                  ? 'linear-gradient(to left, rgba(30, 58, 138, 0.6), transparent)'
                  : 'linear-gradient(to left, rgba(37, 99, 235, 0.6), transparent)'
              }}
            />
            
            <div 
              className="relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 group-hover:shadow-lg"
              style={{
                backgroundColor: getBgColor('rgb(243, 244, 246)', 'rgba(20, 20, 20)'), 
                borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)'),
                boxShadow: isDarkMode 
                  ? '0 0 0 0 rgba(59, 130, 246, 0)'
                  : '0 0 0 0 rgba(37, 99, 235, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = getBgColor('rgb(209, 213, 219)', 'rgba(31, 41, 55, 0.6)');
                e.currentTarget.style.borderColor = getBgColor('rgba(37, 99, 235, 0.3)', 'rgba(30, 58, 138, 0.3)');
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 10px 25px rgba(37, 99, 235, 0.1 )'
                  : '0 20px 40px rgb(233, 213, 255)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = getBgColor('rgb(243, 244, 246)', 'rgba(20, 20, 20)');
                e.currentTarget.style.borderColor = getBgColor('rgba(75, 85, 99, 0.3', 'rgba(75, 85, 99, 0.3)');
                e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
              }}
            >
              
              {proyecto.estado && (
                <motion.span 
                  className={`inline-block px-2 py-1 text-xs rounded-full border mb-3 ${getStatusColor(proyecto.estado)}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {proyecto.estado}
                </motion.span>
              )}

       <h2 
  className="text-2xl md:text-4xl font-light tracking-wide transition-colors duration-300"
  style={{ 
    color: getTextColor('#111827', 'white')
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = isDarkMode ? '#60a5fa' : '#2563eb';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = getTextColor('#111827', 'white');
  }}
>
  {proyecto.titulo}
</h2>
              
              <div className="flex items-center justify-end gap-2 mt-2">
                <Calendar size={14} style={{ color: getTextColor('#6b7280', '#9ca3af') }} />
                <p className="text-sm" style={{ color: getTextColor('#6b7280', '#9ca3af') }}>{proyecto.fecha}</p>
              </div>

              {proyecto.tecnologias && (
                <div className="flex justify-end gap-2 mt-3 flex-wrap">
                  {proyecto.tecnologias.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        backgroundColor: getBgColor('rgba(229, 231, 235)', 'rgba(75, 85, 99, 0.5)'),
                        color: getTextColor('#374151', '#d1d5db')
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {proyecto.tecnologias.length > 3 && (
                    <span 
                      className="text-xs"
                      style={{ color: getTextColor('#6b7280', '#9ca3af') }}
                    >
                      +{proyecto.tecnologias.length - 3}
                    </span>
                  )}
                </div>
              )}

              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={14} style={{ color: getTextColor('#6b7280', '#9ca3af') }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div 
              className="rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide relative border shadow-2xl"
              style={{
                backgroundColor: getBgColor('rgba(255, 255, 255, 0.95)', 'rgb(20,20,20)'),
                borderColor: getBgColor('rgba(209, 213, 219, 0.5)', 'rgba(75, 85, 99, 0.5)'),
                color: getTextColor('#111827', 'white')
              }}
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="relative p-6 border-b" style={{ borderColor: getBgColor('rgba(209, 213, 219 )', 'rgba(75, 85, 99, 0.3)') }}>
                <button 
                  className="absolute top-4 right-36 transition-colors duration-200 rounded-full p-2"
                  style={{
                    color: getTextColor('#000000', '#9ca3af'),
                    backgroundColor: getBgColor('rgba(107, 114, 128, 0.5)', 'rgba(75, 85, 99, 0.5)')
                  }}
                  onClick={() => setSelected(null)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = getTextColor('#111827', 'white');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = getTextColor('#000000', '#9ca3af');
                  }}
                >
                  <X size={20} />
                </button>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: getTextColor('#111827', 'white') }}>
                      {selected.titulo}
                    </h2>
                    <div className="flex items-center gap-2 text-sm" style={{ color: getTextColor('#6b7280', '#9ca3af') }}>
                      <Calendar size={14} />
                      <span>{selected.fecha}</span>
                    </div>
                  </div>
                  
                  {selected.estado && (
                    <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(selected.estado)}`}>
                      {selected.estado}
                    </span>
                  )}
                </div>

                {selected.tecnologias && (
                  <div className="flex flex-wrap gap-2">
                    {selected.tecnologias.map((tech: string, i: number) => (
                      <motion.span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgba(38, 38, 38 )'),
                          color: getTextColor('#374151', '#d1d5db'),
                          borderColor: getBgColor('rgba(107, 114, 128, 0.5)', 'rgba(107, 114, 128, 0.5)')
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6">
              
                {selected.imagen && (
                  <motion.img 
                    src={selected.imagen} 
                    alt={selected.titulo} 
                    className="w-full rounded-xl mb-6 border shadow-lg"
                    style={{ borderColor: getBgColor('rgba(209, 213, 219, 0.3)', 'rgba(75, 85, 99, 0.3)') }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p 
                    className="leading-relaxed mb-6"
                    style={{ color: getTextColor('#374151', '#d1d5db') }}
                  >
                    {selected.descripcion}
                  </p>
                </motion.div>

                {(selected.github || selected.web) && (
                  <motion.div 
                    className="flex gap-4 justify-center pt-4 border-t"
                    style={{ borderColor: getBgColor('rgba(209, 213, 219)', 'rgba(75, 85, 99, 0.3)') }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {selected.github && (
                      <a 
                        href={selected.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 border"
                        style={{
                          backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)'),
                          borderColor: getBgColor('rgba(209, 213, 219, 0.6)', 'rgb(107, 114, 128)'),
                          color: getTextColor('#111827', 'white')
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = getBgColor('rgb(168, 85, 247, 0.3)', 'rgb(59, 130, 246, 0.3)');
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)');
                        }}
                      >
                        <FaGithub size={18} />
                        <span className="text-sm">Código</span>
                      </a>
                    )}
                    {selected.web && (
                      <a 
                        href={selected.web} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 border"
                        style={{
                          backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)'),
                          borderColor: getBgColor('rgba(209, 213, 219, 0.6)', 'rgb(107, 114, 128)'),
                          color: getTextColor('#111827', 'white')
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = getBgColor('rgb(168, 85, 247, 0.3)', 'rgb(59, 130, 246, 0.3)');
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)');
                        }}
                      >
                        <FaGlobe size={18} />
                        <span className="text-sm">Web</span>
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}