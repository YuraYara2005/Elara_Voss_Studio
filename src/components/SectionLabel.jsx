import React from "react";
import { motion } from "framer-motion";

export default function SectionLabel({ children, light = false, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}
    >
      <span className="block w-8 h-px bg-gold" />
      <span className={`text-[10px] tracking-[0.35em] uppercase font-light ${light ? "text-gold-light" : "text-gold"}`}>
        {children}
      </span>
    </motion.div>
  );
}
