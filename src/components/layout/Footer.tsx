"use client";

import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineArrowUp,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaLinkedinIn, FaBehance, FaInstagram, FaGithub } from "react-icons/fa";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/shubham-saurabh-919893217",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://www.behance.net/shubhamsaurabh1", icon: FaBehance, label: "Behance" },
  { href: "https://www.instagram.com/_shubham_saurabh_?igsh=MW1qYWlpbGV5em1uNw==", icon: FaInstagram, label: "Instagram" },
  { href: "https://github.com/Shubham-1112", icon: FaGithub, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white overflow-hidden" role="contentinfo">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/50 to-transparent pointer-events-none" />

      <div className="relative section-container">
        {/* Top section */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-ocean flex items-center justify-center">
                  <span className="text-white font-display text-lg font-bold">
                    S
                  </span>
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-sm">
                    Shubham Saurabh
                  </span>
                  <span className="block text-[11px] text-ink-400 tracking-wider uppercase">
                    UI/UX Designer
                  </span>
                </div>
              </div>
              <p className="text-ink-400 text-sm leading-relaxed max-w-sm">
                Crafting intuitive digital experiences through thoughtful design.
                Focused on creating products that users love.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold text-ink-400 tracking-widest uppercase mb-5">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold text-ink-400 tracking-widest uppercase mb-5">
                Get in touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:shubhamsaurabh1000@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    <HiOutlineMail className="w-4 h-4 text-ocean-400" />
                    shubhamsaurabh1000@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916201389298"
                    className="flex items-center gap-2.5 text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    <HiOutlinePhone className="w-4 h-4 text-ocean-400" />
                    +91 6201389298
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-ink-300">
                  <HiOutlineLocationMarker className="w-4 h-4 text-ocean-400" />
                  Gurgaon, India
                </li>
              </ul>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-ink-400 hover:text-white hover:bg-ocean-600 hover:border-ocean-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Shubham Saurabh. All rights reserved.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 text-xs text-ink-500 hover:text-ocean-400 transition-colors"
            aria-label="Back to top"
          >
            <HiOutlineArrowUp className="w-3.5 h-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
