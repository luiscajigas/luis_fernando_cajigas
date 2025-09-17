"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Calendar, Code, ExternalLink, X, Star, Zap } from "lucide-react";

export default function Proyectos() {
  const proyectos = [
    { 
      titulo: "Proyecto 1", 
      fecha: "Ene 2025",
      descripcion: "Proyecto frontend sobre un inicio de sesión realizado con Tailwind CSS y sus propiedades avanzadas, implementado en Next.js con animaciones fluidas y diseño responsive.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 2",
      fecha: "Feb 2025",
      descripcion: "Dashboard administrativo moderno con autenticación, gestión de usuarios y visualización de datos en tiempo real. Interfaz intuitiva y responsive.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["React", "Node.js", "MongoDB", "Chart.js"],
      estado: "En desarrollo"
    },
    { 
      titulo: "Proyecto 3", 
      fecha: "Mar 2025",
      descripcion: "E-commerce completo con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración integrado.",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/",
      tecnologias: ["Django", "PostgreSQL", "Stripe API", "CSS3"],
      estado: "Completado"
    },
    { 
      titulo: "Proyecto 4", 
      fecha: "Abr 2025",
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
      estado: "Planeado"
    },
    { 
      titulo: "Proyecto 6", 
      fecha: "Jun 2025",
      descripcion: "API REST robusta con documentación completa, autenticación JWT y rate limiting implementado.",
      tecnologias: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
      estado: "Planeado"
    },
    { 
      titulo: "Proyecto 7", 
      fecha: "Jul 2025",
      descripción: "Plataforma de aprendizaje online con sistema de progreso, certificaciones y gamificación.",
      tecnologias: ["React Native", "Firebase", "Stripe", "WebRTC"],
      estado: "Idea"
    },
  ];

  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("todos");

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case "Completado": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "En desarrollo": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planeado": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Idea": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredProjects = proyectos.filter(proyecto => {
    if (filter === "todos") return true;
    return proyecto.estado?.toLowerCase() === filter;
  });

  return (
    <section className="relative flex justify-end w-full min-h-screen px-10 py-20 overflow-hidden">
      
      {/* Título de fondo */}
      <h1 className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold text-gray-700 opacity-10 select-none leading-none">
        PROYECTOS
      </h1>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
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
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Filtros */}
      <motion.div 
        className="absolute top-6 right-6 flex gap-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["todos", "completado", "en desarrollo", "planeado", "idea"].map((filterOption, index) => (
          <motion.button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
              filter === filterOption 
                ? "bg-blue-600 text-white border-blue-500" 
                : "bg-neutral-800/60 text-gray-400 border-gray-600 hover:border-blue-500 hover:text-blue-400"
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

      {/* Lista de proyectos */}
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
            {/* Línea conectora */}
            <div className="absolute right-0 top-1/2 w-12 h-px bg-gradient-to-l from-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative bg-neutral-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:bg-neutral-800/60 hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
              
              {/* Estado del proyecto */}
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

              <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white group-hover:text-blue-400 transition-colors duration-300">
                {proyecto.titulo}
              </h2>
              
              <div className="flex items-center justify-end gap-2 mt-2">
                <Calendar size={14} className="text-gray-500" />
                <p className="text-sm text-gray-400">{proyecto.fecha}</p>
              </div>

              {/* Preview de tecnologías */}
              {proyecto.tecnologias && (
                <div className="flex justify-end gap-2 mt-3 flex-wrap">
                  {proyecto.tecnologias.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {proyecto.tecnologias.length > 3 && (
                    <span className="text-xs text-gray-500">+{proyecto.tecnologias.length - 3}</span>
                  )}
                </div>
              )}

              {/* Indicador de click */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={14} className="text-gray-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal mejorado */}
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
              className="bg-neutral-900 text-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide relative border border-gray-700/50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header del modal */}
              <div className="relative p-6 border-b border-gray-700/30">
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800/50 rounded-full p-2"
                  onClick={() => setSelected(null)}
                >
                  <X size={20} />
                </button>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selected.titulo}</h2>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
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

                {/* Tecnologías */}
                {selected.tecnologias && (
                  <div className="flex flex-wrap gap-2">
                    {selected.tecnologias.map((tech: string, i: number) => (
                      <motion.span 
                        key={i}
                        className="text-xs bg-gray-700/70 text-gray-300 px-3 py-1 rounded-full border border-gray-600/50"
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

              {/* Contenido del modal */}
              <div className="p-6">
                {/* Imagen */}
                {selected.imagen && (
                  <motion.img 
                    src={selected.imagen} 
                    alt={selected.titulo} 
                    className="w-full rounded-xl mb-6 border border-gray-700/30 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                {/* Descripción */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selected.descripcion}
                  </p>
                </motion.div>

                {/* Enlaces */}
                {(selected.github || selected.web) && (
                  <motion.div 
                    className="flex gap-4 justify-center pt-4 border-t border-gray-700/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {selected.github && (
                      <a 
                        href={selected.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 border border-gray-600"
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
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaGlobe size={18} />
                        <span className="text-sm">Demo</span>
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