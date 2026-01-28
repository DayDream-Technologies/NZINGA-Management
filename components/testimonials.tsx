"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bradley Buter",
    role: "Model & Influencer",
    title: "Loyalty and Support",
    quote: "I came back to Nzinga MGMT because I've worked with them before and I trust them. They've always had my back, kept things real, and pushed me in the right direction. That kind of loyalty and support isn't easy to find, and it's why I knew I was in the right hands.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
  {
    name: "Hollis Mick",
    role: "Model & Influencer",
    title: "I saw results almost instantly",
    quote: "Nzinga MGMT offers a lot of great opportunities. Since joining, I've been connected with brands, creators, and projects I never thought I'd have access to. They really believe in their talent and go the extra mile to help us grow and succeed.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
  },
  {
    name: "Seth Mauer",
    role: "Influencer",
    title: "Family Atmosphere",
    quote: "Nzinga Management isn't just an agency; it's a family. The team's dedication to nurturing individual talent is unparalleled. Thanks to them, I've landed incredible opportunities and grown both personally and professionally.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  },
  {
    name: "Duncan Blue",
    role: "Content Creator",
    title: "A game-changer for my career",
    quote: "Nzinga Management goes beyond traditional representation. They understand my goals, push me to exceed them, and celebrate every success together. Gracing the stage with confidence, thanks to their unwavering support.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Noah Honeywell",
    role: "Actor",
    title: "True Management",
    quote: "I've had managers before, but none like this. Nzinga is strategic, honest, and always a step ahead when it comes to growing your career. They don't just talk — they deliver, and they make sure every move aligns with your long-term goals. I've grown more with them in months than I did in years elsewhere.",
    image: "https://images.unsplash.com/photo-1488161628813-04466f0016e0?w=400&h=400&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden texture-grain">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212, 168, 83, 0.06) 0%, transparent 60%)' }} 
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
            Testimonials
          </span>
          <h2
            className="heading-lg mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Don&apos;t Just Take Our <span className="text-gradient">Word For It</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Real feedback from clients we&apos;ve helped grow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-[#0a0a0a] rounded-lg border border-[#262626] hover:border-[#d4a853]/50 transition-colors duration-500 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-[#d4a853]/10 flex items-center justify-center mb-4">
                <Quote size={18} className="text-[#d4a853]" />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold text-[#d4a853] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className="text-[#a3a3a3] leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#262626]"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <p className="font-semibold text-[#f5f5f5]">{testimonial.name}</p>
                  <p className="text-xs text-[#a3a3a3]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
