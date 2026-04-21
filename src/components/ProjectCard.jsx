import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: (index % 3) * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5] mb-5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500 flex items-end p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-400"
          >
            <p className="text-cream/90 text-sm font-light leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[9px] tracking-[0.3em] uppercase bg-cream/90 text-charcoal px-3 py-1.5 font-light">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors duration-300 mb-1">
            {project.title}
          </h3>
          <p className="text-xs text-muted tracking-wide font-light">{project.location}</p>
        </div>
        <span className="text-xs text-muted-light font-light mt-1">{project.year}</span>
      </div>
    </motion.div>
  );
}
