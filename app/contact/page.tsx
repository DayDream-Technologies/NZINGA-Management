"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Twitter,
  Youtube,
  Clock,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@nzingamgmt.com",
    href: "mailto:info@nzingamgmt.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 9AM - 6PM PST",
    href: null,
  },
];

const offices = [
  {
    city: "Los Angeles",
    address: "123 Sunset Blvd, Suite 500",
    state: "CA 90028",
  },
  {
    city: "New York",
    address: "456 Madison Ave, Floor 12",
    state: "NY 10022",
  },
  {
    city: "Atlanta",
    address: "789 Peachtree St NE",
    state: "GA 30308",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "TikTok" },
];

const inquiryTypes = [
  "General Inquiry",
  "Brand Partnership",
  "Talent Inquiry",
  "Press & Media",
  "Career Opportunities",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </span>
            <h1
              className="heading-xl mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s Start a{" "}
              <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-lg text-[#a3a3a3]">
              Whether you&apos;re a brand looking to partner, a creator seeking
              representation, or just want to say hello – we&apos;d love to hear
              from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#111111] rounded-2xl p-8 md:p-10 border border-[#262626]">
                <h2
                  className="text-2xl mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-[#d4a853] mx-auto mb-4" />
                    <h3
                      className="text-xl mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-[#a3a3a3]">
                      We&apos;ll get back to you within 24-48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                          placeholder="Your company"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-[#a3a3a3] mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-[#111111] rounded-2xl p-8 border border-[#262626]">
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#d4a853]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#a3a3a3] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#f5f5f5] hover:text-[#d4a853] transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#f5f5f5]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-[#262626]">
                  <p className="text-sm text-[#a3a3a3] mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-[#111111] rounded-2xl p-8 border border-[#262626]">
                <h3
                  className="text-xl mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-[#d4a853]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{office.city}</p>
                        <p className="text-sm text-[#a3a3a3]">
                          {office.address}
                          <br />
                          {office.state}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="heading-md"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find Us Nationwide
            </h2>
          </motion.div>

          {/* Placeholder Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-[#262626]"
          >
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#d4a853] mx-auto mb-4" />
                <p className="text-[#a3a3a3]">
                  Interactive map would be displayed here
                </p>
                <p className="text-sm text-[#666] mt-2">
                  10 offices across the United States
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
