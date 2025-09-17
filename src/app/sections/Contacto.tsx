"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Send,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Phone,
  MapPin,
  Clock,
  User,
} from "lucide-react";

export default function Contactame() {
  const [hovered, setHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const repeatCount = 100;
  const textArray = Array.from({ length: repeatCount }, (_, i) => i);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(
        "service_g16dk8h",
        "template_h9mzyq7",
        e.currentTarget,
        "g_smZ-XOueRoW4KQJ"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          e.currentTarget.reset();
          setTimeout(() => {
            setShowForm(false);
            setStatus("idle");
          }, 2000);
        },
        (error) => {
          setStatus("error");
          setLoading(false);
          console.error("Error:", error);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cajigasluis51@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Pasto, Nariño - Colombia",
      color: "text-green-400",
    },
    {
      icon: Clock,
      label: "Horario de respuesta",
      value: "24-48 horas",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
      {/* Título de fondo */}
      <h1 className="absolute bottom-6 left-6 text-[6rem] md:text-[10rem] font-extrabold text-gray-700 opacity-10 select-none leading-none">
        CONTACTO
      </h1>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8 text-center relative z-10 max-w-4xl"
          >
            {/* Header principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                Hablemos sobre cómo podemos hacer realidad tu idea.
              </p>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-900/60 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 hover:bg-neutral-800/60"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <info.icon
                    className={`${info.color} mx-auto mb-3`}
                    size={24}
                  />
                  <h3 className="text-white font-semibold mb-2">
                    {info.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <motion.button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 w-60 border border-blue-500/30"
                onClick={() => setShowForm(true)}
              >
                <div className="relative flex overflow-hidden w-full justify-center items-center gap-2">
                  <MessageCircle size={20} />
                  <motion.div
                    className="flex whitespace-nowrap"
                    animate={hovered ? { x: ["0%", "-100%"] } : { x: "0%" }}
                    transition={
                      hovered
                        ? {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                          }
                        : { duration: 0 }
                    }
                  >
                    {textArray.map((i) => (
                      <span key={i} className="px-2">
                        Empezar conversación
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.button>

              <motion.p
                className="text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                o envíame un correo directamente a{" "}
                <a
                  href="mailto:cajigasluis51@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  cajigasluis51@gmail.com
                </a>
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg bg-neutral-900/60 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 relative z-10"
          >
            {/* Botón de volver */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">
              Envíame un mensaje
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-neutral-800/50 p-3 rounded-lg">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Tu nombre"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>

              <div className="flex items-center gap-3 bg-neutral-800/50 p-3 rounded-lg">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Tu correo"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>

              <div className="flex items-center gap-3 bg-neutral-800/50 p-3 rounded-lg">
                <MessageCircle size={18} className="text-gray-400" />
                <textarea
                  name="message"
                  required
                  placeholder="Tu mensaje"
                  rows={4}
                  className="bg-transparent outline-none flex-1 text-white resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 border border-blue-500/30 disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar"}
                {!loading && <Send size={18} />}
              </motion.button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18} /> Mensaje enviado con éxito.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-red-400">
                  <AlertCircle size={18} /> Error al enviar el mensaje.
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}