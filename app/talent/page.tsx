"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/page-hero";
import TalentCard from "@/components/talent-card";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  talentRoster,
  Gender,
  ActivityCategory,
  categoryInfo,
  genderInfo,
} from "@/lib/talent-data";

const activityFilters: { value: ActivityCategory | "all"; label: string }[] = [
  { value: "all", label: "All Activities" },
  { value: "acting", label: "Acting" },
  { value: "modeling", label: "Modeling" },
  { value: "music", label: "Music" },
];

const genderFilters: { value: Gender | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "non-binary", label: "Non-Binary" },
];

export default function TalentPage() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityCategory | "all">("all");
  const [selectedGender, setSelectedGender] = useState<Gender | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTalent = useMemo(() => {
    return talentRoster.filter((talent) => {
      if (!talent.active) return false;

      // Activity filter
      const matchesActivity =
        selectedActivity === "all" || talent.categories.includes(selectedActivity);

      // Gender filter
      const matchesGender =
        selectedGender === "all" || talent.gender === selectedGender;

      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.categories.some((cat) =>
          categoryInfo[cat].label.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        talent.shortBio.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesActivity && matchesGender && matchesSearch;
    });
  }, [selectedActivity, selectedGender, searchQuery]);

  const clearFilters = () => {
    setSelectedActivity("all");
    setSelectedGender("all");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedActivity !== "all" || selectedGender !== "all" || searchQuery !== "";

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Our Roster"
        title={<>Meet Our <span className="text-gradient">Talent</span></>}
        description="Discover our diverse roster of actors, models, and musicians who are shaping culture and creating unforgettable moments."
        compact
      />

      {/* Filters Section */}
      <section className="pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                />
                <input
                  type="text"
                  placeholder="Search by name or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#a3a3a3] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Results Count & Clear Filters */}
              <div className="flex items-center gap-4 text-sm">
                <span className="text-[#a3a3a3]">
                  Showing <span className="text-[#d4a853]">{filteredTalent.length}</span> result
                  {filteredTalent.length !== 1 ? "s" : ""}
                </span>
                {hasActiveFilters && (
                  <>
                    <span className="text-[#262626]">|</span>
                    <button
                      onClick={clearFilters}
                      className="text-[#d4a853] hover:text-[#e8c87a] transition-colors duration-300 underline underline-offset-4"
                    >
                      Clear Filters
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 bg-[#111111] rounded-xl border border-[#262626]">
              <div className="flex items-center gap-3">
                <SlidersHorizontal size={18} className="text-[#d4a853]" />
                <span className="text-sm uppercase tracking-wider text-[#a3a3a3]">
                  Filters
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                {/* Activity Filter */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-[#a3a3a3]">
                    Activity
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {activityFilters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setSelectedActivity(filter.value)}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                          selectedActivity === filter.value
                            ? "bg-[#d4a853] text-[#0a0a0a]"
                            : "bg-[#0a0a0a] text-[#a3a3a3] border border-[#262626] hover:border-[#d4a853] hover:text-[#d4a853]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wider text-[#a3a3a3]">
                    Gender
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {genderFilters.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setSelectedGender(filter.value)}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                          selectedGender === filter.value
                            ? "bg-[#d4a853] text-[#0a0a0a]"
                            : "bg-[#0a0a0a] text-[#a3a3a3] border border-[#262626] hover:border-[#d4a853] hover:text-[#d4a853]"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          {filteredTalent.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
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
              <p className="text-[#a3a3a3] text-lg mb-4">
                No talent found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="text-[#d4a853] hover:text-[#e8c87a] transition-colors duration-300"
              >
                Clear all filters
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
              We&apos;re always looking for talented individuals in acting, modeling,
              and music to join our family. If you think you have what it takes,
              we&apos;d love to hear from you.
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
