"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  compact?: boolean;
}

export default function PageHero({ label, title, description, compact = false }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-40 pb-24' : 'pt-44 pb-32'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(/hero-image.avif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
            {label}
          </span>
          <h1
            className="heading-xl mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h1>
          <p className="text-lg text-[#a3a3a3]">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
