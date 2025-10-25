"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState("inicio");
  const [mounted, setMounted] = useState(false);

  // Hidratar tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(prefersDark);
    }
    
    setMounted(true);
  }, []);

  // Evitar hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <main
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-black text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-[95%] h-auto lg:h-[95vh] relative border p-4 sm:p-6 flex flex-col lg:flex-row gap-4 transition-colors duration-500 ${
          darkMode
            ? "bg-neutral-900 border-gray-700"
            : "bg-white border-gray-300"
        }`}
      >
        {/* PANEL IZQUIERDO */}
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          selected={selected}
          setSelected={setSelected}
        />

        {/* CONTENIDO PRINCIPAL */}
        <Content selected={selected} />
      </div>
    </main>
  );
}