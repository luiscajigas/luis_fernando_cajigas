"use client";

import Inicio from "../sections/Inicio";
import Informacion from "../sections/Informacion";
import Proyectos from "../sections/Proyectos";
import Servicios from "../sections/Servicios";
import Contacto from "../sections/Contacto";

interface Props {
  selected: string;
}

export default function Content({ selected }: Props) {
  const getComponent = () => {
    switch (selected) {
      case "inicio":
        return <Inicio />;
      case "informacion":
        return <Informacion />;
      case "proyectos":
        return <Proyectos />;
      case "servicios":
        return <Servicios />;
      case "contacto":
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div id="main-content" className="flex-1 relative flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div key={selected} className="w-full h-full flex items-center justify-center">
        {getComponent()}
      </div>
    </div>
  );
}