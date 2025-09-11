"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  MessageCircle,
  Languages,
  User,
  MapPin,
  Volleyball,
  Cake,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaJava, FaGamepad, FaBurger } from "react-icons/fa6";

export default function Informacion() {
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false);
  const [mostrarConocerme, setMostrarConocerme] = useState(false);

  return (
    <div className="w-full h-full flex flex-col relative transition-colors duration-500">
      <h1 className="absolute top-105 left-1/2 -translate-x-200 text-[6rem] md:text-[10rem] font-extrabold text-gray-700 opacity-10 select-none leading-none">
        INFORMACION
      </h1>

      {/* Redes sociales*/}
      <motion.div
        className="absolute top-4 right-6 flex space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://github.com/luiscajigas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.instagram.com/___luisf_?igsh=MTNwczFxejhzdmw4OQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
        >
          <Instagram size={20} />
        </a>
        <a
          href="mailto:cajigasluis51@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20ponerme%20en%20contacto."
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-red-500 transition-colors"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://wa.me/qr/DNYAO7MEQ3IVJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors"
        >
          <MessageCircle size={20} />
        </a>
      </motion.div>

      {/*Idiomas */}
      <div className="absolute top-16 right-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMostrarIdiomas(!mostrarIdiomas)}
          className="flex items-center gap-2 bg-black hover:bg-blue-900 text-white text-sm px-4 py-2 rounded-full shadow transition"
        >
          <Languages size={16} />
          Idiomas
        </motion.button>
      </div>
      <AnimatePresence>
        {mostrarIdiomas && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute top-28 right-6 w-64 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Idiomas
            </h3>
            <div>
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                <span>Español (Nativo)</span>
                <span>100%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="bg-gray-700 h-3 rounded-full"
              />
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                <span>Inglés (B1)</span>
                <span>46%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "46%" }}
                transition={{ duration: 1 }}
                className="bg-gray-700 h-3 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido*/}
      <motion.div
        className="flex flex-col items-center text-center mt-10 px-4 transform -translate-x-6 md:-translate-x-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Hola, soy Luis Fernando Cajigas
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-400 mb-6">
          Desde hace 5 años me he dedicado al mundo de la programación de forma, 
          un camino que inicié con curiosidad y de forma independiente y que hoy
          se ha convertido en mi principal proyecto de vida. Actualmente curso 
          el quinto semestre de Ingeniería de Software en la Universidad
          Cooperativa de Colombia, donde complemento mi experiencia práctica 
          con una sólida formación académica.
          En los últimos años he enfocado mis esfuerzos en el Desarrollo Web Fullstack,
          especializándome en la creación de aplicaciones web dinámicas y centradas 
          en el usuario mediante tecnologías como React, Node.js y Django. 
          Mi objetivo es aplicar buenas prácticas de programación y patrones de diseño de
          software para construir soluciones escalables, eficientes y de calidad.
        </p>
        <motion.img
          src="/presentacion.jpg"
          alt="Luis Fernando Cajigas"
          className="w-42 h-42 rounded-full object-cover border border-gray-300 dark:border-gray-600 mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Mis habilidades*/}
      <motion.div
        className="flex flex-col items-center text-center mt-16 px-4 transform -translate-x-6 md:-translate-x-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-gray-600 dark:text-gray-400 text-sm">Mis habilidades</h3>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          Mi experiencia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* F*/}
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-4 shadow-sm">
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">
              Desarrollador frontend
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-200">
              <span className="flex items-center space-x-2">
                <SiHtml5 className="text-gray-600" /> <p>HTML</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiCss3 className="text-gray-600" /> <p>CSS</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiSass className="text-gray-600" /> <p>SCSS</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiJavascript className="text-gray-600" /> <p>JavaScript</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiTypescript className="text-gray-600" /> <p>TypeScript</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiTailwindcss className="text-gray-600" /> <p>Tailwind</p>
              </span>
            </div>
          </div>

          {/* B*/}
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-4 shadow-sm">
            <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-4">
              Desarrollador backend
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-200">
              <span className="flex items-center space-x-2">
                <SiNodedotjs className="text-gray-600" /> <p>Node.js</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiPython className="text-gray-600" /> <p>Python</p>
              </span>
              <span className="flex items-center space-x-2">
                <FaJava className="text-gray-600" /> <p>Java</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiMongodb className="text-gray-600" /> <p>MongoDB</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiMysql className="text-gray-600" /> <p>MySQL</p>
              </span>
              <span className="flex items-center space-x-2">
                <VscJson className="text-gray-600" /> <p>APIs</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MAS INFORMACION DE MI */}
      <div className="absolute bottom-6 right-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMostrarConocerme(!mostrarConocerme)}
          className="flex items-center gap-2 bg-black hover:bg-purple-900 text-white text-sm px-4 py-2 rounded-full shadow transition"
        >
          <User size={16} />
          Conocerme mejor
        </motion.button>

        <AnimatePresence>
          {mostrarConocerme && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-14 right-0 w-80 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg flex flex-col gap-2"
            >
              <motion.span
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <FaGamepad className="text-gray-500" size={22} /> Me gusta leer y
                jugar videojuegos en mis tiempos libres
              </motion.span>
              <motion.span
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="text-gray-500" size={16} /> Ubicación actual:
                Pasto - Nariño, Colombia
              </motion.span>
              <motion.span
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <FaBurger className="text-gray-500" /> Mi comida favorita es la
                hamburguesa
              </motion.span>
              <motion.span
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Volleyball className="text-gray-500" size={16} /> Mi deporte
                favorito es el voleibol
              </motion.span>
              <motion.span
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Cake className="text-gray-500" size={16} /> Tengo 20 años de edad
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
