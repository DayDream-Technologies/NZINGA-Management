"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Youtube, MapPin } from "lucide-react";
import XIcon from "@/components/icons/x-icon";

const footerLinks = [
  { href: "/talent", label: "Talent" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join Us" },
];

const socialLinks = [
  { href: "https://instagram.com/nzingamgmt", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/nzingamgmt", icon: XIcon, label: "X", isCustom: true },
  { href: "https://tiktok.com/@nzingamgmt", icon: Youtube, label: "TikTok" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="container-custom py-10 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/">
              <span
                className="text-2xl font-bold tracking-wider text-gradient"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                NZINGA
              </span>
            </Link>
            <span className="hidden sm:block text-[#262626]">|</span>
            <p className="text-sm text-[#a3a3a3]">
              © {currentYear} NZINGA Management. All Rights Reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
