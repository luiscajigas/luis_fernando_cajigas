"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Home, User, Briefcase, Settings, MessageCircle, Github, Mail, Instagram, Menu, X, Linkedin } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  // init language from localStorage and document
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const initial = stored === "en" ? "en" : "es";
    setLang(initial);
    if (typeof document !== "undefined") {
      document.documentElement.lang = initial;
    }
  }, []);

  // listen for global language change
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as "es" | "en" | undefined;
      if (detail === "es" || detail === "en") setLang(detail);
    };
    window.addEventListener("app:language", handler as EventListener);
    return () => window.removeEventListener("app:language", handler as EventListener);
  }, []);

  const getTextColor = useMemo(() => (lightColor: string, darkColor: string) => {
    return darkMode ? darkColor : lightColor;
  }, [darkMode]);

  const getBgColor = useMemo(() => (lightBg: string, darkBg: string) => {
    return darkMode ? darkBg : lightBg;
  }, [darkMode]);

  const getBorderColor = useMemo(() => (lightBorder: string, darkBorder: string) => {
    return darkMode ? darkBorder : lightBorder;
  }, [darkMode]);

  const t = (key: string) => {
    const dict: Record<string, { es: string; en: string }> = {
      inicio: { es: "Inicio", en: "Home" },
      informacion: { es: "Información", en: "Information" },
      proyectos: { es: "Proyectos", en: "Projects" },
      servicios: { es: "Servicios", en: "Services" },
      contacto: { es: "Contáctame", en: "Contact Me" },
      conecta: { es: "Conecta conmigo", en: "Connect with me" },
      jobline: { es: "Diseño y desarrollo web", en: "Web design and development" },
      fullstack: { es: "fullstack", en: "fullstack" },
    };
    return dict[key]?.[lang] ?? key;
  };

  const menuItems = [
    { id: "inicio", label: t("inicio"), icon: Home },
    { id: "informacion", label: t("informacion"), icon: User },
    { id: "proyectos", label: t("proyectos"), icon: Briefcase },
    { id: "servicios", label: t("servicios"), icon: Settings },
    { id: "contacto", label: t("contacto"), icon: MessageCircle },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/luiscajigas",
      hoverColor: "#9CA3AF",
      label: "GitHub"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/luis-cajigas-034559393/",
      hoverColor: "#0077b5",
      label: "LinkedIn"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/___luisf_?igsh=MTNwczFxejhzdmw4OQ==",
      hoverColor: "#a855f7",
      label: "Instagram"
    },
  ];

  const handleMenuItemClick = (itemId: string) => {
    setSelected(itemId);
    setIsMenuOpen(false);
  };

  const SidebarContent = () => (
    <>
      
      <div className="mb-8">
        <h1 
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ color: getTextColor('#000000', 'white') }}
        >
          Luis Fernando Cajigas
        </h1>
        <p 
          className="text-sm mt-2 leading-relaxed"
          style={{ color: getTextColor('#000000', '#FFFFFF') }}
        >
          {t("jobline")} <br />
          <span 
            className="font-medium"
            style={{ color: getTextColor('#A855F7', '#60a5fa') }}
          >
            {t("fullstack")}
          </span>
        </p>
      </div>

      <nav className="flex flex-col space-y-1 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className={`relative group flex items-center gap-3 text-sm py-3 px-4 rounded-lg text-left transition-all duration-200 ${
              selected === item.id
                ? (darkMode ? "bg-blue-900/30 text-blue-400" : "bg-purple-200/50 text-purple-700")
                : (darkMode ? "text-white hover:bg-neutral-800/60" : "text-black hover:bg-gray-200")
            }`}
            style={{
              borderLeft: selected === item.id ? `2px solid ${getTextColor('#2563eb', '#60a5fa')}` : 'none',
            }}
          >
            <item.icon 
              size={18} 
              className={`transition-colors duration-200 ${selected === item.id ? '' : 'group-hover:text-blue-500'}`}
              style={{ color: selected === item.id ? getTextColor('#7E22CE', '#60a5fa') : 'inherit' }}
            />
            
            <span className="font-medium">
              {item.label}
            </span>

            {selected === item.id && (
              <div
                className="absolute right-3 w-2 h-2 rounded-full"
                style={{ backgroundColor: getTextColor('#7E22CE', '#60a5fa') }}
              />
            )}

            <div
              className="absolute left-0 w-1 rounded-r h-8 opacity-0 group-hover:opacity-100"
              style={{
                background: darkMode 
                  ? 'linear-gradient(to bottom, rgb(96, 165, 250), rgb(168, 85, 247))' 
                  : 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(147, 51, 234))'
              }}
            />
          </button>
        ))}
      </nav>

      <div className="mb-6">
        <h3 
          className="text-xs mb-3 font-medium tracking-wider uppercase"
          style={{ color: getTextColor('#000000', '#FFFFFF') }}
        >
          {t("conecta")}
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 p-2 backdrop-blur-sm rounded-lg border hover:scale-110 hover:-translate-y-0.5 active:scale-95"
              style={{
                color: getTextColor('#000000', '#FFFFFF'),
                backgroundColor: getBgColor('rgba(229, 231, 235, 1)', 'rgba(20,20,20)'),
                borderColor: getBorderColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = social.hoverColor;
                e.currentTarget.style.borderColor = getBorderColor('rgba(156, 163, 175, 1)', 'rgba(107, 114, 128, 0.5)');
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = getTextColor('#000000', '#FFFFFF');
                e.currentTarget.style.borderColor = getBorderColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)');
                e.currentTarget.style.boxShadow = "none";
              }}
              title={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <LanguageToggle />

      <div className="text-xs text-center mt-6">
        <div 
          className="h-px mb-3"
          style={{
            background: darkMode 
              ? 'linear-gradient(to right, transparent, rgb(75, 85, 99), transparent)'
              : 'linear-gradient(to right, transparent, rgb(156, 163, 175), transparent)'
          }}
        />
        <p style={{ color: getTextColor('#1f2937', '#d1d5db') }}>
          © 2025 Luis Cajigas
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Botón Hamburguesa - Solo visible en móvil */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-lg backdrop-blur-md border lg:hidden"
        style={{
          backgroundColor: getBgColor('rgba(243, 244, 246, 0.95)', 'rgba(20, 20, 20, 0.95)'),
          borderColor: getBorderColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)'),
          color: getTextColor('#000000', '#FFFFFF')
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Sidebar Desktop - Siempre visible en pantallas grandes */}
      <motion.div
        className="hidden lg:flex flex-col w-1/4 relative z-10 p-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SidebarContent />
      </motion.div>

      {/* Sidebar Mobile - Menú deslizante */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menú deslizante */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 z-50 p-6 lg:hidden"
              style={{
                backgroundColor: getBgColor('rgba(243, 244, 246, 0.95)', 'rgba(20, 20, 20, 0.95)'),
                borderRight: `1px solid ${getBorderColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')}`
              }}
              initial={{ x: -280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -280, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}