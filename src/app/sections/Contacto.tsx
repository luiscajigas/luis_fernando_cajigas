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
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Contactame() {
  const [hovered, setHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const repeatCount = 100;
  const textArray = Array.from({ length: repeatCount }, (_, i) => i);

  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

// Inicializar posiciones de partículas sólo en cliente
const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);
useEffect(() => {
  const arr = Array.from({ length: 50 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));
  setParticles(arr);
}, []);

// Colores
const getTextColor = (lightColor: string, darkColor: string): string => {
  return isDarkMode ? darkColor : lightColor;
};

const getBgColor = (lightBg: string, darkBg: string): string => {
  return isDarkMode ? darkBg : lightBg;
};

// Formulario email
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
      color: "text-purple-700 dark:text-blue-700",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Pasto, Nariño - Colombia",
      color: "text-purple-700 dark:text-blue-700",
    },
    {
      icon: Clock,
      label: "Horario de respuesta",
      value: "24-48 horas",
      color: "text-purple-700 dark:text-blue-700",
    },
  ];

  const reviews = [
    {
      id: 1,
      text: "Aquí encontrarás la primera reseña",
      author: "Cliente Satisfecho"
    },
    {
      id: 2,
      text: "Excelente trabajo y muy profesional, superó todas mis expectativas",
      author: "María González"
    },
    {
      id: 3,
      text: "Cumplió todos mis requerimientos perfectamente, lo recomiendo 100%",
      author: "Carlos Rodríguez"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-16 md:pt-20 pb-24 flex justify-center overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              backgroundColor: isDarkMode
                ? "rgba(156, 163, 175, 0.3)"
                : "rgba(107, 114, 128, 0.3)",
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 20 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <h1
        className="absolute bottom-8 left-6 text-[5rem] md:text-[9rem] font-extrabold opacity-5 select-none leading-none"
        style={{
          color: isDarkMode ? "rgb(55, 65, 81)" : "rgb(107, 114, 128)",
        }}
      >
        CONTACTO
      </h1>

      {/* Contenedor principal centrado vertical y horizontalmente */}
      <div className="relative z-10 w-full max-w-6xl min-h-[70vh] mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-10 text-center mt-6"
            >
              {/* Títulos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2
                  className="text-4xl md:text-5xl font-bold mb-5 text-center"
                  style={{ color: getTextColor("#111827", "white") }}
                >
                  ¿Tienes un proyecto en mente?
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: getTextColor("#4b5563", "#9ca3af") }}
                >
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                  Hablemos sobre cómo podemos hacer realidad tu idea.
                </p>
              </motion.div>

              {/* Tarjetas de contacto */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="backdrop-blur-sm border rounded-xl p-6 md:p-7 text-center transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: getBgColor(
                        "rgb(243, 244, 246)",
                        "rgba(20, 20, 20)"
                      ),
                      borderColor: getBgColor(
                        "rgba(209, 213, 219, 0.5)",
                        "rgba(75, 85, 99, 0.3)"
                      ),
                    }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <info.icon className={info.color} size={24} style={{ margin: "0 auto 12px" }} />
                    <h3 className="font-semibold mb-2" style={{ color: getTextColor("#111827", "white") }}>{info.label}</h3>
                    <p className="text-sm" style={{ color: getTextColor("#4b5563", "#9ca3af") }}>{info.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA y correo directo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-blue-500 dark:to-blue-900 hover:from-cyan-600 hover:to-purple-600 dark:hover:from-blue-600 dark:hover:to-blue-900 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 w-60 border border-purple-500/30 dark:border-blue-500/30"
                  onClick={() => setShowForm(true)}
                >
                  <div className="relative flex overflow-hidden w-full justify-center items-center gap-2">
                    <MessageCircle size={20} className="text-purple-100 dark:text-white" />
                    <span className="px-2">empezar conversacion</span>
                  </div>
                </motion.button>

                <motion.p
                  className="text-sm"
                  style={{ color: getTextColor("#6b7280", "#9ca3af") }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  o envíame un correo directamente a {" "}
                  <a href="mailto:cajigasluis51@gmail.com" className="text-purple-700 hover:text-purple-900 dark:text-blue-700 dark:hover:text-blue-900 underline transition-colors">cajigasluis51@gmail.com</a>
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
              className="w-full max-w-3xl backdrop-blur-sm border rounded-2xl p-8 md:p-12 relative z-10 shadow-xl md:max-h-[80vh] overflow-y-auto"
              style={{
                backgroundColor: getBgColor("rgb(209, 213, 219)", "rgba(20, 20, 20)"),
                borderColor: getBgColor("rgba(209, 213, 219, 0.5)", "rgba(75, 85, 99, 0.3)"),
              }}
            >
              <button onClick={() => setShowForm(false)} className="absolute top-4 left-4 transition-colors" style={{ color: getTextColor("#6b7280", "#9ca3af") }}>
                <ArrowLeft size={20} />
              </button>

              <h3 className="text-2xl font-bold mb-6" style={{ color: getTextColor("#111827", "white") }}>Envíame un mensaje</h3>

              <form onSubmit={sendEmail} className="space-y-5">
                <div
                  className="flex items-center gap-3 p-4 md:p-5 rounded-lg transition shadow-sm focus-within:ring-2 focus-within:ring-blue-500/40"
                  style={{ backgroundColor: getBgColor("rgba(243, 244, 246, 0.6)", "rgba(31, 41, 55, 0.5)") }}
                >
                  <User size={18} style={{ color: getTextColor("#6b7280", "#9ca3af") }} />
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Tu nombre"
                    className="bg-transparent outline-none flex-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base"
                    style={{ color: getTextColor("#111827", "white") }}
                  />
                </div>

                <div
                  className="flex items-center gap-3 p-4 md:p-5 rounded-lg transition shadow-sm focus-within:ring-2 focus-within:ring-blue-500/40"
                  style={{ backgroundColor: getBgColor("rgba(243, 244, 246, 0.6)", "rgba(31, 41, 55, 0.5)") }}
                >
                  <Mail size={18} style={{ color: getTextColor("#6b7280", "#9ca3af") }} />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Tu correo"
                    className="bg-transparent outline-none flex-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base"
                    style={{ color: getTextColor("#111827", "white") }}
                  />
                </div>

                <div
                  className="flex items-start gap-3 p-4 md:p-5 rounded-lg transition shadow-sm focus-within:ring-2 focus-within:ring-blue-500/40"
                  style={{ backgroundColor: getBgColor("rgba(243, 244, 246, 0.6)", "rgba(31, 41, 55, 0.5)") }}
                >
                  <MessageCircle size={18} style={{ color: getTextColor("#6b7280", "#9ca3af"), marginTop: "2px" }} />
                  <textarea
                    name="message"
                    required
                    placeholder="Tu mensaje"
                    rows={4}
                    className="bg-transparent outline-none flex-1 resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base"
                    style={{ color: getTextColor("#111827", "white") }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-900 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3.5 px-7 rounded-lg shadow-lg transition-all duration-300 border border-blue-500/30 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar"}
                  {!loading && <Send size={18} />}
                </motion.button>

                {status === "success" && (
                  <p className="flex items-center gap-2 text-green-400"><CheckCircle size={18} /> Mensaje enviado con éxito.</p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-red-400"><AlertCircle size={18} /> Error al enviar el mensaje.</p>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón y panel de reseñas flotante */}
        <motion.div
          className="fixed bottom-20 right-18 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={() => setShowReviews(!showReviews)}
            className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300"
            style={{
              background: getBgColor("linear-gradient(to right, #06B6D4, #a855f7)", "linear-gradient(to right, #2563EB, #1E3A8A)"),
              borderColor: getBgColor("rgba(209, 213, 219, 0.5)", "rgba(75, 85, 99, 0.3)")
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} style={{ color: getTextColor("#4b5563", "#9ca3af") }} />
            <span className="font-medium" style={{ color: getTextColor("#111827", "white") }}>Reseñas</span>
          </motion.button>

          <AnimatePresence>
            {showReviews && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowReviews(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full mb-4 right-0 w-80 sm:w-96 max-w-[90vw] backdrop-blur-md border rounded-xl shadow-xl z-50"
                  style={{
                  backgroundColor: getBgColor("rgba(243, 244, 246, 0.95)", "rgba(20, 20, 20, 0.95)"),
                  borderColor: getBgColor("rgba(209, 213, 219, 0.5)", "rgba(75, 85, 99, 0.3)")
                }}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold flex items-center gap-2" style={{ color: getTextColor("#111827", "white") }}>
                      <Star size={18} className="text-yellow-500" />
                      Reseñas de Clientes
                    </h3>
                    <div className="flex items-center gap-2">
                      <button onClick={prevReview} className="p-1.5 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700" style={{ color: getTextColor("#6b7280", "#9ca3af") }}>
                        <ChevronLeft size={16} />
                      </button>
                      <span className="text-sm font-medium px-2" style={{ color: getTextColor("#6b7280", "#9ca3af") }}>
                        {currentReview + 1} / {reviews.length}
                      </span>
                      <button onClick={nextReview} className="p-1.5 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700" style={{ color: getTextColor("#6b7280", "#9ca3af") }}>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="relative p-3 sm:p-5 rounded-lg min-h-[100px] sm:min-h-[120px] flex flex-col justify-between"
                      style={{ backgroundColor: getBgColor("rgba(255, 255, 255, 0.8)", "rgba(64, 64, 64, 0.10)") }}
                    >
                      <div className="flex items-start gap-3">
                        <Quote size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm italic mb-3 sm:mb-4 leading-relaxed" style={{ color: getTextColor("#374151", "#d1d5db") }}>
                            "Reseña {reviews[currentReview].id}: {reviews[currentReview].text}"
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-medium" style={{ color: getTextColor("#6b7280", "#9ca3af") }}>- {reviews[currentReview].author}</p>
                            <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} size={12} className="text-yellow-400 fill-current" />))}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center gap-2 mt-4">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentReview ? 'bg-blue-500 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}