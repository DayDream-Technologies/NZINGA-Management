"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";

export interface TalentData {
  id: string;
  name: string;
  category: string;
  image: string;
  followers: string;
  bio: string;
  tags: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    tiktok?: string;
  };
}

interface TalentCardProps {
  talent: TalentData;
  index: number;
}

export default function TalentCard({ talent, index }: TalentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111111]">
        {/* Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${talent.image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Category */}
          <span className="text-xs uppercase tracking-wider text-[#d4a853] mb-2 block">
            {talent.category}
          </span>

          {/* Name */}
          <h3
            className="text-xl font-semibold mb-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {talent.name}
          </h3>

          {/* Followers */}
          <p className="text-sm text-[#a3a3a3] mb-3">{talent.followers} followers</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
            {talent.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-[#1a1a1a] rounded text-[#a3a3a3]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {talent.socials.instagram && (
              <a
                href={talent.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
            )}
            {talent.socials.twitter && (
              <a
                href={talent.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            )}
            {talent.socials.youtube && (
              <a
                href={talent.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>
            )}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300 ml-auto"
              aria-label="View Profile"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Border Effect */}
        <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
