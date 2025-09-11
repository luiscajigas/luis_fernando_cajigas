"use client";
import { useEffect } from "react";

interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function DarkModeToggle({ darkMode, setDarkMode }: Props) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="mt-auto flex flex-col gap-1 text-[10px] tracking-widest">
      <button
        onClick={() => setDarkMode(false)}
        className={`w-14 py-1 border rounded ${
          !darkMode
            ? "bg-gray-800 text-white"
            : "border-gray-400 text-gray-400"
        }`}
      >
        LUZ
      </button>
      <button
        onClick={() => setDarkMode(true)}
        className={`w-14 py-1 border rounded ${
          darkMode
            ? "bg-gray-200 text-black"
            : "border-gray-400 text-gray-400"
        }`}
      >
        OSCURO
      </button>
    </div>
  );
}