"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import Testimonials from "@/components/testimonials";
import { getAssetPath } from "@/lib/utils";

const brands = [
  { name: "Isaiahs Hub", logo: getAssetPath("/brands/isaiahs-hub.png") },
  { name: "Dubby", logo: getAssetPath("/brands/dubby.png") },
  { name: "Prime Video", logo: getAssetPath("/brands/prime-video.png") },
  { name: "Meta", logo: getAssetPath("/brands/meta.png") },
  { name: "Royale Battlefield", logo: getAssetPath("/brands/royale-battlefield.png") },
];

const team = [
  {
    name: "Alexandra Nzinga",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Visionary leader with 15+ years in talent management and brand strategy.",
  },
  {
    name: "Michael Torres",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "Operations expert ensuring seamless experiences for talent and partners alike.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Talent Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Dedicated to nurturing talent and building lasting creator relationships.",
  },
  {
    name: "James Williams",
    role: "Director of Partnerships",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Connecting brands with creators for impactful, authentic collaborations.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="About Us"
        title={<>Shaping the Future of <span className="text-gradient">Creator Culture</span></>}
        description="NZINGA Management is more than an agency – we're a family of passionate professionals dedicated to elevating creators and building meaningful brand partnerships."
      />

      {/* Trusted Brands Section */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#262626]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-sm text-[#a3a3a3] uppercase tracking-[0.2em]">
              Trusted by leading brands
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center px-6 h-[60px] rounded-lg transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #d8d8d8 100%)' }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="object-contain h-[40px] w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Team Section */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Leadership
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 rounded-lg border border-[#262626] group-hover:border-[#d4a853]/50 transition-colors duration-500" />
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#d4a853] text-sm mb-2">{member.role}</p>
                <p className="text-[#a3a3a3] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Whether you&apos;re a creator looking for representation or a brand
              seeking partnerships, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="btn-primary">
                Join Our Roster
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
