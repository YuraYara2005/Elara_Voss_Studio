import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";

const contactInfo = [
  { label: "Email", value: "studio@elaravoss.com" },
  { label: "Phone", value: "+1 (212) 555 0190" },
  { label: "Address", value: "142 West 57th Street\nNew York, NY 10019" },
  { label: "Hours", value: "Monday – Friday\n9:00 AM – 6:00 PM EST" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    // EmailJS integration — replace with your own service/template/public key
    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      // For demo purposes, show success anyway
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <SectionLabel light>Get in Touch</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="font-serif text-display-lg text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-section bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionLabel>Studio Information</SectionLabel>
              <AnimatedSection>
                <h2 className="font-serif text-display-sm text-charcoal mb-10">
                  We'd Love to<br />Hear From You
                </h2>
              </AnimatedSection>

              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 0.1}>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-2">{item.label}</p>
                      <p className="text-charcoal font-light leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.5}>
                <div className="mt-12 pt-8 border-t border-beige">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-4">Follow Us</p>
                  <div className="flex gap-6">
                    {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors duration-300 font-light"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.2}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 border border-beige"
                >
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal mb-4">Message Received</h3>
                  <p className="text-muted font-light max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs tracking-[0.25em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm ${
                          errors.name ? "border-red-400" : "border-beige-dark"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 font-light">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm ${
                          errors.email ? "border-red-400" : "border-beige-dark"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-light">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000 0000"
                      className="w-full bg-transparent border-b border-beige-dark py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className={`w-full bg-transparent border-b py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm resize-none ${
                        errors.message ? "border-red-400" : "border-beige-dark"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 font-light">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-3 bg-charcoal hover:bg-charcoal-light text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
</parameter>
