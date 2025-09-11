"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState("inicio");

  return (
    <main
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-black text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-[95%] h-[95vh] relative border p-6 flex transition-colors duration-500 ${
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
