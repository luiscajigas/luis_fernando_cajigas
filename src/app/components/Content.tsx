"use client";

import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
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

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      x: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -20,
      scale: 0.98
    }
  };

  const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <div id="main-content" className="flex-1 relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {getComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}