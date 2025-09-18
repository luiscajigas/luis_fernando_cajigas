"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Home, User, Briefcase, Settings, MessageCircle, Github, Mail, Instagram } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
}

export default function Sidebar({
  darkMode,
  setDarkMode,
  selected,
  setSelected,
}: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "informacion", label: "Información", icon: User },
    { id: "proyectos", label: "Proyectos", icon: Briefcase },
    { id: "servicios", label: "Servicios", icon: Settings },
    { id: "contacto", label: "Contáctame", icon: MessageCircle },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/luiscajigas",
      color: "hover:text-white",
      label: "GitHub"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/___luisf_?igsh=MTNwczFxejhzdmw4OQ==",
      color: "hover:text-pink-400",
      label: "Instagram"
    },
    { 
      icon: Mail, 
      href: "mailto:cajigasluis51@gmail.com",
      color: "hover:text-blue-400",
      label: "Email"
    },
  ];

  return (
    <motion.div
      className="flex flex-col w-1/4 relative z-10"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
          Luis Fernando Cajigas
        </h1>
        <motion.p 
          className="text-sm text-gray-400 mt-2 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Diseño y desarrollo web <span className="text-blue-800 font-medium">fullstack</span>
        </motion.p>
      </motion.div>

      <motion.div
        className="flex items-center gap-2 mb-6 bg-neutral-800/40 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-700/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-gray-400">Disponible para proyectos</span>
      </motion.div>

      <nav className="flex flex-col space-y-1 mb-8">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => setSelected(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative flex items-center gap-3 text-sm py-3 px-4 rounded-lg text-left transition-all duration-300 group ${
              selected === item.id 
                ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400" 
                : "text-gray-400 hover:text-white hover:bg-neutral-800/50"
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.4 }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon 
              size={18} 
              className={`transition-colors duration-300 ${
                selected === item.id ? "text-blue-800" : ""
              }`} 
            />
            
            <span className="font-medium">
              {hoveredItem === item.id || selected === item.id ? item.label : "●"}
            </span>

            {selected === item.id && (
              <motion.div
                className="absolute right-3 w-2 h-2 bg-blue-800 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {hoveredItem === item.id && selected !== item.id && (
              <motion.div
                className="absolute left-0 w-1 bg-gradient-to-b from-blue-800 to-cyan-500 rounded-r h-8"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xs text-gray-500 mb-3 font-medium tracking-wider uppercase">
          Conecta conmigo
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 ${social.color} transition-all duration-300 p-2 bg-neutral-800/30 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-gray-600/50`}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              title={social.label}
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <motion.div
        className="text-xs text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-3" />
        <p>© 2025 Luis Cajigas</p>
      </motion.div>
    </motion.div>
  );
}