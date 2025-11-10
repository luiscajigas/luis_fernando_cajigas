"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeTransition() {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [isDark, setIsDark] = useState<boolean>(true);
  const prevDarkRef = useRef<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const current = root.classList.contains("dark");
      setIsDark(current);
      if (prevDarkRef.current !== null && prevDarkRef.current !== current) {

        setDirection(current ? "rtl" : "ltr");
        setVisible(true);
        setTimeout(() => setVisible(false), 700);
      }
      prevDarkRef.current = current;
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const initialX = direction === "ltr" ? "-100%" : "100%";
  const animateX = direction === "ltr" ? "100%" : "-100%";
  const bgClass = isDark
    ? "from-neutral-900 via-neutral-800 to-black"
    : "from-gray-50 via-white to-gray-200";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed inset-0 z-[60] pointer-events-none bg-gradient-to-r ${bgClass}`}
          initial={{ x: initialX, opacity: 0.95 }}
          animate={{ x: animateX, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}