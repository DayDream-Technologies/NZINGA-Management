"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TalentCard, { TalentData } from "@/components/talent-card";
import { Search, Filter } from "lucide-react";

const categories = [
  "All",
  "Lifestyle",
  "Tech",
  "Fashion & Beauty",
  "Fitness",
  "Entertainment",
  "Gaming",
  "Food & Travel",
];

const talentRoster: TalentData[] = [
  {
    id: "1",
    name: "Maya Johnson",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    followers: "2.5M",
    bio: "Lifestyle creator sharing authentic moments and inspiring daily content.",
    tags: ["Lifestyle", "Wellness", "Travel"],
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
  {
    id: "2",
    name: "Marcus Chen",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    followers: "1.8M",
    bio: "Tech enthusiast breaking down the latest innovations for everyone.",
    tags: ["Tech", "Reviews", "Innovation"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    id: "3",
    name: "Aria Williams",
    category: "Fashion & Beauty",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    followers: "3.2M",
    bio: "Fashion forward creator setting trends and inspiring confidence.",
    tags: ["Fashion", "Beauty", "Style"],
    socials: { instagram: "#", youtube: "#" },
  },
  {
    id: "4",
    name: "Jordan Davis",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    followers: "1.5M",
    bio: "Fitness coach helping millions achieve their health goals.",
    tags: ["Fitness", "Wellness", "Motivation"],
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
  {
    id: "5",
    name: "Zoe Martinez",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
    followers: "4.1M",
    bio: "Entertainer bringing joy and laughter to audiences worldwide.",
    tags: ["Comedy", "Entertainment", "Vlogs"],
    socials: { instagram: "#", twitter: "#", youtube: "#", tiktok: "#" },
  },
  {
    id: "6",
    name: "Tyler Brooks",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
    followers: "2.8M",
    bio: "Pro gamer and streamer with a passion for competitive gaming.",
    tags: ["Gaming", "Esports", "Streaming"],
    socials: { twitter: "#", youtube: "#", tiktok: "#" },
  },
  {
    id: "7",
    name: "Sophia Lee",
    category: "Food & Travel",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    followers: "1.9M",
    bio: "Culinary explorer discovering flavors from around the world.",
    tags: ["Food", "Travel", "Culture"],
    socials: { instagram: "#", youtube: "#" },
  },
  {
    id: "8",
    name: "David Kim",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
    followers: "1.2M",
    bio: "Software engineer turned content creator, demystifying code.",
    tags: ["Tech", "Coding", "Education"],
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
  {
    id: "9",
    name: "Emma Thompson",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
    followers: "2.1M",
    bio: "Sharing the art of mindful living and sustainable choices.",
    tags: ["Lifestyle", "Sustainability", "Mindfulness"],
    socials: { instagram: "#", youtube: "#" },
  },
  {
    id: "10",
    name: "Chris Anderson",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    followers: "980K",
    bio: "Personal trainer specializing in transformation journeys.",
    tags: ["Fitness", "Training", "Nutrition"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    id: "11",
    name: "Nina Patel",
    category: "Fashion & Beauty",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
    followers: "1.6M",
    bio: "Beauty guru with a focus on inclusive and diverse beauty standards.",
    tags: ["Beauty", "Skincare", "Makeup"],
    socials: { instagram: "#", youtube: "#", tiktok: "#" },
  },
  {
    id: "12",
    name: "Alex Rivera",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop",
    followers: "3.5M",
    bio: "Multi-talented creator blending music, comedy, and storytelling.",
    tags: ["Music", "Comedy", "Storytelling"],
    socials: { instagram: "#", twitter: "#", youtube: "#" },
  },
];

export default function TalentPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTalent = talentRoster.filter((talent) => {
    const matchesCategory =
      selectedCategory === "All" || talent.category === selectedCategory;
    const matchesSearch =
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="section-padding pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Our Roster
            </span>
            <h1
              className="heading-xl mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Our <span className="text-gradient">Talent</span>
            </h1>
            <p className="text-lg text-[#a3a3a3]">
              Discover our diverse roster of creators and influencers who are
              shaping culture and driving engagement across platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
              />
              <input
                type="text"
                placeholder="Search talent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#a3a3a3] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              <Filter size={18} className="text-[#a3a3a3] mr-2 hidden lg:block self-center" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#d4a853] text-[#0a0a0a]"
                      : "bg-[#111111] text-[#a3a3a3] border border-[#262626] hover:border-[#d4a853] hover:text-[#d4a853]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          {filteredTalent.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTalent.map((talent, index) => (
                <TalentCard key={talent.id} talent={talent} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#a3a3a3] text-lg">
                No talent found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-[#d4a853] hover:text-[#e8c87a] transition-colors duration-300"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2
              className="heading-md mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Want to Join Our Roster?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              We&apos;re always looking for talented creators to join our family.
              If you think you have what it takes, we&apos;d love to hear from you.
            </p>
            <a href="/join" className="btn-primary inline-block">
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
