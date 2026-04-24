import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

const steps = [
  {
    id: 1,
    title: "Project Type",
    subtitle: "What kind of space are we designing?",
  },
  {
    id: 2,
    title: "Design Style",
    subtitle: "Which aesthetic resonates with you?",
  },
  {
    id: 3,
    title: "Budget Range",
    subtitle: "What is your approximate investment?",
  },
  {
    id: 4,
    title: "Your Details",
    subtitle: "How can we reach you?",
  },
];

const projectTypes = [
  { value: "residential", label: "Residential", icon: "🏠", desc: "Private home or apartment" },
  { value: "commercial", label: "Commercial", icon: "🏢", desc: "Office or retail space" },
  { value: "hospitality", label: "Hospitality", icon: "🏨", desc: "Hotel, restaurant, or venue" },
  { value: "other", label: "Other", icon: "✦", desc: "Something unique" },
];

const designStyles = [
  { value: "contemporary", label: "Contemporary", desc: "Clean lines, neutral palette" },
  { value: "classic", label: "Classic Luxury", desc: "Timeless elegance, rich materials" },
  { value: "minimalist", label: "Minimalist", desc: "Less is more, pure form" },
  { value: "eclectic", label: "Eclectic", desc: "Curated mix of eras and cultures" },
  { value: "biophilic", label: "Biophilic", desc: "Nature-inspired, organic forms" },
  { value: "art-deco", label: "Art Déco", desc: "Geometric glamour, bold accents" },
];

