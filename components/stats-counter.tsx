"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a853 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
            Our Impact in Numbers
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
              className="text-center p-6 lg:p-8"
            >
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#a3a3a3] text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
