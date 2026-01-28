"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Instagram, Youtube, Music } from "lucide-react";
import XIcon from "@/components/icons/x-icon";
import { TalentPerson, calculateAge, categoryInfo } from "@/lib/talent-data";

interface TalentCardProps {
  talent: TalentPerson;
  index: number;
}

export default function TalentCard({ talent, index }: TalentCardProps) {
  const age = calculateAge(talent.birthDate);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // More dramatic scale: 0.75 -> 1.0
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.75, 0.95, 1]);
  
  // Parallax Y movement based on position in grid
  const yOffset = index % 2 === 1 ? [40, 0, -20] : [20, 0, -10];
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8], yOffset);
  
  // Subtle rotation for dynamic feel
  const rotateAmount = index % 2 === 1 ? [2, 0, -1] : [-2, 0, 1];
  const rotate = useTransform(scrollYProgress, [0, 0.4, 0.8], rotateAmount);

  // Enhanced staggered offset - alternating pattern with more variation
  const getStaggerClass = () => {
    const position = index % 4;
    switch (position) {
      case 1: return "lg:mt-16";
      case 2: return "lg:mt-8";
      case 3: return "lg:mt-24";
      default: return "";
    }
  };

  // Row-based delay for synchronized loading
  const rowNumber = Math.floor(index / 4);
  const positionInRow = index % 4;
  const animationDelay = rowNumber * 0.15 + positionInRow * 0.05;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeOut" }}
      style={{ scale, y, rotate }}
      className={`group relative origin-center ${getStaggerClass()}`}
    >
      <Link href={`/talent/${talent.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111111]">
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${talent.primaryPhoto})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />

          {/* Categories Badge */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {talent.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-[#d4a853] uppercase tracking-wider"
              >
                {categoryInfo[cat].label}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {/* Name */}
            <h3
              className="text-xl font-semibold mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {talent.name}
            </h3>

            {/* Age & Location */}
            <p className="text-sm text-[#a3a3a3] mb-3">
              {age} years old{talent.location && ` • ${talent.location}`}
            </p>

            {/* Short Bio - shows on hover */}
            <p className="text-sm text-[#a3a3a3] mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden line-clamp-2">
              {talent.shortBio}
            </p>

            {/* Social Links */}
            <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {talent.socials.instagram && (
                <span
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] group-hover:bg-[#262626]"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </span>
              )}
              {talent.socials.tiktok && (
                <span
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] group-hover:bg-[#262626]"
                  aria-label="TikTok"
                >
                  <Music size={14} />
                </span>
              )}
              {talent.socials.youtube && (
                <span
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] group-hover:bg-[#262626]"
                  aria-label="YouTube"
                >
                  <Youtube size={14} />
                </span>
              )}
              {talent.socials.twitter && (
                <span
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] group-hover:bg-[#262626]"
                  aria-label="X"
                >
                  <XIcon size={14} />
                </span>
              )}
              <span className="ml-auto text-xs text-[#d4a853] uppercase tracking-wider self-center">
                View Profile →
              </span>
            </div>
          </div>

          {/* Border Effect */}
          <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
