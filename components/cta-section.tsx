"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-[#111111] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d4a853 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d4a853 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 rounded-full bg-[#d4a853]/10 flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="text-[#d4a853]" size={28} />
          </motion.div>

          <h2
            className="heading-lg mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Take Your Career to the{" "}
            <span className="text-gradient">Next Level?</span>
          </h2>

          <p className="text-lg md:text-xl text-[#a3a3a3] mb-10 max-w-2xl mx-auto">
            Join NZINGA Management and become part of an elite roster of creators
            and influencers. Let us help you unlock your full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/join"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact" className="btn-secondary inline-block">
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-[#262626]"
          >
            <p className="text-sm text-[#a3a3a3] mb-6 uppercase tracking-wider">
              Trusted by Leading Brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {/* Placeholder brand logos - in production, these would be actual brand images */}
              {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map(
                (brand, index) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-lg font-semibold text-[#a3a3a3] tracking-wider"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {brand}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
