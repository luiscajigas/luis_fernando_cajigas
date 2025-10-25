"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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

  const servicios = [
    {
      id: 1,
      titulo: "Desarrollo Frontend",
      descripcion: "Interfaces modernas y responsivas con las últimas tecnologías",
      descripcionCompleta: "Desarrollo de aplicaciones web frontend utilizando React, Next.js, TypeScript y Tailwind CSS. Enfoque en UX/UI, rendimiento optimizado y diseño responsive que funciona perfectamente en todos los dispositivos.",
      icono: Code,
      colorLight: "from-cyan-500 to-purple-600", 
      colorDark: "from-blue-500 to-blue-950", 
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
      colorLight: "from-cyan-500 to-purple-600", 
      colorDark: "from-blue-500 to-blue-950", 
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
      colorLight: "from-cyan-500 to-purple-600", 
      colorDark: "from-blue-500 to-blue-950", 
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
      colorLight: "from-cyan-500 to-purple-600", 
      colorDark: "from-blue-500 to-blue-950", 
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

  const getIconColor = (servicio: any) => {
    return isDarkMode ? servicio.colorDark : servicio.colorLight;
  };

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

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
      
      <h1 
        className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold opacity-10 select-none leading-none"
        style={{ color: isDarkMode ? 'rgb(55, 65, 81)' : 'rgb(107, 114, 128)' }}
      >
        SERVICIOS
      </h1>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {Array.from({ length: 25 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-5 h-5 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: isDarkMode
          ? "rgba(156, 163, 175, 0.2)" 
          : "rgba(107, 114, 128, 0.2)" 
      }}
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
    />
  ))}
