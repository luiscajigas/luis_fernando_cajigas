"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Settings,
  ArrowRight,
  Check,
  Star,
  Sparkles
} from "lucide-react";

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const servicios = [
    {
      id: 1,
      titulo: "Desarrollo Frontend",
      descripcion: "Interfaces modernas y responsivas con las últimas tecnologías",
      descripcionCompleta: "Desarrollo de aplicaciones web frontend utilizando React, Next.js, TypeScript y Tailwind CSS. Enfoque en UX/UI, rendimiento optimizado y diseño responsive que funciona perfectamente en todos los dispositivos.",
      icono: Code,
      color: "from-gray-600 to-gray-800",
      tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      caracteristicas: [
        "Diseño responsive",
        "Optimización SEO",
        "Animaciones fluidas",
        "Performance optimizado",
        "Accesibilidad web"
      ]
    },
    {
      id: 2,
      titulo: "Desarrollo Backend",
      descripcion: "APIs robustas y bases de datos escalables",
      descripcionCompleta: "Desarrollo de sistemas backend completos con Node.js, Python/Django, bases de datos relacionales y no relacionales. Implementación de APIs REST, autenticación segura y arquitecturas escalables.",
      icono: Database,
      color: "from-gray-600 to-gray-800",
      tecnologias: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
      caracteristicas: [
        "APIs REST/GraphQL",
        "Autenticación JWT",
        "Base de datos optimizada",
        "Documentación completa",
        "Testing automatizado"
      ]
    },
    {
      id: 3,
      titulo: "Diseño UI/UX",
      descripcion: "Experiencias de usuario intuitivas y atractivas",
      descripcionCompleta: "Diseño de interfaces centradas en el usuario utilizando principios de UX/UI modernos. Prototipado, testing de usabilidad y sistemas de design consistentes.",
      icono: Palette,
      color: "from-gray-600 to-gray-800",
      tecnologias: ["Figma", "Adobe XD", "Principle", "InVision"],
      caracteristicas: [
        "Research de usuarios",
        "Wireframes y mockups",
        "Prototipado interactivo",
        "Design system",
        "Testing de usabilidad"
      ]
    },
    {
      id: 4,
      titulo: "Consultoría Técnica",
      descripcion: "Asesoramiento y optimización de proyectos existentes",
      descripcionCompleta: "Auditoría de código, optimización de performance, arquitectura de software y consultoría técnica para mejorar proyectos existentes o planificar nuevos desarrollos.",
      icono: Settings,
      color: "from-gray-600 to-gray-800",
      tecnologias: ["Code Review", "Performance", "Security", "Architecture"],
      caracteristicas: [
        "Auditoría de código",
        "Optimización performance",
        "Security assessment",
        "Arquitectura de software",
        "Mentoring técnico"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full min-h-screen px-6 py-20 overflow-hidden">
      
      {/* Título de fondo */}
      <h1 className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold text-neutral-700 dark:text-neutral-700 opacity-10 select-none leading-none">
        SERVICIOS
      </h1>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 bg-gray-400/20 dark:bg-gray-400/20 rounded-full"
            animate={{
              x: [0, 120, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 12 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-neutral-500 mb-6">
            Mis <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-neutral-600 dark:to-neutral-700 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformo ideas en soluciones digitales completas, desde el concepto inicial 
            hasta el producto final listo para producción.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              variants={cardVariants}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(servicio)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-100/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/30 rounded-xl p-6 h-full hover:border-gray-400/70 dark:hover:border-gray-500/50 transition-all duration-300 group-hover:bg-gray-200/60 dark:group-hover:bg-neutral-800/60">
                
                {/* Icono y header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${servicio.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    <servicio.icono className="text-gray-800 dark:text-white" size={24} />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-800 transition-colors">
                  {servicio.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {servicio.descripcion}
                </p>

                {/* Tecnologías principales */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {servicio.tecnologias.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-300/70 dark:bg-gray-700/50 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {servicio.tecnologias.length > 3 && (
                    <span className="text-xs text-gray-500">+{servicio.tecnologias.length - 3}</span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-300/50 dark:border-gray-700/30">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={14} />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Calidad garantizada</span>
                  </div>
                  <ArrowRight 
                    className={`text-gray-500 group-hover:text-blue-400 transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-1' : ''
                    }`} 
                    size={16} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal de servicio detallado */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              className="bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide relative border border-gray-300/50 dark:border-gray-700/50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header del modal */}
              <div className={`relative p-8 bg-gradient-to-r ${selectedService.color} bg-opacity-20 border-b border-gray-300/50 dark:border-gray-700/30`}>
                <button 
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-full p-2"
                  onClick={() => setSelectedService(null)}
                >
                  ✕
                </button>

                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${selectedService.color} bg-opacity-30`}>
                    <selectedService.icono size={32} className="text-gray-800 dark:text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedService.titulo}</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                      {selectedService.descripcionCompleta}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-gray-200/70 dark:bg-neutral-800/50 px-3 py-1 rounded-full">
                        <Sparkles className="text-yellow-400" size={16} />
                        <span>Calidad premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Características */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Check className="text-blue-700" size={20} />
                      Lo que incluye
                    </h3>
                    <div className="space-y-3">
                      {selectedService.caracteristicas.map((caracteristica: string, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-200/70 dark:bg-neutral-800/30 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Check className="text-blue-700 flex-shrink-0" size={16} />
                          <span className="text-gray-800 dark:text-gray-300">{caracteristica}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="text-blue-700" size={20} />
                      Tecnologías utilizadas
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedService.tecnologias.map((tech: string, index: number) => (
                        <motion.div
                          key={index}
                          className="bg-gray-200/70 dark:bg-neutral-800/50 border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-3 text-center hover:border-blue-500/30 transition-all duration-200"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-gray-800 dark:text-gray-300 font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Proceso de trabajo */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Proceso de trabajo</h4>
                      <div className="space-y-3 text-sm">
                        {[
                          "Análisis de requerimientos y planificación",
                          "Desarrollo iterativo con feedback continuo",
                          "Testing y optimización",
                          "Deploy y documentación",
                          "Soporte post-lanzamiento"
                        ].map((paso, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <span className="text-gray-800 dark:text-gray-300">{paso}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}