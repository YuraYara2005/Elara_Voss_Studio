import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <span className="font-serif text-2xl text-charcoal tracking-widest">EVS</span>
        <div className="w-12 h-px bg-beige-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gold animate-[shimmer_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
