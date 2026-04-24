import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "180", label: "Projects Completed" },
  { value: "32", label: "Countries" },
  { value: "14", label: "Design Awards" },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=85"
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            <SectionLabel light>Award-Winning Design Studio</SectionLabel>
            <h1 className="font-serif text-display-xl text-white mb-6 max-w-4xl">
              Spaces That<br />
              <em className="not-italic text-gold-light">Transcend</em> the<br />
              Ordinary
            </h1>
            <p className="text-cream/80 text-lg font-light max-w-lg mb-10 leading-relaxed">
              We design interiors that reflect the singular vision of those who inhabit them — with precision, beauty, and enduring craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 group"
              >
                View Our Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/survey"
                className="inline-flex items-center gap-3 border border-white/60 text-white hover:border-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-12 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mb-4">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">{stat.value}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-light font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <AnimatedSection>
                <h2 className="font-serif text-display-md text-charcoal">
                  Recent Projects
                </h2>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2}>
              <Link
                to="/projects"
                className="text-xs tracking-[0.25em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300 whitespace-nowrap"
              >
                View All Projects →
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-section bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
                  alt="Design philosophy"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 border border-gold/30 hidden lg:block" />
              </div>
            </AnimatedSection>

            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <AnimatedSection delay={0.1}>
                <h2 className="font-serif text-display-md text-charcoal mb-8">
                  Beauty With<br />
                  <em className="text-gold">Purpose</em>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-muted text-base leading-relaxed font-light mb-6">
                  We believe that great design is not merely aesthetic — it is the art of creating environments that elevate daily life. Every project begins with deep listening, understanding not just what our clients want, but how they wish to feel.
                </p>
                <p className="text-muted text-base leading-relaxed font-light mb-10">
                  From the first sketch to the final installation, we bring an obsessive attention to detail, a global network of artisans, and an unwavering commitment to excellence.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  About the Studio →
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionLabel center>Client Stories</SectionLabel>
            <AnimatedSection>
              <h2 className="font-serif text-display-md text-charcoal">
                What Our Clients Say
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&q=80"
            alt="Luxury space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel light center>Begin Your Journey</SectionLabel>
          <AnimatedSection>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Ready to Transform<br />Your Space?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-cream/70 text-lg font-light mb-10 leading-relaxed">
              Tell us about your vision. We'll craft an experience that exceeds every expectation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/survey"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 group"
              >
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/50 text-white hover:border-white text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}

