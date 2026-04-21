import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { team } from "../data/team";
import { testimonials } from "../data/testimonials";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import TestimonialCard from "../components/TestimonialCard";

const values = [
  {
    title: "Precision",
    description: "Every millimeter matters. We approach each project with an architect's rigor and an artist's sensitivity.",
  },
  {
    title: "Authenticity",
    description: "We design for the individual, not the trend. Each space is a genuine expression of its inhabitant.",
  },
  {
    title: "Craft",
    description: "We partner with the world's finest artisans to bring materials and forms to life with uncompromising quality.",
  },
  {
    title: "Longevity",
    description: "We create spaces that endure — aesthetically, structurally, and emotionally — for generations.",
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <SectionLabel light>The Studio</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="font-serif text-display-lg text-white"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <AnimatedSection>
                <h2 className="font-serif text-display-md text-charcoal mb-8">
                  Two Decades of<br />
                  <em className="text-gold">Defining Luxury</em>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted text-base leading-relaxed font-light mb-5">
                  Founded in 2004 by Elara Voss, our studio has grown from a boutique New York practice into a globally recognized name in luxury interior design. We have shaped residences, hotels, restaurants, and offices across 32 countries.
                </p>
                <p className="text-muted text-base leading-relaxed font-light mb-5">
                  Our approach is rooted in the belief that exceptional design begins with exceptional listening. We immerse ourselves in the lives of our clients — their habits, aspirations, and aesthetic sensibilities — before a single line is drawn.
                </p>
                <p className="text-muted text-base leading-relaxed font-light">
                  The result is always the same: spaces that feel inevitable. As though they could not have been any other way.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
                  alt="Studio"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 border border-gold/30 hidden lg:block" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionLabel center>What We Stand For</SectionLabel>
            <AnimatedSection>
              <h2 className="font-serif text-display-md text-charcoal">Our Values</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group">
                  <div className="w-8 h-px bg-gold mb-6 group-hover:w-16 transition-all duration-500" />
                  <h3 className="font-serif text-2xl text-charcoal mb-4">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionLabel center>The People</SectionLabel>
            <AnimatedSection>
              <h2 className="font-serif text-display-md text-charcoal">Meet the Team</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.15}>
                <div className="group text-center">
                  <div className="relative overflow-hidden aspect-[3/4] mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-1">{member.name}</h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-light mb-4">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed font-light">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionLabel center>Client Stories</SectionLabel>
            <AnimatedSection>
              <h2 className="font-serif text-display-md text-charcoal">Testimonials</h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionLabel light center>Work With Us</SectionLabel>
          <AnimatedSection>
            <h2 className="font-serif text-display-md text-white mb-6">
              Let's Create Something<br />
              <em className="text-gold">Extraordinary</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-light font-light mb-10 leading-relaxed">
              We take on a limited number of projects each year to ensure every client receives our full attention and dedication.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              to="/survey"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 group"
            >
              Begin Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
</parameter>
