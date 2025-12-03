"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Apply/remove class .dark ke <html>
  useEffect(() => {
    const html = document.documentElement;
    dark ? html.classList.add("dark") : html.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    fetch("https://raffahitipeuw.github.io/portasset/datablog/navbar/navbar.json")
      .then(res => res.json())
      .then(json => setData(json.navbar))
      .catch(err => console.error("Navbar fetch error:", err));
  }, []);

  if (!data) return null;

  const slideVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#D9D9D9] dark:bg-[#111] px-4 pt-6">
      <div className="flex items-center gap-4 text-[10px] tracking-wide text-[#555] dark:text-[#ddd] h-5">
        
        <button onClick={() => setOpen(!open)}>
          <div className="relative w-4 h-4 flex items-center justify-center">
            <span className="absolute w-4 h-px bg-[#555] dark:bg-[#ccc] top-1.5" />
            <span className="absolute w-4 h-px bg-[#555] dark:bg-[#ccc] top-0.5" />
            <span className="absolute w-4 h-px bg-[#555] dark:bg-[#ccc] -top-0.5" />
          </div>
        </button>

        <span className="-mt-2">{data.brand}</span>
      </div>

      <div className="w-full h-px bg-[#ccc] dark:bg-[#444] mt-2" />

      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.div
              variants={slideVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute left-0 top-2 bg-[#ededed] dark:bg-[#222] p-3 rounded-lg shadow-lg text-xs text-[#333] dark:text-[#ddd]"
            >
              <button
                onClick={() => setDark(!dark)}
                className="w-full text-left py-1 hover:text-black dark:hover:text-white"
              >
                {dark ? data.darkmode.light : data.darkmode.dark}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
