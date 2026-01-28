"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Creators & Influencers" },
  { value: 15, suffix: "+", label: "Brand Partnerships" },
  { value: 10, suffix: "", label: "Nationwide Offices" },
  { value: 50, suffix: "+", label: "Dedicated Employees" },
];

const brands = [
  { name: "Isaiahs Hub", logo: getAssetPath("/brands/isaiahs-hub.png") },
  { name: "Dubby", logo: getAssetPath("/brands/dubby.png") },
  { name: "Prime Video", logo: getAssetPath("/brands/prime-video.png") },
  { name: "Meta", logo: getAssetPath("/brands/meta.png") },
  { name: "Royale Battlefield", logo: getAssetPath("/brands/royale-battlefield.png") },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden section-glow">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-ambient" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a853 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/40 to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
            Why Choose Us
          </span>
          <h2
            className="heading-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Impact in <span className="text-gradient">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 lg:p-8 relative group"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-[#d4a853]/0 group-hover:bg-[#d4a853]/5 transition-colors duration-500" />
              
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#a3a3a3] text-sm md:text-base uppercase tracking-wider relative">
                {stat.label}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#d4a853] group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Brand Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-[#262626]"
        >
          <p className="text-center text-sm text-[#a3a3a3] uppercase tracking-[0.2em] mb-8">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center px-6 h-[60px] rounded-lg transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #d8d8d8 100%)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="object-contain h-[40px] w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/40 to-transparent" />
    </section>
  );
}
