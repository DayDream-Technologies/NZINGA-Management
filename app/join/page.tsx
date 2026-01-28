"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/page-hero";
import {
  User,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Twitter,
  Link as LinkIcon,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Social Presence", icon: Instagram },
  { id: 3, title: "About You", icon: FileText },
];

const categories = [
  "Lifestyle",
  "Tech",
  "Fashion & Beauty",
  "Fitness & Wellness",
  "Entertainment",
  "Gaming",
  "Food & Travel",
  "Education",
  "Music",
  "Other",
];

const followerRanges = [
  "Under 10K",
  "10K - 50K",
  "50K - 100K",
  "100K - 500K",
  "500K - 1M",
  "1M+",
];

const benefits = [
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Personal managers who understand your unique brand and goals.",
  },
  {
    icon: TrendingUp,
    title: "Brand Partnerships",
    description: "Access to exclusive deals with top-tier brands worldwide.",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Strategic guidance to expand your reach and influence.",
  },
  {
    icon: Sparkles,
    title: "Creative Support",
    description: "Resources and tools to elevate your content quality.",
  },
];

const testimonials = [
  {
    name: "Maya Johnson",
    role: "Lifestyle Creator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    quote:
      "Joining NZINGA was the best decision for my career. They truly understand creators.",
  },
  {
    name: "Marcus Chen",
    role: "Tech Influencer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "The team's dedication and expertise helped me land partnerships I never thought possible.",
  },
];

export default function JoinPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    // Step 2
    instagram: "",
    tiktok: "",
    youtube: "",
    twitter: "",
    website: "",
    followerCount: "",
    // Step 3
    category: "",
    bio: "",
    whyJoin: "",
    goals: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.location
        );
      case 2:
        return formData.instagram && formData.followerCount;
      case 3:
        return formData.category && formData.bio && formData.whyJoin;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Join Our Family"
        title={<>Ready to Elevate Your <span className="text-gradient">Career?</span></>}
        description="Apply to join NZINGA Management and unlock your full potential as a creator. We're looking for passionate individuals ready to take their career to the next level."
        compact
      />

      {/* Benefits Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[#111111] rounded-xl border border-[#262626] text-center"
              >
                <benefit.icon className="w-8 h-8 text-[#d4a853] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#a3a3a3]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111111] rounded-2xl p-12 border border-[#262626] text-center"
              >
                <CheckCircle className="w-20 h-20 text-[#d4a853] mx-auto mb-6" />
                <h2
                  className="text-3xl mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Application Submitted!
                </h2>
                <p className="text-[#a3a3a3] text-lg mb-8 max-w-md mx-auto">
                  Thank you for your interest in joining NZINGA Management.
                  We&apos;ll review your application and get back to you within
                  5-7 business days.
                </p>
                <a href="/" className="btn-primary inline-block">
                  Return Home
                </a>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#111111] rounded-2xl p-8 md:p-10 border border-[#262626]"
              >
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-10">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-center"
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
                          currentStep >= step.id
                            ? "bg-[#d4a853] border-[#d4a853] text-[#0a0a0a]"
                            : "border-[#262626] text-[#a3a3a3]"
                        }`}
                      >
                        <step.icon size={18} />
                      </div>
                      <span
                        className={`ml-3 text-sm hidden sm:block ${
                          currentStep >= step.id
                            ? "text-[#f5f5f5]"
                            : "text-[#a3a3a3]"
                        }`}
                      >
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <div
                          className={`w-12 lg:w-24 h-px mx-4 transition-colors duration-300 ${
                            currentStep > step.id
                              ? "bg-[#d4a853]"
                              : "bg-[#262626]"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {/* Step 1: Personal Info */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2
                          className="text-2xl mb-6"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          Personal Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm text-[#a3a3a3] mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail
                              size={18}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                            />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Phone Number
                            </label>
                            <div className="relative">
                              <Phone
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="(123) 456-7890"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Location *
                            </label>
                            <input
                              type="text"
                              name="location"
                              required
                              value={formData.location}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                              placeholder="City, State"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Social Presence */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2
                          className="text-2xl mb-6"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          Social Media Presence
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Instagram Handle *
                            </label>
                            <div className="relative">
                              <Instagram
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="text"
                                name="instagram"
                                required
                                value={formData.instagram}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="@username"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              TikTok Handle
                            </label>
                            <div className="relative">
                              <Youtube
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="text"
                                name="tiktok"
                                value={formData.tiktok}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="@username"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              YouTube Channel
                            </label>
                            <div className="relative">
                              <Youtube
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="text"
                                name="youtube"
                                value={formData.youtube}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="Channel URL"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Twitter / X Handle
                            </label>
                            <div className="relative">
                              <Twitter
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="text"
                                name="twitter"
                                value={formData.twitter}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="@username"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Personal Website
                            </label>
                            <div className="relative">
                              <LinkIcon
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3]"
                              />
                              <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300"
                                placeholder="https://yoursite.com"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[#a3a3a3] mb-2">
                              Total Follower Count *
                            </label>
                            <select
                              name="followerCount"
                              required
                              value={formData.followerCount}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Select range
                              </option>
                              {followerRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: About You */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2
                          className="text-2xl mb-6"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          Tell Us About Yourself
                        </h2>

                        <div>
                          <label className="block text-sm text-[#a3a3a3] mb-2">
                            Content Category *
                          </label>
                          <select
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select your primary category
                            </option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm text-[#a3a3a3] mb-2">
                            Bio / About You *
                          </label>
                          <textarea
                            name="bio"
                            required
                            rows={3}
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 resize-none"
                            placeholder="Tell us about yourself and your content..."
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-[#a3a3a3] mb-2">
                            Why do you want to join NZINGA? *
                          </label>
                          <textarea
                            name="whyJoin"
                            required
                            rows={3}
                            value={formData.whyJoin}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 resize-none"
                            placeholder="What draws you to our agency?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-[#a3a3a3] mb-2">
                            Career Goals
                          </label>
                          <textarea
                            name="goals"
                            rows={3}
                            value={formData.goals}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#666] focus:border-[#d4a853] focus:outline-none transition-colors duration-300 resize-none"
                            placeholder="Where do you see yourself in 2-3 years?"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-10 pt-6 border-t border-[#262626]">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <ArrowLeft size={18} />
                        Previous
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepValid()}
                        className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ArrowRight size={18} />
                      </button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={!isStepValid() || isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <CheckCircle size={18} />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-[#111111]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-[#d4a853] mb-4 block">
              Success Stories
            </span>
            <h2
              className="heading-md"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hear From Our Talent
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-[#0a0a0a] rounded-xl border border-[#262626]"
              >
                <p className="text-lg text-[#a3a3a3] italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-[#d4a853]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
