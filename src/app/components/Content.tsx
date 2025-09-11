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
  return (
    <div className="flex-1 relative flex items-center justify-center">
      {selected === "inicio" && <Inicio />}
      {selected === "informacion" && <Informacion />}
      {selected === "proyectos" && <Proyectos />}
      {selected === "servicios" && <Servicios />}
      {selected === "contacto" && <Contacto />}
    </div>
  );
}
