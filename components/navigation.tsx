"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const navLinks = [
  { href: "/talent", label: "Talent" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if link is active (exact match or starts with for nested routes like /talent/[slug])
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <Image
                  src={getAssetPath("/logo.avif")}
                  alt="NZINGA Management"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest transition-colors duration-300 link-hover ${
                    isActive(link.href)
                      ? "text-[#d4a853]"
                      : "text-[#a3a3a3] hover:text-[#f5f5f5]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/join" className={isActive("/join") ? "btn-primary ring-2 ring-[#d4a853]" : "btn-primary"}>
                Join Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 text-[#f5f5f5]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#111111] border-l border-[#262626] flex flex-col justify-center px-8"
            >
              <div className="space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-2xl uppercase tracking-widest transition-colors duration-300 ${
                        isActive(link.href)
                          ? "text-[#d4a853]"
                          : "text-[#a3a3a3] hover:text-[#d4a853]"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href="/join"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary inline-block mt-4"
                  >
                    Join Us
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
