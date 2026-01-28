"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import {
  Handshake,
  TrendingUp,
  Share2,
  FileText,
  Megaphone,
  Calendar,
  Users,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description:
      "We connect our talent with brands that align with their values and audience. From sponsored content to long-term ambassadorships, we negotiate deals that benefit everyone.",
    features: ["Brand matching", "Deal negotiation", "Campaign coordination", "Performance tracking"],
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Strategic guidance for long-term career growth. We help you build a sustainable career path with clear milestones and opportunities for advancement.",
    features: ["Career roadmapping", "Skill development", "Industry positioning", "Growth strategy"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Content strategy and platform optimization to maximize your reach and engagement. We help you build and maintain a strong digital presence.",
    features: ["Content strategy", "Platform optimization", "Audience growth", "Analytics & insights"],
  },
  {
    icon: FileText,
    title: "Contract Negotiation",
    description:
      "Expert representation in all business dealings. We ensure you get fair terms and protect your interests in every agreement.",
    features: ["Deal structuring", "Legal review", "Rights protection", "Payment terms"],
  },
  {
    icon: Megaphone,
    title: "Public Relations",
    description:
      "Media relations and reputation management to elevate your public profile. We help you tell your story and connect with the right audiences.",
    features: ["Media outreach", "Press releases", "Crisis management", "Brand storytelling"],
  },
  {
    icon: Calendar,
    title: "Event Booking",
    description:
      "Live appearances, hosting opportunities, and event coordination. We secure bookings that enhance your visibility and earning potential.",
    features: ["Appearance booking", "Event hosting", "Meet & greets", "Tour coordination"],
  },
];

const stats = [
  { value: "20+", label: "Creators Managed" },
  { value: "15+", label: "Brand Partnerships" },
  { value: "50+", label: "Successful Campaigns" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Our Services"
        title={<>Everything You Need to <span className="text-gradient">Succeed</span></>}
        description="Comprehensive talent management services designed to elevate your career, maximize your opportunities, and help you achieve your goals."
      />

      {/* Stats Section */}
      <section className="py-12 bg-[#111111] border-y border-[#262626]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-[#a3a3a3] uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Full-Service Management
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-[#111111] rounded-lg border border-[#262626] hover:border-[#d4a853]/50 transition-all duration-500 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-[#0a0a0a] flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/10 transition-colors duration-500">
                  <service.icon size={28} className="text-[#d4a853]" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How It Works
            </span>
            <h2
              className="heading-lg"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Users,
                title: "Discovery",
                description: "We get to know you, your goals, and your unique strengths to create a personalized strategy.",
              },
              {
                step: "02",
                icon: Target,
                title: "Strategy",
                description: "Together, we develop a comprehensive plan to achieve your short-term and long-term objectives.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Execution",
                description: "We put the plan into action, continuously optimizing and adapting to maximize your success.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-8 bg-[#0a0a0a] rounded-lg border border-[#262626] text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a853] rounded text-[#0a0a0a] font-bold text-sm">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center mx-auto mb-6 mt-4">
                  <item.icon size={32} className="text-[#d4a853]" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  {item.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Join NZINGA Management and let us help you reach your full potential.
              Apply today or get in touch to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="btn-primary">
                Apply Now
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