const budgets = [
  { value: "50-150k", label: "$50K – $150K" },
  { value: "150-500k", label: "$150K – $500K" },
  { value: "500k-1m", label: "$500K – $1M" },
  { value: "1m+", label: "$1M+" },
  { value: "discuss", label: "Prefer to Discuss" },
];

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function Survey() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({
    projectType: "",
    designStyle: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const goNext = () => {
    if (currentStep === 0 && !answers.projectType) {
      setErrors({ projectType: "Please select a project type." });
      return;
    }
    if (currentStep === 1 && !answers.designStyle) {
      setErrors({ designStyle: "Please select a design style." });
      return;
    }
    if (currentStep === 2 && !answers.budget) {
      setErrors({ budget: "Please select a budget range." });
      return;
    }
    setErrors({});
    setDirection(1);
    setCurrentStep((s) => s + 1);
  };

  const goPrev = () => {
    setErrors({});
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!answers.name.trim()) newErrors.name = "Name is required.";
    if (!answers.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-cream flex items-center justify-center px-6 pt-20"
      >
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-20 h-20 rounded-full border border-gold flex items-center justify-center mx-auto mb-8"
          >
            <span className="text-gold text-3xl">✓</span>
          </motion.div>
          <SectionLabel center>Submission Received</SectionLabel>
          <h2 className="font-serif text-display-md text-charcoal mb-6">
            Thank You,<br />
            <em className="text-gold">{answers.name.split(" ")[0]}</em>
          </h2>
          <p className="text-muted font-light leading-relaxed mb-10">
            We've received your project brief and will be in touch within 48 hours to schedule an initial consultation.
          </p>
          <div className="bg-cream-dark border border-beige p-6 text-left mb-10 space-y-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-4">Your Summary</p>
            <div className="flex justify-between text-sm">
              <span className="text-muted font-light">Project Type</span>
              <span className="text-charcoal capitalize">{answers.projectType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted font-light">Design Style</span>
              <span className="text-charcoal capitalize">{answers.designStyle.replace("-", " ")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted font-light">Budget</span>
              <span className="text-charcoal">{answers.budget}</span>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-charcoal hover:bg-charcoal-light text-cream text-xs tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300 group"
          >
            Return Home
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cream pt-20"
    >
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel center>Project Brief</SectionLabel>
          <h1 className="font-serif text-display-md text-charcoal">Start Your Project</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-0 mb-16">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-light transition-all duration-500 ${
                    i < currentStep
                      ? "bg-gold border-gold text-white"
                      : i === currentStep
                      ? "border-charcoal text-charcoal"
                      : "border-beige-dark text-muted-light"
                  }`}
                >
                  {i < currentStep ? "✓" : i + 1}
                </div>
                <span className={`text-[9px] tracking-[0.2em] uppercase hidden md:block transition-colors duration-300 ${
                  i === currentStep ? "text-charcoal" : "text-muted-light"
                }`}>
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px transition-all duration-500 mb-5 ${i < currentStep ? "bg-gold" : "bg-beige-dark"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Step 1: Project Type */}
              {currentStep === 0 && (
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">{steps[0].title}</h2>
                  <p className="text-muted font-light mb-8">{steps[0].subtitle}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, projectType: type.value }));
                          setErrors({});
                        }}
                        className={`p-6 border text-left transition-all duration-300 group ${
                          answers.projectType === type.value
                            ? "border-gold bg-gold/5"
                            : "border-beige hover:border-charcoal"
                        }`}
                      >
                        <span className="text-2xl mb-3 block">{type.icon}</span>
                        <p className="font-serif text-xl text-charcoal mb-1">{type.label}</p>
                        <p className="text-xs text-muted font-light">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p className="text-red-400 text-xs mt-3 font-light">{errors.projectType}</p>
                  )}
                </div>
              )}

              {/* Step 2: Design Style */}
              {currentStep === 1 && (
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">{steps[1].title}</h2>
                  <p className="text-muted font-light mb-8">{steps[1].subtitle}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {designStyles.map((style) => (
                      <button
                        key={style.value}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, designStyle: style.value }));
                          setErrors({});
                        }}
                        className={`p-5 border text-left transition-all duration-300 ${
                          answers.designStyle === style.value
                            ? "border-gold bg-gold/5"
                            : "border-beige hover:border-charcoal"
                        }`}
                      >
                        <p className="font-serif text-lg text-charcoal mb-1">{style.label}</p>
                        <p className="text-xs text-muted font-light">{style.desc}</p>
                      </button>
                    ))}
                  </div>
                  {errors.designStyle && (
                    <p className="text-red-400 text-xs mt-3 font-light">{errors.designStyle}</p>
                  )}
                </div>
              )}

              {/* Step 3: Budget */}
              {currentStep === 2 && (
                <div>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">{steps[2].title}</h2>
                  <p className="text-muted font-light mb-8">{steps[2].subtitle}</p>
                  <div className="space-y-3">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, budget: b.label }));
                          setErrors({});
                        }}
                        className={`w-full p-5 border text-left flex items-center justify-between transition-all duration-300 group ${
                          answers.budget === b.label
                            ? "border-gold bg-gold/5"
                            : "border-beige hover:border-charcoal"
                        }`}
                      >
                        <span className="font-serif text-xl text-charcoal">{b.label}</span>
                        <span className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          answers.budget === b.label ? "border-gold bg-gold" : "border-beige-dark"
                        }`} />
                      </button>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="text-red-400 text-xs mt-3 font-light">{errors.budget}</p>
                  )}
                </div>
              )}

              {/* Step 4: Details */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="font-serif text-3xl text-charcoal mb-2">{steps[3].title}</h2>
                  <p className="text-muted font-light mb-8">{steps[3].subtitle}</p>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={answers.name}
                          onChange={(e) => {
                            setAnswers((a) => ({ ...a, name: e.target.value }));
                            if (errors.name) setErrors((er) => ({ ...er, name: "" }));
                          }}
                          placeholder="Your full name"
                          className={`w-full bg-transparent border-b py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm ${
                            errors.name ? "border-red-400" : "border-beige-dark"
                          }`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1 font-light">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(e) => {
                            setAnswers((a) => ({ ...a, email: e.target.value }));
                            if (errors.email) setErrors((er) => ({ ...er, email: "" }));
                          }}
                          placeholder="your@email.com"
                          className={`w-full bg-transparent border-b py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm ${
                            errors.email ? "border-red-400" : "border-beige-dark"
                          }`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1 font-light">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={answers.phone}
                        onChange={(e) => setAnswers((a) => ({ ...a, phone: e.target.value }))}
                        placeholder="+1 (000) 000 0000"
                        className="w-full bg-transparent border-b border-beige-dark py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-muted font-light mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={answers.notes}
                        onChange={(e) => setAnswers((a) => ({ ...a, notes: e.target.value }))}
                        rows={4}
                        placeholder="Tell us anything else about your vision..."
                        className="w-full bg-transparent border-b border-beige-dark py-3 text-charcoal font-light placeholder:text-muted-light/60 focus:border-gold transition-colors duration-300 text-sm resize-none"
                      />
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-beige">
          <button
            onClick={goPrev}
            disabled={currentStep === 0}
            className="text-xs tracking-[0.25em] uppercase text-muted hover:text-charcoal transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed font-light"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-px transition-all duration-500 ${
                  i <= currentStep ? "w-8 bg-gold" : "w-4 bg-beige-dark"
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={goNext}
              className="inline-flex items-center gap-3 bg-charcoal hover:bg-charcoal-light text-cream text-xs tracking-[0.25em] uppercase px-8 py-3.5 transition-all duration-300 group"
            >
              Continue
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white text-xs tracking-[0.25em] uppercase px-8 py-3.5 transition-all duration-300 group"
            >
              Submit Brief
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

