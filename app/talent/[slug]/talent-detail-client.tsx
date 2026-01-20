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
} from "lucide-react";
import XIcon from "@/components/icons/x-icon";
import { TalentPerson, calculateAge, categoryInfo } from "@/lib/talent-data";

interface TalentDetailClientProps {
  talent: TalentPerson;
}

export default function TalentDetailClient({ talent }: TalentDetailClientProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const age = calculateAge(talent.birthDate);

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

              {/* Social Links */}
              {socialLinks.length > 0 && (
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
                  </div>
                </div>
              )}

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
