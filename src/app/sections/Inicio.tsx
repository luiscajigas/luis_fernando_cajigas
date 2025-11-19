"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Zap, User, MapPin, Calendar, Download } from "lucide-react";
import TiltedCard from "../components/TiltedCard";
import useLang from "../hooks/useLang";
import { t, frasesInicio } from "../i18n";

export default function Inicio() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const lang = useLang();
  
  const quotes = frasesInicio[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const getTextColor = (lightColor: string, darkColor: string) => {
    return isDarkMode ? darkColor : lightColor;
  };

  const getBgColor = (lightBg: string, darkBg: string) => {
    return isDarkMode ? darkBg : lightBg;
  };

  const getIconColor = () => {
     return isDarkMode ? '#ffffff' : 'rgb(192, 132, 252)';
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-6">
        <motion.div 
          className="flex-1 w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="w-full max-w-[90vw] md:max-w-[600px] flex items-center justify-center">
            <TiltedCard
              imageSrc={isDarkMode ? "/anim2.jpg" : "/anim.jpg"}
              fallbackSrc="/anim.jpg"
              altText="Imagen"
              captionText="Luis Fernando Cajigas"
              containerHeight="auto"
              containerWidth="100%"
              imageHeight="clamp(220px, 70vw, 400px)"
              imageWidth="clamp(220px, 70vw, 400px)"
              rotateAmplitude={14}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </motion.div>

       
        <motion.div 
          className="w-full md:flex-1 md:max-w-md md:pr-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 backdrop-blur-sm rounded-xl border shadow-lg"
            style={{
              backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20, 20, 20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
            }}
          >
            <p 
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: getTextColor('rgb(168, 85, 247)', 'rgb(96, 165, 250)') }}
            >
              "{quotes[currentQuote]}"
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-start gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Calendar, value: "4", label: t("inicio_years_exp_label", lang) },
              { icon: Code, value: "7", label: t("inicio_projects_label", lang) },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center backdrop-blur-sm px-3 py-2 rounded-lg border transition-all duration-200"
                style={{
                  backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20, 20, 20)'),
                  borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)')
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: getBgColor('rgba(229, 231, 235)', 'rgba(55, 65, 81, 0.6)')
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <stat.icon 
                  className="mx-auto mb-1" 
                  size={16} 
                  style={{ color: getIconColor() }}
                />
                <p 
                  className="text-sm font-bold"
                  style={{ color: getTextColor('#000000', 'white') }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: getTextColor('#000000', 'white') }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="https://drive.google.com/drive/folders/1VNlybjH-g6VpxgSuZ-BGgRJfn2TqZVM7?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300 mb-6"
            style={{
              backgroundColor: isDarkMode ? 'rgb(29, 78, 216)' : 'rgb(147, 51, 234)',
              color: 'white'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: isDarkMode ? 'rgb(59, 130, 246)' : 'rgb(126, 34, 206)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
              <Download size={18} />
              <span>{t("inicio_cv_download", lang)}</span>
          </motion.a>

          <motion.div 
            className="text-sm leading-relaxed backdrop-blur-sm p-6 rounded-xl border shadow-xl"
            style={{
              backgroundColor: getBgColor('rgb(209, 213, 219, 0.5)', 'rgba(20,20,20)'),
              borderColor: getBgColor('rgba(75, 85, 99, 0.3)', 'rgba(75, 85, 99, 0.3)'),
              color: getTextColor('black', 'white')
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <User 
                size={16} 
                style={{ color: getIconColor() }}
              />
              <span 
                className="font-semibold"
                style={{ color: getTextColor('#000000', '#FFFFFF') }}
              >
                Luis Fernando Cajigas
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <MapPin 
                size={14} 
                style={{ color: getIconColor() }}
              />
              <span 
                className="font-semibold"
                style={{ color: getTextColor('#000000', '#FFFFFF') }}
              >
                {t("inicio_location", lang)}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ color: getTextColor('#1f2937', '#d1d5db') }}
            >
              {t("inicio_bio_p1_a", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_software_engineering", lang)}
              </span>{" "}
              {t("inicio_bio_p1_b", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_frontend_backend", lang)}
              </span>.
              <br /><br />
              {t("inicio_bio_p2_a", lang)}
              {" "}
              {t("inicio_bio_p2_b", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_software_dev", lang)}
              </span>{" "}
              {t("inicio_bio_and", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_digital_interfaces", lang)}
              </span>, fortaleciendo mis habilidades técnicas y creativas.
              <br /><br />
              {t("inicio_bio_p3_a", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_innovation", lang)}
              </span>,
              {t("inicio_bio_comma", lang)} {t("inicio_bio_experimentation", lang)} {t("inicio_bio_and2", lang)}{" "}
              <span 
                className="font-bold"
                style={{ color: getTextColor('#111827', 'white') }}
              >
                {t("inicio_bio_critical_thinking", lang)}
              </span>.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-6 flex justify-start"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
           
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}