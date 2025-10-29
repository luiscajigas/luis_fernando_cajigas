"use client";

import { useEffect, useState } from "react";

export type Lang = "es" | "en";

export default function useLang() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const initial = stored === "en" ? "en" : "es";
    setLang(initial);
    if (typeof document !== "undefined") {
      document.documentElement.lang = initial;
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Lang | undefined;
      if (detail === "es" || detail === "en") setLang(detail);
    };
    window.addEventListener("app:language", handler as EventListener);
    return () => window.removeEventListener("app:language", handler as EventListener);
  }, []);

  return lang;
}