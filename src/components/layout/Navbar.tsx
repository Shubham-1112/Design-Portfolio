"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX, HiOutlineDownload } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/40 shadow-sm transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Home">
              <span className="font-signature italic text-lg sm:text-xl font-medium tracking-wide text-ink-900 transition-all duration-300 group-hover:text-ocean-500">
                shubham saurabh
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-ocean-600"
                        : "text-ink-600 hover:text-ink-900 hover:bg-surface-100"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-ocean-500"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="ShubhamSaurabh-Resume.pdf"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-ocean rounded-xl shadow-glass hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                Resume
                <HiOutlineDownload className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-ink-700 hover:bg-surface-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ink-900/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col pt-24 px-6 gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? "bg-ocean-50 text-ocean-600"
                            : "text-ink-700 hover:bg-surface-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4"
                >
                  <a
                    href="/resume.pdf"
                    download="ShubhamSaurabh-Resume.pdf"
                    className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-gradient-ocean rounded-xl shadow-glass flex items-center justify-center gap-2"
                  >
                    Resume
                    <HiOutlineDownload className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
