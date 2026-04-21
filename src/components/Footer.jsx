import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-light tracking-[0.15em]">ELARA VOSS</span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold font-light">Studio</span>
            </Link>
            <p className="text-muted-light text-sm leading-relaxed font-light max-w-xs">
              Crafting extraordinary interiors for discerning clients across the globe since 2004.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-light">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Start a Project", href: "/survey" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-light hover:text-gold transition-colors duration-300 font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-light">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-light font-light">
              <li>studio@elaravoss.com</li>
              <li>+1 (212) 555 0190</li>
              <li>
                <address className="not-italic leading-relaxed">
                  142 West 57th Street<br />
                  New York, NY 10019
                </address>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-[0.2em] uppercase text-muted-light hover:text-gold transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-light font-light tracking-wide">
            © {new Date().getFullYear()} Elara Voss Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-light font-light tracking-wide">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
