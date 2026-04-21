import React from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
      className="bg-white border border-beige p-8 lg:p-10 flex flex-col gap-6 hover:border-gold/40 transition-colors duration-500"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif text-lg lg:text-xl text-charcoal leading-relaxed font-light italic flex-1">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-beige">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover grayscale"
        />
        <div>
          <p className="text-sm font-medium text-charcoal tracking-wide">{testimonial.name}</p>
          <p className="text-xs text-muted font-light tracking-wide mt-0.5">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
