"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Youtube, Music } from "lucide-react";
import { talentRoster, categoryInfo, calculateAge } from "@/lib/talent-data";

// Get featured talent
const featuredTalent = talentRoster.filter((t) => t.featured && t.active).slice(0, 4);

export default function FeaturedTalent() {
  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Our Roster
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Featured Talent
            </h2>
          </div>
          <Link
            href="/talent"
            className="mt-6 md:mt-0 text-[#d4a853] uppercase tracking-wider text-sm hover:text-[#e8c87a] transition-colors duration-300 link-hover inline-block"
          >
            View All Talent →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredTalent.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/talent/${talent.slug}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${talent.primaryPhoto})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />
                  
                  {/* Categories Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {talent.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] px-2 py-0.5 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-[#d4a853] uppercase tracking-wider"
                      >
                        {categoryInfo[cat].label}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-xl font-semibold mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {talent.name}
                    </h3>
                    <p className="text-sm text-[#a3a3a3] mb-4">
                      {calculateAge(talent.birthDate)} years old
                      {talent.location && ` • ${talent.location}`}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {talent.socials.instagram && (
                        <span
                          className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3]"
                          aria-label="Instagram"
                        >
                          <Instagram size={16} />
                        </span>
                      )}
                      {talent.socials.tiktok && (
                        <span
                          className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3]"
                          aria-label="TikTok"
                        >
                          <Music size={16} />
                        </span>
                      )}
                      {talent.socials.youtube && (
                        <span
                          className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3]"
                          aria-label="YouTube"
                        >
                          <Youtube size={16} />
                        </span>
                      )}
                      {talent.socials.twitter && (
                        <span
                          className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3]"
                          aria-label="Twitter"
                        >
                          <Twitter size={16} />
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Border Effect */}
                  <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
