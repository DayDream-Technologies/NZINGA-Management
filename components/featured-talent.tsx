"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

interface TalentMember {
  id: string;
  name: string;
  category: string;
  image: string;
  followers: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const featuredTalent: TalentMember[] = [
  {
    id: "1",
    name: "Maya Johnson",
    category: "Lifestyle Creator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    followers: "2.5M",
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
  {
    id: "2",
    name: "Marcus Chen",
    category: "Tech Influencer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    followers: "1.8M",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    id: "3",
    name: "Aria Williams",
    category: "Fashion & Beauty",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    followers: "3.2M",
    socials: { instagram: "#", youtube: "#" },
  },
  {
    id: "4",
    name: "Jordan Davis",
    category: "Fitness & Wellness",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    followers: "1.5M",
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
];

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
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${talent.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-wider text-[#d4a853] mb-2 block">
                    {talent.category}
                  </span>
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {talent.name}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] mb-4">
                    {talent.followers} followers
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {talent.socials.instagram && (
                      <a
                        href={talent.socials.instagram}
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                    {talent.socials.twitter && (
                      <a
                        href={talent.socials.twitter}
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {talent.socials.youtube && (
                      <a
                        href={talent.socials.youtube}
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#a3a3a3] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-colors duration-300"
                        aria-label="YouTube"
                      >
                        <Youtube size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Border Effect */}
                <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
