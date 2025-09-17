"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contactame() {
  const [hovered, setHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);;


  const repeatCount = 100;
  const textArray = Array.from({ length: repeatCount }, (_, i) => i);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g16dk8h", 
        "template_h9mzyq7",
        e.currentTarget,
        "g_smZ-XOueRoW4KQJ" 
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente!");
          setLoading(false);
          e.currentTarget.reset();
          setShowForm(false);
        },
        (error) => {
          alert("❌ Error al enviar: " + JSON.stringify(error));
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-20">
      <h1 className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold text-gray-700 opacity-10 select-none leading-none">
        CONTACTO
      </h1>

      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10"
          >
            <h2 className="text-2xl font-bold text-gray-200">
              ¿Estás pensando en algún proyecto?
            </h2>

            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gray-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-colors w-40"
              onClick={() => setShowForm(true)}
            >
              <div className="relative flex overflow-hidden w-full">
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={hovered ? { x: ["0%", "-100%"] } : { x: "0%" }}
                  transition={
                    hovered
                      ? {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 90,
                          ease: "linear",
                        }
                      : { duration: 0 }
                  }
                >
                  {textArray.map((i) => (
                    <span key={i} className="px-2">
                      Contáctame
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg bg-neutral-950 rounded-2xl p-8 shadow-2xl relative z-10"
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Contacto.</h2>
            <p className="text-gray-400 mb-6">
              Ponte en contacto conmigo o envíame un correo a{" "}
              <span className="font-semibold">cajigasluis51@gmail.com</span>
            </p>

            <motion.form
              onSubmit={sendEmail}
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-600 focus:border-blue-600 outline-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
              <motion.input
                type="email"
                name="mail"
                placeholder="Correo electrónico"
                required
                className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-600 focus:border-blue-600 outline-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
              <motion.textarea
                name="message"
                placeholder="Mensaje"
                required
                className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-600 focus:border-blue-600 outline-none h-32"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              ></motion.textarea>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gray-700 hover:bg-blue-900 transition-all shadow-lg disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </motion.button>
            </motion.form>

            <motion.button
              onClick={() => setShowForm(false)}
              className="mt-6 text-gray-400 hover:text-blue-600 transition"
              whileHover={{ x: -5 }}
            >
              ← Regresar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}