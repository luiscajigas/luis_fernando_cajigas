"use client";

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
  return (
    <div className="flex flex-col w-1/4">
      <h1 className="text-4xl font-semibold">Luis Fernando Cajigas</h1>
      <p className="text-sm text-gray-400">Diseño y desarrollo web fullstack</p>

      {/* Menú */}
      <nav className="mt-6 flex flex-col space-y-2 text-sm items-start pl-0">
        {[
          { id: "inicio", label: "Inicio" },
          { id: "informacion", label: "Información" },
          { id: "proyectos", label: "Proyectos" },
          { id: "servicios", label: "Servicios" },
          { id: "contacto", label: "Contáctame" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className="hover:translate-x-1 transition-transform"
          >
            {selected === item.id ? "●" : item.label}
          </button>
        ))}
      </nav>

      {/* BOTONES LUZ/OSCURO */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <p className="mt-2 text-xs text-gray-500">@Luis Cajigas</p>
    </div>
  );
}