</div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: getTextColor('#9333EA', '#06B6D4') }}
          >
            Mis{" "}
            <span 
              style={{
                backgroundImage: isDarkMode 
                  ? 'linear-gradient(to right, rgb(96, 165, 250), rgb(30, 58, 138))'
                  : 'linear-gradient(to right, rgb(192, 132, 252), rgb(29, 78, 216))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Servicios
            </span>
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: getTextColor('#000000', '#d1d5db') }}
          >
            Transformo ideas en soluciones digitales completas, desde el concepto inicial 
            hasta el producto final listo para producción.
          </p>
        </motion.div>

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
              <div 
                className="backdrop-blur-sm border rounded-xl p-6 h-full transition-all duration-300"
                style={{
                  backgroundColor: getBgColor('rgb(229, 231, 235)', 'rgba(20, 20, 20)'),
                  borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = getBgColor('rgba(243, 244, 246, 0.9)', 'rgba(31, 41, 55, 0.6)');
                  e.currentTarget.style.borderColor = getBgColor('rgba(156, 163, 175, 0.7)', 'rgba(107, 114, 128, 0.5)');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = getBgColor('rgb(229, 231, 235)', 'rgba(20, 20, 20)');
                  e.currentTarget.style.borderColor = getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)');
                }}
              >
    
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getIconColor(servicio)} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    <servicio.icono 
                      size={24} 
                      style={{ color: getTextColor('black', 'white') }}
                    />
                  </div>
                </div>

                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ 
                    color: getTextColor('#000000', 'white')
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.color = getTextColor('#7E22CE', '#1D4ED8');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = getTextColor('#000000', 'white');
                  }}
                >
                  {servicio.titulo}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: getTextColor('#4b5563', '#9ca3af') }}
                >
                  {servicio.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {servicio.tecnologias.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-md"
                      style={{
                        backgroundColor: getBgColor('rgb(156, 163, 175, 0.5)', 'rgba(75, 85, 99, 0.5)'),
                        color: getTextColor('#000000', '#FFFFFF')
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {servicio.tecnologias.length > 3 && (
                    <span 
                      className="text-xs"
                      style={{ color: getTextColor('#000000', '#FFFFFF') }}
                    >
                      +{servicio.tecnologias.length - 3}
                    </span>
                  )}
                </div>

                <div 
                  className="flex items-center justify-between mt-auto pt-4 border-t"
                  style={{ borderColor: getBgColor('rgba(209, 213, 219 )', 'rgba(75, 85, 99, 0.3)') }}
                >
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={14} />
                    <span 
                      className="text-xs"
                      style={{ color: getTextColor('#000000', '#FFFFFF') }}
                    >
                      Calidad garantizada
                    </span>
                  </div>
                  <ArrowRight 
                    className={`text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
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
              className="rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide relative border shadow-2xl"
              style={{
                backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgb(20, 20, 20)'),
                borderColor: getBgColor('rgba(209, 213, 219, 0.5)', 'rgba(75, 85, 99, 0.5)'),
                color: getTextColor('#000000', '#FFFFFF')
              }}
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <div 
                className={`relative p-8 bg-gradient-to-r ${getIconColor(selectedService)} bg-opacity-20 border-b`}
                style={{ borderColor: getBgColor('rgba(209, 213, 219 )', 'rgba(20, 20, 20)') }}
              >
                <button 
                  className="absolute top-4 right-4 transition-colors duration-200 rounded-full p-2"
                  style={{
                    color: getTextColor('#000000', '#FFFFFF'),
                    backgroundColor: getBgColor('rgba(243, 244, 246 )', 'rgba(75, 85, 99)')
                  }}
                  onClick={() => setSelectedService(null)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = getTextColor('#9333EA', '#06B6D4');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = getTextColor('#000000', '#FFFFFF');
                  }}
                >
                  ✕
                </button>

                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${getIconColor(selectedService)} bg-opacity-30`}>
                    <selectedService.icono 
                      size={32} 
                      style={{ color: getTextColor('#000000', 'white') }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h2 
                      className="text-3xl font-bold mb-2"
                      style={{ color: getTextColor('#000000', 'white') }}
                    >
                      {selectedService.titulo}
                    </h2>
                    <p 
                      className="text-lg font-medium leading-relaxed mb-4"
                      style={{ color: getTextColor('#000000', '#FFFFFF') }}
                    >
                      {selectedService.descripcionCompleta}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div 
                        className="flex items-center gap-2 px-3 py-1 rounded-full"
                        style={{ backgroundColor: getBgColor('rgba(243, 244, 246, 0.5)', 'rgba(31, 41, 55, 0.5)') }}
                      >
                        <Sparkles className="text-yellow-400" size={16} />
                        <span style={{ color: getTextColor('#000000', '#FFFFFF') }}>Calidad premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  <div>
                    <h3 
                      className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: getTextColor('#000000', 'white') }}
                    >
                      <Check className="text-blue-600" size={20} />
                      Lo que incluye
                    </h3>
                    <div className="space-y-3">
                      {selectedService.caracteristicas.map((caracteristica: string, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg"
                          style={{ backgroundColor: getBgColor('rgb(209, 213, 219)', 'rgba(20, 20, 20)') }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Check className="text-purple-700 flex-shrink-0" size={16} />
                          <span style={{ color: getTextColor('#000000', '#FFFFFF') }}>
                            {caracteristica}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 
                      className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: getTextColor('#000000', 'white') }}
                    >
                      <Zap className="text-blue-600" size={20} />
                      Tecnologías utilizadas
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedService.tecnologias.map((tech: string, index: number) => (
                        <motion.div
                          key={index}
                          className="border rounded-lg p-3 text-center hover:border-blue-500/30 transition-all duration-200"
                          style={{
                            backgroundColor: getBgColor('rgb(229, 231, 235, 0.3)', 'rgba(20, 20, 20, 0.3)'),
                            borderColor: getBgColor('rgba(75, 85, 99, 0.2)', 'rgba(75, 85, 99, 0.2)')
                          }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span 
                            className="font-medium"
                            style={{ color: getTextColor('#374151', '#d1d5db') }}
                          >
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 
                        className="text-lg font-semibold mb-4"
                        style={{ color: getTextColor('#111827', 'white') }}
                      >
                        Proceso de trabajo
                      </h4>
                      <div className="space-y-3 text-sm">
                        {[
                          "Análisis de requerimientos y planificación",
                          "Desarrollo iterativo con feedback continuo",
                          "Testing y optimización",
                          "Deploy y documentación",
                          "Soporte post-lanzamiento"
                        ].map((paso, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <span style={{ color: getTextColor('#000000', '#FFFFFF') }}>
                              {paso}
                            </span>
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