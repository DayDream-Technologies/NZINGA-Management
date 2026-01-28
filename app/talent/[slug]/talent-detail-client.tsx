"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Instagram,
  Youtube,
  Music,
  Globe,
  MapPin,
  Calendar,
  Ruler,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Users,
  Heart,
  CreditCard,
} from "lucide-react";
import XIcon from "@/components/icons/x-icon";
import { TalentPerson, calculateAge, categoryInfo, PortfolioItem } from "@/lib/talent-data";

interface TalentDetailClientProps {
  talent: TalentPerson;
}

// Generate consistent fake metrics based on talent ID
function generateMetrics(talentId: string) {
  const seed = parseInt(talentId) || 1;
  const videoViews = Math.floor((seed * 127 + 350) % 900 + 100); // 100K - 999K
  const followers = Math.floor((seed * 89 + 15) % 85 + 15); // 15K - 99K  
  const likes = Math.floor((seed * 213 + 800) % 1400 + 600); // 600K - 2M
  
  return {
    videoViews: videoViews >= 1000 ? `${(videoViews / 1000).toFixed(1)}M` : `${videoViews}K`,
    followers: followers >= 100 ? `${(followers / 10).toFixed(1)}M` : `${followers}.${(seed % 10)}K`,
    likes: likes >= 1000 ? `${(likes / 1000).toFixed(1)}M` : `${likes}K`,
  };
}

export default function TalentDetailClient({ talent }: TalentDetailClientProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const age = calculateAge(talent.birthDate);
  const metrics = generateMetrics(talent.id);

  const openLightbox = (index: number) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) =>
        prev !== null ? (prev + 1) % talent.photos.length : 0
      );
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) =>
        prev !== null ? (prev - 1 + talent.photos.length) % talent.photos.length : 0
      );
    }
  };

  const socialLinks = [
    { key: "instagram", icon: Instagram, url: talent.socials.instagram, label: "Instagram" },
    { key: "tiktok", icon: Music, url: talent.socials.tiktok, label: "TikTok" },
    { key: "youtube", icon: Youtube, url: talent.socials.youtube, label: "YouTube" },
    { key: "twitter", icon: XIcon, url: talent.socials.twitter, label: "X" },
    { key: "spotify", icon: Music, url: talent.socials.spotify, label: "Spotify" },
    { key: "website", icon: Globe, url: talent.socials.website, label: "Website" },
  ].filter((link) => link.url);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-[#d4a853] transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span className="text-sm uppercase tracking-wider">Back to Roster</span>
          </Link>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Photos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Photo */}
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${talent.photos[0]})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-xs text-[#a3a3a3] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to enlarge
                </div>
              </div>

              {/* Photo Grid */}
              {talent.photos.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {talent.photos.slice(1, 4).map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${photo})` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {talent.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1.5 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-full text-[#d4a853] uppercase tracking-wider"
                  >
                    {categoryInfo[cat].label}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {talent.name}
              </h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-[#111111] rounded-lg border border-[#262626]">
                  <Calendar size={18} className="text-[#d4a853] mb-2" />
                  <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">
                    Age
                  </p>
                  <p className="text-lg font-semibold">{age}</p>
                </div>
                {talent.height && (
                  <div className="p-4 bg-[#111111] rounded-lg border border-[#262626]">
                    <Ruler size={18} className="text-[#d4a853] mb-2" />
                    <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">
                      Height
                    </p>
                    <p className="text-lg font-semibold">{talent.height}</p>
                  </div>
                )}
                {talent.location && (
                  <div className="p-4 bg-[#111111] rounded-lg border border-[#262626] col-span-2 sm:col-span-1">
                    <MapPin size={18} className="text-[#d4a853] mb-2" />
                    <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mb-1">
                      Based In
                    </p>
                    <p className="text-lg font-semibold">{talent.location}</p>
                  </div>
                )}
              </div>

              {/* Social Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-lg border border-[#262626] text-center">
                  <Play size={20} className="text-[#d4a853] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#f5f5f5]">{metrics.videoViews}</p>
                  <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mt-1">
                    Video Views
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-lg border border-[#262626] text-center">
                  <Users size={20} className="text-[#d4a853] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#f5f5f5]">{metrics.followers}</p>
                  <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mt-1">
                    Followers
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-lg border border-[#262626] text-center">
                  <Heart size={20} className="text-[#d4a853] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#f5f5f5]">{metrics.likes}</p>
                  <p className="text-xs text-[#a3a3a3] uppercase tracking-wider mt-1">
                    Likes
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h2
                  className="text-xl mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  About
                </h2>
                <p className="text-[#a3a3a3] leading-relaxed">{talent.fullBio}</p>
              </div>

              {/* Social Links / Connect */}
              <div>
                <h2
                  className="text-xl mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Connect
                </h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-[#262626] rounded-lg text-[#a3a3a3] hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-300"
                    >
                      <link.icon size={18} />
                      <span className="text-sm">{link.label}</span>
                    </motion.a>
                  ))}
                  <motion.a
                    href="https://cloud-cards.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-[#262626] rounded-lg text-[#a3a3a3] hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-300"
                  >
                    <CreditCard size={18} />
                    <span className="text-sm">Cloud Cards</span>
                  </motion.a>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="pt-6 border-t border-[#262626]">
                <p className="text-sm text-[#a3a3a3] mb-4">
                  Interested in booking {talent.name.split(" ")[0]}?
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio & Work Section */}
      {talent.portfolio && talent.portfolio.length > 0 && (
        <section className="section-padding pt-0 bg-[#0a0a0a]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
                <h2
                  className="text-2xl md:text-3xl text-center"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Portfolio & Work
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
              </div>
              
              {/* Notable Work Tags */}
              {talent.notableWork && talent.notableWork.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {talent.notableWork.map((work, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1.5 bg-[#111111] border border-[#262626] rounded text-[#a3a3a3] uppercase tracking-wider"
                    >
                      {work}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talent.portfolio.map((item: PortfolioItem, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#d4a853]/0 group-hover:bg-[#d4a853]/10 transition-colors duration-500" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] px-2 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-[#d4a853] uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                        {item.title}
                      </p>
                      {item.brand && (
                        <p className="text-sm text-[#d4a853]">{item.brand}</p>
                      )}
                    </div>
                    
                    {/* Border Effect */}
                    <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300 z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Navigation */}
            {talent.photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-4 md:left-8 p-3 text-[#a3a3a3] hover:text-[#d4a853] transition-colors duration-300 z-10"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-4 md:right-8 p-3 text-[#a3a3a3] hover:text-[#d4a853] transition-colors duration-300 z-10"
                  aria-label="Next photo"
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedPhotoIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={talent.photos[selectedPhotoIndex]}
                alt={`${talent.name} - Photo ${selectedPhotoIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm rounded text-sm text-[#a3a3a3]">
                {selectedPhotoIndex + 1} / {talent.photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
