"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function Servicios() {
  const [open, setOpen] = useState<"frontend" | "backend" | "uiux" | null>(null);

  return (
     <div className="relative flex items-center justify-center min-h-screen px-4 py-20">
      <h1 className="absolute bottom-6 rigth-4 text-[6rem] md:text-[10rem] font-extrabold text-gray-700 opacity-10 select-none leading-none">
        SERVICIOS
      </h1>
    <div className="flex flex-col items-center text-center px-4 md:-translate-x-20">
      <h3 className="text-gray-600 dark:text-gray-400 text-sm">Mis servicios</h3>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-10">
        Lo que ofrezco
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-90 max-w-4xl">
        {/* F*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-10 flex flex-col items-center justify-between shadow-sm cursor-pointer"
          onClick={() => setOpen("frontend")}
        >
          <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">
            Desarrollador frontend
          </h4>
          <p className="text-gray-500 hover:text-blue-700 transition-colors text-sm">
            Ver más →
          </p>
        </motion.div>

        {/* B*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-10 flex flex-col items-center justify-between shadow-sm cursor-pointer"
          onClick={() => setOpen("backend")}
        >
          <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">
            Desarrollador backend
          </h4>
          <p className="text-gray-500 hover:text-blue-700 transition-colors text-sm">
            Ver más →
          </p>
        </motion.div>

        {/* UI/UX*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-10 flex flex-col items-center justify-between shadow-sm cursor-pointer md:col-span-2 mx-auto w-full md:w-1/2"
          onClick={() => setOpen("uiux")}
        >
          <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">
            Diseño UI/UX
          </h4>
          <p className="text-gray-500 hover:text-blue-700 transition-colors text-sm">
            Ver más →
          </p>
        </motion.div>
      </div>

    <AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*difuminaCIon */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(null)} 
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-black text-gray-800 dark:text-gray-200 rounded-2xl shadow-lg w-[90%] max-w-lg p-6"
      >
        <button
          onClick={() => setOpen(null)}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          <X size={22} />
        </button>

        {open === "frontend" && (
          <>
            <h3 className="text-lg font-bold text-blue-600 dark:text-white mb-4">
              Desarrollador frontend
            </h3>
            <p className="text-sm mb-4">
              Servicio con más de un año de experiencia. Ofrezco trabajo de
              calidad a clientes y empresas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Desarrollo de interfaces con HTML, CSS y JavaScript.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Optimización de aplicaciones para máxima velocidad.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Creación de maquetas y prototipos de calidad.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Colaboración con backends y diseñadores para mejorar usabilidad.
              </li>
            </ul>
          </>
        )}

        {open === "backend" && (
          <>
            <h3 className="text-lg font-bold text-blue-600 dark:text-white mb-4">
              Desarrollador backend
            </h3>
            <p className="text-sm mb-4">
              Servicio con más de un año de experiencia. Ofrezco trabajo de
              calidad a clientes y empresas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Lógica del lado del servidor para aplicaciones web.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Creación de APIs y bibliotecas escalables.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Optimización del rendimiento y escalabilidad.
              </li>
            </ul>
          </>
        )}

        {open === "uiux" && (
          <>
            <h3 className="text-lg font-bold text-blue-600 dark:text-white mb-4">
              Diseño UI/UX
            </h3>
            <p className="text-sm mb-4">
              Experiencia en diseño centrado en el usuario para crear
              interfaces modernas, funcionales y atractivas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Creación de prototipos interactivos y wireframes.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Diseño de experiencias accesibles y responsivas.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={18} />
                Investigación y pruebas con usuarios para mejorar la usabilidad.
              </li>
            </ul>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
    </div>
  );
}