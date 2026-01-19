"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Vision",
    description: "We see the potential in every creator and work tirelessly to help them achieve their dreams.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We're not just managers – we're partners in your journey to success.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous development and expansion of opportunities for our talent.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do.",
  },
];

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Parallax Background Element */}
      <motion.div
        style={{ y }}
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, #d4a853 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Our Mission
            </span>
            <h2
              className="heading-lg mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Helping You Form and Create Your Own{" "}
              <span className="text-gradient">Success</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">
              At NZINGA Management, we believe every creator has a unique story
              to tell. Our mission is to amplify those stories, connecting
              talented individuals with brands that share their vision and values.
            </p>
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              We provide comprehensive management services that go beyond
              traditional representation. From brand partnerships to personal
              development, we're committed to your success both personally and
              professionally.
            </p>
            
            {/* Decorative Line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-[#d4a853]" />
              <span className="text-sm text-[#a3a3a3] uppercase tracking-wider">
                Since 2020
              </span>
            </div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-[#111111] rounded-lg border border-[#262626] hover:border-[#d4a853]/50 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#d4a853]/10 transition-colors duration-500">
                  <value.icon
                    size={24}
                    className="text-[#d4a853]"
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
