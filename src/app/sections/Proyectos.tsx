"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Proyectos() {
  const proyectos = [
    { 
      titulo: "Proyecto 1", 
      fecha: "Ene 2025",
      descripcion: "Proyecto frontend sobre un inicio de sesion realizado con tailwind y sus propiedades, en next.js",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/"
    },
    { 
      titulo: "Proyecto 2",
      fecha: "Feb 2025",
      descripcion: "Otro proyecto frontend en next.js con tailwind",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/" 
    },
    { 
      titulo: "Proyecto 3", 
      fecha: "Mar 2025",
      descripcion: "App con autenticación simple en Next.js",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/" 
    },
    { 
      titulo: "Proyecto 4", 
      fecha: "Abr 2025",
      descripcion: "Landing page responsive con Tailwind",
      imagen: "/images/proyecto1.png",
      github: "https://github.com/luiscajigas/trabajos-diseno.git",
      web: "https://trabajos-diseno.vercel.app/"
    },
    { titulo: "Proyecto 5", fecha: "May 2025" },
    { titulo: "Proyecto 6", fecha: "Jun 2025" },
    { titulo: "Proyecto 7", fecha: "Jul 2025" },
  ];

  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="flex justify-end w-full min-h-screen px-10 py-20">
      {/* Lista de proyectos con animación */}
      <div className="w-100 h-180 overflow-y-auto pr-4 space-y-16 scrollbar-hide">
        {proyectos.map((proyecto, index) => (
          <motion.div 
            key={index} 
            className="text-right cursor-pointer"
            onClick={() => setSelected(proyecto)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, color: "#1e40af" }} // azul oscuro al hover
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-wide">
              {proyecto.titulo}
            </h2>
            <p className="text-sm text-gray-400 mt-2">{proyecto.fecha}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-neutral-800 text-white rounded-2xl p-8 w-[600px] max-h-[90vh] overflow-y-auto scrollbar-hide relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Botón cerrar */}
              <button 
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* Imagen */}
              {selected.imagen && (
                <motion.img 
                  src={selected.imagen} 
                  alt={selected.titulo} 
                  className="w-full rounded-xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {/* Descripción */}
              {selected.descripcion && (
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {selected.descripcion}
                </motion.p>
              )}

              {/* Enlaces */}
              <motion.div 
                className="flex gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {selected.github && (
                  <a 
                    href={selected.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-900 transition"
                  >
                    <FaGithub />
                  </a>
                )}
                {selected.web && (
                  <a 
                    href={selected.web} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-900 transition"
                  >
                    <FaGlobe />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
