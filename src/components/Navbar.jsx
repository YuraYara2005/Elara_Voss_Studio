import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled || !isHome
    ? "bg-cream/95 backdrop-blur-md border-b border-beige shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-charcoal" : "text-white";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className={`font-serif text-2xl font-light tracking-[0.15em] transition-colors duration-300 ${textColor}`}>
              ELARA VOSS
            </span>
            <span className={`text-[10px] tracking-[0.35em] uppercase font-light transition-colors duration-300 ${scrolled || !isHome ? "text-gold" : "text-gold-light"}`}>
              Studio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 relative group ${
                  location.pathname === link.href
                    ? "text-gold"
                    : `${textColor} hover:text-gold`
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <Link
              to="/survey"
              className={`text-xs tracking-[0.2em] uppercase font-light px-5 py-2.5 border transition-all duration-300 ${
                scrolled || !isHome
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  : "border-white text-white hover:bg-white hover:text-charcoal"
              }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={link.href}
                  className="font-serif text-4xl text-cream hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/survey"
                className="text-xs tracking-[0.25em] uppercase text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
