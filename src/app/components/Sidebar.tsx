"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

  const getBorderColor = (lightBorder: string, darkBorder: string) => {
    return isDarkMode ? darkBorder : lightBorder;
  };

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
      hoverColor: "white",
      label: "GitHub"
    },
    { 
      icon: Mail, 
      href: "mailto:cajigasluis51@gmail.com",
      hoverColor: "#ef4444",
      label: "Email"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/___luisf_?igsh=MTNwczFxejhzdmw4OQ==",
      hoverColor: "#a855f7",
      label: "Instagram"
    },
  ];

  return (
    <motion.div
      className="flex flex-col w-1/4 relative z-10"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      {/* Header con gradiente */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1 
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ color: getTextColor('#000000', 'white') }}
        >
          Luis Fernando Cajigas
        </h1>
        <motion.p 
          className="text-sm mt-2 leading-relaxed"
          style={{ color: getTextColor('#000000', '#FFFFFF') }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Diseño y desarrollo web <br />
          <span 
            className="font-medium"
            style={{ color: getTextColor('#A855F7', '#60a5fa') }}
          >
            fullstack
          </span>
        </motion.p>
      </motion.div>

      <nav className="flex flex-col space-y-1 mb-8">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => setSelected(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative flex items-center gap-3 text-sm py-3 px-4 rounded-lg text-left transition-all duration-300 group"
            style={{
              backgroundColor: selected === item.id 
                ? getBgColor('rgb(168, 85, 247, 0.3)', 'rgba(37, 99, 235, 0.3)')
                : hoveredItem === item.id 
                  ? getBgColor('rgba(243, 244, 246)', 'rgba(31, 41, 55, 0.5)')
                  : 'transparent',
              color: selected === item.id 
                ? getTextColor('#9333EA', '#60a5fa')
                : getTextColor('#000000', '#FFFFFF'),
              borderLeft: selected === item.id ? `2px solid ${getTextColor('#2563eb', '#60a5fa')}` : 'none'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index + 0.1 }}
            whileHover={{ 
              x: 5,
              color: getTextColor('#9333EA', 'white')
            }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon 
              size={18} 
              className="transition-colors duration-300"
              style={{ 
                color: selected === item.id 
                  ? getTextColor('#7E22CE', '#60a5fa')
                  : 'inherit'
              }}
            />
            
            <span className="font-medium">
              {item.label}
            </span>

            {selected === item.id && (
              <motion.div
                className="absolute right-3 w-2 h-2 rounded-full"
                style={{ backgroundColor: getTextColor('#7E22CE', '#60a5fa') }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
              />
            )}

            {hoveredItem === item.id && selected !== item.id && (
              <motion.div
                className="absolute left-0 w-1 rounded-r h-8"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(to bottom, rgb(96, 165, 250), rgb(168, 85, 247))' 
                    : 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(147, 51, 234))'
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.1 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 
          className="text-xs mb-3 font-medium tracking-wider uppercase"
          style={{ color: getTextColor('#000000', '#FFFFFF') }}
        >
          Conecta conmigo
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 p-2 backdrop-blur-sm rounded-lg border"
              style={{
                color: getTextColor('#000000', '#FFFFFF'),
                backgroundColor: getBgColor('rgba(229, 231, 235, 1)', 'rgba(20,20,20)'),
                borderColor: getBorderColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                color: social.hoverColor,
                borderColor: getBorderColor('rgba(156, 163, 175, 1)', 'rgba(107, 114, 128, 0.5)')
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              title={social.label}
            >
              <social.icon size={16} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <motion.div
        className="text-xs text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div 
          className="h-px mb-3"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(to right, transparent, rgb(75, 85, 99), transparent)'
              : 'linear-gradient(to right, transparent, rgb(156, 163, 175), transparent)'
          }}
        />
        <p style={{ color: getTextColor('#1f2937', '#d1d5db') }}>
          © 2025 Luis Cajigas
        </p>
      </motion.div>
    </motion.div>
  );
}