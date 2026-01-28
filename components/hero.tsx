"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-grain-strong">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Background Image Layer - Professional fashion/talent imagery */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(/hero-image.avif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        
        {/* Dark overlay on background image */}
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animated-gradient-orb animated-gradient-orb-1" />
          <div className="animated-gradient-orb animated-gradient-orb-2" />
          <div className="animated-gradient-orb animated-gradient-orb-3" />
        </div>
        
        {/* Top and Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 opacity-60" />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 animated-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 168, 83, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 168, 83, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Gold vignette effect */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.4) 70%, rgba(10, 10, 10, 0.8) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-6 px-4 py-2 border border-[#d4a853]/30 rounded-full">
            Premier Talent Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-xl mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Elevating{" "}
          <span className="text-gradient">Creators</span>
          <br />
          to New Heights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10"
        >
          We help form and create your own success personally and professionally.
          Join the next generation of influential creators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/talent" className="btn-primary">
            View Our Talent
          </Link>
          <Link href="/join" className="btn-secondary">
            Join Today
          </Link>
        </motion.div>
        
        {/* Gold accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 mx-auto w-32 gold-line"
        />
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#d4a853]/40 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#d4a853]/40 to-transparent hidden lg:block" />
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#d4a853]/30 hidden lg:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#d4a853]/30 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#d4a853]/30 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#d4a853]/30 hidden lg:block" />
    </section>
  );
}
