"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import XIcon from "@/components/icons/x-icon";

const footerLinks = [
  { href: "/talent", label: "Talent" },
  { href: "/services", label: "Services" },
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
    <footer className="bg-[#0a0a0a] border-t border-[#d4a853]/20">
      <div className="container-custom py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.avif"
                alt="NZINGA Management"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <span className="hidden sm:block text-[#d4a853]/30">|</span>
            <p className="text-sm text-[#a3a3a3]">
              © {currentYear} <span className="text-[#d4a853]">NZINGA</span> Management. All Rights Reserved.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a3a3a3] hover:text-[#d4a853] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-[#d4a853]/30 flex items-center justify-center text-[#d4a853]/70 hover:border-[#d4a853] hover:text-[#d4a853] hover:bg-[#d4a853]/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
