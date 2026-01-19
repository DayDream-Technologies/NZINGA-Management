"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Award,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "NZINGA Management was founded with a vision to revolutionize talent representation in the digital age.",
  },
  {
    year: "2021",
    title: "Rapid Growth",
    description:
      "Expanded our roster to 10+ creators and secured our first major brand partnerships.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description:
      "Opened offices in New York and Atlanta, bringing our total to 5 nationwide locations.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description:
      "Named one of the top emerging talent agencies by multiple industry publications.",
  },
  {
    year: "2024",
    title: "Milestone Achievements",
    description:
      "Reached 20+ creators, 15+ brand partnerships, and expanded to 10 offices nationwide.",
  },
  {
    year: "2025",
    title: "The Future",
    description:
      "Continuing to innovate and lead the industry in creator representation and brand partnerships.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We're genuinely passionate about our creators' success and pour our hearts into every partnership.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty are at the core of everything we do. Your trust is our priority.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of industry trends to provide cutting-edge strategies for our talent.",
  },
  {
    icon: Globe,
    title: "Diversity",
    description:
      "We celebrate diverse voices and perspectives, believing they make our community stronger.",
  },
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

const offices = [
  { city: "Los Angeles", state: "CA", type: "Headquarters" },
  { city: "New York", state: "NY", type: "East Coast Hub" },
  { city: "Atlanta", state: "GA", type: "Southeast Office" },
  { city: "Chicago", state: "IL", type: "Midwest Office" },
  { city: "Miami", state: "FL", type: "Florida Office" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              About Us
            </span>
            <h1
              className="heading-xl mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Shaping the Future of{" "}
              <span className="text-gradient">Creator Culture</span>
            </h1>
            <p className="text-lg text-[#a3a3a3]">
              NZINGA Management is more than an agency – we&apos;re a family of
              passionate professionals dedicated to elevating creators and
              building meaningful brand partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
                Our Story
              </span>
              <h2
                className="heading-lg mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Built on a Foundation of{" "}
                <span className="text-gradient">Trust & Excellence</span>
              </h2>
              <div className="space-y-6 text-[#a3a3a3]">
                <p>
                  Founded in 2020, NZINGA Management emerged from a simple yet
                  powerful belief: every creator deserves representation that
                  truly understands their vision and fights for their success.
                </p>
                <p>
                  Our founder, Alexandra Nzinga, recognized a gap in the industry
                  – talented creators were being underserved by agencies that
                  treated them as numbers rather than individuals. She set out to
                  build something different.
                </p>
                <p>
                  Today, we represent over 20 creators and influencers, have
                  facilitated 15+ major brand partnerships, and operate from 10
                  offices nationwide. But our mission remains the same: to help
                  you form and create your own success, personally and
                  professionally.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Users, value: "20+", label: "Creators" },
                { icon: Award, value: "15+", label: "Brand Deals" },
                { icon: Globe, value: "10", label: "Offices" },
                { icon: TrendingUp, value: "50+", label: "Employees" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 bg-[#0a0a0a] rounded-lg border border-[#262626] text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#d4a853] mx-auto mb-4" />
                  <div
                    className="text-3xl font-bold text-gradient mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm text-[#a3a3a3] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Our Journey
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#262626] md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#d4a853] rounded-full md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="text-[#d4a853] font-bold text-lg">
                      {item.year}
                    </span>
                    <h3
                      className="text-xl font-semibold mt-2 mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#a3a3a3]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              What We Stand For
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#d4a853]/50 transition-colors duration-500 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4a853]/10 transition-colors duration-500">
                  <value.icon size={28} className="text-[#d4a853]" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
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

      {/* Offices Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Nationwide Presence
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Offices
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#d4a853]/50 transition-colors duration-500 text-center"
              >
                <MapPin className="w-6 h-6 text-[#d4a853] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">
                  {office.city}, {office.state}
                </h3>
                <p className="text-xs text-[#a3a3a3]">{office.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
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
