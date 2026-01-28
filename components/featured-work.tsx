"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { talentRoster, PortfolioItem } from "@/lib/talent-data";

// Gather portfolio items from all active talent with their talent info
interface FeaturedWorkItem extends PortfolioItem {
  talentName: string;
  talentSlug: string;
}

const getAllPortfolioItems = (): FeaturedWorkItem[] => {
  const items: FeaturedWorkItem[] = [];
  
  // Get one item from each talent for variety
  talentRoster
    .filter((t) => t.active && t.portfolio && t.portfolio.length > 0)
    .forEach((talent) => {
      if (talent.portfolio && talent.portfolio[0]) {
        items.push({
          ...talent.portfolio[0],
          talentName: talent.name,
          talentSlug: talent.slug,
        });
      }
    });
  
  // Take first 6 items (deterministic order)
  return items.slice(0, 6);
};

const featuredWork = getAllPortfolioItems();

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden texture-grain">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-gradient opacity-30" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(212, 168, 83, 0.08) 0%, transparent 70%)' }} 
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
            Our Work
          </span>
          <h2
            className="heading-lg mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Recent <span className="text-gradient">Collaborations</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            A glimpse into the campaigns, editorials, and projects our talent has been part of.
          </p>
        </motion.div>

        {/* Work Grid - Masonry-style layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWork.map((item, index) => (
            <motion.div
              key={`${item.talentSlug}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${index === 0 || index === 3 ? 'sm:row-span-2' : ''}`}
            >
              <Link href={`/talent/${item.talentSlug}`}>
                <div className={`relative overflow-hidden rounded-lg ${index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />
                  
                  {/* Type & Brand Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-[#d4a853] uppercase tracking-wider">
                      {item.type}
                    </span>
                    {item.brand && (
                      <span className="text-[10px] px-2 py-1 bg-[#d4a853]/20 backdrop-blur-sm rounded text-[#f5f5f5] uppercase tracking-wider">
                        {item.brand}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm text-[#a3a3a3]">
                      featuring <span className="text-[#d4a853]">{item.talentName}</span>
                    </p>
                  </div>
                  
                  {/* Border Effect */}
                  <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/talent"
            className="text-[#d4a853] uppercase tracking-wider text-sm hover:text-[#e8c87a] transition-colors duration-300 link-hover inline-block"
          >
            View All Talent & Work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
