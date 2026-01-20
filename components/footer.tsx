"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Youtube, MapPin } from "lucide-react";
import XIcon from "@/components/icons/x-icon";

const footerLinks = {
  navigation: [
    { href: "/talent", label: "Talent" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/join", label: "Join Us" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/nzingamgmt", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/nzingamgmt", icon: XIcon, label: "X", isCustom: true },
  { href: "https://tiktok.com/@nzingamgmt", icon: Youtube, label: "TikTok" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span
                className="text-3xl font-bold tracking-wider text-gradient"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                NZINGA
              </span>
            </Link>
            <p className="mt-6 text-[#a3a3a3] max-w-md leading-relaxed">
              Our mission is to help you form and create your own success
              personally and professionally. We represent the next generation of
              creators and influencers.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    <social.icon size={18} />
                  ) : (
                    <social.icon size={18} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4a853] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4a853] mb-6">
              Locations
            </h4>
            <div className="flex items-start gap-3 text-[#a3a3a3]">
              <MapPin size={16} className="text-[#d4a853] mt-1 flex-shrink-0" />
              <span>
                Los Angeles, CA
                <br />
                New York, NY
                <br />
                Atlanta, GA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#262626]">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#a3a3a3]">
            © {currentYear} NZINGA Management. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
